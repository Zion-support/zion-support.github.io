#!/usr/bin/env python3
import subprocess
import sys
import os

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        print(f"Command: {cmd}")
        print(f"Return code: {result.returncode}")
        if result.stdout:
            print(f"STDOUT: {result.stdout}")
        if result.stderr:
            print(f"STDERR: {result.stderr}")
        return result.returncode == 0
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return False
    except Exception as e:
        print(f"Error running command {cmd}: {e}")
        return False

def main():
    print("Starting git merge process...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Check current status
    print("\n1. Checking current status...")
    run_command("git status --porcelain")
    run_command("git branch --show-current")
    
    # Switch to main
    print("\n2. Switching to main branch...")
    if not run_command("git checkout main"):
        print("Failed to checkout main")
        return False
    
    # Pull latest changes
    print("\n3. Pulling latest changes...")
    if not run_command("git pull origin main"):
        print("Warning: Failed to pull from origin")
    
    # Merge the feature branch
    print("\n4. Merging feature branch...")
    if not run_command("git merge cursor/fix-netlify-build-and-merge-to-main-133c"):
        print("Failed to merge branch")
        return False
    
    # Push to origin
    print("\n5. Pushing to origin...")
    if not run_command("git push origin main"):
        print("Failed to push to origin")
        return False
    
    print("\nMerge completed successfully!")
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)