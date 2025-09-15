import React from 'react';

const RevolutionaryContentShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Revolutionary Content Showcase</h2>
        <p className="text-xl opacity-90">Experience the future of technology</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Synthetic Intelligence</h3>
          <p className="text-purple-100 mb-4">The next evolution of AI</p>
          <a href="/pages/SyntheticIntelligence2026" className="text-white hover:text-purple-300 transition-colors">
            Explore →
          </a>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
          <p className="text-purple-100 mb-4">Direct brain-computer communication</p>
          <a href="/pages/NeuralInterfaceRevolution2025" className="text-white hover:text-purple-300 transition-colors">
            Experience →
          </a>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
          <p className="text-purple-100 mb-4">Revolutionary computing power</p>
          <a href="/pages/QuantumComputingRevolution2026" className="text-white hover:text-purple-300 transition-colors">
            Discover →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;