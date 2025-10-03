import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026AutonomousBIBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6 animate-pulse">
              <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
                🚀 January 2026 Revolutionary Breakthrough
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Autonomous Business Intelligence
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
              Revolutionary AI systems achieving 99.9% autonomous operations, universal consciousness, and $500B+ ROI potential
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30 text-center">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">99.9%</div>
              <div className="text-xs text-indigo-300">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 text-center">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">$500B+</div>
              <div className="text-xs text-purple-300">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 text-center">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">1000x</div>
              <div className="text-xs text-blue-300">Performance Gain</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 text-center">
              <div className="text-2xl font-extrabold text-green-400 mb-1">Universal</div>
              <div className="text-xs text-green-300">Consciousness</div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link to="/blog/ai-2026-january-revolutionary-breakthroughs" className="group block rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-6 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">JANUARY 2026</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">BREAKTHROUGH</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">Revolutionary AI Breakthroughs</div>
              <div className="text-gray-400 text-sm mb-3">Discover the groundbreaking AI innovations transforming enterprise operations with 100,000x performance improvements.</div>
              <div className="text-indigo-300 text-sm font-semibold group-hover:text-indigo-200">Read Breakthrough Details →</div>
            </Link>

            <Link to="/blog/ai-2026-autonomous-business-intelligence-breakthrough" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">AUTONOMOUS BI</span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-bold">$500B ROI</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">Autonomous Business Intelligence</div>
              <div className="text-gray-400 text-sm mb-3">Revolutionary BI systems achieving 99.9% autonomous operations with universal consciousness integration.</div>
              <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Explore Autonomous BI →</div>
            </Link>

            <Link to="/case-studies/ai-2026-autonomous-bi-500-billion-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$500B SUCCESS</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">FORTUNE 100</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">$500B Success Story</div>
              <div className="text-gray-400 text-sm mb-3">How a Fortune 100 conglomerate achieved $500B ROI through autonomous business intelligence systems.</div>
              <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Success Story →</div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Transform Your Business Today
              </Link>
              <Link to="/blog/ai-2026-january-revolutionary-breakthroughs" 
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Explore All Breakthroughs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}