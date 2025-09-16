import React from 'react';

const RevolutionaryAdBanner2035: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 ULTIMATE EVOLUTION • 2036
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            🧬 Ultimate Tech Evolution 2036
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            Witness the next stage of human evolution through advanced technology - where biology and digital consciousness merge
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/pages/UltimateTechEvolution2036" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Begin Evolution →
            </a>
            <a href="/pages/UltimateTechEvolution2036" className="border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg hover:bg-indigo-400/10 transition-all duration-300 font-semibold">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2035;