#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining issues in the codebase
"""
import os
import re
import glob

def fix_file_issues(file_path):
    """Fix common issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix react-router-dom imports
        content = re.sub(r"import { Link } from 'react-router-dom';", "import Link from 'next/link';", content)
        content = re.sub(r"import { Link, useNavigate } from 'react-router-dom';", "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';", content)
        
        # Fix component names with hyphens
        content = re.sub(r'const ([A-Za-z]+)-([A-Za-z]+)Page:', r'const \1\2Page:', content)
        content = re.sub(r'export default ([A-Za-z]+)-([A-Za-z]+)Page;', r'export default \1\2Page;', content)
        
        # Remove remaining merge conflict markers
        content = re.sub(r' cursor/[a-zA-Z0-9-]+', '', content)
        content = re.sub(r'=======.*?>>>>>>>.*?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?=======', '', content, flags=re.DOTALL)
        
        # Add 'use client' directive if file uses React hooks and doesn't have it
        if ('useState' in content or 'useEffect' in content or 'useRouter' in content) and "'use client';" not in content:
            content = "'use client';\n" + content
        
        # Fix missing useState import
        if 'useState' in content and 'useState' not in content.split('\n')[0:5]:
            content = re.sub(r"import React from 'react';", "import React, { useState } from 'react';", content)
            content = re.sub(r"import React, { memo } from 'react';", "import React, { memo, useState } from 'react';", content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed issues in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all issues"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_file_issues(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed issues in {files_fixed} files")

if __name__ == "__main__":
    main()