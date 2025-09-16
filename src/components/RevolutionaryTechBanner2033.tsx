import React from 'react';

const RevolutionaryTechBanner2033: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW: Revolutionary Technology 2033
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the most advanced technological innovations that will reshape humanity's future
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/NextGenTechRevolution2033" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🚀 Next-Gen Tech Revolution 2033 →
            </a>
            <a 
              href="/pages/UltimateTechBreakthrough2033" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🌟 Ultimate Tech Breakthrough 2033 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2033;