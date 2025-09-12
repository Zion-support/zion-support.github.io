import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI and business resources. Latest articles, case studies, templates, and tools to accelerate your growth in 2025."
        keywords="AI resources, business tools, content library, AI articles, startup resources, technology guides"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of AI and business resources. Latest articles, 
            case studies, templates, and tools to accelerate your growth in 2025.
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
        </div>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-productivity-automation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-8xl">⚡</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Productivity
                    </span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Productivity Automation 2025: Complete Implementation Guide
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Transform your business productivity with AI automation. Learn proven strategies, 
                    tools, and implementation frameworks that deliver 40% efficiency gains and 60% cost reduction.
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

            <Link href="/blog/ai-startup-funding-masterclass-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">💰</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Startup Strategy
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Startup Funding Masterclass 2025: From Seed to Series A
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Master the $47B AI startup funding landscape with our comprehensive guide. 
                    Learn proven strategies, pitch templates, and investor insights to secure funding in 2025.
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
              </article>
            </Link>

            <Link href="/blog/ai-cybersecurity-threat-detection-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative">
                  <div className="text-8xl">🛡️</div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      Cybersecurity
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    AI Cybersecurity Threat Detection 2025: Advanced Defense Strategies
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Protect your organization with AI-powered cybersecurity threat detection. 
                    Learn advanced defense strategies, tools, and implementation frameworks for 2025.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-red-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Free Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-productivity-automation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-3">
                  AI Productivity Automation Checklist 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  150+ actionable items to implement AI automation in your organization. 
                  Boost productivity by 40% and reduce costs by 60%.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Free Download</span>
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Download →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-startup-funding-templates-2025" className="group">
              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 mb-3">
                  AI Startup Funding Templates 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  200+ pages of pitch decks, financial models, and investor resources. 
                  Everything you need to secure funding in 2025.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Free Download</span>
                  <span className="text-green-600 font-medium group-hover:underline">
                    Download →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-cybersecurity-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 mb-3">
                  AI Cybersecurity Checklist 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  200+ security measures to protect your AI systems from threats and 
                  ensure compliance in 2025.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Free Download</span>
                  <span className="text-red-600 font-medium group-hover:underline">
                    Download →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 mb-3">
                  AI Automation in Manufacturing
                </h3>
                <p className="text-gray-600 mb-4">
                  Fortune 500 manufacturing company achieved 40% cost reduction and 60% faster 
                  processing times through AI automation implementation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Case Study</span>
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/fortune-500-ai-transformation" className="group">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-green-600 mb-3">
                  Fortune 500 AI Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete digital transformation success story with $50M cost savings, 
                  300% efficiency gains, and 95% customer satisfaction improvement.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Case Study</span>
                  <span className="text-green-600 font-medium group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
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
        </section>
      </div>
    </div>
  );
}