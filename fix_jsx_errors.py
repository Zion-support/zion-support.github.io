#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_errors(file_path):
    """Fix JSX syntax errors in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix JSX expressions must have one parent element
        # Wrap multiple top-level elements in a fragment
        lines = content.split('\n')
        in_jsx = False
        jsx_start = -1
        brace_count = 0
        paren_count = 0
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            
            # Skip imports and other non-JSX lines
            if stripped.startswith('import ') or stripped.startswith('export ') or stripped.startswith('const ') or stripped.startswith('function ') or stripped.startswith('interface ') or stripped.startswith('type '):
                continue
            
            # Check if we're in JSX
            if '<' in line and not stripped.startswith('//'):
                if not in_jsx:
                    in_jsx = True
                    jsx_start = i
                
                # Count braces and parentheses
                brace_count += line.count('{') - line.count('}')
                paren_count += line.count('(') - line.count(')')
                
                # If we have a complete JSX block and the next line starts a new element
                if brace_count == 0 and paren_count == 0 and i > jsx_start:
                    # Check if next line starts a new JSX element
                    if i + 1 < len(lines):
                        next_line = lines[i + 1].strip()
                        if next_line.startswith('<') and not next_line.startswith('</'):
                            # We have multiple top-level elements, wrap in fragment
                            # Find the end of the current JSX block
                            end_line = i
                            for j in range(i + 1, len(lines)):
                                if lines[j].strip() and not lines[j].strip().startswith('<'):
                                    end_line = j - 1
                                    break
                            
                            # Wrap in fragment
                            lines[jsx_start] = '<>' + lines[jsx_start]
                            lines[end_line] = lines[end_line] + '</>'
                            break
        
        # Fix unclosed JSX tags
        content = '\n'.join(lines)
        
        # Fix specific patterns
        fixes = [
            # Fix unclosed Helmet tags
            (r'<Helmet>([^<]*)', r'<Helmet>\1</Helmet>'),
            # Fix unclosed BrowserRouter tags
            (r'<BrowserRouter>([^<]*)', r'<BrowserRouter>\1</BrowserRouter>'),
            # Fix unclosed div tags (basic pattern)
            (r'<div([^>]*)>([^<]*)', r'<div\1>\2</div>'),
            # Fix missing semicolons after imports
            (r'import ([^;]+)\n', r'import \1;\n'),
            # Fix missing closing fragments
            (r'<>([^<]*)', r'<>\1</>'),
            # Fix JSX expressions must have one parent element
            (r'return\s+<([^>]+)>', r'return <>\n    <\1>'),
            (r'</([^>]+)>\s*$', r'</\1>\n  </>'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        # Fix specific JSX structure issues
        # Look for multiple top-level elements and wrap them
        if 'return' in content and '<' in content:
            # Find the return statement and its content
            return_match = re.search(r'return\s+([^;]+);?', content, re.DOTALL)
            if return_match:
                return_content = return_match.group(1).strip()
                # Check if there are multiple top-level elements
                elements = re.findall(r'<[^/][^>]*>', return_content)
                if len(elements) > 1:
                    # Wrap in fragment
                    content = content.replace(return_content, f'<>\n    {return_content}\n  </>')
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing JSX in {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
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
                print(f"Processing: {file_path}")
                
                if fix_jsx_errors(file_path):
                    files_fixed += 1
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()