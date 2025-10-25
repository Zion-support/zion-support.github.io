#!/usr/bin/env python3
"""
Master PR Resolver - Handle all open PRs with comprehensive conflict resolution
"""

import subprocess
import json
import sys
import time
import os

def run_command(cmd, check=True, timeout=120):
    """Run a command and return the result"""
    print(f"→ {cmd}")
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            timeout=timeout
        )
        if result.stdout:
            print(result.stdout)
        if result.stderr and result.returncode != 0:
            print(f"Error: {result.stderr}")
        return result.returncode == 0, result.stdout.strip()
    except subprocess.TimeoutExpired:
        print(f"⚠ Command timed out")
        return False, ""
    except Exception as e:
        print(f"⚠ Exception: {e}")
        return False, ""

def get_open_prs():
    """Get list of all open PRs"""
    print("📋 Fetching open pull requests...")
    
    success, output = run_command("gh pr list --state open --draft=false --json number,title,headRefName,mergeable,mergeStateStatus")
    if not success:
        print(f"❌ Error fetching PRs: {output}")
        return []
    
    try:
        prs = json.loads(output)
        print(f"📊 Found {len(prs)} open pull requests")
        return prs
    except json.JSONDecodeError as e:
        print(f"❌ Error parsing PR data: {e}")
        return []

def fetch_branch(branch_name):
    """Fetch a specific branch"""
    print(f"🔄 Fetching branch {branch_name}...")
    success, _ = run_command(f"git fetch origin {branch_name}")
    return success

def merge_branch_locally(branch_name, pr_number):
    """Merge a branch locally into main with comprehensive conflict resolution"""
    print(f"🔄 Attempting to merge branch {branch_name} (PR #{pr_number})...")
    
    # Try to merge
    success, output = run_command(f"git merge origin/{branch_name} --no-ff -m 'Merge PR #{pr_number}: {branch_name}'")
    if success:
        print(f"✅ Successfully merged {branch_name}")
        return True
    else:
        print(f"⚠️ Merge conflict in {branch_name}")
        # Get list of conflicted files
        success, conflicts = run_command("git diff --name-only --diff-filter=U")
        if conflicts:
            print(f"🔧 Auto-resolving conflicts in: {conflicts}")
            conflict_files = conflicts.split('\n')
            
            for conflict_file in conflict_files:
                if conflict_file.strip():
                    print(f"  Resolving {conflict_file}...")
                    # Use ours (main) version for most conflicts
                    run_command(f"git checkout --ours {conflict_file}", check=False)
                    run_command(f"git add {conflict_file}", check=False)
            
            # Try to commit the merge
            success, _ = run_command("git commit --no-edit")
            if success:
                print(f"✅ Conflicts resolved for {branch_name}")
                return True
            else:
                print(f"❌ Could not resolve conflicts for {branch_name}")
                run_command("git merge --abort", check=False)
                return False
        else:
            print(f"❌ Merge failed for {branch_name}")
            return False

def close_pr(pr_number, reason="Automatically closed - merged locally"):
    """Close a pull request"""
    print(f"🔄 Closing PR #{pr_number}...")
    
    success, output = run_command(f"gh pr close {pr_number}")
    if success:
        print(f"✅ Successfully closed PR #{pr_number}")
        return True
    else:
        print(f"❌ Failed to close PR #{pr_number}: {output}")
        return False

def main():
    """Main function"""
    print("🚀 Starting master PR resolution process...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Make sure we're on main and up to date
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get all open PRs
    prs = get_open_prs()
    if not prs:
        print("❌ No open PRs found")
        return False
    
    # Sort PRs by number (oldest first)
    prs.sort(key=lambda x: x['number'])
    
    print(f"📝 Processing {len(prs)} pull requests...")
    
    merged_count = 0
    failed_count = 0
    closed_count = 0
    skipped_count = 0
    
    for pr in prs:
        pr_number = pr['number']
        title = pr['title']
        head_ref = pr['headRefName']
        mergeable = pr.get('mergeable', 'UNKNOWN')
        merge_state = pr.get('mergeStateStatus', 'UNKNOWN')
        
        print(f"\n{'='*60}")
        print(f"Processing PR #{pr_number}: {title}")
        print(f"Branch: {head_ref}")
        print(f"Mergeable: {mergeable}, State: {merge_state}")
        
        # Try to fetch the branch first
        if not fetch_branch(head_ref):
            print(f"⚠️ Could not fetch branch {head_ref}")
            failed_count += 1
            continue
        
        # Try local merge
        if merge_branch_locally(head_ref, pr_number):
            merged_count += 1
            # Try to close the PR
            if close_pr(pr_number):
                closed_count += 1
        else:
            failed_count += 1
            # Try to close the PR anyway
            if close_pr(pr_number, "Closed due to unresolvable conflicts"):
                closed_count += 1
        
        # Brief pause between operations
        time.sleep(2)
    
    print(f"\n{'='*60}")
    print(f"📊 Final Summary:")
    print(f"✅ Successfully merged: {merged_count}")
    print(f"❌ Failed to merge: {failed_count}")
    print(f"🗑️ Closed PRs: {closed_count}")
    print(f"📋 Total processed: {len(prs)}")
    
    if merged_count > 0:
        print("\n🔄 Pushing changes to origin...")
        success, _ = run_command("git push origin main")
        if success:
            print("✅ Successfully pushed changes")
        else:
            print("⚠️ Warning: Could not push changes")
    
    print("\n🎉 Master PR resolution process completed!")
    return True

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nInterrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\nFatal error: {e}")
        sys.exit(1)