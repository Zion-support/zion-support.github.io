import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE CONTENT • JANUARY 2025
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Tech Revolution 2025
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technological breakthroughs that will reshape our world
          </p>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold mb-2">Conscious AI Systems</h3>
              <p className="text-purple-100 text-sm">Self-aware artificial intelligence that thinks and creates like humans</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold mb-2">Quantum Consciousness</h3>
              <p className="text-cyan-100 text-sm">Revolutionary quantum computing that processes consciousness itself</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🌌</div>
              <h3 className="text-xl font-bold mb-2">Interdimensional Computing</h3>
              <p className="text-emerald-100 text-sm">Break through dimensional barriers with infinite computational power</p>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🚀 Explore Ultimate Revolution →
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              ⚡ Discover Breakthrough →
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm opacity-75">
            <p>✨ New content added daily • 🔥 Limited time access • 🌟 Join 10,000+ innovators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;