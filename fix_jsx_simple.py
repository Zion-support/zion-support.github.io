#!/usr/bin/env python3
import os
import re

def fix_jsx_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix unclosed div tags - look for div tags that don't have closing tags
        # This is a simple approach: find div tags and ensure they have closing tags
        lines = content.split('\n')
        fixed_lines = []
        div_stack = []
        
        for i, line in enumerate(lines):
            # Check for opening div tags
            div_open_matches = re.finditer(r'<div([^>]*)>', line)
            for match in div_open_matches:
                div_stack.append(i)
            
            # Check for closing div tags
            div_close_matches = re.finditer(r'</div>', line)
            for match in div_close_matches:
                if div_stack:
                    div_stack.pop()
            
            # If we have unclosed divs and this line ends without a closing div, add one
            if div_stack and not re.search(r'</div>', line) and not re.search(r'<div[^>]*/>', line):
                # Check if this line has content that should be wrapped
                if line.strip() and not line.strip().startswith('//') and not line.strip().startswith('*'):
                    # Add closing div if needed
                    if not line.strip().endswith('>') or not re.search(r'</[^>]+>$', line.strip()):
                        line = line.rstrip() + '</div>'
                        if div_stack:
                            div_stack.pop()
            
            fixed_lines.append(line)
        
        # Add any remaining unclosed divs at the end
        while div_stack:
            fixed_lines.append('</div>')
            div_stack.pop()
        
        content = '\n'.join(fixed_lines)
        
        # Fix specific JSX syntax issues
        # Fix missing closing braces
        content = re.sub(r'(\{[^}]*?)(?=\s*</)', r'\1}', content)
        
        # Fix unexpected tokens
        content = re.sub(r'(\{[^}]*?)([<>])(?=[^}]*\})', r'\1{\2}', content)
        
        # Fix missing colons in type definitions
        content = re.sub(r'(\w+)\s*=\s*(\w+)(?=\s*[;,)])', r'\1: \2', content)
        
        # Fix JSX expressions that need a parent element
        # Look for multiple adjacent JSX elements
        content = re.sub(r'(\s*)(<[A-Z][^>]*>.*?</[A-Z][^>]*>)\s*(<[A-Z][^>]*>.*?</[A-Z][^>]*>)', 
                        r'\1<>\2\3</>', content, flags=re.DOTALL)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
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
            if fix_jsx_file(file_path):
                print(f"Fixed JSX syntax errors in {file_path}")
                fixed_count += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"Fixed JSX syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()