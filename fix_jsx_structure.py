#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_structure(file_path):
    """Fix JSX structure issues."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common JSX structure issues
        fixes = [
            # Fix extra parentheses and malformed return
            (r'return\s*\(\s*<>\s*\(\s*', 'return (\n    <>\n      '),
            (r'\)\s*</>\s*\)\s*;;', '\n    </>\n  );'),
            (r'\)\s*</>\s*\);', '\n    </>\n  );'),
            
            # Fix malformed Helmet tags
            (r'<Helmet>\s*</Helmet><title>', '<Helmet>\n        <title>'),
            (r'</title>\n        <meta', '</title>\n        <meta'),
            (r'</Helmet>\n      <div', '</Helmet>\n      <div'),
            
            # Fix missing spaces in class names
            (r'w-5 h-5ml-2', 'w-5 h-5 ml-2'),
            
            # Fix unclosed tags
            (r'<div([^>]*)>([^<]*)', r'<div\1>\2</div>'),
            
            # Fix multiple semicolons
            (r';;', ';'),
            
            # Fix extra parentheses in return
            (r'return\s*\(\s*<>\s*\(', 'return (\n    <>'),
            (r'\)\s*</>\s*\)', '\n    </>\n  )'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        # Clean up the structure
        lines = content.split('\n')
        new_lines = []
        in_jsx = False
        brace_count = 0
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            
            # Skip empty lines at the beginning
            if not stripped and not in_jsx:
                continue
            
            # Check if we're entering JSX
            if 'return' in line and '<' in line:
                in_jsx = True
                new_lines.append('  return (')
                new_lines.append('    <>')
                continue
            
            if in_jsx:
                # Count braces
                brace_count += line.count('{') - line.count('}')
                
                # Add proper indentation
                if stripped.startswith('<') or stripped.startswith('</'):
                    new_lines.append('      ' + stripped)
                elif stripped:
                    new_lines.append('      ' + stripped)
                else:
                    new_lines.append('')
                
                # Check if we're exiting JSX
                if brace_count == 0 and stripped.startswith('</'):
                    new_lines.append('    </>')
                    new_lines.append('  );')
                    in_jsx = False
            else:
                new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing JSX structure in {file_path}: {e}")
        return False

def main():
    # Process all TSX files
    patterns = [
        'app/**/*.tsx',
        'components/**/*.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                print(f"Processing: {file_path}")
                
                if fix_jsx_structure(file_path):
                    files_fixed += 1
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()