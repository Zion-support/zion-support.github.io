import React from 'react';

const RevolutionaryBreakthroughBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-pink-500/10 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ BREAKTHROUGH TECHNOLOGY • JANUARY 2026
          </div>
          
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Breakthrough
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Witness the most significant technological breakthrough in human history - 
            technology that transcends the boundaries of what we thought possible
          </p>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="text-lg font-bold mb-2">Neural Interface Revolution</h3>
              <p className="text-indigo-200 text-sm">Direct brain-computer interfaces for seamless consciousness-digital communication</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum Reality Engine</h3>
              <p className="text-purple-200 text-sm">Simulate and manipulate reality itself, creating new universes on demand</p>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="bg-gradient-to-r from-indigo-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              Experience Breakthrough →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="border border-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/20 transition-colors font-semibold text-lg hover:scale-105 transform"
            >
              View Revolution
            </a>
            <a 
              href="/pages/NextGenInnovationHub2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              Innovation Hub →
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center space-x-8 text-sm opacity-75">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>1B+ Users Worldwide</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>10,000x Growth</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Infinite Possibilities</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Future Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryBreakthroughBanner2026;