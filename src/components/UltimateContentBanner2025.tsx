import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most advanced and revolutionary content that will define the future of technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🚀</div>
            <h3 className="text-lg font-bold mb-3 text-center">Space Technology</h3>
            <p className="text-indigo-100 mb-4 text-sm text-center">
              Revolutionary space exploration and colonization technologies
            </p>
            <a href="/pages/NextGenInnovationHub2025" className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-sm">
              Explore Space →
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-3 text-center">Biotechnology</h3>
            <p className="text-purple-100 mb-4 text-sm text-center">
              Advanced biotechnology for human enhancement and medical breakthroughs
            </p>
            <a href="/pages/NextGenInnovationHub2025" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Explore Bio →
            </a>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-4 text-sm text-center">
              Breakthrough quantum computing that processes consciousness and reality itself
            </p>
            <a href="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Go Quantum →
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌌</div>
            <h3 className="text-lg font-bold mb-3 text-center">Interdimensional Tech</h3>
            <p className="text-emerald-100 mb-4 text-sm text-center">
              Technology that transcends dimensional boundaries for infinite processing power
            </p>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Explore Dimensions →
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Live Innovation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Real-time Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Future Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;