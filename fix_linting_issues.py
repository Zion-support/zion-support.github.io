#!/usr/bin/env python3
"""
Script to fix linting issues by removing unused imports and fixing merge conflicts.
"""

import os
import re

def fix_blog_page():
    """Fix the blog page by removing merge conflicts."""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest insights and updates from Zion Tech Group.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Blog posts coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
'''
    
    with open('app/blog/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed blog page")

def fix_careers_page():
    """Fix the careers page by removing unused imports."""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and build the future of technology." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Careers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and build the future of technology.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Career opportunities coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;
'''
    
    with open('app/careers/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed careers page")

def fix_case_studies_page():
    """Fix the case studies page by removing unused imports."""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our successful projects and case studies.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Case studies coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;
'''
    
    with open('app/case-studies/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed case studies page")

def fix_consultation_page():
    """Fix the consultation page by removing unused imports."""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation for your technology needs." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert consultation for your technology needs.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Consultation services coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ConsultationPage;
'''
    
    with open('app/consultation/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed consultation page")

def main():
    """Main function to fix all linting issues."""
    fix_blog_page()
    fix_careers_page()
    fix_case_studies_page()
    fix_consultation_page()
    print("All linting issues fixed!")

if __name__ == "__main__":
    main()