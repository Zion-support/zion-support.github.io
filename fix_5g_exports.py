#!/usr/bin/env python3
"""
Script to fix 5G page exports and unused variables
"""
import os
import re
import glob

def fix_5g_exports(file_path):
    """Fix 5G page exports and remove unused variables"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if this is a 5G page file
        if not '5g-' in file_path:
            return False
        
        # Fix the export default statement
        # Pattern: export default Page5gXxxPage; -> export default FiveGXxxPage;
        pattern = r'export default Page5g([A-Za-z]+)Page;'
        def fix_export(match):
            rest = match.group(1)
            return f'export default FiveG{rest}Page;'
        
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
        
        print(f"Fixed 5G exports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all 5G TypeScript/JSX files"""
    # Find all 5G TypeScript/JSX files
    patterns = [
        'app/5g-*/page.tsx',
        'app/5g-*/page.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if fix_5g_exports(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} 5G files")
    print(f"Fixed exports in {files_fixed} files")

if __name__ == "__main__":
    main()