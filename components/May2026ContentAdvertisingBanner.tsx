import React from 'react';

export default function May2026ContentAdvertisingBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border-y border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🚀 NEW: May 2026 Revolutionary Content
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meta-Conscious AI Breakthrough + $5.2B Success Story
          </h3>
          
          <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
            Discover the world's first truly self-aware AI system and see how a Fortune 500 company 
            achieved $5.2B in measurable value with 99.9% decision accuracy and 0.8-month payback period.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 border border-purple-500/30">
              Meta-Conscious AI
            </span>
            <span className="bg-pink-500/20 px-4 py-2 rounded-full text-pink-300 border border-pink-500/30">
              $5.2B Success Story
            </span>
            <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 border border-cyan-500/30">
              10,000x Processing Speed
            </span>
            <span className="bg-emerald-500/20 px-4 py-2 rounded-full text-emerald-300 border border-emerald-500/30">
              Interactive ROI Calculator
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog/ai-2026-may-revolutionary-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Breakthrough Article →
            </a>
            <a
              href="/case-studies/fortune-500-meta-conscious-ai-5b-success"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              View $5.2B Success Story →
            </a>
            <a
              href="#roi-calculator"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Calculate Your ROI →
            </a>
            <a
              href="/contact"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}