import React from 'react';
import Link from 'next/link';

export default function UltimateContentRevolutionBanner2025() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-pink-600/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-6 backdrop-blur-sm">
            <span className="text-lg font-bold">🌟 ULTIMATE CONTENT REVOLUTION 2025</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            🚀 The Most Comprehensive AI Content Library Ever Created
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover 100+ breakthrough articles, 50+ success stories, and 25+ implementation frameworks 
            that are transforming businesses worldwide. Join 500,000+ professionals already achieving 
            unprecedented results with our revolutionary AI content.
          </p>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-15 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-lg mb-2">Advanced Automation</h3>
              <p className="text-sm opacity-90">Master AI automation techniques delivering 2000%+ ROI</p>
            </div>
            <div className="bg-white bg-opacity-15 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2">Success Stories</h3>
              <p className="text-sm opacity-90">Real-world case studies with 3000%+ ROI results</p>
            </div>
            <div className="bg-white bg-opacity-15 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="font-bold text-lg mb-2">Quantum Computing</h3>
              <p className="text-sm opacity-90">Next-gen quantum solutions and implementations</p>
            </div>
            <div className="bg-white bg-opacity-15 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-lg mb-2">Neural Interfaces</h3>
              <p className="text-sm opacity-90">Breakthrough brain-computer integration tech</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🌟 Explore All Content
            </Link>
            <Link
              href="/blog/ai-2025-advanced-automation-mastery"
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              🤖 Read Automation Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-enterprise-transformation-breakthrough"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🏆 View Success Stories
            </Link>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">500K+</div>
              <div className="text-sm opacity-90">Monthly Readers</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">100+</div>
              <div className="text-sm opacity-90">Breakthrough Articles</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-sm opacity-90">Success Stories</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">4.9/5</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
          </div>

          {/* Urgency Indicator */}
          <div className="inline-flex items-center bg-red-500 bg-opacity-20 rounded-full px-6 py-3">
            <span className="text-lg font-bold">⚡ Limited Time: Early Access to 2026 Content Available Now</span>
          </div>
        </div>
      </div>
    </section>
  );
}