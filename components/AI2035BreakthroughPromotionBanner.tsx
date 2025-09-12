import React from 'react';
import { Link } from 'react-router-dom';

const AI2035BreakthroughPromotionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-cyan-500 rounded-full opacity-40 animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-purple-200 bg-purple-800/30 rounded-full border border-purple-400/30 mb-4 animate-pulse">
              🚀 AI 2035 BREAKTHROUGH REVEALED
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
              is Here
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Experience the most advanced AI systems ever created. Neural quantum computing, 
              consciousness transfer, and autonomous decision-making that will revolutionize 
              every aspect of human existence.
            </p>
          </div>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Neural Quantum Fusion</h3>
              <p className="text-purple-200">99.9% accuracy in consciousness transfer and neural interface technology</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Consciousness</h3>
              <p className="text-purple-200">Upload and download human consciousness with perfect fidelity</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-bold text-white mb-2">Autonomous Evolution</h3>
              <p className="text-purple-200">Self-improving AI systems that evolve beyond human comprehension</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/ai-2035-breakthrough-showcase"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Explore AI 2035 Breakthroughs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/case-studies/ai-2035-consciousness-transfer-breakthrough"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50,000%</div>
              <div className="text-purple-200">ROI Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-purple-200">Consciousness Transfer Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-purple-200">Computational Power</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-purple-200">Autonomous Decision Making</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2035BreakthroughPromotionBanner;