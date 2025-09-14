import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🚀 NEW CONTENT 2025</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Now Available
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in autonomous AI, quantum computing, and enterprise transformation. 
            Get exclusive access to our newest case studies, implementation guides, and success stories.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/blog/ai-2025-revolutionary-autonomous-business-transformation"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Read Latest Guide
            </Link>
            <Link
              href="/case-studies/fortune-500-autonomous-ai-transformation-2025-ultimate-success"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Success Story
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-green-400">NEW BLOG POST</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI 2025: Revolutionary Autonomous Business Transformation</h3>
            <p className="text-gray-300 mb-4">Complete guide to autonomous AI systems transforming business operations in 2025.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">12 min read</span>
              <Link 
                href="/blog/ai-2025-revolutionary-autonomous-business-transformation"
                className="text-purple-400 hover:text-purple-300 font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-blue-400">NEW CASE STUDY</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Fortune 500 Autonomous AI Transformation</h3>
            <p className="text-gray-300 mb-4">How a Fortune 500 company achieved 600% ROI and $2.8B in business value.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">15 min read</span>
              <Link 
                href="/case-studies/fortune-500-autonomous-ai-transformation-2025-ultimate-success"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Featured Resource */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-purple-400">NEW RESOURCE</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Implementation Master Guide 2025</h3>
            <p className="text-gray-300 mb-4">Comprehensive framework for implementing autonomous AI systems in your organization.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">25 min read</span>
              <Link 
                href="/resources/ai-implementation-master-guide-2025"
                className="text-purple-400 hover:text-purple-300 font-semibold"
              >
                Download →
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">600%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">$2.8B</div>
            <div className="text-sm text-gray-300">Business Value</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">99.7%</div>
            <div className="text-sm text-gray-300">System Uptime</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-sm text-gray-300">Projects</div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Join thousands of organizations already transforming with our AI solutions
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcaseBanner;