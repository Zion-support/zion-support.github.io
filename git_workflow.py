#!/usr/bin/env python3

import subprocess
import sys
import os

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        print(f"Running: {cmd}")
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        if result.returncode == 0:
            print(f"Success: {result.stdout}")
            return True, result.stdout
        else:
            print(f"Error: {result.stderr}")
            return False, result.stderr
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return False, "Timeout"
    except Exception as e:
        print(f"Exception: {e}")
        return False, str(e)

def main():
    print("=== Git Workflow Script ===")
    
    # Check if we're in a git repository
    if not os.path.exists(".git"):
        print("Error: Not in a git repository")
        sys.exit(1)
    
    # Get current branch
    success, output = run_command("git rev-parse --abbrev-ref HEAD")
    if not success:
        print("Error getting current branch")
        sys.exit(1)
    current_branch = output.strip()
    print(f"Current branch: {current_branch}")
    
    # Check for uncommitted changes
    success, output = run_command("git status --porcelain")
    if success and output.strip():
        print("Found uncommitted changes:")
        print(output)
        print("Committing changes...")
        run_command("git add .")
        run_command("git commit -m 'Fix lint errors and code improvements'")
    else:
        print("No uncommitted changes found")
    
    # Run lint check
    print("Running lint check...")
    run_command("npm run lint")
    
    # Push current branch
    print("Pushing current branch...")
    success, _ = run_command(f"git push origin {current_branch}")
    if not success:
        print("Failed to push current branch")
        sys.exit(1)
    
    # Switch to main
    print("Switching to main branch...")
    success, _ = run_command("git checkout main")
    if not success:
        print("Failed to switch to main branch")
        sys.exit(1)
    
    # Pull latest changes
    print("Pulling latest changes...")
    success, _ = run_command("git pull origin main")
    if not success:
        print("Failed to pull latest changes")
        sys.exit(1)
    
    # Merge feature branch
    print(f"Merging {current_branch} into main...")
    success, _ = run_command(f"git merge {current_branch}")
    if not success:
        print("Failed to merge feature branch")
        sys.exit(1)
    
    # Push merged changes
    print("Pushing merged changes...")
    success, _ = run_command("git push origin main")
    if not success:
        print("Failed to push merged changes")
        sys.exit(1)
    
    print("=== Git Workflow Completed Successfully ===")

if __name__ == "__main__":
    main()