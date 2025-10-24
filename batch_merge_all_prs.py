#!/usr/bin/env python3
"""
Batch merge all open PRs into main branch
This script will resolve conflicts and merge all open PRs automatically
"""

import subprocess
import sys
import time
import json

def run_command(cmd, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        print(f"Command failed: {cmd}")
        print(f"Error: {e.stderr}")
        return None, e.stderr

def get_open_prs():
    """Get list of open PRs"""
    stdout, stderr = run_command("gh pr list --state open --json number,title,headRefName")
    if not stdout:
        print("No open PRs found")
        return []
    
    try:
        prs = json.loads(stdout)
        return prs
    except json.JSONDecodeError:
        print("Failed to parse PR list")
        return []

def resolve_conflicts_aggressive():
    """Resolve conflicts by accepting main branch version"""
    print("🔧 Resolving conflicts aggressively...")
    
    # Get conflicted files
    stdout, stderr = run_command("git status --porcelain | grep '^UU\\|^AU\\|^UA\\|^DD\\|^DU\\|^UD'")
    if not stdout:
        print("✅ No conflicts found!")
        return True
    
    conflicted_files = stdout.strip().split('\n')
    print(f"📋 Found {len(conflicted_files)} conflicted files")
    
    for line in conflicted_files:
        if not line.strip():
            continue
            
        status = line[:2]
        filename = line[3:].strip()
        
        print(f"🔨 Resolving: {filename} (status: {status})")
        
        if status in ['DD', 'DU', 'UD']:
            # File was deleted in one branch, remove it
            run_command(f"git rm '{filename}'", check=False)
            print(f"  ✅ Removed deleted file: {filename}")
        elif status in ['UU', 'AU', 'UA']:
            # Content conflict, resolve by accepting main branch version
            run_command(f"git checkout --theirs '{filename}'", check=False)
            run_command(f"git add '{filename}'", check=False)
            print(f"  ✅ Resolved content conflict: {filename}")
    
    return True

def merge_pr(pr_number, pr_title, branch_name):
    """Merge a single PR"""
    print(f"\n🔄 Processing PR #{pr_number}: {pr_title}")
    
    # Checkout the PR branch
    print(f"📥 Checking out branch: {branch_name}")
    stdout, stderr = run_command(f"gh pr checkout {pr_number}")
    if not stdout and stderr:
        print(f"❌ Failed to checkout PR #{pr_number}: {stderr}")
        return False
    
    # Fetch latest main
    print("📥 Fetching latest main...")
    run_command("git fetch origin main")
    
    # Try to merge with main
    print("🔀 Attempting to merge with main...")
    stdout, stderr = run_command("git merge origin/main", check=False)
    
    if "CONFLICT" in stdout or "CONFLICT" in stderr:
        print("⚠️  Conflicts detected, resolving...")
        if resolve_conflicts_aggressive():
            # Commit the merge
            run_command("git commit -m 'Resolve merge conflicts automatically'", check=False)
            print("✅ Conflicts resolved and committed")
        else:
            print("❌ Failed to resolve conflicts")
            return False
    elif "Already up to date" in stdout:
        print("✅ Branch is already up to date")
    elif "Fast-forward" in stdout:
        print("✅ Fast-forward merge successful")
    else:
        print("✅ Merge completed")
    
    # Push the changes
    print("📤 Pushing changes...")
    stdout, stderr = run_command(f"git push origin {branch_name}", check=False)
    if stderr and "rejected" in stderr:
        print("⚠️  Push rejected, trying force push...")
        run_command(f"git push origin {branch_name} --force", check=False)
    
    # Switch back to main
    run_command("git checkout main")
    
    # Merge the PR into main
    print("🔀 Merging PR into main...")
    stdout, stderr = run_command(f"git merge {branch_name}", check=False)
    
    if "CONFLICT" in stdout or "CONFLICT" in stderr:
        print("⚠️  Conflicts in main merge, resolving...")
        if resolve_conflicts_aggressive():
            run_command("git commit -m 'Merge PR and resolve conflicts'", check=False)
            print("✅ Main merge conflicts resolved")
        else:
            print("❌ Failed to resolve main merge conflicts")
            return False
    
    # Push main
    print("📤 Pushing main...")
    run_command("git push origin main", check=False)
    
    # Close the PR
    print(f"🔒 Closing PR #{pr_number}...")
    run_command(f"gh pr close {pr_number} --delete-branch", check=False)
    
    print(f"✅ PR #{pr_number} processed successfully!")
    return True

def main():
    """Main function"""
    print("🚀 Batch PR Merger")
    print("=" * 50)
    
    # Get open PRs
    prs = get_open_prs()
    if not prs:
        print("No open PRs to merge")
        return
    
    print(f"📋 Found {len(prs)} open PRs to process")
    
    # Process each PR
    successful = 0
    failed = 0
    
    for pr in prs:
        try:
            if merge_pr(pr['number'], pr['title'], pr['headRefName']):
                successful += 1
            else:
                failed += 1
        except Exception as e:
            print(f"❌ Error processing PR #{pr['number']}: {e}")
            failed += 1
        
        # Small delay between PRs
        time.sleep(2)
    
    print(f"\n🎉 Batch merge completed!")
    print(f"✅ Successful: {successful}")
    print(f"❌ Failed: {failed}")

if __name__ == "__main__":
    main()