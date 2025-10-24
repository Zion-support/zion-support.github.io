<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
=======
'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page: React.FC = () => {
  // Set document title for SEO
  React.useEffect(() => {
    document.title = 'Legal Document Manager - Zion Tech Group';
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-0ea5

export default function Page() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Technology Solutions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Leading provider of professional technology solutions and services for modern businesses.
              We specialize in AI, 5G, cybersecurity, and digital transformation.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Advanced technology implementation</li>
              <li>Scalable and secure solutions</li>
              <li>24/7 support and maintenance</li>
              <li>Custom solutions tailored to your needs</li>
              <li>Proven track record of success</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance</h3>
                <p className="text-gray-600">
                  Optimized solutions designed for maximum performance and efficiency.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reliability</h3>
                <p className="text-gray-600">
                  Built with enterprise-grade reliability and security standards.
                </p>
              </div>
=======
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Legal Document Manager
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Professional legal document manager services and solutions from Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Intelligence</h3>
              <p className="text-gray-300 mb-4">Advanced AI algorithms that provide intelligent insights and recommendations.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Smart recommendations
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Predictive analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Automated insights
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Real-time analysis
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Analytics</h3>
              <p className="text-gray-300 mb-4">Comprehensive analytics dashboard with real-time data visualization.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Real-time monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Custom dashboards
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Data visualization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Performance metrics
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Precision Targeting</h3>
              <p className="text-gray-300 mb-4">Target the right audience with AI-driven precision and accuracy.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Audience segmentation
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Behavioral analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Conversion optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  ROI tracking
                </li>
              </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-0ea5
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
<<<<<<< HEAD
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
=======
              Get Started
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-0ea5
