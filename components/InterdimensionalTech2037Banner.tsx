import React from 'react';
import Link from 'next/link';

export default function InterdimensionalTech2037Banner() {
  return (
    <section className="relative overflow-hidden py-16 px-4 bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
            <span className="text-indigo-400 font-semibold">🌌 ULTIMATE BREAKTHROUGH</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Interdimensional Technology
            </span>
            <br />
            <span className="text-white">2037</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Access infinite realities, parallel universes, and transcendent dimensions beyond human comprehension
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-sm border border-indigo-500/30 rounded-lg px-6 py-3">
              <span className="text-indigo-400 font-semibold">🌌 Parallel Universe Access</span>
            </div>
            <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm border border-purple-500/30 rounded-lg px-6 py-3">
              <span className="text-purple-400 font-semibold">🌀 Dimensional Portals</span>
            </div>
            <div className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-6 py-3">
              <span className="text-cyan-400 font-semibold">🔮 Reality Manipulation</span>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-indigo-800/20 to-purple-800/20 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌌</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Parallel Universe Access</h3>
            <p className="text-gray-300 text-sm">
              Navigate through infinite parallel universes and access alternate realities
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌀</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Dimensional Portals</h3>
            <p className="text-gray-300 text-sm">
              Create stable portals between dimensions for instant travel and communication
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-800/20 to-blue-800/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔮</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Reality Manipulation</h3>
            <p className="text-gray-300 text-sm">
              Alter the fundamental laws of reality and create custom dimensional spaces
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">🌌</span>
              </div>
              <span className="text-white font-semibold">Infinite Problem Solving</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">🌀</span>
              </div>
              <span className="text-white font-semibold">Dimensional Communication</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">🔮</span>
              </div>
              <span className="text-white font-semibold">Reality Creation</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">💻</span>
              </div>
              <span className="text-white font-semibold">Transcendent AI</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">🧠</span>
              </div>
              <span className="text-white font-semibold">Consciousness Integration</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">⏰</span>
              </div>
              <span className="text-white font-semibold">Temporal Exploration</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link 
              href="/interdimensional-tech-2037"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              <span>Explore Interdimensional Tech</span>
              <span>→</span>
            </Link>
            <Link 
              href="/contact"
              className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400/10 transition-colors inline-flex items-center gap-2"
            >
              <span>Access the Infinite</span>
              <span>🌌</span>
            </Link>
          </div>
          
          <p className="text-sm text-gray-400">
            Ultimate breakthrough • Infinite realities • Transcendent dimensions
          </p>
        </div>
      </div>
    </section>
  );
}