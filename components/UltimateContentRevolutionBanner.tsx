import React from 'react';
import Link from 'next/link';

export default function UltimateContentRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-lg font-bold mb-8 animate-bounce">
            🚀 REVOLUTIONARY BREAKTHROUGH - NEW CONTENT
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI 2025 Ultimate
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Content Revolution
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most comprehensive showcase of revolutionary AI breakthroughs, 
            quantum computing solutions, and autonomous operations delivering unprecedented 
            <span className="text-yellow-400 font-bold text-2xl"> 10,000% ROI</span> across industries.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Computing</h3>
              <p className="text-gray-300 text-sm">Error-corrected quantum computers with infinite processing power</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Autonomous Operations</h3>
              <p className="text-gray-300 text-sm">Fully autonomous business operations with intelligent automation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-xl font-bold text-white mb-2">Future Predictions</h3>
              <p className="text-gray-300 text-sm">Comprehensive AI predictions for 2025-2030 transformation</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/ai-2025-ultimate-content-revolution" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore Revolutionary Content
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-lg"
            >
              🏆 View Success Stories
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10,000%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">10,000x</div>
              <div className="text-gray-300 text-sm">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-gray-300 text-sm">Scalability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}