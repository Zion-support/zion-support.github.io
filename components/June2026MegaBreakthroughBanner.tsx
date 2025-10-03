import React, { JSX } from "react";

export default function June2026MegaBreakthroughBanner(): JSX.Element {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-indigo-900/50 border-b border-blue-500/30">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
          <span className="text-blue-400 font-bold text-lg tracking-wider uppercase">
            ✨ June 2026: AI Mega Breakthrough Revolution!
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Unveiling Meta-Cognitive AI & Quantum-Neural Networks
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
          Experience 2000x processing speed, 99.9% automation rates, and a Fortune 500 success story with $5.2B in value generated.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/blog/ai-2026-june-mega-breakthrough-revolution"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            Explore Breakthroughs →
          </a>
          <a
            href="/case-studies/fortune-500-ai-2026-mega-transformation-success"
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
          >
            View $5.2B Success Story
          </a>
        </div>
      </div>
    </section>
  );
}