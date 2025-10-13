#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in TypeScript/React files.
This script will choose the newer version (after =======) for most conflicts.
"""

import os
import re
import sys

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        def resolve_conflict(match):
            head_content = match.group(1).strip()
            branch_content = match.group(2).strip()
            
            # For most cases, choose the branch content (after =======)
            # This is usually the newer, more complete version
            return branch_content
        
        # Replace all merge conflicts
        content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be incomplete conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed merge conflicts in {file_path}")
            return True
        else:
            print(f"ℹ️  No conflicts found in {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    # List of files with merge conflicts
    files_with_conflicts = [
        'app/landing-page-builder/page.tsx',
        'app/zion-ai-inventory-manager/page.tsx',
        'app/components/ImageOptimizer.tsx',
        'app/components/FuturisticText.tsx',
        'app/zion-ai-crm-pro/page.tsx',
        'app/cybersecurity-solutions/page.tsx',
        'app/pricing/page.tsx',
        'app/quantum-data-encryption-vault/page.tsx',
        'app/zion-ai-email-marketing-pro/page.tsx',
        'app/ai-mobile-app-builder/page.tsx',
        'app/zion-ai-analytics-pro/page.tsx',
        'app/zion-ai-customer-churn-predictor-pro/page.tsx',
        'app/ai-website-builder/page.tsx',
        'app/zion-ai-survey-builder/page.tsx',
        'app/zion-ai-inventory-optimizer-pro/page.tsx',
        'app/ai-mobile-builder/page.tsx',
        'app/cloud-infrastructure-management/page.tsx',
        'app/micro-saas-services/ai-chatbot-builder/page.tsx',
        'utils/accessibilityUtils.ts',
        'utils/cn.ts',
        'utils/performanceUtils.ts',
        'utils/seoUtils.ts'
    ]
    
    fixed_count = 0
    total_count = len(files_with_conflicts)
    
    print(f"🔧 Processing {total_count} files with merge conflicts...")
    
    for file_path in files_with_conflicts:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
        else:
            print(f"⚠️  File not found: {file_path}")
    
    print(f"\n📊 Summary: Fixed {fixed_count} out of {total_count} files")
    
    if fixed_count > 0:
        print("✅ Merge conflicts resolved successfully!")
    else:
        print("ℹ️  No merge conflicts were found or fixed.")

if __name__ == "__main__":
    main()