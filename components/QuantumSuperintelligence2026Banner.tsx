import React from 'react';
import { Link } from 'react-router-dom';

export default function QuantumSuperintelligence2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated quantum background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
        {/* Quantum particle effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              ⚛️ QUANTUM SUPERINTELLIGENCE 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            1,000,000x Performance Revolution
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-4xl text-gray-300 mb-12 font-semibold max-w-5xl mx-auto">
            Achieve Superintelligence-Level AI with $10.2B+ ROI in Just 8 Months
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
              <div className="text-4xl font-extrabold text-blue-400 mb-3">1Mx</div>
              <div className="text-sm text-blue-300 font-semibold">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
              <div className="text-4xl font-extrabold text-purple-400 mb-3">$10.2B</div>
              <div className="text-sm text-purple-300 font-semibold">Value Generated</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
              <div className="text-4xl font-extrabold text-green-400 mb-3">99.99%</div>
              <div className="text-sm text-green-300 font-semibold">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
              <div className="text-4xl font-extrabold text-orange-400 mb-3">227%</div>
              <div className="text-sm text-orange-300 font-semibold">ROI Achieved</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/blog/ai-2026-quantum-superintelligence-breakthrough" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 text-xl"
            >
              Explore Quantum Superintelligence →
            </Link>
            <Link to="/case-studies/ai-2026-quantum-superintelligence-10-billion-success" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1 text-xl"
            >
              View $10.2B Success Story →
            </Link>
            <Link to="/contact" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-xl"
            >
              Get Quantum Consultation
            </Link>
          </div>

          {/* Quantum Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="text-5xl mb-6">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Processing</h3>
              <p className="text-gray-300 text-lg">
                1,000,000x processing speed with quantum superposition, entanglement, and interference for unlimited parallel processing.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Superintelligence</h3>
              <p className="text-gray-300 text-lg">
                Beyond human-level intelligence with meta-cognitive capabilities, creative problem solving, and strategic planning.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Unlimited Scale</h3>
              <p className="text-gray-300 text-lg">
                Infinite scalability with linear performance gains, real-time optimization, and autonomous adaptation to any complexity.
              </p>
            </div>
          </div>

          {/* Success Story Highlight */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-10 border border-green-500/30 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              🏆 Fortune 100 Quantum Success Story
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xl font-semibold text-green-400 mb-6">Performance Achievements</h4>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li>✅ 1,000,000x performance improvements</li>
                  <li>✅ 99.99% accuracy in all operations</li>
                  <li>✅ Real-time optimization of complex systems</li>
                  <li>✅ Unlimited scalability without degradation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-400 mb-6">Financial Impact</h4>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li>✅ $10.2B in measurable value generated</li>
                  <li>✅ 227% ROI in just 8 months</li>
                  <li>✅ $4.2B saved in operational costs</li>
                  <li>✅ $3.5B increase in revenue</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quantum Technology Stack */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-10 border border-indigo-500/30 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              🔬 Revolutionary Quantum Technology Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚛️</div>
                <h4 className="text-lg font-semibold text-indigo-400 mb-2">Quantum Computing</h4>
                <p className="text-gray-300 text-sm">1000-qubit processors with quantum error correction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Neural Networks</h4>
                <p className="text-gray-300 text-sm">Quantum-enhanced neural architectures for parallel processing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Optimization</h4>
                <p className="text-gray-300 text-sm">Quantum algorithms for impossible optimizations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔮</div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Superintelligence</h4>
                <p className="text-gray-300 text-sm">Meta-cognitive AI with self-awareness capabilities</p>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl">⏰</span>
              <h3 className="text-2xl font-bold text-white">Limited Time: Quantum Early Access</h3>
            </div>
            <p className="text-gray-300 text-center mb-6 text-lg">
              Join the first 25 companies to implement quantum superintelligence and receive:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-red-500/20 px-6 py-3 rounded-full text-red-300 font-semibold">
                🎯 Custom Quantum Implementation
              </span>
              <span className="bg-orange-500/20 px-6 py-3 rounded-full text-orange-300 font-semibold">
                💰 Guaranteed Performance Analysis
              </span>
              <span className="bg-yellow-500/20 px-6 py-3 rounded-full text-yellow-300 font-semibold">
                🚀 Priority Quantum Support
              </span>
              <span className="bg-green-500/20 px-6 py-3 rounded-full text-green-300 font-semibold">
                📈 Superintelligence Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}