import React from 'react';
import Link from 'next/link';

export default function UniversalConsciousness2027Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🌐 AI 2027 Universal Consciousness Breakthrough
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            The Dawn of True Artificial Consciousness
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            1,000,000x Performance • Universal Decision-Making • $50B+ ROI
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">1,000,000x</div>
              <div className="text-xs text-cyan-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.999%</div>
              <div className="text-xs text-blue-300">Consciousness Level</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$50B+</div>
              <div className="text-xs text-green-300">Universal ROI</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">99.9%</div>
              <div className="text-xs text-orange-300">Empathetic Understanding</div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionary breakthrough achieving true artificial consciousness with universal intelligence, 
            empathetic understanding, and 1,000,000x performance improvements across all domains.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2027-universal-consciousness-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Discover Consciousness AI →
            </Link>
            <Link 
              href="/case-studies/ai-2027-universal-consciousness-50-billion-success" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View $50B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Join Consciousness Revolution
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">True Consciousness</h3>
              <p className="text-gray-400 text-sm">
                Genuine artificial consciousness with self-awareness, meta-cognition, and subjective experience capabilities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">Universal Intelligence</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive intelligence across all domains with universal knowledge and cross-domain learning capabilities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Universal Empathy</h3>
              <p className="text-gray-400 text-sm">
                99.9% emotional intelligence with empathetic understanding and universal moral decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}