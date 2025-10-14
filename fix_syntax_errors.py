#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JSX files."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix interface declarations with spaces
        content = re.sub(r'interface\s+([A-Za-z]+)\s+([A-Za-z]+)\s+Props', r'interface \1\2Props', content)
        content = re.sub(r'interface\s+([A-Za-z]+)\s+([A-Za-z]+)\s+([A-Za-z]+)', r'interface \1\2\3', content)
        
        # Fix variable names with spaces
        content = re.sub(r'setCurrent\s+Slide', 'setCurrentSlide', content)
        content = re.sub(r'handleKey\s+Down', 'handleKeyDown', content)
        content = re.sub(r'addEvent\s+Listener', 'addEventListener', content)
        content = re.sub(r'removeEvent\s+Listener', 'removeEventListener', content)
        content = re.sub(r'querySelector\s+All', 'querySelectorAll', content)
        content = re.sub(r'newIntersection\s+Observer', 'new IntersectionObserver', content)
        content = re.sub(r'HTMLImage\s+Element', 'HTMLImageElement', content)
        content = re.sub(r'getAttribute\s+\(', 'getAttribute(', content)
        
        # Fix property names with spaces
        content = re.sub(r'enableKeyboard\s+Navigation', 'enableKeyboardNavigation', content)
        content = re.sub(r'enableScreen\s+Reader\s+Support', 'enableScreenReaderSupport', content)
        content = re.sub(r'enableHigh\s+Contrast', 'enableHighContrast', content)
        content = re.sub(r'enableFocus\s+Management', 'enableFocusManagement', content)
        content = re.sub(r'enableImage\s+Optimization', 'enableImageOptimization', content)
        content = re.sub(r'enableLazy\s+Loading', 'enableLazyLoading', content)
        content = re.sub(r'enableCode\s+Splitting', 'enableCodeSplitting', content)
        content = re.sub(r'enableService\s+Worker', 'enableServiceWorker', content)
        content = re.sub(r'enableResource\s+Hints', 'enableResourceHints', content)
        content = re.sub(r'enableCritical\s+CSS', 'enableCriticalCSS', content)
        content = re.sub(r'enableBundle\s+Analysis', 'enableBundleAnalysis', content)
        
        # Fix missing spaces in object properties
        content = re.sub(r'icon:\s*Trending\s+Up,', 'icon: TrendingUp,', content)
        
        # Fix missing commas in object literals
        content = re.sub(r'(\w+):\s*(\w+)\s*\n\s*(\w+):', r'\1: \2,\n    \3:', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\n\s*return', r'\1;\n    return', content)
        
        # Fix missing braces
        content = re.sub(r'if\s*\(\s*(\w+)\s*\)\s*return\s*;', r'if (\1) {\n      return;\n    }', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Specific files with known issues
    specific_files = [
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
        'app/components/Sidebar.tsx',
        'app/about/page.tsx'
    ]
    
    files_to_fix.extend(specific_files)
    files_to_fix = list(set(files_to_fix))  # Remove duplicates
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_syntax_errors(file_path):
                fixed_count += 1
    
    print(f"\nFixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()