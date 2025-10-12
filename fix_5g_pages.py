#!/usr/bin/env python3
"""
Script to fix unused imports in 5G pages.
"""

import os
import re

def fix_5g_page(file_path, unused_imports):
    """Fix unused imports in a 5G page."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Find the import line
        import_match = re.search(r'import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"]', content)
        if import_match:
            imports_str = import_match.group(1)
            source = import_match.group(2)
            
            # Parse individual imports
            imports = [imp.strip() for imp in imports_str.split(',')]
            
            # Remove unused imports
            used_imports = [imp for imp in imports if imp not in unused_imports]
            
            # Reconstruct the import line
            if used_imports:
                new_import = f"import {{ {', '.join(used_imports)} }} from '{source}';"
                content = content.replace(import_match.group(0), new_import)
            else:
                # If no imports are used, remove the line
                content = content.replace(import_match.group(0), '')
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed {file_path}: removed {unused_imports}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Fix all 5G pages."""
    pages_to_fix = [
        ('app/5g-data-analytics/page.tsx', ['Users', 'Star']),
        ('app/5g-edge-computing/page.tsx', ['Star']),
        ('app/5g-iot-solutions/page.tsx', ['Zap', 'Globe', 'Smartphone', 'Clock']),
        ('app/5g-mobile-applications/page.tsx', ['Smartphone', 'Cpu', 'Clock', 'Star']),
        ('app/5g-network-infrastructure/page.tsx', ['Star']),
        ('app/5g-private-networks/page.tsx', ['Users', 'Clock', 'Star']),
        ('app/about/page.tsx', ['Award', 'Globe', 'Database', 'Star', 'Clock', 'TrendingUp']),
        ('app/ai-chatbot-builder/page.tsx', ['CheckCircle']),
        ('app/ai-expense-tracker/page.tsx', ['Smartphone', 'TrendingUp']),
        ('app/ai-password-manager/page.tsx', ['Globe', 'Database']),
        ('app/ai-task-manager/page.tsx', ['Smartphone', 'Globe']),
        ('app/blog/page.tsx', ['Clock']),
        ('app/careers/page.tsx', ['CheckCircle', 'MapPin']),
        ('app/pricing/page.tsx', ['ArrowRight', 'Zap', 'Shield', 'Brain', 'Globe', 'Settings', 'BarChart']),
        ('app/support/page.tsx', ['CheckCircle', 'ArrowRight', 'MapPin', 'Zap', 'Brain']),
        ('app/page.tsx', ['Shield'])
    ]
    
    files_fixed = 0
    for file_path, unused_imports in pages_to_fix:
        if os.path.exists(file_path):
            if fix_5g_page(file_path, unused_imports):
                files_fixed += 1
    
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()