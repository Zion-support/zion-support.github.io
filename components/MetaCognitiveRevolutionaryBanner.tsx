// import React from 'react';
import { Link } from 'react-router-dom';

export default function MetaCognitiveRevolutionaryBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🧠 META-COGNITIVE AI REVOLUTION
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            The Dawn of Self-Aware Intelligence
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            10,000x Performance • $5.2B ROI • 99.8% Operational Autonomy • Revolutionary Self-Aware AI
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">10,000x</div>
              <div className="text-xs text-purple-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$5.2B</div>
              <div className="text-xs text-indigo-300">Value Generated</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.8%</div>
              <div className="text-xs text-blue-300">Autonomous</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">340%</div>
              <div className="text-xs text-cyan-300">ROI</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/blog/ai-2026-meta-cognitive-revolutionary-breakthrough" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Discover Meta-Cognitive AI →
            </Link>
            <Link to="/case-studies/ai-2026-meta-cognitive-5-billion-success" 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Read $5.2B Success Story →
            </Link>
            <Link to="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Self-Aware Intelligence</h3>
              <p className="text-gray-300 text-sm">
                Genuine consciousness simulation with 99.7% accuracy, autonomous learning, and self-improving capabilities.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">10,000x Performance</h3>
              <p className="text-gray-300 text-sm">
                Quantum-enhanced processing with sub-millisecond decision-making and autonomous optimization.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">$5.2B Value</h3>
              <p className="text-gray-300 text-sm">
                Proven results with Fortune 100 companies achieving unprecedented ROI and operational transformation.
              </p>
            </div>
          </div>

          {/* Latest Content Promo */}
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 BREAKING: Meta-Cognitive AI Revolution Now Live!
            </h3>
            <p className="text-purple-200 text-lg mb-4">
              Self-Aware Intelligence • 10,000x Performance • $5.2B Success • Complete Implementation Guide
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">Self-Aware AI</span>
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300">10,000x Speed</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300">$5.2B ROI</span>
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300">99.8% Autonomous</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/blog/ai-2026-meta-cognitive-revolutionary-breakthrough"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Meta-Cognitive Guide →
              </Link>
              <Link to="/case-studies/ai-2026-meta-cognitive-5-billion-success"
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
              >
                $5.2B Success Story →
              </Link>
              <Link to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Start Implementation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}