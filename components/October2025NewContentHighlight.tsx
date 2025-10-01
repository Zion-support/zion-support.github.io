import React from 'react';

export default function October2025NewContentHighlight() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-blue-900/20 backdrop-blur-sm border-b border-purple-500/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🆕 NEW CONTENT JUST PUBLISHED - OCTOBER 1, 2025
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Latest AI Innovation: Supply Chain Resilience Revolution
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how Fortune 100 companies are transforming supply chains with AI-driven resilience platforms. 
            <strong className="text-purple-400"> $3.2B value creation</strong>, 
            <strong className="text-indigo-400"> 11.4x ROI</strong>, and 
            <strong className="text-blue-400"> 94% service levels</strong> — read the full story now!
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/blog/ai-2025-october-supply-chain-resilience-revolution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              📚 Implementation Guide
            </a>
            <a 
              href="/case-studies/ai-2025-oct-global-manufacturing-supply-chain-3-2-billion-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              💰 $3.2B Success Story
            </a>
            <a 
              href="/services/ai-2025-october-supply-chain-resilience-services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              🚀 Get Started
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-purple-500/10 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl font-extrabold text-purple-400">$3.2B</div>
              <div className="text-xs text-purple-300">Value Created</div>
            </div>
            <div className="bg-indigo-500/10 backdrop-blur-lg rounded-lg p-4 border border-indigo-500/20">
              <div className="text-2xl font-extrabold text-indigo-400">92%</div>
              <div className="text-xs text-indigo-300">Prediction Accuracy</div>
            </div>
            <div className="bg-blue-500/10 backdrop-blur-lg rounded-lg p-4 border border-blue-500/20">
              <div className="text-2xl font-extrabold text-blue-400">2.8 min</div>
              <div className="text-xs text-blue-300">Recovery Time</div>
            </div>
            <div className="bg-cyan-500/10 backdrop-blur-lg rounded-lg p-4 border border-cyan-500/20">
              <div className="text-2xl font-extrabold text-cyan-400">11.4x</div>
              <div className="text-xs text-cyan-300">ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
