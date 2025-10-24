#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JavaScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix merge conflict markers
        if '<<<<<<< HEAD' in content:
            pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
            content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Fix duplicate function declarations
        if 'const ContactPage: React.FC = () => {' in content and 'const ContactPage = () => {' in content:
            # Remove the duplicate declaration
            content = re.sub(r'const ContactPage = \(\) => \{\s*return', 'return', content, flags=re.DOTALL)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\n\s*return', r'\1;\n  return', content)
        
        # Fix missing closing braces
        lines = content.split('\n')
        brace_count = 0
        in_function = False
        fixed_lines = []
        
        for i, line in enumerate(lines):
            if 'const ' in line and '= () => {' in line:
                in_function = True
                brace_count = 1
            elif in_function:
                brace_count += line.count('{') - line.count('}')
                if brace_count == 0 and line.strip() and not line.strip().startswith('//'):
                    # Add missing closing brace
                    fixed_lines.append('  };')
                    in_function = False
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_syntax_errors(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"Fixed syntax errors in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()