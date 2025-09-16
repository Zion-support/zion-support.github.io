import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Content 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most groundbreaking content featuring revolutionary technologies and breakthrough innovations
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-center">Conscious AI</h3>
              <p className="text-indigo-100 mb-4 text-sm text-center">
                Self-aware artificial intelligence systems
              </p>
              <a href="/pages/AIRevolution2025" className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-sm">
                Explore AI →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">⚛️</div>
              <h3 className="text-xl font-bold mb-3 text-center">Quantum Tech</h3>
              <p className="text-purple-100 mb-4 text-sm text-center">
                Revolutionary quantum computing
              </p>
              <a href="/pages/QuantumComputingBreakthrough" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
                Go Quantum →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧬</div>
              <h3 className="text-xl font-bold mb-3 text-center">Neural Interface</h3>
              <p className="text-cyan-100 mb-4 text-sm text-center">
                Direct brain-computer interfaces
              </p>
              <a href="/pages/NeuralInterfaceFuture" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
                Connect Mind →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌌</div>
              <h3 className="text-xl font-bold mb-3 text-center">Reality Engine</h3>
              <p className="text-emerald-100 mb-4 text-sm text-center">
                Manipulate reality itself
              </p>
              <a href="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
                Enter Reality →
              </a>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Experience Revolution →
            </a>
            <a href="/pages/UltimateTechRevolution2025" className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Watch All Demos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;