#!/usr/bin/env python3
import os
import re

def clean_merge_conflicts(file_path):
    """Remove all merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content and '>>>>>>>' not in content:
            return False
        
        print(f"Cleaning merge conflicts in {file_path}")
        
        # Remove all merge conflict markers and their content
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... >>>>>>> branch (without =======)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Pattern 3: ======= ... >>>>>>> branch (orphaned)
        content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Pattern 4: Any remaining <<<<<<< or >>>>>>> markers
        content = re.sub(r'<<<<<<< [^\n]+', '', content)
        content = re.sub(r'=======', '', content)
        content = re.sub(r'>>>>>>> [^\n]+', '', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    # Get all TypeScript/JavaScript files
    files_to_clean = []
    
    for root, dirs, files in os.walk('/workspace'):
        # Skip node_modules and other irrelevant directories
        if 'node_modules' in root or '.git' in root:
            continue
            
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
                file_path = os.path.join(root, file)
                files_to_clean.append(file_path)
    
    cleaned_count = 0
    for file_path in files_to_clean:
        if clean_merge_conflicts(file_path):
            cleaned_count += 1
    
    print(f"Cleaned merge conflicts in {cleaned_count} files")

if __name__ == "__main__":
    main()