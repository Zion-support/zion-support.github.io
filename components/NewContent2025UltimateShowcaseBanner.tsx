import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge AI solutions, autonomous systems, and quantum computing breakthroughs 
            that are transforming businesses worldwide in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-4">Enterprise Automation Revolution</h3>
            <p className="text-gray-200 mb-6">
              Complete guide to AI-powered enterprise automation delivering 340% ROI and 
              unprecedented operational efficiency.
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-automation-revolution-ultimate-success-guide"
              className="inline-flex items-center text-purple-300 hover:text-white font-semibold transition-colors"
            >
              Read Full Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-4">Quantum AI Breakthrough</h3>
            <p className="text-gray-200 mb-6">
              Revolutionary quantum computing and AI integration delivering 1000x computational 
              speedup for business applications.
            </p>
            <Link 
              href="/blog/quantum-ai-2026-business-breakthrough-ultimate-guide"
              className="inline-flex items-center text-purple-300 hover:text-white font-semibold transition-colors"
            >
              Explore Quantum AI →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-4">Autonomous Business Systems</h3>
            <p className="text-gray-200 mb-6">
              Self-managing AI systems that operate independently, optimize continuously, 
              and deliver 98% operational efficiency.
            </p>
            <Link 
              href="/blog/ai-2025-autonomous-business-systems-revolution"
              className="inline-flex items-center text-purple-300 hover:text-white font-semibold transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-6">
            <span className="text-lg font-semibold">📊 PROVEN RESULTS</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">340%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-sm opacity-90">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-sm opacity-90">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm opacity-90">Autonomous Operation</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcaseBanner;