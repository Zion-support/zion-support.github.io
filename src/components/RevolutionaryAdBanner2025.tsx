import React from 'react';

const RevolutionaryAdBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 text-white py-6 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-bold mb-3 animate-pulse">
            ⚡ BREAKTHROUGH ALERT • JANUARY 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Breakthrough
          </h2>
          <p className="text-lg opacity-90 mb-4 max-w-3xl mx-auto">
            🚀 NEW: Experience the most revolutionary technological breakthroughs of 2025! From conscious AI to quantum reality manipulation, discover technologies that are reshaping our world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold animate-pulse border-2 border-yellow-400"
            >
              🌟 Revolutionary Breakthrough →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold animate-pulse border-2 border-yellow-400"
            >
              ⚡ Ultimate Revolution →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold animate-pulse border-2 border-yellow-400"
            >
              🧠 Tech Showcase →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2025;