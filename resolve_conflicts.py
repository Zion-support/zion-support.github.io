#!/usr/bin/env python3
"""
Conflict Resolution Script for zion.app repository
This script resolves common merge conflicts automatically
"""

import os
import re
import subprocess
import sys
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def find_conflict_files():
    """Find files with merge conflicts"""
    success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if success:
        return [f.strip() for f in stdout.split('\n') if f.strip()]
    return []

def resolve_jsx_conflicts(file_path):
    """Resolve JSX/TSX conflicts"""
    print(f"Resolving JSX conflicts in {file_path}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove conflict markers and keep the newer version (after =======)
    lines = content.split('\n')
    resolved_lines = []
    in_conflict = False
    keep_section = False
    
    for line in lines:
        if line.startswith('<<<<<<<'):
            in_conflict = True
            keep_section = False
        elif line.startswith('======='):
            keep_section = True
        elif line.startswith('>>>>>>>'):
            in_conflict = False
            keep_section = False
        elif not in_conflict or keep_section:
            resolved_lines.append(line)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(resolved_lines))

def resolve_json_conflicts(file_path):
    """Resolve JSON conflicts"""
    print(f"Resolving JSON conflicts in {file_path}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # For JSON files, we'll keep the newer version
    lines = content.split('\n')
    resolved_lines = []
    in_conflict = False
    keep_section = False
    
    for line in lines:
        if line.startswith('<<<<<<<'):
            in_conflict = True
            keep_section = False
        elif line.startswith('======='):
            keep_section = True
        elif line.startswith('>>>>>>>'):
            in_conflict = False
            keep_section = False
        elif not in_conflict or keep_section:
            resolved_lines.append(line)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(resolved_lines))

def resolve_typescript_conflicts(file_path):
    """Resolve TypeScript conflicts"""
    print(f"Resolving TypeScript conflicts in {file_path}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove conflict markers and keep the newer version
    lines = content.split('\n')
    resolved_lines = []
    in_conflict = False
    keep_section = False
    
    for line in lines:
        if line.startswith('<<<<<<<'):
            in_conflict = True
            keep_section = False
        elif line.startswith('======='):
            keep_section = True
        elif line.startswith('>>>>>>>'):
            in_conflict = False
            keep_section = False
        elif not in_conflict or keep_section:
            resolved_lines.append(line)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(resolved_lines))

def resolve_conflicts():
    """Main conflict resolution function"""
    print("🔍 Searching for merge conflicts...")
    
    conflict_files = find_conflict_files()
    
    if not conflict_files:
        print("✅ No merge conflicts found!")
        return True
    
    print(f"⚠️  Found {len(conflict_files)} files with conflicts:")
    for file in conflict_files:
        print(f"  - {file}")
    
    print("\n🔧 Resolving conflicts...")
    
    for file_path in conflict_files:
        if not os.path.exists(file_path):
            print(f"⚠️  File {file_path} does not exist, skipping...")
            continue
            
        try:
            if file_path.endswith(('.tsx', '.jsx')):
                resolve_jsx_conflicts(file_path)
            elif file_path.endswith('.ts'):
                resolve_typescript_conflicts(file_path)
            elif file_path.endswith('.json'):
                resolve_json_conflicts(file_path)
            else:
                # Generic conflict resolution
                resolve_typescript_conflicts(file_path)
            
            print(f"✅ Resolved conflicts in {file_path}")
            
        except Exception as e:
            print(f"❌ Error resolving conflicts in {file_path}: {e}")
            return False
    
    print("\n📝 Adding resolved files to git...")
    success, stdout, stderr = run_command("git add .")
    if not success:
        print(f"❌ Error adding files: {stderr}")
        return False
    
    print("✅ All conflicts resolved and files staged!")
    return True

def main():
    """Main function"""
    print("🚀 Starting conflict resolution process...")
    
    # Check if we're in a git repository
    success, _, _ = run_command("git rev-parse --git-dir")
    if not success:
        print("❌ Not in a git repository!")
        sys.exit(1)
    
    # Check if there are any conflicts
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        print(f"❌ Error checking git status: {stderr}")
        sys.exit(1)
    
    if "UU" not in stdout and "<<<<<<<" not in stdout:
        print("✅ No merge conflicts detected!")
        return
    
    # Resolve conflicts
    if resolve_conflicts():
        print("\n🎉 Conflict resolution completed successfully!")
        print("📝 You can now commit the resolved changes with: git commit")
    else:
        print("\n❌ Conflict resolution failed!")
        sys.exit(1)

if __name__ == "__main__":
    main()