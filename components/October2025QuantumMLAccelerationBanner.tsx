// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025QuantumMLAccelerationBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-teal-900 to-emerald-900 py-16">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-semibold mb-4">
            ⚛️ BREAKTHROUGH: OCTOBER 1, 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quantum ML Acceleration: 50,000x Faster Training
          </h2>
          <p className="text-xl text-teal-200 mb-6 max-w-3xl mx-auto">
            Revolutionary quantum computing integration • 99.97% Accuracy • $12.7B Market Impact
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">50,000x</div>
              <div className="text-sm text-teal-200">Faster Training</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">99.97%</div>
              <div className="text-sm text-teal-200">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-sm text-teal-200">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">3,840%</div>
              <div className="text-sm text-teal-200">ROI</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blog/ai-2025-october-quantum-ml-acceleration-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Quantum ML
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
