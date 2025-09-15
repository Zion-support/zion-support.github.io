import React from 'react';

const InteractiveTechShowcase: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Interactive Tech Showcase</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">AI Solutions</h4>
          <p>Interactive AI demonstrations and tools</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Quantum Computing</h4>
          <p>Quantum computing simulations and demos</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;