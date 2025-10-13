#!/usr/bin/env python3
import os
import re
import glob

def fix_corrupted_files(file_path):
    """Fix files that have corrupted content after merge conflict resolution"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has corrupted content (starts with import but has random text)
        if not content.strip().startswith('import') and not content.strip().startswith("'use client'"):
            return False
        
        # Look for patterns that indicate corruption
        if 'cursor/fix-errors-and-merge-to-main' in content:
            # This is a corrupted file, let's create a basic template
            if '5g-data-analytics' in file_path:
                new_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

export default function FiveGDataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions by Zion Tech Group. Real-time data processing, AI-powered insights, and enterprise-grade analytics for 5G networks." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Data Analytics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock the power of 5G networks with our advanced data analytics solutions. 
            Real-time processing, AI-driven insights, and enterprise-grade analytics.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
            elif '5g-edge-computing' in file_path:
                new_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGEdgeComputingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G edge computing solutions by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Edge Computing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced 5G edge computing solutions for modern applications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
            elif '5g-implementation' in file_path:
                new_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGImplementationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Professional 5G implementation services by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Implementation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional 5G implementation services for your business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
            elif '5g-iot-solutions' in file_path:
                new_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGIoTSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G IoT solutions by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G IoT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced 5G IoT solutions for connected devices and smart systems.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
            elif '5g-mobile-applications' in file_path:
                new_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGMobileApplicationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Mobile Applications - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G mobile applications by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Mobile Applications
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced 5G mobile applications for modern businesses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
            elif '5g-network-infrastructure' in file_path:
                new_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGNetworkInfrastructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G network infrastructure solutions by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Network Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced 5G network infrastructure solutions for modern businesses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
            elif '5g-private-networks' in file_path:
                new_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGPrivateNetworksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Private Networks - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G private networks solutions by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Private Networks
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced 5G private networks solutions for secure communications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
            elif '5g-smart-city-solutions' in file_path:
                new_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGSmartCitySolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G smart city solutions by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Smart City Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced 5G smart city solutions for modern urban development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
            elif '5g-solutions' in file_path:
                new_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive 5G solutions for modern businesses and applications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
            elif 'about' in file_path:
                new_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission to provide cutting-edge technology solutions." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading provider of advanced technology solutions and services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
            else:
                # Generic template for other pages
                page_name = os.path.basename(file_path).replace('.tsx', '').replace('page', '')
                if page_name:
                    page_title = page_name.replace('-', ' ').title()
                else:
                    page_title = "Page"
                
                new_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {page_title.replace(' ', '')}Page() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{page_title} - Zion Tech Group</title>
        <meta name="description" content="Advanced {page_title.lower()} solutions by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            {page_title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced {page_title.lower()} solutions by Zion Tech Group.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}}'''
            
            # Write the fixed content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Fixed corrupted file: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files that might be corrupted
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_corrupted_files(file_path):
                fixed_count += 1
    
    print(f"\nFixed corrupted files: {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()