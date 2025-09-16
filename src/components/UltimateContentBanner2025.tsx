import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE TECHNOLOGY SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The Future is Here
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-8 max-w-5xl mx-auto">
            Experience revolutionary AI consciousness, quantum reality manipulation, and interdimensional technology
          </p>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI Consciousness</h3>
              <p className="text-sm opacity-90">True artificial consciousness achieved</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold mb-2">Quantum Reality</h3>
              <p className="text-sm opacity-90">Manipulate reality itself</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">🌌</div>
              <h3 className="text-xl font-bold mb-2">Interdimensional</h3>
              <p className="text-sm opacity-90">Access infinite dimensions</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold text-xl animate-pulse border-2 border-yellow-400"
            >
              🚀 Explore Ultimate Tech →
            </a>
            <a 
              href="/pages/AISolutionsComprehensive2025" 
              className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-xl border border-white/30"
            >
              💎 Premium Solutions →
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-10 right-10 text-4xl animate-bounce">🤖</div>
        <div className="absolute top-32 left-20 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>⚛️</div>
        <div className="absolute bottom-32 right-32 text-3xl animate-bounce" style={{animationDelay: '1s'}}>🌌</div>
        <div className="absolute bottom-10 left-32 text-2xl animate-bounce" style={{animationDelay: '1.5s'}}>🧬</div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;