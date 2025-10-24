#!/usr/bin/env python3
"""
<<<<<<< HEAD
Script to fix common syntax errors in TypeScript/JavaScript files
=======
Script to fix common syntax errors in TypeScript/JSX files
>>>>>>> origin/main
"""
import os
import re
import glob

<<<<<<< HEAD
def fix_duplicate_imports(content):
    """Remove duplicate imports"""
    lines = content.split('\n')
    seen_imports = set()
    fixed_lines = []
    
    for line in lines:
        # Check if it's an import statement
        if line.strip().startswith('import '):
            # Extract the import statement (without semicolon)
            import_statement = line.strip().rstrip(';')
            if import_statement not in seen_imports:
                seen_imports.add(import_statement)
                # Add semicolon if missing
                if not line.strip().endswith(';'):
                    fixed_lines.append(line.rstrip() + ';')
                else:
                    fixed_lines.append(line)
            # Skip duplicate imports
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_missing_semicolons(content):
    """Add missing semicolons where needed"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # Skip empty lines, comments, and lines that already end with semicolon
        if not stripped or stripped.startswith('//') or stripped.startswith('/*') or stripped.startswith('*'):
            fixed_lines.append(line)
            continue
            
        # Skip lines that already end with semicolon, brace, or are part of multi-line statements
        if (stripped.endswith(';') or stripped.endswith('{') or stripped.endswith('}') or 
            stripped.endswith(',') or stripped.endswith('(') or stripped.endswith(')') or
            stripped.endswith('[') or stripped.endswith(']') or stripped.endswith(':')):
            fixed_lines.append(line)
            continue
            
        # Skip import/export statements that might be multi-line
        if stripped.startswith('import ') or stripped.startswith('export '):
            # Check if next line continues the import/export
            if i + 1 < len(lines) and lines[i + 1].strip().startswith('from '):
                fixed_lines.append(line)
                continue
        
        # Add semicolon to statements that need it
        if (stripped and not stripped.startswith('//') and 
            not stripped.startswith('/*') and not stripped.startswith('*') and
            not stripped.startswith('import ') and not stripped.startswith('export ') and
            not stripped.startswith('function ') and not stripped.startswith('const ') and
            not stripped.startswith('let ') and not stripped.startswith('var ') and
            not stripped.startswith('if ') and not stripped.startswith('for ') and
            not stripped.startswith('while ') and not stripped.startswith('switch ') and
            not stripped.startswith('try ') and not stripped.startswith('catch ') and
            not stripped.startswith('return ') and not stripped.startswith('throw ') and
            not stripped.startswith('break ') and not stripped.startswith('continue ') and
            not stripped.startswith('case ') and not stripped.startswith('default ') and
            not stripped.startswith('}') and not stripped.startswith('{') and
            not stripped.startswith('//') and not stripped.startswith('/*') and
            not stripped.startswith('*') and not stripped.startswith('*/')):
            
            # Add semicolon if the line looks like a statement
            if ('=' in stripped or 'return' in stripped or 'console.' in stripped or 
                'throw' in stripped or 'break' in stripped or 'continue' in stripped):
                fixed_lines.append(line.rstrip() + ';')
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_quotes_consistency(content):
    """Fix inconsistent quote usage"""
    # Convert all single quotes to double quotes for consistency
    content = re.sub(r"'([^']*)'", r'"\1"', content)
    return content

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues"""
    # Fix missing closing tags
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>', r'<\1\2>', content)
    
    # Fix self-closing tags
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>', r'<\1\2 />', content)
    
    return content

def fix_file(file_path):
    """Fix syntax errors in a single file"""
=======
def fix_syntax_errors(file_path):
    """Fix common syntax errors in a file"""
>>>>>>> origin/main
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
<<<<<<< HEAD
        # Apply fixes
        content = fix_duplicate_imports(content)
        content = fix_missing_semicolons(content)
        content = fix_quotes_consistency(content)
        content = fix_jsx_syntax(content)
