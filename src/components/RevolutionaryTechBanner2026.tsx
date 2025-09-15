import React from 'react';

const RevolutionaryTechBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 to-fuchsia-900/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 text-center">
        {/* Header */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="text-4xl animate-pulse">🚀</span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            REVOLUTIONARY TECH 2026
          </h2>
          <span className="text-4xl animate-pulse">🚀</span>
        </div>

        {/* Description */}
        <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
          Witness the convergence of consciousness-level AI, quantum-neural interfaces, and synthetic intelligence 
          that will redefine the boundaries of human-machine collaboration and technological advancement.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold mb-2">Synthetic Intelligence</h3>
            <p className="text-sm opacity-80">Consciousness-level AI systems with synthetic intelligence capabilities</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-lg font-semibold mb-2">Quantum-Neural Fusion</h3>
            <p className="text-sm opacity-80">Revolutionary quantum computing meets neural interface technology</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">🔮</div>
            <h3 className="text-lg font-semibold mb-2">Future Revolution</h3>
            <p className="text-sm opacity-80">Breakthrough technologies that will reshape our world</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="text-lg font-semibold mb-2">Ultimate Showcase</h3>
            <p className="text-sm opacity-80">Complete technology innovation showcase for 2026</p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/pages/SyntheticIntelligence2026" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">🧠</span>
            Explore Synthetic Intelligence
          </a>
          
          <a 
            href="/pages/UltimateTechShowcase2026" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">🌟</span>
            Ultimate Tech Showcase
          </a>
          
          <a 
            href="/pages/FutureTechRevolution2026" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">🔮</span>
            Future Revolution
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-sm opacity-80">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">2026</div>
            <div className="text-sm opacity-80">Future-Ready Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-sm opacity-80">Unlimited Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2026;