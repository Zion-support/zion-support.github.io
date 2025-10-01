import React from 'react';

export default function QuantumComputingBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-blue-900/50 border-b border-cyan-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Main Announcement */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              ⚛️ Quantum AI Computing Breakthrough 2026
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            1000x Processing Speed • Quantum Superposition • Exponential Computing
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionary quantum AI computing delivering unprecedented performance: 
            <span className="text-cyan-400 font-bold"> 1000x processing speed</span>, 
            <span className="text-purple-400 font-bold"> quantum superposition</span>, and 
            <span className="text-blue-400 font-bold"> exponential problem-solving</span> capabilities.
          </p>

          {/* Performance Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-cyan-500/20 px-6 py-3 rounded-full border border-cyan-500/30">
              <span className="text-cyan-300 font-semibold">⚛️ 1000x Processing Speed</span>
            </div>
            <div className="bg-purple-500/20 px-6 py-3 rounded-full border border-purple-500/30">
              <span className="text-purple-300 font-semibold">🌀 Quantum Superposition</span>
            </div>
            <div className="bg-blue-500/20 px-6 py-3 rounded-full border border-blue-500/30">
              <span className="text-blue-300 font-semibold">🧠 Exponential Computing</span>
            </div>
          </div>

          {/* Quantum Technologies */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Quantum Superposition</h3>
              <p className="text-gray-400 text-sm">Process infinite possibilities in parallel for unprecedented power</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Quantum-Neural Fusion</h3>
              <p className="text-gray-400 text-sm">Breakthrough fusion of quantum computing with neural networks</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20">
              <div className="text-4xl mb-3">🌀</div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">Quantum Entanglement</h3>
              <p className="text-gray-400 text-sm">Instant communication across any distance through quantum networks</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog/quantum-ai-computing-breakthrough-2026" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Explore Quantum Computing →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Quantum Consultation
            </a>
          </div>

          {/* Success Metrics */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-cyan-400 mb-1">1000x</div>
              <div className="text-gray-400 text-sm">Processing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-1">∞</div>
              <div className="text-gray-400 text-sm">Parallel Computations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-1">10^18</div>
              <div className="text-gray-400 text-sm">Quantum Ops/Sec</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-400 mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Error Correction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}