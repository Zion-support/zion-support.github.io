import React from 'react';
import Link from 'next/link';

export default function NewContentAdvertisingBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-cyan-900/20 border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 NEW 2026 CONTENT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionary AI Breakthroughs & Success Stories
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/blog/ai-2026-quantum-enterprise-transformation-breakthrough" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">QUANTUM BREAKTHROUGH</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">1000x</span>
            </div>
            <div className="text-white font-bold text-lg mb-2">AI 2026: Quantum Enterprise Transformation</div>
            <div className="text-gray-400 text-sm mb-3">Revolutionary quantum-enhanced AI systems delivering 1000x performance improvements and $10B+ ROI across Fortune 500 enterprises.</div>
            <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Discover the Technology →</div>
          </Link>
          
          <Link href="/case-studies/ai-2026-quantum-transformation-10-billion-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$10B ROI</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">MEGA SUCCESS</span>
            </div>
            <div className="text-white font-bold text-lg mb-2">Quantum Transformation Success</div>
            <div className="text-gray-400 text-sm mb-3">How a Fortune 100 company achieved $10.2B ROI through quantum-enhanced AI transformation in just 18 months.</div>
            <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Success Story →</div>
          </Link>
          
          <Link href="/blog/ai-2026-neural-architecture-search-revolution" className="group block rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-6 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">NAS REVOLUTION</span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">500x SPEED</span>
            </div>
            <div className="text-white font-bold text-lg mb-2">AI 2026: Neural Architecture Search</div>
            <div className="text-gray-400 text-sm mb-3">Revolutionary NAS technology delivering 500x faster AI model development with 99.7% accuracy. Transform development from months to days.</div>
            <div className="text-blue-300 text-sm font-semibold group-hover:text-blue-200">Explore NAS →</div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All AI Content
          </Link>
        </div>
      </div>
    </section>
  );
}