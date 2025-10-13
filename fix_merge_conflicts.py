#!/usr/bin/env python3
"""
Script to fix merge conflicts by keeping the HEAD version and removing conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
<<<<<<< HEAD
<<<<<<< HEAD
    """Fix merge conflicts by keeping the newer version (after =======)"""
=======
    """Fix merge conflicts in a single file."""
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbe3
=======
    """Fix merge conflicts in a single file by choosing the HEAD version"""
>>>>>>> cursor/website-audit-and-update-with-deployment-3b6d
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match from <<<<<<< HEAD to ======= (keep this part)
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern1, r'\1\n', content, flags=re.DOTALL)
        
        # Pattern to match from ======= to >>>>>>> (remove this part)
        pattern2 = r'=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
<<<<<<< HEAD
            f.write(fixed_content)
            
=======
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts in one file
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n?', '', fixed_content)
        fixed_content = re.sub(r'=======\n?', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n?', '', fixed_content)
        
        # Clean up any extra newlines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbe3
=======
            f.write(content)
        
>>>>>>> cursor/website-audit-and-update-with-deployment-3b6d
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
<<<<<<< HEAD
    # Find all TypeScript/JavaScript files with merge conflicts
=======
    # Find all files with merge conflicts
>>>>>>> cursor/website-audit-and-update-with-deployment-3b6d
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
    
    fixed_count = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
=======
    """Main function to fix all merge conflicts."""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'hooks/**/*.ts',
        'hooks/**/*.tsx',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check for merge conflicts...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has merge conflicts
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                    if fix_merge_conflicts(file_path):
                        fixed_count += 1
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"Fixed merge conflicts in {fixed_count} files.")
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbe3

if __name__ == "__main__":
    main()