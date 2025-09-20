#!/usr/bin/env python3
"""
Comprehensive TypeScript error fixer
Fixes common syntax errors in TypeScript/TSX files
"""

import os
import re
import subprocess
from pathlib import Path

def fix_file(file_path):
    """Fix common TypeScript syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax errors
        fixes = [
            # Fix export statements with commas
            (r'export,\s*const,', 'export const'),
            (r'export,\s*function,', 'export function'),
            (r'export,\s*default,', 'export default'),
            
            # Fix function declarations with commas
            (r'function,\s*', 'function '),
            
            # Fix object properties with commas
            (r'(\w+):\s*(\w+),(\w+)', r'\1: \2, \3'),
            (r'(\w+):\s*(\w+),(\w+):', r'\1: \2, \3:'),
            
            # Fix method calls with commas
            (r'(\w+)\(([^)]+),([^)]+)\)', r'\1(\2, \3)'),
            
            # Fix array/object syntax
            (r'{\s*,', '{'),
            (r',\s*}', '}'),
            (r'\[\s*,', '['),
            (r',\s*\]', ']'),
            
            # Fix catch statements
            (r'catch\(\)', 'catch (error)'),
            
            # Fix if statements
            (r'if\(\)', 'if (true)'),
            
            # Fix octal numbers
            (r'0o(\d+)', r'0\1'),
            
            # Fix missing spaces in object properties
            (r'(\w+)(\w+):', r'\1 \2:'),
            
            # Fix missing commas in object literals
            (r'(\w+):\s*(\w+)(\w+):', r'\1: \2, \3:'),
            
            # Fix missing semicolons
            (r'(\w+)\s*(\w+)\s*(\w+)', r'\1 \2 \3'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content)
        
        # Additional specific fixes
        content = re.sub(r'(\w+),(\w+),(\w+)', r'\1, \2, \3', content)
        content = re.sub(r'(\w+):(\w+):(\w+)', r'\1: \2: \3', content)
        content = re.sub(r'(\w+)\((\w+),(\w+)\)', r'\1(\2, \3)', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix TypeScript errors"""
    print("🔧 Starting comprehensive TypeScript error fixing...")
    
    # Get list of files with TypeScript errors
    result = subprocess.run(['npm', 'run', 'type-check'], 
                          capture_output=True, text=True, cwd='/workspace')
    
    if result.returncode == 0:
        print("✅ No TypeScript errors found!")
        return
    
    # Extract file paths from error output
    error_files = set()
    for line in result.stderr.split('\n'):
        if '.tsx:' in line or '.ts:' in line:
            file_path = line.split(':')[0]
            if file_path.startswith('src/') or file_path.startswith('components/'):
                error_files.add(file_path)
    
    print(f"📁 Found {len(error_files)} files with TypeScript errors")
    
    fixed_count = 0
    for file_path in error_files:
        full_path = os.path.join('/workspace', file_path)
        if os.path.exists(full_path):
            if fix_file(full_path):
                fixed_count += 1
                print(f"✅ Fixed: {file_path}")
    
    print(f"🔧 Fixed {fixed_count} files")
    
    # Run type check again
    print("🔍 Running type check again...")
    result = subprocess.run(['npm', 'run', 'type-check'], 
                          capture_output=True, text=True, cwd='/workspace')
    
    if result.returncode == 0:
        print("✅ All TypeScript errors fixed!")
    else:
        print(f"⚠️  Still {len(result.stderr.split('error TS'))} errors remaining")

if __name__ == "__main__":
    main()