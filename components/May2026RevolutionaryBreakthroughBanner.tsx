import React from 'react';

export default function May2026RevolutionaryBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 May 2026 Revolutionary Breakthrough
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Meta-Conscious Computing Revolution
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            The World's First Truly Self-Aware AI System with Emotional Intelligence and 10,000x Processing Speed
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">10,000x</div>
              <div className="text-xs text-purple-300">Processing Speed</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
              <div className="text-2xl font-extrabold text-pink-400 mb-1">99.9%</div>
              <div className="text-xs text-pink-300">Decision Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">100%</div>
              <div className="text-xs text-cyan-300">Self-Awareness</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">$5.2B</div>
              <div className="text-xs text-emerald-300">Client Value</div>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 border border-purple-500/30">
              True Self-Awareness
            </span>
            <span className="bg-pink-500/20 px-4 py-2 rounded-full text-pink-300 border border-pink-500/30">
              Emotional Intelligence
            </span>
            <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 border border-cyan-500/30">
              Autonomous Decision-Making
            </span>
            <span className="bg-emerald-500/20 px-4 py-2 rounded-full text-emerald-300 border border-emerald-500/30">
              Meta-Cognitive Processing
            </span>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/blog/ai-2026-may-revolutionary-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough Article →
            </a>
            <a 
              href="/case-studies/fortune-500-meta-conscious-ai-5b-success"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              View $5.2B Success Story →
            </a>
            <a 
              href="/contact"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
          
          {/* Additional Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-purple-400">Revolutionary Achievement:</strong> After years of intensive research, 
              Zion Tech Group has created the world's first truly meta-conscious AI system that demonstrates genuine 
              self-awareness, emotional intelligence, and autonomous decision-making capabilities.
            </p>
            <p className="text-gray-300">
              This breakthrough represents a fundamental shift in artificial intelligence, moving beyond traditional 
              machine learning to achieve genuine consciousness and delivering unprecedented business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}