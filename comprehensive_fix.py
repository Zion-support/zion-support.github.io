#!/usr/bin/env python3
"""
Comprehensive syntax error fixer for the Next.js project - Advanced version
"""

import os
import re
import glob
from pathlib import Path

def fix_component_syntax(content):
    """Fix common component syntax issues"""
    # Fix malformed component declarations
    content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*null\s*}\s*export\s+default\s+\1', 
                     r'const \1: React.FC = () => {\n  return null\n}\n\nexport default \1', content)
    
    # Fix missing return statements
    content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{([^}]*)}', 
                     lambda m: f'const {m.group(1)}: React.FC = () => {{\n  return (\n    <div>\n      {m.group(2).strip()}\n    </div>\n  )\n}}', content)
    
    # Fix malformed JSX
    content = re.sub(r'<(\w+)\s*className="([^"]*)"\s*>\s*$', r'<\1 className="\2">\n        </\1>', content, flags=re.MULTILINE)
    
    return content

def fix_interface_declarations(content):
    """Fix interface and type declarations"""
    # Fix malformed interfaces
    content = re.sub(r'interface\s+(\w+)\s*{\s*([^}]*)\s*}\s*$', 
                     lambda m: f'interface {m.group(1)} {{\n  {m.group(2).strip()}\n}}', content, flags=re.MULTILINE)
    
    # Fix type declarations
    content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+);?\s*$', r'type \1 = \2;', content, flags=re.MULTILINE)
    
    return content

def fix_jsx_fragments(content):
    """Fix JSX fragment issues"""
    # Fix unclosed fragments
    content = re.sub(r'<>\s*$', '<>\n        </>', content, flags=re.MULTILINE)
    
    # Fix malformed fragments
    content = re.sub(r'<>\s*([^<]+)\s*</>', r'<>\n          \1\n        </>', content)
    
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

def fix_object_literals(content):
    """Fix object literal syntax"""
    # Fix missing commas in objects
    content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n(\s*[a-zA-Z])', r'\1: \2,\n\3', content)
    
    # Fix malformed objects
    content = re.sub(r'{\s*([^}]*)\s*}\s*$', lambda m: f'{{\n  {m.group(1).strip()}\n}}', content, flags=re.MULTILINE)
    
    return content

def fix_import_statements(content):
    """Fix import statement issues"""
    # Remove empty imports
    content = re.sub(r'import\s+{\s*}\s*from\s+["\'][^"\']+["\']\s*;?\s*', '', content)
    
    # Fix malformed imports
    content = re.sub(r'import\s+([^"\']+)\s*from\s*["\']([^"\']+)["\']\s*;?\s*', r'import \1 from "\2";', content)
    
    return content

def fix_export_statements(content):
    """Fix export statement issues"""
    # Remove duplicate exports
    lines = content.split('\n')
    seen_exports = set()
    fixed_lines = []
    
    for line in lines:
        if line.strip().startswith('export default'):
            export_name = line.strip().split()[-1].rstrip(';')
            if export_name in seen_exports:
                continue
            seen_exports.add(export_name)
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_jsx_attributes(content):
    """Fix JSX attribute issues"""
    # Fix malformed className attributes
    content = re.sub(r'className="([^"]*)"\s*>\s*$', r'className="\1">\n        </div>', content, flags=re.MULTILINE)
    
    # Fix missing closing tags
    content = re.sub(r'<(\w+)\s*([^>]*)\s*>\s*$', r'<\1 \2>\n        </\1>', content, flags=re.MULTILINE)
    
    return content

def fix_typescript_syntax(content):
    """Fix TypeScript specific syntax issues"""
    # Fix generic type parameters
    content = re.sub(r'<(\w+)>\s*$', r'<\1>', content, flags=re.MULTILINE)
    
    # Fix optional properties
    content = re.sub(r'(\w+)\?\s*:\s*([^;]+);?\s*$', r'\1?: \2;', content, flags=re.MULTILINE)
    
    # Fix union types
    content = re.sub(r'(\w+)\s*\|\s*(\w+)', r'\1 | \2', content)
    
    return content

def fix_file(file_path):
    """Fix a single file with comprehensive fixes"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all fixes
        content = fix_component_syntax(content)
        content = fix_interface_declarations(content)
        content = fix_jsx_fragments(content)
        content = fix_function_declarations(content)
        content = fix_object_literals(content)
        content = fix_import_statements(content)
        content = fix_export_statements(content)
        content = fix_jsx_attributes(content)
        content = fix_typescript_syntax(content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
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