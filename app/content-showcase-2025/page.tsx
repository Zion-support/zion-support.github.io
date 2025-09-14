import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, TrendingUp, Star, Download, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Content Showcase 2025: Latest AI Insights, Case Studies & Resources',
  description: 'Explore our comprehensive collection of AI content for 2025. Latest blog posts, case studies, resources, and tools to accelerate your AI transformation journey.',
  keywords: [
    'AI content 2025',
    'AI blog posts',
    'AI case studies',
    'AI resources',
    'AI insights',
    'AI trends',
    'AI implementation',
    'content showcase'
  ],
  openGraph: {
    title: 'Content Showcase 2025: Latest AI Insights, Case Studies & Resources',
    description: 'Comprehensive collection of AI content for 2025',
    type: 'website'
  }
};

export default function ContentShowcase2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              📚 Content Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our latest AI insights, case studies, and resources. Expert content to accelerate 
              your AI transformation journey and stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#latest-content"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Explore Latest Content
              </Link>
              <Link
                href="#newsletter"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">New Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section id="latest-content" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔥 Latest Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh insights, breakthrough case studies, and cutting-edge resources published this month
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">📝 Featured Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/blog/ai-2025-enterprise-automation-revolution" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                    <div className="text-6xl">🤖</div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        Enterprise AI
                      </span>
                      <span className="text-gray-500 text-sm">18 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      AI 2025 Enterprise Automation Revolution
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Complete implementation guide for enterprise automation transformation with AI in 2025. 
                      Learn strategies, ROI optimization, and real-world success stories.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-2025-trends-predictions" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <div className="text-6xl">🔮</div>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      TRENDING
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        AI Trends
                      </span>
                      <span className="text-gray-500 text-sm">25 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      AI 2025 Trends & Predictions
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Comprehensive analysis of AI trends shaping 2025 and beyond. Expert predictions 
                      and insights to guide your AI strategy.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-purple-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-healthcare-diagnosis-breakthrough-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                    <div className="text-6xl">🏥</div>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      BREAKTHROUGH
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Healthcare AI
                      </span>
                      <span className="text-gray-500 text-sm">20 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 25, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      AI Healthcare Diagnosis Breakthrough
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      98% accuracy rates and revolutionary medical AI systems transforming patient care 
                      and diagnosis accuracy.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-green-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">🏆 Success Stories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/case-studies/ai-manufacturing-transformation-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative">
                    <div className="text-6xl">🏭</div>
                    <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      500% ROI
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                        Manufacturing
                      </span>
                      <span className="text-gray-500 text-sm">12 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      AI Manufacturing Transformation
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Fortune 500 manufacturing company achieves 500% ROI through comprehensive AI transformation 
                      in just 8 months.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-orange-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-orange-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                    <div className="text-6xl">🏦</div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      $2.4B SAVINGS
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        Financial Services
                      </span>
                      <span className="text-gray-500 text-sm">15 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Financial Services AI Transformation
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Major bank achieves $2.4B in cost savings and 95% fraud detection accuracy through 
                      AI-powered automation.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-retail-personalization-success-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
                    <div className="text-6xl">🛍️</div>
                    <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      300% GROWTH
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">
                        Retail & E-commerce
                      </span>
                      <span className="text-gray-500 text-sm">18 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 26, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                      Retail AI Personalization Success
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      E-commerce giant achieves 300% revenue growth through AI-powered personalization 
                      and customer experience optimization.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                          <span className="text-pink-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-pink-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">📚 Essential Resources</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/resources/ai-implementation-master-guide-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center relative">
                    <div className="text-6xl">📖</div>
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      200+ PAGES
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                        Implementation Guide
                      </span>
                      <span className="text-gray-500 text-sm">Free Download</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      AI Implementation Master Guide 2025
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Comprehensive 200+ page guide with templates, checklists, and step-by-step 
                      instructions for successful AI implementation.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm text-gray-600">10K+ downloads</span>
                      </div>
                      <span className="text-indigo-600 font-medium group-hover:underline">
                        Download Guide →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-roi-calculator-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                    <div className="text-6xl">🧮</div>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      INTERACTIVE
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        ROI Calculator
                      </span>
                      <span className="text-gray-500 text-sm">Free Tool</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 29, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      AI ROI Calculator 2025
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Calculate potential returns on your AI investments with our comprehensive 
                      ROI calculator and projection tools.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">5K+ calculations</span>
                      </div>
                      <span className="text-green-600 font-medium group-hover:underline">
                        Use Calculator →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-implementation-checklist-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative">
                    <div className="text-6xl">📋</div>
                    <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      150+ ITEMS
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                        Checklist
                      </span>
                      <span className="text-gray-500 text-sm">Free Download</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 27, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                      AI Implementation Checklist 2025
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      150+ actionable items to ensure successful AI implementation from planning 
                      to deployment and optimization.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm text-gray-600">8K+ downloads</span>
                      </div>
                      <span className="text-yellow-600 font-medium group-hover:underline">
                        Download Checklist →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            📧 Stay Updated with Latest AI Insights
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find content tailored to your specific interests and industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/blog" className="group">
              <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Blog Articles
                </h3>
                <p className="text-gray-600 mb-4">
                  Latest insights, trends, and expert analysis on AI and technology
                </p>
                <div className="text-blue-600 font-semibold group-hover:underline">
                  Read Articles →
                </div>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Case Studies
                </h3>
                <p className="text-gray-600 mb-4">
                  Real-world success stories and implementation examples
                </p>
                <div className="text-green-600 font-semibold group-hover:underline">
                  View Case Studies →
                </div>
              </div>
            </Link>

            <Link href="/resources" className="group">
              <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Download className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Resources
                </h3>
                <p className="text-gray-600 mb-4">
                  Guides, templates, tools, and downloadable resources
                </p>
                <div className="text-purple-600 font-semibold group-hover:underline">
                  Browse Resources →
                </div>
              </div>
            </Link>

            <Link href="/webinars" className="group">
              <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Webinars
                </h3>
                <p className="text-gray-600 mb-4">
                  Live sessions with AI experts and industry leaders
                </p>
                <div className="text-orange-600 font-semibold group-hover:underline">
                  Join Webinars →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🚀 Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and custom implementation roadmap for your business. 
            Join hundreds of companies already transforming with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              Download Free Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}