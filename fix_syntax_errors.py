#!/usr/bin/env python3
"""
Fix syntax errors in React/JSX files
"""

import os
import re

def fix_jsx_syntax(file_path):
    """Fix common JSX syntax errors"""
    if not os.path.exists(file_path):
        return False
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix malformed closing tags like </p>p>
        content = re.sub(r'</p>p>', '</p>', content)
        content = re.sub(r'</h1>h1>', '</h1>', content)
        content = re.sub(r'</h2>h2>', '</h2>', content)
        content = re.sub(r'</h3>h3>', '</h3>', content)
        content = re.sub(r'</div>div>', '</div>', content)
        
        # Fix malformed opening tags like <p>p>
        content = re.sub(r'<p>p>', '<p>', content)
        content = re.sub(r'<h1>h1>', '<h1>', content)
        content = re.sub(r'<h2>h2>', '<h2>', content)
        content = re.sub(r'<h3>h3>', '<h3>', content)
        content = re.sub(r'<div>div>', '<div>', content)
        
        # Fix missing closing tags in JSX expressions
        content = re.sub(r'\{features\.map\(\(feature, index\) => \(</div>', '{features.map((feature, index) => (', content)
        
        # Fix malformed JSX expressions
        content = re.sub(r'<feature\.icon className="([^"]*)" />', r'<feature.icon className="\1" />', content)
        
        # Write fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function"""
    print("🔧 Fixing JSX syntax errors...")
    
    # Files with known syntax errors
    files_to_fix = [
        'app/ai-analytics/page.tsx',
        'app/layout.tsx',
        'app/page.tsx'
    ]
    
    for file_path in files_to_fix:
        if fix_jsx_syntax(file_path):
            print(f"✅ Fixed: {file_path}")
        else:
            print(f"❌ Failed: {file_path}")

if __name__ == "__main__":
    main()