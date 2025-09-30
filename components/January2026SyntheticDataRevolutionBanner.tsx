import React from 'react';
import Link from 'next/link';

export default function January2026SyntheticDataRevolutionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🔬 NEW JANUARY 2026
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              1000x FASTER
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI 2026: Synthetic Data Revolution
          </h2>
          <p className="text-xl text-pink-200 max-w-4xl mx-auto mb-6">
            Discover how synthetic data is revolutionizing AI training, delivering 1000x faster model development 
            with 99.9% accuracy and unlimited scalability.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-pink-300 font-semibold">1000x Faster Training</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-green-300 font-semibold">99.9% Accuracy</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-yellow-300 font-semibold">Unlimited Scale</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-purple-300 font-semibold">Zero Privacy Risk</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-pink-300">Revolutionary Capabilities</h3>
            <ul className="space-y-3 text-pink-100">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>1000x faster training vs real data collection</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>99.9% accuracy matching real-world performance</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Unlimited scalability for any use case</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Perfect labeling with 100% accuracy</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Industry Success Stories</h3>
            <ul className="space-y-3 text-pink-100">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🏥</span>
                <span>Healthcare: $200M+ in development savings</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🚗</span>
                <span>Autonomous Vehicles: 1M+ scenarios daily</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🏦</span>
                <span>Finance: $2B+ in fraud prevention</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🏭</span>
                <span>Manufacturing: Perfect quality control</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link 
              href="/blog/ai-2026-synthetic-data-revolution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Read Full Article
              <span className="text-xl">→</span>
            </Link>
            <Link 
              href="/case-studies/ai-2026-synthetic-data-transformation-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View $300M Success Story
              <span className="text-xl">→</span>
            </Link>
          </div>
          <p className="text-pink-200 text-sm">
            Join 500+ companies already using synthetic data to achieve 1000x faster AI development
          </p>
        </div>
      </div>
    </section>
  );
}