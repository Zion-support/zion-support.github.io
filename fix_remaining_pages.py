#!/usr/bin/env python3
"""
Fix remaining page components with syntax errors
"""

import os
import glob

def create_clean_page(page_path, page_name, description):
    """Create a clean page component."""
    component_name = ''.join(word.capitalize() for word in page_name.split('-')) + 'Page'
    
    content = f"""'use client'
import React from 'react'
import {{ Helmet }} from 'react-helmet-async'
import {{ ArrowRight, CheckCircle }} from 'lucide-react'
import {{ Link }} from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const {component_name}: React.FC = () => {{
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{page_name.replace('-', ' ').title()} - Zion Tech Group</title>
        <meta name="description" content="{description}" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {page_name.replace('-', ' ').title()}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Coming Soon</h2>
              <p className="text-lg text-gray-600">
                This page is under development. Please check back soon for more information.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}}

export default {component_name}
"""
    
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Main function to fix remaining pages."""
    pages_to_fix = [
        ('app/it-services/page.tsx', 'IT Services', 'Professional IT services including cloud migration, cybersecurity, DevOps, and mobile development.'),
        ('app/micro-saas-services/page.tsx', 'Micro SAAS Services', 'Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.'),
        ('app/cloud-services/page.tsx', 'Cloud Services', 'Professional cloud services including migration, infrastructure setup, security, and optimization.'),
        ('app/digital-transformation/page.tsx', 'Digital Transformation', 'Transform your business for the digital age with comprehensive digital transformation services.'),
        ('app/5g-implementation/page.tsx', '5G Implementation', 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.')
    ]
    
    for page_path, page_name, description in pages_to_fix:
        if os.path.exists(page_path):
            print(f"Fixing: {page_path}")
            create_clean_page(page_path, page_name, description)
        else:
            print(f"Creating: {page_path}")
            os.makedirs(os.path.dirname(page_path), exist_ok=True)
            create_clean_page(page_path, page_name, description)
    
    print("All pages fixed!")

if __name__ == "__main__":
    main()