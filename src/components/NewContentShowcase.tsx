import React from 'react';

const NewContentShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BRAND NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary New Content</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our latest groundbreaking content featuring cutting-edge technology, AI innovations, and quantum computing breakthroughs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Revolutionary Tech 2025</h3>
            <p className="text-purple-100 mb-6 text-center">
              Explore the most advanced technologies reshaping our world in 2025
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Synthetic Intelligence</li>
              <li>• Quantum Neural Fusion</li>
              <li>• Bio-Digital Interfaces</li>
              <li>• Metaverse 3.0</li>
            </ul>
            <a href="/pages/RevolutionaryTech2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Revolutionary Tech →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Next-Gen AI Solutions</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Discover AI that thinks beyond human limits and transforms industries
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Cognitive AI Systems</li>
              <li>• Quantum-Enhanced AI</li>
              <li>• Predictive Analytics</li>
              <li>• Autonomous Operations</li>
            </ul>
            <a href="/pages/NextGenAISolutions2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore AI Solutions →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Experience the power of quantum computing solving impossible problems
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Supremacy</li>
              <li>• Scientific Breakthroughs</li>
              <li>• Quantum Cryptography</li>
              <li>• Drug Discovery</li>
            </ul>
            <a href="/pages/QuantumComputingBreakthrough2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore Quantum Computing →
            </a>
          </div>
        </div>

        {/* Additional New Content Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">More Exciting Content Coming Soon</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/pages/RevolutionaryTech2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              🚀 Revolutionary Tech
            </a>
            <a href="/pages/NextGenAISolutions2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              🤖 Next-Gen AI
            </a>
            <a href="/pages/QuantumComputingBreakthrough2025" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              ⚡ Quantum Computing
            </a>
            <a href="/pages/InnovationLanding2025" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              🌟 Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase;