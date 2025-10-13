#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflicts and keep the HEAD version
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======.*?\n>>>>>>> [^\n]+\n', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?\n=======.*?\n>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Clean up any duplicate imports or empty lines
        lines = content.split('\n')
        cleaned_lines = []
        seen_imports = set()
        
        for line in lines:
            # Skip empty lines after empty lines
            if line.strip() == '' and cleaned_lines and cleaned_lines[-1].strip() == '':
                continue
            # Deduplicate imports
            if line.strip().startswith('import ') and line.strip() in seen_imports:
                continue
            if line.strip().startswith('import '):
                seen_imports.add(line.strip())
            cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix merge conflicts in all relevant files"""
    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other irrelevant directories
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and '.git' not in f]
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()