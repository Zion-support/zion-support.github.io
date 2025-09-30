'use client';

import React from 'react';
import Link from 'next/link';

export default function Latest2026InnovationShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
              🔬 Latest 2026 Innovations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionary AI Innovations
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {' '}Shaping 2026
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with the most cutting-edge AI innovations. Discover breakthrough 
            technologies that are transforming industries and delivering unprecedented business value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Revolutionary Breakthroughs */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Revolutionary Breakthroughs</h3>
                <p className="text-sm text-gray-500">AI Innovation</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Discover the most revolutionary AI breakthroughs of 2026. From quantum neural networks 
              to autonomous systems, explore technologies delivering 300% ROI.
            </p>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Innovation Impact</span>
                <span className="text-sm font-semibold text-purple-600">300% ROI</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <Link
              href="/blog/ai-2026-revolutionary-breakthroughs"
              className="group-hover:text-purple-600 text-purple-600 font-semibold transition-colors inline-flex items-center"
            >
              Explore Revolutionary Insights →
            </Link>
          </div>

          {/* Autonomous Systems */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Autonomous Systems</h3>
                <p className="text-sm text-gray-500">Self-Managing AI</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Learn how autonomous enterprise systems are revolutionizing business operations 
              with 90% efficiency gains and 70% cost reduction.
            </p>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Efficiency Gains</span>
                <span className="text-sm font-semibold text-green-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <Link
              href="/blog/ai-autonomous-enterprise-systems-2026"
              className="group-hover:text-green-600 text-green-600 font-semibold transition-colors inline-flex items-center"
            >
              Discover Autonomous Future →
            </Link>
          </div>

          {/* Quantum Computing */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Quantum Computing</h3>
                <p className="text-sm text-gray-500">Enterprise Revolution</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Explore how quantum computing is delivering 1000x faster processing speeds and 
              solving optimization problems previously impossible.
            </p>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Processing Speed</span>
                <span className="text-sm font-semibold text-blue-600">1000x</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <Link
              href="/blog/ai-quantum-computing-enterprise-2026"
              className="group-hover:text-blue-600 text-blue-600 font-semibold transition-colors inline-flex items-center"
            >
              Enter Quantum Era →
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-sm opacity-90">Organizations Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300 mb-2">$2B+</div>
              <div className="text-sm opacity-90">Cost Savings Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-300 mb-2">99.9%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
              <div className="text-sm opacity-90">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with Revolutionary AI?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join industry leaders who are already leveraging these breakthrough technologies 
              to achieve unprecedented results and competitive advantage.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Innovations
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Free Consultation
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              ROI Guarantee
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Expert Implementation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}