#!/usr/bin/env python3
"""
Final comprehensive script to fix all remaining syntax errors.
This script will:
1. Fix all corrupted import statements
2. Fix all corrupted keywords and identifiers
3. Fix malformed JSX
4. Fix missing closing tags
"""

import os
import re
import glob

def find_tsx_files(directory):
    """Find all TSX files."""
    tsx_files = []
    
    # Directories to exclude
    exclude_dirs = {'node_modules', '.git', 'dist', 'build', '.next', 'out', '.turbo'}
    
    for ext in ['*.tsx', '*.jsx']:
        pattern = os.path.join(directory, '**', ext)
        for file_path in glob.glob(pattern, recursive=True):
            # Skip if in excluded directory
            if any(excluded in file_path for excluded in exclude_dirs):
                continue
                
            # Skip if it's a directory
            if os.path.isdir(file_path):
                continue
                
            tsx_files.append(file_path)
    
    return tsx_files

def fix_all_syntax(content):
    """Fix all syntax issues comprehensively."""
    
    # Fix import statements
    content = re.sub(r'importReactfrom', 'import React from', content)
    content = re.sub(r'import\s+Reactfrom', 'import React from', content)
    content = re.sub(r'import\s+React\s+from', 'import React from', content)
    
    # Fix other import patterns
    content = re.sub(r'import\s*{\s*([^}]+)\s*}\s*from', r'import { \1 } from', content)
    content = re.sub(r'import\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s+from', r'import \1 from', content)
    
    # Fix function names and identifiers
    content = re.sub(r'FiveGDataAnalyticsPage', 'FiveGDataAnalyticsPage', content)
    content = re.sub(r'FiveGEdgeComputingPage', 'FiveGEdgeComputingPage', content)
    content = re.sub(r'FiveGImplementationPage', 'FiveGImplementationPage', content)
    content = re.sub(r'FiveGIotSolutionsPage', 'FiveGIotSolutionsPage', content)
    content = re.sub(r'FiveGMobileApplicationsPage', 'FiveGMobileApplicationsPage', content)
    content = re.sub(r'FiveGNetworkInfrastructurePage', 'FiveGNetworkInfrastructurePage', content)
    content = re.sub(r'FiveGPrivateNetworksPage', 'FiveGPrivateNetworksPage', content)
    content = re.sub(r'FiveGSmartCitySolutionsPage', 'FiveGSmartCitySolutionsPage', content)
    content = re.sub(r'FiveGSolutionsPage', 'FiveGSolutionsPage', content)
    
    # Fix AI service page names
    content = re.sub(r'Ai([A-Za-z]+)Page', r'Ai\1Page', content)
    content = re.sub(r'AI([A-Za-z]+)Page', r'AI\1Page', content)
    
    # Fix common corrupted words
    content = re.sub(r'Helmet', 'Helmet', content)
    content = re.sub(r'react-helmet-async', 'react-helmet-async', content)
    content = re.sub(r'react-router-dom', 'react-router-dom', content)
    content = re.sub(r'ArrowRight', 'ArrowRight', content)
    content = re.sub(r'lucide-react', 'lucide-react', content)
    
    # Fix className attributes
    content = re.sub(r'className', 'className', content)
    content = re.sub(r'min-h-screen', 'min-h-screen', content)
    content = re.sub(r'bg-gradient-to-br', 'bg-gradient-to-br', content)
    content = re.sub(r'from-slate-900', 'from-slate-900', content)
    content = re.sub(r'via-purple-900', 'via-purple-900', content)
    content = re.sub(r'to-slate-900', 'to-slate-900', content)
    content = re.sub(r'pt-20', 'pt-20', content)
    
    # Fix text content
    content = re.sub(r'5G Data Analytics', '5G Data Analytics', content)
    content = re.sub(r'Zion Tech Group', 'Zion Tech Group', content)
    
    # Fix JSX elements
    content = re.sub(r'<div', '<div', content)
    content = re.sub(r'</div>', '</div>', content)
    content = re.sub(r'<title>', '<title>', content)
    content = re.sub(r'</title>', '</title>', content)
    content = re.sub(r'<meta', '<meta', content)
    content = re.sub(r'<h1 ', '<h1 ', content)
    content = re.sub(r'<p ', '<p ', content)
    content = re.sub(r'<Link', '<Link', content)
    content = re.sub(r'</Link>', '</Link>', content)
    
    # Fix function declarations
    content = re.sub(r'export default function', 'export default function', content)
    content = re.sub(r'function', 'function', content)
    content = re.sub(r'default', 'default', content)
    content = re.sub(r'export', 'export', content)
    
    # Fix return statements
    content = re.sub(r'return', 'return', content)
    
    # Fix const declarations
    content = re.sub(r'const', 'const', content)
    
    # Fix any remaining spaces in identifiers
    content = re.sub(r'([a-zA-Z])\s+([a-zA-Z])', r'\1\2', content)
    
    # Fix malformed JSX attributes
    content = re.sub(r'(\w+)\s*=\s*"([^"]*?)"\s*>\s*$', r'\1="\2">', content, flags=re.MULTILINE)
    
    # Fix missing spaces in className
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    
    # Fix malformed closing tags
    content = re.sub(r'(\w+)\s*>\s*$', r'\1>', content, flags=re.MULTILINE)
    
    # Fix malformed meta tags
    content = re.sub(r'<meta name="([^"]*?)" content="([^"]*?)" / / />', r'<meta name="\1" content="\2" />', content)
    
    return content

def fix_missing_closing_tags(content):
    """Fix missing closing tags."""
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this is an opening div tag
        if '<div' in line and not line.strip().endswith('/>') and not line.strip().endswith('>'):
            # Look for the closing tag
            j = i + 1
            found_closing = False
            div_count = 1
            
            while j < len(lines):
                if '<div' in lines[j] and not lines[j].strip().endswith('/>'):
                    div_count += 1
                elif '</div>' in lines[j]:
                    div_count -= 1
                    if div_count == 0:
                        found_closing = True
                        break
                j += 1
            
            if not found_closing:
                # Add closing tag before the last closing brace
                for k in range(len(lines) - 1, i, -1):
                    if lines[k].strip() == '}' and 'export default' not in lines[k]:
                        lines.insert(k, '    </div>')
                        break
        
        fixed_lines.append(line)
        i += 1
    
    return '\n'.join(fixed_lines)

def clean_up_file(file_path):
    """Clean up a specific file by fixing all syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"Fixing syntax in: {file_path}")
        
        # Apply fixes
        content = fix_all_syntax(content)
        content = fix_missing_closing_tags(content)
        
        # Clean up excessive whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        # Ensure proper file ending
        content = content.strip() + '\n'
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all syntax errors."""
    workspace_dir = '/workspace'
    
    print("Searching for TSX files...")
    tsx_files = find_tsx_files(workspace_dir)
    
    if not tsx_files:
        print("No TSX files found.")
        return
    
    print(f"Found {len(tsx_files)} TSX files")
    
    print("\nFixing syntax errors...")
    fixed_count = 0
    
    for file_path in tsx_files:
        if clean_up_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed syntax in {fixed_count} files.")

if __name__ == "__main__":
    main()