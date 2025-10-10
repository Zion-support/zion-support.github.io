#!/usr/bin/env python3
"""
Script to fix merge conflicts in the codebase
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep HEAD content
        # Pattern to match merge conflicts and keep the HEAD part
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+'
        
        def replace_conflict(match):
            head_content = match.group(1)
            # Clean up any extra whitespace
            return head_content.strip()
        
        # Replace all merge conflicts
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # If there are still conflict markers, try a more aggressive approach
        if '<<<<<<< HEAD' in new_content:
            lines = new_content.split('\n')
            new_lines = []
            skip_until_end = False
            
            for line in lines:
                if line.strip() == '<<<<<<< HEAD':
                    skip_until_end = False
                    continue
                elif line.strip() == '=======':
                    skip_until_end = True
                    continue
                elif line.strip().startswith('>>>>>>>'):
                    skip_until_end = False
                    continue
                elif not skip_until_end:
                    new_lines.append(line)
            
            new_content = '\n'.join(new_lines)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            total_files += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()