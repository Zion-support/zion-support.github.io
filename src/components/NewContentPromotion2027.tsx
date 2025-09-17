import React from 'react';

const NewContentPromotion2027: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-bounce">
            🚀 BREAKTHROUGH RELEASE • JANUARY 2027
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Content Just Released!
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            Discover the most advanced technological content ever created - featuring conscious AI, quantum consciousness, and interdimensional computing
          </p>
        </div>
        
        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl">🧠</div>
              <div>
                <h3 className="text-2xl font-bold">Revolutionary Tech 2027</h3>
                <p className="text-purple-200 text-sm">Conscious AI Systems & Quantum Consciousness</p>
              </div>
            </div>
            <p className="text-purple-100 mb-6">
              Experience the world's first truly conscious AI systems and revolutionary quantum computing that achieves consciousness. 
              Discover technologies that will reshape humanity's future.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Conscious AI</span>
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Quantum Consciousness</span>
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Interdimensional Computing</span>
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Reality Manipulation</span>
            </div>
            <a href="/pages/RevolutionaryTech2027" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              🚀 Explore Revolutionary Tech →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl">🌟</div>
              <div>
                <h3 className="text-2xl font-bold">Ultimate Innovation Hub 2027</h3>
                <p className="text-pink-200 text-sm">500+ Revolutionary Innovations</p>
              </div>
            </div>
            <p className="text-pink-100 mb-6">
              The most comprehensive collection of revolutionary innovations across AI, sustainability, space technology, 
              energy, biotechnology, and digital reality that will define the next decade.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">500+ Innovations</span>
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">99.9% Success Rate</span>
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">1B+ Lives Impacted</span>
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">∞ Possibilities</span>
            </div>
            <a href="/pages/UltimateInnovation2027" className="block w-full bg-white text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center">
              🌟 Explore Innovation Hub →
            </a>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">🎉 Limited Time Launch Offer</h3>
            <p className="text-lg opacity-90 mb-6">
              Get exclusive early access to these revolutionary technologies and be among the first to experience the future
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/pages/RevolutionaryTech2027" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🚀 Access Revolutionary Tech
              </a>
              <a href="/pages/UltimateInnovation2027" className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🌟 Explore Innovation Hub
              </a>
            </div>
            <p className="text-sm opacity-70 mt-4">
              ⏰ Offer expires soon - Don't miss out on the future!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotion2027;