#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the HEAD version
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file by choosing HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'\n(.*?)\n\n(.*?)\n        
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content
        
        # Replace all conflicts with HEAD version
        resolved_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers in one block
        # Remove any remaining  and         resolved_content = re.sub(r'.*?\n', '', resolved_content, flags=re.DOTALL)
        resolved_content = re.sub(r'        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Find all files with merge conflicts
    file_patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
    
    files_with_conflicts = []
    
    for pattern in file_patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '' in content:
                        files_with_conflicts.append(file_path)
            except:
                continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in files_with_conflicts:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"Successfully resolved conflicts in {resolved_count} files")
    
    # Verify no conflicts remain
    remaining_conflicts = 0
    for file_path in files_with_conflicts:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '' in content:
                    remaining_conflicts += 1
                    print(f"Warning: {file_path} still has unresolved conflicts")
        except:
            continue
    
    if remaining_conflicts == 0:
        print("All merge conflicts have been resolved!")
    else:
        print(f"Warning: {remaining_conflicts} files still have unresolved conflicts")

if __name__ == "__main__":
    main()