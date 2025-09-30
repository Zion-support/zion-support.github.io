import React from 'react';
import Link from 'next/link';

export default function LatestAIBreakthroughsBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
              🔥 Latest Content
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
              AI Breakthroughs
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionary AI Breakthroughs:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {' '}Transform Your Enterprise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest AI innovations that are revolutionizing enterprise operations. 
            From automation breakthroughs to quantum computing advances, stay ahead with cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* AI Enterprise Automation */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">AI Enterprise Automation</h3>
                <p className="text-sm text-gray-500">Complete Guide 2025</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Learn how leading enterprises are achieving 300% ROI through strategic AI automation implementation. 
              Real-world case studies and actionable insights.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Average ROI</span>
                <span className="font-semibold text-indigo-600">300%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cost Reduction</span>
                <span className="font-semibold text-green-600">70%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Implementation Time</span>
                <span className="font-semibold text-purple-600">8 months</span>
              </div>
            </div>
            <Link
              href="/blog/ai-enterprise-automation-2025"
              className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Finance Automation Success */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Finance Automation</h3>
                <p className="text-sm text-gray-500">Success Story</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              See how a financial services company achieved 95% process automation and $3M+ annual savings 
              through AI-powered finance automation solutions.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Process Automation</span>
                <span className="font-semibold text-green-600">95%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Annual Savings</span>
                <span className="font-semibold text-green-600">$3M+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Accuracy Rate</span>
                <span className="font-semibold text-purple-600">99.7%</span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-finance-automation-success"
              className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          {/* AI Trends 2025 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">AI Trends 2025</h3>
                <p className="text-sm text-gray-500">Enterprise Guide</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Discover revolutionary AI trends reshaping enterprise operations in 2025. From autonomous systems 
              to quantum computing, achieve 300% ROI.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Efficiency Gains</span>
                <span className="font-semibold text-purple-600">250%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Response Times</span>
                <span className="font-semibold text-blue-600">80% faster</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cost Reduction</span>
                <span className="font-semibold text-green-600">60%</span>
              </div>
            </div>
            <Link
              href="/blog/ai-trends-2025-enterprise-transformation"
              className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Read Article →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Implement AI Breakthroughs?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let Zion Tech Group help you leverage the latest AI innovations for your enterprise transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}