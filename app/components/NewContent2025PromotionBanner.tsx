import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 NEW BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Revolutionary AI Breakthroughs Now Available
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest content featuring Quantum Neural Superintelligence, Fortune 500 transformation success stories, 
            and comprehensive implementation guides. Get exclusive access to breakthrough research and proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Quantum Neural Superintelligence</h3>
            <p className="text-sm opacity-90 mb-4">
              The next evolution in AI: quantum-enhanced neural networks creating superintelligent systems.
            </p>
            <Link
              href="/blog/ai-2025-quantum-neural-superintelligence-breakthrough"
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              Read Breakthrough
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">$12.5B ROI Success Story</h3>
            <p className="text-sm opacity-90 mb-4">
              How a Fortune 500 company achieved $12.5 billion ROI in just 10 months.
            </p>
            <Link
              href="/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story"
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              View Case Study
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Interactive ROI Calculator</h3>
            <p className="text-sm opacity-90 mb-4">
              Calculate your potential ROI from AI transformation with our interactive tool.
            </p>
            <Link
              href="/tools/ai-transformation-roi-calculator-2025"
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              Calculate ROI
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Implementation Guide</h3>
            <p className="text-sm opacity-90 mb-4">
              Complete guide to autonomous business transformation with proven strategies.
            </p>
            <Link
              href="/blog/ai-2025-autonomous-business-revolution-complete-guide"
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              Get Guide
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm opacity-90">
            <span className="flex items-center justify-center">
              <span className="mr-2">🚀</span> Quantum Superintelligence
            </span>
            <span className="flex items-center justify-center">
              <span className="mr-2">💰</span> $12.5B ROI Case Study
            </span>
            <span className="flex items-center justify-center">
              <span className="mr-2">📊</span> Interactive ROI Calculator
            </span>
            <span className="flex items-center justify-center">
              <span className="mr-2">📚</span> Complete Implementation Guides
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}