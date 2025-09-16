import React from 'react';

const UltimateTechRevolutionBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-cyan-500/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Main Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🚀 ULTIMATE TECH REVOLUTION • JANUARY 2025
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Ultimate Tech Revolution 2025
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology showcase featuring AI consciousness, quantum computing breakthroughs, and neural interface innovations
          </p>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">AI Consciousness</h3>
              <p className="text-sm opacity-80">Next-generation artificial intelligence with self-awareness capabilities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-semibold mb-2">Quantum Breakthrough</h3>
              <p className="text-sm opacity-80">Revolutionary quantum computing that solves impossible problems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-3xl mb-3">🧬</div>
              <h3 className="text-lg font-semibold mb-2">Neural Interface</h3>
              <p className="text-sm opacity-80">Direct brain-computer integration for seamless interaction</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105">
              🌟 Explore Revolution →
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              📺 Watch Demo
            </button>
            <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105">
              🚀 Get Started
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
              <div className="text-sm opacity-80">Revolutionary Features</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">99.9%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">24/7</div>
              <div className="text-sm opacity-80">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">10x</div>
              <div className="text-sm opacity-80">Performance Boost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechRevolutionBanner2025;