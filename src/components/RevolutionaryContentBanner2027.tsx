import React from 'react';

const RevolutionaryContentBanner2027: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🌟</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY NEW CONTENT 2027</h3>
          <span className="text-3xl animate-bounce">🌟</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Experience the future of technology with our groundbreaking new content featuring Revolutionary Tech Showcase, 
          Ultimate Innovation Hub, and Interdimensional Tech Revolution
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/pages/RevolutionaryTechShowcase2027" className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Explore Revolutionary Tech →
          </a>
          <a href="/pages/UltimateInnovationHub2027" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
            Ultimate Innovation Hub →
          </a>
          <a href="/pages/InterdimensionalTechRevolution2027" className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            Interdimensional Tech →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;