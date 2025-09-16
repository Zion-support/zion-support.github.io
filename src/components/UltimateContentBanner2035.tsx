import React from 'react';

const UltimateContentBanner2035: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE BREAKTHROUGH • JANUARY 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            🌟 Ultimate Tech Breakthrough 2035
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            The most significant technological advancement in human history - where science fiction becomes reality
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2038" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2035" 
              className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2035;