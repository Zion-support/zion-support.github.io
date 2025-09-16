#!/usr/bin/env python3

import subprocess
import json
import requests
import sys
import os

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"

def get_open_prs():
    """Get open PRs from GitHub API"""
    try:
        url = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open"
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Error fetching PRs: {response.status_code}")
            return []
    except Exception as e:
        print(f"Error fetching PRs: {e}")
        return []

def main():
    print("🚀 Starting GitHub PR merge process...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Get open PRs
    print("📋 Fetching open PRs from GitHub...")
    prs = get_open_prs()
    
    if not prs:
        print("❌ No open PRs found or error fetching PRs")
        return
    
    print(f"📊 Found {len(prs)} open PRs")
    
    # Process each PR
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        pr_branch = pr['head']['ref']
        pr_mergeable = pr.get('mergeable', None)
        
        print(f"\n🔄 Processing PR #{pr_number}: {pr_title}")
        print(f"   Branch: {pr_branch}")
        print(f"   Mergeable: {pr_mergeable}")
        
        # Check if branch exists locally
        success, stdout, stderr = run_command(f"git ls-remote --heads origin {pr_branch}")
        if not success:
            print(f"❌ Branch {pr_branch} doesn't exist, skipping...")
            continue
        
        # Check if already merged
        success, stdout, stderr = run_command(f"git branch --merged main | grep {pr_branch}")
        if success:
            print(f"⏭️  Branch {pr_branch} already merged, skipping...")
            continue
        
        # Try to merge
        print(f"✅ Attempting to merge {pr_branch}...")
        success, stdout, stderr = run_command(f"git merge --no-commit --no-ff origin/{pr_branch}")
        
        if success:
            print(f"✅ Successfully merged {pr_branch}")
            # Commit the merge
            success, stdout, stderr = run_command(f"git commit -m 'Merge PR #{pr_number}: {pr_title}'")
            if not success:
                print(f"❌ Error committing merge: {stderr}")
        else:
            print(f"⚠️  Merge conflicts in {pr_branch}, resolving...")
            
            # Get conflicted files
            success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
            if success and stdout.strip():
                conflicted_files = [f.strip() for f in stdout.split('\n') if f.strip()]
                print(f"📋 Conflicted files: {conflicted_files}")
                
                # Resolve conflicts
                for file in conflicted_files:
                    if os.path.exists(file):
                        print(f"🔧 Resolving conflicts in {file}...")
                        
                        # For critical files, keep main version
                        if file in ['package.json', 'package-lock.json', 'next.config.js', 'tsconfig.json']:
                            print(f"📦 Critical file, keeping main version...")
                            success, stdout, stderr = run_command(f"git checkout --ours {file}")
                        else:
                            print(f"📝 Regular file, removing conflict markers...")
                            # Remove conflict markers
                            success, stdout, stderr = run_command(f"sed -i '/<<<<<<< HEAD/,/=======/d' {file}")
                            success, stdout, stderr = run_command(f"sed -i '/>>>>>>> /d' {file}")
                
                # Add resolved files
                success, stdout, stderr = run_command("git add .")
                if success:
                    # Commit the merge
                    success, stdout, stderr = run_command(f"git commit -m 'Resolve merge conflicts for PR #{pr_number}: {pr_title}'")
                    if success:
                        print(f"✅ Successfully resolved conflicts and merged {pr_branch}")
                    else:
                        print(f"❌ Error committing resolved merge: {stderr}")
                else:
                    print(f"❌ Error adding resolved files: {stderr}")
            else:
                print(f"❌ No conflicted files found, aborting merge...")
                run_command("git merge --abort")
    
    # Push changes
    print("\n💾 Pushing changes to remote...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Successfully pushed changes to remote")
    else:
        print(f"❌ Error pushing changes: {stderr}")
    
    print("\n🎉 GitHub PR merge process completed!")
    
    # Final status
    success, stdout, stderr = run_command("git status --short")
    if success:
        print(f"📊 Final status: {stdout}")

if __name__ == "__main__":
    main()