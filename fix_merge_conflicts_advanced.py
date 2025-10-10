#!/usr/bin/env python3
"""
Advanced script to fix merge conflicts by intelligently resolving them
"""

import os
import re
import glob

def fix_merge_conflicts_advanced(file_path):
    """Fix merge conflicts in a single file with intelligent resolution"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return True
        
        lines = content.split('\n')
        cleaned_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            if line.strip().startswith('<<<<<<< HEAD'):
                # Find the end of this conflict block
                j = i + 1
                while j < len(lines) and not lines[j].strip().startswith('======='):
                    j += 1
                
                if j < len(lines):
                    # Found the separator, now find the end
                    k = j + 1
                    while k < len(lines) and not lines[k].strip().startswith('>>>>>>> '):
                        k += 1
                    
                    if k < len(lines):
                        # We have a complete conflict block
                        # Take the content between ======= and >>>>>>> (usually the newer version)
                        conflict_content = lines[j+1:k]
                        
                        # Clean up the conflict content
                        cleaned_conflict = []
                        for conflict_line in conflict_content:
                            # Skip empty lines at the beginning and end
                            if conflict_line.strip() or (cleaned_conflict and any(l.strip() for l in cleaned_conflict)):
                                cleaned_conflict.append(conflict_line)
                        
                        # Add the cleaned conflict content
                        cleaned_lines.extend(cleaned_conflict)
                        
                        # Skip to after the conflict
                        i = k + 1
                        continue
            
            cleaned_lines.append(line)
            i += 1
        
        # Join the cleaned lines
        cleaned_content = '\n'.join(cleaned_lines)
        
        # Remove any remaining empty lines at the end
        cleaned_content = cleaned_content.rstrip() + '\n'
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all files with merge conflicts
    files_with_conflicts = [
        '/workspace/app/ai-analytics/page.tsx',
        '/workspace/app/ai-api-management/page.tsx',
        '/workspace/app/ai-api-manager/page.tsx',
        '/workspace/app/ai-autonomous-systems/page.tsx',
        '/workspace/app/ai-blockchain-analytics/page.tsx',
        '/workspace/app/ai-blockchain-solutions/page.tsx',
        '/workspace/app/ai-climate-solutions-pro/page.tsx',
        '/workspace/app/ai-cloud-infrastructure/page.tsx',
        '/workspace/app/ai-code-assistant/page.tsx',
        '/workspace/app/ai-code-security-auditor/page.tsx',
        '/workspace/app/ai-computer-vision/page.tsx',
        '/workspace/app/ai-content-delivery-network/page.tsx',
        '/workspace/app/ai-content-generation/page.tsx',
        '/workspace/app/ai-content-studio/page.tsx',
        '/workspace/app/ai-content-writer/page.tsx',
        '/workspace/app/ai-crm-assistant/page.tsx',
        '/workspace/app/analytics-tools/page.tsx',
        '/workspace/app/api-docs/page.tsx',
        '/workspace/app/ar-vr-platform/page.tsx',
        '/workspace/app/backup-recovery/page.tsx',
        '/workspace/app/blockchain-integration-services/page.tsx',
        '/workspace/app/blockchain/page.tsx',
        '/workspace/app/blog/page.tsx',
        '/workspace/app/business-apps/page.tsx',
        '/workspace/app/business-intelligence/page.tsx',
        '/workspace/app/careers/page.tsx',
        '/workspace/app/case-studies/page.tsx',
        '/workspace/app/cloud-infrastructure/page.tsx',
        '/workspace/app/cloud-migration/page.tsx',
        '/workspace/app/cloud-migration-services/page.tsx',
        '/workspace/app/cloud-security/page.tsx',
        '/workspace/app/cloud-services/page.tsx',
        '/workspace/app/consultation/page.tsx',
        '/workspace/app/micro-saas/page.tsx',
        '/workspace/app/partners/page.tsx',
        '/workspace/app/support/page.tsx'
    ]
    
    # Also check for other files with conflicts
    other_files = [
        '/workspace/src/components/PerformanceDashboard.tsx',
        '/workspace/app/utils/accessibilityChecker.ts',
        '/workspace/app/utils/accessibilityEnhancer.ts',
        '/workspace/app/types/next.d.ts',
        '/workspace/jest.config.js',
        '/workspace/app/components/ContentPromotionBanner.tsx',
        '/workspace/app/components/DynamicContentShowcase.tsx',
        '/workspace/app/components/ContentStatistics.tsx',
        '/workspace/app/components/ContentCarousel.tsx'
    ]
    
    all_files = files_with_conflicts + other_files
    
    fixed_count = 0
    total_count = 0
    
    for file_path in all_files:
        if os.path.exists(file_path):
            total_count += 1
            if fix_merge_conflicts_advanced(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_count} files")
    
    # Check if there are any remaining conflicts
    print("\nChecking for remaining conflicts...")
    remaining_conflicts = []
    for file_path in all_files:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                        remaining_conflicts.append(file_path)
            except:
                pass
    
    if remaining_conflicts:
        print(f"Still have conflicts in: {remaining_conflicts}")
    else:
        print("All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()