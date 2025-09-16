import React from 'react';

const UltimateContentBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 text-white py-8 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2026
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ultimate Tech Breakthrough 2026
          </h2>
          <p className="text-xl opacity-90 mb-6 max-w-4xl mx-auto">
            The most revolutionary technological advances that will reshape our world in 2026. 
            From conscious AI systems to quantum reality engines, experience the impossible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/UltimateTechBreakthrough2026" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🌟 Explore Ultimate →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2026" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              ⚡ View Showcase →
            </a>
            <a 
              href="/pages/NextGenInnovationHub2026" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🧠 Innovation Hub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2026;