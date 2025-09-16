import React from 'react';

const RevolutionaryContentBanner2028: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-8 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 REVOLUTIONARY BREAKTHROUGH • JANUARY 2028
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 Revolutionary Technology Showcase 2028
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-6">
            Experience the most advanced technological innovations that will reshape our world in 2028
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/RevolutionaryTechShowcase2028" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse"
            >
              🌟 Explore 2028 Showcase →
            </a>
            <a 
              href="/pages/UltimateTechBreakthrough2028" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse"
            >
              ⚡ Ultimate Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2027" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
            >
              🔮 2027 Showcase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2028;