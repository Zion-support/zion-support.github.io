#!/usr/bin/env python3
<<<<<<< HEAD
"""
Script to automatically resolve merge conflicts by keeping the latest version
"""
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]*'
=======
<<<<<<< HEAD
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
>>>>>>> 483f75ef6f90550321090516b2130e42775ac7eb
        
        # Replace conflicts with the content after =======
        fixed_content = re.sub(conflict_pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*', '', fixed_content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'^<<<<<<< HEAD.*?$', '', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^=======.*?$', '', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^>>>>>>> [^\n]*$', '', fixed_content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
=======
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflicts and keep the HEAD version
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Clean up multiple newlines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Main function to fix all merge conflicts"""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/app/**/*.js',
        '/workspace/app/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
<<<<<<< HEAD
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed merge conflicts in {fixed_count} files")
=======
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")
=======
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
    
    fixed_files = []
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                if fix_merge_conflicts(file_path):
                    fixed_files.append(file_path)
    
    print(f"\nFixed merge conflicts in {len(fixed_files)} files:")
    for file_path in fixed_files:
        print(f"  - {file_path}")
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
>>>>>>> 483f75ef6f90550321090516b2130e42775ac7eb

if __name__ == "__main__":
    main()