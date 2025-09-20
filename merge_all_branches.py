#!/usr/bin/env python3

import subprocess
import sys
import re
import time

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"

def get_all_branches():
    """Get all remote branches that need merging"""
    cmd = "git branch -r | grep -v 'origin/main' | grep -E '(pull|pr|backup|merge|codex|comprehensive|aggressive)' | head -50"
    returncode, stdout, stderr = run_command(cmd)
    
    if returncode != 0:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = []
    for line in stdout.strip().split('\n'):
        if line.strip():
            branch = line.strip().replace('origin/', '')
            branches.append(branch)
    
    return branches

def resolve_conflicts_automatically():
    """Automatically resolve merge conflicts"""
    print("🔧 Resolving merge conflicts automatically...")
    
    # Get list of conflicted files
    returncode, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if returncode != 0 or not stdout.strip():
        print("No conflicted files found")
        return True
    
    conflicted_files = stdout.strip().split('\n')
    print(f"Found {len(conflicted_files)} conflicted files")
    
    for file_path in conflicted_files:
        if not file_path.strip():
            continue
            
        print(f"Processing {file_path}...")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove conflict markers and keep both versions
            content = re.sub(r'<<<<<<< HEAD\n', '', content)
            content = re.sub(r'=======\n', '', content)
            content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
            
            # Clean up any remaining conflict artifacts
            content = re.sub(r'<<<<<<< [^\n]+\n', '', content)
            content = re.sub(r'=======\n', '', content)
            content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
            
            # Write back the cleaned content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Add the resolved file
            run_command(f"git add {file_path}")
            print(f"✅ Resolved conflicts in {file_path}")
            
        except Exception as e:
            print(f"❌ Error processing {file_path}: {e}")
            continue
    
    return True

def merge_branch(branch_name):
    """Merge a specific branch into main"""
    print(f"\n🔄 Merging branch: {branch_name}")
    
    # Checkout main branch
    returncode, stdout, stderr = run_command("git checkout main")
    if returncode != 0:
        print(f"❌ Error checking out main: {stderr}")
        return False
    
    # Pull latest changes
    returncode, stdout, stderr = run_command("git pull origin main --no-edit")
    if returncode != 0:
        print(f"❌ Error pulling main: {stderr}")
        return False
    
    # Try to merge the branch
    returncode, stdout, stderr = run_command(f"git merge origin/{branch_name} --no-edit")
    
    if returncode == 0:
        print(f"✅ Successfully merged {branch_name}")
        return True
    else:
        print(f"⚠️  Merge conflict in {branch_name}, attempting to resolve...")
        
        # Resolve conflicts automatically
        if resolve_conflicts_automatically():
            # Commit the merge
            returncode, stdout, stderr = run_command("git commit -m \"Merge branch {branch_name} - conflicts resolved automatically\"")
            if returncode == 0:
                print(f"✅ Successfully resolved conflicts and merged {branch_name}")
                return True
            else:
                print(f"❌ Failed to commit merge for {branch_name}: {stderr}")
                return False
        else:
            print(f"❌ Failed to resolve conflicts for {branch_name}")
            return False

def main():
    """Main function to merge all branches"""
    print("🚀 Starting comprehensive branch merging process...")
    
    # Get all branches that need merging
    branches = get_all_branches()
    print(f"Found {len(branches)} branches to merge")
    
    if not branches:
        print("No branches found to merge")
        return
    
    successful_merges = 0
    failed_merges = 0
    
    for i, branch in enumerate(branches, 1):
        print(f"\n📋 Processing branch {i}/{len(branches)}: {branch}")
        
        if merge_branch(branch):
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Small delay to avoid overwhelming the system
        time.sleep(1)
    
    print(f"\n🎉 Merge process completed!")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    
    # Push all changes
    print("\n📤 Pushing changes to remote...")
    returncode, stdout, stderr = run_command("git push origin main")
    if returncode == 0:
        print("✅ Successfully pushed all changes to remote")
    else:
        print(f"❌ Error pushing to remote: {stderr}")

if __name__ == "__main__":
    main()