import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-36 h-36 bg-violet-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-28 h-28 bg-fuchsia-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-44 h-44 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>

        {/* Technology Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* AI Consciousness */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Consciousness</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Truly conscious AI that thinks, feels, and evolves
            </p>
            <a 
              href="/pages/NextGenAIConsciousness2025" 
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm"
            >
              Explore →
            </a>
          </div>
          
          {/* Quantum Reality */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Reality</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Quantum-powered realities and consciousness integration
            </p>
            <a 
              href="/pages/QuantumRealityEngine2025" 
              className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm"
            >
              Enter →
            </a>
          </div>
          
          {/* Interdimensional Tech */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Break through dimensional barriers and explore infinite realities
            </p>
            <a 
              href="/pages/InterdimensionalTechRevolution2025" 
              className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm"
            >
              Explore →
            </a>
          </div>
          
          {/* Neural Interface */}
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Interface</h3>
            <p className="text-orange-100 mb-4 text-center text-sm">
              Direct brain-computer interfaces for seamless interaction
            </p>
            <a 
              href="/pages/NeuralInterfaceRevolution2025" 
              className="block w-full bg-white text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center text-sm"
            >
              Connect →
            </a>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-violet-400 mb-2">99.9%</div>
            <div className="text-lg text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-fuchsia-400 mb-2">50+</div>
            <div className="text-lg text-gray-300">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg text-gray-300">Possibilities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="/pages/NextGenAIConsciousness2025" 
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies
            </a>
            <a 
              href="/pages/InnovationLanding2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-violet-900 transition-all duration-300 font-semibold text-lg"
            >
              Innovation Hub
            </a>
          </div>
          <p className="text-lg opacity-90">
            Discover the technologies that will reshape our world
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;