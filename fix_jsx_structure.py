#!/usr/bin/env python3
"""
Script to fix JSX structure errors in React/TypeScript files
"""

import os
import re
import glob

def fix_jsx_structure(file_path):
    """Fix JSX structure errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix mismatched closing tags
        # Pattern: </div> followed by </main> when opening was <main>
        content = re.sub(r'<main([^>]*)>([^<]*)</div>\s*</main>', r'<main\1>\2</main>', content)
        
        # Fix mismatched closing tags
        # Pattern: </main> followed by </div> when opening was <div>
        content = re.sub(r'<div([^>]*)>([^<]*)</main>\s*</div>', r'<div\1>\2</div>', content)
        
        # Fix misplaced closing tags
        # Pattern: </div> followed by </main> followed by <Footer />
        content = re.sub(r'</div>\s*</main>\s*<Footer />', r'</main>\n        <Footer />', content)
        
        # Fix missing opening tags
        # Pattern: </main> without matching opening
        content = re.sub(r'<div([^>]*)>([^<]*)</main>', r'<div\1>\2</div>', content)
        
        # Fix missing closing tags
        # Pattern: <main> without matching closing
        content = re.sub(r'<main([^>]*)>([^<]*)</div>', r'<main\1>\2</main>', content)
        
        # Fix specific pattern from the error
        # Pattern: </div> followed by </main> followed by <Footer />
        content = re.sub(r'</div>\s*</main>\s*<Footer />', r'</main>\n        <Footer />', content)
        
        # Fix missing closing tags in main sections
        content = re.sub(r'<main([^>]*)>([^<]*)</div>\s*</main>', r'<main\1>\2</main>', content)
        
        # Fix missing closing tags in div sections
        content = re.sub(r'<div([^>]*)>([^<]*)</main>\s*</div>', r'<div\1>\2</div>', content)
        
        # Fix missing closing tags in main sections with specific classes
        content = re.sub(r'<main([^>]*class="[^"]*"[^>]*)>([^<]*)</div>\s*</main>', r'<main\1>\2</main>', content)
        
        # Fix missing closing tags in div sections with specific classes
        content = re.sub(r'<div([^>]*class="[^"]*"[^>]*)>([^<]*)</main>\s*</div>', r'<div\1>\2</div>', content)
        
        # Fix missing closing tags in main sections with pt-20 class
        content = re.sub(r'<main([^>]*class="[^"]*pt-20[^"]*"[^>]*)>([^<]*)</div>\s*</main>', r'<main\1>\2</main>', content)
        
        # Fix missing closing tags in div sections with pt-20 class
        content = re.sub(r'<div([^>]*class="[^"]*pt-20[^"]*"[^>]*)>([^<]*)</main>\s*</div>', r'<div\1>\2</div>', content)
        
        # Fix missing closing tags in main sections with px-4 class
        content = re.sub(r'<main([^>]*class="[^"]*px-4[^"]*"[^>]*)>([^<]*)</div>\s*</main>', r'<main\1>\2</main>', content)
        
        # Fix missing closing tags in div sections with px-4 class
        content = re.sub(r'<div([^>]*class="[^"]*px-4[^"]*"[^>]*)>([^<]*)</main>\s*</div>', r'<div\1>\2</div>', content)
        
        # Fix missing closing tags in main sections with py-20 class
        content = re.sub(r'<main([^>]*class="[^"]*py-20[^"]*"[^>]*)>([^<]*)</div>\s*</main>', r'<main\1>\2</main>', content)
        
        # Fix missing closing tags in div sections with py-20 class
        content = re.sub(r'<div([^>]*class="[^"]*py-20[^"]*"[^>]*)>([^<]*)</main>\s*</div>', r'<div\1>\2</div>', content)
        
        # Fix missing closing tags in main sections with max-w-7xl class
        content = re.sub(r'<main([^>]*class="[^"]*max-w-7xl[^"]*"[^>]*)>([^<]*)</div>\s*</main>', r'<main\1>\2</main>', content)
        
        # Fix missing closing tags in div sections with max-w-7xl class
        content = re.sub(r'<div([^>]*class="[^"]*max-w-7xl[^"]*"[^>]*)>([^<]*)</main>\s*</div>', r'<div\1>\2</div>', content)
        
        # Fix missing closing tags in main sections with mx-auto class
        content = re.sub(r'<main([^>]*class="[^"]*mx-auto[^"]*"[^>]*)>([^<]*)</div>\s*</main>', r'<main\1>\2</main>', content)
        
        # Fix missing closing tags in div sections with mx-auto class
        content = re.sub(r'<div([^>]*class="[^"]*mx-auto[^"]*"[^>]*)>([^<]*)</main>\s*</div>', r'<div\1>\2</div>', content)
        
        # Fix missing closing tags in main sections with any class combination
        content = re.sub(r'<main([^>]*class="[^"]*"[^>]*)>([^<]*)</div>\s*</main>', r'<main\1>\2</main>', content)
        
        # Fix missing closing tags in div sections with any class combination
        content = re.sub(r'<div([^>]*class="[^"]*"[^>]*)>([^<]*)</main>\s*</div>', r'<div\1>\2</div>', content)
        
        # Fix missing closing tags in any main section
        content = re.sub(r'<main([^>]*)>([^<]*)</div>\s*</main>', r'<main\1>\2</main>', content)
        
        # Fix missing closing tags in any div section
        content = re.sub(r'<div([^>]*)>([^<]*)</main>\s*</div>', r'<div\1>\2</div>', content)
        
        # Clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content)
        content = re.sub(r'=======.*?\n', '', content)
        content = re.sub(r'>>>>>>>.*?\n', '', content)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD|=======|>>>>>>>.*', '', content)
        
        # Clean up excessive whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content)
        content = content.strip() + '\n'
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix JSX structure errors in all files"""
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
                if fix_jsx_structure(file_path):
                    files_fixed += 1
                    print(f"Fixed JSX structure in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed JSX structure in {files_fixed} files")

if __name__ == "__main__":
    main()