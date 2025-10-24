#!/usr/bin/env python3
"""
Final comprehensive script to fix all remaining issues
"""
import os
import re
import glob

def final_fix_all(file_path):
    """Final comprehensive fix for all issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Remove all duplicate export statements - keep only the first one
        export_matches = list(re.finditer(r'export default \w+;', content))
        if len(export_matches) > 1:
            # Remove all but the first export
            for i, match in enumerate(export_matches[1:], 1):
                content = content.replace(match.group(), '')
        
        # Fix 2: Remove any PagePage references
        content = re.sub(r'export default PagePage;', '', content)
        
        # Fix 3: Fix malformed JSX structure
        content = re.sub(r'return\s*\(\s*\n\s*\n\s*<', 'return (\n    <', content)
        
        # Fix 4: Remove empty lines and fix indentation
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
        
        # Fix 5: Remove semicolons after JSX elements
        content = re.sub(r';\s*$', '', content, flags=re.MULTILINE)
        
        # Fix 6: Fix malformed JSX comments
        content = re.sub(r'\{/\*.*?\*/\};\s*', '', content)
        
        # Fix 7: Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Fix 8: Remove duplicate semicolons
        content = re.sub(r';\s*;', ';', content)
        
        # Fix 9: Fix malformed function declarations
        if 'const PagePage = () => {' in content:
            # Extract the file name to create a proper component name
            filename = os.path.basename(file_path)
            if filename == 'page.tsx':
                # Get the directory name for the component
                dir_name = os.path.basename(os.path.dirname(file_path))
                component_name = ''.join(word.capitalize() for word in dir_name.split('-')) + 'Page'
            else:
                component_name = filename.replace('.tsx', '').replace('.ts', '')
                component_name = ''.join(word.capitalize() for word in component_name.split('-'))
            
            content = content.replace('const PagePage = () => {', f'const {component_name} = () => {{')
            content = content.replace('export default PagePage;', f'export default {component_name};')
        
        # Fix 10: Ensure proper function structure
        lines = content.split('\n')
        brace_count = 0
        paren_count = 0
        in_function = False
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
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Final fix applied to: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to apply final fixes to all files"""
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
                if final_fix_all(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Applied final fixes to {files_fixed} files")

if __name__ == "__main__":
    main()