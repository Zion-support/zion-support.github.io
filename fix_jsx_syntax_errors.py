#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_syntax_errors(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix unclosed JSX elements - add missing closing tags
        # Pattern for self-closing divs that should be closed
        content = re.sub(r'<div([^>]*?)(?<!/)>([^<]*?)(?=<)', r'<div\1>\2</div>', content)
        
        # Fix unclosed h1 tags
        content = re.sub(r'<h1([^>]*?)(?<!/)>([^<]*?)(?=<)', r'<h1\1>\2</h1>', content)
        
        # Fix JSX expressions with missing parent elements
        # Look for multiple adjacent JSX elements without a parent
        content = re.sub(r'(\s*)(<[A-Z][^>]*>.*?</[A-Z][^>]*>)\s*(<[A-Z][^>]*>.*?</[A-Z][^>]*>)', r'\1<>\2\3</>', content, flags=re.DOTALL)
        
        # Fix missing closing braces in JSX
        content = re.sub(r'(\{[^}]*?)(?=\s*</)', r'\1}', content)
        
        # Fix unexpected tokens in JSX
        content = re.sub(r'(\{[^}]*?)([<>])(?=[^}]*\})', r'\1{\2}', content)
        
        # Fix missing colons in type definitions
        content = re.sub(r'(\w+)\s*=\s*(\w+)', r'\1: \2', content)
        
        # Fix declaration or statement expected errors
        # Look for JSX elements that are not properly wrapped
        content = re.sub(r'^(\s*)(<[A-Z][^>]*>.*?</[A-Z][^>]*>)(?=\s*$)', r'\1return \2;', content, flags=re.MULTILINE)
        
        # Fix specific patterns for common errors
        # Fix unclosed div tags in common patterns
        content = re.sub(r'<div([^>]*?)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
        
        # Fix missing return statements in React components
        if 'export default function' in content and 'return' not in content:
            # Find the function body and add return
            content = re.sub(r'(export default function[^{]*\{)([^}]+)(\})', 
                           lambda m: m.group(1) + 'return ' + m.group(2) + m.group(3), 
                           content, flags=re.DOTALL)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Get list of files with JSX syntax errors
    error_files = [
        'app/components/ContentPreviewCard.tsx',
        'app/components/ContentPromotionBanner.tsx',
        'app/components/DynamicContentShowcase.tsx',
        'app/components/EnhancedAccessibility.tsx',
        'app/components/EnhancedErrorBoundary.tsx',
        'app/components/EnhancedLoading.tsx',
        'app/components/EnhancedLoadingStates.tsx',
        'app/components/EnhancedPerformanceOptimizer.tsx',
        'app/components/EnhancedSEOHead.tsx',
        'app/components/EnhancedSkipLink.tsx',
        'app/components/ErrorBoundary.tsx',
        'app/components/ErrorHandler.tsx',
        'app/components/FuturisticBackground.tsx',
        'app/components/LazyImage.tsx',
        'app/components/Loading.tsx',
        'app/components/LoadingSpinner.tsx',
        'app/components/LoadingStates.tsx',
        'app/components/NeonButton.tsx',
        'app/components/OptimizedImage.tsx',
        'app/components/OptimizedLoadingSpinner.tsx',
        'app/components/PerformanceDashboard.tsx',
        'app/components/PerformanceOptimizations.tsx',
        'app/components/PerformanceOptimizer.tsx',
        'app/components/ResponsiveContainer.tsx',
        'app/components/SEOHead.tsx',
        'app/components/SecurityEnhancer.tsx',
        'app/components/ServiceCard.tsx',
        'app/components/ServiceCardSkeleton.tsx',
        'app/components/ServiceWorker.tsx',
        'app/components/Sidebar.tsx',
        'app/components/SkipLink.tsx',
        'app/components/UserExperienceEnhancer.tsx'
    ]
    
    fixed_count = 0
    for file_path in error_files:
        if os.path.exists(file_path):
            if fix_jsx_syntax_errors(file_path):
                print(f"Fixed JSX syntax errors in {file_path}")
                fixed_count += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"Fixed JSX syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()