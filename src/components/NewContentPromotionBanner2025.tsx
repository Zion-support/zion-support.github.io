import React from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Next-Gen Innovation Hub 2025</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            Discover and explore the most revolutionary technologies shaping humanity's future in our comprehensive innovation hub
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Advanced artificial intelligence systems and machine learning algorithms
            </p>
            <div className="flex flex-wrap gap-1 mb-4 justify-center">
              <span className="px-2 py-1 bg-emerald-500/30 rounded-full text-xs">Conscious AI</span>
              <span className="px-2 py-1 bg-emerald-500/30 rounded-full text-xs">Quantum ML</span>
            </div>
            <a href="/pages/NextGenInnovationHub2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Explore AI →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-teal-100 mb-4 text-center text-sm">
              Revolutionary quantum computing technologies and applications
            </p>
            <div className="flex flex-wrap gap-1 mb-4 justify-center">
              <span className="px-2 py-1 bg-teal-500/30 rounded-full text-xs">Quantum Processors</span>
              <span className="px-2 py-1 bg-teal-500/30 rounded-full text-xs">Quantum Crypto</span>
            </div>
            <a href="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-teal-600 py-2 rounded-lg hover:bg-teal-50 transition-colors font-semibold text-center text-sm">
              Explore Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Interfaces</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Direct brain-computer interfaces and neural enhancement technologies
            </p>
            <div className="flex flex-wrap gap-1 mb-4 justify-center">
              <span className="px-2 py-1 bg-cyan-500/30 rounded-full text-xs">Brain-Computer</span>
              <span className="px-2 py-1 bg-cyan-500/30 rounded-full text-xs">Thought Control</span>
            </div>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Explore Neural →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;