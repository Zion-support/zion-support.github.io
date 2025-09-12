import React from 'react';
import Link from 'next/link';

export default function EnhancedContentPromotionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT - JANUARY 2025</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            🎉 Revolutionary AI Content Just Released!
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-6xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI technology, quantum computing, and enterprise transformation. 
            Get exclusive access to implementation frameworks, success stories, and cutting-edge insights that 
            are reshaping industries in 2025.
          </p>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Advanced AI Agents</h3>
              <p className="text-sm opacity-90">Autonomous business operations with 10,000x performance improvements</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Quantum AI Breakthrough</h3>
              <p className="text-sm opacity-90">Revolutionary quantum computing meets artificial intelligence</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold mb-2">$5.2B Success Story</h3>
              <p className="text-sm opacity-90">FinTech unicorn transformation through strategic AI implementation</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore All New Content
            </Link>
            <Link
              href="/blog/ai-2025-advanced-ai-agents"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              Read AI Agents Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-fintech-unicorn-transformation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              View Success Story
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">50+</div>
              <div className="text-sm opacity-80">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">25+</div>
              <div className="text-sm opacity-80">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-80">Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-80">Free Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}