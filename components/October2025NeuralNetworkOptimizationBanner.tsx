import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025NeuralNetworkOptimizationBanner() {
  return (
    <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-900 border-t-4 border-sky-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400 mb-6">
            <span className="text-sky-300 text-sm font-bold animate-pulse">
              🧠 AI OPTIMIZATION: OCTOBER 1, 2025 - JUST PUBLISHED
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Neural Network Optimization Engine
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-6">
            Reduce AI Costs by 95% While Improving Performance
          </h3>

          {/* Value Props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-400/30">
              <div className="text-4xl font-bold text-sky-300 mb-2">$8.4B</div>
              <div className="text-white text-sm">Cost Savings Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-400/30">
              <div className="text-4xl font-bold text-blue-300 mb-2">95%</div>
              <div className="text-white text-sm">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-400/30">
              <div className="text-4xl font-bold text-indigo-300 mb-2">12x</div>
              <div className="text-white text-sm">Faster Inference</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-400/30">
              <div className="text-4xl font-bold text-sky-400 mb-2">3,847%</div>
              <div className="text-white text-sm">ROI in 6 Months</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Revolutionary AI optimization engine that automatically compresses, prunes, and accelerates 
            neural networks without sacrificing accuracy. Deploy models 12x faster, reduce cloud costs by 95%, 
            and achieve breakthrough performance on any hardware.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 my-12 text-left">
            <div className="bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-lg p-6 border border-sky-400/30">
              <div className="text-2xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">Automated Optimization</h4>
              <p className="text-gray-300 text-sm">
                AI-powered compression and pruning with zero manual tuning required
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg p-6 border border-blue-400/30">
              <div className="text-2xl mb-3">💰</div>
              <h4 className="text-lg font-bold text-white mb-2">Massive Cost Savings</h4>
              <p className="text-gray-300 text-sm">
                95% reduction in cloud inference costs while maintaining accuracy
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-sky-500/20 rounded-lg p-6 border border-indigo-400/30">
              <div className="text-2xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Universal Compatibility</h4>
              <p className="text-gray-300 text-sm">
                Works with any framework: PyTorch, TensorFlow, ONNX, and more
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog/ai-2025-oct-neural-network-optimization-engine"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold rounded-lg hover:from-sky-600 hover:to-blue-600 transform hover:scale-105 transition-all shadow-lg"
            >
              📚 Technical Guide
            </Link>
            <Link
              to="/case-studies/ai-2025-oct-neural-optimization-8-4-billion-savings"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 border-2 border-sky-400 transform hover:scale-105 transition-all"
            >
              💎 $8.4B Savings Story
            </Link>
            <Link
              to="/services/neural-network-optimization"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-sky-600 transform hover:scale-105 transition-all shadow-lg"
            >
              🚀 Optimize Now
            </Link>
          </div>

          {/* Trust Signal */}
          <div className="mt-12 pt-8 border-t border-sky-400/30">
            <p className="text-sky-200 text-sm mb-4">
              ⭐ Deployed by AI leaders worldwide | $8.4B in cost savings achieved
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-xs">
              <span>✓ Framework Agnostic</span>
              <span>✓ Accuracy Guaranteed</span>
              <span>✓ One-Click Deployment</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
