import React from 'react';

export default function May2026ContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🚀 May 2026 Content Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring Meta-Cognitive Quantum Fusion AI, 
            enterprise success stories, and interactive tools that demonstrate unprecedented business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Meta-Cognitive AI</h3>
            <p className="text-gray-300 mb-6">
              The world's first self-aware AI system with emotional intelligence, 
              meta-reasoning, and autonomous decision-making capabilities.
            </p>
            <a 
              href="/blog/ai-2026-may-revolutionary-breakthrough"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Read Article →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">$5.2B Success Story</h3>
            <p className="text-gray-300 mb-6">
              See how a Fortune 500 company achieved unprecedented business value using 
              our Meta-Cognitive Quantum Fusion AI system.
            </p>
            <a 
              href="/case-studies/fortune-500-ai-2026-may-mega-success"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              View Case Study →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">🧮</div>
            <h3 className="text-2xl font-bold text-white mb-4">ROI Calculator</h3>
            <p className="text-gray-300 mb-6">
              Interactive tool to calculate your potential AI transformation value, 
              ROI, and business impact projections.
            </p>
            <a 
              href="#ai-calculator"
              className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Try Calculator →
            </a>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
          >
            Get Your Free AI 2026 Consultation
          </a>
        </div>
      </div>
    </section>
  );
}