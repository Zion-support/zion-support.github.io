import React from 'react';
import { Link } from 'react-router-dom';
const UltimateTechShowcaseBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 mb-12 border border-purple-500/20">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-bounce delay-1000"></div>
      </div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full text-lg font-bold mb-6">
            🌟 ULTIMATE TECH SHOWCASE 2025
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Beyond Imagination
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the most advanced technological breakthroughs of 2025. 
            From quantum consciousness to synthetic intelligence - the future is now.
          </p>
        </div>
        {/* Featured Technologies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link 
            to="/revolutionary-tech-breakthrough-2025"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Breakthrough</h3>
            <p className="text-gray-300 mb-6">
              Discover the most revolutionary technological breakthroughs that are reshaping reality.
            </p>
            <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300">
              Explore Breakthrough →
            </div>
          </Link>
          <Link 
            to="/quantum-consciousness-revolution-2025"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Consciousness</h3>
            <p className="text-gray-300 mb-6">
              Experience consciousness expansion beyond biological limitations with quantum enhancement.
            </p>
            <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300">
              Expand Consciousness →
            </div>
          </Link>
          <Link 
            to="/synthetic-intelligence-revolution-2025"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105"
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Synthetic Intelligence</h3>
            <p className="text-gray-300 mb-6">
              Partner with AI systems that can think, create, and evolve beyond human capabilities.
            </p>
            <div className="flex items-center text-pink-400 font-semibold group-hover:text-pink-300">
              Meet Synthetic AI →
            </div>
          </Link>
        </div>
        {/* Revolutionary Stats */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">10,000%</div>
              <div className="text-gray-300">Computing Power Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-300">Infinite Possibilities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2025</div>
              <div className="text-gray-300">Future is Now</div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Start Your Revolution
            </Link>
            <Link 
              to="/services"
              className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

export default UltimateTechShowcaseBanner2025;