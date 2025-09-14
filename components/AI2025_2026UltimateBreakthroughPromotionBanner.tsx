import React from 'react';
import Link from 'next/link';

export default function AI2025_2026UltimateBreakthroughPromotionBanner() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW BREAKTHROUGH</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            AI 2025-2026 Ultimate Breakthrough
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI technologies that will transform your business. 
            Neural superintelligencequantum AI fusionand autonomous systems await.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-semibold mb-2">Neural Superintelligence</h3>
              <p className="text-sm opacity-80">1000x faster processing with human-level reasoning</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-semibold mb-2">Quantum AI Fusion</h3>
              <p className="text-sm opacity-80">Revolutionary computational power</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-semibold mb-2">Autonomous Systems</h3>
              <p className="text-sm opacity-80">Self-managing AI that learns continuously</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-2026-ultimate-breakthrough"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Breakthrough →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all"
            >
              Get Started
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>500% Average ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Fortune 500 Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}