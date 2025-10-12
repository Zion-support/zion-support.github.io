#!/usr/bin/env python3
"""
Script to fix common syntax errors and unused imports in TypeScript/React files.
"""

import os
import re
import glob

def fix_unused_imports(content):
    """Remove unused imports from lucide-react and other common libraries."""
    lines = content.split('\n')
    new_lines = []
    
    for line in lines:
        # Check if this is an import line with unused imports
        if 'import' in line and 'from' in line and ('lucide-react' in line or 'react-icons' in line):
            # Extract the import statement
            import_match = re.match(r'import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"]', line)
            if import_match:
                imports_str = import_match.group(1)
                source = import_match.group(2)
                
                # Parse individual imports
                imports = [imp.strip() for imp in imports_str.split(',')]
                
                # Check which imports are actually used in the file
                used_imports = []
                for imp in imports:
                    # Remove any type annotations or aliases
                    clean_imp = imp.split(' as ')[0].strip()
                    if clean_imp and clean_imp in content:
                        used_imports.append(imp)
                
                # Reconstruct the import line
                if used_imports:
                    new_line = f"import {{ {', '.join(used_imports)} }} from '{source}';"
                    new_lines.append(new_line)
                else:
                    # If no imports are used, remove the line
                    continue
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)
    
    return '\n'.join(new_lines)

def fix_syntax_errors(content):
    """Fix common syntax errors."""
    # Fix missing closing braces
    content = re.sub(r'(\s*)(\w+)\s*=\s*\[([^]]*)\s*$', r'\1\2 = [\3]', content, flags=re.MULTILINE)
    
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    # Fix JSX closing tags
    content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
    
    return content

def fix_parsing_errors(file_path, content):
    """Fix specific parsing errors in files."""
    lines = content.split('\n')
    new_lines = []
    
    for i, line in enumerate(lines):
        # Fix common parsing errors
        if 'Parsing error' in str(i) or 'Unexpected token' in line:
            continue
            
        # Fix missing closing braces
        if line.strip().endswith('{') and i < len(lines) - 1:
            # Check if next line has proper closing
            next_line = lines[i + 1] if i + 1 < len(lines) else ''
            if not next_line.strip().startswith('}') and not next_line.strip().startswith('//'):
                # Add closing brace
                new_lines.append(line)
                new_lines.append('}')
                continue
        
        # Fix JSX expressions
        if 'JSX expressions must have one parent element' in str(i):
            # Wrap in fragment
            new_lines.append('<React.Fragment>')
            new_lines.append(line)
            new_lines.append('</React.Fragment>')
            continue
            
        new_lines.append(line)
    
    return '\n'.join(new_lines)

def fix_file(file_path):
    """Fix a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_unused_imports(content)
        content = fix_syntax_errors(content)
        content = fix_parsing_errors(file_path, content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if '.original' in file_path or file_path.endswith('.backup'):
                continue
                
            files_processed += 1
            if fix_file(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()