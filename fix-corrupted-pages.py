#!/usr/bin/env python3
import re
import os

def fix_corrupted_file(filepath):
    """Fix files corrupted with spaces in JSX elements and text"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common patterns
        # Remove spaces in JSX opening tags
        content = re.sub(r'<([a-zA-Z]+)\s+([a-zA-Z]+)', r'<\1\2', content)
        content = re.sub(r'<([a-zA-Z]+)\s+([a-zA-Z]+)\s+([a-zA-Z]+)', r'<\1\2\3', content)
        
        # Fix className attributes
        content = re.sub(r'classN\s+a\s+m\s+e', 'className', content)
        content = re.sub(r'className="([^"]*?)\s+([a-zA-Z]+)\s+([a-zA-Z]+)([^"]*?)"', r'className="\1\2\3\4"', content)
        
        # Fix common text content
        content = re.sub(r'←\s+B\s+a\s+c\s+k\s+t\s+o\s+H\s+o\s+m\s+e', '← Back to Home', content)
        content = re.sub(r'B\s+a\s+c\s+k\s+t\s+o\s+H\s+o\s+m\s+e', 'Back to Home', content)
        
        # Fix common element names
        content = re.sub(r'<hea\s+d\s+e\s+r', '<header', content)
        content = re.sub(r'</hea\s+d\s+e\s+r>', '</header>', content)
        content = re.sub(r'<na\s+v', '<nav', content)
        content = re.sub(r'</na\s+v>', '</nav>', content)
        
        # Fix common class names
        content = re.sub(r'm\s+b\s+-\s*(\d+)', r'mb-\1', content)
        content = re.sub(r'p\s+x\s+-\s*(\d+)', r'px-\1', content)
        content = re.sub(r'p\s+y\s+-\s*(\d+)', r'py-\1', content)
        content = re.sub(r'm\s+x\s+-\s*a\s+u\s+t\s+o', 'mx-auto', content)
        content = re.sub(r'ma\s+x\s+-\s*w\s+-\s*(\d+)', r'max-w-\1', content)
        content = re.sub(r't\s+e\s+x\s+t\s+-\s*(\d+)', r'text-\1', content)
        content = re.sub(r'f\s+o\s+n\s+t\s+-\s*(\w+)', r'font-\1', content)
        content = re.sub(r'ho\s+v\s+e\s+r\s*:\s*t\s+e\s+x\s+t\s+-\s*(\w+)', r'hover:text-\1', content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {filepath}")
            return True
        else:
            print(f"No changes needed: {filepath}")
            return False
            
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")
        return False

def main():
    pages_dir = 'pages'
    fixed_count = 0
    
    if os.path.exists(pages_dir):
        for filename in os.listdir(pages_dir):
            if filename.endswith('.tsx') or filename.endswith('.jsx'):
                filepath = os.path.join(pages_dir, filename)
                if fix_corrupted_file(filepath):
                    fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()