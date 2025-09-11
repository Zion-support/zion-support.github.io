#!/usr/bin/env python3
import subprocess
import json
import re
import sys

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_git_remote():
    """Get git remote URL"""
    success, stdout, stderr = run_command("git remote get-url origin")
    if not success:
        print(f"Error getting remote: {stderr}")
        return None, None
    
    remote_url = stdout.strip()
    print(f"Remote URL: {remote_url}")
    
    # Extract token and repo
    token_match = re.search(r'x-access-token:([^@]+)@', remote_url)
    repo_match = re.search(r'github\.com/([^/]+/[^/]+)', remote_url)
    
    if not token_match or not repo_match:
        print("Could not extract token or repo from remote URL")
        return None, None
    
    token = token_match.group(1)
    repo = repo_match.group(1)
    
    print(f"Repository: {repo}")
    print(f"Token: {token[:8]}...")
    
    return token, repo

def make_github_request(token, repo, endpoint, method="GET", data=None):
    """Make GitHub API request"""
    import urllib.request
    import urllib.parse
    
    url = f"https://api.github.com/repos/{repo}{endpoint}"
    
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'cursor-bot'
    }
    
    if data:
        data = json.dumps(data).encode('utf-8')
        headers['Content-Type'] = 'application/json'
    
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    
    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            return response.status, json.loads(response.read().decode('utf-8'))
    except Exception as e:
        print(f"API request failed: {e}")
        return None, None

def list_open_prs(token, repo):
    """List all open PRs"""
    print("\n=== Fetching open PRs ===")
    status, prs = make_github_request(token, repo, "/pulls?state=open&per_page=100")
    
    if status != 200:
        print(f"Failed to fetch PRs: {prs}")
        return []
    
    print(f"Found {len(prs)} open PRs")
    for pr in prs:
        print(f"  #{pr['number']}: {pr['title']}")
    
    return prs

def merge_pr_api(token, repo, pr_number, title):
    """Attempt to merge PR via API"""
    print(f"\n=== Attempting API merge for PR #{pr_number} ===")
    
    # Check if PR is mergeable
    status, pr_data = make_github_request(token, repo, f"/pulls/{pr_number}")
    if status != 200:
        print(f"Failed to fetch PR #{pr_number}")
        return False
    
    mergeable = pr_data.get('mergeable')
    print(f"PR #{pr_number} mergeable: {mergeable}")
    
    if mergeable is False:
        print(f"PR #{pr_number} has conflicts, skipping API merge")
        return False
    
    # Attempt merge
    merge_data = {
        "merge_method": "squash",
        "commit_title": f"chore: squash-merge PR #{pr_number} - {title}"
    }
    
    status, result = make_github_request(token, repo, f"/pulls/{pr_number}/merge", "PUT", merge_data)
    
    if status == 200 and result.get('merged'):
        print(f"✅ Successfully merged PR #{pr_number} via API")
        return True
    else:
        print(f"❌ Failed to merge PR #{pr_number} via API: {result}")
        return False

def merge_pr_local(pr_number):
    """Attempt to merge PR locally"""
    print(f"\n=== Attempting local merge for PR #{pr_number} ===")
    
    # Fetch PR branch
    success, stdout, stderr = run_command(f"git fetch origin pull/{pr_number}/head:pr-{pr_number}")
    if not success:
        print(f"Failed to fetch PR #{pr_number}: {stderr}")
        return False
    
    # Checkout main and update
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"Failed to checkout main: {stderr}")
        return False
    
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"Failed to pull main: {stderr}")
        return False
    
    # Create merge branch
    success, stdout, stderr = run_command(f"git checkout -b merge-pr-{pr_number}")
    if not success:
        # Branch might already exist, try to checkout
        success, stdout, stderr = run_command(f"git checkout merge-pr-{pr_number}")
        if not success:
            print(f"Failed to create/checkout merge branch: {stderr}")
            return False
    
    # Try to merge
    success, stdout, stderr = run_command(f"git merge pr-{pr_number} --no-ff --no-edit")
    if success:
        print(f"✅ Successfully merged PR #{pr_number}")
    else:
        print(f"Conflicts detected, trying with -X theirs strategy...")
        run_command("git merge --abort")
        success, stdout, stderr = run_command(f"git merge pr-{pr_number} --no-ff --no-edit -X theirs")
        if not success:
            print(f"❌ Failed to merge PR #{pr_number} even with theirs strategy: {stderr}")
            run_command("git merge --abort")
            run_command("git checkout main")
            return False
        else:
            print(f"✅ Successfully merged PR #{pr_number} with theirs strategy")
    
    # Merge back to main
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"Failed to checkout main: {stderr}")
        return False
    
    success, stdout, stderr = run_command(f"git merge merge-pr-{pr_number} --no-ff --no-edit")
    if not success:
        print(f"Failed to merge back to main: {stderr}")
        return False
    
    # Push to origin
    success, stdout, stderr = run_command("git push origin main")
    if not success:
        print(f"Failed to push to origin: {stderr}")
        return False
    
    print(f"✅ Successfully pushed merged PR #{pr_number} to main")
    return True

def main():
    print("=== Starting PR merge process ===")
    
    # Get git remote info
    token, repo = get_git_remote()
    if not token or not repo:
        print("Failed to get git remote information")
        sys.exit(1)
    
    # List open PRs
    prs = list_open_prs(token, repo)
    if not prs:
        print("No open PRs found")
        return
    
    merged = 0
    failed = 0
    
    # Process each PR
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        
        print(f"\n=== Processing PR #{pr_number}: {pr_title} ===")
        
        # Try API merge first
        if merge_pr_api(token, repo, pr_number, pr_title):
            merged += 1
        else:
            # Try local merge
            if merge_pr_local(pr_number):
                merged += 1
            else:
                failed += 1
    
    print(f"\n=== Summary ===")
    print(f"✅ Successfully merged: {merged}")
    print(f"❌ Failed to merge: {failed}")

if __name__ == "__main__":
    main()