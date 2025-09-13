import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            🔥 BREAKTHROUGH ANNOUNCEMENT 🔥
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            AI 2025 ULTIMATE BREAKTHROUGH REVOLUTION
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-5xl mx-auto">
            The most revolutionary AI breakthrough in human history! Experience 10,000% ROI with autonomous operations, quantum-AI fusion, and transcendent intelligence that transforms reality itself.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black bg-opacity-30 p-6 rounded-xl border border-yellow-400">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10,000%</div>
              <div className="text-lg font-semibold">ROI Achieved</div>
              <div className="text-sm text-gray-300">In just 6 months</div>
            </div>
            <div className="bg-black bg-opacity-30 p-6 rounded-xl border border-cyan-400">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold">Accuracy</div>
              <div className="text-sm text-gray-300">Autonomous operations</div>
            </div>
            <div className="bg-black bg-opacity-30 p-6 rounded-xl border border-purple-400">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg font-semibold">Potential</div>
              <div className="text-sm text-gray-300">Transcendent intelligence</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Experience the Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-lg font-bold text-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              🏆 See Success Story
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthroughs"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-black px-8 py-4 rounded-lg font-bold text-xl hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              🔥 Watch Demo
            </Link>
          </div>
          <div className="mt-6 text-sm text-gray-200">
            ⚡ Limited Time: Join the AI revolution that's transforming businesses worldwide!
          </div>
        </div>
      </div>
    </div>
  );
}