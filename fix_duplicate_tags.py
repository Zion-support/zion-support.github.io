#!/usr/bin/env python3
"""
Script to fix duplicate closing tags in JSX files
"""
import os
import re
import glob

def fix_duplicate_closing_tags(content):
    """Fix duplicate closing tags in JSX content"""
    # Fix patterns like: </Link>\n</Link>
    content = re.sub(r'</(\w+)>\s*\n\s*</\1>', r'</\1>', content)
    
    # Fix patterns like: {text}</Link>\n</Link>
    content = re.sub(r'(\{[^}]*\})</(\w+)>\s*\n\s*</\2>', r'\1</\2>', content)
    
    # Fix patterns like: text</Link>\n</Link>
    content = re.sub(r'([^<>\s]+)</(\w+)>\s*\n\s*</\2>', r'\1</\2>', content)
    
    # Fix patterns like: </script>\n</script>
    content = re.sub(r'</script>\s*\n\s*</script>', r'</script>', content)
    
    # Fix patterns like: </p>\n</p>
    content = re.sub(r'</p>\s*\n\s*</p>', r'</p>', content)
    
    return content

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix duplicate closing tags
        content = fix_duplicate_closing_tags(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_file(file_path):
                    files_fixed += 1
                    print(f"Fixed: {file_path}")
    
    print(f"\nFixed {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()