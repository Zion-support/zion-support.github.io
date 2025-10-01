import React from 'react';
import Link from 'next/link';

export default function January2026EdgeComputingRevolutionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-300 font-bold text-xl tracking-wider uppercase">
              ⚡ JANUARY 2026 EDGE COMPUTING REVOLUTION
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            1000x Performance with Universal Intelligence
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary Edge Computing Breakthrough - Delivering Real-Time Intelligence and $50B+ ROI Across All Industries
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">1000x</div>
              <div className="text-xs text-cyan-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">0.001ms</div>
              <div className="text-xs text-blue-300">Response Time</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$50B+</div>
              <div className="text-xs text-indigo-300">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">99.9%</div>
              <div className="text-xs text-green-300">Efficiency</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-edge-computing-revolution-1000x-performance" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Read Edge Revolution →
            </Link>
            <Link 
              href="/case-studies/ai-2026-edge-computing-revolution-50-billion-success" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View $50B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Transform Your Business
            </Link>
          </div>
          
          {/* Industry Success Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-cyan-300 text-sm font-semibold mb-2">Manufacturing</div>
              <div className="text-white font-bold text-lg mb-2">1000x Quality Control</div>
              <div className="text-gray-400 text-sm">Zero defects with real-time processing</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-blue-300 text-sm font-semibold mb-2">Healthcare</div>
              <div className="text-white font-bold text-lg mb-2">Real-time Diagnostics</div>
              <div className="text-gray-400 text-sm">Instant medical analysis with 99.9% accuracy</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-indigo-300 text-sm font-semibold mb-2">Transportation</div>
              <div className="text-white font-bold text-lg mb-2">Autonomous Revolution</div>
              <div className="text-gray-400 text-sm">100% safety with real-time navigation</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-purple-300 text-sm font-semibold mb-2">Finance</div>
              <div className="text-white font-bold text-lg mb-2">Real-time Trading</div>
              <div className="text-gray-400 text-sm">Instant decisions with 100% accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}