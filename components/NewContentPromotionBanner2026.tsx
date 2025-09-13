import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner2026() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              NEW CONTENT 2026
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI Solutions
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Available Now
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover cutting-edge AI automation solutions and quantum computing breakthroughs. 
              Transform your business with technology that's years ahead of the competition.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                🚀 Advanced Automation
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                ⚡ Quantum Computing
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                🧠 Neural Networks
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                🔒 Enhanced Security
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-2026-advanced-automation-solutions"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">🚀</span>
                Explore AI Solutions
              </Link>
              <Link 
                href="/quantum-ai-breakthrough-2026"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg text-lg font-semibold hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="mr-2">⚡</span>
                Quantum Technology
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10,000x</div>
                <div className="text-blue-100">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-100">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100">Continuous Operation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400/30 rounded-full animate-bounce"></div>
      <div className="absolute top-8 right-8 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-1/4 w-4 h-4 bg-purple-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-8 right-1/4 w-10 h-10 bg-indigo-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
    </div>
  );
}