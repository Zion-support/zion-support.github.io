#!/usr/bin/env python3
"""
Comprehensive script to fix all syntax errors in the codebase.
"""

import os
import re
import glob

def fix_file_syntax(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing quotes in import statements
        content = re.sub(r"import ([^']+) from '([^']+)$", r"import \1 from '\2'", content)
        content = re.sub(r"import ([^']+) from \"([^\"]+)$", r'import \1 from "\2"', content)
        
        # Fix missing quotes in 'use client' and other directives
        content = re.sub(r"'use client$", "'use client'", content)
        content = re.sub(r'"use client$', '"use client"', content)
        
        # Fix missing quotes in JSX attributes
        content = re.sub(r'className=([^"\s>]+)(?=[\s>])', r'className="\1"', content)
        content = re.sub(r'id=([^"\s>]+)(?=[\s>])', r'id="\1"', content)
        content = re.sub(r'type=([^"\s>]+)(?=[\s>])', r'type="\1"', content)
        
        # Fix missing quotes in string literals
        content = re.sub(r"=([^'\"\s][^=]*[^'\"\s])(?=[\s;,)])", r'="\1"', content)
        
        # Fix malformed JSX fragments
        content = re.sub(r'<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix malformed JSX tags
        content = re.sub(r'<([^>]*)\s*$', r'<\1>', content, flags=re.MULTILINE)
        
        # Fix malformed closing tags
        content = re.sub(r'^([^<]*</[^>]*)\s*$', r'\1>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX expressions
        content = re.sub(r'\{([^}]*)\s*$', r'{\1}', content, flags=re.MULTILINE)
        
        # Fix malformed template literals
        content = re.sub(r'`([^`]*)\s*$', r'`\1`', content, flags=re.MULTILINE)
        
        # Fix malformed strings
        content = re.sub(r'"([^"]*)\s*$', r'"\1"', content, flags=re.MULTILINE)
        content = re.sub(r"'([^']*)\s*$", r"'\1'", content, flags=re.MULTILINE)
        
        # Fix malformed function calls
        content = re.sub(r'(\w+)\s*\(\s*$', r'\1()', content, flags=re.MULTILINE)
        
        # Fix malformed object properties
        content = re.sub(r'(\w+):\s*([^,}\s][^,}]*)\s*$', r'\1: "\2"', content, flags=re.MULTILINE)
        
        # Remove lines with only syntax errors
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            # Skip lines that are clearly syntax errors
            if (re.match(r'^\s*[{}]\s*$', line) or  # Just braces
                re.match(r'^\s*[<>]\s*$', line) or  # Just angle brackets
                re.match(r'^\s*[()]\s*$', line) or  # Just parentheses
                re.match(r'^\s*[,;]\s*$', line) or  # Just commas/semicolons
                re.match(r'^\s*[=]+\s*$', line) or  # Just equals signs
                re.match(r'^\s*[^<>\s]*[<>][^<>\s]*\s*$', line) or  # Malformed tags
                re.match(r'^\s*[^a-zA-Z0-9_$][^a-zA-Z0-9_$\s]*\s*$', line)):  # Invalid characters
                continue
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Clean up extra newlines
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with syntax errors."""
    # Find all TypeScript/JavaScript files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    
    total_files = 0
    fixed_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other directories
            if 'node_modules' in file_path or 'dist' in file_path or '.git' in file_path:
                continue
                
            total_files += 1
            if fix_file_syntax(file_path):
                fixed_files += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nProcessed {total_files} files, fixed {fixed_files} files with syntax errors.")

if __name__ == "__main__":
    main()