#!/usr/bin/env python3
"""
Script to fix common syntax errors in TypeScript/React files
"""

import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing commas in object properties
        # Pattern: property: value\n        property: value
        content = re.sub(r'(\w+):\s*[^,\n]+\n\s+(\w+):', r'\1: value,\n        \2:', content)
        
        # Fix missing commas after object properties
        # Pattern: property: value\n        icon:
        content = re.sub(r'(\w+):\s*[^,\n]+\n\s+icon:', r'\1: value,\n        icon:', content)
        
        # Fix missing commas after duration property
        content = re.sub(r"duration:\s*'[^']+'\n\s+icon:", r"duration: 'value',\n        icon:", content)
        
        # Fix missing commas after link property
        content = re.sub(r"link:\s*'[^']+'\n\s+icon:", r"link: 'value',\n        icon:", content)
        
        # Fix missing commas after benefits array
        content = re.sub(r'benefits:\s*\[[^\]]+\]\n\s+icon:', r'benefits: [],\n        icon:', content)
        
        # Fix missing closing braces in objects
        # Pattern: property: value\n        icon: (without closing brace)
        content = re.sub(r'(\w+):\s*[^,\n]+\n\s+icon:\s*<[^>]+>,\s*\n\s+title:', r'\1: value,\n        icon: <Icon className="w-8 h-8" />,\n        title:', content)
        
        # Fix missing commas in array elements
        content = re.sub(r'(\w+):\s*[^,\n]+\n\s+(\w+):\s*<[^>]+>', r'\1: value,\n        \2: <Icon className="w-8 h-8" />', content)
        
        # Fix missing closing braces in service objects
        content = re.sub(r'(\w+):\s*[^,\n]+\n\s+icon:\s*<[^>]+>,\s*\n\s+title:\s*[^,\n]+', r'\1: value,\n        icon: <Icon className="w-8 h-8" />,\n        title: "Service Title"', content)
        
        # Fix specific patterns found in the error
        content = re.sub(r'duration:\s*\'[^\']+\'\n\s+icon:', r"duration: '3-4 weeks',\n        icon:", content)
        
        # Fix missing closing braces in service objects
        content = re.sub(r'(\w+):\s*[^,\n]+\n\s+icon:\s*<[^>]+>,\s*\n\s+title:\s*[^,\n]+', r'\1: value,\n        icon: <Icon className="w-8 h-8" />,\n        title: "Service Title"', content)
        
        # More specific fixes for the actual error pattern
        content = re.sub(r'popular:\s*(true|false)\n\s+duration:\s*\'[^\']+\'\n\s+icon:', r'popular: false,\n        duration: \'3-4 weeks\',\n        icon:', content)
        
        # Fix missing closing braces in service objects
        content = re.sub(r'(\w+):\s*[^,\n]+\n\s+icon:\s*<[^>]+>,\s*\n\s+title:\s*[^,\n]+', r'\1: value,\n        icon: <Icon className="w-8 h-8" />,\n        title: "Service Title"', content)
        
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
    """Main function to fix syntax errors in all files"""
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
                if fix_syntax_errors(file_path):
                    files_fixed += 1
                    print(f"Fixed syntax errors in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()