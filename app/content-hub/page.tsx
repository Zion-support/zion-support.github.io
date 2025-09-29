import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users, TrendingUp, Star, BookOpen, BarChart3, Zap } from 'lucide-react';

export const metadata = {
  title: 'Content Hub - AI Innovation, Case Studies & Success Stories | Zion Tech Group',
  description: 'Explore our comprehensive library of AI innovation guides, case studies, success stories, and implementation strategies. Stay ahead with cutting-edge content.',
  keywords: 'AI content, case studies, success stories, AI guides, innovation, enterprise transformation',
};

export default function ContentHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            🚀 CONTENT HUB 2026
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Innovation Content Hub
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
          Discover the latest AI breakthroughs, success stories, and implementation guides. 
          Stay ahead with cutting-edge content that drives real business results.
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <span>150+ Articles</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            <span>75+ Case Studies</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>50K+ Readers</span>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mega Breakthrough Article */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI 2026 Mega Breakthrough</h3>
            <p className="text-gray-600 mb-4">
              Revolutionary AI technologies reshaping enterprise operations with $100M+ ROI strategies and autonomous systems.
            </p>
            <div className="flex items-center justify-between mb-4">
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
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold">4.9</span>
              </div>
            </div>
            <Link
              href="/blog/ai-2026-mega-breakthrough"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              Read Complete Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mega Success Case Study */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">SUCCESS STORY</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">$150M ROI Transformation</h3>
            <p className="text-gray-600 mb-4">
              Fortune 500 manufacturing giant achieves $150M ROI in 18 months through comprehensive AI transformation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  35 min
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  1.8k views
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold">4.8</span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-mega-transformation-success-2026"
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Autonomous Enterprise Guide */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">GUIDE</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous Enterprise 2026</h3>
            <p className="text-gray-600 mb-4">
              Complete guide to self-managing business operations with 99.7% automation and zero-touch management.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  30 min
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  3.1k views
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold">4.9</span>
              </div>
            </div>
            <Link
              href="/blog/ai-autonomous-enterprise-2026"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Read Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/blog"
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-blue-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Innovation Guides</h3>
            <p className="text-gray-600 text-sm mb-3">Comprehensive guides on AI implementation, best practices, and emerging technologies.</p>
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
              <span>150+ Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/case-studies"
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-green-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories</h3>
            <p className="text-gray-600 text-sm mb-3">Real-world case studies showcasing $100M+ ROI transformations and business impact.</p>
            <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
              <span>75+ Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/blog/ai-2026-mega-trends"
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-purple-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Trends</h3>
            <p className="text-gray-600 text-sm mb-3">Latest AI market trends, industry insights, and future predictions for 2026.</p>
            <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm">
              <span>25+ Trend Reports</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/blog/ai-implementation-playbook-2026"
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-orange-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
            <p className="text-gray-600 text-sm mb-3">Step-by-step implementation guides, playbooks, and best practices for AI adoption.</p>
            <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm">
              <span>40+ Playbooks</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Content */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Content</h2>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All Content
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/blog/ai-quantum-optimization-2026"
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Quantum AI Optimization 2026
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Harness quantum computing for 1000x faster AI optimization and revolutionary capabilities.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                25 min
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                1.2k views
              </div>
            </div>
          </Link>

          <Link
            href="/case-studies/ai-autonomous-manufacturing-success-2026"
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
              <span className="text-sm text-gray-500">5 days ago</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
              Autonomous Manufacturing Success
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Complete factory automation achieving 99.9% efficiency and $75M cost savings.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                28 min
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                2.1k views
              </div>
            </div>
          </Link>

          <Link
            href="/blog/ai-agent-orchestration-2026"
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">GUIDE</span>
              <span className="text-sm text-gray-500">1 week ago</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              AI Agent Orchestration 2026
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Master the art of coordinating multiple AI agents for complex business workflows.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                32 min
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                1.8k views
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with AI Innovation</h2>
          <p className="text-lg mb-6 opacity-90">
            Get the latest AI breakthroughs, case studies, and implementation guides delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
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
            Let our AI experts help you implement the strategies and technologies featured in our content.
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
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}