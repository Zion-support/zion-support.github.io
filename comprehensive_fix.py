#!/usr/bin/env python3
"""
Comprehensive fix script for syntax errors and issues
"""
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax issues
        fixes_applied = []
        
        # Fix missing semicolons after import statements
        content = re.sub(r'(import\s+[^;]+)(\n)', r'\1;\2', content)
        
        # Fix JSX expressions that need parent elements
        # This is a complex fix, so we'll handle it case by case
        
        # Fix missing closing tags - add basic closing tags
        content = re.sub(r'<(\w+)([^>]*?)(?<!/)>([^<]*?)(?=<(?!\1))', r'<\1\2>\3</\1>', content, flags=re.DOTALL)
        
        # Fix any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        
        # Fix malformed JSX attributes
        content = re.sub(r'(\w+)=([^"\s>]+)(?=\s|>)', r'\1="\2"', content)
        
        # Fix missing quotes around attribute values
        content = re.sub(r'(\w+)=([^"\s>]+)(?=\s|>)', r'\1="\2"', content)
        
        # Fix common TypeScript issues
        content = re.sub(r'(\w+):\s*any\b', r'\1: unknown', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\n', r'\1;\n', content)
        
        # Fix malformed function declarations
        content = re.sub(r'function\s+(\w+)\s*\(\s*\)\s*{', r'function \1(): void {', content)
        
        # Fix missing return types
        content = re.sub(r'function\s+(\w+)\s*\(\s*\)\s*{', r'function \1(): void {', content)
        
        # Fix React component declarations
        content = re.sub(r'export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{', r'export default function \1(): JSX.Element {', content)
        
        # Fix missing closing braces
        lines = content.split('\n')
        brace_count = 0
        fixed_lines = []
        
        for line in lines:
            fixed_lines.append(line)
            brace_count += line.count('{') - line.count('}')
        
        # Add missing closing braces
        while brace_count > 0:
            fixed_lines.append('}')
            brace_count -= 1
        
        content = '\n'.join(fixed_lines)
        
        # Fix specific parsing errors
        content = re.sub(r'(\w+)\s*=\s*([^;]+)(?<![;}])\s*\n', r'\1 = \2;\n', content)
        
        # Fix JSX closing tag issues
        content = re.sub(r'<(\w+)([^>]*?)>([^<]*?)(?=<(?!\1))', r'<\1\2>\3</\1>', content, flags=re.DOTALL)
        
        if content != original_content:
            fixes_applied.append("Applied syntax fixes")
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return len(fixes_applied) > 0
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_specific_files():
    """Fix specific problematic files"""
    problematic_files = [
        'App.tsx',
        'app/page.tsx',
        'app/ai-services/page.tsx',
        'app/ai-automated-reporting/page.tsx',
        'app/components/AnimatedCounter.tsx',
        'app/components/Analytics.tsx',
        'app/components/Footer.tsx',
        'app/components/Navigation.tsx',
        'app/components/ContactForm.tsx',
        'app/components/DynamicContentShowcase.tsx',
        'app/components/EnhancedAccessibilityEnhancer.tsx',
        'app/components/EnhancedPerformanceMonitor.tsx',
        'app/components/EnhancedSEO.tsx',
        'app/components/EnhancedSEOOptimizer.tsx',
        'app/components/FuturisticBackground.tsx',
        'app/components/FuturisticHero.tsx',
        'app/components/FuturisticServiceCard.tsx',
        'app/components/GlobalErrorBoundary.tsx',
        'app/components/Header.tsx',
        'app/components/LazyImage.tsx',
        'app/components/LoadingSkeleton.tsx',
        'app/components/OptimizedImage.tsx',
        'app/components/OptimizedLoadingSpinner.tsx',
        'app/components/PWAInstaller.tsx',
        'app/components/PerformanceEnhancer.tsx',
        'app/components/PerformanceOptimizer.tsx',
        'app/components/SEOEnhancer.tsx',
        'app/components/SecurityEnhancer.tsx',
        'app/components/ServiceWorker.tsx',
        'app/components/ServiceWorkerRegistration.tsx',
        'app/components/Sidebar.tsx',
        'app/components/SystemMonitor.tsx',
        'app/components/UserExperienceEnhancer.tsx',
        'app/config/errorBoundaryConfig.tsx',
        'app/contact/page.tsx',
        'app/cybersecurity/page.tsx',
        'app/data-center/page.tsx',
        'app/database-services/page.tsx',
        'app/database/page.tsx',
        'app/devops/page.tsx',
        'app/enterprise-security/page.tsx',
        'app/enterprise/page.tsx',
        'app/gdpr/page.tsx',
        'app/investors/page.tsx',
        'app/iot-edge-computing/page.tsx',
        'app/it-consulting/page.tsx',
        'app/it-services/page.tsx',
        'app/main.tsx',
        'app/micro-saas-services/microSaasServices.tsx',
        'app/micro-saas-services/page.tsx',
        'app/micro-saas-services/services.tsx',
        'app/news/page.tsx',
        'app/not-found.tsx',
        'app/pricing/page.tsx',
        'app/robotics/page.tsx',
        'app/services-advertising/page.tsx',
        'app/smart-city-infrastructure/page.tsx',
        'app/status/page.tsx',
        'app/support/page.tsx',
        'app/system-status/page.tsx',
        'app/task-manager-pro/page.tsx',
        'app/training/page.tsx',
        'app/utils/errorHandler.tsx',
        'app/utils/image.tsx',
        'app/utils/link.tsx',
        'app/utils/testRunner.tsx',
        'public/sw.js'
    ]
    
    fixed_count = 0
    for file_path in problematic_files:
        if os.path.exists(file_path):
            if fix_syntax_errors(file_path):
                fixed_count += 1
                print(f"Fixed: {file_path}")
    
    return fixed_count

def main():
    """Main function to fix all syntax errors"""
    print("Starting comprehensive syntax fix...")
    
    # Fix specific problematic files
    fixed_count = fix_specific_files()
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()