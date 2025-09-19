#!/usr/bin/env python3

import os
import re
import subprocess
import sys
from pathlib import Path

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflict markers
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # Remove conflict markers and keep the newer version (after =======)
        # Pattern 1: Remove everything from <<<<<<< HEAD to =======
        content = re.sub(r'<<<<<<< HEAD.*?=======\n', '', content, flags=re.DOTALL)
        
        # Pattern 2: Remove >>>>>>> origin/... lines
        content = re.sub(r'>>>>>>> origin/.*\n?', '', content)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'^<<<<<<< HEAD$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^=======$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> origin/.*$', '', content, flags=re.MULTILINE)
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error resolving {file_path}: {e}")
        return False

def find_conflict_files():
    """Find all files with merge conflicts"""
    conflict_files = []
    
    # Search for files with conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip certain directories
        dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules', '.next', 'dist', 'build']]
        
        for file in files:
            if file.endswith('.backup.'):
                continue
                
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        conflict_files.append(file_path)
            except:
                continue
    
    return conflict_files

def main():
    print("🚀 Starting conflict resolution process...")
    
    # Find all files with conflicts
    conflict_files = find_conflict_files()
    
    if not conflict_files:
        print("✅ No files with merge conflicts found!")
        return
    
    print(f"Found {len(conflict_files)} files with conflicts:")
    for file in conflict_files[:10]:  # Show first 10
        print(f"  - {file}")
    if len(conflict_files) > 10:
        print(f"  ... and {len(conflict_files) - 10} more")
    
    # Resolve conflicts in each file
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"\n📊 Resolution Summary:")
    print(f"Total files processed: {len(conflict_files)}")
    print(f"Successfully resolved: {resolved_count}")
    print(f"Failed to resolve: {len(conflict_files) - resolved_count}")
    
    if resolved_count > 0:
        print("\n✅ Conflict resolution completed!")
        print("Ready to commit and merge changes.")
    else:
        print("\n❌ No conflicts were resolved.")

if __name__ == "__main__":
    main()