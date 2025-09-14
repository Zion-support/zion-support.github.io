import React from 'react';
import Link from 'next/link';

const QuantumAI2025BreakthroughPromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 QUANTUM COMPUTING BREAKTHROUGH 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Quantum-AI Convergence Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover how quantum computing breakthroughs are reshaping enterprise AI capabilities 
            with 10,000x faster processing and unprecedented optimization opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10,000x</div>
            <div className="text-lg font-semibold mb-2">Faster Processing</div>
            <div className="text-sm opacity-80">Quantum-enhanced calculations for complex optimization problems</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-lg font-semibold mb-2">Optimization Improvement</div>
            <div className="text-sm opacity-80">Logistics and supply chain optimization breakthroughs</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
            <div className="text-lg font-semibold mb-2">Cost Reduction</div>
            <div className="text-sm opacity-80">Computational costs for large-scale operations</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Real-World Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-yellow-400">Financial Services</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• 99.7% accuracy in fraud detection</li>
                <li>• Real-time portfolio optimization</li>
                <li>• 40% reduction in false positives</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-green-400">Healthcare & Pharma</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Drug discovery in hours vs. years</li>
                <li>• Personalized treatment protocols</li>
                <li>• 85% reduction in development timelines</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-quantum-computing-breakthrough"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Article →
            </Link>
            <Link
              href="/resources/ai-implementation-guide-2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
          <p className="text-sm opacity-70 mt-4">
            Don't miss the quantum computing revolution that's transforming enterprise AI in 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2025BreakthroughPromotionBanner;