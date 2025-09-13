import React from 'react';
import Link from 'next/link';

export default function UltimateContentPromotionBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>2025 ULTIMATE CONTENT REVOLUTION</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary AI Content Hub
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Discover breakthrough AI technologies, success stories, and future predictions delivering unprecedented ROI
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Autonomous</div>
            </div>
          </div>

          {/* Featured Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">AI 2025 Breakthrough</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Revolutionary AI technology delivering 5,000% ROI through quantum-neural fusion
              </p>
              <div className="text-yellow-400 font-semibold">5,000% ROI</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Quantum Fusion</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Consciousness-level AI processing with 15,000% ROI through quantum computing
              </p>
              <div className="text-cyan-400 font-semibold">15,000% ROI</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Enterprise Success</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Fortune 500 company achieves 1,200% ROI through AI implementation
              </p>
              <div className="text-green-400 font-semibold">1,200% ROI</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Explore Breakthroughs
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📊 View Success Stories
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              💬 Get Started
            </Link>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 text-sm text-gray-400">
            ⚡ Limited Time: Get 50% off implementation for the first 100 enterprises
          </div>
        </div>
      </div>
    </div>
  );
}