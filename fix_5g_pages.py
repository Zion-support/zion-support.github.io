#!/usr/bin/env python3
"""
Script to fix all 5G pages with proper templates
"""
import os

def create_5g_page_template(page_name, title, description):
    """Create a 5G page template"""
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {description}
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Technology</h3>
              <p className="text-gray-300">
                Cutting-edge 5G solutions powered by the latest technology and innovation.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">High Performance</h3>
              <p className="text-gray-300">
                Ultra-fast connectivity and processing capabilities for optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">
                Flexible and scalable infrastructure that grows with your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}}'''

def main():
    """Fix all 5G pages"""
    pages = [
        {
            'file': 'app/5g-edge-computing/page.tsx',
            'name': 'FiveGEdgeComputingPage',
            'title': '5G Edge Computing Solutions',
            'description': 'Revolutionary edge computing solutions powered by 5G networks for ultra-low latency and high-performance applications.'
        },
        {
            'file': 'app/5g-implementation/page.tsx',
            'name': 'FiveGImplementationPage',
            'title': '5G Implementation Services',
            'description': 'Complete 5G network implementation and deployment services for businesses of all sizes.'
        },
        {
            'file': 'app/5g-iot-solutions/page.tsx',
            'name': 'FiveGIoTSolutionsPage',
            'title': '5G IoT Solutions',
            'description': 'Advanced IoT solutions leveraging 5G connectivity for smart cities, industrial automation, and connected devices.'
        },
        {
            'file': 'app/5g-mobile-applications/page.tsx',
            'name': 'FiveGMobileApplicationsPage',
            'title': '5G Mobile Applications',
            'description': 'Next-generation mobile applications designed to leverage the full potential of 5G networks.'
        },
        {
            'file': 'app/5g-network-infrastructure/page.tsx',
            'name': 'FiveGNetworkInfrastructurePage',
            'title': '5G Network Infrastructure',
            'description': 'Robust and scalable 5G network infrastructure solutions for enterprise and carrier deployments.'
        },
        {
            'file': 'app/5g-private-networks/page.tsx',
            'name': 'FiveGPrivateNetworksPage',
            'title': '5G Private Networks',
            'description': 'Secure and dedicated 5G private networks for enterprise and industrial applications.'
        },
        {
            'file': 'app/5g-smart-city-solutions/page.tsx',
            'name': 'FiveGSmartCitySolutionsPage',
            'title': '5G Smart City Solutions',
            'description': 'Comprehensive smart city solutions powered by 5G technology for sustainable urban development.'
        },
        {
            'file': 'app/5g-solutions/page.tsx',
            'name': 'FiveGSolutionsPage',
            'title': '5G Solutions',
            'description': 'Complete suite of 5G solutions and services to transform your business operations and connectivity.'
        }
    ]
    
    for page in pages:
        try:
            content = create_5g_page_template(page['name'], page['title'], page['description'])
            with open(page['file'], 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {page['file']}")
        except Exception as e:
            print(f"Error fixing {page['file']}: {e}")

if __name__ == "__main__":
    main()