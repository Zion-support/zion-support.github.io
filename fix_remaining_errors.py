#!/usr/bin/env python3
import os
import re
import glob

def fix_remaining_errors(file_path):
    """Fix remaining parsing errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix unterminated string literals
        content = re.sub(r"'([^']*)$", r"'\1'", content, flags=re.MULTILINE)
        content = re.sub(r'"([^"]*)$', r'"\1"', content, flags=re.MULTILINE)
        
        # Fix missing semicolons after imports
        content = re.sub(r"import\s+([^;]+)(?<!;)$", r"import \1;", content, flags=re.MULTILINE)
        
        # Fix missing semicolons after variable declarations
        content = re.sub(r"(const|let|var)\s+([^=]+)=([^;]+)(?<!;)$", r"\1 \2=\3;", content, flags=re.MULTILINE)
        
        # Fix missing closing brackets in arrays
        content = re.sub(r"\[([^\]]*)$", r"[\1]", content, flags=re.MULTILINE)
        
        # Fix missing closing parentheses
        content = re.sub(r"\(([^)]*)$", r"(\1)", content, flags=re.MULTILINE)
        
        # Fix malformed object properties
        content = re.sub(r'"([^"]*)":\s*([^,}]+)(?![,}])', r'"\1": \2,', content)
        
        # Fix missing commas in arrays
        content = re.sub(r"'([^']*)'(?=\s*$)", r"'\1',", content, flags=re.MULTILINE)
        
        # Fix console statements (remove or comment out)
        content = re.sub(r"console\.(log|warn|error|info)\([^)]*\);?", r"// \0", content)
        
        # Fix malformed JSX
        content = re.sub(r"<([^>]*)$", r"<\1>", content, flags=re.MULTILINE)
        
        # Fix missing closing braces
        content = re.sub(r"\{([^}]*)$", r"{\1}", content, flags=re.MULTILINE)
        
        # Fix standalone string literals
        content = re.sub(r"^\s*'([^']*)'\s*$", r"// \1", content, flags=re.MULTILINE)
        
        # Fix malformed function declarations
        content = re.sub(r"const\s+([^=]+)=\s*\([^)]*\)\s*=>\s*\{([^}]*)$", r"const \1 = () => {\n  \2\n}", content, flags=re.MULTILINE)
        
        # Fix missing return statements
        content = re.sub(r"const\s+([^=]+)=\s*\([^)]*\)\s*=>\s*([^{][^;]*)$", r"const \1 = () => {\n  return \2;\n}", content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Get list of files with errors from the linter output
    error_files = [
        '/workspace/app/components/SEOOptimizer.tsx',
        '/workspace/app/pricing/page.tsx',
        '/workspace/components/DefaultSEO.tsx',
        '/workspace/components/OptimizedImage.tsx',
        '/workspace/components/SEO/DefaultSEO.tsx',
        '/workspace/components/SEO/MetaTags.tsx',
        '/workspace/components/SEO/StructuredData.tsx',
        '/workspace/src/ai-analytics-dashboard/page.tsx',
        '/workspace/src/ai-content-generation/page.tsx',
        '/workspace/src/ai-crm/page.tsx',
        '/workspace/src/ai-customer-support/page.tsx',
        '/workspace/src/ai-cybersecurity/page.tsx',
        '/workspace/src/ai-data-visualization/page.tsx',
        '/workspace/src/ai-document-processing/page.tsx',
        '/workspace/src/ai-fashion-design/page.tsx',
        '/workspace/src/ai-fitness-coach/page.tsx',
        '/workspace/src/ai-healthcare/page.tsx',
        '/workspace/src/ai-lead-generation/page.tsx',
        '/workspace/src/ai-marketing/page.tsx',
        '/workspace/src/ai-music-composition/page.tsx',
        '/workspace/src/ai-project-manager/page.tsx',
        '/workspace/src/ai-sales-automation/page.tsx',
        '/workspace/src/ai-scheduler/page.tsx',
        '/workspace/src/ai-services/page.tsx',
        '/workspace/src/ai-social-media-manager/page.tsx',
        '/workspace/src/ai-video-generation/page.tsx',
        '/workspace/src/ai-voice-cloning/page.tsx',
        '/workspace/src/ai-workflow-automation/page.tsx',
        '/workspace/src/api-docs/page.tsx',
        '/workspace/src/autonomous-systems/page.tsx',
        '/workspace/src/business-intelligence/page.tsx',
        '/workspace/src/cloud-services/page.tsx',
        '/workspace/src/compliance/page.tsx',
        '/workspace/src/components/AdvancedSEOOptimizer.tsx',
        '/workspace/src/components/ContentNewsletterSignup.tsx',
        '/workspace/src/components/Footer.tsx',
        '/workspace/src/components/PWAInstaller.tsx',
        '/workspace/src/components/SEO.tsx',
        '/workspace/src/components/SEOHead.tsx',
        '/workspace/src/consultation/page.tsx',
        '/workspace/src/contact/page.tsx',
        '/workspace/src/demo/page.tsx',
        '/workspace/src/devops/page.tsx',
        '/workspace/src/expense-tracker/page.tsx',
        '/workspace/src/it-services/page.tsx',
        '/workspace/src/machine-learning/page.tsx',
        '/workspace/src/micro-saas/page-original.tsx',
        '/workspace/src/micro-saas/page.tsx',
        '/workspace/src/page-optimized.tsx',
        '/workspace/src/pricing/page.tsx',
        '/workspace/src/quantum-computing/page.tsx',
        '/workspace/src/setupTests.tsx',
        '/workspace/src/sitemap-page.tsx',
        '/workspace/src/smart-analytics/page.tsx',
        '/workspace/src/task-manager-pro/page.tsx'
    ]
    
    fixed_count = 0
    
    for file_path in error_files:
        if os.path.exists(file_path):
            if fix_remaining_errors(file_path):
                fixed_count += 1
                print(f"Fixed {file_path}")
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()