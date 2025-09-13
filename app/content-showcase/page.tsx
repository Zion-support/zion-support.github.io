import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Content Showcase: Latest AI Insights, Case Studies & Resources',
  description: 'Explore our comprehensive collection of AI content including blog posts, case studies, implementation guides, and resources. Stay updated with the latest AI trends and insights.',
  keywords: ['AI content', 'AI blog', 'AI case studies', 'AI resources', 'AI insights', 'content showcase'],
};

export default function ContentShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 FRESH CONTENT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our latest AI insights, case studies, implementation guides, and resources. 
              Stay ahead with expert knowledge and proven strategies for AI success.
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

      {/* Content Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Blog Articles</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Implementation Guides</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">100K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Blog Post */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🔮</span>
                <div>
                  <div className="text-sm text-purple-600 font-semibold">BLOG POST</div>
                  <div className="text-xs text-gray-500">Published 2 days ago</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <Link href="/blog/ai-2025-trends-predictions" className="hover:text-purple-600 transition-colors">
                  AI 2025 Trends & Predictions
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the most important AI trends and predictions for 2025. From quantum computing 
                breakthroughs to neural interfaces, explore what the future holds.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span>15 min read</span>
                  <span className="mx-2">•</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">NEW</span>
                </div>
                <Link 
                  href="/blog/ai-2025-trends-predictions"
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>

            {/* Featured Case Study */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🏢</span>
                <div>
                  <div className="text-sm text-green-600 font-semibold">CASE STUDY</div>
                  <div className="text-xs text-gray-500">Published 1 week ago</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <Link href="/case-studies/ai-enterprise-transformation-2025" className="hover:text-green-600 transition-colors">
                  AI Enterprise Transformation: 340% ROI
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                How a Fortune 500 company achieved 340% ROI through comprehensive AI transformation. 
                Learn the strategies, challenges, and results.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span>20 min read</span>
                  <span className="mx-2">•</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">FEATURED</span>
                </div>
                <Link 
                  href="/case-studies/ai-enterprise-transformation-2025"
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>

            {/* Featured Resource */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📚</span>
                <div>
                  <div className="text-sm text-blue-600 font-semibold">RESOURCE</div>
                  <div className="text-xs text-gray-500">Updated 3 days ago</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <Link href="/resources/ai-2025-implementation-guide" className="hover:text-blue-600 transition-colors">
                  AI 2025 Implementation Guide
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Complete business transformation toolkit with 150+ pages, templates, and proven strategies 
                to achieve 340% ROI with AI implementation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span>150 pages</span>
                  <span className="mx-2">•</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">FREE</span>
                </div>
                <Link 
                  href="/resources/ai-2025-implementation-guide"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Download →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section id="all-content" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Blog Posts */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-2">Blog Posts</h3>
                <p className="text-gray-600 mb-4">Latest insights, trends, and analysis</p>
                <div className="text-2xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-sm text-gray-500">Articles</div>
                <Link 
                  href="/blog"
                  className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Case Studies</h3>
                <p className="text-gray-600 mb-4">Real success stories and results</p>
                <div className="text-2xl font-bold text-green-600 mb-2">25+</div>
                <div className="text-sm text-gray-500">Success Stories</div>
                <Link 
                  href="/case-studies"
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2">Resources</h3>
                <p className="text-gray-600 mb-4">Guides, templates, and tools</p>
                <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-500">Free Resources</div>
                <Link 
                  href="/resources"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>

            {/* Webinars */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2">Webinars</h3>
                <p className="text-gray-600 mb-4">Live training and expert sessions</p>
                <div className="text-2xl font-bold text-orange-600 mb-2">10+</div>
                <div className="text-sm text-gray-500">Live Sessions</div>
                <Link 
                  href="/webinars"
                  className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Content</h2>
          
          <div className="space-y-6">
            {/* Latest Blog Posts */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Blog Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/ai-2025-trends-predictions" className="group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🔮</span>
                      <div>
                        <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                          AI 2025 Trends & Predictions
                        </h4>
                        <p className="text-sm text-gray-500">2 days ago • 15 min read</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/blog/ai-enterprise-automation" className="group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🤖</span>
                      <div>
                        <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                          AI Enterprise Automation Guide
                        </h4>
                        <p className="text-sm text-gray-500">1 week ago • 12 min read</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/blog/quantum-computing-2025" className="group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">⚛️</span>
                      <div>
                        <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                          Quantum Computing Breakthroughs 2025
                        </h4>
                        <p className="text-sm text-gray-500">2 weeks ago • 18 min read</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/blog/neural-interfaces-future" className="group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🧠</span>
                      <div>
                        <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                          Neural Interfaces: The Future is Here
                        </h4>
                        <p className="text-sm text-gray-500">3 weeks ago • 20 min read</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Latest Case Studies */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/case-studies/ai-enterprise-transformation-2025" className="group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🏢</span>
                      <div>
                        <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                          AI Enterprise Transformation: 340% ROI
                        </h4>
                        <p className="text-sm text-gray-500">1 week ago • 20 min read</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/case-studies/ai-financial-services" className="group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🏦</span>
                      <div>
                        <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                          Financial Services AI Success
                        </h4>
                        <p className="text-sm text-gray-500">2 weeks ago • 15 min read</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/case-studies/ai-healthcare-breakthrough" className="group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🏥</span>
                      <div>
                        <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                          Healthcare AI Breakthrough
                        </h4>
                        <p className="text-sm text-gray-500">3 weeks ago • 18 min read</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/case-studies/ai-retail-transformation" className="group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🛒</span>
                      <div>
                        <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                          Retail AI Transformation
                        </h4>
                        <p className="text-sm text-gray-500">1 month ago • 16 min read</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Content</h2>
          <p className="text-xl opacity-90 mb-8">
            Get notified when we publish new articles, case studies, and resources. 
            Join 10,000+ professionals staying ahead with AI insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
}