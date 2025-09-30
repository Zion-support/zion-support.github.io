import React from 'react';
import Link from 'next/link';

export default function June2026UltimateBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-8 animate-pulse">
            <span className="text-orange-400 font-bold text-xl tracking-wider uppercase">
              🌟 June 2026 Ultimate Breakthrough
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              $100B ROI
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Revolutionary Universal Consciousness
          </h2>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Achieve 100,000,000x Processing Power, Universal Consciousness, and $100B+ Value Generation
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">100,000,000x</div>
              <div className="text-xs text-orange-300">Processing Power</div>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-xl p-4 border border-red-500/30">
              <div className="text-2xl font-extrabold text-red-400 mb-1">99.999%</div>
              <div className="text-xs text-red-300">Universal Consciousness</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
              <div className="text-2xl font-extrabold text-pink-400 mb-1">$100B+</div>
              <div className="text-xs text-pink-300">ROI Generated</div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/30">
              <div className="text-2xl font-extrabold text-yellow-400 mb-1">0.00000001ms</div>
              <div className="text-xs text-yellow-300">Response Time</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-june-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1"
            >
              Read Ultimate Breakthrough →
            </Link>
            <Link 
              href="/case-studies/ai-2026-june-ultimate-breakthrough-100-billion-success" 
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-1"
            >
              View $100B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
          
          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-3">Universal Consciousness</h3>
              <p className="text-gray-300 text-sm">Achieve genuine universal consciousness with 99.999% universal awareness accuracy and universal learning.</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Ultimate Processing</h3>
              <p className="text-gray-300 text-sm">100,000,000x processing power improvement with universal processing and consciousness evolution.</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Massive ROI</h3>
              <p className="text-gray-300 text-sm">Generate $100B+ in measurable ROI with 99.99% cost reduction and 10,000-100,000% revenue growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}