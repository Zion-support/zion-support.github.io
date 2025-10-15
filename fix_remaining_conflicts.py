#!/usr/bin/env python3
"""
Fix remaining merge conflicts in specific files that are causing build errors.
"""

import os
import re

def fix_file_conflicts(file_path):
    """Fix merge conflicts in a specific file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '<<<<<<< HEAD' not in content and '=======' not in content and '>>>>>>> ' not in content:
            return False
        
        print(f"Fixing conflicts in: {file_path}")
        
        # Remove merge conflict markers and corrupted text
        # Pattern to match merge conflicts with corrupted text
        patterns = [
            r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [a-f0-9]+',
            r'<<<<<<< HEAD.*?>>>>>>> [a-f0-9]+',
            r'ursor/[a-zA-Z0-9-]+',  # Remove cursor branch references
            r'=======.*?>>>>>>> [a-f0-9]+',
        ]
        
        for pattern in patterns:
            content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Clean up any remaining corrupted text
        content = re.sub(r'[a-zA-Z0-9-]+/[a-zA-Z0-9-]+', '', content)
        
        # Remove empty lines that might be left behind
        lines = content.split('\n')
        cleaned_lines = []
        prev_empty = False
        
        for line in lines:
            if line.strip() == '':
                if not prev_empty:
                    cleaned_lines.append(line)
                prev_empty = True
            else:
                cleaned_lines.append(line)
                prev_empty = False
        
        content = '\n'.join(cleaned_lines)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining merge conflicts."""
    print("Fixing remaining merge conflicts...")
    
    # List of files that are known to have issues
    problem_files = [
        './app/5g-solutions/page.tsx',
        './app/ai-powered-devops/page.tsx',
        './app/ai-powered-email-analyzer/page.tsx',
        './app/ai-quantum-computing/page.tsx',
        './app/ai-healthcare-diagnostics/page.tsx',
        './app/ai-automation-platform/page.tsx',
        './app/cloud-services/page.tsx',
        './app/services/page.tsx',
        './app/blog/page.tsx',
        './app/partners/page.tsx',
        './app/press/page.tsx',
        './app/sitemap/page.tsx',
        './app/components/StructuredData.tsx',
        './app/components/EnhancedNavigation.tsx',
        './app/components/LazyWrapper.tsx',
        './app/components/ImageOptimizer.tsx',
        './app/components/ErrorHandler.tsx',
    ]
    
    fixed_count = 0
    for file_path in problem_files:
        if os.path.exists(file_path):
            if fix_file_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed conflicts in {fixed_count} files")
    
    # Also search for any remaining files with conflicts
    remaining_conflicts = []
    for root, dirs, files in os.walk('./app'):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content or 'ursor/' in content:
                            remaining_conflicts.append(file_path)
                except:
                    continue
    
    if remaining_conflicts:
        print(f"Found {len(remaining_conflicts)} files still with conflicts:")
        for file in remaining_conflicts:
            print(f"  - {file}")
            fix_file_conflicts(file)
    else:
        print("✅ All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()