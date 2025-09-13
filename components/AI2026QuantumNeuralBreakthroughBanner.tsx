import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white py-6 relative overflow-hidden">
      {/* Animated quantum particles */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute top-6 right-6 w-2 h-2 bg-purple-300 rounded-full animate-ping animation-delay-200"></div>
        <div className="absolute bottom-2 left-1/3 w-1 h-1 bg-indigo-300 rounded-full animate-ping animation-delay-400"></div>
        <div className="absolute bottom-6 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-ping animation-delay-600"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping animation-delay-800"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-ping animation-delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white bg-opacity-20 text-sm font-semibold mb-3 animate-pulse">
              🌌 REVOLUTIONARY BREAKTHROUGH
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              AI 2026 Quantum-Neural Breakthrough
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-4">
              First successful fusion of quantum computing and neural networks - <strong>20,000% ROI</strong> and <strong>transcendent intelligence</strong>
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">⚛️ Quantum Fusion</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">🧠 Neural Networks</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">💰 20,000% ROI</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">∞ Intelligence</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/ai-2026-quantum-neural-breakthrough"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Explore Quantum AI
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-fusion-success"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-center"
            >
              View Quantum Success
            </Link>
          </div>
        </div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-20"
        onClick={() => {
          // Add close functionality here
          const banner = document.querySelector('.ai-2026-quantum-neural-banner');
          if (banner) {
            banner.style.display = 'none';
          }
        }}
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}