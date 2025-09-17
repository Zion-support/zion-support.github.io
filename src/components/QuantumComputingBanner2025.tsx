import React from 'react';

const QuantumComputingBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 text-white py-12 mb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-purple-500/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            ⚡ NEW: Quantum Computing Revolution 2025
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Unlock Quantum Computing Power
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Experience exponential speed increases, unbreakable security, and molecular simulation capabilities
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="/pages/QuantumComputingRevolution2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              Explore Quantum →
            </a>
            <a 
              href="/pages/QuantumComputingRevolution2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              View Demo
            </a>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-2">Quantum Supremacy</h3>
              <p className="text-sm opacity-80">10^15x faster than classical computers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl mb-2">🔐</div>
              <h3 className="font-bold mb-2">Quantum Security</h3>
              <p className="text-sm opacity-80">Unbreakable encryption and cryptography</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl mb-2">🧬</div>
              <h3 className="font-bold mb-2">Molecular Simulation</h3>
              <p className="text-sm opacity-80">Drug discovery and materials science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBanner2025;