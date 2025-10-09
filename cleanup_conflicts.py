#!/usr/bin/env python3
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflicts from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        # Keep the content after =======
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> [^\n]+', r'\1', content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... ======= (no content after =======)
        # Remove everything
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Pattern 3: Just <<<<<<< HEAD without =======
        content = re.sub(r'<<<<<<< HEAD\n', '', content, flags=re.MULTILINE)
        
        # Pattern 4: Remove any remaining ======= or >>>>>>> lines
        content = re.sub(r'^=======\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> [^\n]+\n', '', content, flags=re.MULTILINE)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to clean all files with merge conflicts"""
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_cleaned = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and .git directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            total_files += 1
            
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                    if clean_merge_conflicts(file_path):
                        files_cleaned += 1
                        
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nCleaned {files_cleaned} out of {total_files} files")

if __name__ == "__main__":
    main()