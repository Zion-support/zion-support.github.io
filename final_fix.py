#!/usr/bin/env python3
"""
Final comprehensive fix for all remaining parsing errors
"""

import os
import re
import glob

def fix_all_issues(file_path):
    """Fix all remaining parsing issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix all remaining spaces in import statements
        content = re.sub(r'SE O Head', 'SEOHead', content)
        content = re.sub(r'Enhanced SE OHead', 'EnhancedSEOHead', content)
        content = re.sub(r'Enhanced PerformanceOptimizer', 'EnhancedPerformanceOptimizer', content)
        content = re.sub(r'Performance Optimizer', 'PerformanceOptimizer', content)
        content = re.sub(r'Accessibility Enhancer', 'AccessibilityEnhancer', content)
        content = re.sub(r'Enhanced Accessibility', 'EnhancedAccessibility', content)
        content = re.sub(r'use Performance Monitor', 'usePerformanceMonitor', content)
        content = re.sub(r'Analytics Provider', 'AnalyticsProvider', content)
        content = re.sub(r'Performance Monitor', 'PerformanceMonitor', content)
        content = re.sub(r'Futuristic Background', 'FuturisticBackground', content)
        content = re.sub(r'Page Loader', 'PageLoader', content)
        content = re.sub(r'Error Boundary', 'ErrorBoundary', content)
        content = re.sub(r'SEO Head', 'SEOHead', content)
        content = re.sub(r'Breadcrumb', 'Breadcrumb', content)
        
        # Fix spaces in JSX attributes
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2\3', content)
        
        # Fix spaces in other attributes
        content = re.sub(r'(\w)([A-Z])', r'\1\2', content)
        
        # Fix malformed JSX fragments
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*', '', content, flags=re.MULTILINE)
        
        # Fix malformed JSX tags
        content = re.sub(r'<([^>]*?)([a-zA-Z])([a-zA-Z])([^>]*?)>', r'<\1\2\3\4>', content)
        
        # Fix broken imports
        content = re.sub(r'^import\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^import\s+{\s*}\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^import\s+,\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining issues"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            if fix_all_issues(file_path):
                files_fixed += 1
                print(f"Fixed issues in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed issues in {files_fixed} files")

if __name__ == "__main__":
    main()