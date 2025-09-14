import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateInnovationShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT ALERT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI 2025 Ultimate Innovation Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most revolutionary AI breakthroughs of 2025 that are transforming 
            industries and creating unprecedented opportunities for businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2025-ultimate-innovation-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Explore Innovations →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              Get Started
            </Link>
          </div>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural Consciousness AI</h3>
              <p className="text-sm opacity-90">Revolutionary self-aware AI systems</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">Quantum AI Processing</h3>
              <p className="text-sm opacity-90">Lightning-fast quantum algorithms</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Ecosystems</h3>
              <p className="text-sm opacity-90">Self-managing business systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}