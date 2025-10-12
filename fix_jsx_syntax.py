#!/usr/bin/env python3
"""
Script to fix JSX syntax errors after merge conflict resolution
"""
import os
import re
import glob

def fix_jsx_syntax(file_path):
    """Fix JSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing closing div tags
        # Look for patterns where a div is opened but not closed
        lines = content.split('\n')
        fixed_lines = []
        div_stack = []
        
        for i, line in enumerate(lines):
            # Count opening and closing div tags
            open_divs = line.count('<div')
            close_divs = line.count('</div>')
            
            # Add to stack for each opening div
            for _ in range(open_divs):
                div_stack.append(i)
            
            # Remove from stack for each closing div
            for _ in range(close_divs):
                if div_stack:
                    div_stack.pop()
            
            fixed_lines.append(line)
        
        # If there are unclosed divs, add closing tags
        if div_stack:
            # Add closing divs at the end before the closing of the function
            for i in range(len(div_stack)):
                # Find the right place to insert closing divs
                # Look for the last return statement or function end
                insert_index = len(fixed_lines)
                for j in range(len(fixed_lines) - 1, -1, -1):
                    if 'return (' in fixed_lines[j] or fixed_lines[j].strip().endswith(');'):
                        insert_index = j + 1
                        break
                
                # Insert closing div
                fixed_lines.insert(insert_index, '    </div>')
        
        content = '\n'.join(fixed_lines)
        
        # Fix missing closing parentheses for JSX return statements
        if 'return (' in content and not content.strip().endswith(')'):
            # Look for the last return statement
            return_match = re.search(r'return\s*\([^)]*$', content, re.DOTALL)
            if return_match:
                # Add missing closing parenthesis
                content += '\n  )'
        
        # Fix missing closing braces for functions
        if 'export default function' in content and not content.strip().endswith('}'):
            # Count opening and closing braces
            open_braces = content.count('{')
            close_braces = content.count('}')
            
            if open_braces > close_braces:
                # Add missing closing braces
                missing_braces = open_braces - close_braces
                content += '\n' + '}' * missing_braces
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules
            if 'node_modules' in file_path:
                continue
                
            files_processed += 1
            if fix_jsx_syntax(file_path):
                files_fixed += 1
                print(f"Fixed JSX syntax in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed JSX syntax in {files_fixed} files")

if __name__ == "__main__":
    main()