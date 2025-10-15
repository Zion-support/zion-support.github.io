#!/usr/bin/env python3
"""
Comprehensive script to fix JSX syntax errors in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_syntax_errors(file_path):
    """Fix common JSX syntax errors in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Fix object syntax errors (replace {} with {})
        content = re.sub(r'const\s+\w+\s*=\s*\[\s*\{\s*;\s*', 'const solutions = [\n    {', content)
        content = re.sub(r'\{\s*;\s*', '{\n      ', content)
        content = re.sub(r';\s*\}\s*;', '\n    },\n    {', content)
        content = re.sub(r';\s*\}\s*\]\s*;', '\n    }\n  ];', content)
        
        # Fix 2: Fix function declaration syntax
        content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*;\s*', r'const \1: React.FC = () => {\n  ', content)
        
        # Fix 3: Fix JSX fragment syntax
        content = re.sub(r'return\s*\(\s*<>\s*;\s*', 'return (\n    <>\n      ', content)
        content = re.sub(r'<>\s*;\s*', '<>\n      ', content)
        content = re.sub(r';\s*</>\s*;\s*', '\n    </>\n  );', content)
        
        # Fix 4: Fix component syntax
        content = re.sub(r'<(\w+)\s*;\s*', r'<\1 ', content)
        content = re.sub(r';\s*/>', ' />', content)
        
        # Fix 5: Fix string literals
        content = re.sub(r'(\w+):\s*"([^"]*)"\s*;\s*', r'\1: "\2",\n      ', content)
        content = re.sub(r'(\w+):\s*(\d+)\s*;\s*', r'\1: \2,\n      ', content)
        content = re.sub(r'(\w+):\s*(true|false)\s*;\s*', r'\1: \2,\n      ', content)
        
        # Fix 6: Fix array syntax
        content = re.sub(r'\[\s*"([^"]*)"\s*;\s*', r'["\1",\n        ', content)
        content = re.sub(r';\s*"([^"]*)"\s*;\s*', r',\n        "\1",\n        ', content)
        content = re.sub(r';\s*"([^"]*)"\s*\]\s*;\s*', r',\n        "\1"\n      ],\n      ', content)
        
        # Fix 7: Fix JSX elements
        content = re.sub(r'<(\w+)\s+className="([^"]*)"\s*/>\s*;\s*', r'<\1 className="\2" />,\n      ', content)
        
        # Fix 8: Fix trailing semicolons in wrong places
        content = re.sub(r';\s*\n\s*(\w+)', r',\n      \1', content)
        
        # Fix 9: Fix missing closing braces
        content = re.sub(r'(\w+):\s*"([^"]*)"\s*;\s*$', r'\1: "\2"', content, flags=re.MULTILINE)
        
        # Fix 10: Fix React component structure
        content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*;\s*return\s*\(\s*<>\s*;\s*', 
                        r'const \1: React.FC = () => {\n  return (\n    <>\n      ', content)
        
        # Fix 11: Fix export statements
        content = re.sub(r'export\s+default\s+(\w+)\s*;\s*$', r'export default \1;', content, flags=re.MULTILINE)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_jsx_files():
    """Find all JSX/TSX files that might have syntax errors."""
    file_extensions = ['*.tsx', '*.jsx']
    jsx_files = []
    
    for ext in file_extensions:
        for file_path in glob.glob(f'**/{ext}', recursive=True):
            # Skip node_modules and other irrelevant directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next']):
                continue
            jsx_files.append(file_path)
    
    return jsx_files

def main():
    """Main function to fix JSX syntax errors."""
    print("🔍 Scanning for JSX/TSX files...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    jsx_files = find_jsx_files()
    
    if not jsx_files:
        print("✅ No JSX files found!")
        return
    
    print(f"📁 Found {len(jsx_files)} JSX/TSX files")
    
    print("\n🔧 Fixing JSX syntax errors...")
    
    fixed_count = 0
    for file_path in jsx_files:
        if fix_jsx_syntax_errors(file_path):
            print(f"  ✅ Fixed: {file_path}")
            fixed_count += 1
    
    print(f"\n✅ Successfully fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()