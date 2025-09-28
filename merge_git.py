#!/usr/bin/env python3

import subprocess
import sys
import os

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True, timeout=300)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def main():
    print("🚀 Starting PR merge process...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Complete the current merge
    print("📝 Completing current merge...")
    success, stdout, stderr = run_command("git add .")
    if not success:
        print(f"❌ Failed to add files: {stderr}")
        return
    
    success, stdout, stderr = run_command("git commit --no-edit")
    if not success:
        print(f"❌ Failed to commit merge: {stderr}")
        return
    
    print("✅ Current merge completed")
    
    # Switch to main branch
    print("🔄 Switching to main branch...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main: {stderr}")
        return
    
    # Pull latest changes
    print("📥 Pulling latest changes...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"❌ Failed to pull latest changes: {stderr}")
        return
    
    # Merge remaining PR branches
    branches = [
        "cursor/fix-netlify-build-and-merge-to-main-e358",
        "cursor/fix-netlify-build-and-merge-to-main-fbf7"
    ]
    
    for branch in branches:
        print(f"🔄 Merging {branch}...")
        success, stdout, stderr = run_command(f"git merge origin/{branch} --no-edit")
        if success:
            print(f"✅ Successfully merged {branch}")
        else:
            print(f"⚠️  Merge conflict or issue with {branch}: {stderr}")
            # Try with ours strategy
            success, stdout, stderr = run_command(f"git merge -X ours origin/{branch} --no-edit")
            if success:
                print(f"✅ Successfully merged {branch} with ours strategy")
            else:
                print(f"❌ Failed to merge {branch}")
    
    # Push all changes
    print("📤 Pushing changes to main...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Successfully pushed all changes to main")
    else:
        print(f"❌ Failed to push changes: {stderr}")
    
    print("🎉 PR merge process completed!")

if __name__ == "__main__":
    main()