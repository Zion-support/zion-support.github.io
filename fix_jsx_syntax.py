#!/usr/bin/env python3
"""
Script to fix JSX syntax errors
"""
import os
import re
import glob

def fix_jsx_syntax(file_path):
    """Fix JSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing closing tags for Link components
        # Pattern: Link with attributes but missing closing tag
        content = re.sub(
            r'(\s*<Link[^>]*>\s*)([^<]+?)(\s*<[^/][^>]*>\s*[^<]*?\s*</[^>]+>\s*)(\s*</Link>)',
            r'\1\2\3\4',
            content,
            flags=re.DOTALL
        )
        
        # Fix Link components that are missing the closing tag entirely
        # Look for Link with attributes followed by text and ArrowRight but no closing tag
        content = re.sub(
            r'(\s*<Link[^>]*>\s*)([^<]+?)(\s*<ArrowRight[^>]*/>\s*)(\s*</Link>)',
            r'\1\2\3\4',
            content,
            flags=re.DOTALL
        )
        
        # Fix Link components that are missing the opening tag properly
        content = re.sub(
            r'(\s*<Link[^>]*>\s*)([^<]+?)(\s*<ArrowRight[^>]*/>\s*)(\s*</Link>)',
            r'\1\2\3\4',
            content,
            flags=re.DOTALL
        )
        
        # Fix missing closing div tags
        # Look for div that's not properly closed
        lines = content.split('\n')
        fixed_lines = []
        div_stack = []
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            
            # Count opening divs
            div_open_count = line.count('<div')
            div_close_count = line.count('</div>')
            
            # Add to stack for each opening div
            for _ in range(div_open_count):
                div_stack.append(i)
            
            # Remove from stack for each closing div
            for _ in range(div_close_count):
                if div_stack:
                    div_stack.pop()
            
            fixed_lines.append(line)
        
        # Add missing closing divs at the end
        while div_stack:
            fixed_lines.append('    </div>')
            div_stack.pop()
        
        content = '\n'.join(fixed_lines)
        
        # Fix missing closing tags for other components
        # Look for components that are not properly closed
        content = re.sub(r'(\s*<[A-Z][a-zA-Z]*[^>]*>\s*)([^<]+?)(\s*<[A-Z][a-zA-Z]*[^>]*/>\s*)(?!\s*</[A-Z])', r'\1\2\3', content, flags=re.DOTALL)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX syntax in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to check")
    
    fixed_count = 0
    for file_path in files_to_process:
        if os.path.isfile(file_path):
            if fix_jsx_syntax(file_path):
                fixed_count += 1
    
    print(f"Fixed JSX syntax in {fixed_count} files")

if __name__ == "__main__":
    main()