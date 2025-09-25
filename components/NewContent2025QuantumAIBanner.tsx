import React from 'react';
import Link from 'next/link';

const NewContent2025QuantumAIBanner = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚡ QUANTUM AI 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Quantum AI Business Transformation
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore how quantum AI is revolutionizing business operations in 2025. 
            Learn about quantum computing applications, implementation strategies, and breakthrough results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum Machine Learning</h3>
            <p className="text-gray-300 mb-4">
              Leverage quantum superposition for parallel processing and exponential speedup
            </p>
            <div className="text-2xl font-bold text-cyan-400">1000x Faster</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-bold mb-3">Quantum Cryptography</h3>
            <p className="text-gray-300 mb-4">
              Unbreakable security with quantum key distribution and post-quantum cryptography
            </p>
            <div className="text-2xl font-bold text-green-400">Ultimate Security</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Quantum Optimization</h3>
            <p className="text-gray-300 mb-4">
              Solve complex optimization problems in seconds that would take years classically
            </p>
            <div className="text-2xl font-bold text-purple-400">Real-time Solutions</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Industry Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">400%</div>
              <div className="text-gray-300">Trading ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1000x</div>
              <div className="text-gray-300">Drug Discovery Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300">Waste Reduction</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/quantum-ai-2025-business-transformation-ultimate-guide"
              className="bg-white text-cyan-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Read Complete Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-900 transition-colors text-lg"
            >
              Start Quantum AI Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025QuantumAIBanner;