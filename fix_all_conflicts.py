#!/usr/bin/env python3
import os
import re
import glob

def fix_file(file_path):
    """Fix merge conflicts and syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> [^\n]+.*?\n', '', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD', '', content)
        content = re.sub(r'=======', '', content)
        content = re.sub(r'>>>>>>> [^\n]+', '', content)
        
        # Fix common syntax issues
        # Remove extra closing braces that might be left from conflicts
        lines = content.split('\n')
        new_lines = []
        brace_count = 0
        
        for line in lines:
            # Count braces
            brace_count += line.count('{') - line.count('}')
            
            # Skip lines that are just closing braces if we have too many
            if line.strip() == '}' and brace_count < 0:
                continue
                
            new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'utils/**/*.ts',
        'hooks/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_file(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"Fixed {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()