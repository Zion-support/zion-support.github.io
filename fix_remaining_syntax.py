#!/usr/bin/env python3

import os
import re
import glob

def fix_remaining_syntax():
    print("🔧 Fixing remaining syntax issues...")
    
    # Find all JavaScript and TypeScript files
    file_patterns = [
        'src/**/*.js',
        'src/**/*.jsx', 
        'src/**/*.ts',
        'src/**/*.tsx'
    ]
    
    files_to_fix = []
    for pattern in file_patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    for file_path in files_to_fix:
        fix_specific_issues(file_path)
    
    print("✅ Remaining syntax fixes completed!")

def fix_specific_issues(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix specific patterns that are causing build failures
        
        # 1. Fix mixed comma/semicolon in object properties
        # Pattern: property; (semicolon) followed by property:
        content = re.sub(r'(\w+\s*:\s*[^,;]+);(\s*\w+\s*:)', r'\1,\2', content)
        
        # 2. Fix trailing semicolon after comma in objects
        # Pattern: property,; -> property,
        content = re.sub(r',;', ',', content)
        
        # 3. Fix semicolon in object shorthand
        # Pattern: { prop; } -> { prop, }
        content = re.sub(r'(\{\s*\w+);(\s*\w+)', r'\1,\2', content)
        
        # 4. Fix useState with comma instead of semicolon
        content = re.sub(r'(useState<[^>]*>\([^)]*\)),(\s*$)', r'\1;\2', content, flags=re.MULTILINE)
        
        # 5. Fix interface properties with mixed separators
        content = re.sub(r'(interface\s+\w+\s*{[^}]*?)(\w+\s*:\s*[^,;}]+),(\s*(\w+\s*:\s*[^,;}]+);)', r'\1\2,\3', content, flags=re.DOTALL)
        
        # 6. Fix object properties with semicolon instead of comma
        # Look for patterns like: prop: value; nextProp: value
        lines = content.split('\n')
        in_object = False
        brace_count = 0
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            
            # Count braces to detect if we're in an object
            brace_count += line.count('{') - line.count('}')
            
            # If we're in an object context and find a semicolon followed by a property
            if brace_count > 0 and ';' in line and ':' in line:
                # Check if this looks like an object property with wrong separator
                if re.search(r'\w+\s*:\s*[^;]+;\s*$', stripped) and i + 1 < len(lines):
                    next_line = lines[i + 1].strip()
                    if re.search(r'^\w+\s*:', next_line) and not next_line.startswith('//'):
                        lines[i] = line.replace(';', ',')
        
        content = '\n'.join(lines)
        
        # 7. Fix specific useState patterns
        content = re.sub(r'(const\s+\[[^\]]+\]\s*=\s*useState[^;]+),(\s*$)', r'\1;\2', content, flags=re.MULTILINE)
        
        # 8. Fix setSettings patterns with comma
        content = re.sub(r'(setSettings\([^)]+\)),(\s*$)', r'\1;\2', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed remaining syntax in: {file_path}")
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")

if __name__ == "__main__":
    fix_remaining_syntax()