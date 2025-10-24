#!/usr/bin/env python3
"""
Comprehensive syntax error fixer for the Next.js project
"""

import os
import re
import glob
from pathlib import Path

def fix_html_entities(content):
    """Fix HTML entities in the content"""
    replacements = {
        '&quot;': '"',
        '&apos;': "'",
        '&lt;': '<',
        '&gt;': '>',
        '&amp;': '&',
        '&#39;': "'",
        '&lsquo;': "'",
        '&rsquo;': "'",
    }
    
    for entity, replacement in replacements.items():
        content = content.replace(entity, replacement)
    
    return content

def fix_duplicate_exports(content):
    """Fix duplicate export statements"""
    lines = content.split('\n')
    seen_exports = set()
    fixed_lines = []
    
    for line in lines:
        if line.strip().startswith('export default'):
            export_name = line.strip().split()[-1].rstrip(';')
            if export_name in seen_exports:
                continue  # Skip duplicate exports
            seen_exports.add(export_name)
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues"""
    # Fix unclosed JSX tags
    content = re.sub(r'<div className="[^"]*">\s*$', lambda m: m.group(0) + '\n          </div>', content, flags=re.MULTILINE)
    
    # Fix missing closing braces in JSX
    content = re.sub(r'(\s*)<([^>]+)>\s*$', r'\1<\2>\n\1</\2>', content, flags=re.MULTILINE)
    
    return content

def fix_typescript_syntax(content):
    """Fix TypeScript syntax issues"""
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    # Fix missing commas in object literals
    content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n(\s*[a-zA-Z])', r'\1: \2,\n\3', content)
    
    return content

def fix_import_statements(content):
    """Fix import statement issues"""
    # Fix malformed import statements
    content = re.sub(r'import\s+{\s*}\s*from\s+["\'][^"\']+["\']', '', content)
    
    # Fix duplicate imports
    lines = content.split('\n')
    import_lines = []
    other_lines = []
    
    for line in lines:
        if line.strip().startswith('import '):
            if line not in import_lines:
                import_lines.append(line)
        else:
            other_lines.append(line)
    
    return '\n'.join(import_lines + other_lines)

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_html_entities(content)
        content = fix_duplicate_exports(content)
        content = fix_import_statements(content)
        content = fix_jsx_syntax(content)
        content = fix_typescript_syntax(content)
        
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