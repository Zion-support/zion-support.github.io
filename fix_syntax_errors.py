#!/usr/bin/env python3
"""
Script to fix syntax errors in TypeScript/JSX files after merge conflict resolution
"""
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no syntax issues
        if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
            print(f"Skipping {file_path} - still has merge conflicts")
            return False
        
        # Fix common syntax errors
        lines = content.split('\n')
        new_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            # Fix malformed JSX in object properties
            if re.match(r'^\s*\{\s*$', line) and i + 1 < len(lines):
                next_line = lines[i + 1]
                if next_line.strip().startswith('<>'):
                    # This is a malformed object property, skip the opening brace
                    i += 1
                    continue
            
            # Fix unclosed JSX tags
            if 'JSX element' in line and 'has no corresponding closing tag' in line:
                # This is a TypeScript error message, skip
                i += 1
                continue
                
            # Fix malformed JSX fragments
            if line.strip() == '<>' and i + 1 < len(lines):
                next_line = lines[i + 1]
                if next_line.strip().startswith('<Helmet>'):
                    # This is a proper JSX fragment, keep it
                    new_lines.append(line)
                else:
                    # This is malformed, skip
                    i += 1
                    continue
            
            # Fix malformed closing tags
            if re.match(r'^\s*\}\s*$', line) and i > 0:
                prev_line = lines[i - 1]
                if prev_line.strip().endswith('</>'):
                    # This is a proper closing, keep it
                    new_lines.append(line)
                else:
                    # This might be malformed, check context
                    i += 1
                    continue
            
            new_lines.append(line)
            i += 1
        
        # Write the cleaned content back
        cleaned_content = '\n'.join(new_lines)
        
        # Additional regex fixes
        # Fix malformed object properties
        cleaned_content = re.sub(r'(\s*)\{\s*\n\s*<>', r'\1<>', cleaned_content)
        
        # Fix malformed closing braces
        cleaned_content = re.sub(r'</>\s*\n\s*\}\s*$', r'</>', cleaned_content, flags=re.MULTILINE)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all syntax errors"""
    # Find all TypeScript/JavaScript files
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
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files with syntax errors")

if __name__ == "__main__":
    main()