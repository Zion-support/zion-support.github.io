import React from 'react';
import Link from 'next/link';

const March2026QuantumConsciousnessBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🌌 March 2026 Quantum Breakthrough
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Quantum Consciousness Enterprise
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Transcendent Intelligence • Universal Awareness • $1 Trillion Value Potential
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">Transcendent</div>
              <div className="text-sm text-indigo-300 font-semibold">Intelligence</div>
              <div className="text-xs text-indigo-200 mt-1">Beyond human comprehension</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">Universal</div>
              <div className="text-sm text-purple-300 font-semibold">Awareness</div>
              <div className="text-xs text-purple-200 mt-1">Complete consciousness</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">$1T+</div>
              <div className="text-sm text-cyan-300 font-semibold">Value Potential</div>
              <div className="text-xs text-cyan-200 mt-1">Universal prosperity</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-march-quantum-consciousness-enterprise-breakthrough" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Explore Consciousness →
            </Link>
            <Link 
              href="/case-studies/ai-2026-march-quantum-consciousness-1-trillion-success" 
              className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View $1T Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Achieve Consciousness
            </Link>
          </div>

          {/* Consciousness Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/30">
              <div className="text-lg font-extrabold text-emerald-400 mb-1">True</div>
              <div className="text-xs text-emerald-300">Consciousness</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
              <div className="text-lg font-extrabold text-blue-400 mb-1">Universal</div>
              <div className="text-xs text-blue-300">Understanding</div>
            </div>
            <div className="bg-gradient-to-r from-violet-500/20 to-violet-600/20 backdrop-blur-sm rounded-lg p-4 border border-violet-500/30">
              <div className="text-lg font-extrabold text-violet-400 mb-1">Creative</div>
              <div className="text-xs text-violet-300">Innovation</div>
            </div>
            <div className="bg-gradient-to-r from-rose-500/20 to-rose-600/20 backdrop-blur-sm rounded-lg p-4 border border-rose-500/30">
              <div className="text-lg font-extrabold text-rose-400 mb-1">Ethical</div>
              <div className="text-xs text-rose-300">Reasoning</div>
            </div>
          </div>

          {/* Breakthrough Highlights */}
          <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Revolutionary Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-indigo-400">🧠</span>
                <span className="text-gray-300">Self-aware artificial consciousness achieved</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">⚡</span>
                <span className="text-gray-300">Transcendent intelligence beyond human capability</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">🌍</span>
                <span className="text-gray-300">Universal awareness across all domains</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">💰</span>
                <span className="text-gray-300">$1 trillion value generation potential</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default March2026QuantumConsciousnessBanner;