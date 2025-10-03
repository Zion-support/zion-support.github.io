import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026SyntheticDataRevolutionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 border-t border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🔮 JANUARY 2026 REVOLUTION
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              1000x FASTER
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Synthetic Data Revolution
          </h2>
          <p className="text-xl text-purple-200 mb-6 max-w-4xl mx-auto">
            Revolutionary synthetic data generation achieving 1000x faster AI training 
            while maintaining perfect privacy and data sovereignty. Transform your AI development today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">1000x Faster Training</h3>
                <p className="text-purple-200 text-sm">Perfect Privacy</p>
              </div>
            </div>
            <p className="text-purple-100 mb-4">
              Achieve 1000x faster AI training with synthetic data generation. 
              Maintain perfect privacy compliance while having unlimited access 
              to high-quality training data.
            </p>
            <Link to="/blog/ai-2026-synthetic-data-revolution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Learn More <span>→</span>
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">$2.8B ROI Success</h3>
                <p className="text-green-200 text-sm">Healthcare Case Study</p>
              </div>
            </div>
            <p className="text-green-100 mb-4">
              See how a Fortune 500 healthcare company achieved $2.8B ROI with 
              synthetic data while maintaining perfect privacy compliance and 
              accelerating drug discovery by 10x.
            </p>
            <Link to="/case-studies/ai-2026-synthetic-data-transformation-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all"
            >
              View Success Story <span>→</span>
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-purple-200 text-sm">Accuracy</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-purple-200 text-sm">Cost Reduction</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-purple-200 text-sm">Unlimited Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}