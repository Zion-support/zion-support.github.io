import React from 'react';
import Link from 'next/link';

const SpaceExplorationBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                🚀 BREAKTHROUGH 2026
              </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                SPACE AI REVOLUTION
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              AI Space Exploration
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Revolution 2026
              </span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed">
              Discover how AI is transforming space exploration with autonomous spacecraft, 
              quantum computing, and Mars colonization strategies. Join the future of 
              interplanetary missions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">99.7%</div>
                <div className="text-sm text-gray-300">Mission Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400">$2.5B</div>
                <div className="text-sm text-gray-300">Mars Colony Project</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/blog/ai-space-exploration-revolution-2026"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Explore Space AI Guide
              </Link>
              <Link 
                href="/case-studies/ai-space-mission-mega-success-2026"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                📊 View Success Story
              </Link>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="space-y-6">
            {/* Space Mission Calculator Preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                🧮 AI Mission Calculator
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Mission Distance:</span>
                  <span className="text-yellow-400">1.5 AU (Mars)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>AI Level:</span>
                  <span className="text-green-400">Quantum Enhanced</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Success Rate:</span>
                  <span className="text-blue-400">99.7%</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span>Cost Savings:</span>
                  <span className="text-yellow-400">$1.7B</span>
                </div>
              </div>
              <Link 
                href="#calculator"
                className="block mt-4 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Try Calculator
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🤖</div>
                <div className="text-sm font-semibold">Autonomous Systems</div>
                <div className="text-xs text-gray-300">Self-repairing spacecraft</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="text-sm font-semibold">Quantum Computing</div>
                <div className="text-xs text-gray-300">Ultra-fast calculations</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏠</div>
                <div className="text-sm font-semibold">Mars Colonization</div>
                <div className="text-xs text-gray-300">AI-powered habitats</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🔬</div>
                <div className="text-sm font-semibold">Deep Space Research</div>
                <div className="text-xs text-gray-300">Exoplanet discovery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse delay-2000"></div>
    </div>
  );
};

export default SpaceExplorationBanner2026;