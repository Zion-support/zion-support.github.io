import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughAnnouncementBanner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/20 border border-red-500/30 mb-8 animate-pulse">
            <span className="text-red-400 font-bold text-sm uppercase tracking-wide">
              🚀 BREAKTHROUGH ANNOUNCEMENT
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary AI technology delivering unprecedented <span className="text-yellow-400 font-bold text-2xl">5,000% ROI</span> through 
            quantum-enhanced neural networks and transcendent intelligence capabilities.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-announcement"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </Link>
            <Link 
              href="/case-studies/ai-2025-ultimate-breakthrough-success"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              View Success Stories
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>⚡ Limited time offer • 🎯 12-week implementation • 💎 Enterprise-grade security</p>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
    </div>
  );
}