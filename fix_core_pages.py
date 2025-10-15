#!/usr/bin/env python3
"""
Script to fix core pages that are causing build failures.
"""

import os

def fix_about_page():
    """Fix the about page."""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission to provide cutting-edge AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We are a leading provider of AI solutions, cybersecurity, and IT services, 
              dedicated to transforming businesses with cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}'''
    
    with open('/workspace/app/about/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

def fix_contact_page():
    """Fix the contact page."""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our team of experts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}'''
    
    with open('/workspace/app/contact/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

def fix_not_found_page():
    """Fix the not found page."""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">Page not found</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}'''
    
    with open('/workspace/app/not-found/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Fix all core pages."""
    print("Fixing core pages...")
    
    fix_about_page()
    print("Fixed about page")
    
    fix_contact_page()
    print("Fixed contact page")
    
    fix_not_found_page()
    print("Fixed not found page")
    
    print("Core pages fixed successfully!")

if __name__ == "__main__":
    main()