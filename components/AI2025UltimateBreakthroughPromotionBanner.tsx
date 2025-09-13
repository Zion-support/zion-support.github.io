import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4 animate-pulse">
            🚀 ULTIMATE BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI 2025 Ultimate Breakthrough Predictions
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most comprehensive AI 2025 breakthrough predictions. From quantum computing to synthetic intelligence, explore revolutionary technologies delivering 15,000% ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">15,000%</div>
            <div className="text-sm opacity-90">Expected ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-sm opacity-90">Accuracy Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">10,000x</div>
            <div className="text-sm opacity-90">Faster Processing</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/blog/ai-2025-breakthrough-predictions-ultimate"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
          >
            Read Ultimate Predictions
          </Link>
          <Link 
            href="/case-studies/ai-2025-enterprise-transformation-breakthrough-ultimate"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
          >
            View Success Story
          </Link>
          <Link 
            href="/ai-implementation-guide-2025"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-colors text-center"
          >
            Get Implementation Guide
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm opacity-75">
            Join 10,000+ companies already implementing AI 2025 breakthrough technologies
          </p>
        </div>
      </div>
    </div>
  );
}