import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 mb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-8 left-8 w-24 h-24 bg-indigo-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-16 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 right-1/4 w-18 h-18 bg-cyan-500/30 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE TECH REVOLUTION • JANUARY 2025
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Technology Revolution 2025
          </h2>
          
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            The most comprehensive technology revolution in human history. 
            Experience the convergence of AI, quantum computing, neural interfaces, and interdimensional technology.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-lg font-bold mb-2">AI Revolution</h3>
              <p className="text-purple-100 text-xs mb-3">
                Next-generation artificial intelligence with consciousness
              </p>
              <a href="/pages/RevolutionaryTechBreakthrough2025" className="text-purple-300 hover:text-white font-semibold text-xs">
                Explore AI →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum Computing</h3>
              <p className="text-cyan-100 text-xs mb-3">
                Revolutionary quantum processors with consciousness
              </p>
              <a href="/pages/UltimateTechRevolution2025" className="text-cyan-300 hover:text-white font-semibold text-xs">
                Go Quantum →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">🧬</div>
              <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
              <p className="text-emerald-100 text-xs mb-3">
                Direct brain-computer interfaces for seamless integration
              </p>
              <a href="/pages/RevolutionaryTechBreakthrough2025" className="text-emerald-300 hover:text-white font-semibold text-xs">
                Connect Mind →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-4 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">🌌</div>
              <h3 className="text-lg font-bold mb-2">Interdimensional Tech</h3>
              <p className="text-orange-100 text-xs mb-3">
                Computing across multiple dimensions and realities
              </p>
              <a href="/pages/UltimateTechRevolution2025" className="text-orange-300 hover:text-white font-semibold text-xs">
                Enter Dimensions →
              </a>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="/pages/UltimateTechRevolution2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Join the Revolution
            </a>
            <a href="/pages/AISolutionsComprehensive2025" className="border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold">
              Get AI Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;