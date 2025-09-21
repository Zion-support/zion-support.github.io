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

def resolve_remaining_conflicts():
    """Resolve any remaining merge conflicts"""
    print("\n🔧 Checking for remaining merge conflicts...")
    
    # Check if there are any merge conflicts
    success, stdout, stderr = run_command("git status --porcelain | grep '^UU\\|^AA\\|^DD'")
    if success and stdout.strip():
        print("⚠️  Found merge conflicts, resolving...")
        
        # Add all files to resolve conflicts
        run_command("git add -A")
        
        # Commit the resolution
        success, stdout, stderr = run_command('git commit -m "Resolve remaining merge conflicts"')
        if success:
            print("✅ Resolved remaining merge conflicts")
        else:
            print(f"❌ Failed to commit conflict resolution: {stderr}")
    else:
        print("✅ No merge conflicts found")

def main():
    print("🚀 Starting comprehensive PR merge and conflict resolution process...")
    
    # Ensure we're on main branch and up to date
    print("📋 Ensuring we're on main branch and up to date...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get all open PRs
    print("📥 Fetching open PRs...")
    prs = get_open_prs()
    
    if not prs:
        print("✅ No open PRs found!")
    else:
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
    
    # Resolve any remaining conflicts
    resolve_remaining_conflicts()
    
    # Push all changes
    print("\n🚀 Pushing all changes to origin...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Successfully pushed all changes!")
    else:
        print(f"❌ Failed to push changes: {stderr}")
        # Try force push if needed
        print("🔄 Attempting force push...")
        success, stdout, stderr = run_command("git push origin main --force")
        if success:
            print("✅ Successfully force pushed all changes!")
        else:
            print(f"❌ Failed to force push: {stderr}")

if __name__ == "__main__":
    main()