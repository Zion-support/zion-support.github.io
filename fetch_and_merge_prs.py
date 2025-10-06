#!/usr/bin/env python3

import os
import subprocess
import json
import requests
from datetime import datetime

def run_command(cmd, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout.strip(), result.stderr.strip()
    except subprocess.CalledProcessError as e:
        return e.stdout.strip(), e.stderr.strip()

def get_github_token():
    """Get GitHub token from environment"""
    token = os.environ.get('GITHUB_TOKEN')
    if not token:
        print("❌ GITHUB_TOKEN environment variable not found")
        print("Please set it with: export GITHUB_TOKEN=your_token_here")
        return None
    return token

def fetch_open_prs(token):
    """Fetch open pull requests from GitHub API"""
    url = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "PR-Merger-Script"
    }
    params = {
        "state": "open",
        "per_page": 100
    }
    
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"❌ Error fetching PRs: {e}")
        return []

def check_pr_mergeable(token, pr_number):
    """Check if a PR is mergeable"""
    url = f"https://api.github.com/repos/Zion-Holdings/zion.app/pulls/{pr_number}"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "PR-Merger-Script"
    }
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        pr_data = response.json()
        return pr_data.get('mergeable', False), pr_data.get('mergeable_state', 'unknown')
    except requests.RequestException as e:
        print(f"❌ Error checking PR {pr_number}: {e}")
        return False, 'error'

def merge_pr(token, pr_number, title):
    """Merge a pull request"""
    url = f"https://api.github.com/repos/Zion-Holdings/zion.app/pulls/{pr_number}/merge"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "PR-Merger-Script",
        "Content-Type": "application/json"
    }
    
    data = {
        "commit_title": f"Merge PR #{pr_number}: {title}",
        "commit_message": f"Automated merge of PR #{pr_number}",
        "merge_method": "merge"
    }
    
    try:
        response = requests.put(url, headers=headers, json=data)
        response.raise_for_status()
        return True, response.json()
    except requests.RequestException as e:
        return False, str(e)

def resolve_conflicts_locally(pr_number, head_ref):
    """Attempt to resolve conflicts locally by checking out and merging"""
    print(f"🔧 Attempting to resolve conflicts for PR #{pr_number} locally...")
    
    # Fetch the latest changes
    run_command("git fetch origin")
    
    # Checkout the PR branch
    checkout_cmd = f"git checkout -b pr-{pr_number} origin/{head_ref}"
    stdout, stderr = run_command(checkout_cmd, check=False)
    if stderr and "already exists" not in stderr:
        print(f"❌ Failed to checkout branch: {stderr}")
        return False
    
    # Try to merge with main
    run_command("git checkout main")
    run_command("git pull origin main")
    
    merge_cmd = f"git merge pr-{pr_number}"
    stdout, stderr = run_command(merge_cmd, check=False)
    
    if "Automatic merge failed" in stderr:
        print(f"⚠️  Merge conflicts detected for PR #{pr_number}")
        print("🔧 Attempting to resolve conflicts automatically...")
        
        # Try to resolve conflicts by accepting incoming changes for common conflict files
        conflict_files = []
        for line in stdout.split('\n'):
            if 'both modified:' in line:
                file_path = line.split('both modified:')[1].strip()
                conflict_files.append(file_path)
        
        print(f"📁 Found {len(conflict_files)} conflicted files")
        
        # Try simple conflict resolution strategies
        for file_path in conflict_files:
            if file_path.endswith('.json') or file_path.endswith('.js') or file_path.endswith('.ts'):
                print(f"🔧 Resolving conflicts in {file_path}")
                # Use git checkout --theirs for automatic resolution
                run_command(f"git checkout --theirs {file_path}", check=False)
                run_command(f"git add {file_path}", check=False)
        
        # Try to complete the merge
        commit_result = run_command("git commit --no-edit", check=False)
        if commit_result[1]:
            print(f"❌ Could not resolve conflicts automatically: {commit_result[1]}")
            run_command("git merge --abort")
            run_command(f"git branch -D pr-{pr_number}")
            return False
        else:
            print(f"✅ Successfully resolved conflicts for PR #{pr_number}")
            # Push the resolved changes
            push_result = run_command(f"git push origin pr-{pr_number}", check=False)
            if push_result[1]:
                print(f"❌ Failed to push resolved changes: {push_result[1]}")
            else:
                print(f"✅ Pushed resolved changes for PR #{pr_number}")
            # Clean up
            run_command("git checkout main")
            run_command(f"git branch -D pr-{pr_number}")
            return True
    else:
        print(f"✅ No conflicts found for PR #{pr_number}")
        run_command(f"git branch -D pr-{pr_number}")
        return True

def main():
    print("🚀 Starting PR fetch and merge process...")
    print(f"⏰ {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Get GitHub token
    token = get_github_token()
    if not token:
        return
    
    # Fetch open PRs
    print("🔍 Fetching open pull requests...")
    prs = fetch_open_prs(token)
    
    if not prs:
        print("❌ No PRs found or error occurred")
        return
    
    print(f"📋 Found {len(prs)} open pull requests")
    
    # Save PR list to file
    with open('/workspace/open-prs.json', 'w') as f:
        json.dump(prs, f, indent=2)
    print("💾 Saved PR list to /workspace/open-prs.json")
    
    # Display PRs
    print("\n📝 Open Pull Requests:")
    for i, pr in enumerate(prs, 1):
        print(f"{i}. PR #{pr['number']}: {pr['title']}")
        print(f"   Branch: {pr['head']['ref']} -> {pr['base']['ref']}")
        print(f"   State: {pr['state']} | Draft: {pr.get('draft', False)}")
        print(f"   URL: {pr['html_url']}\n")
    
    # Process PRs
    mergeable_count = 0
    conflict_count = 0
    merged_count = 0
    
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        head_ref = pr['head']['ref']
        
        print(f"\n🔄 Processing PR #{pr_number}: {pr_title}")
        
        # Check if PR is mergeable
        is_mergeable, merge_state = check_pr_mergeable(token, pr_number)
        print(f"   Mergeable: {is_mergeable} (State: {merge_state})")
        
        if is_mergeable and merge_state == 'clean':
            # Try to merge directly
            success, result = merge_pr(token, pr_number, pr_title)
            if success:
                print(f"✅ Successfully merged PR #{pr_number}")
                merged_count += 1
            else:
                print(f"❌ Failed to merge PR #{pr_number}: {result}")
                conflict_count += 1
        else:
            print(f"⚠️  PR #{pr_number} has conflicts or is not mergeable")
            conflict_count += 1
            
            # Attempt local conflict resolution
            if resolve_conflicts_locally(pr_number, head_ref):
                print(f"🔄 Retrying merge after conflict resolution...")
                success, result = merge_pr(token, pr_number, pr_title)
                if success:
                    print(f"✅ Successfully merged PR #{pr_number} after conflict resolution")
                    merged_count += 1
                else:
                    print(f"❌ Still failed to merge after resolution: {result}")
    
    # Summary
    print(f"\n🎉 PR processing completed!")
    print(f"📊 Summary:")
    print(f"   Total PRs: {len(prs)}")
    print(f"   Successfully merged: {merged_count}")
    print(f"   Had conflicts: {conflict_count}")
    print(f"   Remaining: {len(prs) - merged_count}")

if __name__ == "__main__":
    main()