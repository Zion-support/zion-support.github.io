#!/usr/bin/env python3
import os
import re
import glob

def fix_class_name_spacing(content):
    """Fix missing spaces in class names"""
    # Fix common patterns
    content = re.sub(r'min-h-screenbg-gradient', 'min-h-screen bg-gradient', content)
    content = re.sub(r'max-w-7xlmx-auto', 'max-w-7xl mx-auto', content)
    content = re.sub(r'text-4xlfont-boldtext-white', 'text-4xl font-bold text-white', content)
    content = re.sub(r'text-lgtext-gray-300mb-8', 'text-lg text-gray-300 mb-8', content)
    content = re.sub(r'bg-gradient-to-rfrom-cyan-500', 'bg-gradient-to-r from-cyan-500', content)
    content = re.sub(r'text-whitepx-8', 'text-white px-8', content)
    content = re.sub(r'w-5h-5', 'w-5 h-5', content)
    content = re.sub(r'py-16text-center', 'py-16 text-center', content)
    content = re.sub(r'text-whitemb-6', 'text-white mb-6', content)
    content = re.sub(r'text-gray-300mb-8', 'text-gray-300 mb-8', content)
    return content

def fix_jsx_structure(content):
    """Fix JSX structure issues"""
    # Fix missing closing div tags
    if 'return (' in content and '<div' in content and '</div>' not in content:
        # Find the last opening div and add closing tag
        lines = content.split('\n')
        for i in range(len(lines) - 1, -1, -1):
            if '<div' in lines[i] and not lines[i].strip().endswith('/>'):
                # Add closing div before the closing parenthesis
                if ');' in lines[i+1] if i+1 < len(lines) else False:
                    lines.insert(i+1, '    </div>')
                    break
        content = '\n'.join(lines)
    
    # Fix broken return statements
    content = re.sub(r'return\s*\(\s*<>\s*<div', 'return (\n    <div', content)
    content = re.sub(r'}\s*</>\s*$', '}\n  );\n}', content)
    
    return content

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_class_name_spacing(content)
        content = fix_jsx_structure(content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Target specific problematic files
    target_files = [
        'app/5g-data-analytics/page.tsx',
        'app/5g-edge-computing/page.tsx',
        'app/5g-implementation/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/5g-solutions/page.tsx',
        'app/about/page.tsx',
        'app/accessibility-page/page.tsx',
        'app/accessibility/page.tsx',
        'app/ai-3d-generation/page.tsx',
        'app/ai-accounting-assistant/page.tsx',
        'app/ai-agricultural-intelligence-pro/page.tsx',
        'app/ai-analytics-dashboard-pro/page.tsx',
        'app/ai-analytics-dashboard/page.tsx',
        'app/ai-analytics/page.tsx'
    ]
    
    fixed_count = 0
    for file_path in target_files:
        if os.path.exists(file_path):
            if fix_file(file_path):
                fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()