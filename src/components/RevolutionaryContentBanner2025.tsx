import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white py-8 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW: Revolutionary Technology 2025 - Latest Breakthroughs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-4xl mx-auto">
            Discover our revolutionary AI Consciousness Engine, Quantum Reality Engine, and Neural Interface Matrix
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🌟 Explore Revolutionary Tech →
            </a>
            <a 
              href="/pages/AISolutionsComprehensive2025" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg border border-white/30"
            >
              🤖 View AI Solutions →
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;