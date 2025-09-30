import React from 'react';
import Link from 'next/link';

export default function QuantumNeuralSuperintelligenceBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              ⚛️ QUANTUM NEURAL SUPERINTELLIGENCE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            The Quantum AI Revolution
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            10,000x Processing • 99.9% Accuracy • $5.8B ROI • Quantum-Enhanced Superintelligence
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">10,000x</div>
              <div className="text-xs text-blue-300">Processing Power</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">99.9%</div>
              <div className="text-xs text-indigo-300">Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">$5.8B</div>
              <div className="text-xs text-purple-300">Value Generated</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">450%</div>
              <div className="text-xs text-cyan-300">ROI</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-quantum-neural-superintelligence-breakthrough" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore Quantum AI →
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-superintelligence-5-billion-success" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Read $5.8B Success →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Quantum Journey
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum Processing</h3>
              <p className="text-gray-300 text-sm">
                1,000 quantum qubits processing 2^1000 states simultaneously with 99.99% fidelity.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Neural Superintelligence</h3>
              <p className="text-gray-300 text-sm">
                50-layer quantum neural networks with 10^15 connections and autonomous evolution.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Intelligence</h3>
              <p className="text-gray-300 text-sm">
                98% accuracy in 12-month predictions with quantum-enhanced scenario modeling.
              </p>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              🚀 Quantum AI Across Industries
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">🏭</div>
                <div className="text-white font-semibold">Manufacturing</div>
                <div className="text-blue-300">99.99% Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-white font-semibold">Healthcare</div>
                <div className="text-indigo-300">99.9% Diagnosis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💰</div>
                <div className="text-white font-semibold">Finance</div>
                <div className="text-purple-300">99.99% Trading</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔬</div>
                <div className="text-white font-semibold">Research</div>
                <div className="text-cyan-300">10,000x Speed</div>
              </div>
            </div>
          </div>

          {/* Latest Content Promo */}
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ⚛️ BREAKING: Quantum Neural Superintelligence Now Live!
            </h3>
            <p className="text-blue-200 text-lg mb-4">
              Quantum Processing • Neural Superintelligence • $5.8B Success • Complete Implementation Guide
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300">Quantum AI</span>
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300">10,000x Speed</span>
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">$5.8B ROI</span>
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300">99.9% Accuracy</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog/ai-2026-quantum-neural-superintelligence-breakthrough"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Quantum AI Guide →
              </Link>
              <Link
                href="/case-studies/ai-2026-quantum-neural-superintelligence-5-billion-success"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
              >
                $5.8B Success Story →
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-400 hover:to-cyan-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Start Quantum Implementation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}