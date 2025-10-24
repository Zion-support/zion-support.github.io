#!/usr/bin/env python3
"""
Script to fix JSX structure issues
"""
import os
import re
import glob

def fix_jsx_structure(content):
    """Fix JSX structure issues"""
    # Fix self-closing divs that should contain content
    # Pattern: <div className="..."> followed by content and then </div>
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this is a self-closing div that should contain content
        if re.match(r'^\s*<div className="[^"]+" />$', line):
            # Look ahead to see if there's content that should be inside
            j = i + 1
            content_lines = []
            indent = len(line) - len(line.lstrip())
            
            while j < len(lines):
                next_line = lines[j]
                next_indent = len(next_line) - len(next_line.lstrip())
                
                # If we hit a line with same or less indentation that's not empty, stop
                if next_line.strip() and next_indent <= indent:
                    break
                    
                # If we hit a closing div, stop
                if re.match(r'^\s*</div>$', next_line):
                    break
                    
                content_lines.append(next_line)
                j += 1
            
            # If we found content, fix the structure
            if content_lines:
                # Replace self-closing div with opening div
                fixed_lines.append(line.replace(' />', '>'))
                # Add the content
                fixed_lines.extend(content_lines)
                # Skip the content lines in the main loop
                i = j
            else:
                fixed_lines.append(line)
                i += 1
        else:
            fixed_lines.append(line)
            i += 1
    
    content = '\n'.join(fixed_lines)
    
    # Fix other common JSX issues
    # Fix self-closing elements that should contain text
    content = re.sub(r'<h1 className="([^"]+)" />([^<]+)</h1>', r'<h1 className="\1">\2</h1>', content)
    content = re.sub(r'<h2 className="([^"]+)" />([^<]+)</h2>', r'<h2 className="\1">\2</h2>', content)
    content = re.sub(r'<h3 className="([^"]+)" />([^<]+)</h3>', r'<h3 className="\1">\2</h3>', content)
    content = re.sub(r'<p className="([^"]+)" />([^<]+)</p>', r'<p className="\1">\2</p>', content)
    content = re.sub(r'<span className="([^"]+)" />([^<]+)</span>', r'<span className="\1">\2</span>', content)
    content = re.sub(r'<title />([^<]+)</title>', r'<title>\1</title>', content)
    
    # Fix broken className attributes (missing spaces)
    content = re.sub(r'className="([^"]*?)([a-z])([A-Z])', r'className="\1\2 \3', content)
    content = re.sub(r'className="([^"]*?)([a-z])([a-z])([A-Z])', r'className="\1\2\3 \4', content)
    
    return content

def fix_file(file_path):
    """Fix JSX structure in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_jsx_structure(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all JSX structure issues"""
    patterns = [
        './app/**/*.tsx',
        './app/**/*.ts', 
        './app/**/*.js',
        './app/**/*.jsx',
        './src/**/*.tsx',
        './src/**/*.ts',
        './src/**/*.js', 
        './src/**/*.jsx',
        './components/**/*.tsx',
        './components/**/*.ts',
        './components/**/*.js',
        './components/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file(file_path):
                print(f"Fixed: {file_path}")
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()