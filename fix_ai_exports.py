#!/usr/bin/env python3
"""
Script to fix AI page exports and unused variables
"""
import os
import re
import glob

def fix_ai_exports(file_path):
    """Fix AI page exports and remove unused variables"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if this is an AI page file
        if not 'ai-' in file_path:
            return False
        
        # Fix the export default statement for AI pages
        # Pattern: export default AiXxxPage; -> export default AiXxxPage; (already correct)
        # Pattern: export default PageAiXxxPage; -> export default AiXxxPage;
        pattern = r'export default PageAi([A-Za-z]+)Page;'
        def fix_export(match):
            rest = match.group(1)
            return f'export default Ai{rest}Page;'
        
        content = re.sub(pattern, fix_export, content)
        
        # Remove unused imports (common ones)
        unused_imports = [
            'Zap', 'Brain', 'MapPin', 'Download', 'Pause', 'RefreshCw', 'Eye', 'Filter',
            'Calendar', 'Target', 'Lock', 'Users', 'Award', 'TrendingUp', 'Database',
            'Radio', 'Antenna', 'Router', 'Server', 'Network', 'Settings', 'PieChart',
            'LineChart', 'Activity', 'Shield', 'DollarSign'
        ]
        
        # Remove unused imports from the import statement
        for unused in unused_imports:
            # Remove from named imports
            content = re.sub(rf',\s*{unused}(?=\s*,|\s*from)', '', content)
            content = re.sub(rf'{unused}\s*,', '', content)
            content = re.sub(rf',\s*{unused}\s*from', ' from', content)
            content = re.sub(rf'^{unused}\s*,', '', content, flags=re.MULTILINE)
        
        # Clean up any double commas
        content = re.sub(r',\s*,', ',', content)
        content = re.sub(r',\s*from', ' from', content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed AI exports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all AI TypeScript/JSX files"""
    # Find all AI TypeScript/JSX files
    patterns = [
        'app/ai-*/page.tsx',
        'app/ai-*/page.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if fix_ai_exports(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} AI files")
    print(f"Fixed exports in {files_fixed} files")

if __name__ == "__main__":
    main()