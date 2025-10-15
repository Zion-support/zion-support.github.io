#!/usr/bin/env python3
"""
Script to resolve merge conflicts by accepting HEAD version and removing conflict markers.
This script will:
1. Find all files with merge conflict markers
2. Remove conflict markers and keep only the HEAD version
3. Clean up any remaining artifacts
"""

import os
import re
import glob
from pathlib import Path

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file by keeping HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content into lines
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        keep_lines = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_lines = True
                continue
            elif line.strip() == '=======':
                keep_lines = False
                continue
            elif line.strip().startswith('>>>>>>> '):
                in_conflict = False
                keep_lines = False
                continue
            elif in_conflict and not keep_lines:
                # Skip lines in the other branch
                continue
            else:
                # Keep the line
                resolved_lines.append(line)
        
        # Write resolved content back
        resolved_content = '\n'.join(resolved_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"✅ Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files with merge conflict markers."""
    conflict_files = []
    
    # Common file extensions to check
    extensions = ['*.ts', '*.tsx', '*.js', '*.jsx', '*.json', '*.md', '*.html', '*.css']
    
    for ext in extensions:
        for file_path in glob.glob(f'**/{ext}', recursive=True):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        conflict_files.append(file_path)
            except:
                continue
    
    return conflict_files

def main():
    print("🔍 Searching for files with merge conflicts...")
    conflict_files = find_files_with_conflicts()
    
    if not conflict_files:
        print("✅ No files with merge conflicts found!")
        return
    
    print(f"📁 Found {len(conflict_files)} files with merge conflicts")
    
    resolved_count = 0
    failed_count = 0
    
    for file_path in conflict_files:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
        else:
            failed_count += 1
    
    print(f"\n📊 Summary:")
    print(f"✅ Successfully resolved: {resolved_count} files")
    print(f"❌ Failed to resolve: {failed_count} files")
    
    if resolved_count > 0:
        print("\n🎉 Merge conflicts resolved! You can now run your build and tests.")
    else:
        print("\n⚠️  No conflicts were resolved. Please check the files manually.")

if __name__ == "__main__":
    main()