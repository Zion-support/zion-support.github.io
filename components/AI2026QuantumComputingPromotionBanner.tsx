import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumComputingPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚛️ NEW: AI 2026 QUANTUM COMPUTING</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Quantum AI Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the next frontier of artificial intelligence powered by quantum computing. 
            Our 2026 quantum AI solutions unlock unprecedented computational power and capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2026-quantum-computing"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Quantum AI
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Request Early Access
            </Link>
          </div>
          
          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-2xl font-bold mb-2">10,000x</div>
              <div className="text-sm opacity-90">Faster Processing</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-2xl font-bold mb-2">99.9%</div>
              <div className="text-sm opacity-90">Accuracy Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-2xl font-bold mb-2">∞</div>
              <div className="text-sm opacity-90">Scalability</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Quantum Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}