#!/usr/bin/env python3
"""
Script to fix JSX structure issues:
1. Fix unclosed JSX fragments
2. Fix malformed Helmet components
3. Fix duplicate closing tags
4. Fix missing closing tags
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_fragments(content):
    """Fix JSX fragment issues"""
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line opens a JSX fragment
        if '<>' in line and '</>' not in line:
            # Find the matching closing tag
            fragment_content = []
            j = i + 1
            open_fragments = 1
            
            while j < len(lines) and open_fragments > 0:
                current_line = lines[j]
                if '<>' in current_line:
                    open_fragments += 1
                if '</>' in current_line:
                    open_fragments -= 1
                
                if open_fragments > 0:
                    fragment_content.append(current_line)
                j += 1
            
            # If we didn't find a closing tag, add one
            if open_fragments > 0:
                result.append(line)
                result.extend(fragment_content)
                result.append('    </>')
                i = j
            else:
                result.append(line)
                result.extend(fragment_content)
                i = j
        else:
            result.append(line)
            i += 1
    
    return '\n'.join(result)

def fix_helmet_components(content):
    """Fix malformed Helmet components"""
    # Fix duplicate Helmet tags
    content = re.sub(r'<Helmet>\s*</Helmet>\s*<title>([^<]*)</title>\s*</Helmet>', 
                    r'<Helmet>\n        <title>\1</title>\n      </Helmet>', content)
    
    # Fix malformed title tags
    content = re.sub(r'<title />([^<]*)</title>', r'<title>\1</title>', content)
    
    # Fix Helmet with missing content
    content = re.sub(r'<Helmet>\s*</Helmet>', 
                    r'<Helmet>\n        <title>Page Title</title>\n      </Helmet>', content)
    
    return content

def fix_duplicate_closing_tags(content):
    """Fix duplicate closing tags"""
    # Fix duplicate div closing tags
    content = re.sub(r'</div>\s*</div>', r'</div>', content)
    
    # Fix duplicate Helmet closing tags
    content = re.sub(r'</Helmet>\s*</Helmet>', r'</Helmet>', content)
    
    return content

def fix_missing_closing_tags(content):
    """Fix missing closing tags"""
    lines = content.split('\n')
    result = []
    tag_stack = []
    
    for line in lines:
        # Track opening tags
        opening_tags = re.findall(r'<(\w+)(?:\s[^>]*)?(?<!/)>', line)
        for tag in opening_tags:
            if tag not in ['Helmet', 'title', 'meta', 'link']:  # Self-closing tags
                tag_stack.append(tag)
        
        # Track closing tags
        closing_tags = re.findall(r'</(\w+)>', line)
        for tag in closing_tags:
            if tag in tag_stack:
                tag_stack.remove(tag)
        
        result.append(line)
    
    # Add missing closing tags at the end
    while tag_stack:
        tag = tag_stack.pop()
        result.append(f'    </{tag}>')
    
    return '\n'.join(result)

def fix_classname_issues(content):
    """Fix className issues"""
    # Fix className with missing spaces
    content = re.sub(r'className="([^"]*?)(\d+)([^"]*?)"', r'className="\1\2\3"', content)
    
    # Fix className with missing quotes
    content = re.sub(r'className=([^"\s][^>\s]*)', r'className="\1"', content)
    
    return content

def process_file(file_path):
    """Process a single file to fix JSX structure"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_helmet_components(content)
        content = fix_duplicate_closing_tags(content)
        content = fix_classname_issues(content)
        content = fix_jsx_fragments(content)
        content = fix_missing_closing_tags(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX structure in: {file_path}")
            return True
        else:
            print(f"No JSX structure changes needed: {file_path}")
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
    print(f"Fixed JSX structure in {files_fixed} files")

if __name__ == "__main__":
    main()