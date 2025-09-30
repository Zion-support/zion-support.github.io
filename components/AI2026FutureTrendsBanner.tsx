import React from 'react';

export default function AI2026FutureTrendsBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-4">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🔮 Future Trends 2026
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">
            AI 2026 Future Trends: Mega Predictions for Enterprise Transformation
          </h3>
          
          <p className="text-indigo-200 text-lg mb-4 max-w-3xl mx-auto">
            Discover the revolutionary AI trends and predictions that will transform enterprise operations in 2026, 
            featuring meta-cognitive superintelligence, quantum computing, and autonomous systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-4">
            <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300">Meta-Cognitive AI</span>
            <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">Quantum Computing</span>
            <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-300">Autonomous Enterprises</span>
            <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300">$10T Market Value</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog/ai-2026-future-trends-mega-predictions"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              Explore Future Trends →
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Get Strategic Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}