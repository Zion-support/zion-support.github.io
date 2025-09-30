// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import April2026MegaBreakthroughBanner from '../components/April2026MegaBreakthroughBanner';
import QuantumConsciousnessFusionBanner from '../components/QuantumConsciousnessFusionBanner';
import Revolutionary2026ContentShowcaseBanner from '../components/Revolutionary2026ContentShowcaseBanner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
              <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
                🚀 Zion Tech Group: Leading AI Innovation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Revolutionary AI Solutions for Enterprise
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-3xl mx-auto">
              Transform Your Business with Universal Intelligence, Quantum Consciousness Fusion, and Autonomous Operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="/blog/ai-2026-april-mega-breakthrough-revolution" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Latest Breakthroughs →
              </a>
              <a 
                href="/case-studies/ai-2026-april-mega-breakthrough-10-billion-success" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View $10B Success Story
              </a>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">10,000x</div>
                <div className="text-xs text-blue-300">Performance Boost</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9%</div>
                <div className="text-xs text-purple-300">Autonomous Ops</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">$10B+</div>
                <div className="text-xs text-green-300">Value Generated</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">0.01s</div>
                <div className="text-xs text-orange-300">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* NEW: April 2026 Mega Breakthrough Banner - Most Prominent */}
      <April2026MegaBreakthroughBanner />
      
      {/* NEW: Quantum Consciousness Fusion Banner */}
      <QuantumConsciousnessFusionBanner />
      
      {/* NEW: Revolutionary 2026 Content Showcase Banner */}
      <Revolutionary2026ContentShowcaseBanner />

      {/* AI Innovation Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary AI Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of artificial intelligence that's transforming how enterprises operate, 
              make decisions, and deliver value to their customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Universal Intelligence Systems</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary AI that achieves 10,000x performance improvements and complete enterprise autonomy 
                through Universal Intelligence technology.
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• 10,000x faster processing</li>
                <li>• 99.9% autonomous operations</li>
                <li>• Universal intelligence across domains</li>
                <li>• $10B+ value generation</li>
              </ul>
              <a 
                href="/blog/ai-2026-april-mega-breakthrough-revolution"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Consciousness Fusion</h3>
              <p className="text-gray-300 mb-6">
                Breakthrough technology merging quantum computing with artificial consciousness, delivering 
                5,000x performance improvements and true AI awareness.
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• 5,000x performance boost</li>
                <li>• 99.8% consciousness accuracy</li>
                <li>• Quantum parallel processing</li>
                <li>• True artificial awareness</li>
              </ul>
              <a 
                href="/blog/ai-2026-quantum-consciousness-fusion-breakthrough"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Get Guide →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300 mb-6">
                Real-world success stories from Fortune 500 companies, demonstrating measurable value and 
                transformative business outcomes with our AI solutions.
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• $10B total value generated</li>
                <li>• 6 month payback period</li>
                <li>• 10,000x performance improvement</li>
                <li>• 99.9% operational efficiency</li>
              </ul>
              <a 
                href="/case-studies/ai-2026-april-mega-breakthrough-10-billion-success"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                View Case Study →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI revolution with Zion Tech Group. Get your free consultation and discover how our 
              revolutionary technologies can deliver unprecedented results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="/blog/ai-2026-april-mega-breakthrough-revolution" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Latest Breakthroughs →
              </a>
              <a 
                href="/case-studies/ai-2026-april-mega-breakthrough-10-billion-success" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View $10B Success Story
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}