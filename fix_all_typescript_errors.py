#!/usr/bin/env python3

import os
import re
import subprocess
import sys

def fix_typescript_file(file_path):
    """Fix common TypeScript syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common patterns
        patterns = [
            # Fix commas in place of semicolons
            (r'(\w+),(\s*)(\w+)', r'\1;\2\3'),
            # Fix interface syntax
            (r'export, interface,', 'export interface'),
            # Fix class syntax
            (r'export, class,', 'export class'),
            # Fix function parameters
            (r'(\w+): (\w+),(\w+)', r'\1: \2, \3'),
            # Fix array syntax
            (r'(\w+)\[\] = \[\]', r'\1[] = []'),
            # Fix object syntax
            (r'(\w+): (\w+),(\s*)(\w+)', r'\1: \2,\3\4'),
            # Fix return types
            (r'(\w+): (\w+),(\s*)(\{)', r'\1: \2,\3\4'),
            # Fix method calls
            (r'(\w+)\((\w+),(\w+)\)', r'\1(\2, \3)'),
            # Fix string literals
            (r"'([^']*)'", r'"\1"'),
            # Fix missing semicolons
            (r'(\w+)(\s*)(\n)', r'\1;\2\3'),
        ]
        
        for pattern, replacement in patterns:
            content = re.sub(pattern, replacement, content)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False
    
    return False

def find_typescript_files():
    """Find all TypeScript files with errors"""
    result = subprocess.run([
        'npx', 'tsc', '--noEmit', '--listFiles'
    ], capture_output=True, text=True, cwd='/workspace')
    
    if result.returncode != 0:
        # Fallback to finding .ts files manually
        typescript_files = []
        for root, dirs, files in os.walk('/workspace/src'):
            for file in files:
                if file.endswith('.ts') or file.endswith('.tsx'):
                    typescript_files.append(os.path.join(root, file))
        return typescript_files
    
    return []

def main():
    print("🔧 Starting comprehensive TypeScript error fixing...")
    
    # Find TypeScript files
    files = find_typescript_files()
    
    if not files:
        print("No TypeScript files found")
        return
    
    print(f"Found {len(files)} TypeScript files")
    
    fixed_count = 0
    
    for file_path in files:
        if fix_typescript_file(file_path):
            fixed_count += 1
            print(f"✅ Fixed: {file_path}")
    
    print(f"\n🔧 Fixed {fixed_count} files")
    
    # Run type check again
    print("🔍 Running type check again...")
    result = subprocess.run([
        'npx', 'tsc', '--noEmit'
    ], capture_output=True, text=True, cwd='/workspace')
    
    if result.returncode == 0:
        print("✅ All TypeScript errors fixed!")
    else:
        print("⚠️  Still some errors remaining")
        print(result.stderr[:500] + "..." if len(result.stderr) > 500 else result.stderr)

if __name__ == "__main__":
    main()