#!/usr/bin/env python3
"""
Final comprehensive fix for all remaining issues
"""
import os
import re
import glob

def fix_duplicate_imports(content):
    """Remove duplicate imports and fix syntax"""
    lines = content.split('\n')
    seen_imports = set()
    fixed_lines = []
    
    for line in lines:
        # Skip duplicate import lines
        if line.strip().startswith('import ') and line.strip() in seen_imports:
            continue
        elif line.strip().startswith('import '):
            seen_imports.add(line.strip())
            fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_syntax_errors(content):
    """Fix remaining syntax errors"""
    # Fix import statements with semicolons
    content = re.sub(r'import\s*\{([^}]+)\}\s*;\s*$', r'import {\1} from \'lucide-react\';', content, flags=re.MULTILINE)
    
    # Fix missing commas in import lists
    content = re.sub(r'(\w+)\s*;\s*$', r'\1,', content, flags=re.MULTILINE)
    
    # Fix trailing commas
    content = re.sub(r',\s*$', '', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_duplicate_imports(content)
        content = fix_syntax_errors(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()