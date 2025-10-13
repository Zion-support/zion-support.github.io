#!/usr/bin/env python3
"""
Fix AccessibilityEnhancer.tsx file by removing duplicates and fixing syntax errors
"""
import re

def fix_accessibility_enhancer():
    file_path = 'app/components/AccessibilityEnhancer.tsx'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove duplicate enhanceKeyboardNavigation function
    # Find the first occurrence and keep it, remove the second
    lines = content.split('\n')
    fixed_lines = []
    in_first_function = False
    in_second_function = False
    brace_count = 0
    skip_second = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if this is the start of the second enhanceKeyboardNavigation function
        if 'const enhanceKeyboardNavigation = () => {' in line and in_first_function:
            skip_second = True
            in_second_function = True
            brace_count = 0
        
        if skip_second and in_second_function:
            # Count braces to know when the function ends
            brace_count += line.count('{')
            brace_count -= line.count('}')
            
            if brace_count <= 0 and '};' in line:
                skip_second = False
                in_second_function = False
                i += 1
                continue
        
        if not skip_second:
            fixed_lines.append(line)
            
            # Track if we're in the first function
            if 'const enhanceKeyboardNavigation = () => {' in line and not in_first_function:
                in_first_function = True
            elif in_first_function and '};' in line:
                in_first_function = False
        
        i += 1
    
    # Join the lines back
    fixed_content = '\n'.join(fixed_lines)
    
    # Write the fixed content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print("Fixed AccessibilityEnhancer.tsx")

if __name__ == "__main__":
    fix_accessibility_enhancer()