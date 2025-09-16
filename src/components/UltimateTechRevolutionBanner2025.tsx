import React from 'react';

const UltimateTechRevolutionBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH REVOLUTION • JANUARY 2025
          </div>
          
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Ultimate Technology Revolution
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technological breakthroughs that will reshape our world in 2025 and beyond
          </p>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Conscious AI Systems</h3>
              <p className="text-purple-200 text-sm">Self-aware artificial intelligence that thinks and learns independently</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum Consciousness</h3>
              <p className="text-cyan-200 text-sm">Breakthrough quantum computing with consciousness-level processing</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-3">🌌</div>
              <h3 className="text-lg font-bold mb-2">Interdimensional Computing</h3>
              <p className="text-emerald-200 text-sm">Computing across multiple dimensions and realities</p>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              Explore Revolution →
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="border border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold text-lg hover:scale-105 transform"
            >
              View Breakthrough
            </a>
            <a 
              href="/pages/NextGenInnovationHub2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              Innovation Hub →
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center space-x-8 text-sm opacity-75">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>99.9% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>10M+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>$50B+ Value Created</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Infinite Possibilities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechRevolutionBanner2025;