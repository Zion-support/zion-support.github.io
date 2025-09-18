#!/usr/bin/env python3

import subprocess
import sys
import os

def run_command(cmd, timeout=60):
    """Run a command with timeout"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout,
            cwd='/workspace'
        )
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"

def main():
    print("Starting merge conflict resolution...")
    
    # Check current status
    print("Checking git status...")
    code, stdout, stderr = run_command("git status --porcelain")
    if code == 0:
        print(f"Git status: {stdout}")
    else:
        print(f"Error checking status: {stderr}")
    
    # Check current branch
    code, stdout, stderr = run_command("git branch --show-current")
    if code == 0:
        current_branch = stdout.strip()
        print(f"Current branch: {current_branch}")
    else:
        print(f"Error getting current branch: {stderr}")
        return 1
    
    # Fetch latest changes
    print("Fetching latest changes...")
    code, stdout, stderr = run_command("git fetch origin")
    if code != 0:
        print(f"Error fetching: {stderr}")
    
    # Try to merge our feature branch into main
    if current_branch == "main":
        print("Attempting to merge feature branch...")
        code, stdout, stderr = run_command("git merge cursor/create-and-deploy-new-content-96e6 --no-edit")
        if code == 0:
            print("Merge successful!")
            # Push changes
            print("Pushing to origin...")
            code, stdout, stderr = run_command("git push origin main")
            if code == 0:
                print("Push successful!")
                return 0
            else:
                print(f"Push failed: {stderr}")
                return 1
        else:
            print(f"Merge failed: {stderr}")
            print("Attempting to resolve conflicts automatically...")
            
            # Try with strategy
            code, stdout, stderr = run_command("git merge cursor/create-and-deploy-new-content-96e6 -X ours --no-edit")
            if code == 0:
                print("Merge with strategy successful!")
                code, stdout, stderr = run_command("git push origin main")
                if code == 0:
                    print("Push successful!")
                    return 0
                else:
                    print(f"Push failed: {stderr}")
                    return 1
            else:
                print(f"Strategy merge also failed: {stderr}")
                return 1
    else:
        print(f"Not on main branch. Current branch: {current_branch}")
        return 1

if __name__ == "__main__":
    sys.exit(main())