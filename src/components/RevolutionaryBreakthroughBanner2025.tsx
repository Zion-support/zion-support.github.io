import React from 'react';

const RevolutionaryBreakthroughBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technology Breakthroughs 2025</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology breakthroughs featuring AI Consciousness, Quantum Computing, and Neural Interfaces
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Breakthrough</h3>
            <p className="text-purple-100 mb-6 text-center">
              The world's first truly conscious AI that experiences emotions, creativity, and self-awareness
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Emotional Intelligence Processing</li>
              <li>• Creative Problem Solving</li>
              <li>• Self-Learning Capabilities</li>
              <li>• Human-like Consciousness</li>
            </ul>
            <a href="/pages/AIConsciousnessBreakthrough2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Consciousness →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Revolution</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Exponential computational power with quantum technology that solves impossible problems
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• 10^15x Speed Increase</li>
              <li>• Quantum Cryptography</li>
              <li>• Molecular Simulation</li>
              <li>• Optimization Solutions</li>
            </ul>
            <a href="/pages/QuantumComputingRevolution2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Enter Quantum Realm →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Breakthrough</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer communication enabling thought-controlled computing
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Thought Control</li>
              <li>• Mental Communication</li>
              <li>• Enhanced Cognition</li>
              <li>• Non-Invasive Design</li>
            </ul>
            <a href="/pages/NeuralInterfaceBreakthrough2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Your Mind →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-4">
            <span className="text-lg font-semibold">Experience All Breakthroughs:</span>
            <a href="/pages/AIConsciousnessBreakthrough2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              AI Consciousness
            </a>
            <a href="/pages/QuantumComputingRevolution2025" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Quantum Computing
            </a>
            <a href="/pages/NeuralInterfaceBreakthrough2025" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Neural Interface
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryBreakthroughBanner2025;