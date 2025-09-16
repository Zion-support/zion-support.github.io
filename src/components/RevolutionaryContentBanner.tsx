import React from 'react';

const RevolutionaryContentBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY BREAKTHROUGH • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Revolution 2025</h3>
            <p className="text-purple-100 mb-6 text-center">
              Discover how artificial intelligence is reshaping industries and creating new opportunities in 2025
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Autonomous AI Agents</li>
              <li>• Edge AI Computing</li>
              <li>• Generative AI 2.0</li>
            </ul>
            <a href="/pages/AIRevolution2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Revolution →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Experience the future of computing with quantum technology that's solving impossible problems
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Exponential Speed</li>
              <li>• Quantum Cryptography</li>
              <li>• Molecular Simulation</li>
            </ul>
            <a href="/pages/QuantumComputingBreakthrough" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Bridge the gap between mind and machine with direct neural interfaces
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Non-Invasive BCI</li>
              <li>• Thought Control</li>
              <li>• Neural Feedback</li>
            </ul>
            <a href="/pages/NeuralInterfaceFuture" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Mind & Machine →
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/AIRevolution2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content →
            </a>
            <a href="/pages/QuantumComputingBreakthrough" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-colors font-semibold text-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;