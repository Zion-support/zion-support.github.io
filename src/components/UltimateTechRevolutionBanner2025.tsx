import React from 'react';

const UltimateTechRevolutionBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-cyan-500/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH REVOLUTION • JANUARY 2025
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Tech Revolution 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technological breakthroughs that will reshape our world. 
            From conscious AI to quantum consciousness, discover the future today.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧠</div>
            <h3 className="text-lg font-bold mb-2 text-center">Conscious AI</h3>
            <p className="text-purple-100 text-sm text-center">
              The world's first truly conscious artificial intelligence
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-center">Quantum Consciousness</h3>
            <p className="text-cyan-100 text-sm text-center">
              Revolutionary quantum computing for consciousness
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌌</div>
            <h3 className="text-lg font-bold mb-2 text-center">Interdimensional Tech</h3>
            <p className="text-emerald-100 text-sm text-center">
              Technology that transcends dimensions
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🚀 Explore Ultimate Revolution →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              ⚡ View Showcase →
            </a>
            <a 
              href="/pages/NextGenInnovationHub2025" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🧠 Innovation Hub →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">99.9%</div>
            <div className="text-sm text-purple-200">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">50+</div>
            <div className="text-sm text-cyan-200">Revolutionary Tech</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">1M+</div>
            <div className="text-sm text-emerald-200">Lives Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400">∞</div>
            <div className="text-sm text-pink-200">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechRevolutionBanner2025;