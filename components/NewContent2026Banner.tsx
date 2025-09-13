import React from 'react';
import Link from 'next/link';

export default function NewContent2026Banner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-4 left-8 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-8 right-4 w-2 h-2 bg-white rounded-full animate-pulse delay-1500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2026 CONTENT</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2026
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover groundbreaking AI guides, tools, and case studies that will transform your understanding 
            of artificial intelligence and prepare you for the future.
          </p>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold mb-2">Master Guide 2026</h3>
              <p className="text-sm opacity-90 mb-4">
                Complete AI implementation blueprint with quantum-enhanced strategies
              </p>
              <Link
                href="/resources/ai-implementation-master-guide-2026"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                Explore Guide
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">AI Tools Showcase</h3>
              <p className="text-sm opacity-90 mb-4">
                Next-generation AI development tools and platforms
              </p>
              <Link
                href="/ai-tools-showcase-2026"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                View Tools
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Success Stories</h3>
              <p className="text-sm opacity-90 mb-4">
                Real-world case studies with 400% ROI achievements
              </p>
              <Link
                href="/case-studies/ai-transformation-global-retail-giant-2026"
                className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                Read Case Study
              </Link>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore All New Content
            </Link>
            <Link
              href="/blog/ai-2026-revolutionary-breakthroughs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              📖 Read Latest Insights
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm opacity-80">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">400%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2026</div>
              <div className="text-sm opacity-80">Future Ready</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}