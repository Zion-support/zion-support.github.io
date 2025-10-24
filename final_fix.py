#!/usr/bin/env python3
"""
Final comprehensive syntax error fixer
"""

import os
import re
import glob
from pathlib import Path

def fix_missing_parentheses(content):
    """Fix missing closing parentheses"""
    # Fix function calls with missing closing parentheses
    content = re.sub(r'(\w+)\s*\(\s*([^)]*)\s*$', r'\1(\2)', content, flags=re.MULTILINE)
    
    # Fix JSX with missing closing parentheses
    content = re.sub(r'return\s*\(\s*<div\s*>\s*</div>\s*$', r'return (\n    <div>\n      \n    </div>\n  );', content, flags=re.MULTILINE)
    
    return content

def fix_missing_commas(content):
    """Fix missing commas in objects and arrays"""
    # Fix missing commas in object literals
    content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n(\s*[a-zA-Z])', r'\1: \2,\n\3', content)
    
    # Fix missing commas in arrays
    content = re.sub(r'([^,\n]+)\s*\n(\s*[a-zA-Z])', r'\1,\n\2', content)
    
    # Fix missing commas in function parameters
    content = re.sub(r'(\w+)\s*\n(\s*[a-zA-Z])', r'\1,\n\2', content)
    
    return content

def fix_jsx_structure(content):
    """Fix JSX structure issues"""
    # Fix malformed JSX fragments
    content = re.sub(r'<>\s*([^<]+)\s*</>', r'<>\n        \1\n      </>', content)
    
    # Fix unclosed JSX tags
    content = re.sub(r'<(\w+)\s*([^>]*)\s*>\s*$', r'<\1 \2>\n        </\1>', content, flags=re.MULTILINE)
    
    # Fix JSX with missing closing tags
    content = re.sub(r'<div\s*>\s*$', r'<div>\n        </div>', content, flags=re.MULTILINE)
    
    return content

def fix_typescript_syntax(content):
    """Fix TypeScript specific syntax"""
    # Fix generic type parameters
    content = re.sub(r'<(\w+)>\s*$', r'<\1>', content, flags=re.MULTILINE)
    
    # Fix interface declarations
    content = re.sub(r'interface\s+(\w+)\s*{\s*([^}]*)\s*}\s*$', 
                     lambda m: f'interface {m.group(1)} {{\n  {m.group(2).strip()}\n}}', content, flags=re.MULTILINE)
    
    # Fix type declarations
    content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+);?\s*$', r'type \1 = \2;', content, flags=re.MULTILINE)
    
    # Fix enum declarations
    content = re.sub(r'enum\s+(\w+)\s*{\s*([^}]*)\s*}\s*$', 
                     lambda m: f'enum {m.group(1)} {{\n  {m.group(2).strip()}\n}}', content, flags=re.MULTILINE)
    
    return content

def fix_function_declarations(content):
    """Fix function declaration issues"""
    # Fix arrow functions
    content = re.sub(r'const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{([^}]*)}', 
                     lambda m: f'const {m.group(1)} = () => {{\n  {m.group(2).strip()}\n}}', content)
    
    # Fix async functions
    content = re.sub(r'const\s+(\w+)\s*=\s*async\s*\(\s*\)\s*=>\s*{([^}]*)}', 
                     lambda m: f'const {m.group(1)} = async () => {{\n  {m.group(2).strip()}\n}}', content)
    
    return content

def fix_component_structure(content):
    """Fix React component structure"""
    # Fix malformed component declarations
    content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*,\s*', 
                     r'const \1: React.FC = () => {\n  ', content)
    
    # Fix malformed return statements
    content = re.sub(r'return\s*\(\s*<div\s*>\s*</div>\s*,\s*', r'return (\n    <div>\n      ', content)
    
    # Fix duplicate return statements
    content = re.sub(r'return\s*\(\s*<div\s*>\s*</div>\s*,\s*return\s+null;', r'return (\n    <div>\n      \n    </div>\n  );', content)
    
    return content

def fix_import_statements(content):
    """Fix import statement issues"""
    # Fix malformed imports
    content = re.sub(r'import\s+([^;]+)\s+from\s+["\']([^"\']+)["\'];', r'import \1 from "\2";', content)
    
    # Fix "use client" placement
    content = re.sub(r'import\s+([^;]+);"use client"', r'"use client"\nimport \1;', content)
    content = re.sub(r'"use client"import\s+([^;]+);', r'"use client"\nimport \1;', content)
    
    return content

def fix_file(file_path):
    """Fix a single file with final comprehensive fixes"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all fixes
        content = fix_missing_parentheses(content)
        content = fix_missing_commas(content)
        content = fix_jsx_structure(content)
        content = fix_typescript_syntax(content)
        content = fix_function_declarations(content)
        content = fix_component_structure(content)
        content = fix_import_statements(content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r',\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'{\s*,\s*', '{\n  ', content)
        content = re.sub(r',\s*}', '\n}', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Get all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'api/**/*.ts',
        'api/**/*.js',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates and sort
    files_to_fix = sorted(list(set(files_to_fix)))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files_to_fix)} checked")

if __name__ == "__main__":
    main()