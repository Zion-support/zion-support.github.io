import React from 'react';

const UltimateTechBanner2033: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2033
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Tech Revolution 2033
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technological advances that will reshape our world in 2033
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2033" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🚀 Explore Ultimate Revolution →
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2033" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              ⚡ Revolutionary Breakthrough →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2033;