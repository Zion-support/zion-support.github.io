#!/usr/bin/env python3
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
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) >= 3:
            # Keep the second part (after =======)
            fixed_content = parts[0]
            for i in range(1, len(parts), 2):
                if i + 1 < len(parts):
                    fixed_content += parts[i + 1]  # Use the part after =======
                else:
                    fixed_content += parts[i]
            
            # Clean up any remaining conflict markers
            fixed_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+\n?', '', fixed_content, flags=re.DOTALL)
            fixed_content = re.sub(r'=======\n?', '', fixed_content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            # If we can't parse properly, try to remove all conflict markers
            fixed_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
            fixed_content = re.sub(r'=======\n?', '', fixed_content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            print(f"Cleaned merge conflicts in: {file_path}")
            return True
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix merge conflicts in all files"""
    # Find all files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.js',
        '**/*.jsx',
        '**/*.css',
        '**/*.json'
    ]
    
    fixed_count = 0
    total_count = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build']):
                continue
                
            total_count += 1
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()
