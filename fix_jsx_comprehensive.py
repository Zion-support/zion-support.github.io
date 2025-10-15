#!/usr/bin/env python3
"""
Comprehensive JSX fix script to handle all remaining issues:
1. Fix unclosed JSX fragments
2. Fix malformed self-closing tags
3. Fix missing closing tags
4. Fix malformed className attributes
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_fragments_comprehensive(content):
    """Fix JSX fragment issues comprehensively"""
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
            
            # If we didn't find a closing tag, add one at the end
            if open_fragments > 0:
                result.append(line)
                result.extend(fragment_content)
                # Find the last meaningful line and add closing fragment
                last_meaningful = len(result) - 1
                while last_meaningful >= 0 and (not result[last_meaningful].strip() or result[last_meaningful].strip().startswith('//')):
                    last_meaningful -= 1
                
                if last_meaningful >= 0:
                    result.insert(last_meaningful + 1, '    </>')
                else:
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

def fix_malformed_self_closing_tags(content):
    """Fix malformed self-closing tags"""
    # Fix tags like <h1 />text</h1> to <h1>text</h1>
    content = re.sub(r'<(\w+)([^>]*?)\s*/>([^<]+)</\1>', r'<\1\2>\3</\1>', content)
    
    # Fix tags like <p />text</p> to <p>text</p>
    content = re.sub(r'<(\w+)([^>]*?)\s*/>([^<]+)</\1>', r'<\1\2>\3</\1>', content)
    
    # Fix tags like <div />text</div> to <div>text</div>
    content = re.sub(r'<(\w+)([^>]*?)\s*/>([^<]+)</\1>', r'<\1\2>\3</\1>', content)
    
    return content

def fix_classname_attributes_comprehensive(content):
    """Fix className attributes comprehensively"""
    # Fix className with missing spaces
    content = re.sub(r'className="([^"]*?)(\d+)([^"]*?)"', r'className="\1\2\3"', content)
    
    # Fix className with missing quotes
    content = re.sub(r'className=([^"\s][^>\s]*)', r'className="\1"', content)
    
    # Fix className with missing spaces before pt-20
    content = re.sub(r'className="([^"]*?)\s+pt-20"', r'className="\1 pt-20"', content)
    
    # Fix className with missing spaces before mb-6
    content = re.sub(r'className="([^"]*?)\s+mb-6"', r'className="\1 mb-6"', content)
    
    # Fix className with missing spaces before mb-8
    content = re.sub(r'className="([^"]*?)\s+mb-8"', r'className="\1 mb-8"', content)
    
    # Fix className with missing spaces before w-fit
    content = re.sub(r'className="([^"]*?)\s+w-fit"', r'className="\1 w-fit"', content)
    
    return content

def fix_helmet_components_comprehensive(content):
    """Fix Helmet components comprehensively"""
    # Fix duplicate Helmet tags
    content = re.sub(r'<Helmet>\s*<title>([^<]*)</title>\s*</Helmet>\s*<title>([^<]*)</title>\s*<meta[^>]*>\s*</Helmet>', 
                    r'<Helmet>\n        <title>\2</title>\n        <meta name="description" content="\3" />\n      </Helmet>', content)
    
    # Fix malformed title tags
    content = re.sub(r'<title />([^<]*)</title>', r'<title>\1</title>', content)
    
    # Fix Helmet with missing content
    content = re.sub(r'<Helmet>\s*<title>Page Title</title>\s*</Helmet>', 
                    r'<Helmet>\n        <title>5G Data Analytics - Zion Tech Group</title>\n        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />\n      </Helmet>', content)
    
    return content

def fix_missing_closing_tags_comprehensive(content):
    """Fix missing closing tags comprehensively"""
    lines = content.split('\n')
    result = []
    tag_stack = []
    
    for line in lines:
        # Track opening tags
        opening_tags = re.findall(r'<(\w+)(?:\s[^>]*)?(?<!/)>', line)
        for tag in opening_tags:
            if tag not in ['Helmet', 'title', 'meta', 'link', 'img', 'br', 'hr']:  # Self-closing tags
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

def fix_jsx_structure_comprehensive(content):
    """Fix JSX structure comprehensively"""
    # Fix unclosed JSX fragments
    content = fix_jsx_fragments_comprehensive(content)
    
    # Fix malformed self-closing tags
    content = fix_malformed_self_closing_tags(content)
    
    # Fix className attributes
    content = fix_classname_attributes_comprehensive(content)
    
    # Fix Helmet components
    content = fix_helmet_components_comprehensive(content)
    
    # Fix missing closing tags
    content = fix_missing_closing_tags_comprehensive(content)
    
    return content

def process_file(file_path):
    """Process a single file to fix JSX issues comprehensively"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply comprehensive fixes
        content = fix_jsx_structure_comprehensive(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX comprehensively in: {file_path}")
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
    print(f"Fixed JSX comprehensively in {files_fixed} files")

if __name__ == "__main__":
    main()