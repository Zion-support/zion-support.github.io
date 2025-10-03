import React from 'react';
import Link from 'next/link';

export default function AI2026SustainableRevolutionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-green-900/30 via-emerald-900/30 to-green-900/30 border-t border-b border-green-500/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <span className="text-green-400 font-bold text-lg tracking-wider uppercase">
              🌱 NEW: AI 2026 Sustainable Revolution
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionary Sustainable AI Breakthrough
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Achieve 99.9% energy efficiency and 85% carbon reduction while generating $2.5B ROI. 
            The future of conscientious artificial intelligence is here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white">99.9% Energy Efficiency</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionary quantum-inspired optimization algorithms deliver unprecedented energy efficiency 
              while maintaining superior AI performance.
            </p>
            <Link 
              href="/blog/ai-2026-sustainable-ai-revolution-breakthrough"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
            >
              Read Breakthrough Details →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-white">85% Carbon Reduction</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Transform your operations with carbon-neutral AI infrastructure and renewable energy 
              integration systems that reduce environmental impact.
            </p>
            <Link 
              href="/services/ai-2026-sustainable-ai-solutions"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              Get Sustainable Solutions →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white">$2.5B Proven ROI</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Fortune 100 companies have achieved $2.5B ROI through our sustainable AI implementation, 
              proving that environmental responsibility drives profitability.
            </p>
            <Link 
              href="/case-studies/ai-2026-sustainable-ai-revolution-2-5-billion-success"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              View Success Story →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Get Sustainable AI Solutions
            </Link>
            <Link 
              href="/services/ai-2026-sustainable-ai-solutions"
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-lg p-3 border border-green-500/30">
              <div className="text-lg font-extrabold text-green-400">99.9%</div>
              <div className="text-xs text-green-300">Energy Efficient</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-lg p-3 border border-emerald-500/30">
              <div className="text-lg font-extrabold text-emerald-400">85%</div>
              <div className="text-xs text-emerald-300">Carbon Reduced</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/30">
              <div className="text-lg font-extrabold text-cyan-400">$2.5B</div>
              <div className="text-xs text-cyan-300">ROI Generated</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">
              <div className="text-lg font-extrabold text-blue-400">500+</div>
              <div className="text-xs text-blue-300">Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}