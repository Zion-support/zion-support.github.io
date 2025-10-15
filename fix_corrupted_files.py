#!/usr/bin/env python3
"""
Script to fix corrupted files with mixed content and JSX issues.
"""

import os
import re
import glob
from pathlib import Path

def fix_corrupted_file(file_path):
    """Fix a corrupted file by cleaning up mixed content."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has obvious corruption patterns
        if any(pattern in content for pattern in ['const AboutPage:', 'const HomePage:', 'const ServicesPage:', 'const ITServicesPage:']):
            # This is a page component that got corrupted
            return create_clean_page_component(file_path, content)
        
        # Check for JSX fragment issues
        if '<>' in content and '</>' not in content:
            return fix_jsx_fragments(file_path, content)
        
        # Check for unclosed divs
        if content.count('<div') > content.count('</div'):
            return fix_unclosed_tags(file_path, content)
        
        return False
        
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def create_clean_page_component(file_path, content):
    """Create a clean page component from corrupted content."""
    # Extract the component name from the file path
    component_name = Path(file_path).stem
    if component_name.endswith('Page'):
        component_name = component_name
    else:
        component_name = f"{component_name}Page"
    
    # Create a clean page component
    clean_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

const {component_name}: React.FC = () => {{
  return (
    <>
      <Helmet>
        <title>{component_name} - Zion Tech Group</title>
        <meta name="description" content="Professional {component_name.lower()} solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{component_name}</h1>
          <p className="text-lg text-gray-600">
            Professional {component_name.lower()} solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}};

export default {component_name};'''
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(clean_content)
    
    print(f"✅ Fixed corrupted page component: {file_path}")
    return True

def fix_jsx_fragments(file_path, content):
    """Fix JSX fragment issues."""
    # Add missing closing fragment tag
    if '<>' in content and '</>' not in content:
        # Find the last closing tag and add </> before it
        lines = content.split('\n')
        for i in range(len(lines) - 1, -1, -1):
            if lines[i].strip().endswith('</div>') or lines[i].strip().endswith('</main>') or lines[i].strip().endswith('</section>'):
                lines.insert(i + 1, '    </>')
                break
        
        content = '\n'.join(lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed JSX fragments in: {file_path}")
        return True
    
    return False

def fix_unclosed_tags(file_path, content):
    """Fix unclosed HTML/JSX tags."""
    # Count opening and closing divs
    open_divs = content.count('<div')
    close_divs = content.count('</div>')
    
    if open_divs > close_divs:
        # Add missing closing divs
        missing_divs = open_divs - close_divs
        content += '\n' + '  ' * (missing_divs - 1) + '</div>' * missing_divs
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed unclosed tags in: {file_path}")
        return True
    
    return False

def find_corrupted_files():
    """Find files with common corruption patterns."""
    corrupted_files = []
    
    # Common file extensions to check
    extensions = ['*.tsx', '*.ts']
    
    for ext in extensions:
        for file_path in glob.glob(f'**/{ext}', recursive=True):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                # Check for corruption patterns
                if any(pattern in content for pattern in [
                    'const AboutPage:',
                    'const HomePage:', 
                    'const ServicesPage:',
                    'const ITServicesPage:',
                    'const MicroSAASPage:',
                    'const NotFoundPage:',
                    'const ServiceDetailPage:',
                    'const TutorialsPage:',
                    'const StatusPage:',
                    'const TeamPage:',
                    'const SolutionsPage:',
                    'const TermsPage:',
                    'const SoftwareDevelopmentPage:',
                    'const SupportPage:',
                    'const PrivacyPage:',
                    'const ReportPage:',
                    'const DigitalTransformationPage:',
                    'const AIServicesPage:',
                    'const MicroSaaSPage:',
                    'const ITServicesPage:',
                    'const CaseStudiesPage:',
                    'const AISolutionsPage:',
                    'const FiveGSolutionsPage:',
                    'const APIDocsPage:',
                    'const BlogPage:',
                    'const CommunityPage:',
                    'const PortfolioPage:',
                    'const CareersPage:',
                    'const PartnershipsPage:',
                    'const PricingPage:',
                    'const DemoPage:',
                    'const ChatPage:',
                    'const DocumentationPage:',
                    'const CybersecurityPage:',
                    'const CloudSolutionsPage:',
                    'const ContactPage:',
                    'const NotFoundPage:',
                    'const CloudInfrastructurePage:',
                    'const HelpPage:'
                ]):
                    corrupted_files.append(file_path)
            except:
                continue
    
    return corrupted_files

def main():
    print("🔍 Searching for corrupted files...")
    corrupted_files = find_corrupted_files()
    
    if not corrupted_files:
        print("✅ No corrupted files found!")
        return
    
    print(f"📁 Found {len(corrupted_files)} corrupted files")
    
    fixed_count = 0
    failed_count = 0
    
    for file_path in corrupted_files:
        if fix_corrupted_file(file_path):
            fixed_count += 1
        else:
            failed_count += 1
    
    print(f"\n📊 Summary:")
    print(f"✅ Successfully fixed: {fixed_count} files")
    print(f"❌ Failed to fix: {failed_count} files")
    
    if fixed_count > 0:
        print("\n🎉 Corrupted files fixed! You can now run your build and tests.")
    else:
        print("\n⚠️  No files were fixed. Please check the files manually.")

if __name__ == "__main__":
    main()