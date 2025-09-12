import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI Insights & Resources 2025"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Discover the latest insights, implementation guides, and success stories from industry experts."
        keywords="AI content, AI articles, AI case studies, AI resources, AI insights, AI implementation, AI strategy"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of AI insights, case studies, and resources. 
            From cutting-edge research to practical implementation guides, find everything you 
            need to succeed with AI in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📚 Browse All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </header>

        {/* Featured Content Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🔥 FEATURED THIS WEEK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest AI Insights & Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our newest and most popular content, handpicked by our AI experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-advanced-ai-architecture" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏗️</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Architecture
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Advanced AI Architecture Patterns for 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Master microservices, event-driven design, and multi-cloud strategies for enterprise-scale AI systems. 
                    Complete implementation guide with real-world examples.
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
              </article>
            </Link>

            <Link href="/blog/ai-2025-generative-ai-enterprise-adoption" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">🤖</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Generative AI
                    </span>
                    <span className="text-gray-500 text-sm">30 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 29, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Generative AI Enterprise Adoption 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete implementation guide with proven strategies, frameworks, and real-world case studies 
                    for successful enterprise generative AI adoption.
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
              </article>
            </Link>

            <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
                  <div className="text-8xl">💰</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Case Study
                    </span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    $200M Manufacturing Success Case Study
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a Fortune 500 manufacturer achieved $200M in annual savings through AI autonomous systems. 
                    Complete implementation details and lessons learned.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📚 Free Resources & Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our comprehensive guides, templates, and tools to accelerate your AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-implementation-master-guide-2026" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Implementation Master Guide 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  200+ page comprehensive guide with frameworks, templates, and step-by-step processes 
                  for successful enterprise AI adoption.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">Free Download</span>
                  <span className="text-sm text-gray-500">200+ pages</span>
                </div>
              </div>
            </Link>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Cybersecurity Checklist 2025
              </h3>
              <p className="text-gray-600 mb-4">
                150+ security items for secure AI implementation. Comprehensive checklist covering 
                data protection, model security, and compliance requirements.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-medium">Coming Soon</span>
                <span className="text-sm text-gray-500">150+ items</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Workforce Transformation Playbook
              </h3>
              <p className="text-gray-600 mb-4">
                Complete reskilling strategies and implementation guides for preparing your 
                workforce for the AI era. Includes training programs and change management.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-600 font-medium">Coming Soon</span>
                <span className="text-sm text-gray-500">150+ pages</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📖 Content Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore content organized by topic and expertise level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Articles
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  In-depth articles on AI trends, technologies, and best practices
                </p>
                <div className="text-sm text-blue-600 font-medium group-hover:underline">
                  Browse Articles →
                </div>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Case Studies
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Real-world success stories and implementation details
                </p>
                <div className="text-sm text-green-600 font-medium group-hover:underline">
                  View Case Studies →
                </div>
              </div>
            </Link>

            <Link href="/resources" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Resources
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Guides, templates, checklists, and implementation tools
                </p>
                <div className="text-sm text-purple-600 font-medium group-hover:underline">
                  Download Resources →
                </div>
              </div>
            </Link>

            <Link href="/webinars" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🎥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Webinars
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Live sessions and recorded presentations from AI experts
                </p>
                <div className="text-sm text-orange-600 font-medium group-hover:underline">
                  Watch Webinars →
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📧 Stay Updated with Latest AI Insights
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly updates on AI trends, new content releases, and exclusive insights 
            delivered straight to your inbox. Join 10,000+ AI professionals.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </section>
      </div>
    </div>
  );
}