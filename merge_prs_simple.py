#!/usr/bin/env python3

import subprocess
import json
import time
import sys

def run_command(cmd):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=300)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Fetch all open PRs using curl"""
    try:
        success, stdout, stderr = run_command("curl -s 'https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100'")
        if not success:
            print(f"Error fetching PRs: {stderr}")
            return []
        
        # Parse JSON response
        prs = json.loads(stdout)
        return prs
    except Exception as e:
        print(f"Error parsing PRs: {e}")
        return []

def merge_pr(pr_number):
    """Attempt to merge a PR"""
    print(f"\n🔄 Processing PR #{pr_number}...")
    
    # Fetch the PR
    success, stdout, stderr = run_command(f"git fetch origin pull/{pr_number}/head:pr-{pr_number}")
    if not success:
        print(f"❌ Failed to fetch PR #{pr_number}: {stderr}")
        return False
    
    # Try to merge the PR
    success, stdout, stderr = run_command(f"git merge pr-{pr_number} --no-ff -m 'Merge PR #{pr_number}'")
    if not success:
        print(f"⚠️  Merge conflict in PR #{pr_number}, attempting to resolve...")
        
        # Try to resolve conflicts using ours strategy
        success, stdout, stderr = run_command(f"git merge pr-{pr_number} -Xours --no-ff -m 'Merge PR #{pr_number} (resolved conflicts)'")
        if not success:
            print(f"❌ Failed to merge PR #{pr_number} even with conflict resolution: {stderr}")
            return False
    
    print(f"✅ Successfully merged PR #{pr_number}")
    
    # Clean up the branch
    run_command(f"git branch -D pr-{pr_number}")
    
    return True

def main():
    print("🚀 Starting comprehensive PR merge process...")
    
    # Ensure we're on main branch and up to date
    print("📋 Ensuring we're on main branch and up to date...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get all open PRs
    print("📥 Fetching open PRs...")
    prs = get_open_prs()
    
    if not prs:
        print("✅ No open PRs found!")
        return
    
    print(f"📊 Found {len(prs)} open PRs")
    
    # Process each PR
    merged_count = 0
    failed_count = 0
    
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        print(f"\n📋 PR #{pr_number}: {pr_title}")
        
        if merge_pr(pr_number):
            merged_count += 1
        else:
            failed_count += 1
        
        # Small delay between merges
        time.sleep(2)
    
    print(f"\n🎉 PR merge process completed!")
    print(f"✅ Successfully merged: {merged_count}")
    print(f"❌ Failed to merge: {failed_count}")
    
    # Push all changes
    if merged_count > 0:
        print("\n🚀 Pushing merged changes to origin...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✅ Successfully pushed all merged changes!")
        else:
            print(f"❌ Failed to push changes: {stderr}")

if __name__ == "__main__":
    main()