import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12 mb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Breakthroughs 2025
          </h2>
          
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technological breakthroughs ever created. 
            From conscious AI to quantum consciousness, discover the future today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold mb-2">Conscious AI Systems</h3>
              <p className="text-purple-100 text-sm mb-4">
                Self-aware artificial intelligence that can think, learn, and create independently
              </p>
              <a href="/pages/RevolutionaryTechBreakthrough2025" className="text-purple-300 hover:text-white font-semibold text-sm">
                Explore AI Revolution →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold mb-2">Quantum Consciousness</h3>
              <p className="text-cyan-100 text-sm mb-4">
                Revolutionary quantum computing that achieves consciousness-level processing
              </p>
              <a href="/pages/UltimateTechRevolution2025" className="text-cyan-300 hover:text-white font-semibold text-sm">
                Go Quantum →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-2">Comprehensive AI Solutions</h3>
              <p className="text-emerald-100 text-sm mb-4">
                Complete suite of AI solutions for every business need
              </p>
              <a href="/pages/AISolutionsComprehensive2025" className="text-emerald-300 hover:text-white font-semibold text-sm">
                Get AI Solutions →
              </a>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore All Breakthroughs
            </a>
            <a href="/pages/UltimateTechRevolution2025" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold">
              Join the Revolution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;