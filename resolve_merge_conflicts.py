#!/usr/bin/env python3
"""
Comprehensive script to resolve all merge conflicts in the codebase.
This script will automatically resolve merge conflicts by keeping the HEAD version.
"""

import os
import re
import glob
from pathlib import Path

def resolve_merge_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file by keeping HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving merge conflicts in: {file_path}")
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> [^\n]+'
        
        def resolve_conflict(match):
            head_content = match.group(1)
            # Keep the HEAD version (first group)
            return head_content
        
        # Replace all merge conflicts with HEAD version
        resolved_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files with merge conflicts."""
    file_extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.py', '*.json', '*.md', '*.css', '*.html']
    files_with_conflicts = []
    
    for ext in file_extensions:
        for file_path in glob.glob(f'**/{ext}', recursive=True):
            # Skip node_modules and other irrelevant directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next']):
                continue
            
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        files_with_conflicts.append(file_path)
            except:
                continue
    
    return files_with_conflicts

def main():
    """Main function to resolve all merge conflicts."""
    print("🔍 Scanning for files with merge conflicts...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    files_with_conflicts = find_files_with_conflicts()
    
    if not files_with_conflicts:
        print("✅ No merge conflicts found!")
        return
    
    print(f"📁 Found {len(files_with_conflicts)} files with merge conflicts:")
    for file_path in files_with_conflicts:
        print(f"  - {file_path}")
    
    print("\n🔧 Resolving merge conflicts...")
    
    resolved_count = 0
    for file_path in files_with_conflicts:
        if resolve_merge_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"\n✅ Successfully resolved merge conflicts in {resolved_count} files")
    
    # Verify no more conflicts
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"⚠️  Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("🎉 All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()