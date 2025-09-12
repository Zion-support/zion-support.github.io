import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Insights | Zion Tech Group"
        description="Explore our comprehensive collection of AI insights, case studies, resources, and expert analysis. Stay ahead with the latest trends in artificial intelligence and technology."
        keywords="AI content, technology insights, AI resources, case studies, AI guides, technology trends, AI implementation"
        url="/content-showcase"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Discover our latest insights, case studies, and resources on AI, technology, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600">Expert insights and analysis on AI and technology trends</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-bold">🚀 BREAKTHROUGH</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="hover:text-blue-600">
                    AI 2025 Revolutionary Breakthroughs
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the revolutionary AI breakthroughs of 2025 that are transforming industries 
                  and reshaping the future of technology.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Jan 25, 2025</span>
                  <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="text-blue-600 font-semibold hover:text-blue-700">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-bold">🚀 PRODUCTIVITY</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link href="/blog/ai-productivity-automation-2025" className="hover:text-blue-600">
                    AI Productivity Automation 2025
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform your business with AI automation achieving 300% productivity gains and 40% cost reduction.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Jan 25, 2025</span>
                  <Link href="/blog/ai-productivity-automation-2025" className="text-blue-600 font-semibold hover:text-blue-700">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-bold">💰 STRATEGY</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link href="/blog/startup-pricing-strategy-2025" className="hover:text-blue-600">
                    Startup Pricing Strategy 2025
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Master startup pricing with data-driven strategies that validate customer willingness to pay.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Jan 22, 2025</span>
                  <Link href="/blog/startup-pricing-strategy-2025" className="text-blue-600 font-semibold hover:text-blue-700">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Newly added content cards */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-bold">⚡ EDGE AI</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link href="/blog/ai-2025-edge-ai-acceleration" className="hover:text-blue-600">
                    AI 2025: Edge AI Acceleration
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  How on-device intelligence is transforming operations with millisecond latency and privacy by design.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Jan 27, 2025</span>
                  <Link href="/blog/ai-2025-edge-ai-acceleration" className="text-blue-600 font-semibold hover:text-blue-700">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-bold">🛡️ GOVERNANCE</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link href="/blog/ai-2025-ai-governance-blueprint" className="hover:text-blue-600">
                    AI 2025: Governance & Risk Blueprint
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  A practical blueprint for responsible AI policies, controls, and monitoring in production.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Jan 27, 2025</span>
                  <Link href="/blog/ai-2025-ai-governance-blueprint" className="text-blue-600 font-semibold hover:text-blue-700">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600">Real-world success stories and implementation results</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-bold">📊 CASE STUDY</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="hover:text-blue-600">
                    AI Transformation Fortune 500 Breakthrough
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how a Fortune 500 company achieved $2.4B in cost savings and 95% efficiency improvement.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Jan 20, 2025</span>
                  <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="text-blue-600 font-semibold hover:text-blue-700">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest insights and updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}