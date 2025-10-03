import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026NeuralOptimizationRevolutionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 border-b border-purple-500/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🚀 JANUARY 2026 BREAKTHROUGH
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              1000x PERFORMANCE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Neural Optimization Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Revolutionary neural optimization techniques delivering <strong className="text-yellow-400">1000x performance improvements</strong>, 
            <strong className="text-green-400"> 90% cost reduction</strong>, and <strong className="text-blue-400">$200M+ ROI</strong> across Fortune 500 companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-800/20 to-indigo-800/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">1000x Performance</h3>
                <p className="text-sm text-gray-300">Lightning-fast inference</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Quantum-enhanced neural pruning delivers unprecedented speed improvements while maintaining 99.9% accuracy.
            </p>
            <div className="text-purple-300 text-sm font-semibold">Sub-10ms latency →</div>
          </div>

          <div className="bg-gradient-to-br from-green-800/20 to-emerald-800/20 border border-green-500/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">90% Cost Reduction</h3>
                <p className="text-sm text-gray-300">Massive savings</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Revolutionary optimization techniques reduce infrastructure costs by 90% while improving performance.
            </p>
            <div className="text-green-300 text-sm font-semibold">$200M+ ROI →</div>
          </div>

          <div className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">99.9% Accuracy</h3>
                <p className="text-sm text-gray-300">Precision maintained</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Advanced neural architecture search maintains accuracy while achieving massive performance gains.
            </p>
            <div className="text-blue-300 text-sm font-semibold">Zero compromise →</div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link 
              href="/blog/ai-2026-advanced-neural-optimization-revolution" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🚀 Read Complete Guide
            </Link>
            <Link 
              href="/case-studies/ai-2026-neural-optimization-mega-success" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              💰 View $200M Success Story
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🎯 Start Your Transformation
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>500+ Enterprise Implementations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>Zero Downtime Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span>Fortune 500 Proven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}