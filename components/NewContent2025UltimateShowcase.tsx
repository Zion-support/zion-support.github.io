import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            New Content 2025: Ultimate AI Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and autonomous systems. 
            Transform your business with cutting-edge technology and proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Synthetic Intelligence */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <div className="text-6xl">🧠</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Synthetic Intelligence Revolution
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how synthetic intelligence is transforming business operations with 
                quantum-enhanced neural networks and multi-modal intelligence systems.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">January 15, 2025</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">99.7%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000x</div>
                  <div className="text-xs text-gray-500">Faster</div>
                </div>
              </div>
              <Link
                href="/blog/ai-2025-synthetic-intelligence-revolution-ultimate-breakthrough"
                className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Read Full Guide
              </Link>
            </div>
          </div>

          {/* Quantum AI */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center">
              <div className="text-6xl">⚛️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quantum AI Business Transformation
              </h3>
              <p className="text-gray-600 mb-4">
                Explore how quantum AI is revolutionizing business operations with 
                quantum machine learning, cryptography, and optimization.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">January 15, 2025</span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-medium">
                  New
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">400%</div>
                  <div className="text-xs text-gray-500">Trading ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000x</div>
                  <div className="text-xs text-gray-500">Drug Discovery</div>
                </div>
              </div>
              <Link
                href="/blog/quantum-ai-2025-business-transformation-ultimate-guide"
                className="block w-full bg-cyan-600 text-white text-center py-2 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Read Complete Guide
              </Link>
            </div>
          </div>

          {/* Autonomous Systems */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
              <div className="text-6xl">🤖</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Autonomous Business Systems
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about self-managing operations with intelligent process automation, 
                predictive maintenance, and autonomous learning architectures.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">January 15, 2025</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Hot
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">340%</div>
                  <div className="text-xs text-gray-500">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">800%</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
              </div>
              <Link
                href="/blog/ai-2025-autonomous-business-systems-revolution"
                className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Read Implementation Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Success Story: 800% ROI Achievement</h3>
            <p className="text-xl text-gray-300">
              See how a Fortune 500 company achieved unprecedented results with our AI transformation approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">800%</div>
              <div className="text-gray-300">ROI in 24 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$4B</div>
              <div className="text-gray-300">Annual savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">340%</div>
              <div className="text-gray-300">Efficiency gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Quality control</div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/case-studies/ai-transformation-800-roi-success"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;