import React from 'react';
import { Link } from 'react-router-dom';

export default function LatestAI2025InsightsBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">LATEST AI INSIGHTS 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionary AI Insights & Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with cutting-edge AI technologies and revolutionary solutions that are transforming industries in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Enterprise Automation</h3>
                <p className="text-sm text-gray-500">300% ROI guaranteed</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Achieve unprecedented efficiency gains with AI-powered automation. Transform your enterprise operations with proven strategies and frameworks.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Featured Article</div>
              <Link
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Multimodal AI</h3>
                <p className="text-sm text-gray-500">250% efficiency gains</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Master the integration of text, voice, and video AI technologies for comprehensive business transformation and enhanced customer experiences.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">New Guide</div>
              <Link
                href="/blog/ai-2025-multimodal-integration-guide"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Success Stories</h3>
                <p className="text-sm text-gray-500">400% ROI achieved</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Discover how Fortune 500 companies achieved remarkable results with AI transformation. Real case studies with proven ROI and efficiency gains.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Case Study</div>
              <Link
                href="/case-studies/ai-2025-enterprise-transformation-success"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of enterprises already achieving 300%+ ROI with our AI solutions and proven implementation strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="opacity-90">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="opacity-90">Success Rate</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore AI Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}