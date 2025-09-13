import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-red-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-400/20 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-red-500/20 border border-yellow-500/30 mb-8">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide animate-pulse">
              🚀 BREAKTHROUGH ANNOUNCEMENT
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough
          </h2>

          {/* Subheading */}
          <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            Revolutionary 5,000% ROI Transformation
          </h3>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary AI breakthrough in history. Our synthetic intelligence 
            platform delivers unprecedented 5,000% ROI through quantum computing fusion, autonomous 
            operations mastery, and transcendent business transformation.
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">5,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Scalability</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-announcement"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold text-lg rounded-lg hover:from-yellow-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover the Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-ultimate-breakthrough-success"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              View Success Stories
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>✨ Limited time offer • 🚀 90-day implementation • 💰 5,000% ROI guaranteed</p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-2xl animate-bounce delay-1000">⚛️</div>
      <div className="absolute top-40 right-16 text-2xl animate-bounce delay-2000">🧠</div>
      <div className="absolute bottom-20 left-1/4 text-2xl animate-bounce delay-500">🤖</div>
      <div className="absolute bottom-32 right-20 text-2xl animate-bounce delay-1500">🚀</div>
    </div>
  );
}