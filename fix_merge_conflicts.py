#!/usr/bin/env python3
"""
<<<<<<< HEAD
Script to fix merge conflicts by keeping the HEAD version and removing conflict markers.
=======
Script to automatically resolve merge conflicts by choosing the HEAD version
and removing conflict markers.
>>>>>>> cursor/analyze-improve-and-deploy-application-29f3
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
    """Fix merge conflicts in a single file."""
>>>>>>> cursor/analyze-improve-and-deploy-application-29f3
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content + '\n'
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be extra whitespace or different patterns
        new_content = re.sub(r'<<<<<<< HEAD\n', '', new_content)
        new_content = re.sub(r'=======\n.*?\n>>>>>>> [^\n]+\n', '', new_content, flags=re.DOTALL)
        
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
            f.write(new_content)
        
>>>>>>> cursor/analyze-improve-and-deploy-application-29f3
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
<<<<<<< HEAD
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
=======
    """Main function to fix all merge conflicts."""
    # Get all files with merge conflicts
    files_with_conflicts = []
    
    # Search for common file extensions
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.json', '*.md', '*.css', '*.html']
    
    for ext in extensions:
        files_with_conflicts.extend(glob.glob(f'**/{ext}', recursive=True))
>>>>>>> cursor/analyze-improve-and-deploy-application-29f3
    
    fixed_count = 0
    total_conflicts = 0
    
<<<<<<< HEAD
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
=======
    for file_path in files_with_conflicts:
        if os.path.isfile(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        total_conflicts += 1
                        if fix_merge_conflicts(file_path):
                            fixed_count += 1
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nFixed {fixed_count} out of {total_conflicts} files with merge conflicts")
>>>>>>> cursor/analyze-improve-and-deploy-application-29f3

if __name__ == "__main__":
    main()