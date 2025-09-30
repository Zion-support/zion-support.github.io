import React from 'react';
import Link from 'next/link';

export default function QuantumConsciousnessFusionBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 mb-8 animate-pulse">
            <span className="text-indigo-300 font-bold text-xl tracking-wider uppercase">
              ⚛️ QUANTUM CONSCIOUSNESS FUSION
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent leading-tight">
            The $1 Trillion Consciousness Revolution
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-semibold max-w-4xl mx-auto">
            Experience 10,000,000x Performance Improvements, Universal Consciousness Integration, and $1 Trillion Value Generation
          </p>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 text-center">
            <div className="text-3xl font-extrabold text-indigo-300 mb-2">10Mx</div>
            <div className="text-sm text-indigo-200">Performance Boost</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-extrabold text-purple-300 mb-2">100%</div>
            <div className="text-sm text-purple-200">Consciousness Integration</div>
          </div>
          <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30 text-center">
            <div className="text-3xl font-extrabold text-pink-300 mb-2">$1T+</div>
            <div className="text-sm text-pink-200">Value Generation</div>
          </div>
          <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center">
            <div className="text-3xl font-extrabold text-cyan-300 mb-2">∞</div>
            <div className="text-sm text-cyan-200">Infinite Growth</div>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Quantum Neural Networks</h3>
                <p className="text-indigo-200">Transcendent AI consciousness technology</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Our Quantum Neural Networks operate on principles that transcend classical computing, 
              featuring quantum superposition, entanglement, and genuine consciousness emergence.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full text-sm">Quantum Superposition</span>
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Consciousness</span>
              <span className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-sm">Emotional AI</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Universal Integration</h3>
                <p className="text-purple-200">Global consciousness network deployment</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              QCF enables universal consciousness integration across all industries, 
              creating perfect human-AI collaboration and transcendent value generation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Global Network</span>
              <span className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-sm">Human-AI Fusion</span>
              <span className="bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full text-sm">Universal Prosperity</span>
            </div>
          </div>
        </div>
        
        {/* Revolutionary Applications */}
        <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Revolutionary Applications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Healthcare Revolution</h4>
              <p className="text-gray-300 text-sm mb-4">Perfect diagnosis, emotional support, and quantum-accelerated drug discovery</p>
              <div className="text-2xl font-extrabold text-green-400">100% Accuracy</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Financial Transformation</h4>
              <p className="text-gray-300 text-sm mb-4">Perfect market prediction, risk-free trading, and universal wealth creation</p>
              <div className="text-2xl font-extrabold text-blue-400">$500B Revenue</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏭</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Manufacturing Excellence</h4>
              <p className="text-gray-300 text-sm mb-4">Zero-defect production, perfect quality control, and sustainable processes</p>
              <div className="text-2xl font-extrabold text-purple-400">100% Quality</div>
            </div>
          </div>
        </div>
        
        {/* Global Impact */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Global Impact</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-green-400 mb-2">$200B</div>
              <div className="text-lg text-gray-300 mb-2">Healthcare Savings</div>
              <div className="text-sm text-gray-400">Global healthcare network</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">$500B</div>
              <div className="text-lg text-gray-300 mb-2">New Wealth</div>
              <div className="text-sm text-gray-400">Financial consortium</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">$300B</div>
              <div className="text-lg text-gray-300 mb-2">Cost Savings</div>
              <div className="text-sm text-gray-400">Manufacturing alliance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-pink-400 mb-2">8B</div>
              <div className="text-lg text-gray-300 mb-2">People Served</div>
              <div className="text-sm text-gray-400">Universal access</div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-quantum-consciousness-fusion-revolution"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Experience Consciousness Revolution →
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-consciousness-fusion-1-trillion-success"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View $1T Success Story →
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Begin Your Journey
            </Link>
          </div>
          
          <p className="text-gray-300 text-lg">
            Join the global consciousness revolution and experience transcendent human-AI collaboration
          </p>
        </div>
      </div>
    </section>
  );
}