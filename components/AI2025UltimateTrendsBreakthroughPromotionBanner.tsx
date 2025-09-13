import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateTrendsBreakthroughPromotionBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-white rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-bold animate-bounce">🚀 JUST RELEASED</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            🎉 AI 2025 Ultimate Trends Breakthrough - Revolutionary Predictions Inside!
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-5xl mx-auto">
            Discover the breakthrough AI trends that will transform 2025 and beyond. Get expert insights on 
            <span className="font-semibold"> Neural Interfaces</span>, 
            <span className="font-semibold"> Quantum-AI Fusion</span>, and 
            <span className="font-semibold"> Autonomous Business Systems</span> that deliver up to 
            <span className="font-bold text-yellow-300"> 25,000% ROI</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/blog/ai-2025-ultimate-trends-breakthrough"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Read Full Report
            </Link>
            <Link
              href="/case-studies/ai-2025-global-transformation-breakthrough-15000-roi"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              🏆 See 15,000% ROI Case Study
            </Link>
            <Link
              href="/tools/ai-2025-roi-calculator"
              className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🧮 Calculate Your ROI
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <div className="text-2xl font-bold text-yellow-300">15,000%</div>
              <div className="text-sm">Proven ROI</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <div className="text-2xl font-bold text-yellow-300">99.7%</div>
              <div className="text-sm">Accuracy Rate</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <div className="text-2xl font-bold text-yellow-300">10,000x</div>
              <div className="text-sm">Faster Processing</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <div className="text-2xl font-bold text-yellow-300">$345M</div>
              <div className="text-sm">Cost Savings</div>
            </div>
          </div>
          
          <div className="mt-6 text-sm opacity-80">
            ⚡ Limited Time: Download our free implementation guide and get expert consultation
          </div>
        </div>
      </div>
    </section>
  );
}