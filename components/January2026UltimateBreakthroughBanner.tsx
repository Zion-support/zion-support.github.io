import React from 'react';
import Link from 'next/link';

export default function January2026UltimateBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 mb-8 animate-pulse">
            <span className="text-blue-300 font-bold text-lg tracking-wider uppercase">
              🚀 January 2026 Ultimate Breakthrough
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Revolutionary Quantum-Neural Fusion
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-semibold max-w-4xl mx-auto">
            100,000x Performance Improvement • $75B ROI Potential • Universal Intelligence
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-300 mb-1">100,000x</div>
              <div className="text-xs text-blue-200">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-300 mb-1">$75B</div>
              <div className="text-xs text-purple-200">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
              <div className="text-2xl font-extrabold text-pink-300 mb-1">99.99999%</div>
              <div className="text-xs text-pink-200">Universal Intelligence</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-300 mb-1">0.000001s</div>
              <div className="text-xs text-indigo-200">Response Time</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/ai-2026-january-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Read Breakthrough Details →
            </Link>
            <Link 
              href="/case-studies/ai-2026-january-ultimate-breakthrough-75-billion-success"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View $75B Success Story →
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Your Transformation
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-300">
            <p>✨ First successful quantum-neural fusion • 🧠 Universal consciousness integration • 🚀 Revolutionary enterprise transformation</p>
          </div>
        </div>
      </div>
    </section>
  );
}