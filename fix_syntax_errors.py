#!/usr/bin/env python3
"""
Script to fix common syntax errors in TypeScript/JavaScript files
"""
import os
import re
import glob

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
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_duplicate_imports(content)
        content = fix_missing_semicolons(content)
        content = fix_quotes_consistency(content)
        content = fix_jsx_syntax(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
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
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file(file_path):
                print(f"Fixed: {file_path}")
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()