#!/usr/bin/env python3
import os
import re
import glob

def fix_final_issues(file_path):
    """Fix final syntax issues in React/TypeScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing semicolons in object properties
        content = re.sub(r"description: '([^']+)'$", r"description: '\1',", content, flags=re.MULTILINE)
        
        # Fix missing commas in object properties
        content = re.sub(r"title: '([^']+)'$", r"title: '\1',", content, flags=re.MULTILINE)
        
        # Fix missing commas in icon properties
        content = re.sub(r"icon: <([^>]+) />$", r"icon: <\1 />,", content, flags=re.MULTILINE)
        
        # Fix missing closing brackets in arrays
        if content.count('[') > content.count(']'):
            open_brackets = content.count('[')
            close_brackets = content.count(']')
            missing_brackets = open_brackets - close_brackets
            
            if missing_brackets > 0:
                # Find the last array and add missing closing brackets
                last_array = content.rfind('[')
                if last_array != -1:
                    # Find the end of the file or next major structure
                    end_pos = content.find('\n  return', last_array)
                    if end_pos == -1:
                        end_pos = content.find('\nexport default', last_array)
                    if end_pos == -1:
                        end_pos = len(content)
                    
                    # Add missing closing brackets
                    missing_brackets_str = ']' * missing_brackets
                    content = content[:end_pos] + missing_brackets_str + content[end_pos:]
        
        # Fix missing closing braces in objects
        if content.count('{') > content.count('}'):
            open_braces = content.count('{')
            close_braces = content.count('}')
            missing_braces = open_braces - close_braces
            
            if missing_braces > 0:
                # Find the last object and add missing closing braces
                last_object = content.rfind('{')
                if last_object != -1:
                    # Find the end of the file or next major structure
                    end_pos = content.find('\n  return', last_object)
                    if end_pos == -1:
                        end_pos = content.find('\nexport default', last_object)
                    if end_pos == -1:
                        end_pos = len(content)
                    
                    # Add missing closing braces
                    missing_braces_str = '}' * missing_braces
                    content = content[:end_pos] + missing_braces_str + content[end_pos:]
        
        # Clean up any remaining issues
        content = re.sub(r'\n\n\n+', '\n\n', content)
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed final issues in: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    fixed_count = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_final_issues(file_path):
                fixed_count += 1
    
    print(f"Fixed final issues in {fixed_count} files")

if __name__ == "__main__":
    main()