import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8 mb-8 rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 ULTIMATE: Revolutionary Content 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Ultimate Technology Experience
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-4xl mx-auto">
            Immerse yourself in the most advanced technological innovations that will define the future of humanity
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🚀 Next-Gen Revolution →
            </a>
            <a 
              href="/pages/UltimateTechBreakthrough2025" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ⚡ Ultimate Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-white text-pink-600 px-8 py-3 rounded-lg hover:bg-pink-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🌟 Interactive Showcase →
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-ping delay-3000"></div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;