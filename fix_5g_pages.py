#!/usr/bin/env python3
import os
import re
import glob

def fix_5g_page(file_path):
    """Fix common issues in 5G page files"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix the import statement
    content = content.replace("import React from \\'react\\';", "import React from 'react';")
    
    # Fix the main div className
    content = re.sub(r'className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900pt-20"', 
                    'className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"', content)
    
    # Fix Helmet structure
    content = re.sub(r'<Helmet />\s*<title>([^<]+)</title>\s*<meta name="description" content="([^"]+)" />\s*</Helmet>', 
                    r'<Helmet>\n        <title>\1</title>\n        <meta name="description" content="\2" />\n      </Helmet>', content)
    
    # Fix the content div className
    content = re.sub(r'className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16text-center"', 
                    'className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"', content)
    
    # Fix h1 className
    content = re.sub(r'className="text-4xl font-bold text-whitemb-6"', 
                    'className="text-4xl font-bold text-white mb-6"', content)
    
    # Fix p className
    content = re.sub(r'className="text-lg text-gray-300mb-8"', 
                    'className="text-lg text-gray-300 mb-8"', content)
    
    # Fix Link className and structure
    content = re.sub(r'className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-autow-fit" />', 
                    'className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"\n        >', content)
    
    # Fix ArrowRight className
    content = re.sub(r'className="w-5 h-5ml-2"', 
                    'className="w-5 h-5 ml-2"', content)
    
    # Fix the closing structure
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
            fix_5g_page(file_path)
        else:
            print(f"File not found: {file_path}")

if __name__ == "__main__":
    main()