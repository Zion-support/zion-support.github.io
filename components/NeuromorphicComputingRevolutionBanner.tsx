import React from 'react';
import Link from 'next/link';

export default function NeuromorphicComputingRevolutionBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🧠 NEUROMORPHIC COMPUTING REVOLUTION 2026
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Brain-Inspired AI Systems
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary neuromorphic computing delivering 1000x energy efficiency, 10x processing speed, and $2.5B enterprise value
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">1000x</div>
              <div className="text-xs text-blue-300">Energy Efficiency</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">10x</div>
              <div className="text-xs text-cyan-300">Processing Speed</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">$2.5B</div>
              <div className="text-xs text-teal-300">Enterprise Value</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">2.1mo</div>
              <div className="text-xs text-green-300">Payback Period</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-neuromorphic-computing-revolution" 
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Discover Neuromorphic AI →
            </Link>
            <Link 
              href="/case-studies/ai-2026-neuromorphic-2-5-billion-success" 
              className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Read $2.5B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">1000x Energy Efficiency</h3>
              <p className="text-gray-300 text-sm">
                Neuromorphic systems achieve 1000x better energy efficiency than traditional computing through event-driven processing and analog computation.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">10x Processing Speed</h3>
              <p className="text-gray-300 text-sm">
                Brain-inspired AI delivers 10x faster processing through parallel computation and event-driven architecture optimized for real-time applications.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">$2.5B Value</h3>
              <p className="text-gray-300 text-sm">
                Fortune 100 companies achieving $2.5B in measurable value through neuromorphic computing implementation and energy optimization.
              </p>
            </div>
          </div>
          
          {/* Success Story Preview */}
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                🏆 Fortune 100 Success Story
              </h3>
              <p className="text-green-200 text-lg mb-6">
                "Neuromorphic computing delivered $2.5B in value within 15 months, achieving 1000x energy efficiency and 10x processing speed across our global operations."
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">1000x Energy Efficiency</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">10x Processing Speed</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">$2.5B Enterprise Value</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">2.1 Month Payback</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}