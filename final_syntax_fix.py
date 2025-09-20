#!/usr/bin/env python3

import os
import re
import glob

def final_syntax_fix():
    print("🔧 Final comprehensive syntax fix...")
    
    # Find all TypeScript/JavaScript files
    files = glob.glob('src/**/*.{ts,tsx,js,jsx}', recursive=True)
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original = content
            
            # Fix object properties with mixed separators
            # Look for semicolon followed by property in objects
            lines = content.split('\n')
            
            for i, line in enumerate(lines):
                # Check if line has semicolon and next line has property
                if ';' in line and i + 1 < len(lines):
                    next_line = lines[i + 1].strip()
                    current_line = line.strip()
                    
                    # Pattern: property: value; followed by property: value
                    if (re.search(r'\w+\s*:\s*[^;]+;$', current_line) and 
                        re.search(r'^\w+\s*:', next_line) and 
                        not next_line.startswith('//') and
                        not current_line.strip().endswith('});')):
                        lines[i] = line.replace(';', ',')
            
            content = '\n'.join(lines)
            
            # Additional specific fixes
            content = re.sub(r'(setSettings\([^)]+\)),(\s*$)', r'\1;\2', content, flags=re.MULTILINE)
            content = re.sub(r'(\w+\s*:\s*[^,;}]+);(\s*\w+\s*:\s*[^,;}]+)', r'\1,\2', content)
            
            if content != original:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed: {file_path}")
                
        except Exception as e:
            print(f"Error with {file_path}: {e}")

if __name__ == "__main__":
    final_syntax_fix()