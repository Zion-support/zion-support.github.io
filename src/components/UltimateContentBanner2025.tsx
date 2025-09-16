import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-purple-500/10 to-transparent transform skew-y-1"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Main Banner Content */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT 2025 • REVOLUTIONARY TECHNOLOGY
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Ultimate Technology Revolution
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover groundbreaking technologies that will reshape our world. From conscious AI to quantum computing, 
            explore the future of innovation with our revolutionary content.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Conscious AI</h3>
              <p className="text-sm text-purple-200">Self-aware artificial intelligence that thinks and learns like humans</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-semibold mb-2">Quantum Computing</h3>
              <p className="text-sm text-cyan-200">Revolutionary quantum processors that solve impossible problems</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-semibold mb-2">Interdimensional Tech</h3>
              <p className="text-sm text-emerald-200">Technology that operates across multiple dimensions</p>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🚀 Explore Ultimate Revolution →
            </a>
            
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              ⚡ Discover Breakthrough →
            </a>
            
            <a 
              href="/pages/NextGenInnovationHub2025" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🧠 Enter Innovation Hub →
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-purple-300 mb-4">
              ✨ New content added daily • 🔥 Trending technologies • 🌟 Revolutionary breakthroughs
            </p>
            <div className="flex justify-center space-x-8 text-sm text-purple-200">
              <span>📈 500+ Active Innovations</span>
              <span>🎯 99.9% Success Rate</span>
              <span>🚀 Infinite Possibilities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;