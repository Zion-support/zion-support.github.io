import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🚀 NEW CONTENT 2025 - ULTIMATE EDITION
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the most comprehensive collection of AI insights, case studies, and implementation guides for 2025. 
            Transform your business with cutting-edge knowledge and proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Enterprise AI Guide</h3>
            <p className="text-gray-200 mb-6">
              Complete transformation guide with 340% ROI case studies, implementation strategies, and real-world success stories.
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-transformation-guide" 
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Read Full Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Quantum AI 2026</h3>
            <p className="text-gray-200 mb-6">
              Revolutionary breakthrough predictions for quantum AI. Learn how quantum computing will transform artificial intelligence.
            </p>
            <Link 
              href="/blog/quantum-ai-2026-breakthrough-predictions" 
              className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors"
            >
              Explore Predictions →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Neural Interfaces</h3>
            <p className="text-gray-200 mb-6">
              Business applications and implementation guide for neural interfaces. Transform operations with brain-computer interfaces.
            </p>
            <Link 
              href="/blog/neural-interfaces-2025-business-applications" 
              className="inline-flex items-center text-pink-400 font-semibold hover:text-pink-300 transition-colors"
            >
              Learn Applications →
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Fortune 500 Success Story</h3>
          <p className="text-xl mb-6">
            See how we helped a Fortune 500 company achieve <span className="font-bold">340% ROI in 12 months</span> with our AI transformation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies/fortune-500-ai-transformation"
              className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View Case Study
            </Link>
            <Link
              href="/contact"
              className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-yellow-400 transition-colors"
            >
              Get Similar Results
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg opacity-80 mb-4">
            Join 500+ companies already transforming with our AI solutions
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-70">
            <span>✓ 98% Client Satisfaction</span>
            <span>✓ 340% Average ROI</span>
            <span>✓ 24/7 Expert Support</span>
            <span>✓ Proven Results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;