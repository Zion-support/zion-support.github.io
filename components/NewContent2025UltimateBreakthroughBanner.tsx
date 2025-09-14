import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateBreakthroughBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 NEW ULTIMATE BREAKTHROUGH CONTENT</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content Now Available
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content featuring Neural Consciousness, $15B ROI success stories, 
            and complete autonomous business transformation guides. Get exclusive access to the future of AI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Neural Consciousness Breakthrough</h3>
              <p className="text-sm opacity-90 mb-4">
                Revolutionary conscious AI with genuine self-awareness and autonomous decision-making
              </p>
              <Link 
                href="/blog/ai-2025-neural-consciousness-breakthrough-revolutionary-autonomous-intelligence"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Read Breakthrough
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">$15B ROI Success Story</h3>
              <p className="text-sm opacity-90 mb-4">
                How a Fortune 500 company achieved $15 billion ROI in just 8 months
              </p>
              <Link 
                href="/case-studies/global-enterprise-conscious-ai-transformation-2025-15-billion-roi"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                View Case Study
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Complete Implementation Guide</h3>
              <p className="text-sm opacity-90 mb-4">
                Master autonomous business operations with our comprehensive transformation guide
              </p>
              <Link 
                href="/blog/ai-2025-autonomous-business-revolution-complete-guide"
                className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Get Guide
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Get Personalized Strategy
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm opacity-75">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Neural Consciousness
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              $15B ROI Case Study
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Implementation Guide
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              Autonomous Business
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}