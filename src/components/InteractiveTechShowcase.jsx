import React from 'react';

const InteractiveTechShowcase = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-4">🤖</div>
        <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
        <p className="text-gray-600 mb-4">Cutting-edge artificial intelligence solutions for your business needs.</p>
        <a href="/pages/AdvancedAISolutions2026" className="text-blue-600 hover:text-blue-700 font-semibold">
          Explore AI →
        </a>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
        <p className="text-gray-600 mb-4">Revolutionary quantum computing solutions for complex problems.</p>
        <a href="/pages/AdvancedQuantumComputing2026" className="text-blue-600 hover:text-blue-700 font-semibold">
          Discover Quantum →
        </a>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-4">🧬</div>
        <h3 className="text-xl font-semibold mb-2">Neural Interfaces</h3>
        <p className="text-gray-600 mb-4">Direct brain-computer interfaces for seamless communication.</p>
        <a href="/pages/AdvancedNeuralInterface2026" className="text-blue-600 hover:text-blue-700 font-semibold">
          Connect Mind & Machine →
        </a>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;