#!/usr/bin/env python3
"""
Comprehensive script to fix all major structural issues in the codebase
"""
import os
import re
import glob

def fix_jsx_structure(content):
    """Fix JSX structural issues"""
    # Fix missing closing tags
    content = re.sub(r'<div([^>]*)>(?!.*</div>)(.*?)(?=\n\s*<[^/]|\n\s*$)', r'<div\1>\2</div>', content, flags=re.DOTALL)
    
    # Fix missing closing fragments
    content = re.sub(r'<>([^<]*(?:<[^/][^>]*>[^<]*)*?)(?=\n\s*<[^/]|\n\s*$)', r'<>\1</>', content, flags=re.DOTALL)
    
    # Fix incorrect indentation in JSX
    content = re.sub(r'(\s+)}\)', r'\1  )}', content)
    
    # Fix malformed JSX expressions
    content = re.sub(r'(\{[^}]*\})\s*\)\s*\)', r'\1))', content)
    
    # Fix missing semicolons in object properties
    content = re.sub(r'(\w+):\s*([^,}]+)\s*\n\s*\}', r'\1: \2,', content)
    
    return content

def fix_merge_conflicts(content):
    """Fix remaining merge conflicts"""
    # Remove any remaining merge conflict markers
    content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*\n?', '', content, flags=re.DOTALL)
    content = re.sub(r'=======.*?>>>>>>> [^\n]*\n?', '', content, flags=re.DOTALL)
    content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
    
    return content

def fix_duplicate_tags(content):
    """Fix duplicate closing tags"""
    # Fix patterns like: </Link>\n</Link>
    content = re.sub(r'</(\w+)>\s*\n\s*</\1>', r'</\1>', content)
    
    # Fix patterns like: {text}</Link>\n</Link>
    content = re.sub(r'(\{[^}]*\})</(\w+)>\s*\n\s*</\2>', r'\1</\2>', content)
    
    # Fix patterns like: text</Link>\n</Link>
    content = re.sub(r'([^<>\s]+)</(\w+)>\s*\n\s*</\2>', r'\1</\2>', content)
    
    return content

def fix_syntax_errors(content):
    """Fix common syntax errors"""
    # Fix missing commas in arrays/objects
    content = re.sub(r'(\w+)\s*\n\s*\]', r'\1,', content)
    content = re.sub(r'(\w+)\s*\n\s*}', r'\1,', content)
    
    # Fix semicolons instead of commas
    content = re.sub(r'(\w+):\s*([^,}]+);\s*\n\s*}', r'\1: \2,', content)
    
    # Fix missing closing parentheses
    content = re.sub(r'(\w+)\s*\n\s*\)', r'\1)', content)
    
    return content

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all fixes
        content = fix_merge_conflicts(content)
        content = fix_duplicate_tags(content)
        content = fix_syntax_errors(content)
        content = fix_jsx_structure(content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = content.strip() + '\n'
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_file(file_path):
                    files_fixed += 1
                    print(f"Fixed: {file_path}")
    
    print(f"\nFixed {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()