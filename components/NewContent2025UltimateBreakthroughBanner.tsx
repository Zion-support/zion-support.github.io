import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ultimate Breakthrough Content
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI, quantum computing, and autonomous systems content that's transforming businesses worldwide. 
            Get exclusive access to breakthrough insights and proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-4">Synthetic Intelligence Revolution</h3>
            <p className="text-gray-200 mb-6">
              Explore how synthetic intelligence is revolutionizing business operations with unprecedented automation and decision-making capabilities.
            </p>
            <Link 
              href="/blog/ai-2025-synthetic-intelligence-revolution-ultimate-breakthrough"
              className="inline-flex items-center text-white font-semibold hover:text-purple-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-4">Quantum Computing Transformation</h3>
            <p className="text-gray-200 mb-6">
              Discover how quantum computing is delivering breakthrough performance and unprecedented competitive advantages in 2025.
            </p>
            <Link 
              href="/blog/quantum-computing-2025-business-transformation-ultimate-guide"
              className="inline-flex items-center text-white font-semibold hover:text-purple-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-4">Autonomous Business Ecosystems</h3>
            <p className="text-gray-200 mb-6">
              Learn how autonomous business ecosystems are delivering unprecedented efficiency and self-managing capabilities.
            </p>
            <Link 
              href="/blog/ai-2025-autonomous-business-ecosystems-revolution"
              className="inline-flex items-center text-white font-semibold hover:text-purple-300 transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Fortune 500 Success Story</h3>
            <p className="text-lg text-gray-200 mb-6">
              Discover how a Fortune 500 company achieved <span className="text-yellow-400 font-bold">800% ROI</span> through comprehensive AI transformation, 
              revolutionizing their operations and competitive position.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/case-studies/fortune-500-ai-transformation-success-story"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Case Study
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Your Strategy
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">800%</div>
              <div className="text-gray-200">ROI Achieved</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">340%</div>
              <div className="text-gray-200">Efficiency Gain</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.7%</div>
              <div className="text-gray-200">Accuracy Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-200">Autonomous Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBreakthroughBanner;