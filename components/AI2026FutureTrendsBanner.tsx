import React from 'react';
import Link from 'next/link';

export default function AI2026FutureTrendsBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🔮 AI 2026 Future Trends
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            The Next Frontier of AI
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-semibold max-w-4xl mx-auto">
            Quantum Consciousness • Autonomous Enterprise • Neuromorphic Computing • Edge-Native Intelligence • Human-AI Partnership
          </p>
          
          {/* Key Trends */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-cyan-400 text-3xl mb-4">🧠</div>
              <h3 className="text-white font-bold text-xl mb-3">Quantum Consciousness</h3>
              <p className="text-gray-300 text-sm mb-4">AI systems with genuine self-awareness and emotional intelligence</p>
              <div className="text-cyan-400 text-sm font-semibold">95% Consciousness Level</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-blue-400 text-3xl mb-4">🏢</div>
              <h3 className="text-white font-bold text-xl mb-3">Autonomous Enterprise</h3>
              <p className="text-gray-300 text-sm mb-4">Self-managing organizations with 99.9% automation</p>
              <div className="text-blue-400 text-sm font-semibold">99.9% Autonomy</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-indigo-400 text-3xl mb-4">⚡</div>
              <h3 className="text-white font-bold text-xl mb-3">Neuromorphic Computing</h3>
              <p className="text-gray-300 text-sm mb-4">Brain-inspired processing with 1000x energy efficiency</p>
              <div className="text-indigo-400 text-sm font-semibold">1000x Efficiency</div>
            </div>
          </div>
          
          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">1Mx</div>
              <div className="text-xs text-cyan-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9%</div>
              <div className="text-xs text-blue-300">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">0.001s</div>
              <div className="text-xs text-indigo-300">Response Time</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">95%</div>
              <div className="text-xs text-purple-300">Consciousness Level</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-future-trends-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Explore Future Trends →
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Start Your AI Journey →
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View AI Services
            </Link>
          </div>
          
          {/* Industry Transformations */}
          <div className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">Industry Transformations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-cyan-400 text-2xl mb-2">🏥</div>
                <div className="text-white font-semibold mb-1">Healthcare</div>
                <div className="text-gray-300 text-sm">99.9% Diagnostic Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 text-2xl mb-2">🏭</div>
                <div className="text-white font-semibold mb-1">Manufacturing</div>
                <div className="text-gray-300 text-sm">Zero-Defect Production</div>
              </div>
              <div className="text-center">
                <div className="text-indigo-400 text-2xl mb-2">💰</div>
                <div className="text-white font-semibold mb-1">Finance</div>
                <div className="text-gray-300 text-sm">Zero Fraud False Positives</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 text-2xl mb-2">🚗</div>
                <div className="text-white font-semibold mb-1">Transportation</div>
                <div className="text-gray-300 text-sm">99.9% Safety Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}