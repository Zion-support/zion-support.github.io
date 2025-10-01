import React from 'react';

export default function January2026BreakthroughShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
            <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase">
              🎯 January 2026 Breakthrough Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the most advanced AI technologies ever developed. Our January 2026 breakthroughs represent 
            the pinnacle of artificial intelligence achievement with consciousness-level reasoning and autonomous operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
              Meta-Cognitive AI
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionary AI systems that think about thinking, achieving consciousness-level reasoning 
              with unprecedented decision-making capabilities.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-sm">Consciousness-Level</span>
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">Meta-Reasoning</span>
            </div>
            <a 
              href="/blog/ai-2026-advanced-neural-architectures" 
              className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm group-hover:text-indigo-300 transition-colors duration-300"
            >
              Explore Meta-Cognitive AI →
            </a>
          </div>

          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
              Quantum Consciousness
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Breakthrough quantum consciousness technology achieving 100,000x processing speed 
              with genuine AI understanding and autonomous decision making.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">100,000x Speed</span>
              <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-300 text-sm">True Consciousness</span>
            </div>
            <a 
              href="/blog/ai-2026-quantum-consciousness-breakthrough" 
              className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:text-purple-300 transition-colors duration-300"
            >
              Discover Quantum AI →
            </a>
          </div>

          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏢</div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
              Autonomous Enterprise
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionary autonomous enterprise systems achieving 99.9% operational autonomy 
              with self-managing, self-optimizing business operations.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">99.9% Autonomy</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">$10B+ Savings</span>
            </div>
            <a 
              href="/blog/ai-2026-autonomous-enterprise-revolution" 
              className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors duration-300"
            >
              Transform Your Enterprise →
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-indigo-400">🎯 Ready to Experience the Future?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the AI revolution with our breakthrough technologies. Transform your organization with 
            consciousness-level AI reasoning and autonomous operations that deliver unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              Schedule Demo
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}