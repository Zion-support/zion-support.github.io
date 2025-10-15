#!/usr/bin/env python3
"""
Script to remove unused imports and variables.
"""

import os
import re

def cleanup_file(file_path):
    """Clean up unused imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            # Remove unused SEOHead imports
            if 'import SEOHead' in line and 'SEOHead' not in content.replace(line, ''):
                continue
            
            # Remove unused ComponentsPage references
            if 'ComponentsPage' in line and 'is declared but its value is never read' in str(content):
                continue
                
            # Remove unused variable declarations
            if 'enableVirtualScrolling' in line and 'is declared but its value is never read' in str(content):
                continue
            if 'enableCodeSplitting' in line and 'is declared but its value is never read' in str(content):
                continue
                
            new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        # Additional cleanup
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Cleaned up: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    """Clean up all files with unused imports."""
    files_to_clean = [
        'app/components/EnhancedLoadingStates.tsx',
        'app/components/FuturisticText.tsx',
        'app/components/Icons.tsx',
        'app/components/LoadingStates.tsx',
        'app/components/PerformanceDashboard.tsx',
        'app/components/PerformanceEnhancer.tsx',
        'app/components/SearchBar.tsx',
        'app/components/SearchModal.tsx',
        'app/components/SecurityEnhancer.tsx',
        'app/components/SystemMonitor.tsx',
        'app/components/ThemeToggle.tsx',
        'app/components/UserExperienceEnhancer.tsx'
    ]
    
    for file_path in files_to_clean:
        if os.path.exists(file_path):
            cleanup_file(file_path)

if __name__ == "__main__":
    main()