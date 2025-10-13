#!/usr/bin/env python3
"""
Script to resolve merge conflicts by choosing the most complete version
"""
import os
import re
import sys

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a file by choosing the most complete version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '            return False
        
        print(f"Resolving merge conflicts in: {file_path}")
        
        # Split by merge conflict markers
        parts = re.split(r'        
        if len(parts) < 3:
            # Try alternative pattern for nested conflicts
            parts = re.split(r'        
        if len(parts) < 3:
            print(f"Could not parse merge conflicts in {file_path}")
            return False
        
        # Choose the version with more content (usually the more complete one)
        resolved_content = ""
        for i in range(0, len(parts), 2):
            if i + 1 < len(parts):
                # Compare the two versions
                version1 = parts[i].strip()
                version2 = parts[i + 1].strip()
                
                # Choose the longer/more complete version
                if len(version2) > len(version1):
                    resolved_content += version2
                else:
                    resolved_content += version1
            else:
                resolved_content += parts[i]
        
        # Clean up any remaining conflict markers
        resolved_content = re.sub(r'        resolved_content = re.sub(r'.*?        
        # Write the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Successfully resolved merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    # Files with merge conflicts
    files_to_fix = [
        '/workspace/app/types/next.d.ts',
        '/workspace/app/ai-content-writer/page.tsx',
        '/workspace/app/ai-api-management/page.tsx',
        '/workspace/app/consultation/page.tsx',
        '/workspace/app/case-studies/page.tsx',
        '/workspace/app/careers/page.tsx',
        '/workspace/app/ai-api-manager/page.tsx',
        '/workspace/app/cloud-services/page.tsx',
        '/workspace/app/utils/accessibilityEnhancer.ts',
        '/workspace/app/blog/page.tsx'
    ]
    
    resolved_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if resolve_merge_conflicts(file_path):
                resolved_count += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"Resolved merge conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()