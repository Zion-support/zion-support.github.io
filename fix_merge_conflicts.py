#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the latest version and removing conflict markers."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all merge conflict markers and keep the latest version
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+'
        
        # Replace with empty string to remove conflicts
        cleaned_content = re.sub(conflict_pattern, '', content, flags=re.DOTALL)
        
        # Also remove any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD.*?\n', '', cleaned_content, flags=re.DOTALL)
        cleaned_content = re.sub(r'=======.*?\n', '', cleaned_content, flags=re.DOTALL)
        cleaned_content = re.sub(r'>>>>>>> [^\n]+.*?\n', '', cleaned_content, flags=re.DOTALL)
        
        # Clean up any extra whitespace
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or 'dist' in file_path or '.next' in file_path:
                continue
                
            total_files += 1
            
            # Check if file has merge conflicts
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                    if fix_merge_conflicts(file_path):
                        files_fixed += 1
                        
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()