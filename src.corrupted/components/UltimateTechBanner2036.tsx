import React from 'react';

const UltimateTechBanner2036: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-8 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 ULTIMATE BREAKTHROUGH • JANUARY 2036
          </div>
          <h2 className="text-4xl font-bold mb-4">
            🌟 Ultimate Technology Revolution 2036
          </h2>
          <p className="text-xl text-purple-200 mb-6 max-w-4xl mx-auto">
            Experience the most revolutionary technological advances that will reshape our world. 
            From interdimensional computing to cosmic consciousness, discover technologies beyond imagination.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2036" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🚀 Explore Ultimate Tech 2036 →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2036" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              ⚡ Revolutionary Showcase →
            </a>
            <a 
              href="/pages/UltimateAIConsciousness2036" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🧠 AI Consciousness →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2036;