#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining TypeScript/JavaScript syntax errors
"""
import os
import re

def fix_file(file_path):
    """Fix all common syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix semicolons in object properties
        content = re.sub(r'(\w+):\s*([^,;]+);\s*\n', r'\1: \2,\n', content)
        
        # Fix semicolons in function parameters
        content = re.sub(r'(\w+):\s*([^,;]+);\s*\)', r'\1: \2)', content)
        
        # Fix semicolons in array elements
        content = re.sub(r'([^,;]+);\s*\n\s*\]', r'\1\n  ]', content)
        
        # Fix semicolons in return statements
        content = re.sub(r'return\s+([^;]+);\s*$', r'return \1;', content, flags=re.MULTILINE)
        
        # Fix trailing commas
        content = re.sub(r',\s*\)', r')', content)
        content = re.sub(r',\s*\}', r'}', content)
        content = re.sub(r',\s*\]', r']', content)
        
        # Fix invalid variable names with hyphens
        content = re.sub(r'const\s+([a-zA-Z0-9_-]+)-([a-zA-Z0-9_-]+):', r'const \1\2:', content)
        
        # Fix function declarations with semicolons
        content = re.sub(r'(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{;', r'\1: React.FC = () => {', content)
        
        # Fix return statements with semicolons
        content = re.sub(r'return\s*\(;', r'return (', content)
        
        # Fix JSX with semicolons
        content = re.sub(r'<(\w+)\s+([^>]+)>;', r'<\1 \2>', content)
        content = re.sub(r'</(\w+)>;', r'</\1>', content)
        
        # Fix export statements
        content = re.sub(r'export\s+default\s+([^;]+);\s*$', r'export default \1;', content, flags=re.MULTILINE)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Find and fix all TypeScript/JavaScript files"""
    fixed_count = 0
    
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other directories
        if 'node_modules' in root or '.next' in root:
            continue
            
        for file in files:
            if file.endswith(('.ts', '.tsx', '.js', '.jsx')):
                file_path = os.path.join(root, file)
                if fix_file(file_path):
                    fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()