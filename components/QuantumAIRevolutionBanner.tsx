import React from 'react';
import Link from 'next/link';

export default function QuantumAIRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
            QUANTUM AI REVOLUTION 2027
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Quantum AI Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience unprecedented AI capabilities with quantum-enhanced processing that delivers 
            1000x performance improvements and solves previously impossible optimization problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Revolutionary Capabilities</h3>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl">⚡</div>
                  <h4 className="text-xl font-bold">Quantum Neural Networks</h4>
                </div>
                <p className="opacity-90 mb-3">
                  Leverage quantum computing power for AI processing that was previously impossible
                </p>
                <div className="text-2xl font-bold text-cyan-300">1000x Faster</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl">🎯</div>
                  <h4 className="text-xl font-bold">Real-time Optimization</h4>
                </div>
                <p className="opacity-90 mb-3">
                  Solve complex optimization problems in milliseconds with quantum algorithms
                </p>
                <div className="text-2xl font-bold text-blue-300">99.7% Accuracy</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl">🌱</div>
                  <h4 className="text-xl font-bold">Energy Efficient</h4>
                </div>
                <p className="opacity-90 mb-3">
                  Achieve massive performance gains while reducing energy consumption by 90%
                </p>
                <div className="text-2xl font-bold text-green-300">90% Less Power</div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Performance Metrics</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1000x</div>
                <div className="text-lg opacity-90">Performance Improvement</div>
                <div className="text-sm opacity-75">vs Traditional AI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">0.001s</div>
                <div className="text-lg opacity-90">Response Time</div>
                <div className="text-sm opacity-75">Real-time Processing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-lg opacity-90">Accuracy Rate</div>
                <div className="text-sm opacity-75">Across All Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-lg opacity-90">Scalability</div>
                <div className="text-sm opacity-75">Unlimited Processing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/services/ai-quantum-computing"
              className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-300 hover:to-blue-300 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Quantum AI
            </Link>
            <Link
              href="/blog/ai-quantum-computing-2026"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all"
            >
              Read Technical Guide
            </Link>
          </div>
          <p className="text-sm opacity-75">
            Join the quantum AI revolution - Limited availability for 2027 implementations
          </p>
        </div>
      </div>
    </div>
  );
}