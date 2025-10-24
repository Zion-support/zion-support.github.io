#!/usr/bin/env python3
<<<<<<< HEAD
"""
Comprehensive script to fix all remaining issues in the codebase.
"""

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
import os
import re
import glob

<<<<<<< HEAD
def fix_syntax_errors(content):
    """Fix common syntax errors."""
    # Remove any remaining merge conflict markers
    content = re.sub(r'<<<<<<<.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'>>>>>>>.*?\n', '', content, flags=re.DOTALL)
    
    # Fix duplicate function declarations
    content = re.sub(r'(\w+)\s*\(\s*\)\s*{\s*\n\s*import\s+', r'import ', content, flags=re.MULTILINE)
    
    # Fix missing closing braces
    lines = content.split('\n')
    fixed_lines = []
    brace_count = 0
    
    for line in lines:
        fixed_lines.append(line)
        # Count braces
        brace_count += line.count('{') - line.count('}')
        
        # If we're at the end of a function and missing closing braces
        if line.strip() and not line.strip().startswith('//') and not line.strip().startswith('*'):
            if 'export default' in line and brace_count > 0:
                # Add missing closing braces
                for _ in range(brace_count):
                    fixed_lines.append('}')
                brace_count = 0
    
    return '\n'.join(fixed_lines)

def clean_unused_imports(content):
    """Remove unused imports and variables."""
    lines = content.split('\n')
    cleaned_lines = []
    import_lines = []
    other_lines = []
    seen_imports = set()
    
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('import '):
            # Create a normalized version for comparison
            normalized = re.sub(r'\s+', ' ', stripped)
            if normalized not in seen_imports:
                import_lines.append(line)
                seen_imports.add(normalized)
        else:
            other_lines.append(line)
    
    # Combine imports and other lines
    return '\n'.join(import_lines + other_lines)

def fix_export_statements(content):
    """Fix export statements."""
    # Fix duplicate export statements
    content = re.sub(r'export default\s+\w+;\s*\n\s*export default', 'export default', content)
    
    # Ensure proper export format
    content = re.sub(r'(\w+)\s*\(\s*\)\s*{\s*\n\s*export default', r'export default function \1', content)
    
    return content

def process_file(file_path):
    """Process a single file."""
=======
def fix_tsx_syntax_errors(file_path):
    """Fix common TypeScript/JSX syntax errors in a file"""
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
<<<<<<< HEAD
        # Fix syntax errors
        content = fix_syntax_errors(content)
        
        # Clean unused imports
        content = clean_unused_imports(content)
        
        # Fix export statements
        content = fix_export_statements(content)
=======
        # Fix common syntax errors
        # Fix malformed JSX closing tags
        content = re.sub(r'</[^>]*\s*/>', lambda m: m.group(0).replace(' />', '>'), content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'className="([^"]*)\s*"', r'className="\1"', content)
        content = re.sub(r'className="([^"]*)\s+([^"]*)"', r'className="\1 \2"', content)
        
        # Fix malformed JSX expressions
        content = re.sub(r'\{([^}]*)\s*\}', lambda m: f'{{{m.group(1).strip()}}}', content)
        
        # Fix malformed JSX elements
        content = re.sub(r'<([^>]*)\s*/>', r'<\1 />', content)
        
        # Fix malformed function calls
        content = re.sub(r'(\w+)\s*\(\s*\)\s*;', r'\1();', content)
        
        # Fix malformed object properties
        content = re.sub(r'(\w+):\s*([^,}]+)\s*,', r'\1: \2,', content)
        
        # Fix malformed array elements
        content = re.sub(r'\[\s*([^\]]*)\s*\]', lambda m: f'[{m.group(1).strip()}]', content)
        
        # Fix malformed string literals
        content = re.sub(r'"([^"]*)\s*"', lambda m: f'"{m.group(1).strip()}"', content)
        
        # Fix malformed template literals
        content = re.sub(r'`([^`]*)\s*`', lambda m: f'`{m.group(1).strip()}`', content)
        
        # Fix malformed comments
        content = re.sub(r'//\s*([^\n]*)', lambda m: f'// {m.group(1).strip()}', content)
        
        # Fix malformed imports
        content = re.sub(r'import\s+([^;]+)\s*;', lambda m: f'import {m.group(1).strip()};', content)
        
        # Fix malformed exports
        content = re.sub(r'export\s+([^;]+)\s*;', lambda m: f'export {m.group(1).strip()};', content)
        
        # Fix malformed function declarations
        content = re.sub(r'function\s+(\w+)\s*\(\s*([^)]*)\s*\)\s*{', r'function \1(\2) {', content)
        
        # Fix malformed arrow functions
        content = re.sub(r'(\w+)\s*=>\s*{', r'\1 => {', content)
        
        # Fix malformed React components
        content = re.sub(r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(', r'const \1: React.FC = (', content)
        
        # Fix malformed JSX return statements
        content = re.sub(r'return\s*\(\s*<([^>]*)>', r'return (\n    <\1>', content)
        
        # Fix malformed closing tags
        content = re.sub(r'</([^>]*)\s*>\s*\)', r'</\1>\n  )', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Clean up trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
<<<<<<< HEAD
            print(f"✓ Fixed: {file_path}")
            return True
        else:
            return False
            
=======
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_specific_tsx_errors(file_path):
    """Fix specific TypeScript/JSX errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix specific patterns that cause TypeScript errors
        
        # Fix malformed JSX expressions like {feature.title}
        content = re.sub(r'\{([^}]*)\s*\}', lambda m: f'{{{m.group(1).strip()}}}', content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'className="([^"]*)\s*"', r'className="\1"', content)
        
        # Fix malformed JSX elements
        content = re.sub(r'<([^>]*)\s*/>', r'<\1 />', content)
        
        # Fix malformed function calls
        content = re.sub(r'(\w+)\s*\(\s*\)\s*;', r'\1();', content)
        
        # Fix malformed object properties
        content = re.sub(r'(\w+):\s*([^,}]+)\s*,', r'\1: \2,', content)
        
        # Fix malformed array elements
        content = re.sub(r'\[\s*([^\]]*)\s*\]', lambda m: f'[{m.group(1).strip()}]', content)
        
        # Fix malformed string literals
        content = re.sub(r'"([^"]*)\s*"', lambda m: f'"{m.group(1).strip()}"', content)
        
        # Fix malformed template literals
        content = re.sub(r'`([^`]*)\s*`', lambda m: f'`{m.group(1).strip()}`', content)
        
        # Fix malformed comments
        content = re.sub(r'//\s*([^\n]*)', lambda m: f'// {m.group(1).strip()}', content)
        
        # Fix malformed imports
        content = re.sub(r'import\s+([^;]+)\s*;', lambda m: f'import {m.group(1).strip()};', content)
        
        # Fix malformed exports
        content = re.sub(r'export\s+([^;]+)\s*;', lambda m: f'export {m.group(1).strip()};', content)
        
        # Fix malformed function declarations
        content = re.sub(r'function\s+(\w+)\s*\(\s*([^)]*)\s*\)\s*{', r'function \1(\2) {', content)
        
        # Fix malformed arrow functions
        content = re.sub(r'(\w+)\s*=>\s*{', r'\1 => {', content)
        
        # Fix malformed React components
        content = re.sub(r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(', r'const \1: React.FC = (', content)
        
        # Fix malformed JSX return statements
        content = re.sub(r'return\s*\(\s*<([^>]*)>', r'return (\n    <\1>', content)
        
        # Fix malformed closing tags
        content = re.sub(r'</([^>]*)\s*>\s*\)', r'</\1>\n  )', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Clean up trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Main function."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts'
=======
    """Main function to fix TypeScript/JSX syntax errors in all relevant files"""
    # Get all TypeScript, JavaScript, and JSX files
    patterns = [
        '**/*.ts',
        '**/*.tsx', 
        '**/*.js',
        '**/*.jsx'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
<<<<<<< HEAD
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
=======
            # Skip node_modules and other irrelevant directories
            if 'node_modules' in file_path or '.git' in file_path:
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
                continue
                
            files_processed += 1
            if fix_tsx_syntax_errors(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files fixed: {files_fixed}")

if __name__ == "__main__":
    main()