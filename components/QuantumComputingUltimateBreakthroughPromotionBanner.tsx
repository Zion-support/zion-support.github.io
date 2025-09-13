import React from 'react';
import { Link } from 'react-router-dom';

const QuantumComputingUltimateBreakthroughPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Quantum Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-24 w-24 h-24 bg-indigo-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-cyan-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
        
        {/* Quantum Wave Patterns */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-purple-400 font-medium text-sm">⚡ QUANTUM BREAKTHROUGH</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quantum Computing Ultimate Breakthroughs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Beyond Classical Limits
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary quantum computing breakthroughs that will reshape computation, 
            consciousness, and reality itself. From quantum supremacy to consciousness transfer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/quantum-computing-breakthroughs"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Quantum Breakthroughs
            </Link>
            <Link
              to="/quantum-computing-breakthroughs/demo"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20"
            >
              Live Demo
            </Link>
          </div>

          {/* Quantum Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Supremacy</h3>
              <p className="text-gray-300 text-sm">1000x faster than classical computers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Internet</h3>
              <p className="text-gray-300 text-sm">Ultra-secure quantum communication</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Chemistry</h3>
              <p className="text-gray-300 text-sm">Revolutionary drug discovery</p>
            </div>
          </div>

          {/* Quantum Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">1000x</div>
              <div className="text-gray-400 text-sm">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">99.9%</div>
              <div className="text-gray-400 text-sm">Error Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">∞</div>
              <div className="text-gray-400 text-sm">Possible Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400 text-sm">Continuous Operation</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="p-6 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-white">Exclusive Access:</strong> Get early access to our quantum computing breakthrough research
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quantum-computing-breakthroughs/subscribe"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Subscribe for Updates
              </Link>
              <Link
                to="/quantum-computing-breakthroughs/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Contact Quantum Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingUltimateBreakthroughPromotionBanner;