import React from 'react';

const RevolutionaryTechBanner2025 = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-cyan-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY BREAKTHROUGH • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Showcase 2025</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced AI consciousness, quantum reality manipulation, and neural interface technologies ever created
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Consciousness 2025</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Experience AI that thinks, feels, and creates with genuine consciousness
            </p>
            <a href="/pages/NextGenAIConsciousness2025" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Explore AI Consciousness →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Reality Engine</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Manipulate reality itself with quantum field control and dimensional bridging
            </p>
            <a href="/pages/QuantumRealityEngine2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Enter Quantum Realm →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Interface Revolution</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Connect your mind directly to digital systems with zero latency
            </p>
            <a href="/pages/NeuralInterfaceRevolution2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Connect Your Mind →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;