=======
        # Fix 1: Remove duplicate export statements
        # Pattern: export default PagePage;}\n\nexport default PagePage;
        content = re.sub(r'export default \w+;\}\s*\n\s*export default \w+;', 'export default PagePage;', content)
        
        # Fix 2: Fix missing closing braces
        # Pattern: export default PagePage;}\n\nexport default PagePage;
        content = re.sub(r'export default \w+;\}\s*$', 'export default PagePage;', content, flags=re.MULTILINE)
        
        # Fix 3: Fix duplicate closing braces
        content = re.sub(r'}\s*;\s*}\s*$', '};', content, flags=re.MULTILINE)
        
        # Fix 4: Fix missing semicolons after closing braces
        content = re.sub(r'}\s*$', '};', content, flags=re.MULTILINE)
        
        # Fix 5: Fix function declarations that are missing proper structure
        # Look for patterns like: const PagePage = () => { ... }; export default PagePage;
        if 'const PagePage = () => {' in content and 'export default PagePage;' in content:
            # Remove the duplicate export
            content = re.sub(r'export default PagePage;\s*$', '', content, flags=re.MULTILINE)
        
        # Fix 6: Fix JSX return statements that are malformed
        # Look for patterns where return statement is not properly structured
        content = re.sub(r'return\s*\(\s*$', 'return (\n    ', content, flags=re.MULTILINE)
        
        # Fix 7: Fix missing React import for JSX
        if 'return (' in content and 'import React' not in content and 'use client' not in content:
            content = "'use client';\nimport React from 'react';\n" + content
        
        # Fix 8: Fix malformed JSX attributes
        content = re.sub(r'className="([^"]*)"\s*$', r'className="\1"', content)
        
        # Fix 9: Fix missing closing tags
        # This is a basic fix - more complex cases might need manual intervention
        content = re.sub(r'<div([^>]*)>\s*$', r'<div\1>', content)
        
        # Fix 10: Fix duplicate semicolons
        content = re.sub(r';\s*;', ';', content)
        
        # Fix 11: Fix missing closing parenthesis in return statements
        content = re.sub(r'return\s*\(\s*<div([^>]*)>\s*$', r'return (\n    <div\1>', content)
        
        # Fix 12: Fix malformed function declarations
        if 'const PagePage = () => {' in content:
            # Ensure proper function structure
            content = re.sub(r'const PagePage = \(\) => \{', 'const PagePage = () => {', content)
        
        # Fix 13: Fix missing closing braces in functions
        lines = content.split('\n')
        brace_count = 0
        in_function = False
        fixed_lines = []
        
        for line in lines:
            if 'const PagePage = () => {' in line:
                in_function = True
                brace_count = 1
            elif in_function:
                if '{' in line:
                    brace_count += line.count('{')
                if '}' in line:
                    brace_count -= line.count('}')
                
                if brace_count == 0 and in_function:
                    in_function = False
                    # Add missing closing brace if needed
                    if not line.strip().endswith('};'):
                        line = line.rstrip() + ';'
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
>>>>>>> origin/main
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
<<<<<<< HEAD
=======
            print(f"Fixed syntax errors in: {file_path}")
>>>>>>> origin/main
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Main function to fix all syntax errors"""
    patterns = [
        './app/**/*.tsx',
        './app/**/*.ts', 
        './app/**/*.js',
        './app/**/*.jsx',
        './src/**/*.tsx',
        './src/**/*.ts',
        './src/**/*.js', 
        './src/**/*.jsx',
        './components/**/*.tsx',
        './components/**/*.ts',
        './components/**/*.js',
        './components/**/*.jsx'
=======
    """Main function to fix syntax errors in all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
>>>>>>> origin/main
    ]
    
    files_to_fix = []
    for pattern in patterns:
<<<<<<< HEAD
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file(file_path):
                print(f"Fixed: {file_path}")
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")
=======
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_syntax_errors(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax errors in {files_fixed} files")
>>>>>>> origin/main

if __name__ == "__main__":
    main()