#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts_aggressive(file_path):
    """Fix merge conflicts by removing all conflict markers and keeping content"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove all merge conflict markers and their content
        # This is more aggressive - it removes the entire conflict block
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                skip_until_end = True
                continue
            elif line.strip().startswith('======='):
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # List of files with known conflicts
    files_with_conflicts = [
        'app/ai-content-management/page.tsx',
        'app/it-training/page.tsx',
        'app/specialized-services/page.tsx',
        'app/ai-sentiment-analyzer/page.tsx',
        'app/mobile-development/page.tsx',
        'app/database-services/page.tsx',
        'app/gdpr/page.tsx',
        'app/ai-telepathic-interface/page.tsx',
        'app/ai-email-automation/page.tsx',
        'app/ai-smart-calendar/page.tsx',
        'app/press/page.tsx',
        'app/landing-page-builder/page.tsx',
        'app/iot-development/page.tsx',
        'app/ai-transportation/page.tsx',
        'app/ai-workflow-automation/page.tsx',
        'app/contact/page.tsx',
        'app/cybersecurity-solutions/page.tsx',
        'app/ai-data-analytics-pro/page.tsx',
        'app/ai-powered-email-analyzer/page.tsx',
        'app/services/page.tsx',
        'app/cloud-infrastructure/page.tsx'
    ]
    
    files_fixed = 0
    
    for file_path in files_with_conflicts:
        if os.path.exists(file_path):
            if fix_merge_conflicts_aggressive(file_path):
                files_fixed += 1
    
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()