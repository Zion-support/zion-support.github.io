#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_parent_elements(file_path):
    """Fix JSX parent element issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Check if the file has JSX parent element issues
        # Look for patterns where there are multiple JSX elements at root level
        lines = content.split('\n')
        new_lines = []
        in_jsx_return = False
        jsx_elements = []
        brace_count = 0
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            
            # Check if we're in a return statement
            if 'return (' in stripped or 'return<' in stripped:
                in_jsx_return = True
                new_lines.append(line)
                continue
            
            if in_jsx_return:
                # Count braces to track JSX structure
                brace_count += line.count('{') - line.count('}')
                
                # If we hit a closing brace and we're at the root level
                if brace_count <= 0 and (stripped == ')' or stripped == '};' or stripped == '}'):
                    # We need to wrap multiple JSX elements in a fragment
                    if len(jsx_elements) > 1:
                        # Wrap in React Fragment
                        new_lines.append('    <>')
                        for element in jsx_elements:
                            new_lines.append(element)
                        new_lines.append('    </>')
                    else:
                        for element in jsx_elements:
                            new_lines.append(element)
                    
                    new_lines.append(line)
                    in_jsx_return = False
                    jsx_elements = []
                    continue
                
                # Collect JSX elements
                if stripped and not stripped.startswith('//') and not stripped.startswith('/*'):
                    jsx_elements.append(line)
                else:
                    new_lines.append(line)
            else:
                new_lines.append(line)
        
        # If we still have JSX elements at the end, wrap them
        if jsx_elements:
            if len(jsx_elements) > 1:
                new_lines.append('    <>')
                for element in jsx_elements:
                    new_lines.append(element)
                new_lines.append('    </>')
            else:
                for element in jsx_elements:
                    new_lines.append(element)
        
        new_content = '\n'.join(new_lines)
        
        if new_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed JSX parent elements in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix JSX parent elements in all files"""
    print("Fixing JSX parent element issues...")
    
    # Find all TypeScript/JavaScript files
    patterns = ['**/*.tsx', '**/*.ts']
    files_to_fix = []
    
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and '.git' not in f]
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_jsx_parent_elements(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
