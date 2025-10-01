import React from 'react';

const October2025QuantumEdgeBanner: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-sm border-y border-purple-500/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border-2 border-purple-400/50 backdrop-blur-lg animate-pulse">
            <span className="text-2xl">⚛️</span>
            <span className="text-purple-300 font-extrabold text-xl tracking-wider uppercase">
              🚨 BREAKING: October 2025 Quantum Revolution
            </span>
            <span className="text-2xl">⚛️</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Edge Intelligence
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              The Sub-Microsecond Revolution
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-purple-200 font-bold mb-4">
            10,000x Faster • 99.997% Accuracy • $87 Billion Proven Success
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Fortune 50 financial institution achieves unprecedented breakthrough with quantum-powered 
            edge computing—sub-microsecond fraud detection protecting $87 billion annually.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-6 border border-purple-400/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-purple-300 mb-2">&lt;1μs</div>
            <div className="text-sm text-purple-200 font-semibold">Decision Latency</div>
            <div className="text-xs text-gray-400 mt-1">Sub-microsecond speed</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-6 border border-indigo-400/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-indigo-300 mb-2">99.997%</div>
            <div className="text-sm text-indigo-200 font-semibold">Detection Accuracy</div>
            <div className="text-xs text-gray-400 mt-1">Quantum precision</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-400/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-blue-300 mb-2">$87B</div>
            <div className="text-sm text-blue-200 font-semibold">Value Protected</div>
            <div className="text-xs text-gray-400 mt-1">Annual fraud prevention</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-cyan-300 mb-2">10,000x</div>
            <div className="text-sm text-cyan-200 font-semibold">Performance Gain</div>
            <div className="text-xs text-gray-400 mt-1">vs classical systems</div>
          </div>
        </div>

        {/* Quantum Capabilities */}
        <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30 mb-10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            ⚛️ Quantum Edge Capabilities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🌌</div>
              <h4 className="text-lg font-bold text-purple-300 mb-2">Quantum Superposition</h4>
              <p className="text-sm text-gray-300">Simultaneous analysis of multiple fraud scenarios in parallel</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔗</div>
              <h4 className="text-lg font-bold text-indigo-300 mb-2">Quantum Entanglement</h4>
              <p className="text-sm text-gray-300">Instant state synchronization across 50,000 global edge nodes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔐</div>
              <h4 className="text-lg font-bold text-blue-300 mb-2">Quantum Security</h4>
              <p className="text-sm text-gray-300">Unbreakable encryption with quantum key distribution</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/blog/ai-2025-october-quantum-edge-intelligence-revolution"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            <span className="text-lg">📖 Read Technical Article</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <a
            href="/case-studies/ai-2025-oct-global-finance-quantum-edge-transformation-87-billion-success"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/50 transform hover:-translate-y-1"
          >
            <span className="text-lg">💰 $87B Success Story</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <a
            href="/services/quantum-edge-intelligence-consulting"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            <span className="text-lg">⚡ Get Started Now</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-3">Trusted by Fortune 50 enterprises worldwide</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span className="bg-white/5 px-4 py-2 rounded-full">50,000 Edge Nodes Deployed</span>
            <span className="bg-white/5 px-4 py-2 rounded-full">2.3B Daily Transactions</span>
            <span className="bg-white/5 px-4 py-2 rounded-full">180 Countries</span>
            <span className="bg-white/5 px-4 py-2 rounded-full">99.9999% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025QuantumEdgeBanner;
