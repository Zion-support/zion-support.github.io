#!/usr/bin/env python3
"""
Fix object literal syntax errors in TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_object_syntax(file_path):
    """Fix object literal syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix object literal syntax issues
        # Pattern: key: value\n  key: value (missing comma)
        content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):', r'\1: \2,\n  \3:', content)
        
        # Fix missing commas in object properties
        content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n\s*}', r'\1: \2\n}', content)
        
        # Fix missing commas in array elements
        content = re.sub(r'([^,}\]]+)\s*\n\s*([^,}\]]+)\s*\n\s*]', r'\1,\n  \2\n]', content)
        
        # Fix missing semicolons after imports
        content = re.sub(r'import\s+.*?from\s+[\'"][^\'"]+[\'"]\s*$', lambda m: m.group(0) + ';', content, flags=re.MULTILINE)
        
        # Fix missing commas in function parameters
        content = re.sub(r'(\w+)\s+\n\s*(\w+):', r'\1,\n  \2:', content)
        
        # Fix missing closing parentheses
        content = re.sub(r'\(\s*$', '()', content, flags=re.MULTILINE)
        
        # Fix missing closing braces
        content = re.sub(r'{\s*$', '{}', content, flags=re.MULTILINE)
        
        # Fix JSX closing tags
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # Clean up excessive newlines
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed object syntax in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out backup files and node_modules
    files_to_fix = [f for f in files_to_fix if not f.endswith('.original') and 'node_modules' not in f and os.path.isfile(f)]
    
    print(f"Found {len(files_to_fix)} files to check for object syntax issues")
    
    fixed_count = 0
    for file_path in files_to_fix:
        try:
            if fix_object_syntax(file_path):
                fixed_count += 1
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed object syntax in {fixed_count} files")

if __name__ == "__main__":
    main()