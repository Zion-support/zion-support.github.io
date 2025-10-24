#!/usr/bin/env python3
"""
Fix specific syntax errors in TypeScript/JSX files
"""
import os
import re
import glob

def fix_syntax_errors(content):
    """Fix specific syntax errors"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix function declarations with extra semicolons
        if re.match(r'^\s*const\s+\w+\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*;\s*$', line):
            line = re.sub(r'\(\s*\)\s*=>\s*\{\s*;\s*$', '() => {', line)
        
        # Fix array declarations with extra semicolons
        if re.match(r'^\s*const\s+\w+\s*=\s*\[\s*;\s*$', line):
            line = re.sub(r'=\s*\[\s*;\s*$', '= [', line)
        
        # Fix object declarations with extra semicolons
        if re.match(r'^\s*export\s+const\s+metadata:\s*Metadata\s*=\s*\{\s*;\s*$', line):
            line = re.sub(r'=\s*\{\s*;\s*$', '= {', line)
        
        # Fix JSX closing tags with semicolons
        if re.match(r'^\s*</div>\s*;\s*$', line):
            line = re.sub(r'</div>\s*;\s*$', '</div>', line)
        
        # Fix function declarations with extra semicolons
        if re.match(r'^\s*export\s+default\s+function\s+\w+\s*\(\s*\)\s*\{\s*;\s*$', line):
            line = re.sub(r'\(\s*\)\s*\{\s*;\s*$', '() {', line)
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_syntax_errors(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()