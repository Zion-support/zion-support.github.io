import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Showcase - Revolutionary AI 2025 Resources & Success Stories',
  description: 'Explore our comprehensive collection of AI resources, case studies, implementation guides, and success stories. Everything you need to transform your business with AI.',
  keywords: ['AI content', 'AI resources', 'AI case studies', 'AI implementation', 'AI success stories', 'AI guides'],
};

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            🚀 CONTENT SHOWCASE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Revolutionary AI 2025 Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the most comprehensive collection of AI resources, implementation guides, and success stories that are transforming businesses worldwide
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advanced Automation Mastery */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Automation Mastery</h3>
              <p className="text-gray-600 mb-6">
                Master the art of AI automation with our comprehensive guide covering everything from basic implementation to advanced optimization techniques.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  2,500-5,000% ROI potential
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  24-week implementation timeline
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  99.9% accuracy rate
                </div>
              </div>
              <Link 
                href="/blog/ai-2025-advanced-automation-mastery"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                Read Complete Guide
              </Link>
            </div>

            {/* Global Transformation Case Study */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-green-100 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Enterprise Transformation</h3>
              <p className="text-gray-600 mb-6">
                Real-world case study of how a Fortune 500 company achieved 10,000% ROI through revolutionary AI implementation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  10,000% ROI achieved
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  $2.5B revenue increase
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  6-month implementation
                </div>
              </div>
              <Link 
                href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-colors"
              >
                View Success Story
              </Link>
            </div>

            {/* Ultimate Implementation Guide */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-purple-100 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Implementation Guide</h3>
              <p className="text-gray-600 mb-6">
                The definitive step-by-step framework for implementing AI solutions that deliver breakthrough results and maximum ROI.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Complete 24-week roadmap
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Templates and checklists
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Expert best practices
                </div>
              </div>
              <Link 
                href="/resources/ai-2025-ultimate-implementation-guide"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center group-hover:shadow-lg transition-shadow h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Blog Posts</h3>
                <p className="text-gray-600 mb-4">Latest insights, strategies, and breakthrough discoveries in AI technology</p>
                <div className="text-sm text-blue-600 font-semibold group-hover:text-blue-800">
                  Explore Blog →
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center group-hover:shadow-lg transition-shadow h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Case Studies</h3>
                <p className="text-gray-600 mb-4">Real-world success stories and transformation results from our clients</p>
                <div className="text-sm text-green-600 font-semibold group-hover:text-green-800">
                  View Case Studies →
                </div>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center group-hover:shadow-lg transition-shadow h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Resources</h3>
                <p className="text-gray-600 mb-4">Implementation guides, frameworks, and tools for AI transformation</p>
                <div className="text-sm text-purple-600 font-semibold group-hover:text-purple-800">
                  Browse Resources →
                </div>
              </div>
            </Link>
            
            <Link href="/webinars" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center group-hover:shadow-lg transition-shadow h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Webinars</h3>
                <p className="text-gray-600 mb-4">Live training sessions and expert-led workshops on AI implementation</p>
                <div className="text-sm text-orange-600 font-semibold group-hover:text-orange-800">
                  Join Webinars →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* AI 2025 Content Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI 2025 Content Highlights</h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-semibold">Blog Posts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
                <div className="text-gray-600 font-semibold">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600 font-semibold">Implementation Guides</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
                <div className="text-gray-600 font-semibold">Webinars</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">5+</div>
                <div className="text-gray-600 font-semibold">ROI Calculators</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600 font-semibold">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mr-2">NEW</span>
                <span className="text-sm text-gray-500">January 2025</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI 2025 Advanced Automation Mastery</h3>
              <p className="text-gray-600 text-sm mb-4">Complete guide to implementing revolutionary AI automation solutions</p>
              <Link href="/blog/ai-2025-advanced-automation-mastery" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                Read More →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-2">SUCCESS</span>
                <span className="text-sm text-gray-500">January 2025</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Enterprise Transformation Breakthrough</h3>
              <p className="text-gray-600 text-sm mb-4">How a Fortune 500 company achieved 10,000% ROI</p>
              <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="text-green-600 hover:text-green-800 text-sm font-semibold">
                View Case Study →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full mr-2">GUIDE</span>
                <span className="text-sm text-gray-500">January 2025</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ultimate Implementation Guide</h3>
              <p className="text-gray-600 text-sm mb-4">Step-by-step framework for AI implementation success</p>
              <Link href="/resources/ai-2025-ultimate-implementation-guide" className="text-purple-600 hover:text-purple-800 text-sm font-semibold">
                Get Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6">
            Join thousands of companies already achieving breakthrough results with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/ai-services-2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}