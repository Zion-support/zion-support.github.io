import React from 'react';
import { Link } from 'react-router-dom';
const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-indigo-500/30"></div>
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                New Content Available
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Revolutionary Tech Insights
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  2025 Edition
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
                Discover the latest breakthroughs in AI, quantum computing, neural interfaces, 
                and synthetic intelligence. Our expert researchers share cutting-edge insights 
                that are shaping the future of technology.
              </p>
              {/* Feature Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-white/80 text-sm">New Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-white/80 text-sm">Expert Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-white/80 text-sm">Fresh Content</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-white/80 text-sm">Possibilities</div>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore All Articles
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/blog/ai-powered-autonomous-business-operations-2025"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  Read Latest
                </Link>
              </div>
            </div>
            {/* Featured Articles Preview */}
            <div className="flex-1 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Featured Articles</h3>
                <div className="space-y-3">
                  <Link 
                    to="/blog/ai-powered-autonomous-business-operations-2025"
                    className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="text-white font-medium text-sm">AI-Powered Autonomous Business Operations</div>
                    <div className="text-white/70 text-xs mt-1">12 min read • AI Innovation</div>
                  </Link>
                  <Link 
                    to="/blog/quantum-computing-revolution-2025"
                    className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="text-white font-medium text-sm">Quantum Computing Revolution</div>
                    <div className="text-white/70 text-xs mt-1">15 min read • Quantum Computing</div>
                  </Link>
                  <Link 
                    to="/blog/neural-interface-technology-2025"
                    className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="text-white font-medium text-sm">Neural Interface Technology</div>
                    <div className="text-white/70 text-xs mt-1">10 min read • Neural Interfaces</div>
                  </Link>
                  <Link 
                    to="/blog/synthetic-intelligence-2025"
                    className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="text-white font-medium text-sm">Synthetic Intelligence</div>
                    <div className="text-white/70 text-xs mt-1">14 min read • Synthetic Intelligence</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewContentPromotionBanner2025;