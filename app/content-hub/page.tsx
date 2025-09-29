import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users, TrendingUp, Star, Zap, Target, Award } from 'lucide-react';

export const metadata = {
  title: 'Content Hub - AI Innovation & Success Stories 2026',
  description: 'Explore our comprehensive library of AI innovation guides, case studies, and success stories. Stay ahead with cutting-edge insights and proven strategies.',
  keywords: 'AI content, innovation guides, case studies, success stories, AI 2026, enterprise transformation',
};

export default function ContentHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            🚀 CONTENT HUB 2026
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Innovation & Success Stories Hub
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover cutting-edge AI insights, proven strategies, and real-world success stories 
          that are transforming businesses in 2026
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            50+ Articles
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            25+ Case Studies
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            Updated Daily
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mega Breakthrough Article */}
          <div className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                🚀 BREAKTHROUGH
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI 2026 Mega Breakthrough: Complete Enterprise Guide
            </h3>
            <p className="text-gray-600 mb-6">
              Revolutionary AI technologies reshaping business operations with autonomous systems, 
              quantum computing, and $100M+ ROI strategies.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  45 min
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  2.3k views
                </div>
              </div>
              <Link
                href="/blog/ai-2026-mega-breakthrough"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all"
              >
                Read Guide →
              </Link>
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                🏆 SUCCESS
              </span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                FEATURED
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              $150M ROI in 18 Months
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Fortune 500 manufacturing giant achieves unprecedented transformation with comprehensive AI implementation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">35 min read</div>
              <Link
                href="/case-studies/ai-mega-transformation-success-2026"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all text-sm"
              >
                View Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AI Innovation */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Innovation</h3>
            <p className="text-gray-600 text-sm mb-4">
              Latest breakthroughs in artificial intelligence, autonomous systems, and quantum computing.
            </p>
            <div className="text-sm text-gray-500 mb-4">15+ Articles</div>
            <Link
              href="/blog"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
            >
              Explore Articles →
            </Link>
          </div>

          {/* Case Studies */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories</h3>
            <p className="text-gray-600 text-sm mb-4">
              Real-world transformations with proven ROI, implementation strategies, and lessons learned.
            </p>
            <div className="text-sm text-gray-500 mb-4">25+ Case Studies</div>
            <Link
              href="/case-studies"
              className="text-green-600 font-semibold hover:text-green-700 transition-colors text-sm"
            >
              View Stories →
            </Link>
          </div>

          {/* Implementation Guides */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
            <p className="text-gray-600 text-sm mb-4">
              Step-by-step guides for deploying AI solutions, best practices, and proven methodologies.
            </p>
            <div className="text-sm text-gray-500 mb-4">12+ Guides</div>
            <Link
              href="/blog"
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors text-sm"
            >
              Read Guides →
            </Link>
          </div>

          {/* Industry Insights */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Trends</h3>
            <p className="text-gray-600 text-sm mb-4">
              Market analysis, emerging trends, and future predictions for AI and enterprise technology.
            </p>
            <div className="text-sm text-gray-500 mb-4">8+ Insights</div>
            <Link
              href="/blog"
              className="text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm"
            >
              View Trends →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Content</h2>
          <Link
            href="/blog"
            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-1"
          >
            View All Content
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recent Articles */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW
              </span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Autonomous Enterprise 2026
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Complete guide to self-managing business operations with 99.7% automation rates.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">30 min read</div>
              <Link
                href="/blog/ai-autonomous-enterprise-2026"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
              >
                Read →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                FEATURED
              </span>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Quantum AI Optimization
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Harness quantum computing for 1000x faster AI processing and revolutionary capabilities.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">25 min read</div>
              <Link
                href="/blog/ai-quantum-optimization-2026"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors text-sm"
              >
                Read →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                SUCCESS
              </span>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              $25M Success Story
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Fortune 500 company achieves full automation and unprecedented ROI in 12 months.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">20 min read</div>
              <Link
                href="/case-studies/ai-autonomous-enterprise-success-2026"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors text-sm"
              >
                Read →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
          <p className="text-lg mb-6 opacity-90">
            Get weekly updates on AI breakthroughs, implementation guides, and success stories delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join hundreds of companies already achieving unprecedented success with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}