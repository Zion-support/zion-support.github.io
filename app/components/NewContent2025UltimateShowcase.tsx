import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ultimate AI Content Collection 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of AI guides, case studies, and resources. 
            Everything you need to master AI transformation in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Blog Posts */}
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4">Latest AI Guides</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/blog/ai-2025-enterprise-automation-mastery-complete-guide" className="hover:text-yellow-300 transition-colors">
                  → Enterprise Automation Mastery
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-2025-data-analytics-revolution-enterprise-intelligence" className="hover:text-yellow-300 transition-colors">
                  → Data Analytics Revolution
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-2025-digital-transformation-complete-enterprise-guide" className="hover:text-yellow-300 transition-colors">
                  → Digital Transformation Guide
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/blog" 
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                View All Guides
              </Link>
            </div>
          </div>

          {/* Case Studies */}
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/case-studies/fortune-500-manufacturing-ai-transformation" className="hover:text-yellow-300 transition-colors">
                  → 500% ROI Manufacturing Case
                </Link>
              </li>
              <li>
                <Link href="/case-studies/global-financial-services-ai-revolution" className="hover:text-yellow-300 transition-colors">
                  → 600% ROI Financial Services
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/case-studies" 
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                View All Cases
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <div className="text-4xl mb-4">📥</div>
            <h3 className="text-2xl font-bold mb-4">Free Resources</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/resources/ai-implementation-checklist-2025" className="hover:text-yellow-300 transition-colors">
                  → AI Implementation Checklist
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-yellow-300 transition-colors">
                  → ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-yellow-300 transition-colors">
                  → Strategy Templates
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/resources" 
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Download Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
            <div className="text-lg">New Articles</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-lg">Case Studies</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
            <div className="text-lg">Free Resources</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500%+</div>
            <div className="text-lg">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;