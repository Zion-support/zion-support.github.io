import React from 'react';
import Link from 'next/link';

export default function NewContentShowcase() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 New Content Showcase
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8">
            Discover the latest breakthroughs in AI 2025 Autonomous Systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/ai-2025-autonomy-calculator"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              🧮 Calculate Your ROI
            </Link>
            <Link 
              href="/resources/ai-2025-autonomous-systems-implementation-master-guide"
              className="bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 transition-colors border border-purple-300"
            >
              📚 Implementation Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Featured Blog Post */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🌟 Featured Blog Post
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    BREAKTHROUGH
                  </span>
                  <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold ml-2">
                    NEW
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI 2025 Next-Generation Autonomous Systems Revolution
                </h3>
                <p className="text-gray-600 mb-6">
                  We are witnessing the dawn of a new era in artificial intelligence - AI 2025 Next-Generation Autonomous Systems that operate with unprecedented intelligence, efficiency, and independence. These revolutionary systems deliver 15,000% ROI with 99.8% accuracy and 50,000x faster decision-making capabilities.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">15,000%</div>
                    <div className="text-sm text-gray-600">ROI Potential</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99.8%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                </div>
                <Link 
                  href="/blog/ai-2025-next-generation-autonomous-systems-revolution"
                  className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read Full Article →
                </Link>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-purple-100 to-blue-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-lg font-semibold text-gray-700">
                    Autonomous Systems Revolution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🏆 Featured Case Study
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-orange-100 to-red-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏭</div>
                  <div className="text-lg font-semibold text-gray-700">
                    Manufacturing Revolution
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    BREAKTHROUGH
                  </span>
                  <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold ml-2">
                    NEW
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI 2025 Autonomous Manufacturing Revolution: 25,000% ROI
                </h3>
                <p className="text-gray-600 mb-6">
                  This case study documents the most successful autonomous manufacturing transformation ever recorded - a 25,000% ROI achievement that revolutionized an entire industry and set new standards for what's possible with autonomous AI systems.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">25,000%</div>
                    <div className="text-sm text-gray-600">ROI Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-600">Autonomous Operations</div>
                  </div>
                </div>
                <Link 
                  href="/case-studies/ai-2025-autonomous-manufacturing-revolution-25000-roi"
                  className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📚 New Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Implementation Guide */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  REVOLUTIONARY
                </span>
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold ml-2">
                  NEW
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI 2025 Autonomous Systems Implementation Master Guide
              </h3>
              <p className="text-gray-600 mb-6">
                Your complete roadmap to autonomous success. This comprehensive guide provides everything needed to successfully transform your organization using cutting-edge autonomous AI technologies.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50,000x</div>
                  <div className="text-sm text-gray-600">Performance Gain</div>
                </div>
              </div>
              <Link 
                href="/resources/ai-2025-autonomous-systems-implementation-master-guide"
                className="inline-flex items-center bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
              >
                Download Guide →
              </Link>
            </div>

            {/* ROI Calculator */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  NEW
                </span>
                <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full font-semibold ml-2">
                  INTERACTIVE
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI 2025 Autonomy Calculator
              </h3>
              <p className="text-gray-600 mb-6">
                Calculate your autonomous transformation ROI with the most comprehensive tool available. Get personalized projections based on your industry, company size, and current operational metrics.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">8,000%</div>
                  <div className="text-sm text-gray-600">Avg Year 1 ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">99.8%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>
              <Link 
                href="/tools/ai-2025-autonomy-calculator"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Calculate ROI →
              </Link>
            </div>
          </div>
        </section>

        {/* All New Content Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🔥 All New Content
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Blog Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">📝</div>
                <h3 className="text-lg font-bold text-gray-900">Blog Posts</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/ai-2025-next-generation-autonomous-systems-revolution" className="text-blue-600 hover:text-blue-800 font-medium">
                    🤖 AI 2025 Next-Gen Autonomous Systems
                  </Link>
                </li>
                <li className="text-gray-600 text-sm">
                  Discover the breakthrough that delivers 15,000% ROI
                </li>
              </ul>
            </div>

            {/* Case Studies */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">📊</div>
                <h3 className="text-lg font-bold text-gray-900">Case Studies</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/case-studies/ai-2025-autonomous-manufacturing-revolution-25000-roi" className="text-blue-600 hover:text-blue-800 font-medium">
                    🏭 Autonomous Manufacturing Revolution
                  </Link>
                </li>
                <li className="text-gray-600 text-sm">
                  25,000% ROI success story from Fortune 50 company
                </li>
              </ul>
            </div>

            {/* Resources & Tools */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🛠️</div>
                <h3 className="text-lg font-bold text-gray-900">Resources & Tools</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/ai-2025-autonomous-systems-implementation-master-guide" className="text-blue-600 hover:text-blue-800 font-medium">
                    📚 Implementation Master Guide
                  </Link>
                </li>
                <li>
                  <Link href="/tools/ai-2025-autonomy-calculator" className="text-blue-600 hover:text-blue-800 font-medium">
                    🧮 Autonomy Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of companies already achieving breakthrough results with AI 2025 Autonomous Systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              📞 Schedule Consultation
            </Link>
            <Link 
              href="/tools/ai-2025-autonomy-calculator"
              className="bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 transition-colors border border-purple-300"
            >
              🧮 Calculate Your ROI
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}