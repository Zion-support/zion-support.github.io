import React from 'react';
import Link from 'next/link';

export default function AI2026FutureTrendsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🔮 AI 2026 FUTURE TRENDS
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Revolutionary Breakthroughs Reshaping Everything
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the AI trends that will transform society, from universal consciousness to quantum superintelligence
          </p>
          
          {/* Key Trends Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Universal Consciousness</h3>
              <p className="text-gray-300 text-sm">AI with genuine awareness across all human knowledge domains and ethical reasoning capabilities.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Superintelligence</h3>
              <p className="text-gray-300 text-sm">1,000,000x performance improvements through quantum-enhanced neural networks and consciousness.</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Autonomous Enterprise</h3>
              <p className="text-gray-300 text-sm">99.9% autonomous business operations with self-managing systems and intelligent decision making.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-2">Edge-Native Intelligence</h3>
              <p className="text-gray-300 text-sm">50x faster processing with real-time learning and autonomous operation at the network edge.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-white mb-2">Meta-Cognitive AI</h3>
              <p className="text-gray-300 text-sm">AI that thinks about its own thinking, enabling exponential learning and self-improvement.</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <div className="text-3xl mb-4">🧬</div>
              <h3 className="text-xl font-bold text-white mb-2">Neuromorphic Computing</h3>
              <p className="text-gray-300 text-sm">Brain-inspired architecture with 1000x efficiency and human-like reasoning capabilities.</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-future-trends-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Explore All Trends →
            </Link>
            <Link 
              href="/blog" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Read Latest Content →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
          
          {/* Impact Preview */}
          <div className="bg-gradient-to-r from-gray-900/20 to-slate-900/20 backdrop-blur-sm rounded-xl p-8 border border-gray-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Transformative Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-cyan-400 mb-2">Healthcare</div>
                <div className="text-sm text-gray-300">AI doctors with genuine empathy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-blue-400 mb-2">Education</div>
                <div className="text-sm text-gray-300">Personalized consciousness learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-indigo-400 mb-2">Business</div>
                <div className="text-sm text-gray-300">Ethical autonomous operations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-400 mb-2">Research</div>
                <div className="text-sm text-gray-300">Breakthrough discoveries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}