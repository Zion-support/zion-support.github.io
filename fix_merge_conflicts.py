#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Pattern to match merge conflict blocks
        # This will match from <<<<<<< HEAD to >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        # Replace with HEAD version (first capture group)
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be extra whitespace or different patterns
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', new_content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n?', '', new_content)
        new_content = re.sub(r'=======\n?', '', new_content)
        new_content = re.sub(r'>>>>>>> [^\n]+\n?', '', new_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JavaScript files
    patterns = [
        './app/**/*.tsx',
        './app/**/*.ts', 
        './app/**/*.js',
        './app/**/*.jsx',
        './src/**/*.tsx',
        './src/**/*.ts',
        './src/**/*.js', 
        './src/**/*.jsx',
        './components/**/*.tsx',
        './components/**/*.ts',
        './components/**/*.js',
        './components/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    total_conflicts = 0
    
    for file_path in files_to_fix:
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

if __name__ == "__main__":
    main()