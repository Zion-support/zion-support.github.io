#!/usr/bin/env python3
"""
Simple script to fix the most common syntax errors
"""
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed class declarations
        content = re.sub(r'class\s+(\w+)\s+extends\s+Component<[^>]+>\s*/>', r'class \1 extends Component<\2>', content)
        
        # Fix malformed state declarations
        content = re.sub(r'public\s+state:\s*const\s+(\w+)\s*=\s*\{,\s*', r'public state: \1 = {\n    ', content)
        
        # Fix malformed JSX attributes with double braces
        content = re.sub(r'style=\{\{\s*([^}]+)\s*\}\}', r'style={{\1}}', content)
        
        # Fix malformed className attributes - add spaces between concatenated classes
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([A-Z])', r'className="\1\2 \3', content)
        
        # Fix malformed JSX closing tags
        content = re.sub(r'<(\w+)\s*/>', r'</\1>', content)
        
        # Fix missing spaces in style values
        content = re.sub(r'(\w+):\s*\'([^\']*?)([a-zA-Z])([a-zA-Z])', r'\1: \'\2\3 \4', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Focus on the most problematic files first
    target_files = [
        'app/components/EnhancedSEOHead.tsx',
        'app/components/ErrorBoundary.tsx',
        'app/components/LoadingStates.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for file_path in target_files:
        if os.path.exists(file_path):
            files_processed += 1
            if fix_syntax_errors(file_path):
                files_fixed += 1
                print(f"Fixed syntax errors in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()