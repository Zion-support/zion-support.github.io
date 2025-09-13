import React from 'react';
import Link from 'next/link';

export default function AI2026_2030FuturePredictionsPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm mb-4 animate-pulse">
              🔮 REVOLUTIONARY FUTURE PREDICTIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI 2026-2030 Future Predictions Showcase
            </h2>
            <p className="text-lg mb-6 max-w-2xl">
              Explore revolutionary AI technologies that will reshape our world from 2026 to 2030. 
              From quantum-neural fusion to consciousness AI, discover the breakthrough innovations 
              that will define the next decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/ai-2026-2030-future-predictions-showcase" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View Predictions
              </Link>
              <Link 
                href="/ai-2030-future-revolutionary-showcase" 
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore 2030 Vision
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
                <div className="text-lg font-semibold mb-2">ROI Potential</div>
                <div className="text-sm text-gray-300">Consciousness AI Era</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}