#!/usr/bin/env python3
import os
import re
import sys

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the most complete version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in {file_path}")
        
        # Split content by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            print(f"Could not parse merge conflicts in {file_path}")
            return False
        
        # Reconstruct content by choosing the longer/more complete version
        result = parts[0]  # Content before first conflict
        
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                head_version = parts[i].strip()
                other_version = parts[i + 1].strip()
                after_conflict = parts[i + 2]
                
                # Choose the longer version (usually more complete)
                if len(head_version) > len(other_version):
                    result += head_version
                else:
                    result += other_version
                
                result += after_conflict
        
        # Clean up any remaining conflict markers
        result = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', result, flags=re.DOTALL)
        result = re.sub(r'=======.*?>>>>>>> [^\n]+', '', result, flags=re.DOTALL)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(result)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Get list of files with merge conflicts
    files_with_conflicts = [
        '/workspace/app/it-services/page.tsx',
        '/workspace/app/components/AnimatedCounter.tsx',
        '/workspace/app/components/Analytics.tsx',
        '/workspace/app/components/DynamicContentShowcase.tsx',
        '/workspace/app/components/EnhancedAccessibilityEnhancer.tsx',
        '/workspace/app/ai-services/page.tsx',
        '/workspace/app/business-intelligence/page.tsx',
        '/workspace/app/ai-automated-reporting/page.tsx',
        '/workspace/app/micro-saas-services/page.tsx'
    ]
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()