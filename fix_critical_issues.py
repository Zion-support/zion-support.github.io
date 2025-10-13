#!/usr/bin/env python3
"""
Fix critical structural issues in specific files
"""
import os
import re

def fix_file(file_path, fixes):
    """Apply fixes to a specific file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE | re.DOTALL)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix critical issues in specific files"""
    print("🔧 Fixing critical structural issues...")
    
    # Fix App.tsx - add missing closing tags
    fixes = [
        (r'<PerformanceOptimizer>', '<PerformanceOptimizer></PerformanceOptimizer>'),
        (r'<EnhancedAnalytics>', '<EnhancedAnalytics></EnhancedAnalytics>'),
        (r'<AnalyticsProvider>', '<AnalyticsProvider></AnalyticsProvider>'),
        (r'<ErrorBoundary>', '<ErrorBoundary></ErrorBoundary>'),
        (r'<HelmetProvider>', '<HelmetProvider></HelmetProvider>'),
    ]
    fix_file('App.tsx', fixes)
    
    # Fix partners page - fix import statements
    fixes = [
        (r'import\s+([^;]+)\s*$', r'import \1;'),
        (r'const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{', r'const \1 = () => {'),
    ]
    fix_file('app/partners/page.tsx', fixes)
    
    # Fix Footer.tsx - fix declaration issues
    fixes = [
        (r'const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{', r'const \1 = () => {'),
        (r'export\s+default\s+(\w+);', r'export default \1;'),
    ]
    fix_file('app/components/Footer.tsx', fixes)
    
    # Fix AI analytics page
    fixes = [
        (r'const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{', r'const \1 = () => {'),
        (r'<div([^>]*)>\s*$', r'<div\1></div>'),
    ]
    fix_file('app/ai-analytics/page.tsx', fixes)
    
    # Fix AI code assistant pro page
    fixes = [
        (r'<section([^>]*)>\s*$', r'<section\1></section>'),
        (r'<div([^>]*)>\s*$', r'<div\1></div>'),
    ]
    fix_file('app/ai-code-assistant-pro/page.tsx', fixes)
    
    # Fix AI content studio page
    fixes = [
        (r'<section([^>]*)>\s*$', r'<section\1></section>'),
        (r'<div([^>]*)>\s*$', r'<div\1></div>'),
    ]
    fix_file('app/ai-content-studio/page.tsx', fixes)
    
    # Fix AI powered email analyzer page
    fixes = [
        (r'<div([^>]*)>\s*$', r'<div\1></div>'),
        (r'<section([^>]*)>\s*$', r'<section\1></section>'),
        (r'}\s*$', r'}'),
    ]
    fix_file('app/ai-powered-email-analyzer/page.tsx', fixes)
    
    # Fix IT services page
    fixes = [
        (r'<SEOOptimizer([^>]*)>\s*$', r'<SEOOptimizer\1></SEOOptimizer>'),
    ]
    fix_file('app/it-services/page.tsx', fixes)
    
    print("✅ Critical fixes applied!")

if __name__ == "__main__":
    main()