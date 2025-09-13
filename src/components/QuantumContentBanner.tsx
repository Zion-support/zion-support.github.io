import React from 'react';
import Link from 'next/link';

const QuantumContentBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-6 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-6 left-12 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 QUANTUM BREAKTHROUGH 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Quantum Computing Content
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the future of computing with our groundbreaking quantum content series
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Featured Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                BREAKTHROUGH
              </span>
              <span className="text-cyan-400 text-sm">Blog Post</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
              AI 2025 Quantum Computing Breakthrough
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Discover the revolutionary quantum computing breakthroughs of 2025 that are reshaping AI capabilities and enabling unprecedented computational power.
            </p>
            <Link 
              href="/blog/ai-2025-quantum-computing-breakthrough"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Featured Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                10,000% ROI
              </span>
              <span className="text-cyan-400 text-sm">Case Study</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
              Quantum Manufacturing Transformation
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Learn how QuantumManufacturing Inc. achieved 10,000% ROI and 99.9% efficiency through AI-quantum computing integration.
            </p>
            <Link 
              href="/case-studies/ai-2025-quantum-manufacturing-transformation"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Featured Resource */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                ROADMAP
              </span>
              <span className="text-cyan-400 text-sm">Implementation Guide</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
              Quantum Implementation Roadmap
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Complete guide to implementing quantum computing solutions with proven strategies for achieving maximum ROI and competitive advantage.
            </p>
            <Link 
              href="/resources/ai-2025-quantum-implementation-roadmap"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link 
              href="/quantum-computing-solutions"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Quantum Solutions
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Get Quantum Consultation
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Join 500+ organizations already transforming with quantum computing
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuantumContentBanner;