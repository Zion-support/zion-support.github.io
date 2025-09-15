import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-bounce">
            🚀 BREAKTHROUGH CONTENT 2025 • EXCLUSIVE LAUNCH
          </div>
          <h2 className="text-5xl font-bold mb-4">🌟 Revolutionary Technology Content</h2>
          <p className="text-2xl opacity-95 max-w-5xl mx-auto">
            Experience the future with our groundbreaking new content: Advanced Quantum Computing, Neural Interface Technology, and AI Innovation Guide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 text-center">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Advanced Quantum Computing</h3>
            <p className="text-sm opacity-90 mb-4">
              Experience exponential processing power and quantum supremacy
            </p>
            <a href="/pages/AdvancedQuantumComputing2025" className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Explore Quantum →
            </a>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 text-center">
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Neural Interface Technology</h3>
            <p className="text-sm opacity-90 mb-4">
              Bridge mind and machine with direct brain-computer communication
            </p>
            <a href="/pages/NeuralInterfaceTechnology2025" className="inline-block bg-white text-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Connect Mind & Machine →
            </a>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 text-center">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI Innovation Guide</h3>
            <p className="text-sm opacity-90 mb-4">
              Master AI implementation with our comprehensive innovation guide
            </p>
            <a href="/pages/AIInnovationGuide2025" className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Learn AI Innovation →
            </a>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">All New Content</h3>
            <p className="text-sm opacity-90 mb-4">
              Discover our complete collection of revolutionary technology content
            </p>
            <a href="/pages/NextGenTechShowcase2025" className="inline-block bg-white text-cyan-600 px-6 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Explore All →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/AdvancedQuantumComputing2025" className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              ⚡ Quantum Computing
            </a>
            <a href="/pages/NeuralInterfaceTechnology2025" className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🧠 Neural Interfaces
            </a>
            <a href="/pages/AIInnovationGuide2025" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🤖 AI Innovation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;