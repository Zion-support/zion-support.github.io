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

def merge_pr_smart(pr_number):
    """Smart merge of a PR with conflict resolution"""
    print(f"\n🔄 Processing PR #{pr_number}...")
    
    # Fetch the PR
    success, stdout, stderr = run_command(f"git fetch origin pull/{pr_number}/head:pr-{pr_number}")
    if not success:
        print(f"❌ Failed to fetch PR #{pr_number}: {stderr}")
        return False
    
    # Try to merge the PR
    success, stdout, stderr = run_command(f"git merge pr-{pr_number} --no-ff -m 'Merge PR #{pr_number}'")
    if success:
        print(f"✅ Successfully merged PR #{pr_number}")
        return True
    
    print(f"⚠️  Merge conflict in PR #{pr_number}, attempting smart resolution...")
    
    # Check what type of conflicts we have
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        print(f"❌ Failed to get status: {stderr}")
        return False
    
    conflicts = stdout.strip().split('\n') if stdout.strip() else []
    
    # Handle different types of conflicts
    for conflict in conflicts:
        if not conflict.strip():
            continue
            
        status = conflict[:2]
        filename = conflict[3:]
        
        if status in ['UD', 'DU', 'DD']:
            # Deleted in one side, modified in other - keep our version (delete)
            print(f"  📁 Resolving delete/modify conflict for {filename}")
            run_command(f"git rm {filename}")
        elif status == 'AA':
            # Both modified - keep our version for key files
            if filename in ['package.json', 'package-lock.json', 'next.config.js', 'netlify.toml', 'tsconfig.json']:
                print(f"  ⚙️  Resolving config conflict for {filename}")
                run_command(f"git checkout --ours {filename}")
                run_command(f"git add {filename}")
            else:
                print(f"  📝 Resolving content conflict for {filename}")
                run_command(f"git checkout --ours {filename}")
                run_command(f"git add {filename}")
        elif status == 'AU':
            # Added by us, modified by them - keep our version
            print(f"  📄 Resolving add/modify conflict for {filename}")
            run_command(f"git checkout --ours {filename}")
            run_command(f"git add {filename}")
    
    # Commit the resolved conflicts
    success, stdout, stderr = run_command(f"git commit -m 'Merge PR #{pr_number} - resolved conflicts'")
    if success:
        print(f"✅ Successfully merged PR #{pr_number} with conflict resolution")
        return True
    else:
        print(f"❌ Failed to commit resolved conflicts for PR #{pr_number}: {stderr}")
        return False

def main():
    print("🚀 Starting efficient PR merge process...")
    
    # Ensure we're on main and up to date
    print("📋 Ensuring we're on main branch and up to date...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get open PRs
    print("📥 Fetching open PRs...")
    prs = get_open_prs()
    
    if not prs:
        print("✅ No open PRs found!")
        return
    
    print(f"📊 Found {len(prs)} open PRs")
    
    successful_merges = 0
    failed_merges = 0
    
    # Process each PR
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        
        print(f"\n📋 PR #{pr_number}: {pr_title}")
        
        if merge_pr_smart(pr_number):
            successful_merges += 1
        else:
            failed_merges += 1
            
        # Clean up the local PR branch
        run_command(f"git branch -D pr-{pr_number}")
    
    print(f"\n🎉 PR merge process completed!")
    print(f"✅ Successfully merged: {successful_merges}")
    print(f"❌ Failed to merge: {failed_merges}")
    
    # Push all changes
    if successful_merges > 0:
        print("🚀 Pushing all changes to origin...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✅ Successfully pushed all changes!")
        else:
            print(f"❌ Failed to push changes: {stderr}")

if __name__ == "__main__":
    main()