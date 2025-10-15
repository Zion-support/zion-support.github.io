#!/usr/bin/env python3
import os
import re
import glob

def fix_5g_page_v2(file_path):
    """Fix 5G page files with proper JSX structure"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix the import statement
    content = content.replace("import React from \\'react\\';", "import React from 'react';")
    
    # Fix the main div className and structure
    content = re.sub(r'<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />', 
                    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">', content)
    
    # Fix the content div className and structure
    content = re.sub(r'<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center" />', 
                    '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">', content)
    
    # Fix the closing structure - ensure proper closing tags
    content = re.sub(r'</Link>\s*</div>\s*</div>', 
                    '        </Link>\n      </div>\n    </div>', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed: {file_path}")

def main():
    # Find all 5G page files
    pattern = "/workspace/app/5g-*/page.tsx"
    files = glob.glob(pattern)
    
    for file_path in files:
        if os.path.exists(file_path):
            fix_5g_page_v2(file_path)
        else:
            print(f"File not found: {file_path}")

if __name__ == "__main__":
    main()