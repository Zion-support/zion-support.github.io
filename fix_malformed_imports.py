#!/usr/bin/env python3
"""
Script to fix malformed import statements.
"""

import os
import re
import glob

def fix_malformed_imports(file_path):
    """Fix malformed import statements."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed React imports
        content = re.sub(r"import React from 'react' from 'react'", "import React from 'react'", content)
        content = re.sub(r"import React from 'react', \{([^}]+)\} from 'react'", r"import React, {\1} from 'react'", content)
        
        # Fix other malformed imports
        content = re.sub(r"import React from 'react' from 'react'", "import React from 'react'", content)
        
        # Fix any remaining malformed patterns
        content = re.sub(r"import\s+([^,]+),\s*\{([^}]+)\}\s+from\s+'([^']+)'", r"import \1, {\2} from '\3'", content)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed malformed imports in: {file_path}")
            return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix malformed imports."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip .original files
            if '.original' in file_path:
                continue
                
            files_processed += 1
            if fix_malformed_imports(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed malformed imports in {files_fixed} files")

if __name__ == "__main__":
    main()