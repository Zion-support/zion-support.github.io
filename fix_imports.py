#!/usr/bin/env python3
"""
Script to fix malformed imports and restore proper syntax.
"""

import os
import re
import glob

def fix_file(file_path):
    """Fix malformed imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed React imports
        content = re.sub(r"import React from '\nimport \{ Helmet \} from 'react-helmet-async';react';", "import React from 'react';\nimport { Helmet } from 'react-helmet-async';", content)
        
        # Fix malformed lucide-react imports with multiple semicolons
        content = re.sub(r"from 'lucide-react';;+", "from 'lucide-react';", content)
        
        # Fix any other malformed imports
        content = re.sub(r"import React from '\n", "import React from 'react';\n", content)
        
        # Fix any remaining malformed import patterns
        content = re.sub(r"import React from 'react';\nimport \{ Helmet \} from 'react-helmet-async';react';", "import React from 'react';\nimport { Helmet } from 'react-helmet-async';", content)
        
        # Fix any broken import statements
        content = re.sub(r"import React from '\nimport \{ Helmet \} from 'react-helmet-async';react';\nimport \{ Helmet \} from 'react-helmet-async';", "import React from 'react';\nimport { Helmet } from 'react-helmet-async';", content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed imports: {file_path}")
            return True
        else:
            print(f"No import fixes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files."""
    # Find all TypeScript/TSX files
    patterns = [
        'src/**/*.tsx',
        'app/**/*.tsx',
        'components/**/*.tsx',
        '**/*.tsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_fix = list(set(files_to_fix))
    
    print(f"Found {len(files_to_fix)} files to check...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files_to_fix)} files checked.")

if __name__ == "__main__":
    main()