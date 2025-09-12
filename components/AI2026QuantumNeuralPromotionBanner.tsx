import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                ⚛️ BREAKTHROUGH
              </span>
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                AI 2026
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Quantum-Neural Fusion Breakthrough: The Future is Here
            </h2>
            <p className="text-purple-100 text-sm md:text-base">
              Discover revolutionary quantum-neural fusion technologies delivering 15,000% ROI and 
              unprecedented computational power. The next evolution of AI starts now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2026-quantum-neural-fusion-breakthrough"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-center text-sm"
            >
              Learn More
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-fusion-success"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-center text-sm"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}