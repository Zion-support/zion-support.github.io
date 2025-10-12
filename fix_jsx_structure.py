#!/usr/bin/env python3
"""
Script to fix JSX structure issues
"""
import os
import re
import glob

def fix_jsx_structure(file_path):
    """Fix JSX structure issues in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"Fixing JSX structure in {file_path}")
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> cursor/fix-errors-and-merge-to-main-[a-f0-9]+.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> f7c4928b2138abffab75f9beb3ca62b8e0c3452d.*?\n', '', content, flags=re.DOTALL)
        
        # Remove any stray closing tags at the end
        content = re.sub(r'export default \w+;\n</\w+>$', r'export default \1;', content, flags=re.MULTILINE)
        
        # Ensure proper JSX structure
        lines = content.split('\n')
        fixed_lines = []
        open_tags = []
        
        for i, line in enumerate(lines):
            # Skip empty lines
            if not line.strip():
                fixed_lines.append(line)
                continue
                
            # Track opening tags
            opening_tags = re.findall(r'<(\w+)(?:\s[^>]*)?(?:>|/>)', line)
            for tag in opening_tags:
                if not line.strip().endswith('/>') and not line.strip().endswith('</' + tag + '>'):
                    open_tags.append(tag)
            
            # Track closing tags
            closing_tags = re.findall(r'</(\w+)>', line)
            for tag in closing_tags:
                if tag in open_tags:
                    open_tags.remove(tag)
            
            fixed_lines.append(line)
        
        # Add missing closing tags at the end if needed
        while open_tags:
            tag = open_tags.pop()
            fixed_lines.append(f'</{tag}>')
        
        content = '\n'.join(fixed_lines)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all JSX structure issues"""
    # Find all TypeScript/React files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_jsx_structure(file_path):
                    files_fixed += 1
    
    print(f"Fixed JSX structure in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()