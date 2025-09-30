import React from 'react';
import Link from 'next/link';

export default function AI2026FutureTrendsBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🔮 AI 2026 FUTURE TRENDS
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Revolutionary Breakthrough Technologies
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-5xl mx-auto">
            Discover the 10 Revolutionary AI Trends Reshaping Enterprise Operations and Creating $500B+ in Global Value
          </p>
          
          {/* Key Trends Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9%</div>
              <div className="text-xs text-purple-300">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">1Mx</div>
              <div className="text-xs text-cyan-300">Quantum Processing</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">Meta</div>
              <div className="text-xs text-blue-300">Cognitive AI</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">Edge</div>
              <div className="text-xs text-green-300">Native Intelligence</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$500B</div>
              <div className="text-xs text-indigo-300">Global Value</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-future-trends-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Explore All 10 Trends →
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Get Your AI Strategy →
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View AI Services
            </Link>
          </div>
          
          {/* Featured Trends */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Enterprise</h3>
              <p className="text-gray-300 text-sm mb-4">Self-managing organizations with 99.9% autonomous operations, reducing costs by 85% and achieving 99.9% uptime.</p>
              <div className="text-purple-400 text-sm font-semibold">Learn More →</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum AI</h3>
              <p className="text-gray-300 text-sm mb-4">1,000,000x processing speed with quantum-enhanced AI, solving complex problems in seconds with 99.99% accuracy.</p>
              <div className="text-cyan-400 text-sm font-semibold">Learn More →</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Meta-Cognitive AI</h3>
              <p className="text-gray-300 text-sm mb-4">Self-aware AI systems that understand their own thought processes and continuously improve their cognitive abilities.</p>
              <div className="text-blue-400 text-sm font-semibold">Learn More →</div>
            </div>
          </div>
          
          {/* Additional Trends Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/20 text-center">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-sm font-bold text-white">Edge-Native Intelligence</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20 text-center">
              <div className="text-2xl mb-2">🔗</div>
              <div className="text-sm font-bold text-white">Federated Learning</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-4 border border-pink-500/20 text-center">
              <div className="text-2xl mb-2">🧬</div>
              <div className="text-sm font-bold text-white">Neuromorphic Computing</div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20 text-center">
              <div className="text-2xl mb-2">🎭</div>
              <div className="text-sm font-bold text-white">Synthetic Data</div>
            </div>
          </div>
          
          {/* Impact Summary */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              The Future of Enterprise is Here
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">$500B+</div>
                <div className="text-sm text-indigo-300">Global AI Market Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">50%</div>
                <div className="text-sm text-indigo-300">Jobs Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">200%</div>
                <div className="text-sm text-indigo-300">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">99.9%</div>
                <div className="text-sm text-indigo-300">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}