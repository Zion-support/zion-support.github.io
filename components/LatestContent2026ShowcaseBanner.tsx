import React from 'react';
import Link from 'next/link';

export default function LatestContent2026ShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Latest 2026 Content
            </span>
            <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Just Published
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI insights, transformation guides, and real-world success stories 
            that are reshaping enterprise operations in 2026.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Link href="/blog/ai-enterprise-transformation-2026" className="group block">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-blue-300">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Article
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Just Published
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Enterprise Transformation 2026: Complete Guide to 300% ROI
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Discover how Fortune 500 companies are achieving 300% ROI through strategic AI implementation. 
                    Learn proven frameworks, real-world case studies, and step-by-step transformation strategies.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">300%</div>
                      <div className="text-sm text-gray-600">Average ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">70%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">90%</div>
                      <div className="text-sm text-gray-600">Efficiency Gains</div>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Read Complete Guide →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Content */}
          <div className="space-y-6">
            <Link href="/blog/ai-trends-2025-enterprise-transformation" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group-hover:border-purple-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    AI Trends
                  </span>
                  <span className="text-gray-500 text-xs">25 min read</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Trends 2025: Enterprise Transformation Guide
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Discover revolutionary AI trends reshaping enterprise operations in 2025. From autonomous systems to quantum computing.
                </p>
                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/fortune-500-ai-transformation-success" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group-hover:border-green-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-gray-500 text-xs">15 min read</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Fortune 500 AI Success: 300% ROI in 8 Months
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  See how a Fortune 500 manufacturing company achieved 300% ROI and $12M annual savings.
                </p>
                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/blog/ai-implementation-best-practices" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group-hover:border-blue-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                AI Implementation Best Practices
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Complete guide to successful AI implementation with proven strategies and frameworks.
              </p>
              <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                Read Guide →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/healthcare-ai-diagnosis-success" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group-hover:border-green-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Healthcare AI Success
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                80% faster diagnoses with 99.5% accuracy in regional healthcare network.
              </p>
              <div className="text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                View Case Study →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/financial-services-ai-automation" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group-hover:border-purple-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                Financial AI Automation
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                95% process automation with $3M annual savings in financial services.
              </p>
              <div className="text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                View Case Study →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-edge-computing-2025" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group-hover:border-orange-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                Edge AI Computing
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Real-time AI processing at the edge with sub-50ms response times.
              </p>
              <div className="text-orange-600 font-semibold text-sm group-hover:text-orange-700 transition-colors">
                Read Article →
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Ahead with Latest AI Insights</h3>
            <p className="text-lg mb-6 opacity-90">
              Get weekly updates on AI trends, success stories, and exclusive implementation guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Join 10,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}