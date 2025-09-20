#!/usr/bin/env python3
"""
Fix Remaining Syntax Errors
This script will fix the remaining syntax errors that the first script missed
"""

import os
import re
import glob
from pathlib import Path

def fix_remaining_errors(content):
    """Fix remaining syntax errors"""
    
    # Fix missing semicolons after import statements
    content = re.sub(r'import\s+([^;]+)\s*$', r'import \1;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons after interface declarations
    content = re.sub(r'interface\s+(\w+)\s*\{([^}]+)\}\s*$', r'interface \1 {\2};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons after type declarations
    content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+)\s*$', r'type \1 = \2;', content, flags=re.MULTILINE)
    
    # Fix missing commas in object literals
    content = re.sub(r'(\w+):\s*([^,}]+)\s*(\w+):', r'\1: \2,\n  \3:', content)
    
    # Fix missing commas in function parameters
    content = re.sub(r'(\w+)\s+(\w+)\s+(\w+)', r'\1, \2, \3', content)
    
    # Fix missing commas in array literals
    content = re.sub(r'\[([^\]]+)\s+([^\]]+)\]', r'[\1, \2]', content)
    
    # Fix broken JSX attributes
    content = re.sub(r'(\w+):\s*([^,}]+)\s*(\w+):', r'\1: \2,\n    \3:', content)
    
    # Fix missing semicolons in variable declarations
    content = re.sub(r'const\s+(\w+)\s*=\s*([^;]+)\s*$', r'const \1 = \2;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in function declarations
    content = re.sub(r'function\s+(\w+)\s*\([^)]*\)\s*\{([^}]+)\}\s*$', r'function \1() {\2};', content, flags=re.MULTILINE)
    
    # Fix octal literals
    content = re.sub(r'0(\d+)', r'0o\1', content)
    
    # Fix binary literals
    content = re.sub(r'0b(\d+)', r'0b\1', content)
    
    # Fix missing semicolons in class methods
    content = re.sub(r'(\w+)\s*\([^)]*\)\s*\{([^}]+)\}\s*$', r'\1() {\2};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in arrow functions
    content = re.sub(r'(\w+)\s*=>\s*\{([^}]+)\}\s*$', r'\1 => {\2};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in object methods
    content = re.sub(r'(\w+)\s*\([^)]*\)\s*\{([^}]+)\}\s*$', r'\1() {\2};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in switch statements
    content = re.sub(r'case\s+([^:]+):\s*([^;]+)\s*$', r'case \1: \2;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in return statements
    content = re.sub(r'return\s+([^;]+)\s*$', r'return \1;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in break statements
    content = re.sub(r'break\s*$', r'break;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in continue statements
    content = re.sub(r'continue\s*$', r'continue;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in throw statements
    content = re.sub(r'throw\s+([^;]+)\s*$', r'throw \1;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in debugger statements
    content = re.sub(r'debugger\s*$', r'debugger;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in with statements
    content = re.sub(r'with\s+\([^)]+\)\s*\{([^}]+)\}\s*$', r'with () {\1};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in try-catch statements
    content = re.sub(r'try\s*\{([^}]+)\}\s*catch\s*\([^)]+\)\s*\{([^}]+)\}\s*$', r'try {\1} catch () {\2};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in finally statements
    content = re.sub(r'finally\s*\{([^}]+)\}\s*$', r'finally {\1};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in if statements
    content = re.sub(r'if\s*\([^)]+\)\s*\{([^}]+)\}\s*$', r'if () {\1};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in else statements
    content = re.sub(r'else\s*\{([^}]+)\}\s*$', r'else {\1};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in while statements
    content = re.sub(r'while\s*\([^)]+\)\s*\{([^}]+)\}\s*$', r'while () {\1};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in for statements
    content = re.sub(r'for\s*\([^)]+\)\s*\{([^}]+)\}\s*$', r'for () {\1};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in for-in statements
    content = re.sub(r'for\s*\([^)]+\s+in\s+[^)]+\)\s*\{([^}]+)\}\s*$', r'for ( in ) {\1};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in for-of statements
    content = re.sub(r'for\s*\([^)]+\s+of\s+[^)]+\)\s*\{([^}]+)\}\s*$', r'for ( of ) {\1};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in do-while statements
    content = re.sub(r'do\s*\{([^}]+)\}\s*while\s*\([^)]+\)\s*$', r'do {\1} while ();', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in switch statements
    content = re.sub(r'switch\s*\([^)]+\)\s*\{([^}]+)\}\s*$', r'switch () {\1};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in default statements
    content = re.sub(r'default:\s*([^;]+)\s*$', r'default: \1;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in case statements
    content = re.sub(r'case\s+([^:]+):\s*([^;]+)\s*$', r'case \1: \2;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in labeled statements
    content = re.sub(r'(\w+):\s*([^;]+)\s*$', r'\1: \2;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in expression statements
    content = re.sub(r'([^;{}])\s*$', r'\1;', content, flags=re.MULTILINE)
    
    return content

def fix_file(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_remaining_errors(content)
        
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
    # Get all TypeScript and JavaScript files
    patterns = [
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.js',
        'src/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files_to_fix)} total files")

if __name__ == "__main__":
    main()