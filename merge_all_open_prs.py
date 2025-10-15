#!/usr/bin/env python3
"""
Comprehensive script to merge all open pull requests
"""
import subprocess
import sys
import time
import json

def run_command(cmd):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get list of all open PRs"""
    print("📋 Fetching open pull requests...")
    
    # Get non-draft PRs
    success, output, error = run_command("gh pr list --state open --draft=false --json number,title,headRefName,mergeable")
    if not success:
        print(f"❌ Error fetching PRs: {error}")
        return []
    
    try:
        prs = json.loads(output)
        print(f"📊 Found {len(prs)} open pull requests")
        return prs
    except json.JSONDecodeError as e:
        print(f"❌ Error parsing PR data: {e}")
        return []

def check_pr_mergeable(pr_number):
    """Check if a PR is mergeable"""
    success, output, error = run_command(f"gh pr view {pr_number} --json mergeable,mergeStateStatus")
    if not success:
        return False, "Error checking PR status"
    
    try:
        data = json.loads(output)
        mergeable = data.get('mergeable', False)
        merge_state = data.get('mergeStateStatus', 'UNKNOWN')
        return mergeable, merge_state
    except json.JSONDecodeError:
        return False, "Error parsing PR data"

def merge_pr(pr_number, title):
    """Merge a pull request"""
    print(f"🔄 Merging PR #{pr_number}: {title}")
    
    # Check if PR is mergeable
    mergeable, status = check_pr_mergeable(pr_number)
    if not mergeable:
        print(f"⚠️  PR #{pr_number} is not mergeable (status: {status})")
        return False
    
    # Try to merge the PR
    success, output, error = run_command(f"gh pr merge {pr_number} --merge --delete-branch")
    if not success:
        print(f"❌ Failed to merge PR #{pr_number}: {error}")
        return False
    
    print(f"✅ Successfully merged PR #{pr_number}")
    return True

def main():
    """Main function"""
    print("🚀 Starting comprehensive PR merge process...")
    
    # Change to workspace directory
    import os
    os.chdir('/workspace')
    
    # Get all open PRs
    prs = get_open_prs()
    if not prs:
        print("❌ No open PRs found or error fetching PRs")
        return False
    
    # Sort PRs by number (oldest first)
    prs.sort(key=lambda x: x['number'])
    
    print(f"📝 Processing {len(prs)} pull requests...")
    
    merged_count = 0
    failed_count = 0
    
    for pr in prs:
        pr_number = pr['number']
        title = pr['title']
        head_ref = pr['headRefName']
        
        print(f"\n{'='*60}")
        print(f"Processing PR #{pr_number}: {title}")
        print(f"Branch: {head_ref}")
        
        # Check if PR is mergeable
        mergeable, status = check_pr_mergeable(pr_number)
        if not mergeable:
            print(f"⚠️  Skipping PR #{pr_number} - not mergeable (status: {status})")
            failed_count += 1
            continue
        
        # Try to merge
        if merge_pr(pr_number, title):
            merged_count += 1
            # Wait a bit between merges
            time.sleep(2)
        else:
            failed_count += 1
    
    print(f"\n{'='*60}")
    print(f"📊 Merge Summary:")
    print(f"✅ Successfully merged: {merged_count}")
    print(f"❌ Failed to merge: {failed_count}")
    print(f"📋 Total processed: {len(prs)}")
    
    if merged_count > 0:
        print("\n🔄 Pulling latest changes...")
        success, output, error = run_command("git pull origin main")
        if success:
            print("✅ Successfully pulled latest changes")
        else:
            print(f"⚠️  Warning: Could not pull latest changes: {error}")
    
    print("\n🎉 PR merge process completed!")
    return True

if __name__ == "__main__":
    main()