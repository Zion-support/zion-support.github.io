#!/usr/bin/env python3

import os
import sys
import subprocess
import json
import requests
import time

# Configuration
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
REPO_OWNER = "Zion-Holdings"
REPO_NAME = "zion.app"
BASE_URL = "https://api.github.com"

headers = {
    "Authorization": f"token {GITHUB_TOKEN}" if GITHUB_TOKEN else "",
    "Accept": "application/vnd.github.v3+json"
}

def run_git_command(command, cwd=None):
    """Run a git command and return the result."""
    try:
        result = subprocess.run(
            command.split(),
            cwd=cwd or "/workspace",
            capture_output=True,
            text=True,
            timeout=60
        )
        return result.returncode == 0, result.stdout.strip(), result.stderr.strip()
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get all open PRs from GitHub API."""
    try:
        url = f"{BASE_URL}/repos/{REPO_OWNER}/{REPO_NAME}/pulls?state=open"
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"❌ Error fetching PRs: {e}")
        return []

def merge_pr(pr_number, pr_title):
    """Merge a PR using GitHub API."""
    try:
        url = f"{BASE_URL}/repos/{REPO_OWNER}/{REPO_NAME}/pulls/{pr_number}/merge"
        data = {
            "commit_title": f"Merge PR #{pr_number}: {pr_title}",
            "merge_method": "merge"
        }
        
        response = requests.put(url, headers=headers, json=data, timeout=30)
        
        if response.status_code == 200:
            result = response.json()
            if result.get("merged"):
                print(f"✅ Successfully merged PR #{pr_number}")
                return True
            else:
                print(f"❌ Failed to merge PR #{pr_number}: {result.get('message', 'Unknown error')}")
                return False
        else:
            print(f"❌ Failed to merge PR #{pr_number}: HTTP {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Error merging PR #{pr_number}: {e}")
        return False

def main():
    print("🚀 Starting PR merge resolution process...")
    
    # Ensure we're in the right directory
    os.chdir("/workspace")
    
    # Get current git status
    success, stdout, stderr = run_git_command("git status --porcelain")
    if success:
        if stdout.strip():
            print("⚠️ Working directory has uncommitted changes")
            print("🔄 Attempting to commit current changes...")
            run_git_command("git add .")
            run_git_command("git commit -m 'Auto-commit before PR merge'")
        else:
            print("✅ Working directory is clean")
    
    # Fetch latest changes
    print("🔄 Fetching latest changes...")
    success, stdout, stderr = run_git_command("git fetch origin")
    if not success:
        print(f"❌ Failed to fetch: {stderr}")
    
    # Switch to main branch
    print("🔄 Switching to main branch...")
    success, stdout, stderr = run_git_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main: {stderr}")
    
    # Pull latest main
    print("🔄 Pulling latest main...")
    success, stdout, stderr = run_git_command("git pull origin main")
    if not success:
        print(f"❌ Failed to pull main: {stderr}")
    
    # Get open PRs
    print("🔍 Fetching open PRs...")
    open_prs = get_open_prs()
    
    if not open_prs:
        print("✅ No open PRs found")
        return
    
    print(f"📋 Found {len(open_prs)} open PR(s)")
    
    merged_count = 0
    for pr in open_prs:
        pr_number = pr["number"]
        pr_title = pr["title"]
        pr_branch = pr["head"]["ref"]
        
        print(f"\n🔄 Processing PR #{pr_number}: {pr_title}")
        print(f"   Branch: {pr_branch}")
        
        # Try to merge the PR
        if merge_pr(pr_number, pr_title):
            merged_count += 1
            time.sleep(2)  # Brief pause between merges
    
    print(f"\n🎉 Process completed! Successfully merged {merged_count} out of {len(open_prs)} PRs")
    
    # Final status update
    print("🔄 Updating local main branch...")
    run_git_command("git pull origin main")
    
    success, stdout, stderr = run_git_command("git log --oneline -5")
    if success:
        print("📋 Recent commits:")
        print(stdout)

if __name__ == "__main__":
    main()