#!/usr/bin/env python3
"""
Script to fix critical merge conflicts in the most important files
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the HEAD version
        # This is a simple approach - keep everything before ======= and after >>>>>>> 
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_end = False
                continue
            elif line.strip() == '=======':
                skip_until_end = True
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                new_lines.append(line)
        
        # Write the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Critical files to fix first
    critical_files = [
        'app/components/Navigation.tsx',
        'app/components/Footer.tsx',
        'app/components/Header.tsx',
        'app/about/page.tsx',
        'app/contact/page.tsx',
        'app/ai-services/page.tsx',
        'app/it-services/page.tsx',
        'app/web-development/page.tsx',
        'app/mobile-development/page.tsx',
        'app/ai-chatbot-builder/page.tsx',
        'app/ai-voice-assistant/page.tsx',
        'app/ai-automation/page.tsx',
        'app/components/FuturisticHero.tsx',
        'app/components/PerformanceOptimizer.tsx',
        'app/components/PerformanceMonitor.tsx',
        'app/components/ServiceWorker.tsx',
        'app/components/LoadingSkeleton.tsx',
        'app/components/PWAInstaller.tsx',
        'app/components/SEOEnhancer.tsx',
        'app/components/ServiceWorkerRegistration.tsx',
        'app/components/GlobalErrorBoundary.tsx',
        'app/micro-saas-services/page.tsx',
        'app/ai-email-assistant/page.tsx',
        'app/ai-email-marketing-automation/page.tsx',
        'app/ai-ecommerce-optimizer-pro/page.tsx',
        'app/cloud-migration-pro/page.tsx',
        'app/ai-expense-tracker/page.tsx',
        'app/ai-customer-support-chatbot/page.tsx',
        'app/ai-social-media-manager/page.tsx',
        'app/ai-invoice-generator/page.tsx',
        'app/ai-project-management-pro/page.tsx',
        'app/system-integration/page.tsx',
        'app/ai-video-editor/page.tsx'
    ]
    
    fixed_count = 0
    for file_path in critical_files:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed conflicts in {fixed_count} critical files")
    
    # Now fix any remaining .tsx files in app/components and app/ directories
    pattern_files = [
        'app/components/*.tsx',
        'app/*/page.tsx'
    ]
    
    for pattern in pattern_files:
        for file_path in glob.glob(pattern):
            if os.path.exists(file_path) and file_path not in critical_files:
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
    
    print(f"Total files fixed: {fixed_count}")

if __name__ == "__main__":
    main()