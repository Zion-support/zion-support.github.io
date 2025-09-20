#!/usr/bin/env python3

import subprocess
import json
import os

def run_command(cmd):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=30)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def main():
    print("🔍 Checking current repository status...")
    
    # Check current branch
    success, stdout, stderr = run_command("git branch --show-current")
    if success:
        print(f"📍 Current branch: {stdout.strip()}")
    else:
        print(f"❌ Failed to get current branch: {stderr}")
    
    # Check git status
    success, stdout, stderr = run_command("git status --porcelain")
    if success:
        if stdout.strip():
            print(f"📝 Uncommitted changes: {stdout.strip()}")
        else:
            print("✅ Working directory is clean")
    else:
        print(f"❌ Failed to get git status: {stderr}")
    
    # Check if we can switch to main
    success, stdout, stderr = run_command("git checkout main")
    if success:
        print("✅ Successfully switched to main branch")
        
        # Check if main is up to date
        success, stdout, stderr = run_command("git status -uno")
        if success:
            print(f"📊 Main branch status: {stdout.strip()}")
        
        # Check recent commits
        success, stdout, stderr = run_command("git log --oneline -5")
        if success:
            print(f"📜 Recent commits:\n{stdout}")
        else:
            print(f"❌ Failed to get recent commits: {stderr}")
    else:
        print(f"❌ Failed to switch to main: {stderr}")
    
    # Check for any open PRs
    if os.path.exists("_open_prs_current.json"):
        with open("_open_prs_current.json", "r") as f:
            prs = json.load(f)
            print(f"📋 Found {len(prs)} open PRs")
            for pr in prs:
                print(f"   - PR #{pr['number']}: {pr['title']} ({pr['state']})")
    else:
        print("📋 No PR data file found")

if __name__ == "__main__":
    main()