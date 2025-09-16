import React from 'react';

const UltimateTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Ultimate Technology Showcase 2025</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies that are reshaping our world
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              The world's first truly conscious artificial intelligence
            </p>
            <a href="/pages/NextGenAIRevolution2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Revolution →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Solve impossible problems with quantum supremacy
            </p>
            <a href="/pages/QuantumComputingBreakthrough2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Connect your mind directly to machines
            </p>
            <a href="/pages/NeuralInterfaceRevolution2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Mind →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Live Now</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Beta Testing</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Coming Soon</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
            Experience the Future Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2025;