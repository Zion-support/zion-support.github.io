#!/usr/bin/env python3
"""
Comprehensive fix for syntax errors and merge conflicts
"""
import os
import re
import glob

def fix_syntax_errors(content):
    """Fix common syntax errors"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix missing semicolons after imports
        if line.strip().startswith('import ') and not line.strip().endswith(';'):
            line = line.rstrip() + ';'
        
        # Fix missing semicolons after variable declarations
        if re.match(r'^\s*(const|let|var)\s+[^=]+=', line) and not line.strip().endswith(';'):
            line = line.rstrip() + ';'
        
        # Fix missing semicolons after function declarations
        if re.match(r'^\s*(export default|export)\s+[^;]+$', line) and not line.strip().endswith(';'):
            line = line.rstrip() + ';'
        
        # Fix JSX return statements
        if 'return (' in line and not line.strip().endswith('{'):
            line = line.replace('return (', 'return (')
        
        # Fix missing opening braces
        if re.match(r'^\s*const\s+\w+\s*=\s*\(\)\s*$', line):
            line = line.replace('()', '() => {')
        
        # Fix missing closing braces
        if re.match(r'^\s*return\s*\(\s*$', line):
            line = line.replace('return (', 'return (')
        
        # Fix JSX fragments
        if line.strip() == '<>' and i < len(lines) - 1:
            if lines[i + 1].strip().startswith('<title>'):
                line = '<>'
        
        # Fix missing closing tags
        if line.strip() == '</>;' and i > 0:
            if lines[i - 1].strip() == '</div>':
                line = '</>'
        
        # Fix missing semicolons after JSX
        if line.strip() == '</>;' and i < len(lines) - 1:
            if lines[i + 1].strip() == ');':
                line = '</>'
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_jsx_syntax(content):
    """Fix JSX specific syntax issues"""
    # Fix missing opening tags
    content = re.sub(r'return\s*\(\s*\n\s*<>\s*\n\s*<title>', 'return (\n    <>\n      <title>', content)
    
    # Fix missing closing tags
    content = re.sub(r'</div>\s*\n\s*</>\s*;\s*\n\s*\)\s*;', '</div>\n    </>\n  );', content)
    
    # Fix missing semicolons
    content = re.sub(r'export default function (\w+)', r'export default function \1', content)
    
    return content

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_syntax_errors(content)
        content = fix_jsx_syntax(content)
        
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
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts'
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