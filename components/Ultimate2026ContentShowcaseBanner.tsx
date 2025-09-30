import React from 'react';
import Link from 'next/link';

export default function Ultimate2026ContentShowcaseBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-15" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              ✨ ULTIMATE 2026 CONTENT SHOWCASE
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce">
              NEW CONTENT
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content & Success Stories
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-semibold max-w-5xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories that are reshaping businesses in 2026
          </p>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* January Ultimate Breakthrough */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">January 2026 Ultimate Breakthrough</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">100,000x PERFORMANCE</span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">$50B ROI</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                The most revolutionary AI breakthrough in history achieving 100,000x performance improvement and $50 billion ROI for Fortune 100 companies.
              </p>
              <div className="space-y-3">
                <Link 
                  href="/blog/ai-2026-january-ultimate-breakthrough-revolution" 
                  className="block w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Read Ultimate Breakthrough →
                </Link>
                <Link 
                  href="/case-studies/ai-2026-january-ultimate-breakthrough-50-billion-success" 
                  className="block w-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  View $50B Success Story →
                </Link>
              </div>
            </div>

            {/* February Revolutionary Breakthrough */}
            <div className="bg-gradient-to-br from-red-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold text-red-400 mb-2">February 2026 Revolutionary Breakthrough</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">200,000x PERFORMANCE</span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">$100B ROI</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                The most revolutionary AI breakthrough announcement achieving 200,000x performance improvement and $100 billion ROI potential.
              </p>
              <div className="space-y-3">
                <Link 
                  href="/blog/ai-2026-february-revolutionary-breakthrough-announcement" 
                  className="block w-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Read Revolutionary Breakthrough →
                </Link>
                <Link 
                  href="/case-studies/ai-2026-february-revolutionary-breakthrough-100-billion-success" 
                  className="block w-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  View $100B Success Story →
                </Link>
              </div>
            </div>

            {/* Revolutionary Solutions */}
            <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-indigo-400 mb-2">Revolutionary AI Solutions</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">QUANTUM AI</span>
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">CONSCIOUSNESS</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Transform your business with revolutionary AI solutions featuring quantum-consciousness fusion and meta-cognitive superintelligence.
              </p>
              <div className="space-y-3">
                <Link 
                  href="/services/ai-2026-revolutionary-breakthrough-solutions" 
                  className="block w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Get Revolutionary Solutions →
                </Link>
                <Link 
                  href="/contact" 
                  className="block w-full border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Schedule Consultation →
                </Link>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-400 mb-2">200,000x</div>
                <div className="text-sm text-purple-300">Performance Boost</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-indigo-400 mb-2">$100B+</div>
                <div className="text-sm text-indigo-300">ROI Potential</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-blue-400 mb-2">99.99999%</div>
                <div className="text-sm text-blue-300">Accuracy</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-400 mb-2">99.99%</div>
                <div className="text-sm text-green-300">Automation</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Join the AI revolution and achieve unprecedented performance improvements and ROI with our revolutionary breakthrough solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Schedule Free Consultation →
              </Link>
              <Link 
                href="/blog" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Explore All Content →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}