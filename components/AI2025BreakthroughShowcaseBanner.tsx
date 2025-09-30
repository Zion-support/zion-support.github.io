import React from 'react';
import Link from 'next/link';

export default function AI2025BreakthroughShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-pink-100 border border-red-200 px-4 py-2 rounded-full text-sm font-semibold text-red-800 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Exclusive 2025 AI Breakthrough Content
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionary AI Insights
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Transforming Enterprises
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access cutting-edge AI research, breakthrough predictions, and proven implementation strategies 
            that are delivering unprecedented results for Fortune 500 companies.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Featured Content */}
          <div className="space-y-8">
            {/* Main Featured Article */}
            <Link href="/blog/ai-2025-mega-breakthrough-predictions" className="group block">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <div>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Article
                    </span>
                    <div className="text-sm text-gray-500 mt-1">25 min read</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  AI 2025 Mega Breakthrough Predictions: The Next Frontier of Enterprise Intelligence
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover the revolutionary AI breakthroughs predicted for 2025 that will transform enterprise operations. 
                  From autonomous AI agents to neural interfaces and quantum-enhanced computing achieving 300% productivity gains.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Published Jan 20, 2025</span>
                    <span>•</span>
                    <span>Featured Content</span>
                  </div>
                  <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>

            {/* Implementation Guide */}
            <Link href="/blog/ai-autonomous-business-operations-2025" className="group block">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:border-green-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Implementation Guide
                    </span>
                    <div className="text-sm text-gray-500 mt-1">30 min read</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  AI Autonomous Business Operations 2025: Complete Implementation Guide
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Master autonomous AI business operations with our comprehensive guide. Achieve 400% ROI, 90% automation, 
                  and 24/7 intelligent operations with proven strategies and real-world examples.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Published Jan 20, 2025</span>
                    <span>•</span>
                    <span>Step-by-Step Guide</span>
                  </div>
                  <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Read Guide →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - Success Story */}
          <div className="space-y-8">
            {/* Featured Case Study */}
            <Link href="/case-studies/fortune-500-autonomous-operations-success" className="group block">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Success Story
                    </span>
                    <div className="text-sm text-gray-500 mt-1">Fortune 500 Case Study</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Fortune 500 Autonomous Operations Success: 400% ROI in 18 Months
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover how a Fortune 500 manufacturing company achieved 400% ROI, 90% process automation, 
                  and $50M in annual savings through comprehensive autonomous AI operations implementation.
                </p>
                
                {/* Results Highlights */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">400%</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">90%</div>
                    <div className="text-xs text-gray-600">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$50M</div>
                    <div className="text-xs text-gray-600">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">18</div>
                    <div className="text-xs text-gray-600">Months</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Published Jan 20, 2025</span>
                    <span>•</span>
                    <span>Real Results</span>
                  </div>
                  <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    View Case Study →
                  </div>
                </div>
              </div>
            </Link>

            {/* Quick Stats */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Content Impact Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Content Pieces</span>
                  <span className="font-bold text-gray-900">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average ROI Achieved</span>
                  <span className="font-bold text-green-600">300%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cost Savings Delivered</span>
                  <span className="font-bold text-blue-600">$100M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Enterprise Clients</span>
                  <span className="font-bold text-purple-600">500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of companies already achieving breakthrough results with our AI transformation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/ai-2026-revolutionary-solutions"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Transformation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}