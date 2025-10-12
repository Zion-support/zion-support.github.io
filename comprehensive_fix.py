#!/usr/bin/env python3
import os
import re
import glob

def comprehensive_fix(file_path):
    """Comprehensive fix for React component files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Find the main function/component
        if 'export default function' in content or 'const ' in content and '= () =>' in content:
            # Find the end of the main function
            lines = content.split('\n')
            in_function = False
            brace_count = 0
            function_end = -1
            
            for i, line in enumerate(lines):
                if 'export default function' in line or ('const ' in line and '= () =>' in line):
                    in_function = True
                    brace_count = 0
                
                if in_function:
                    brace_count += line.count('{')
                    brace_count -= line.count('}')
                    
                    if brace_count == 0 and line.strip() == '}':
                        function_end = i
                        break
            
            if function_end > 0:
                # Keep only the function and remove everything after it
                lines = lines[:function_end + 1]
                content = '\n'.join(lines)
        
        # Fix missing semicolons
        content = re.sub(r'(\s+)\]\s*$', r'\1];', content, flags=re.MULTILINE)
        
        # Fix missing return statements
        if 'return (' not in content and '<div className=' in content and 'export default' in content:
            content = re.sub(r'(\s+)(<div className=)', r'\1return (\n    \2', content)
        
        # Fix missing closing parentheses
        if 'return (' in content and not content.strip().endswith(');'):
            content = re.sub(r'(\s+)(</div>\s*</div>\s*)$', r'\1\2\n  );', content)
        
        # Remove any content after the main function
        lines = content.split('\n')
        in_function = False
        brace_count = 0
        function_end = -1
        
        for i, line in enumerate(lines):
            if 'export default function' in line or ('const ' in line and '= () =>' in line):
                in_function = True
                brace_count = 0
            
            if in_function:
                brace_count += line.count('{')
                brace_count -= line.count('}')
                
                if brace_count == 0 and line.strip() == '}':
                    function_end = i
                    break
        
        if function_end > 0:
            lines = lines[:function_end + 1]
            content = '\n'.join(lines)
        
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
    # Find all React component files
    file_patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    fixed_count = 0
    
    for pattern in file_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if comprehensive_fix(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()