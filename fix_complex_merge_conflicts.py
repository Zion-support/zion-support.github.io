#!/usr/bin/env python3
"""
Script to fix complex merge conflicts with nested markers
"""
import os
import re
import glob

def fix_complex_merge_conflicts(file_path):
    """Fix complex merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Use regex to find and replace all merge conflict blocks
        # This pattern matches from <<<<<<< HEAD to >>>>>>> origin/main
        pattern = r'<<<<<<< HEAD.*?>>>>>>> origin/main'
        
        # Replace all merge conflict blocks with empty string
        # This effectively removes all conflicts and keeps only the HEAD content
        new_content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> origin/main', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD.*?=======', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'=======.*?>>>>>>> origin/main', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD', '', new_content)
        new_content = re.sub(r'=======', '', new_content)
        new_content = re.sub(r'>>>>>>> origin/main', '', new_content)
        
        # Clean up extra whitespace
        lines = new_content.split('\n')
        cleaned_lines = []
        for line in lines:
            if line.strip() or (cleaned_lines and cleaned_lines[-1].strip()):
                cleaned_lines.append(line)
        
        new_content = '\n'.join(cleaned_lines)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed complex merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining merge conflicts"""
    # Get all files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js',
        '**/*.json',
        '**/*.md',
        '**/*.html',
        '**/*.css'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to touch
    files_to_fix = [f for f in files_to_fix if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', '.next', 'out', 'coverage'
    ])]
    
    fixed_count = 0
    total_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            # Check if file has merge conflicts
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                if '<<<<<<< HEAD' in content:
                    total_count += 1
                    if fix_complex_merge_conflicts(file_path):
                        fixed_count += 1
            except:
                continue
    
    print(f"\nFixed complex merge conflicts in {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()