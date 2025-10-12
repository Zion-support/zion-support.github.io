#!/usr/bin/env python3
"""
Script to fix JSX syntax errors:
1. Fix missing closing tags
2. Fix malformed className attributes
3. Fix JSX fragment issues
4. Fix missing parent elements
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_fragments(content):
    """Fix JSX fragment issues"""
    # Fix unclosed JSX fragments
    content = re.sub(r'<>\s*$', '<>', content, flags=re.MULTILINE)
    
    # Ensure proper closing of fragments
    lines = content.split('\n')
    result = []
    open_fragments = 0
    
    for line in lines:
        # Count opening fragments
        open_fragments += line.count('<>')
        open_fragments -= line.count('</>')
        
        # If we have unclosed fragments at the end, close them
        if line.strip() and open_fragments > 0 and not line.strip().endswith('</>'):
            # Check if this is the last meaningful line
            if line.strip() and not line.strip().startswith('//') and not line.strip().startswith('/*'):
                # Add closing fragment if needed
                if not line.strip().endswith('>') or line.strip().endswith('/>'):
                    line = line.rstrip() + '\n  </>'
                open_fragments -= 1
        
        result.append(line)
    
    return '\n'.join(result)

def fix_classname_attributes(content):
    """Fix malformed className attributes"""
    # Fix className with numeric literals
    content = re.sub(r'className="([^"]*?)(\d+)([^"]*?)"', r'className="\1\2\3"', content)
    
    # Fix className with missing quotes
    content = re.sub(r'className=([^"\s][^>\s]*)', r'className="\1"', content)
    
    # Fix className with spaces before pt-20
    content = re.sub(r'className="([^"]*?)\s+pt-20"', r'className="\1 pt-20"', content)
    
    return content

def fix_jsx_parent_elements(content):
    """Fix JSX expressions that need parent elements"""
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line has JSX that needs wrapping
        if ('<' in line and '>' in line and 
            not line.strip().startswith('//') and 
            not line.strip().startswith('/*') and
            not line.strip().startswith('*') and
            not line.strip().startswith('*/')):
            
            # Check if we need to wrap multiple JSX elements
            if i + 1 < len(lines):
                next_line = lines[i + 1]
                if (next_line.strip() and 
                    '<' in next_line and '>' in next_line and
                    not next_line.strip().startswith('//') and
                    not next_line.strip().startswith('/*') and
                    not next_line.strip().startswith('*') and
                    not next_line.strip().startswith('*/')):
                    
                    # Wrap in fragment
                    result.append('    <>')
                    result.append(line)
                    i += 1
                    
                    # Add subsequent JSX lines
                    while (i < len(lines) and 
                           lines[i].strip() and 
                           '<' in lines[i] and '>' in lines[i] and
                           not lines[i].strip().startswith('//') and
                           not lines[i].strip().startswith('/*') and
                           not lines[i].strip().startswith('*') and
                           not lines[i].strip().startswith('*/')):
                        result.append(lines[i])
                        i += 1
                    
                    result.append('    </>')
                    continue
        
        result.append(line)
        i += 1
    
    return '\n'.join(result)

def fix_specific_jsx_errors(content):
    """Fix specific JSX syntax errors"""
    # Fix missing closing tags in Helmet
    content = re.sub(r'<Helmet\s*/>', '<Helmet>\n        <title>Page Title</title>\n      </Helmet>', content)
    
    # Fix malformed div tags
    content = re.sub(r'<div className="([^"]*?)(\d+)([^"]*?)" />', r'<div className="\1\2\3">\n        </div>', content)
    
    # Fix missing closing tags for common elements
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>\s*$', r'<\1\2>\n        </\1>', content, flags=re.MULTILINE)
    
    return content

def fix_import_statements(content):
    """Fix import statement issues"""
    # Fix 'use client' directive placement
    if "'use client';" in content:
        lines = content.split('\n')
        if "'use client';" in lines:
            lines.remove("'use client';")
            lines.insert(0, "'use client';")
        content = '\n'.join(lines)
    
    return content

def process_file(file_path):
    """Process a single file to fix JSX errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_import_statements(content)
        content = fix_classname_attributes(content)
        content = fix_jsx_fragments(content)
        content = fix_jsx_parent_elements(content)
        content = fix_specific_jsx_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX errors in: {file_path}")
            return True
        else:
            print(f"No JSX changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/TSX files"""
    # Get all TypeScript and TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed JSX errors in {files_fixed} files")

if __name__ == "__main__":
    main()