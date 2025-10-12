#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts and syntax errors
"""
import os
import re
import glob

def fix_merge_conflicts_comprehensive(file_path):
    """Fix merge conflicts in a single file comprehensively"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content and '=======' not in content and '>>>>>>> origin/main' not in content:
            return False
        
        # More comprehensive merge conflict resolution
        # Remove all merge conflict markers and keep only the HEAD content
        lines = content.split('\n')
        new_lines = []
        i = 0
        in_conflict = False
        
        while i < len(lines):
            line = lines[i]
            
            # Start of conflict
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                i += 1
                continue
            
            # Middle of conflict (skip this content)
            if line.strip() == '=======':
                i += 1
                # Skip until we find the end marker
                while i < len(lines) and not lines[i].strip().startswith('>>>>>>>'):
                    i += 1
                if i < len(lines):
                    i += 1  # Skip the >>>>>>> line
                in_conflict = False
                continue
            
            # End of conflict
            if line.strip().startswith('>>>>>>>'):
                in_conflict = False
                i += 1
                continue
            
            # If we're not in a conflict, keep the line
            if not in_conflict:
                new_lines.append(line)
            
            i += 1
        
        # Write the cleaned content back
        new_content = '\n'.join(new_lines)
        
        # Additional cleanup for common syntax issues
        # Fix broken JSX expressions
        new_content = re.sub(r'<(\w+)\s*>\s*<\s*/\1\s*>\s*<(\w+)', r'<\1></\1><\2', new_content)
        
        # Fix broken JSX closing tags
        new_content = re.sub(r'<\s*/\s*(\w+)\s*>\s*<\s*/\s*(\w+)\s*>', r'</\1></\2>', new_content)
        
        # Fix broken JSX attributes
        new_content = re.sub(r'(\w+)\s*=\s*{\s*([^}]+)\s*}\s*(\w+)', r'\1={\2} \3', new_content)
        
        # Fix broken JSX expressions with missing closing braces
        new_content = re.sub(r'{\s*([^}]*)\s*$', r'{\1}', new_content, flags=re.MULTILINE)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_specific_files():
    """Fix specific problematic files that need special handling"""
    problematic_files = [
        'App.tsx',
        'app/App.tsx',
        'app/5g-data-analytics/page.tsx',
        'app/5g-edge-computing/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/5g-solutions/page.tsx',
        'app/5g-implementation/page.tsx'
    ]
    
    for file_path in problematic_files:
        if os.path.exists(file_path):
            print(f"Fixing specific file: {file_path}")
            fix_merge_conflicts_comprehensive(file_path)

def main():
    """Main function to process all files"""
    # Fix specific problematic files first
    fix_specific_files()
    
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.ts',
        '**/*.tsx', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            if fix_merge_conflicts_comprehensive(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()