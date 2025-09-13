import React from 'react';
import Link from 'next/link';

const QuantumHeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-70"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-cyan-400/20"></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-lg mb-8 animate-pulse shadow-lg">
            ⚛️ QUANTUM REVOLUTION 2025
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Computing
            </span>
            <br />
            <span className="text-white">
              Breakthrough
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary quantum computing breakthroughs of 2025 that are reshaping AI capabilities, 
            enabling unprecedented computational power, and solving previously impossible problems.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10,000x</div>
              <div className="text-gray-300 text-sm">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">5,000%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-indigo-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Organizations</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="/blog/ai-2025-quantum-computing-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read Quantum Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-quantum-manufacturing-transformation"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          
          {/* Featured content preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                  NEW
                </span>
                <span className="text-cyan-400 text-sm">Blog Post</span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                Quantum Computing Breakthrough
              </h3>
              <p className="text-gray-300 text-sm">
                Revolutionary advances in quantum computing that are transforming AI capabilities...
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                  10,000% ROI
                </span>
                <span className="text-cyan-400 text-sm">Case Study</span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                Manufacturing Transformation
              </h3>
              <p className="text-gray-300 text-sm">
                How quantum computing delivered unprecedented results in manufacturing...
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                  GUIDE
                </span>
                <span className="text-cyan-400 text-sm">Implementation</span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                Quantum Roadmap
              </h3>
              <p className="text-gray-300 text-sm">
                Complete guide to implementing quantum computing solutions...
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default QuantumHeroSection;