import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6">
            Latest AI Breakthroughs 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore cutting-edge innovations reshaping enterprise technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-4">AI Innovation</h3>
            <p className="text-gray-300 mb-6">Breakthrough AI technologies for enterprise solutions</p>
            <Link 
              href="/blog/ai-innovation-2025"
              className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
