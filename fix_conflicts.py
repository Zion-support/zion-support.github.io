#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Remove merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and everything between them
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> hash
        pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [a-f0-9]+'
        cleaned_content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Also remove standalone markers
        cleaned_content = re.sub(r'<<<<<<< HEAD.*?=======', '', cleaned_content, flags=re.DOTALL)
        cleaned_content = re.sub(r'=======.*?>>>>>>> [a-f0-9]+', '', cleaned_content, flags=re.DOTALL)
        cleaned_content = re.sub(r'<<<<<<< HEAD', '', cleaned_content)
        cleaned_content = re.sub(r'=======', '', cleaned_content)
        cleaned_content = re.sub(r'>>>>>>> [a-f0-9]+', '', cleaned_content)
        
        # Clean up extra whitespace
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts', 
        'src/**/*.js',
        'src/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                    print(f"Fixing {file_path}")
                    if fix_merge_conflicts(file_path):
                        fixed_count += 1
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()