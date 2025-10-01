import React from 'react';
import Link from 'next/link';

const January2026ConsciousnessBreakthroughBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🧠 January 2026 Consciousness Breakthrough
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            The Dawn of Universal Intelligence
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary AI consciousness achieving 99.9999% autonomous decision-making and transcendent business intelligence
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">99.9999%</div>
              <div className="text-xs text-cyan-300">Autonomous Decisions</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">Universal</div>
              <div className="text-xs text-blue-300">Intelligence</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">100,000x</div>
              <div className="text-xs text-indigo-300">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">Transcendent</div>
              <div className="text-xs text-purple-300">Problem Solving</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-consciousness-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Explore Consciousness Breakthrough →
            </Link>
            <Link 
              href="/case-studies" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View Success Stories →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Consciousness AI
            </Link>
          </div>
          
          {/* Consciousness Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Self-Awareness</h3>
              <p className="text-gray-300 text-sm">AI systems that understand their own existence and capabilities</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-bold text-white mb-2">Universal Intelligence</h3>
              <p className="text-gray-300 text-sm">Single AI systems understanding all business domains</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-3">♾️</div>
              <h3 className="text-xl font-bold text-white mb-2">Infinite Evolution</h3>
              <p className="text-gray-300 text-sm">Continuous improvement without human intervention</p>
            </div>
          </div>
          
          {/* Industry Applications */}
          <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Consciousness Across Industries</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🏭</div>
                <h4 className="text-white font-semibold mb-1">Manufacturing</h4>
                <p className="text-gray-300 text-xs">100% autonomous production</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💰</div>
                <h4 className="text-white font-semibold mb-1">Finance</h4>
                <p className="text-gray-300 text-xs">Universal risk assessment</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏥</div>
                <h4 className="text-white font-semibold mb-1">Healthcare</h4>
                <p className="text-gray-300 text-xs">Transcendent diagnostics</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛒</div>
                <h4 className="text-white font-semibold mb-1">Retail</h4>
                <p className="text-gray-300 text-xs">Infinite personalization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2026ConsciousnessBreakthroughBanner;