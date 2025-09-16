import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-cyan-500/30 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover our groundbreaking new content featuring AI Consciousness, Quantum Computing, and Neural Interfaces
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness Revolution</h3>
            <p className="text-purple-100 mb-6 text-center">
              Experience the most advanced AI consciousness technology that's reshaping how we interact with artificial intelligence
            </p>
            <div className="text-center">
              <a href="/pages/AIConsciousnessRevolution2025" className="inline-block bg-white text-purple-600 py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Explore Consciousness →
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Breakthrough</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Discover the most powerful quantum computing technology that's solving impossible problems in seconds
            </p>
            <div className="text-center">
              <a href="/pages/QuantumComputingBreakthrough2025" className="inline-block bg-white text-cyan-600 py-3 px-6 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Go Quantum →
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Future</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Bridge the gap between mind and machine with direct neural interfaces and brain-computer integration
            </p>
            <div className="text-center">
              <a href="/pages/NeuralInterfaceFuture" className="inline-block bg-white text-emerald-600 py-3 px-6 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Connect Mind & Machine →
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-lg opacity-80">New Technologies</div>
            <div className="text-sm text-purple-200">Revolutionary innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-80">Success Rate</div>
            <div className="text-sm text-cyan-200">Proven reliability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">1M+</div>
            <div className="text-lg opacity-80">Users Impacted</div>
            <div className="text-sm text-emerald-200">Global reach</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-lg opacity-80">Support</div>
            <div className="text-sm text-pink-200">Always available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;