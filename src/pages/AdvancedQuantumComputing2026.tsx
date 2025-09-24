import React from 'react';

const AdvancedQuantumComputing2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Advanced Quantum Computing 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary quantum computing solutions that redefine the boundaries of computation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">⚡ Quantum Supremacy</h3>
            <p className="text-gray-200">
              Achieve quantum supremacy with our advanced quantum computing solutions.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">🔮 Quantum Algorithms</h3>
            <p className="text-gray-200">
              Revolutionary quantum algorithms that solve previously impossible problems.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">🌟 Quantum AI</h3>
            <p className="text-gray-200">
              Quantum-enhanced AI systems with unprecedented computational power.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/services"
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Quantum Computing →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvancedQuantumComputing2026;