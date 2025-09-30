import React from 'react';
import Link from 'next/link';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              NEW 2026 CONTENT
            </span>
            <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              FEATURED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Insights for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI strategies, breakthrough case studies, and transformative insights 
            that will revolutionize your business operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="lg:col-span-2">
            <Link href="/blog/ai-enterprise-transformation-2026" className="group block">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-indigo-300">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Article
                    </span>
                    <span className="text-gray-500 text-sm">20 min read</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      NEW
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    AI Enterprise Transformation 2026: Complete Implementation Guide
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Master AI enterprise transformation with proven strategies achieving 300% ROI, 
                    70% cost reduction, and 90% efficiency gains. Complete roadmap for 2026 success.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Published Jan 20, 2026</span>
                      <span>•</span>
                      <span>Updated Jan 20, 2026</span>
                    </div>
                    <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                      Read Article →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* AI Trends Article */}
          <div>
            <Link href="/blog/ai-trends-2026-predictions" className="group block mb-6">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-purple-300">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Trends
                    </span>
                    <span className="text-gray-500 text-xs">15 min read</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      NEW
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI Trends 2026: Top 10 Predictions
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Discover transformative AI trends from autonomous agents to quantum computing.
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>

            {/* Case Study */}
            <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-green-300">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Case Study
                    </span>
                    <span className="text-gray-500 text-xs">Manufacturing</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      NEW
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Supply Chain: 60% Cost Reduction
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    See how a global manufacturer saved $12M annually with AI optimization.
                  </p>
                  <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700">
                    View Case Study →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-indigo-600 mb-2">300%</div>
            <div className="text-gray-600 font-semibold">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">AI Implementation</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
            <div className="text-gray-600 font-semibold">Cost Reduction</div>
            <div className="text-sm text-gray-500 mt-1">Operational Savings</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
            <div className="text-gray-600 font-semibold">Efficiency Gain</div>
            <div className="text-sm text-gray-500 mt-1">Process Optimization</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-teal-600 mb-2">$12M</div>
            <div className="text-gray-600 font-semibold">Annual Savings</div>
            <div className="text-sm text-gray-500 mt-1">Supply Chain AI</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join 500+ organizations that have achieved remarkable results with our AI solutions. 
              Get your personalized transformation roadmap and start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Free AI Assessment
              </a>
            </div>
            <div className="mt-6 text-sm opacity-75">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}