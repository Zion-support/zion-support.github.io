#!/usr/bin/env python3
"""
Fix Next.js App Router compatibility issues in page components.
"""

import os
import re
import glob
from pathlib import Path

def fix_page_file(file_path):
    """Fix a single page file to be compatible with Next.js App Router."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if already fixed or not a problematic file
        if 'import Head from' not in content or 'export const metadata' in content:
            return False
        
        # Extract title and description from Head component
        title_match = re.search(r'<title>([^<]+)</title>', content)
        desc_match = re.search(r'<meta name="description" content="([^"]+)"', content)
        
        title = title_match.group(1) if title_match else 'Zion Tech Group'
        description = desc_match.group(1) if desc_match else 'Professional technology services and solutions.'
        
        # Remove 'use client' directive if present
        content = re.sub(r"'use client'\n", '', content)
        
        # Remove Head import
        content = re.sub(r"import Head from 'next/head'\n", '', content)
        
        # Add metadata import and export
        metadata_import = "import { Metadata } from 'next'\n\n"
        metadata_export = f"""export const metadata: Metadata = {{
  title: '{title}',
  description: '{description}',
  robots: 'index, follow',
  openGraph: {{
    type: 'website',
    title: '{title}',
    description: '{description}',
  }},
}}

"""
        
        # Remove Head component and its content
        content = re.sub(r'<Head>.*?</Head>', '', content, flags=re.DOTALL)
        
        # Add metadata import at the top
        content = metadata_import + content
        
        # Add metadata export after imports
        content = re.sub(r'(import.*?\n)(export default)', r'\1' + metadata_export + r'\2', content)
        
        # Write fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all page files in the app directory."""
    print("Fixing Next.js App Router compatibility issues...")
    
    # Find all page.tsx files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        if fix_page_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} page files.")

if __name__ == "__main__":
    main()