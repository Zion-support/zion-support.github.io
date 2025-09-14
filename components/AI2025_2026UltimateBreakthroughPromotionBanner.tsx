import React from 'react';
import Link from 'next/link';

export default function AI2025_2026UltimateBreakthroughPromotionBanner() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            AI 2025-2026 Ultimate Breakthrough
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary AI technologies that will reshape industries, 
            transform business operations, and unlock unprecedented possibilities for growth and innovation.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Advanced Neural Architectures</h3>
            <p className="text-gray-300 text-sm">
              Next-generation neural networks with 1000x processing power and self-optimizing capabilities.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI Integration</h3>
            <p className="text-gray-300 text-sm">
              Revolutionary quantum computing integration for exponential processing capabilities.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Systems</h3>
            <p className="text-gray-300 text-sm">
              Fully autonomous business operations that adapt and optimize without human intervention.
            </p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">500%</div>
            <div className="text-sm opacity-90">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-sm opacity-90">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">75%</div>
            <div className="text-sm opacity-90">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">10x</div>
            <div className="text-sm opacity-90">Faster Processing</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ai-2025-2026-ultimate-breakthrough"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore Breakthrough
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Additional Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/quantum-ai-2026-breakthrough" className="text-purple-300 hover:text-white transition-colors">
              Quantum AI →
            </Link>
            <Link href="/advanced-neural-architectures-2026" className="text-purple-300 hover:text-white transition-colors">
              Neural Architectures →
            </Link>
            <Link href="/case-studies" className="text-purple-300 hover:text-white transition-colors">
              Success Stories →
            </Link>
            <Link href="/services" className="text-purple-300 hover:text-white transition-colors">
              Our Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}