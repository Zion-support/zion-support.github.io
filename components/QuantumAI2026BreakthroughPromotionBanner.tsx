import React from 'react';
import Link from 'next/link';

export default function QuantumAI2026BreakthroughPromotionBanner() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚡ QUANTUM REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
            Quantum AI 2026 Breakthrough
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of quantum computing to unlock exponential AI capabilities. 
            Solve complex problems in seconds that would take traditional computers years to process.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum Machine Learning</h3>
            <p className="text-gray-300 text-sm">
              Leverage quantum algorithms to process massive datasets with unprecedented speed and accuracy.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-3">Quantum Optimization</h3>
            <p className="text-gray-300 text-sm">
              Solve complex optimization problems across supply chains and resource allocation with quantum algorithms.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-bold mb-3">Quantum Security</h3>
            <p className="text-gray-300 text-sm">
              Unbreakable quantum encryption and security protocols for your most sensitive data.
            </p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10^15</div>
            <div className="text-sm opacity-90">Speed Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
            <div className="text-sm opacity-90">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">1000x</div>
            <div className="text-sm opacity-90">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-sm opacity-90">Security Level</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quantum-ai-2026-breakthrough"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore Quantum AI
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Additional Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/ai-2025-2026-ultimate-breakthrough" className="text-cyan-300 hover:text-white transition-colors">
              AI Breakthrough →
            </Link>
            <Link href="/advanced-neural-architectures-2026" className="text-cyan-300 hover:text-white transition-colors">
              Neural Architectures →
            </Link>
            <Link href="/case-studies" className="text-cyan-300 hover:text-white transition-colors">
              Case Studies →
            </Link>
            <Link href="/services" className="text-cyan-300 hover:text-white transition-colors">
              Our Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}