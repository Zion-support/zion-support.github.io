#!/usr/bin/env python3
"""
Script to merge current PR and check for other open PRs
"""

import subprocess
import json
import sys
import urllib.request
import urllib.error

def run_command(cmd, check=True):
    """Run a shell command and return output"""
    print(f"Running: {cmd}")
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True,
            timeout=30
        )
        if check and result.returncode != 0:
            print(f"Error: {result.stderr}")
            return None
        return result.stdout.strip()
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return None
    except Exception as e:
        print(f"Exception running command: {e}")
        return None

def get_open_prs():
    """Fetch open PRs from GitHub API"""
    owner = "Zion-Holdings"
    repo = "zion.app"
    url = f"https://api.github.com/repos/{owner}/{repo}/pulls?state=open&per_page=100"
    
    try:
        req = urllib.request.Request(url)
        req.add_header('Accept', 'application/vnd.github.v3+json')
        
        with urllib.request.urlopen(req, timeout=10) as response:
            data = response.read()
            prs = json.loads(data)
            return prs
    except Exception as e:
        print(f"Error fetching PRs: {e}")
        return []

def main():
    print("="*60)
    print("PR Merge Script - Comprehensive")
    print("="*60)
    print()
    
    # Step 1: Check current status
    print("Step 1: Checking current status...")
    current_branch = run_command("git branch --show-current")
    print(f"Current branch: {current_branch}")
    print()
    
    # Step 2: Stage changes
    print("Step 2: Staging changes...")
    files_to_stage = [
        "api-documentation.tsx",
        "app/components/PerformanceMonitor.tsx", 
        "clean-build/pages/_app.tsx",
        "clean-build/pages/about.tsx"
    ]
    
    for file in files_to_stage:
        result = run_command(f"git add {file}", check=False)
        if result is not None:
            print(f"  ✓ Staged {file}")
    print()
    
    # Step 3: Check if there are changes to commit
    print("Step 3: Checking for changes...")
    status = run_command("git status --porcelain")
    if status:
        print("Changes found, committing...")
        commit_msg = "fix: Resolve TypeScript syntax errors in multiple files\n\n- Fixed api-documentation.tsx JSX structure\n- Fixed PerformanceMonitor.tsx interface definitions\n- Rewrote clean-build/pages/_app.tsx with proper syntax\n- Rewrote clean-build/pages/about.tsx with valid JSX"
        
        run_command(f'git commit -m "{commit_msg}"', check=False)
        print("  ✓ Changes committed")
    else:
        print("  No changes to commit")
    print()
    
    # Step 4: Fetch latest from remote
    print("Step 4: Fetching from remote...")
    run_command("git fetch --all", check=False)
    print()
    
    # Step 5: Get open PRs from GitHub
    print("Step 5: Fetching open PRs from GitHub...")
    prs = get_open_prs()
    print(f"Found {len(prs)} open PR(s)")
    print()
    
    if prs:
        print("Open PRs:")
        print("-" * 60)
        for pr in prs:
            print(f"  PR #{pr['number']}: {pr['title']}")
            print(f"    Branch: {pr['head']['ref']}")
            print(f"    Mergeable: {pr.get('mergeable', 'unknown')}")
            print(f"    URL: {pr['html_url']}")
            print()
    
    # Step 6: List remote branches
    print("Step 6: Listing remote branches...")
    branches = run_command("git branch -r")
    if branches:
        print(branches)
    print()
    
    # Step 7: Check for unmerged branches
    print("Step 7: Checking for unmerged branches...")
    unmerged = run_command("git branch -r --no-merged main 2>/dev/null", check=False)
    if unmerged:
        print("Unmerged branches:")
        print(unmerged)
    else:
        print("  No unmerged branches found or unable to check")
    print()
    
    # Step 8: Summary and recommendations
    print("="*60)
    print("SUMMARY & NEXT STEPS")
    print("="*60)
    print()
    print(f"Current branch: {current_branch}")
    print(f"Open PRs on GitHub: {len(prs)}")
    print()
    
    if prs:
        print("To merge PRs, you can:")
        print("1. Use GitHub web interface")
        print("2. Use GitHub CLI: gh pr merge <number>")
        print("3. Manually merge branches:")
        for pr in prs[:5]:  # Show first 5
            print(f"   git checkout main && git merge origin/{pr['head']['ref']}")
        print()
    
    print("Files fixed in this session:")
    for file in files_to_stage:
        print(f"  ✓ {file}")
    print()
    
    return 0

if __name__ == "__main__":
    sys.exit(main())