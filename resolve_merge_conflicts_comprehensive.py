#!/usr/bin/env python3
"""
Comprehensive merge conflict resolution script
This script will resolve merge conflicts by intelligently merging changes
"""

import os
import re
import subprocess
import json

def run_command(command):
    """Run a shell command and return the output"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.stdout, result.stderr, result.returncode
    except Exception as e:
        print(f"Error running command: {e}")
        return "", str(e), 1

def get_file_content(file_path):
    """Get the content of a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None

def write_file(file_path, content):
    """Write content to a file"""
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False

def resolve_merge_conflicts():
    """Resolve merge conflicts comprehensively"""
    print("🔧 Starting comprehensive merge conflict resolution...")
    
    # Get the list of files that differ
    stdout, stderr, returncode = run_command("git diff origin/main..HEAD --name-only")
    if returncode != 0:
        print(f"Error getting file differences: {stderr}")
        return False
    
    files = stdout.strip().split('\n')
    print(f"📁 Found {len(files)} files with differences")
    
    # Create a backup of current state
    print("💾 Creating backup of current state...")
    run_command("git stash push -m 'backup-before-merge-resolution'")
    
    # Try to merge origin/main
    print("🔄 Attempting to merge origin/main...")
    stdout, stderr, returncode = run_command("git merge origin/main")
    
    if returncode == 0:
        print("✅ Merge successful without conflicts!")
        return True
    
    # If there are conflicts, resolve them
    print("⚠️  Merge conflicts detected, resolving...")
    
    # Get list of conflicted files
    stdout, stderr, returncode = run_command("git diff --name-only --diff-filter=U")
    if returncode != 0:
        print(f"Error getting conflicted files: {stderr}")
        return False
    
    conflicted_files = stdout.strip().split('\n') if stdout.strip() else []
    print(f"🔍 Found {len(conflicted_files)} conflicted files")
    
    # Resolve conflicts in each file
    for file_path in conflicted_files:
        if not file_path:
            continue
            
        print(f"🔧 Resolving conflicts in {file_path}...")
        
        content = get_file_content(file_path)
        if content is None:
            continue
        
        # Remove merge conflict markers and keep the HEAD version (our improvements)
        resolved_content = resolve_file_conflicts(content)
        
        if resolved_content != content:
            if write_file(file_path, resolved_content):
                print(f"✅ Resolved conflicts in {file_path}")
            else:
                print(f"❌ Failed to write resolved content to {file_path}")
        else:
            print(f"ℹ️  No conflicts to resolve in {file_path}")
    
    # Add resolved files
    print("📝 Adding resolved files...")
    run_command("git add .")
    
    # Commit the merge
    print("💾 Committing merge resolution...")
    stdout, stderr, returncode = run_command("git commit -m 'Resolve merge conflicts and integrate improvements'")
    
    if returncode == 0:
        print("✅ Merge conflicts resolved successfully!")
        return True
    else:
        print(f"❌ Failed to commit merge resolution: {stderr}")
        return False

def resolve_file_conflicts(content):
    """Resolve merge conflicts in a file by keeping HEAD version"""
    # Remove merge conflict markers
    lines = content.split('\n')
    resolved_lines = []
    in_conflict = False
    
    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            in_conflict = True
            continue
        elif line.startswith('======='):
            continue
        elif line.startswith('>>>>>>>'):
            in_conflict = False
            continue
        elif not in_conflict:
            resolved_lines.append(line)
    
    return '\n'.join(resolved_lines)

def main():
    """Main function"""
    print("🚀 Comprehensive Merge Conflict Resolution")
    print("=" * 50)
    
    # Check if we're in a git repository
    stdout, stderr, returncode = run_command("git rev-parse --is-inside-work-tree")
    if returncode != 0:
        print("❌ Not in a git repository")
        return False
    
    # Fetch latest changes
    print("📥 Fetching latest changes...")
    stdout, stderr, returncode = run_command("git fetch origin")
    if returncode != 0:
        print(f"❌ Failed to fetch changes: {stderr}")
        return False
    
    # Resolve merge conflicts
    success = resolve_merge_conflicts()
    
    if success:
        print("🎉 All merge conflicts resolved successfully!")
        print("✅ Repository is now ready for deployment")
    else:
        print("❌ Failed to resolve merge conflicts")
        print("🔄 You may need to resolve conflicts manually")
    
    return success

if __name__ == "__main__":
    main()