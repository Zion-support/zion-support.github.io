// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import April2026RevolutionaryBreakthroughBanner from '../components/April2026RevolutionaryBreakthroughBanner';
import April2026SuccessStoryBanner from '../components/April2026SuccessStoryBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="py-16 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zion Tech Group</h1>
          <p className="text-lg md:text-xl text-gray-300">Leading AI insights, case studies, and implementation guides.</p>
        </div>
      </section>

      {/* April 2026 Revolutionary Breakthrough Banner - Most Prominent */}
      <April2026RevolutionaryBreakthroughBanner />

      {/* April 2026 Success Story Banner - Fortune 500 $5.2B Success */}
      <April2026SuccessStoryBanner />

      {/* Fresh content promo — newly published */}
      <section className="py-4 border-t border-b border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-white/90 font-semibold">New: April 2026 Meta-Cognitive Breakthroughs</div>
            <div className="flex flex-wrap gap-2">
              <a href="/blog/ai-2026-april-revolutionary-breakthrough" className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 border border-purple-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-purple-500/30 transition-colors">Meta-Cognitive AI 1000x<span>→</span></a>
              <a href="/case-studies/fortune-500-april-2026-meta-cognitive-success" className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 border border-green-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-green-500/30 transition-colors">$5.2B Success Story<span>→</span></a>
              <a href="/blog/ai-2026-quantum-neural-fusion-breakthrough" className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-blue-500/30 transition-colors">Quantum-Neural Fusion<span>→</span></a>
              <a href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success" className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-emerald-500/30 transition-colors">$2.3B Previous Success<span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Latest AI Breakthroughs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the most advanced AI technologies and real-world success stories 
              from Fortune 500 companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Meta-Cognitive AI Breakthrough */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Meta-Cognitive Superintelligence</h3>
              <p className="text-gray-300 mb-6">
                The world's first AI that thinks about thinking, delivering 1000x performance 
                improvements and autonomous self-optimization.
              </p>
              <div className="space-y-2 mb-6 text-gray-300">
                <div>• 1000x processing speed</div>
                <div>• 99.7% operational efficiency</div>
                <div>• $5.2B proven value</div>
                <div>• 0.8 month payback period</div>
              </div>
              <a 
                href="/blog/ai-2026-april-revolutionary-breakthrough"
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Read Full Breakthrough →
              </a>
            </div>

            {/* Fortune 500 Success Story */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">$5.2B Fortune 500 Success</h3>
              <p className="text-gray-300 mb-6">
                See how a Fortune 500 manufacturing giant achieved unprecedented transformation 
                with our meta-cognitive platform.
              </p>
              <div className="space-y-2 mb-6 text-gray-300">
                <div>• $5.2B total value generated</div>
                <div>• 99.7% operational efficiency</div>
                <div>• 0.8 month payback period</div>
                <div>• 400% return on investment</div>
              </div>
              <a 
                href="/case-studies/fortune-500-april-2026-meta-cognitive-success"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                View Success Story →
              </a>
            </div>

            {/* Quantum-Neural Fusion */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary combination of quantum computing and neural networks, 
                enabling exponential speedup and parallel processing.
              </p>
              <div className="space-y-2 mb-6 text-gray-300">
                <div>• Quantum parallelism</div>
                <div>• Neural quantum states</div>
                <div>• Coherent processing</div>
                <div>• Exponential speedup</div>
              </div>
              <a 
                href="/blog/ai-2026-quantum-neural-fusion-breakthrough"
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the meta-cognitive revolution and unlock unprecedented AI capabilities 
            for your organization with measurable business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Get Free Consultation
            </a>
            <a 
              href="/blog/ai-2026-april-revolutionary-breakthrough" 
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Read Latest Breakthroughs →
            </a>
            <a 
              href="/case-studies/fortune-500-april-2026-meta-cognitive-success" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View $5.2B Success Story
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}