#!/usr/bin/env python3
"""
Script to fix remaining broken page files
"""

import os
import glob

def create_simple_page(page_name, title, description):
    """Create a simple page component"""
    return f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {page_name}() {{
  return (
    <>
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content="{description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/ai-services"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}}'''

def main():
    """Fix all remaining broken pages"""
    pages = [
        ('AboutPage', 'About Us', 'Learn about Zion Tech Group and our mission to revolutionize technology'),
        ('BlogPage', 'Blog', 'Insights, tutorials, and updates from our technology experts'),
        ('ServicesPage', 'Services', 'Comprehensive AI and IT solutions for your business'),
        ('PricingPage', 'Pricing', 'Transparent pricing for all our AI and IT services'),
        ('CaseStudiesPage', 'Case Studies', 'Real-world success stories from our clients'),
        ('CareersPage', 'Careers', 'Join our team of innovative technology professionals'),
        ('AIServicesPage', 'AI Services', 'Advanced artificial intelligence solutions for your business'),
        ('ItServicesPage', 'IT Services', 'Comprehensive IT solutions and support services'),
        ('MicroSaasPage', 'Micro SAAS', 'Custom software solutions tailored to your needs'),
        ('TutorialsPage', 'Tutorials', 'Learn from our comprehensive technology tutorials'),
        ('ConsultationPage', 'Consultation', 'Get expert advice on your technology needs'),
        ('DemoPage', 'Demo', 'See our solutions in action with a personalized demo'),
        ('SupportPage', 'Support', 'Get help and support for all our services'),
        ('PrivacyPage', 'Privacy Policy', 'How we protect and handle your personal information'),
        ('TermsPage', 'Terms of Service', 'Terms and conditions for using our services'),
        ('CookiesPage', 'Cookie Policy', 'Information about how we use cookies'),
        ('SitemapPage', 'Sitemap', 'Navigate our website with our comprehensive sitemap')
    ]
    
    for page_name, title, description in pages:
        page_path = f'app/{page_name.lower().replace("page", "")}/page.tsx'
        if os.path.exists(page_path):
            print(f"Fixing {page_path}")
            content = create_simple_page(page_name, title, description)
            with open(page_path, 'w', encoding='utf-8') as f:
                f.write(content)
    
    print("All pages fixed!")

if __name__ == "__main__":
    main()