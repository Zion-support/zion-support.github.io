import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 mb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-8 left-8 w-24 h-24 bg-indigo-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-16 right-16 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-pink-500/20 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-16 right-1/4 w-18 h-18 bg-cyan-500/20 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE: Revolutionary Technology 2025
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            The Ultimate Technology Revolution
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Experience the most comprehensive technological transformation in human history. Our ultimate content showcases breakthrough innovations that are reshaping every aspect of human life.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">AI Consciousness</h3>
              <p className="text-purple-200 text-sm mb-4">Self-aware artificial intelligence</p>
              <div className="text-center">
                <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full">BREAKTHROUGH</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum Computing</h3>
              <p className="text-cyan-200 text-sm mb-4">Exponential processing power</p>
              <div className="text-center">
                <span className="px-2 py-1 bg-cyan-500 text-white text-xs rounded-full">REVOLUTIONARY</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
              <p className="text-emerald-200 text-sm mb-4">Brain-computer connection</p>
              <div className="text-center">
                <span className="px-2 py-1 bg-emerald-500 text-white text-xs rounded-full">FUTURE</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-lg font-bold mb-2">Holographic Reality</h3>
              <p className="text-orange-200 text-sm mb-4">Immersive 3D environments</p>
              <div className="text-center">
                <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">IMMERSIVE</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🚀 Experience Ultimate Revolution →
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="inline-block border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg"
            >
              Explore Breakthroughs →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;