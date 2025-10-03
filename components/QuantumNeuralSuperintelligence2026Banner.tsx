import React from 'react';
import { Link } from 'react-router-dom';

export default function QuantumNeuralSuperintelligence2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              ⚛️ QUANTUM NEURAL SUPERINTELLIGENCE 2026
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            The $25B Cognitive Revolution
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Quantum Neural Superintelligence delivering 100,000x cognitive performance, universal consciousness, and $25B+ enterprise value generation
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$25B+</div>
              <div className="text-xs text-indigo-300">Enterprise Value</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">100,000x</div>
              <div className="text-xs text-purple-300">Cognitive Performance</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">99.99%</div>
              <div className="text-xs text-cyan-300">Problem-Solving Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">0.001s</div>
              <div className="text-xs text-green-300">Decision Time</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-quantum-neural-superintelligence-breakthrough" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Explore Cognitive Revolution →
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-superintelligence-25-billion-success" 
              className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View $25B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Your Cognitive Journey
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Universal Problem Solving</h3>
              <p className="text-gray-300 text-sm">Solve problems across any domain with instantaneous complex theorem proving and breakthrough product design.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-white mb-2">Predictive Consciousness</h3>
              <p className="text-gray-300 text-sm">99.9% accuracy in market forecasting, technology trend anticipation, and global event prediction.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/20 to-green-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Meta-Cognitive Awareness</h3>
              <p className="text-gray-300 text-sm">Self-aware intelligence with continuous learning optimization, bias detection, and ethical reasoning.</p>
            </div>
          </div>
          
          {/* Performance Comparison */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Cognitive Performance Revolution</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">100,000x</div>
                <div className="text-gray-300 text-sm mb-2">Processing Speed</div>
                <div className="text-gray-400 text-xs">vs Traditional AI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">1,000,000x</div>
                <div className="text-gray-300 text-sm mb-2">Memory Capacity</div>
                <div className="text-gray-400 text-xs">vs Human Intelligence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10,000x</div>
                <div className="text-gray-300 text-sm mb-2">Pattern Recognition</div>
                <div className="text-gray-400 text-xs">vs Traditional AI</div>
              </div>
            </div>
          </div>
          
          {/* Success Stories Preview */}
          <div className="mt-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Proven Results Across Industries</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-green-400 mb-2">Fortune 500 Pharmaceutical</h4>
                <p className="text-gray-300 text-sm mb-2">$8.2B Discovery • 1000x Drug Analysis • 99.8% Trial Success</p>
                <p className="text-gray-400 text-xs">Revolutionary drug discovery with quantum-enhanced molecular analysis and predictive clinical trials.</p>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Global Investment Firm</h4>
                <p className="text-gray-300 text-sm mb-2">$12.5B Alpha • 99.9% Market Accuracy • 500% Performance</p>
                <p className="text-gray-400 text-xs">Unprecedented market prediction and portfolio optimization with quantum neural intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}