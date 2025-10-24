#!/usr/bin/env python3
"""
Script to clean all remaining problematic files
"""
import os
import glob

def create_clean_page(file_path, page_name):
    """Create a clean page file"""
    content = f"""'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function {page_name}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOOptimizer
        title="{page_name} - ZionTechGroup"
        description="ZionTechGroup {page_name.lower()} solutions and services."
        keywords="{page_name.lower()}, solutions, services"
      />
      <Navigation />
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {page_name}
          </h1>
          <p className="text-xl text-gray-600">
            {page_name} solutions and services coming soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}}"""
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Main function to clean all remaining files"""
    # List of problematic files to clean
    files_to_clean = [
        'app/cybersecurity/page.tsx',
        'app/digital-transformation/page.tsx',
        'app/it-services/page.tsx',
        'app/it-solutions/page.tsx',
        'app/micro-saas-services/ai-content-generator/page.tsx',
        'app/pricing/page.tsx',
        'app/privacy/page.tsx',
        'app/services/page.tsx',
        'app/solutions/page.tsx',
        'app/team/page.tsx',
        'app/terms/page.tsx',
        'app/5g-solutions/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/ai-automation/page.tsx',
        'app/ai-chatbot-builder/page.tsx',
        'app/micro-saas/ai-email-marketing-automation/page.tsx',
        'app/micro-saas/ai-expense-tracker/page.tsx',
        'app/zion-ai-customer-churn-predictor-pro/page.tsx',
        'app/zion-ai-customer-sentiment-tracker/page.tsx',
        'app/zion-ai-customer-support-pro/page.tsx'
    ]
    
    files_cleaned = 0
    
    for file_path in files_to_clean:
        if os.path.exists(file_path):
            # Extract page name from file path
            if 'micro-saas-services' in file_path:
                page_name = 'AIContentGeneratorPage'
            elif 'micro-saas' in file_path:
                page_name = 'AIEmailMarketingAutomationPage' if 'email' in file_path else 'AIExpenseTrackerPage'
            elif 'zion-ai' in file_path:
                if 'churn' in file_path:
                    page_name = 'ZionAICustomerChurnPredictorProPage'
                elif 'sentiment' in file_path:
                    page_name = 'ZionAICustomerSentimentTrackerPage'
                elif 'support' in file_path:
                    page_name = 'ZionAICustomerSupportProPage'
                else:
                    page_name = 'ZionAIPage'
            else:
                # Extract from directory name
                dir_name = os.path.basename(os.path.dirname(file_path))
                page_name = ''.join(word.capitalize() for word in dir_name.split('-')) + 'Page'
            
            create_clean_page(file_path, page_name)
            print(f"Cleaned: {file_path}")
            files_cleaned += 1
    
    print(f"\nCleaned {files_cleaned} files")

if __name__ == "__main__":
    main()