#!/usr/bin/env python3
import os
import re
import glob

def fix_final_jsx(file_path):
    """Final comprehensive JSX fix."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix the specific pattern we're seeing
        # Look for the pattern where divs are closed immediately after opening
        content = re.sub(r'<div([^>]*)>\s*</div><Helmet>', r'<div\1>\n      <Helmet>', content)
        content = re.sub(r'</Helmet>\s*<div([^>]*)>\s*</div><h1', r'</Helmet>\n      </div>\n      <div\1>\n        <h1', content)
        content = re.sub(r'</h1>\s*<p', r'</h1>\n        <p', content)
        content = re.sub(r'</p>\s*<Link', r'</p>\n        <Link', content)
        content = re.sub(r'</Link>\s*</div>\s*</div>', r'</Link>\n      </div>\n    </div>', content)
        
        # Fix the overall structure
        lines = content.split('\n')
        new_lines = []
        in_function = False
        in_return = False
        in_jsx = False
        brace_count = 0
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            
            # Track function start
            if 'export default function' in line or 'function' in line:
                in_function = True
                new_lines.append(line)
                continue
            
            # Track return statement
            if 'return' in line and in_function:
                in_return = True
                new_lines.append('  return (')
                new_lines.append('    <>')
                continue
            
            if in_return and stripped:
                # This is JSX content
                if stripped.startswith('<'):
                    new_lines.append('      ' + stripped)
                else:
                    new_lines.append('      ' + stripped)
            elif in_function and not in_return:
                new_lines.append(line)
            else:
                new_lines.append(line)
        
        # If we didn't find a proper return structure, fix it manually
        if 'return' in content and '<>' in content:
            # Find the return statement and fix it
            return_match = re.search(r'return\s*\(\s*<>([^<]*)</>', content, re.DOTALL)
            if return_match:
                jsx_content = return_match.group(1).strip()
                # Clean up the JSX content
                jsx_content = re.sub(r'<div([^>]*)>\s*</div>', r'<div\1>', jsx_content)
                jsx_content = re.sub(r'</div><Helmet>', r'\n      <Helmet>', jsx_content)
                jsx_content = re.sub(r'</Helmet>\s*<div([^>]*)>\s*</div><h1', r'</Helmet>\n      </div>\n      <div\1>\n        <h1', jsx_content)
                jsx_content = re.sub(r'</h1>\s*<p', r'</h1>\n        <p', jsx_content)
                jsx_content = re.sub(r'</p>\s*<Link', r'</p>\n        <Link', jsx_content)
                jsx_content = re.sub(r'</Link>\s*</div>\s*</div>', r'</Link>\n      </div>\n    </div>', jsx_content)
                
                # Replace the return statement
                new_return = f'  return (\n    <>\n      {jsx_content}\n    </>\n  );'
                content = re.sub(r'return\s*\(\s*<>[^<]*</>', new_return, content, flags=re.DOTALL)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing JSX in {file_path}: {e}")
        return False

def main():
    # Process all TSX files
    patterns = [
        'app/**/*.tsx',
        'components/**/*.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                print(f"Processing: {file_path}")
                
                if fix_final_jsx(file_path):
                    files_fixed += 1
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()