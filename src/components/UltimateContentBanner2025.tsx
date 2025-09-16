import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Ultimate Content Showcase 2025</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most comprehensive collection of revolutionary technologies that are transforming industries and creating infinite possibilities for the future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🤖</div>
            <h3 className="text-lg font-bold mb-3 text-center">AI Revolution</h3>
            <p className="text-indigo-100 mb-4 text-center text-sm">
              Autonomous AI agents with consciousness and infinite learning capabilities
            </p>
            <a href="/pages/NextGenAITransformation2025" className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-sm">
              Explore AI →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-3 text-center">Quantum Reality</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Experience infinite parallel realities with quantum-powered processing
            </p>
            <a href="/pages/QuantumRealityEngine2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-3 text-center">Neural Interface</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Direct brain-computer interface for seamless mind-machine communication
            </p>
            <a href="/pages/NeuralInterfaceRevolution2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Connect Mind →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🔥</div>
            <h3 className="text-lg font-bold mb-3 text-center">Future Tech</h3>
            <p className="text-orange-100 mb-4 text-center text-sm">
              Cutting-edge technologies that will define the next decade of innovation
            </p>
            <a href="/pages/InnovationLanding2025" className="block w-full bg-white text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center text-sm">
              See Future →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="/pages/ComprehensiveServices2025" className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Explore All Technologies →
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;