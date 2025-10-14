#!/usr/bin/env python3
import os
import re
import glob

def fix_remaining_syntax(file_path):
    """Fix remaining syntax errors in TypeScript/JSX files."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix className issues with missing spaces
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])([^"]*?)"', 
                        lambda m: f'className="{m.group(1)}{m.group(2)} {m.group(3)}{m.group(4)}"', content)
        
        # Fix specific className patterns
        content = re.sub(r'borderborder-', 'border border-', content)
        content = re.sub(r'text-lgfont-semibold', 'text-lg font-semibold', content)
        content = re.sub(r'flexflex-col', 'flex flex-col', content)
        content = re.sub(r'gridgrid-cols', 'grid grid-cols', content)
        content = re.sub(r'backdrop-blur-lgrounded', 'backdrop-blur-lg rounded', content)
        content = re.sub(r'text-centermb-', 'text-center mb-', content)
        content = re.sub(r'max-w-7xlmx-auto', 'max-w-7xl mx-auto', content)
        content = re.sub(r'text-4xlmd:text-6xl', 'text-4xl md:text-6xl', content)
        content = re.sub(r'text-transparentbg-clip-textbg-gradient-to-r', 'text-transparent bg-clip-text bg-gradient-to-r', content)
        content = re.sub(r'flexitems-centergap-', 'flex items-center gap-', content)
        content = re.sub(r'w-16 h-16bg-gradient-to-r', 'w-16 h-16 bg-gradient-to-r', content)
        content = re.sub(r'w-8 h-8text-white', 'w-8 h-8 text-white', content)
        content = re.sub(r'text-2xlmd:text-3xl', 'text-2xl md:text-3xl', content)
        
        # Fix variable name issues
        content = re.sub(r'currentSl ideData', 'currentSlideData', content)
        content = re.sub(r'currentSlide Data', 'currentSlideData', content)
        content = re.sub(r'currentSl ide', 'currentSlide', content)
        
        # Fix missing commas in object literals
        content = re.sub(r'(\w+):\s*(\w+)\s*\n\s*(\w+):', r'\1: \2,\n    \3:', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\n\s*return', r'\1;\n    return', content)
        
        # Fix missing spaces in function calls
        content = re.sub(r'(\w+)\(', r'\1(', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed remaining syntax in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Files with known issues
    files_to_fix = [
        'app/about/page.tsx',
        'app/components/AccessibilityEnhancer.tsx',
        'app/components/AdvancedPerformanceOptimizer.tsx',
        'app/components/ContentCarousel.tsx',
        'app/components/ContentPromotionBanner.tsx',
        'app/components/ContentStatistics.tsx',
        'app/components/DynamicContentShowcase.tsx',
        'app/components/ErrorBoundary.tsx',
        'app/components/PerformanceOptimizer.tsx',
        'app/components/SEOEnhancer.tsx',
        'app/components/SEOOptimizer.tsx',
        'app/components/Sidebar.tsx'
    ]
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_remaining_syntax(file_path):
                fixed_count += 1
    
    print(f"\nFixed remaining syntax in {fixed_count} files")

if __name__ == "__main__":
    main()