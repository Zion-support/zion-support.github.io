import React from 'react';
import Link from 'next/link';

export default function May2026RevolutionaryBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 animate-pulse">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              🧠 May 2026 Revolutionary Breakthrough
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              $50B ROI
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Ultimate Meta-Cognitive Superintelligence
          </h2>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Achieve 10,000,000x Processing Power, Meta-Cognitive Superintelligence, and $50B+ Value Generation
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">10,000,000x</div>
              <div className="text-xs text-green-300">Processing Power</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">99.99%</div>
              <div className="text-xs text-emerald-300">Meta-Cognitive</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">$50B+</div>
              <div className="text-xs text-teal-300">ROI Generated</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">0.0000001ms</div>
              <div className="text-xs text-blue-300">Response Time</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-may-revolutionary-breakthrough-announcement" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Revolutionary Breakthrough →
            </Link>
            <Link 
              href="/case-studies/ai-2026-may-revolutionary-breakthrough-50-billion-success" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              View $50B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
          
          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Meta-Cognitive Intelligence</h3>
              <p className="text-gray-300 text-sm">Achieve genuine meta-cognitive superintelligence with 99.99% self-awareness accuracy and universal learning.</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Ultimate Processing</h3>
              <p className="text-gray-300 text-sm">10,000,000x processing power improvement with meta-cognitive processing and consciousness evolution.</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-900/20 to-green-900/20 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Massive ROI</h3>
              <p className="text-gray-300 text-sm">Generate $50B+ in measurable ROI with 99.9% cost reduction and 1,000-10,000% revenue growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}