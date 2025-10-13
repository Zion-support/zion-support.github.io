#!/usr/bin/env python3
import os

files_to_fix = [
    './app/landing-page-builder/page.tsx',
    './app/ai-mobile-app-builder/page.tsx',
    './app/ai-website-builder/page.tsx',
    './app/zion-ai-survey-builder/page.tsx',
    './app/ai-mobile-builder/page.tsx',
    './app/micro-saas-services/ai-chatbot-builder/page.tsx',
    './app/ai-chatbot-builder/page.tsx'
]

def fix_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all merge conflict markers
        content = content.replace('<<<<<<< HEAD', '')
        content = content.replace('=======', '')
        content = content.replace('>>>>>>> origin/cursor/fix-errors-and-merge-to-main-', '')
        
        # Clean up any remaining artifacts
        lines = content.split('\n')
        cleaned_lines = []
        for line in lines:
            if line.strip() and not line.strip().startswith('>>>>>>>'):
                cleaned_lines.append(line)
        
        # Remove duplicate imports and clean up
        final_content = '\n'.join(cleaned_lines)
        final_content = final_content.replace('\n\n\n', '\n\n')
        final_content = final_content.strip() + '\n'
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(final_content)
        
        print(f"Fixed: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

for file_path in files_to_fix:
    if os.path.exists(file_path):
        fix_file(file_path)
    else:
        print(f"File not found: {file_path}")