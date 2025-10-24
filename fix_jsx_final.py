#!/usr/bin/env python3
import os
import re

def fix_jsx_final(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX fragments and closing tags
        # Remove duplicate closing tags
        content = re.sub(r'</div></div>', '</div>', content)
        content = re.sub(r'</section></div>', '</section>', content)
        
        # Fix JSX fragment issues
        content = re.sub(r'<>\s*<div([^>]*)>([^<]*(?:<[^/][^>]*>[^<]*)*?)</div>\s*</>', r'<div\1>\2</div>', content, flags=re.DOTALL)
        
        # Fix property assignment issues
        content = re.sub(r'(\w+)\s*=\s*(\w+)(?=\s*[,}])', r'\1: \2', content)
        
        # Fix arrow function syntax
        content = re.sub(r'(\w+)\s*=\s*(\w+)\s*=>', r'\1: \2 =>', content)
        
        # Fix reserved word issues
        content = re.sub(r':\s*true(?=\s*[,}])', r': true', content)
        
        # Fix missing colons in type definitions
        content = re.sub(r'(\w+)\s*=\s*(\w+)(?=\s*[;,)])', r'\1: \2', content)
        
        # Fix unexpected tokens in JSX
        content = re.sub(r'(\{[^}]*?)([<>])(?=[^}]*\})', r'\1{\2}', content)
        
        # Fix missing closing braces
        content = re.sub(r'(\{[^}]*?)(?=\s*</)', r'\1}', content)
        
        # Fix declaration or statement expected - add return statements where needed
        if 'export default function' in content and 'return' not in content:
            # Find the function body and add return
            content = re.sub(r'(export default function[^{]*\{)([^}]+)(\})', 
                           lambda m: m.group(1) + 'return ' + m.group(2) + m.group(3), 
                           content, flags=re.DOTALL)
        
        # Fix specific JSX structure issues
        # Look for multiple adjacent JSX elements without a parent
        content = re.sub(r'(\s*)(<[A-Z][^>]*>.*?</[A-Z][^>]*>)\s*(<[A-Z][^>]*>.*?</[A-Z][^>]*>)', r'\1<>\2\3</>', content, flags=re.DOTALL)
        
        # Fix unclosed tags by adding proper closing tags
        lines = content.split('\n')
        fixed_lines = []
        tag_stack = []
        
        for line in lines:
            # Track opening tags
            open_tags = re.findall(r'<([a-zA-Z][a-zA-Z0-9]*)(?:[^>]*?)(?<!/)>', line)
            for tag in open_tags:
                tag_stack.append(tag)
            
            # Track closing tags
            close_tags = re.findall(r'</([a-zA-Z][a-zA-Z0-9]*)>', line)
            for tag in close_tags:
                if tag in tag_stack:
                    tag_stack.remove(tag)
            
            fixed_lines.append(line)
        
        # Add any remaining unclosed tags at the end
        while tag_stack:
            tag = tag_stack.pop()
            fixed_lines.append(f'</{tag}>')
        
        content = '\n'.join(fixed_lines)
        
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
            if fix_jsx_final(file_path):
                print(f"Fixed JSX syntax errors in {file_path}")
                fixed_count += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"Fixed JSX syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()