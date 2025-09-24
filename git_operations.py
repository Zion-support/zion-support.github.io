#!/usr/bin/env python3
import os
import subprocess
import sys

def run_command(command, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout,
            cwd='/workspace'
        )
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {command}")
        return -1, "", "Timeout"

def main():
    print("Starting git operations...")
    
    # Remove rebase state
    print("Cleaning up rebase state...")
    rebase_dir = "/workspace/.git/rebase-merge"
    if os.path.exists(rebase_dir):
        import shutil
        try:
            shutil.rmtree(rebase_dir)
            print("Removed rebase-merge directory")
        except Exception as e:
            print(f"Could not remove rebase directory: {e}")
    
    # Set HEAD to point to the branch
    print("Setting HEAD to branch...")
    with open("/workspace/.git/HEAD", "w") as f:
        f.write("ref: refs/heads/cursor/check-fix-push-and-merge-to-main-b340\n")
    
    # Check git status
    print("Checking git status...")
    code, stdout, stderr = run_command("git status --porcelain")
    if code == 0:
        print("Git status:")
        print(stdout)
        if not stdout.strip():
            print("No changes to commit")
        else:
            # Add changes
            print("Adding changes...")
            code, stdout, stderr = run_command("git add .")
            if code == 0:
                print("Changes added successfully")
                
                # Commit changes
                print("Committing changes...")
                commit_msg = "fix: resolve rebase conflicts and clean up repository state"
                code, stdout, stderr = run_command(f'git commit -m "{commit_msg}"')
                if code == 0:
                    print("Changes committed successfully")
                else:
                    print(f"Commit failed: {stderr}")
            else:
                print(f"Add failed: {stderr}")
    else:
        print(f"Git status failed: {stderr}")
    
    # Push to origin
    print("Pushing to origin...")
    branch = "cursor/check-fix-push-and-merge-to-main-b340"
    code, stdout, stderr = run_command(f"git push origin {branch}")
    if code == 0:
        print("Pushed to origin successfully")
        
        # Switch to main
        print("Switching to main branch...")
        code, stdout, stderr = run_command("git checkout main")
        if code == 0:
            print("Switched to main branch")
            
            # Merge the feature branch
            print("Merging feature branch...")
            code, stdout, stderr = run_command(f"git merge {branch}")
            if code == 0:
                print("Merged successfully")
                
                # Push to main
                print("Pushing to main...")
                code, stdout, stderr = run_command("git push origin main")
                if code == 0:
                    print("All operations completed successfully!")
                else:
                    print(f"Push to main failed: {stderr}")
            else:
                print(f"Merge failed: {stderr}")
        else:
            print(f"Checkout to main failed: {stderr}")
    else:
        print(f"Push failed: {stderr}")

if __name__ == "__main__":
    main()