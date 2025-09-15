import React from 'react';
import Link from 'next/link';

const QuantumAI2026BusinessRevolutionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
      {/* Quantum-inspired background animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-400 rounded-full opacity-10 animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-400 rounded-full opacity-12 animate-pulse"></div>
        {/* Quantum entanglement lines */}
        <div className="absolute top-1/2 left-1/4 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent opacity-25 animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Quantum badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">⚛️ QUANTUM AI REVOLUTION 2026</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Quantum AI 2026:
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Business Revolution
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your enterprise with quantum-neural intelligence. Experience 1000x faster optimization, real-time financial modeling, and revolutionary business capabilities.
          </p>

          {/* Quantum advantages */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">1000x Faster</h3>
              <p className="text-sm opacity-80">Quantum processing speeds for complex optimization</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Real-Time</h3>
              <p className="text-sm opacity-80">Instantaneous financial modeling and risk assessment</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-semibold mb-2">Drug Discovery</h3>
              <p className="text-sm opacity-80">Revolutionary molecular simulation capabilities</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold mb-2">Supply Chain</h3>
              <p className="text-sm opacity-80">Quantum-optimized global logistics networks</p>
            </div>
          </div>

          {/* Success metrics */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-10 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Proven Quantum AI Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">340%</div>
                <div className="text-sm opacity-80">Portfolio Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$2.3B</div>
                <div className="text-sm opacity-80">Additional Annual Returns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
                <div className="text-sm opacity-80">Computation Time Reduction</div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/quantum-ai-2026-business-revolution-ultimate-guide"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Read Complete Guide →
            </Link>
            <Link
              href="/services/quantum-computing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors"
            >
              Start Quantum Transformation
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Featured Content</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              <span>Ultimate Guide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2026BusinessRevolutionBanner;