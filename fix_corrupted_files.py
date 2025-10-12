#!/usr/bin/env python3
import os
import re
import glob

def fix_corrupted_file(file_path):
    """Fix common corruption patterns in TSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix invalid characters in import statements
        content = content.replace("import React from \\'react\\';", "import React from 'react';")
        content = content.replace("import { Helmet } from \\'react-helmet-async\\';", "import { Helmet } from 'react-helmet-async';")
        content = content.replace("import { Link } from \\'react-router-dom\\';", "import { Link } from 'react-router-dom';")
        content = content.replace("import { ArrowRight } from \\'lucide-react\\';", "import { ArrowRight } from 'lucide-react';")
        
        # Fix malformed JSX elements
        content = re.sub(r'element="\{<([^"]+)" / \}\}', r'element={<\1 />}', content)
        content = re.sub(r'element="\{<([^"]+)" / \}\}', r'element={<\1 />}', content)
        
        # Fix self-closing div tags that should be opening tags
        content = re.sub(r'<div className="([^"]+)" />', r'<div className="\1">', content)
        
        # Fix malformed className attributes
        content = re.sub(r'className="([^"]+)pt-20"', r'className="\1 pt-20"', content)
        content = re.sub(r'className="([^"]+)text-center"', r'className="\1 text-center"', content)
        content = re.sub(r'className="([^"]+)mb-6"', r'className="\1 mb-6"', content)
        content = re.sub(r'className="([^"]+)mb-8"', r'className="\1 mb-8"', content)
        content = re.sub(r'className="([^"]+)ml-2"', r'className="\1 ml-2"', content)
        content = re.sub(r'className="([^"]+)w-fit"', r'className="\1 w-fit"', content)
        
        # Fix malformed Link elements
        content = re.sub(r'className="([^"]+)" />\s*Contact Us\s*<ArrowRight', r'className="\1">\n          Contact Us\n          <ArrowRight', content)
        
        # Fix malformed closing tags
        content = re.sub(r'</Link>\s*</div>\s*</div>', r'        </Link>\n      </div>\n    </div>', content)
        
        # Fix Helmet structure
        content = re.sub(r'<Helmet />\s*<title>([^<]+)</title>\s*<meta name="description" content="([^"]+)" />\s*</Helmet>', 
                        r'<Helmet>\n        <title>\1</title>\n        <meta name="description" content="\2" />\n      </Helmet>', content)
        
        # Fix any remaining malformed JSX
        content = re.sub(r'<([^>]+) / \>', r'<\1 />', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files in the app directory
    pattern = "/workspace/app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if os.path.exists(file_path):
            if fix_corrupted_file(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files)} total files")

if __name__ == "__main__":
    main()