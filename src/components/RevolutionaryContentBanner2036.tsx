import React from 'react';

const RevolutionaryContentBanner2036: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-8 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2036
          </div>
          <h2 className="text-4xl font-bold mb-4">
            🚀 Revolutionary Content Showcase 2036
          </h2>
          <p className="text-xl text-indigo-200 mb-6 max-w-4xl mx-auto">
            Discover the most advanced technologies that are reshaping the fabric of reality itself. 
            From cosmic consciousness to interdimensional computing, experience the impossible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <a 
              href="/pages/UltimateTechRevolution2036" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400"
            >
              🌌 Ultimate Tech Revolution →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2036" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400"
            >
              ⚡ Revolutionary Showcase →
            </a>
            <a 
              href="/pages/UltimateAIConsciousness2036" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400"
            >
              🧠 AI Consciousness →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2036;