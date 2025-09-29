import React from 'react';
import Link from 'next/link';
import InteractiveContentShowcase2026 from '../../components/InteractiveContentShowcase2026';
import AIROICalculator2026 from '../../components/AIROICalculator2026';

export const metadata = {
  title: 'AI Content Hub 2026: Latest Articles, Case Studies & Interactive Tools | Zion Tech Group',
  description: 'Explore our comprehensive AI content hub featuring the latest articles, case studies, interactive tools, and success stories for 2026.',
  keywords: 'AI content, articles, case studies, interactive tools, AI transformation, enterprise AI, 2026, ROI calculator',
};

export default function ContentHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            🚀 AI CONTENT HUB 2026
          </span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Innovation Content Hub
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
          Discover the latest AI insights, success stories, and cutting-edge technologies. 
          From neural interfaces to quantum computing, explore comprehensive content that drives innovation.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">150+</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">30</div>
            <div className="text-gray-600">New 2026 Content</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">18</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$5B+</div>
            <div className="text-gray-600">Total ROI Documented</div>
          </div>
        </div>
      </div>

      {/* Interactive Content Showcase */}
      <InteractiveContentShowcase2026 />

      {/* AI ROI Calculator */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive AI ROI Calculator</h2>
          <p className="text-lg text-gray-600">Calculate the potential return on investment for your AI transformation project</p>
        </div>
        <AIROICalculator2026 />
      </div>

      {/* Featured Content Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/blog" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Innovation Guides</h3>
                  <p className="text-sm text-gray-500">Comprehensive guides and articles</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Master AI transformation with our comprehensive 2026 guides. From autonomous systems to quantum computing, 
                discover strategies delivering $50M+ ROI for Fortune 500 companies.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-4 h-4 mr-1">⏱️</span>
                  150+ Articles
                </div>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Explore Guides →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies" className="group">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Success Stories</h3>
                  <p className="text-sm text-gray-500">Real-world case studies</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                See how Fortune 500 companies achieved $50M+ ROI through comprehensive AI transformation. 
                Real-world success stories with measurable results.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-4 h-4 mr-1">💰</span>
                  $5B+ ROI Documented
                </div>
                <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  View Case Studies →
                </div>
              </div>
            </div>
          </Link>

          <div className="group">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛠️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Interactive Tools</h3>
                  <p className="text-sm text-gray-500">Calculators and tools</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Use our interactive AI ROI calculator and other tools to plan your transformation. 
                Get personalized insights and recommendations for your business.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-4 h-4 mr-1">⚡</span>
                  Interactive Tools
                </div>
                <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Use Tools →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of companies already achieving breakthrough results with our AI solutions. 
          Get started with a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Transformation
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Success Stories
          </Link>
        </div>
      </div>
    </div>
  );
}