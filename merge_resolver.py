#!/usr/bin/env python3

import subprocess
import sys
import os
import re

def run_command(cmd, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=300)
        if check and result.returncode != 0:
            print(f"Command failed: {cmd}")
            print(f"Error: {result.stderr}")
        return result
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return None

def main():
    print("🚀 Starting comprehensive merge resolution...")
    
    # Step 1: Configure git
    print("📋 Configuring git settings...")
    run_command("git config pull.rebase false")
    run_command("git config merge.tool vimdiff")
    
    # Step 2: Switch to main branch
    print("🌿 Switching to main branch...")
    run_command("git checkout main")
    
    # Step 3: Pull latest changes
    print("⬇️ Pulling latest changes...")
    result = run_command("git pull origin main", check=False)
    
    if result and result.returncode != 0:
        print("⚠️ Pull had conflicts, resolving...")
        
        # Check for conflicts
        status_result = run_command("git status --porcelain")
        if status_result and "UU" in status_result.stdout:
            print("🔧 Resolving pull conflicts...")
            
            # Get conflicted files
            conflicted_files = []
            for line in status_result.stdout.split('\n'):
                if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
                    file_path = line[3:].strip()
                    conflicted_files.append(file_path)
            
            for file_path in conflicted_files:
                print(f"  Resolving: {file_path}")
                
                # Remove build artifacts
                if any(pattern in file_path for pattern in ['tsconfig.tsbuildinfo', '.next/', 'dist/', 'node_modules/']):
                    run_command(f"git rm '{file_path}'", check=False)
                    run_command(f"rm -f '{file_path}'", check=False)
                else:
                    run_command(f"git add '{file_path}'", check=False)
            
            run_command("git commit --no-edit", check=False)
    
    # Step 4: Find cursor branches
    print("🔍 Finding cursor branches...")
    result = run_command("git branch -r | grep 'cursor/' | grep -v 'backup' | head -10")
    
    if result and result.stdout:
        branches = result.stdout.strip().split('\n')
        print(f"Found {len(branches)} cursor branches")
        
        merged_count = 0
        failed_count = 0
        
        for branch in branches:
            branch_name = branch.strip().replace('origin/', '')
            if branch_name == 'main' or 'backup' in branch_name:
                continue
                
            print(f"\n🔄 Processing: {branch_name}")
            
            # Try to merge
            merge_result = run_command(f"git merge origin/{branch_name} --no-edit", check=False)
            
            if merge_result and merge_result.returncode == 0:
                print(f"✅ Merged: {branch_name}")
                merged_count += 1
            else:
                print(f"⚠️ Conflict in: {branch_name}")
                
                # Check for conflicts
                status_result = run_command("git status --porcelain")
                if status_result and ("UU" in status_result.stdout or "AA" in status_result.stdout):
                    print(f"  Resolving conflicts...")
                    
                    # Get conflicted files
                    conflicted_files = []
                    for line in status_result.stdout.split('\n'):
                        if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
                            file_path = line[3:].strip()
                            conflicted_files.append(file_path)
                    
                    for file_path in conflicted_files:
                        print(f"    Resolving: {file_path}")
                        
                        # Handle different file types
                        if any(pattern in file_path for pattern in ['tsconfig.tsbuildinfo', '.next/', 'dist/', 'node_modules/']):
                            run_command(f"git rm '{file_path}'", check=False)
                            run_command(f"rm -f '{file_path}'", check=False)
                        elif file_path in ['package-lock.json', 'yarn.lock']:
                            run_command(f"git checkout --ours '{file_path}'", check=False)
                            run_command(f"git add '{file_path}'", check=False)
                        elif file_path in ['netlify.toml', 'next.config.js', 'vite.config.js']:
                            run_command(f"git checkout --ours '{file_path}'", check=False)
                            run_command(f"git add '{file_path}'", check=False)
                        else:
                            run_command(f"git add '{file_path}'", check=False)
                    
                    # Commit resolution
                    commit_result = run_command("git commit --no-edit", check=False)
                    if commit_result and commit_result.returncode == 0:
                        print(f"✅ Resolved and merged: {branch_name}")
                        merged_count += 1
                    else:
                        print(f"❌ Failed to resolve: {branch_name}")
                        run_command("git merge --abort", check=False)
                        failed_count += 1
                else:
                    print(f"❌ Merge failed: {branch_name}")
                    run_command("git merge --abort", check=False)
                    failed_count += 1
        
        print(f"\n📊 Merge Summary:")
        print(f"Successfully merged: {merged_count} branches")
        print(f"Failed to merge: {failed_count} branches")
    
    # Step 5: Final push
    print("\n⬆️ Pushing changes to origin/main...")
    push_result = run_command("git push origin main", check=False)
    
    if push_result and push_result.returncode == 0:
        print("✅ Successfully pushed all changes!")
    else:
        print("⚠️ Push failed, but changes are ready locally")
    
    print("\n🎉 Merge resolution process completed!")

if __name__ == "__main__":
    main()