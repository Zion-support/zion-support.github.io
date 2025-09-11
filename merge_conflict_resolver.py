#!/usr/bin/env python3
import os
import subprocess
import re
import sys

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def find_merge_conflicts():
    """Find files with merge conflicts"""
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        print(f"Error checking git status: {stderr}")
        return []
    
    conflicted_files = []
    for line in stdout.split('\n'):
        if line.startswith('UU') or 'both modified' in line or 'both added' in line:
            file_path = line.split()[-1]
            conflicted_files.append(file_path)
    
    return conflicted_files

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # Remove conflict markers and keep HEAD version
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n?', r'\1', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< [^\n]+\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    print("🚀 Starting merge conflict resolution...")
    
    # Check if we're in a git repository
    success, _, _ = run_command("git rev-parse --is-inside-work-tree")
    if not success:
        print("❌ Not in a git repository")
        return
    
    # Find conflicted files
    conflicted_files = find_merge_conflicts()
    
    if not conflicted_files:
        print("✅ No merge conflicts found")
    else:
        print(f"Found {len(conflicted_files)} files with conflicts:")
        for file in conflicted_files:
            print(f"  - {file}")
        
        # Resolve conflicts
        resolved_count = 0
        for file in conflicted_files:
            if resolve_conflicts_in_file(file):
                resolved_count += 1
        
        print(f"✅ Resolved conflicts in {resolved_count}/{len(conflicted_files)} files")
        
        # Add and commit resolved files
        run_command("git add .")
        run_command('git commit -m "Resolve merge conflicts automatically"')
    
    # Try to find and merge branches
    print("🔍 Looking for branches to merge...")
    
    # Get remote branches
    success, stdout, stderr = run_command("git branch -r")
    if not success:
        print(f"Error getting branches: {stderr}")
        return
    
    branches = []
    for line in stdout.split('\n'):
        line = line.strip()
        if line and not line.endswith('origin/main') and 'origin/' in line:
            branch_name = line.replace('origin/', '')
            if any(keyword in branch_name.lower() for keyword in ['cursor', 'check', 'fix', 'merge']):
                branches.append(branch_name)
    
    print(f"Found {len(branches)} potential branches to merge:")
    for branch in branches[:5]:  # Limit to first 5 branches
        print(f"  - {branch}")
    
    # Try to merge branches
    for branch in branches[:5]:
        print(f"🔄 Attempting to merge: {branch}")
        success, stdout, stderr = run_command(f"git merge origin/{branch} --no-edit")
        if success:
            print(f"✅ Successfully merged: {branch}")
        else:
            print(f"⚠️ Failed to merge: {branch}")
            # Try to resolve any conflicts that arose
            conflicted_files = find_merge_conflicts()
            if conflicted_files:
                print(f"Resolving conflicts from {branch}...")
                for file in conflicted_files:
                    resolve_conflicts_in_file(file)
                run_command("git add .")
                run_command(f'git commit -m "Resolve conflicts from {branch}"')
                print(f"✅ Conflicts resolved for: {branch}")
    
    # Push changes
    print("📤 Pushing changes...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Changes pushed successfully")
    else:
        print(f"⚠️ Push failed: {stderr}")
    
    print("🎉 Merge conflict resolution completed!")

if __name__ == "__main__":
    main()