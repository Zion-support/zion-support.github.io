// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025NewCuttingEdgeContentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 px-6">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🎉 JUST PUBLISHED: OCTOBER 1, 2025 - CUTTING-EDGE AI BREAKTHROUGHS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Technologies Transforming Enterprise Operations
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore the next generation of AI: Autonomous Self-Healing Systems, Quantum Supply Chain Optimization, 
            and Neuromorphic Decision Intelligence delivering unprecedented business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Autonomous Resilience Systems */}
          <Link 
            to="/blog/ai-2025-october-1-autonomous-resilience-systems"
            className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-3 text-blue-300">Autonomous AI Resilience Systems</h3>
            <p className="text-white/80 mb-4">
              Self-healing infrastructure that prevents failures before they happen. Fortune 500 achieves 
              99.99% uptime with zero-touch recovery.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-blue-300 font-bold">$3.4B</div>
                <div className="text-white/70">Downtime Prevented</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-indigo-300 font-bold">99.99%</div>
                <div className="text-white/70">Uptime Achieved</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-blue-300 font-bold">95%</div>
                <div className="text-white/70">Faster Recovery</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-indigo-300 font-bold">2,400%</div>
                <div className="text-white/70">ROI</div>
              </div>
            </div>
            <div className="mt-4 text-blue-400 font-semibold flex items-center">
              Read Full Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Card 2: Quantum Supply Chain Optimization */}
          <Link 
            to="/blog/ai-2025-october-1-quantum-supply-chain-optimization"
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-3 text-purple-300">Quantum AI Supply Chain Revolution</h3>
            <p className="text-white/80 mb-4">
              Quantum-enhanced algorithms solve previously impossible optimization problems. Fortune 50 
              achieves $8.7B savings with 97% forecast accuracy.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-purple-300 font-bold">$8.7B</div>
                <div className="text-white/70">Cost Savings</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-pink-300 font-bold">97%</div>
                <div className="text-white/70">Forecast Accuracy</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-purple-300 font-bold">94%</div>
                <div className="text-white/70">Inventory Optimized</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-pink-300 font-bold">3,200%</div>
                <div className="text-white/70">ROI</div>
              </div>
            </div>
            <div className="mt-4 text-purple-400 font-semibold flex items-center">
              Read Full Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Card 3: Neuromorphic Decision Intelligence */}
          <Link 
            to="/blog/ai-2025-october-1-neuromorphic-decision-intelligence"
            className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50"
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-3 text-pink-300">Neuromorphic Decision Intelligence</h3>
            <p className="text-white/80 mb-4">
              Brain-inspired computing enables sub-millisecond AI at the edge. Fortune 100 achieves 
              $4.7B value with 1000x energy efficiency.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-pink-300 font-bold">0.32ms</div>
                <div className="text-white/70">Inference Time</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-rose-300 font-bold">1000x</div>
                <div className="text-white/70">More Efficient</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-pink-300 font-bold">98.7%</div>
                <div className="text-white/70">Accuracy</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-rose-300 font-bold">$4.7B</div>
                <div className="text-white/70">Value Created</div>
              </div>
            </div>
            <div className="mt-4 text-pink-400 font-semibold flex items-center">
              Read Full Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <p className="text-2xl font-bold mb-2 text-white">
              Combined Impact: $16.8B in Value Creation
            </p>
            <p className="text-white/80">
              These revolutionary technologies are already deployed in production at leading Fortune 500 companies
            </p>
            <Link 
              to="/blog" 
              className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Explore All Articles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
