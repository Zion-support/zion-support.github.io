#!/usr/bin/env python3
"""
Script to fix remaining syntax errors in TypeScript/JSX files
"""
import os
import re
import glob

def fix_remaining_syntax(file_path):
    """Fix remaining syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Remove empty lines after return statements
        content = re.sub(r'return\s*\(\s*\n\s*\n\s*<', 'return (\n    <', content)
        
        # Fix 2: Remove semicolons after JSX comments
        content = re.sub(r'\{/\*.*?\*/\};\s*', '{}', content)
        
        # Fix 3: Fix malformed JSX comments
        content = re.sub(r'\{/\*.*?\*/\};\s*$', '{}', content, flags=re.MULTILINE)
        
        # Fix 4: Fix empty lines before JSX elements
        content = re.sub(r'return\s*\(\s*\n\s*\n\s*<div', 'return (\n    <div', content)
        
        # Fix 5: Fix malformed function names (PagePage should be proper component names)
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
        
        # Fix 6: Fix missing closing braces
        lines = content.split('\n')
        brace_count = 0
        in_function = False
        fixed_lines = []
        
        for i, line in enumerate(lines):
            if 'const ' in line and '= () => {' in line:
                in_function = True
                brace_count = 1
            elif in_function:
                if '{' in line:
                    brace_count += line.count('{')
                if '}' in line:
                    brace_count -= line.count('}')
                
                if brace_count == 0 and in_function:
                    in_function = False
                    # Ensure proper closing
                    if not line.strip().endswith('};') and not line.strip().endswith('}'):
                        line = line.rstrip() + ';'
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Fix 7: Remove duplicate export statements
        content = re.sub(r'export default \w+;\s*\n\s*export default \w+;', 'export default PagePage;', content)
        
        # Fix 8: Fix malformed JSX structure
        content = re.sub(r'return\s*\(\s*\n\s*\n\s*<', 'return (\n    <', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed remaining syntax errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining syntax errors in all files"""
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
                if fix_remaining_syntax(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed remaining syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()