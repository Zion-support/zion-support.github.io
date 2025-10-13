#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for the Zion Tech Group website.
This script resolves merge conflicts by keeping the HEAD version and removing conflict markers.
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
        if '' not in content:
            return False, "No merge conflicts found"
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'\n(.*?)\n\n(.*?)\n        
        # Replace conflicts with HEAD version
        resolved_content = re.sub(conflict_pattern, r'\1', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        resolved_content = re.sub(r'\n?', '', resolved_content)
        resolved_content = re.sub(r'\n?', '', resolved_content)
        resolved_content = re.sub(r'        
        # Clean up any double newlines that might have been created
        resolved_content = re.sub(r'\n\n\n+', '\n\n', resolved_content)
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True, "Merge conflicts resolved"
        
    except Exception as e:
        return False, f"Error processing file: {str(e)}"

def find_files_with_conflicts():
    """Find all files with merge conflicts."""
    files_with_conflicts = []
    
    # Search patterns for different file types
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.md',
        '**/*.py',
        '**/*.sh',
        '**/*.cjs'
    ]
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories we don't want to process
            if any(skip_dir in file_path for skip_dir in ['node_modules', '.git', 'dist', '.next']):
                continue
                
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '' in content:
                        files_with_conflicts.append(file_path)
            except (UnicodeDecodeError, PermissionError, FileNotFoundError):
                # Skip files that can't be read
                continue
    
    return files_with_conflicts

def main():
    """Main function to resolve all merge conflicts."""
    print("🔍 Searching for files with merge conflicts...")
    
    files_with_conflicts = find_files_with_conflicts()
    
    if not files_with_conflicts:
        print("✅ No files with merge conflicts found!")
        return
    
    print(f"📁 Found {len(files_with_conflicts)} files with merge conflicts:")
    for file_path in files_with_conflicts:
        print(f"  - {file_path}")
    
    print("\n🔧 Resolving merge conflicts...")
    
    resolved_count = 0
    failed_count = 0
    
    for file_path in files_with_conflicts:
        print(f"Processing: {file_path}")
        success, message = resolve_merge_conflicts(file_path)
        
        if success:
            resolved_count += 1
            print(f"  ✅ {message}")
        else:
            failed_count += 1
            print(f"  ❌ {message}")
    
    print(f"\n📊 Summary:")
    print(f"  ✅ Successfully resolved: {resolved_count} files")
    print(f"  ❌ Failed to resolve: {failed_count} files")
    
    if resolved_count > 0:
        print("\n🎉 Merge conflicts resolution completed!")
    else:
        print("\n⚠️  No files were successfully resolved.")

if __name__ == "__main__":
    main()