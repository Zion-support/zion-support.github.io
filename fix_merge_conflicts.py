#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern 1: Remove <<<<<<< HEAD to ======= section
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n', r'\1\n', content, flags=re.DOTALL)
        
        # Pattern 2: Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Fix common syntax issues that result from merge conflicts
        # Fix broken class names
        content = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', content)
        
        # Fix broken text content
        content = re.sub(r'text-([^"]*?)\s+([^"]*?)"', r'text-\1\2"', content)
        
        # Fix broken spacing in class names
        content = re.sub(r'(\w+)\s+(\w+)(?=")', r'\1\2', content)
        
        # Fix broken JSX fragments
        content = re.sub(r'<>\s*<>\s*', '<>', content)
        content = re.sub(r'</>\s*</>\s*', '</>', content)
        
        # Fix broken closing tags
        content = re.sub(r'</>\s*$', '', content)
        
        # Fix broken self-closing tags
        content = re.sub(r'<(\w+)\s+/>', r'<\1 />', content)
        
        # Fix broken element attributes
        content = re.sub(r'element="\{<(\w+)\s+/>\}"', r'element={<\1 />}', content)
        
        # Fix broken fallback attributes
        content = re.sub(r'fallback="\{<(\w+)\s+/>\}"', r'fallback={<\1 />}', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_fix = list(set(files_to_fix))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has merge conflicts
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                    if fix_merge_conflicts(file_path):
                        fixed_count += 1
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()