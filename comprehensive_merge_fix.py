#!/usr/bin/env python3
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean up all merge conflict markers and remnants"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove all merge conflict markers and their content
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?', '', content, flags=re.DOTALL)
        
        # Pattern 2: Just ======= ... >>>>>>> (incomplete conflicts)
        content = re.sub(r'=======.*?>>>>>>>.*?', '', content, flags=re.DOTALL)
        
        # Pattern 3: Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>>.*?', '', content, flags=re.DOTALL)
        
        # Pattern 4: Remove branch names that might be left behind
        content = re.sub(r'\s+cursor/[a-zA-Z0-9-]+\s*', ' ', content)
        
        # Clean up extra whitespace and newlines
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
        
        # Remove any lines that are just whitespace and branch names
        lines = content.split('\n')
        cleaned_lines = []
        for line in lines:
            # Skip lines that are just branch names or whitespace
            if re.match(r'^\s*cursor/[a-zA-Z0-9-]+\s*$', line):
                continue
            if re.match(r'^\s*$', line) and len(cleaned_lines) > 0 and re.match(r'^\s*$', cleaned_lines[-1]):
                continue
            cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Final cleanup
        content = re.sub(r'\n{3,}', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned merge conflicts in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    files_to_fix = []
    
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f]
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if any(marker in content for marker in ['<<<<<<<', '=======', '>>>>>>>', 'cursor/']):
                if clean_merge_conflicts(file_path):
                    fixed_count += 1
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    
    print(f"Cleaned merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()