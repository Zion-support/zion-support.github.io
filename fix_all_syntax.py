#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing commas in object literals
        content = re.sub(r'(\w+)\s*\n\s*(\w+:)', r'\1,\n  \2', content)
        
        # Fix missing commas before properties
        content = re.sub(r'(\w+)\s*\n\s*(\w+:)', r'\1,\n  \2', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\n\s*(export|import|const|let|var|function|class)', r'\1;\n\2', content)
        
        # Fix object property syntax issues
        content = re.sub(r'(\w+)\s*\n\s*(\w+:)', r'\1,\n  \2', content)
        
        # Fix missing commas in arrays and objects
        content = re.sub(r'(\w+)\s*\n\s*(\w+:)', r'\1,\n  \2', content)
        
        # Fix specific patterns that cause build errors
        content = re.sub(r'(\w+)\s*\n\s*(\w+:)', r'\1,\n  \2', content)
        
        # Fix missing commas before icon properties
        content = re.sub(r'(\w+)\s*\n\s*icon:', r'\1,\n  icon:', content)
        
        # Fix missing commas before title properties
        content = re.sub(r'(\w+)\s*\n\s*title:', r'\1,\n  title:', content)
        
        # Fix missing commas before description properties
        content = re.sub(r'(\w+)\s*\n\s*description:', r'\1,\n  description:', content)
        
        # Fix missing commas before features properties
        content = re.sub(r'(\w+)\s*\n\s*features:', r'\1,\n  features:', content)
        
        # Fix missing commas before pricing properties
        content = re.sub(r'(\w+)\s*\n\s*pricing:', r'\1,\n  pricing:', content)
        
        # Fix missing commas before link properties
        content = re.sub(r'(\w+)\s*\n\s*link:', r'\1,\n  link:', content)
        
        # Fix missing commas before popular properties
        content = re.sub(r'(\w+)\s*\n\s*popular:', r'\1,\n  popular:', content)
        
        # Fix missing commas before duration properties
        content = re.sub(r'(\w+)\s*\n\s*duration:', r'\1,\n  duration:', content)
        
        # Fix specific syntax errors
        content = re.sub(r'(\w+)\s*\n\s*(\w+:)', r'\1,\n  \2', content)
        
        # Fix missing commas in object literals more aggressively
        lines = content.split('\n')
        fixed_lines = []
        for i, line in enumerate(lines):
            fixed_lines.append(line)
            # Check if next line starts with a property and current line doesn't end with comma
            if i < len(lines) - 1:
                next_line = lines[i + 1].strip()
                if (next_line and 
                    next_line.startswith(('icon:', 'title:', 'description:', 'features:', 'pricing:', 'link:', 'popular:', 'duration:')) and
                    not line.strip().endswith(('{', ',', ';')) and
                    line.strip() and
                    not line.strip().startswith(('//', '/*', '*'))):
                    # Add comma to current line
                    fixed_lines[-1] = line.rstrip() + ','
        
        content = '\n'.join(fixed_lines)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_syntax_errors(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()
