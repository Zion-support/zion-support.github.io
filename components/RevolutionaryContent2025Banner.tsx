import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">🔥 REVOLUTIONARY 2025</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transform Your Business with Revolutionary AI Content
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Access cutting-edge insights, proven strategies, and real-world case studies 
              that are transforming industries worldwide. Join thousands of leaders who 
              are already implementing these breakthrough solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2025-enterprise-transformation-complete-guide"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Enterprise Guide
              </Link>
              <Link
                href="/blog/ai-2025-quantum-computing-breakthrough"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Explore Quantum AI
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-lg font-bold mb-2">340% ROI</h3>
              <p className="text-sm opacity-90">Average return on AI investments</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">85% Efficiency</h3>
              <p className="text-sm opacity-90">Improvement in operations</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold mb-2">$50M+</h3>
              <p className="text-sm opacity-90">Annual cost savings achieved</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">24/7</h3>
              <p className="text-sm opacity-90">Autonomous operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;