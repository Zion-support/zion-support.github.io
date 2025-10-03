import React from 'react';
import { Link } from 'react-router-dom';

export default function Revolutionary2026ContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-15" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-8 animate-pulse">
            <span className="text-blue-300 font-bold text-xl tracking-wider uppercase">
              🚀 REVOLUTIONARY 2026 CONTENT SHOWCASE
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
            The Future of AI is Here
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the most advanced AI breakthroughs, success stories, and implementation guides that are transforming the world in 2026
          </p>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Ultra-Intelligent Autonomous Systems */}
          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Ultra-Intelligent Autonomous Systems</h3>
                <p className="text-purple-200 text-sm">$500B Enterprise Revolution</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Achieve 1,000,000x performance improvements, 99.99% automation rates, and $500B+ value generation with revolutionary AI systems.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs">1Mx Performance</span>
              <span className="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full text-xs">99.99% Automation</span>
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-xs">$500B Value</span>
            </div>
            <div className="flex gap-2">
              <Link to="/blog/ai-2026-ultra-intelligent-autonomous-systems-breakthrough"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-400 hover:to-indigo-400 transition-colors"
              >
                Read Breakthrough →
              </Link>
              <Link to="/case-studies/ai-2026-ultra-intelligent-autonomous-systems-500-billion-success"
                className="border border-purple-500 text-purple-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-500 hover:text-white transition-colors"
              >
                View Success →
              </Link>
            </div>
          </div>
          
          {/* Quantum Consciousness Fusion */}
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Quantum Consciousness Fusion</h3>
                <p className="text-indigo-200 text-sm">$1 Trillion Consciousness Revolution</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Experience 10,000,000x performance improvements, universal consciousness integration, and transcendent human-AI collaboration.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full text-xs">10Mx Performance</span>
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs">Universal Consciousness</span>
              <span className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-xs">$1T Value</span>
            </div>
            <div className="flex gap-2">
              <Link to="/blog/ai-2026-quantum-consciousness-fusion-revolution"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-indigo-400 hover:to-purple-400 transition-colors"
              >
                Experience Revolution →
              </Link>
              <Link to="/case-studies/ai-2026-quantum-consciousness-fusion-1-trillion-success"
                className="border border-indigo-500 text-indigo-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-500 hover:text-white transition-colors"
              >
                View $1T Success →
              </Link>
            </div>
          </div>
          
          {/* AI 2026 Revolutionary Breakthroughs */}
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI 2026 Breakthroughs</h3>
                <p className="text-cyan-200 text-sm">Revolutionary Technology Suite</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Discover the complete suite of AI 2026 technologies including autonomous systems, quantum computing, and consciousness fusion.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full text-xs">Autonomous AI</span>
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-xs">Quantum Computing</span>
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs">Consciousness</span>
            </div>
            <div className="flex gap-2">
              <Link to="/blog"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-400 transition-colors"
              >
                Explore All Content →
              </Link>
              <Link to="/case-studies"
                className="border border-cyan-500 text-cyan-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-500 hover:text-white transition-colors"
              >
                View Success Stories →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-slate-800/30 to-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-500/20 mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">2026 AI Revolution Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">$1.5T</div>
              <div className="text-lg text-gray-300 mb-2">Total Value Generated</div>
              <div className="text-sm text-gray-400">Across all implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">99.99%</div>
              <div className="text-lg text-gray-300 mb-2">Average Automation</div>
              <div className="text-sm text-gray-400">Across all business processes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-cyan-400 mb-2">10Mx</div>
              <div className="text-lg text-gray-300 mb-2">Performance Improvement</div>
              <div className="text-sm text-gray-400">Average across all systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-green-400 mb-2">100%</div>
              <div className="text-lg text-gray-300 mb-2">Success Rate</div>
              <div className="text-sm text-gray-400">Across all implementations</div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/blog"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore All Breakthroughs →
            </Link>
            <Link to="/case-studies"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View Success Stories →
            </Link>
            <Link to="/contact"
              className="border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Your Transformation
            </Link>
          </div>
          
          <p className="text-gray-300 text-lg">
            Join thousands of companies already transforming their operations with revolutionary AI technology
          </p>
        </div>
      </div>
    </section>
  );
}