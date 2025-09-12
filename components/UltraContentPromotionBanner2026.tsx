import React from 'react';
import Link from 'next/link';

export default function UltraContentPromotionBanner2026() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading with gradient text */}
          <div className="inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY AI 2026 CONTENT LAUNCH
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover the Future of AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore cutting-edge AI technologies, real-world success stories, and comprehensive implementation guides. 
            Everything you need to transform your business with AI in 2026.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-semibold mb-2">Technology Showcase</h3>
              <p className="text-sm text-gray-300">Neural interfaces, quantum computing, and next-gen AI architectures</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Success Stories</h3>
              <p className="text-sm text-gray-300">Real case studies with 300% efficiency gains and $2.3B savings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">Implementation Toolkit</h3>
              <p className="text-sm text-gray-300">Complete guides, templates, and best practices for AI success</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-technology-showcase" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore AI 2026 Technologies
            </Link>
            <Link 
              href="/case-studies/ai-2026-global-manufacturing-transformation-success" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
            >
              View Success Stories
            </Link>
            <Link 
              href="/resources/ai-2026-implementation-toolkit" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Implementation Toolkit
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">50+</div>
              <div className="text-sm text-gray-300">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">25+</div>
              <div className="text-sm text-gray-300">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">15+</div>
              <div className="text-sm text-gray-300">Implementation Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-300">Free Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}