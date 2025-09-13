import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Content Showcase: Latest AI Insights, Case Studies & Resources',
  description: 'Explore our comprehensive collection of AI content including blog posts, case studies, implementation guides, and resources. Stay updated with the latest AI trends and insights.',
  keywords: ['AI content', 'AI blog', 'AI case studies', 'AI resources', 'AI insights', 'content library', 'AI knowledge'],
};

export default function ContentShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">📚 CONTENT LIBRARY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Content Showcase
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive collection of AI insights, case studies, implementation guides, 
              and resources. Everything you need to stay ahead in the AI revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Featured Content
              </Link>
              <Link
                href="#all-content"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600 font-semibold">Articles</div>
              <div className="text-sm text-gray-500 mt-1">Expert insights & analysis</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Case Studies</div>
              <div className="text-sm text-gray-500 mt-1">Real-world success stories</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600 font-semibold">Resources</div>
              <div className="text-sm text-gray-500 mt-1">Guides & templates</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-gray-600 font-semibold">Downloads</div>
              <div className="text-sm text-gray-500 mt-1">Monthly resource downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          
          {/* Featured Blog Posts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Blog Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/blog/ai-2025-trends-predictions" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🔮</span>
                    <div>
                      <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        BREAKTHROUGH
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-purple-600 transition-colors">
                        AI 2025 Trends & Predictions
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Discover the most important AI trends and predictions for 2025. From quantum computing breakthroughs to neural interfaces.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>15 min read</span>
                    <span className="mx-2">•</span>
                    <span>Published 2 days ago</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-enterprise-transformation-guide" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🏢</span>
                    <div>
                      <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        GUIDE
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                        Enterprise AI Transformation Guide
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Complete guide to transforming your enterprise with AI. Strategies, frameworks, and real-world examples.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>Published 1 week ago</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-startup-funding-2025" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">💰</span>
                    <div>
                      <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        NEW
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-green-600 transition-colors">
                        AI Startup Funding Guide 2025
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    From seed to Series A with $47B market insights and pitch templates for AI startups.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>20 min read</span>
                    <span className="mx-2">•</span>
                    <span>Published 3 days ago</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Case Studies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/case-studies/ai-enterprise-transformation-2025" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🏆</span>
                    <div>
                      <div className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        SUCCESS STORY
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-orange-600 transition-colors">
                        Enterprise AI Transformation
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    How a Fortune 500 company achieved 340% ROI through comprehensive AI transformation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">340% ROI</div>
                    <div className="text-sm text-gray-500">Case Study</div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-financial-services-breakthrough" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🏦</span>
                    <div>
                      <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        BREAKTHROUGH
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                        Financial Services AI Success
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    $2.4B cost savings, 95% fraud detection - complete case study of AI in financial services.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">$2.4B Saved</div>
                    <div className="text-sm text-gray-500">Case Study</div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-manufacturing-optimization" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🏭</span>
                    <div>
                      <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        OPTIMIZATION
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-green-600 transition-colors">
                        Manufacturing AI Optimization
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Smart factory implementation resulting in 50% efficiency gains and 30% cost reduction.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">50% Efficiency</div>
                    <div className="text-sm text-gray-500">Case Study</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Resources */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/resources/ai-2025-implementation-guide" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">📚</span>
                    <div>
                      <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        COMPREHENSIVE
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-purple-600 transition-colors">
                        AI 2025 Implementation Guide
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Complete toolkit for implementing AI in your business with 150+ pages of strategies and templates.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-purple-600">150+ Pages</div>
                    <div className="text-sm text-gray-500">Free Download</div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-roi-calculator" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🧮</span>
                    <div>
                      <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        TOOL
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                        AI ROI Calculator
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Advanced ROI calculation tool to measure and track the financial impact of your AI initiatives.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">Interactive</div>
                    <div className="text-sm text-gray-500">Free Tool</div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-readiness-assessment" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">📊</span>
                    <div>
                      <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        ASSESSMENT
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-green-600 transition-colors">
                        AI Readiness Assessment
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Comprehensive assessment tool to evaluate your organization's readiness for AI implementation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">Free</div>
                    <div className="text-sm text-gray-500">Assessment</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Content Categories */}
      <section id="all-content" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse All Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Posts</h3>
                <p className="text-gray-600">Expert insights, trends, and analysis</p>
              </div>
              <div className="space-y-3 mb-6">
                <Link href="/blog/ai-2025-trends-predictions" className="block text-blue-600 hover:text-blue-800 font-medium">
                  AI 2025 Trends & Predictions
                </Link>
                <Link href="/blog/ai-enterprise-transformation-guide" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Enterprise AI Transformation Guide
                </Link>
                <Link href="/blog/ai-startup-funding-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                  AI Startup Funding Guide 2025
                </Link>
                <Link href="/blog/ai-neural-interfaces" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Neural Interface Revolution
                </Link>
              </div>
              <Link href="/blog" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
                View All Posts
              </Link>
            </div>

            {/* Case Studies */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Case Studies</h3>
                <p className="text-gray-600">Real-world success stories</p>
              </div>
              <div className="space-y-3 mb-6">
                <Link href="/case-studies/ai-enterprise-transformation-2025" className="block text-green-600 hover:text-green-800 font-medium">
                  Enterprise AI Transformation
                </Link>
                <Link href="/case-studies/ai-financial-services-breakthrough" className="block text-green-600 hover:text-green-800 font-medium">
                  Financial Services AI Success
                </Link>
                <Link href="/case-studies/ai-manufacturing-optimization" className="block text-green-600 hover:text-green-800 font-medium">
                  Manufacturing AI Optimization
                </Link>
                <Link href="/case-studies/ai-healthcare-diagnostics" className="block text-green-600 hover:text-green-800 font-medium">
                  Healthcare AI Diagnostics
                </Link>
              </div>
              <Link href="/case-studies" className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block">
                View All Studies
              </Link>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Resources</h3>
                <p className="text-gray-600">Guides, templates, and tools</p>
              </div>
              <div className="space-y-3 mb-6">
                <Link href="/resources/ai-2025-implementation-guide" className="block text-purple-600 hover:text-purple-800 font-medium">
                  AI 2025 Implementation Guide
                </Link>
                <Link href="/resources/ai-roi-calculator" className="block text-purple-600 hover:text-purple-800 font-medium">
                  AI ROI Calculator
                </Link>
                <Link href="/resources/ai-readiness-assessment" className="block text-purple-600 hover:text-purple-800 font-medium">
                  AI Readiness Assessment
                </Link>
                <Link href="/resources/ai-trends-report-2025" className="block text-purple-600 hover:text-purple-800 font-medium">
                  AI Trends Report 2025
                </Link>
              </div>
              <Link href="/resources" className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">
                View All Resources
              </Link>
            </div>

            {/* Webinars */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Webinars</h3>
                <p className="text-gray-600">Live sessions and recordings</p>
              </div>
              <div className="space-y-3 mb-6">
                <Link href="/webinars/ai-implementation-masterclass" className="block text-orange-600 hover:text-orange-800 font-medium">
                  AI Implementation Masterclass
                </Link>
                <Link href="/webinars/ai-trends-2025" className="block text-orange-600 hover:text-orange-800 font-medium">
                  AI Trends 2025 Webinar
                </Link>
                <Link href="/webinars/ai-roi-optimization" className="block text-orange-600 hover:text-orange-800 font-medium">
                  AI ROI Optimization
                </Link>
                <Link href="/webinars/ai-change-management" className="block text-orange-600 hover:text-orange-800 font-medium">
                  AI Change Management
                </Link>
              </div>
              <Link href="/webinars" className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center block">
                View All Webinars
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Content</h2>
          <p className="text-xl opacity-90 mb-8">
            Get weekly updates on new articles, case studies, and resources delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help with AI Implementation?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our experts can help you implement AI solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}