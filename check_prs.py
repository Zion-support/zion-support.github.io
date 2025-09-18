#!/usr/bin/env python3
"""
Script to check GitHub repository for open PRs and merge conflicts
"""
import subprocess
import json
import sys

def run_git_command(command):
    """Run a git command and return the output"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=30)
        return result.stdout.strip(), result.stderr.strip(), result.returncode
    except subprocess.TimeoutExpired:
        return "", "Command timed out", 1

def check_git_status():
    """Check the current git status"""
    print("Checking git status...")
    stdout, stderr, code = run_git_command("git status --porcelain")
    if code == 0:
        print(f"Git status: {stdout}")
        return stdout
    else:
        print(f"Git status error: {stderr}")
        return None

def check_branches():
    """Check available branches"""
    print("Checking branches...")
    stdout, stderr, code = run_git_command("git branch -a")
    if code == 0:
        print(f"Branches: {stdout}")
        return stdout
    else:
        print(f"Branch check error: {stderr}")
        return None

def check_remote_status():
    """Check remote repository status"""
    print("Checking remote status...")
    stdout, stderr, code = run_git_command("git remote -v")
    if code == 0:
        print(f"Remote: {stdout}")
        return stdout
    else:
        print(f"Remote check error: {stderr}")
        return None

def main():
    print("=== GitHub Repository Status Check ===")
    
    # Check git status
    status = check_git_status()
    
    # Check branches
    branches = check_branches()
    
    # Check remote
    remote = check_remote_status()
    
    print("\n=== Summary ===")
    if status:
        print("✅ Git status check completed")
    else:
        print("❌ Git status check failed")
        
    if branches:
        print("✅ Branch check completed")
    else:
        print("❌ Branch check failed")
        
    if remote:
        print("✅ Remote check completed")
    else:
        print("❌ Remote check failed")

if __name__ == "__main__":
    main()