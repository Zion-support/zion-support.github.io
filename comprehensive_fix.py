#!/usr/bin/env python3
"""
Comprehensive script to fix all syntax errors in TypeScript/JSX files
"""
import os
import re
import glob

def comprehensive_fix(file_path):
    """Comprehensive fix for all syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Remove all malformed JSX comments and empty braces
        content = re.sub(r'\{/\*.*?\*/\};\s*', '', content)
        content = re.sub(r'\{\}\s*', '', content)
        
        # Fix 2: Fix malformed return statements
        content = re.sub(r'return\s*\(\s*\n\s*\n\s*<', 'return (\n    <', content)
        content = re.sub(r'return\s*\(\s*\n\s*<', 'return (\n    <', content)
        
        # Fix 3: Remove duplicate export statements
        # Find all export default statements and keep only the last one
        export_matches = list(re.finditer(r'export default \w+;', content))
        if len(export_matches) > 1:
            # Keep only the last export statement
            for i, match in enumerate(export_matches[:-1]):
                content = content.replace(match.group(), '')
        
        # Fix 4: Fix malformed function declarations
        # Replace PagePage with proper component names
        if 'const PagePage = () => {' in content:
            filename = os.path.basename(file_path)
            if filename == 'page.tsx':
                dir_name = os.path.basename(os.path.dirname(file_path))
                component_name = ''.join(word.capitalize() for word in dir_name.split('-')) + 'Page'
            else:
                component_name = filename.replace('.tsx', '').replace('.ts', '')
                component_name = ''.join(word.capitalize() for word in component_name.split('-'))
            
            content = content.replace('const PagePage = () => {', f'const {component_name} = () => {{')
            content = content.replace('export default PagePage;', f'export default {component_name};')
        
        # Fix 5: Fix malformed JSX structure
        # Remove empty lines and fix indentation
        lines = content.split('\n')
        fixed_lines = []
        in_jsx = False
        jsx_indent = 0
        
        for line in lines:
            stripped = line.strip()
            
            # Track JSX context
            if 'return (' in line:
                in_jsx = True
                jsx_indent = 0
            elif in_jsx and stripped.startswith('</'):
                in_jsx = False
                jsx_indent = 0
            
            # Fix empty lines in JSX
            if in_jsx and not stripped and jsx_indent > 0:
                continue
            
            # Fix indentation in JSX
            if in_jsx and stripped.startswith('<'):
                if stripped.startswith('</'):
                    jsx_indent -= 1
                line = '    ' * (jsx_indent + 1) + stripped
                if not stripped.startswith('</'):
                    jsx_indent += 1
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Fix 6: Remove semicolons after JSX elements
        content = re.sub(r';\s*$', '', content, flags=re.MULTILINE)
        
        # Fix 7: Fix malformed JSX attributes
        content = re.sub(r'className="([^"]*)"\s*;\s*', r'className="\1" ', content)
        
        # Fix 8: Fix missing closing braces
        # Count braces and ensure proper closing
        brace_count = 0
        paren_count = 0
        in_function = False
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            if 'const ' in line and '= () => {' in line:
                in_function = True
                brace_count = 1
                paren_count = 0
            elif in_function:
                if '{' in line:
                    brace_count += line.count('{')
                if '}' in line:
                    brace_count -= line.count('}')
                if '(' in line:
                    paren_count += line.count('(')
                if ')' in line:
                    paren_count -= line.count(')')
                
                if brace_count == 0 and paren_count == 0 and in_function:
                    in_function = False
                    if not line.strip().endswith('};'):
                        line = line.rstrip() + ';'
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Fix 9: Clean up any remaining malformed patterns
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)  # Remove multiple empty lines
        content = re.sub(r';\s*;', ';', content)  # Remove duplicate semicolons
        content = re.sub(r'\{\s*\}', '{}', content)  # Clean up empty braces
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Comprehensively fixed: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to comprehensively fix all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if comprehensive_fix(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Comprehensively fixed {files_fixed} files")

if __name__ == "__main__":
    main()