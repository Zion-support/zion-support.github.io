import React from 'react';
import Link from 'next/link';

export default function ContentShowcase2025() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            🎯 FEATURED CONTENT SHOWCASE 2025
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI transformation content, 
            featuring breakthrough case studies, implementation guides, and cutting-edge insights.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Blog Posts Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">📝</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Blog Posts</h3>
                <p className="text-gray-600">Latest insights & trends</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/blog/ai-2025-revolutionary-automation-breakthrough"
                className="block p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-l-4 border-red-500 hover:from-red-100 hover:to-pink-100 transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">NEW</span>
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">BREAKTHROUGH</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  AI 2025 Revolutionary Automation Breakthrough
                </h4>
                <p className="text-sm text-gray-600">
                  99.7% accuracy, 10,000x faster processing
                </p>
              </Link>
              
              <Link 
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="block p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">FEATURED</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Enterprise Automation Revolution
                </h4>
                <p className="text-sm text-gray-600">
                  Transform your business operations
                </p>
              </Link>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                View All Blog Posts
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Case Studies Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Case Studies</h3>
                <p className="text-gray-600">Real success stories</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/case-studies/enterprise-ai-transformation-2025-mega-success"
                className="block p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500 hover:from-green-100 hover:to-emerald-100 transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">MEGA</span>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">15,000% ROI</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Enterprise AI Transformation Mega Success
                </h4>
                <p className="text-sm text-gray-600">
                  Fortune 500 company achieves unprecedented results
                </p>
              </Link>
              
              <Link 
                href="/case-studies/ai-2025-global-transformation-breakthrough"
                className="block p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">GLOBAL</span>
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">10,000% ROI</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Global Transformation Breakthrough
                </h4>
                <p className="text-sm text-gray-600">
                  Worldwide implementation success story
                </p>
              </Link>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/case-studies"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
              >
                View All Case Studies
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">📚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Resources</h3>
                <p className="text-gray-600">Implementation guides</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/resources/ai-2025-ultimate-implementation-guide"
                className="block p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500 hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">ULTIMATE</span>
                  <span className="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-bold">ROADMAP</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  AI 2025 Ultimate Implementation Guide
                </h4>
                <p className="text-sm text-gray-600">
                  Complete roadmap to AI transformation success
                </p>
              </Link>
              
              <Link 
                href="/resources/ai-2025-ultimate-implementation-toolkit"
                className="block p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-500 hover:from-orange-100 hover:to-red-100 transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">TOOLKIT</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Ultimate Implementation Toolkit
                </h4>
                <p className="text-sm text-gray-600">
                  Everything you need to get started
                </p>
              </Link>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/resources"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
              >
                View All Resources
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Content Impact Statistics</h3>
            <p className="text-blue-200">Real results from our comprehensive AI content library</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-200">Articles & Guides</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50K+</div>
              <div className="text-blue-200">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">15,000%</div>
              <div className="text-blue-200">Max ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.7%</div>
              <div className="text-blue-200">Implementation Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses already using our AI transformation content 
              to achieve unprecedented growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Expert Consultation
              </Link>
              
              <Link 
                href="/tools/ai-2025-roi-calculator"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}