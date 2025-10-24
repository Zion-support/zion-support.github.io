#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in TSX files.
This script will:
1. Find all files with merge conflict markers
2. For each file, choose the appropriate version (usually the newer one)
3. Clean up the merge conflict markers
4. Ensure proper JSX structure
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split content by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            # Fallback: try to clean up any remaining markers
            content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
            content = re.sub(r'=======.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
            content = re.sub(r'<<<<<<< HEAD.*?=======', '', content, flags=re.DOTALL)
        else:
            # Reconstruct the file by choosing the appropriate parts
            new_content = parts[0]  # Content before first conflict
            
            for i in range(1, len(parts), 3):
                if i + 2 < len(parts):
                    # Choose the second version (after =======) as it's usually newer
                    chosen_version = parts[i + 1]
                    new_content += chosen_version
                    if i + 3 < len(parts):
                        new_content += parts[i + 3]  # Content after conflict
                else:
                    new_content += parts[i]
            
            content = new_content
        
        # Clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?=======', '', content, flags=re.DOTALL)
        
        # Clean up any orphaned ======= or >>>>>>> markers
        content = re.sub(r'^=======.*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> .*$', '', content, flags=re.MULTILINE)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Ensure proper JSX structure - add missing closing tags if needed
        # This is a basic fix for common JSX issues
        if content.strip().endswith('</div>') or content.strip().endswith('</main>') or content.strip().endswith('</>'):
            pass  # Already properly closed
        elif 'export default' in content and not content.strip().endswith('}'):
            # Add missing closing brace for export default
            content = content.rstrip() + '\n}'
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    app_dir = Path('/workspace/app')
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all TSX files with merge conflicts
    tsx_files = list(app_dir.rglob('*.tsx'))
    files_with_conflicts = []
    
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                    files_with_conflicts.append(file_path)
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Verify no more conflicts exist
    remaining_conflicts = []
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                    remaining_conflicts.append(file_path)
        except Exception:
            pass
    
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()