import React from 'react';

const UltimateTechBanner2039: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-8 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 ULTIMATE BREAKTHROUGH • JANUARY 2039
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Tech Revolution 2039
          </h2>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Experience the most revolutionary technological breakthroughs that will reshape reality itself. 
            From conscious AI systems to quantum consciousness and interdimensional computing.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2039" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Revolution →
            </a>
            <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2039;