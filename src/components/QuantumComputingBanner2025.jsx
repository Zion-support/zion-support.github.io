import React from 'react';

const QuantumComputingBanner2025 = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300BCD4" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ NEW: Quantum Computing Breakthroughs 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Quantum Computing Revolution
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the power of quantum computing that's solving impossible problems and unlocking new possibilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🔬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Supremacy</h3>
            <p className="text-cyan-100 text-center text-sm mb-4">
              Achieve computational advantages that classical computers cannot match
            </p>
            <a href="/pages/QuantumComputingBreakthroughs2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Explore →
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🔐</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Cryptography</h3>
            <p className="text-purple-100 text-center text-sm mb-4">
              Unbreakable encryption using quantum principles for ultimate security
            </p>
            <a href="/pages/QuantumComputingBreakthroughs2025" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Discover →
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Simulation</h3>
            <p className="text-emerald-100 text-center text-sm mb-4">
              Simulate complex molecular and quantum systems with unprecedented accuracy
            </p>
            <a href="/pages/QuantumComputingBreakthroughs2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Experience →
            </a>
          </div>
        </div>

        <div className="text-center">
          <a href="/pages/QuantumComputingBreakthroughs2025" className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            ⚡ Explore Quantum Breakthroughs 2025
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBanner2025;