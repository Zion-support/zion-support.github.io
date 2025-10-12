#!/usr/bin/env python3
"""
Script to cleanup syntax errors caused by previous fixes.
"""

import os
import re
import glob

def cleanup_syntax_errors(file_path):
    """Cleanup syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove extra closing parentheses at end of lines
        content = re.sub(r'\)\s*$', '', content, flags=re.MULTILINE)
        
        # Remove extra commas at end of lines
        content = re.sub(r',\s*$', '', content, flags=re.MULTILINE)
        
        # Fix double closing tags
        content = re.sub(r'</div></div>', '</div>', content)
        content = re.sub(r'</section></section>', '</section>', content)
        content = re.sub(r'</main></main>', '</main>', content)
        content = re.sub(r'</article></article>', '</article>', content)
        content = re.sub(r'</header></header>', '</header>', content)
        content = re.sub(r'</footer></footer>', '</footer>', content)
        content = re.sub(r'</nav></nav>', '</nav>', content)
        content = re.sub(r'</aside></aside>', '</aside>', content)
        
        # Fix JSX fragment issues
        content = re.sub(r'<></>', '<>', content)
        
        # Fix object literal syntax
        content = re.sub(r'(\w+):\s*(\w+),\s*$', r'\1: \2', content, flags=re.MULTILINE)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned up syntax errors in: {file_path}")
            return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to cleanup syntax errors."""
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
            # Skip .original files
            if '.original' in file_path:
                continue
                
            files_processed += 1
            if cleanup_syntax_errors(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Cleaned up syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()