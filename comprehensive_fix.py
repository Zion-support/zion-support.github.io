#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining syntax and parsing errors
"""
import os
import re
import glob

def fix_file_syntax(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Unterminated string literals at the beginning
        if content.startswith('"') and not content.startswith('""'):
            # Find the first newline and add a closing quote
            first_newline = content.find('\n')
            if first_newline > 0:
                content = '"' + content[1:first_newline] + '"\n' + content[first_newline+1:]
        
        # Fix 2: Missing import statements
        if 'import React' not in content and 'import' in content:
            lines = content.split('\n')
            if lines[0].startswith('"') and 'from' in lines[0]:
                # This is likely a malformed import
                first_line = lines[0]
                if 'from' in first_line:
                    parts = first_line.split('from')
                    if len(parts) == 2:
                        lines[0] = 'import React from "react";'
                        content = '\n'.join(lines)
        
        # Fix 3: Missing closing div tags
        if 'Expected corresponding JSX closing tag for \'div\'' in str(content):
            # Count opening and closing div tags
            open_divs = content.count('<div')
            close_divs = content.count('</div>')
            if open_divs > close_divs:
                # Add missing closing div tags
                missing_divs = open_divs - close_divs
                content += '\n' + '  ' * (missing_divs - 1) + '</div>' * missing_divs
        
        # Fix 4: Missing semicolons
        if ';\' expected' in str(content):
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if line.strip() and not line.strip().endswith((';', '{', '}', ':', ',')):
                    if 'import' in line or 'export' in line or 'const' in line or 'let' in line or 'var' in line:
                        lines[i] = line.rstrip() + ';'
            content = '\n'.join(lines)
        
        # Fix 5: Missing Link import in Navigation component
        if 'Link' in content and 'import Link' not in content and 'Navigation' in file_path:
            if 'import React' in content:
                content = content.replace('import React', 'import React\nimport Link from "next/link"')
            else:
                content = 'import React from "react";\nimport Link from "next/link";\n' + content
        
        # Fix 6: Declaration or statement expected errors
        if 'Declaration or statement expected' in str(content):
            # Look for stray characters or malformed code
            content = re.sub(r'^\s*[^\w\s{}();,=<>!&|+\-*/%\[\]"\']+\s*$', '', content, flags=re.MULTILINE)
        
        # Fix 7: Variable declaration expected
        if 'Variable declaration expected' in str(content):
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if line.strip() and not line.strip().startswith(('import', 'export', 'const', 'let', 'var', 'function', 'class', 'interface', 'type')):
                    if line.strip().startswith('"') and 'from' in line:
                        lines[i] = 'import React from "react";'
            content = '\n'.join(lines)
        
        # Fix 8: Clean up any remaining malformed content
        # Remove any lines that are just quotes or malformed
        lines = content.split('\n')
        cleaned_lines = []
        for line in lines:
            stripped = line.strip()
            if stripped and not (stripped.startswith('"') and stripped.endswith('"') and len(stripped) == 2):
                cleaned_lines.append(line)
            elif stripped.startswith('import') or stripped.startswith('export') or stripped.startswith('const') or stripped.startswith('function'):
                cleaned_lines.append(line)
        content = '\n'.join(cleaned_lines)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                
                if fix_file_syntax(file_path):
                    files_fixed += 1
    
    print(f"\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files fixed: {files_fixed}")

if __name__ == "__main__":
    main()