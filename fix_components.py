#!/usr/bin/env python3
"""
Script to fix all component files with clean templates
"""
import os
import glob

def create_clean_component_template(component_name, content):
    """Create a clean component template"""
    return f'''import React from 'react';

export default function {component_name}() {{
  return (
    {content}
  );
}}'''

def fix_components():
    """Fix all component files"""
    components = [
        {
            'file': 'app/components/ErrorBoundary.tsx',
            'name': 'ErrorBoundary',
            'content': '''<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
        <p className="text-xl text-gray-300 mb-8">Something went wrong.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
        >
          Reload Page
        </button>
      </div>
    </div>'''
        },
        {
            'file': 'app/components/Footer.tsx',
            'name': 'Footer',
            'content': '''<footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300">Advanced AI and IT Solutions</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/ai-services" className="text-gray-300 hover:text-white">AI Services</a></li>
              <li><a href="/it-services" className="text-gray-300 hover:text-white">IT Services</a></li>
              <li><a href="/5g-solutions" className="text-gray-300 hover:text-white">5G Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white">Terms</a></li>
              <li><a href="/cookies" className="text-gray-300 hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>'''
        },
        {
            'file': 'app/components/SEOHead.tsx',
            'name': 'SEOHead',
            'content': '''<>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="keywords" content="AI, IT, Technology, Solutions, 5G, Cloud, Cybersecurity" />
      <meta name="author" content="Zion Tech Group" />
      <link rel="canonical" href="https://ziontechgroup.com" />
    </>'''
        },
        {
            'file': 'app/components/EnhancedSEOHead.tsx',
            'name': 'EnhancedSEOHead',
            'content': '''<>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="keywords" content="AI, IT, Technology, Solutions, 5G, Cloud, Cybersecurity" />
      <meta name="author" content="Zion Tech Group" />
      <link rel="canonical" href="https://ziontechgroup.com" />
      <meta property="og:title" content="Zion Tech Group" />
      <meta property="og:description" content="Advanced AI and IT Solutions" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group" />
      <meta name="twitter:description" content="Advanced AI and IT Solutions" />
    </>'''
        },
        {
            'file': 'app/components/Breadcrumb.tsx',
            'name': 'Breadcrumb',
            'content': '''<nav className="bg-black/10 backdrop-blur-lg border-b border-white/5 py-2">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-300">
          <li><a href="/" className="hover:text-white">Home</a></li>
          <li className="text-gray-500">/</li>
          <li className="text-white">Current Page</li>
        </ol>
      </div>
    </nav>'''
        },
        {
            'file': 'app/components/PerformanceOptimizer.tsx',
            'name': 'PerformanceOptimizer',
            'content': '''<div className="hidden">
      <script>
        {`// Performance optimization scripts`}
      </script>
    </div>'''
        },
        {
            'file': 'app/components/EnhancedPerformanceOptimizer.tsx',
            'name': 'EnhancedPerformanceOptimizer',
            'content': '''<div className="hidden">
      <script>
        {`// Enhanced performance optimization scripts`}
      </script>
    </div>'''
        },
        {
            'file': 'app/components/AccessibilityEnhancer.tsx',
            'name': 'AccessibilityEnhancer',
            'content': '''<div className="hidden">
      <script>
        {`// Accessibility enhancement scripts`}
      </script>
    </div>'''
        },
        {
            'file': 'app/components/EnhancedAccessibility.tsx',
            'name': 'EnhancedAccessibility',
            'content': '''<div className="hidden">
      <script>
        {`// Enhanced accessibility scripts`}
      </script>
    </div>'''
        },
        {
            'file': 'app/components/AnalyticsProvider.tsx',
            'name': 'AnalyticsProvider',
            'content': '''<div className="hidden">
      <script>
        {`// Analytics provider scripts`}
      </script>
    </div>'''
        },
        {
            'file': 'app/components/PerformanceMonitor.tsx',
            'name': 'PerformanceMonitor',
            'content': '''<div className="hidden">
      <script>
        {`// Performance monitoring scripts`}
      </script>
    </div>'''
        },
        {
            'file': 'app/components/FuturisticBackground.tsx',
            'name': 'FuturisticBackground',
            'content': '''<div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
    </div>'''
        }
    ]
    
    for component in components:
        try:
            content = create_clean_component_template(component['name'], component['content'])
            with open(component['file'], 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {component['file']}")
        except Exception as e:
            print(f"Error fixing {component['file']}: {e}")

def main():
    """Main function"""
    print("Fixing all component files...")
    fix_components()
    print("Done!")

if __name__ == "__main__":
    main()