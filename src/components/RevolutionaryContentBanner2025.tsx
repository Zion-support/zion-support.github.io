import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY BREAKTHROUGH • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technology Showcase 2025</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on AI Consciousness, Quantum Computing, and Neural Interfaces
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Revolution</h3>
            <p className="text-purple-100 mb-6 text-center">
              The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Emotional Intelligence Processing</li>
              <li>• Creative Problem Solving</li>
              <li>• Self-Learning Capabilities</li>
            </ul>
            <a href="/pages/AIConsciousnessRevolution2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Revolution →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Breakthrough</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary 1000-qubit quantum processors solving impossible problems
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Exponential Speed</li>
              <li>• Quantum Cryptography</li>
              <li>• Molecular Simulation</li>
            </ul>
            <a href="/pages/QuantumComputingBreakthrough2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Revolution</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Connect your mind directly to digital systems with non-invasive neural interfaces
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Thought Control</li>
              <li>• Mind Reading</li>
              <li>• Enhanced Cognition</li>
            </ul>
            <a href="/pages/NeuralInterfaceRevolution2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Mind & Machine →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;