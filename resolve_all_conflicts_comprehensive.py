#!/usr/bin/env python3
"""
Comprehensive script to resolve all merge conflicts in the codebase
"""

import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '' not in content:
            return False
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern 1:         content = re.sub(r'
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    print("🔍 Scanning for files with merge conflicts...")
    
    # Get all files with merge conflicts
    conflict_files = []
    
    # Search for common file extensions
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.py', '*.sh', '*.cjs', '*.toml', '*.txt']
    
    for ext in extensions:
        files = glob.glob(f'**/{ext}', recursive=True)
        for file_path in files:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '' in content:
                        conflict_files.append(file_path)
            except:
                continue
    
    print(f"📁 Found {len(conflict_files)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"✅ Successfully resolved conflicts in {resolved_count} files")
    
    # Verify no more conflicts
    remaining_conflicts = []
    for ext in extensions:
        files = glob.glob(f'**/{ext}', recursive=True)
        for file_path in files:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content or '
                        remaining_conflicts.append(file_path)
            except:
                continue
    
    if remaining_conflicts:
        print(f"⚠️  {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"   - {file_path}")
    else:
        print("🎉 All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()