#!/usr/bin/env python3
"""
Fix specific syntax issues
"""
import os
import re
import glob

def fix_specific_issues(content):
    """Fix specific syntax issues"""
    # Fix broken import statements
    content = re.sub(r'import \{\s*;\s*', 'import { ', content)
    
    # Fix missing commas in object arrays
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix missing commas in object properties
        if re.match(r'^\s*[a-zA-Z_][a-zA-Z0-9_]*:\s*[\'"][^\'"]*[\'"]$', line.strip()):
            # Check if next line is not a closing brace and doesn't start with comma
            if i + 1 < len(lines):
                next_line = lines[i + 1].strip()
                if next_line and not next_line.startswith('}') and not next_line.startswith(','):
                    # Add comma if missing
                    if not line.strip().endswith(','):
                        line = line.rstrip() + ','
        
        # Fix missing commas in array elements
        if re.match(r'^\s*{[^}]*}\s*$', line.strip()):
            # Check if next line is also an object in an array
            if i + 1 < len(lines):
                next_line = lines[i + 1].strip()
                if re.match(r'^\s*{[^}]*}\s*$', next_line):
                    # Add comma if missing
                    if not line.strip().endswith(','):
                        line = line.rstrip() + ','
        
        # Fix missing commas in string arrays
        if re.match(r'^\s*[\'"][^\'"]*[\'"]\s*$', line.strip()):
            # Check if next line is also a string in an array
            if i + 1 < len(lines):
                next_line = lines[i + 1].strip()
                if re.match(r'^\s*[\'"][^\'"]*[\'"]\s*$', next_line):
                    # Add comma if missing
                    if not line.strip().endswith(','):
                        line = line.rstrip() + ','
        
        # Fix broken className attributes (missing spaces)
        line = re.sub(r'className="([^"]*?)([a-z])([A-Z])', r'className="\1\2 \3', line)
        line = re.sub(r'className="([^"]*?)([a-z])([a-z])([A-Z])', r'className="\1\2\3 \4', line)
        
        # Fix broken JSX structure
        line = re.sub(r'<div className="([^"]+)" />([^<]+)</div>', r'<div className="\1">\2</div>', line)
        line = re.sub(r'<h1 className="([^"]+)" />([^<]+)</h1>', r'<h1 className="\1">\2</h1>', line)
        line = re.sub(r'<p className="([^"]+)" />([^<]+)</p>', r'<p className="\1">\2</p>', line)
        
        # Fix missing semicolons in import statements
        if line.strip().startswith('import ') and not line.strip().endswith(';'):
            line = line.rstrip() + ';'
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_file(file_path):
    """Fix specific syntax issues in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_specific_issues(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all specific syntax issues"""
    patterns = [
        './app/**/*.tsx',
        './app/**/*.ts', 
        './app/**/*.js',
        './app/**/*.jsx',
        './src/**/*.tsx',
        './src/**/*.ts',
        './src/**/*.js', 
        './src/**/*.jsx',
        './components/**/*.tsx',
        './components/**/*.ts',
        './components/**/*.js',
        './components/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file(file_path):
                print(f"Fixed: {file_path}")
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()