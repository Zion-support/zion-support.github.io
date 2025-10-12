#!/usr/bin/env python3
import os
import re
import glob

def fix_specific_jsx_errors(file_path):
    """Fix specific JSX syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix JSX expressions must have one parent element
        # Look for return statements with multiple top-level elements
        lines = content.split('\n')
        new_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            # Look for return statements
            if 'return' in line and '<' in line:
                # Find the start of JSX
                jsx_start = i
                brace_count = 0
                paren_count = 0
                jsx_lines = [line]
                
                # Collect JSX lines
                j = i + 1
                while j < len(lines):
                    current_line = lines[j]
                    jsx_lines.append(current_line)
                    
                    # Count braces and parentheses
                    brace_count += current_line.count('{') - current_line.count('}')
                    paren_count += current_line.count('(') - current_line.count(')')
                    
                    # Check if we've reached the end of the JSX
                    if (brace_count == 0 and paren_count == 0 and 
                        current_line.strip() and 
                        not current_line.strip().startswith('<') and
                        not current_line.strip().startswith('//')):
                        break
                    j += 1
                
                # Check if we have multiple top-level elements
                jsx_content = '\n'.join(jsx_lines)
                elements = re.findall(r'<[A-Za-z][^>]*>', jsx_content)
                
                if len(elements) > 1:
                    # Wrap in fragment
                    # Find the actual JSX content (after return)
                    return_match = re.search(r'return\s+(.+)', jsx_content, re.DOTALL)
                    if return_match:
                        jsx_body = return_match.group(1).strip()
                        # Remove trailing semicolon if present
                        jsx_body = re.sub(r';$', '', jsx_body)
                        
                        # Wrap in fragment
                        new_jsx = f'return (\n    <>\n        {jsx_body}\n    </>\n);'
                        
                        # Replace the original return statement
                        new_lines.append(new_jsx)
                        i = j
                        continue
            
            new_lines.append(line)
            i += 1
        
        content = '\n'.join(new_lines)
        
        # Additional fixes
        fixes = [
            # Fix unclosed tags
            (r'<Helmet>([^<]*)', r'<Helmet>\1</Helmet>'),
            (r'<BrowserRouter>([^<]*)', r'<BrowserRouter>\1</BrowserRouter>'),
            # Fix missing semicolons
            (r'import ([^;]+)\n', r'import \1;\n'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing JSX in {file_path}: {e}")
        return False

def main():
    # Process specific files that are causing issues
    problem_files = [
        'app/5g-data-analytics/page.tsx',
        'app/5g-edge-computing/page.tsx',
        'app/5g-implementation/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/5g-solutions/page.tsx',
        'app/App.tsx',
        'app/about/page.tsx',
        'app/accessibility-page/page.tsx',
        'app/accessibility/page.tsx',
        'app/advanced-security-suite/page.tsx',
        'app/ai-3d-generation/page.tsx'
    ]
    
    files_fixed = 0
    
    for file_path in problem_files:
        if os.path.exists(file_path):
            print(f"Processing: {file_path}")
            if fix_specific_jsx_errors(file_path):
                files_fixed += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()