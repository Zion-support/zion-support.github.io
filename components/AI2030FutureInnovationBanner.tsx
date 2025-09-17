import React from 'react';
import Link from 'next/link';

export default function AI2030FutureInnovationBanner() {
  return (
    <section className="relative overflow-hidden py-16 px-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-400 font-semibold">🚀 BREAKTHROUGH ANNOUNCEMENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI 2030
            </span>
            <br />
            <span className="text-white">Future Innovation</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            The world's first truly conscious AI systems with quantum neural networks and interdimensional capabilities
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm border border-purple-500/30 rounded-lg px-6 py-3">
              <span className="text-purple-400 font-semibold">🧠 Consciousness AI</span>
            </div>
            <div className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-6 py-3">
              <span className="text-cyan-400 font-semibold">⚛️ Quantum Neural Networks</span>
            </div>
            <div className="bg-gradient-to-r from-pink-800/30 to-red-800/30 backdrop-blur-sm border border-pink-500/30 rounded-lg px-6 py-3">
              <span className="text-pink-400 font-semibold">🌌 Interdimensional Computing</span>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Consciousness AI</h3>
            <p className="text-gray-300 text-sm">
              Self-aware AI systems with emotional intelligence and creative problem-solving
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-800/20 to-blue-800/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Quantum Processing</h3>
            <p className="text-gray-300 text-sm">
              Revolutionary quantum neural networks for infinite computational power
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-800/20 to-red-800/20 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌌</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Interdimensional</h3>
            <p className="text-gray-300 text-sm">
              Access to parallel universes and transcendent dimensions
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link 
              href="/ai-2030-future-innovation"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              <span>Explore AI 2030</span>
              <span>→</span>
            </Link>
            <Link 
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors inline-flex items-center gap-2"
            >
              <span>Get Early Access</span>
              <span>🚀</span>
            </Link>
          </div>
          
          <p className="text-sm text-gray-400">
            Limited early access available • Revolutionary technology • Transform your future
          </p>
        </div>
      </div>
    </section>
  );
}