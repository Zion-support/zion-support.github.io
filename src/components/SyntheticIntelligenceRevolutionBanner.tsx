import React from 'react';
import Link from 'next/link';

const SyntheticIntelligenceRevolutionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Main headline */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 animate-pulse">
            🚀 REVOLUTIONARY BREAKTHROUGH
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2025 Synthetic Intelligence
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolution
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            The breakthrough that changes everything. Discover how synthetic intelligence is delivering 
            <span className="font-bold text-yellow-300"> 2,500-5,000% ROI </span>
            and transforming businesses with autonomous operations that outperform traditional systems by 
            <span className="font-bold text-green-300"> 10,000x</span>.
          </p>
        </div>

        {/* Key benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-white mb-2">10,000x Faster</h3>
            <p className="text-gray-300 text-sm">Processing speeds that revolutionize operations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-white mb-2">99.9% Accuracy</h3>
            <p className="text-gray-300 text-sm">Decision-making precision that eliminates errors</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-bold text-white mb-2">50,000% ROI</h3>
            <p className="text-gray-300 text-sm">Unprecedented returns on investment</p>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/blog/ai-2025-synthetic-intelligence-revolution"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">🧠</span>
            Read the Full Article
            <span className="ml-2">→</span>
          </Link>
          <Link
            href="/case-studies/ai-2025-synthetic-intelligence-transformation-breakthrough"
            className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
          >
            <span className="mr-2">📊</span>
            View Case Study
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Success metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-yellow-300">50,000%</div>
            <div className="text-sm text-gray-300">ROI Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-300">99.9%</div>
            <div className="text-sm text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-300">10,000x</div>
            <div className="text-sm text-gray-300">Performance Gain</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-300">95%</div>
            <div className="text-sm text-gray-300">Cost Reduction</div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            Fortune 500 Verified
          </div>
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            Independent Audited
          </div>
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            Real-World Results
          </div>
        </div>

        {/* Urgency message */}
        <div className="mt-8 p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30">
          <p className="text-white font-semibold">
            ⚠️ <span className="text-yellow-300">Limited Time:</span> Early adopters are gaining massive competitive advantages. 
            Don't let your competitors get ahead while you're still using yesterday's technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SyntheticIntelligenceRevolutionBanner;