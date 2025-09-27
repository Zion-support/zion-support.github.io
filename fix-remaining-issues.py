#!/usr/bin/env python3
import re
import os

def fix_remaining_issues(filepath):
    """Fix remaining parsing issues in TSX files"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix meta tags
        content = re.sub(r'<metaname=', '<meta name=', content)
        content = re.sub(r'<metaname=', '<meta name=', content)
        
        # Fix common text content patterns
        fixes = [
            # Common words with spaces
            (r'About U s', 'About Us'),
            (r'Z i o n', 'Zion'),
            (r'Lear n', 'Learn'),
            (r'ab o u t', 'about'),
            (r'miss i o n', 'mission'),
            (r'commitm e n t', 'commitment'),
            (r'deliver i n g', 'delivering'),
            (r'cutt i n g-e d g e', 'cutting-edge'),
            (r'technol o g y', 'technology'),
            (r'soluti o n s', 'solutions'),
            (r'innovat i v e', 'innovative'),
            (r'passion a t e', 'passionate'),
            (r'technologi s t s', 'technologists'),
            (r'dedica t e d', 'dedicated'),
            (r'transform i n g', 'transforming'),
            (r'busines s e s', 'businesses'),
            (r'thro u g h', 'through'),
            (r'innovat i v e', 'innovative'),
            (r'cutt i n g-e d g e', 'cutting-edge'),
            (r'technol o g y', 'technology'),
            
            # Meta tag attributes
            (r'wi d t h=dev i c e-wi d t h', 'width=device-width'),
            (r'init i a l-sc a l e=1', 'initial-scale=1'),
            (r'conten t=', 'content='),
            (r'descript i o n', 'description'),
            (r'viewpor t', 'viewport'),
            
            # Common class patterns
            (r'classN a m e', 'className'),
            (r'm b-\s*(\d+)', r'mb-\1'),
            (r'p x-\s*(\d+)', r'px-\1'),
            (r'p y-\s*(\d+)', r'py-\1'),
            (r'm x-a u t o', 'mx-auto'),
            (r'ma x-w-\s*(\d+)', r'max-w-\1'),
            (r't e x t-\s*(\d+)', r'text-\1'),
            (r'f o n t-\s*(\w+)', r'font-\1'),
            (r'ho v e r:\s*t e x t-\s*(\w+)', r'hover:text-\1'),
            (r'b g-\s*(\w+)', r'bg-\1'),
            (r'b o r d e r-\s*(\w+)', r'border-\1'),
            (r'r o u n d e d-\s*(\w+)', r'rounded-\1'),
            (r's h a d o w-\s*(\w+)', r'shadow-\1'),
            (r'f l e x', 'flex'),
            (r'g r i d', 'grid'),
            (r'w-\s*f u l l', 'w-full'),
            (r'h-\s*f u l l', 'h-full'),
            (r'p-\s*(\d+)', r'p-\1'),
            (r'm-\s*(\d+)', r'm-\1'),
            
            # Function and variable names
            (r'function\s+([A-Z][a-z]+)\s+\(', r'function \1('),
            (r'const\s+([A-Z][a-z]+)\s+=', r'const \1 ='),
            
            # JSX element names
            (r'<hea\s+d\s+e\s+r', '<header'),
            (r'</hea\s+d\s+e\s+r>', '</header>'),
            (r'<na\s+v', '<nav'),
            (r'</na\s+v>', '</nav>'),
            (r'<mai\s+n', '<main'),
            (r'</mai\s+n>', '</main>'),
            (r'<sec\s+t\s+i\s+o\s+n', '<section'),
            (r'</sec\s+t\s+i\s+o\s+n>', '</section>'),
            (r'<arti\s+c\s+l\s+e', '<article'),
            (r'</arti\s+c\s+l\s+e>', '</article>'),
            (r'<asid\s+e', '<aside'),
            (r'</asid\s+e>', '</aside>'),
            (r'<foot\s+e\s+r', '<footer'),
            (r'</foot\s+e\s+r>', '</footer>'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content)
        
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
                if fix_remaining_issues(filepath):
                    fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()