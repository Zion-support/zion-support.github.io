import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🚀 NEW 2025 CONTENT RELEASE
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-blue-300 bg-clip-text text-transparent">
            Revolutionary AI Content 2025
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Discover cutting-edge AI insights, enterprise transformation guides, and breakthrough technologies that are reshaping the future of business.
          </p>
          
          {/* Content Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-lg font-bold mb-2">Enterprise Transformation</h3>
              <p className="text-sm opacity-80">Complete guide to AI-driven business transformation with 340% ROI case studies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum Computing</h3>
              <p className="text-sm opacity-80">Explore the next frontier of AI and quantum computing breakthroughs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Systems</h3>
              <p className="text-sm opacity-80">Revolutionary autonomous business operations and self-managing systems</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-enterprise-transformation-complete-guide"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Enterprise Guide
            </Link>
            <Link
              href="/blog/ai-2025-quantum-computing-breakthrough"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Explore Quantum AI
            </Link>
            <Link
              href="/case-studies/global-manufacturing-ai-transformation"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Case Study
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">340%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">$2.18B</div>
              <div className="text-sm opacity-80">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">85%</div>
              <div className="text-sm opacity-80">Process Automation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">99.2%</div>
              <div className="text-sm opacity-80">Quality Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;