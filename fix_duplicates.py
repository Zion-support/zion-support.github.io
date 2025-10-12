#!/usr/bin/env python3
import os
import re
import glob

def fix_duplicate_declarations(file_path):
    """Fix duplicate function declarations and exports in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has issues
        if 'const ' not in content and 'function ' not in content:
            return False
            
        lines = content.split('\n')
        new_lines = []
        seen_functions = set()
        seen_exports = set()
        in_function = False
        current_function = None
        
        for i, line in enumerate(lines):
            # Check for function declarations
            if re.match(r'^\s*(const|function)\s+\w+', line.strip()):
                func_name = re.search(r'(const|function)\s+(\w+)', line.strip())
                if func_name:
                    func_name = func_name.group(2)
                    if func_name in seen_functions:
                        # Skip duplicate function declarations
                        in_function = True
                        current_function = func_name
                        continue
                    else:
                        seen_functions.add(func_name)
                        current_function = func_name
                        in_function = True
            
            # Check for export statements
            if line.strip().startswith('export default'):
                if 'export default' in seen_exports:
                    # Skip duplicate exports
                    continue
                else:
                    seen_exports.add('export default')
            
            # Check for end of function
            if in_function and (line.strip() == '}' or line.strip().startswith('export')):
                in_function = False
                current_function = None
            
            if not in_function:
                new_lines.append(line)
        
        # Write the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Fixed duplicates in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    pattern = "/workspace/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_duplicate_declarations(file_path):
            fixed_count += 1
    
    print(f"Fixed duplicates in {fixed_count} files")

if __name__ == "__main__":
    main()