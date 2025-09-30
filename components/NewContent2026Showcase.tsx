import React from 'react';
import Link from 'next/link';

export default function NewContent2026Showcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ NEW 2026 CONTENT
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              FEATURED
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Article */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AI Autonomous Enterprise</h3>
                  <p className="text-blue-100">Complete Self-Managing Operations</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                <span className="text-gray-500 text-sm">30 min read</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Autonomous Enterprise Systems 2026: Complete Self-Managing Operations Guide
              </h4>
              <p className="text-gray-600 mb-6">
                Master autonomous AI enterprise systems with 99% automation, zero-touch operations, and $25M+ ROI. 
                Complete implementation guide for Fortune 500 companies.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">99%</div>
                    <div className="text-xs text-gray-500">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$25M+</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                </div>
                <Link
                  href="/blog/ai-autonomous-enterprise-systems-2026"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">$25M Success Story</h3>
                  <p className="text-green-100">Fortune 500 Case Study</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Case Study</span>
                <span className="text-gray-500 text-sm">25 min read</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Autonomous Enterprise Success 2026: $25M ROI Case Study
              </h4>
              <p className="text-gray-600 mb-6">
                See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
                99% automation, 90% cost reduction, and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$25M</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">99%</div>
                    <div className="text-xs text-gray-500">Automation</div>
                  </div>
                </div>
                <Link
                  href="/case-studies/ai-autonomous-enterprise-success-2026"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-platform-architecture-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-blue-600 font-medium">📝 Article</span>
                <span className="text-sm text-gray-500">Architecture</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Platform Architecture 2026: Enterprise-Scale AI Infrastructure Guide
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Design and implement enterprise-scale AI platforms with microservices, edge computing, and autonomous scaling.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">30 min</div>
                  <div className="text-xs text-gray-500">read</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">95%</div>
                  <div className="text-xs text-gray-500">efficiency</div>
                </div>
              </div>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                Read Architecture Guide →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-operational-excellence-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-green-600 font-medium">📝 Article</span>
                <span className="text-sm text-gray-500">Operations</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Operational Excellence 2026: 90% Automation & $8M+ Savings
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Achieve operational excellence with AI-driven automation. 90% process automation and $8M+ annual savings.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">20 min</div>
                  <div className="text-xs text-gray-500">read</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">$8M+</div>
                  <div className="text-xs text-gray-500">savings</div>
                </div>
              </div>
              <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                Read Guide →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-purple-600 font-medium">📝 Article</span>
                <span className="text-sm text-gray-500">Quantum Computing</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Quantum Computing 2026: Next-Generation Intelligence
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">1000x</div>
                  <div className="text-xs text-gray-500">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">95%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
              <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                Read Article →
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All 2026 Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}