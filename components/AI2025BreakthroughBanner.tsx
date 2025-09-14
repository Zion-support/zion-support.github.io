import React from 'react';
import Link from 'next/link';

const AI2025BreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-teal-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-emerald-400/10 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Breakthrough Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-full px-8 py-3 mb-8 font-bold text-lg shadow-2xl">
            🔬 AI 2025 BREAKTHROUGH ANNOUNCEMENT
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent leading-tight">
            Scientific Breakthrough
          </h2>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed opacity-90">
            Revolutionary AI technologies that are reshaping the boundaries of what's possible in enterprise computing
          </p>
          
          {/* Breakthrough Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4">Quantum AI Fusion</h3>
              <p className="text-lg opacity-80 mb-4">1000x speedup in machine learning with quantum-enhanced algorithms</p>
              <div className="text-sm font-bold text-emerald-300">BREAKTHROUGH ACHIEVED</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Neural Consciousness</h3>
              <p className="text-lg opacity-80 mb-4">AI systems achieving human-level reasoning and decision-making</p>
              <div className="text-sm font-bold text-teal-300">REVOLUTIONARY DISCOVERY</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Evolution</h3>
              <p className="text-lg opacity-80 mb-4">Self-improving AI systems that evolve without human intervention</p>
              <div className="text-sm font-bold text-cyan-300">FUTURE IS NOW</div>
            </div>
          </div>
          
          {/* Technical Specifications */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-12 border border-emerald-400/20 mb-16">
            <h3 className="text-3xl font-bold mb-8">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">10,000+</div>
                <div className="text-lg opacity-80">Quantum Qubits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">99.9%</div>
                <div className="text-lg opacity-80">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1000x</div>
                <div className="text-lg opacity-80">Speed Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-lg opacity-80">Autonomous Operation</div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/blog/ai-2025-quantum-computing-breakthrough"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Quantum AI
            </Link>
            <Link
              href="/blog/ai-2025-autonomous-systems-revolution"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Discover Autonomous Systems
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 backdrop-blur-sm text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Get Early Access
            </Link>
          </div>
          
          {/* Research Partners */}
          <div className="mt-16">
            <p className="text-lg opacity-80 mb-8">Developed in collaboration with leading research institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">MIT</div>
              <div className="text-2xl font-bold">Stanford</div>
              <div className="text-2xl font-bold">Google AI</div>
              <div className="text-2xl font-bold">OpenAI</div>
              <div className="text-2xl font-bold">IBM Research</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025BreakthroughBanner;