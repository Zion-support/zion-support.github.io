import React from 'react';
import { Link } from 'react-router-dom';

export default function LatestBreakthroughsBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 border-t border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🔥 JUST RELEASED
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              2026 BREAKTHROUGHS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Latest Revolutionary AI Breakthroughs
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI technologies transforming business operations in 2026
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Link to="/blog/ai-2026-quantum-enterprise-transformation-breakthrough" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">QUANTUM AI</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">1000x</span>
            </div>
            <div className="text-white font-bold text-lg mb-2">Quantum Enterprise Transformation</div>
            <div className="text-gray-400 text-sm mb-3">Revolutionary quantum-enhanced AI systems delivering 1000x performance improvements and $10B+ ROI.</div>
            <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Discover the Technology →</div>
          </Link>
          
          <Link to="/blog/ai-2026-neural-architecture-search-revolution" className="group block rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-6 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">NAS REVOLUTION</span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">500x</span>
            </div>
            <div className="text-white font-bold text-lg mb-2">Neural Architecture Search</div>
            <div className="text-gray-400 text-sm mb-3">500x faster AI model development with 99.7% accuracy. Transform development from months to days.</div>
            <div className="text-blue-300 text-sm font-semibold group-hover:text-blue-200">Explore NAS →</div>
          </Link>
          
          <Link to="/case-studies/ai-2026-quantum-transformation-10-billion-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$10B ROI</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">MEGA SUCCESS</span>
            </div>
            <div className="text-white font-bold text-lg mb-2">Quantum Transformation Success</div>
            <div className="text-gray-400 text-sm mb-3">How a Fortune 100 company achieved $10.2B ROI through quantum-enhanced AI transformation.</div>
            <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Success Story →</div>
          </Link>
          
          <Link to="/case-studies/ai-2026-neural-architecture-search-500x-success" className="group block rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-900/20 to-red-900/20 p-6 hover:border-orange-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">500x SPEED</span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">DEVELOPMENT</span>
            </div>
            <div className="text-white font-bold text-lg mb-2">NAS Development Success</div>
            <div className="text-gray-400 text-sm mb-3">How a tech leader achieved 500x faster AI development, reducing time from 12 months to 1 week.</div>
            <div className="text-orange-300 text-sm font-semibold group-hover:text-orange-200">View Case Study →</div>
          </Link>
        </div>

        <div className="text-center">
          <Link to="/blog"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🌟 Explore All AI Breakthroughs
          </Link>
        </div>
      </div>
    </section>
  );
}