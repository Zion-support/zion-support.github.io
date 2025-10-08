#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for the zion.app repository.
This script systematically resolves all merge conflicts by choosing the most appropriate version.
"""

import os
import re
import glob
from pathlib import Path

def find_conflict_files(directory):
    """Find all files with merge conflicts."""
    conflict_files = []
    for root, dirs, files in os.walk(directory):
        # Skip certain directories
        skip_dirs = ['node_modules', '.git', 'dist', 'build', '.next', 'coverage']
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.md', '.css', '.html')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            conflict_files.append(file_path)
                except (UnicodeDecodeError, PermissionError):
                    continue
    return conflict_files

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file."""
    print(f"Resolving conflicts in: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except (UnicodeDecodeError, PermissionError) as e:
        print(f"Error reading {file_path}: {e}")
        return False
    
    original_content = content
    
    # Pattern to match merge conflicts
    conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
    
    def resolve_conflict(match):
        head_content = match.group(1).strip()
        other_content = match.group(2).strip()
        
        # Strategy: Choose the longer, more complete version
        # If they're similar length, prefer HEAD (current branch)
        if len(head_content) > len(other_content) * 1.2:
            return head_content
        elif len(other_content) > len(head_content) * 1.2:
            return other_content
        else:
            # Similar length, prefer HEAD but clean up any remaining conflict markers
            return head_content
    
    # Resolve conflicts
    resolved_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
    
    # Clean up any remaining conflict markers
    resolved_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', resolved_content, flags=re.DOTALL)
    
    # Remove any standalone conflict markers
    resolved_content = re.sub(r'^<<<<<<< HEAD$', '', resolved_content, flags=re.MULTILINE)
    resolved_content = re.sub(r'^=======$', '', resolved_content, flags=re.MULTILINE)
    resolved_content = re.sub(r'^>>>>>>> [^\n]+$', '', resolved_content, flags=re.MULTILINE)
    
    # Clean up multiple consecutive empty lines
    resolved_content = re.sub(r'\n\s*\n\s*\n', '\n\n', resolved_content)
    
    if resolved_content != original_content:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            print(f"✅ Resolved conflicts in: {file_path}")
            return True
        except (UnicodeDecodeError, PermissionError) as e:
            print(f"Error writing {file_path}: {e}")
            return False
    else:
        print(f"ℹ️  No conflicts found in: {file_path}")
        return True

def main():
    """Main function to resolve all merge conflicts."""
    print("🔍 Searching for files with merge conflicts...")
    
    # Find all files with conflicts
    conflict_files = find_conflict_files('.')
    
    if not conflict_files:
        print("✅ No files with merge conflicts found!")
        return
    
    print(f"📁 Found {len(conflict_files)} files with conflicts:")
    for file in conflict_files:
        print(f"  - {file}")
    
    print("\n🔧 Resolving conflicts...")
    
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"\n✅ Successfully resolved conflicts in {resolved_count}/{len(conflict_files)} files")
    
    # Verify no conflicts remain
    remaining_conflicts = find_conflict_files('.')
    if remaining_conflicts:
        print(f"⚠️  {len(remaining_conflicts)} files still have conflicts:")
        for file in remaining_conflicts:
            print(f"  - {file}")
    else:
        print("🎉 All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()