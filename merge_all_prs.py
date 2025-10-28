#!/usr/bin/env python3
"""
Script to merge all open PRs systematically
"""
import subprocess
import json
import sys
import time

def run_command(cmd):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get list of open PRs"""
    success, stdout, stderr = run_command("gh pr list --state open --json number,title,headRefName,mergeable")
    if not success:
        print(f"Error getting PRs: {stderr}")
        return []
    
    try:
        prs = json.loads(stdout)
        return prs
    except json.JSONDecodeError as e:
        print(f"Error parsing PR data: {e}")
        return []

def merge_pr(pr_number, pr_title, branch_name):
    """Attempt to merge a PR"""
    print(f"\n🔄 Attempting to merge PR #{pr_number}: {pr_title}")
    print(f"   Branch: {branch_name}")
    
    # First, try to fetch the branch
    fetch_cmd = f"git fetch origin {branch_name}"
    success, stdout, stderr = run_command(fetch_cmd)
    if not success:
        print(f"   ❌ Failed to fetch branch: {stderr}")
        return False
    
    # Try to merge the branch
    merge_cmd = f"git merge origin/{branch_name} --no-ff -m 'Merge PR #{pr_number}: {pr_title}'"
    success, stdout, stderr = run_command(merge_cmd)
    
    if success:
        print(f"   ✅ Successfully merged PR #{pr_number}")
        return True
    else:
        print(f"   ⚠️  Merge conflict or error: {stderr}")
        # Try to resolve conflicts automatically
        return resolve_conflicts(pr_number, branch_name)

def resolve_conflicts(pr_number, branch_name):
    """Attempt to resolve merge conflicts"""
    print(f"   🔧 Attempting to resolve conflicts for PR #{pr_number}")
    
    # Check git status
    success, stdout, stderr = run_command("git status --porcelain")
    if success and stdout.strip():
        print(f"   📋 Files with conflicts: {stdout.strip()}")
        
        # Try to use our version for conflicts (since we're on main)
        success, stdout, stderr = run_command("git checkout --ours .")
        if success:
            success, stdout, stderr = run_command("git add .")
            if success:
                success, stdout, stderr = run_command(f"git commit -m 'Resolve conflicts for PR #{pr_number}'")
                if success:
                    print(f"   ✅ Resolved conflicts for PR #{pr_number}")
                    return True
    
    print(f"   ❌ Could not resolve conflicts for PR #{pr_number}")
    return False

def main():
    """Main function"""
    print("🚀 Starting PR merge process...")
    
    # Get all open PRs
    prs = get_open_prs()
    if not prs:
        print("❌ No open PRs found")
        return
    
    print(f"📋 Found {len(prs)} open PRs")
    
    successful_merges = 0
    failed_merges = 0
    
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        branch_name = pr['headRefName']
        mergeable = pr.get('mergeable', None)
        
        print(f"\n📝 PR #{pr_number}: {pr_title}")
        print(f"   Branch: {branch_name}")
        print(f"   Mergeable: {mergeable}")
        
        if mergeable is False:
            print(f"   ⚠️  PR #{pr_number} is not mergeable, skipping...")
            failed_merges += 1
            continue
        
        success = merge_pr(pr_number, pr_title, branch_name)
        if success:
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Small delay between merges
        time.sleep(1)
    
    print(f"\n📊 Merge Summary:")
    print(f"   ✅ Successful merges: {successful_merges}")
    print(f"   ❌ Failed merges: {failed_merges}")
    print(f"   📋 Total PRs processed: {len(prs)}")
    
    if successful_merges > 0:
        print(f"\n🚀 Pushing changes to main branch...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✅ Successfully pushed to main branch")
        else:
            print(f"❌ Failed to push to main: {stderr}")

if __name__ == "__main__":
    main()