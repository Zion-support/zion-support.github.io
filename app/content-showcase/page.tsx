import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';
import ErrorBoundary from '../../components/ErrorBoundary';

export default function ContentShowcase() {
  return (
    <ErrorBoundary>
      <SEO
        title="Content Showcase - Latest AI & Technology Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI articles, case studies, implementation guides, and resources. Stay ahead with the latest insights in AI, automation, and digital transformation."
        keywords="AI resources, technology articles, case studies, implementation guides, AI insights, digital transformation, automation resources"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">Content Library</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Content Showcase
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive collection of AI articles, case studies, implementation guides, 
                and resources. Stay ahead with the latest insights in AI, automation, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🔥 HOT THIS WEEK</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured New Content
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our latest expert insights and resources published this week
              </p>
            </div>

            {/* Featured Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Link href="/blog/ai-workforce-transformation-2025" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 mb-4 text-sm font-medium">
                    New Article
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Workforce Transformation 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Reskilling strategies for the AI era. Learn how to transform your workforce 
                    for success with 40% higher productivity gains.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>18 min read</span>
                      <span>•</span>
                      <span>Jan 28, 2025</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-data-privacy-compliance-2025" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔒</div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 mb-4 text-sm font-medium">
                    New Article
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Data Privacy & Compliance 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete guide to AI privacy regulations. Navigate GDPR, CCPA, and emerging 
                    AI privacy laws with confidence.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>22 min read</span>
                      <span>•</span>
                      <span>Jan 28, 2025</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                  <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 mb-4 text-sm font-medium">
                    New Case Study
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Sustainability Transformation 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Real-world case study: 60% energy reduction and carbon neutrality achieved 
                    through strategic AI implementation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>25 min read</span>
                      <span>•</span>
                      <span>Jan 28, 2025</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">📚 FREE RESOURCES</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Downloadable Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive guides, templates, and checklists to accelerate your AI journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 mb-4 text-sm font-medium">
                    Free Download
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Workforce Transformation Playbook
                  </h3>
                  <p className="text-gray-600 mb-4">
                    150+ page comprehensive playbook with templates, checklists, and implementation 
                    guides for transforming your workforce.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>150+ pages</span>
                      <span>•</span>
                      <span>PDF Download</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-implementation-checklist-2025" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✅</div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 mb-4 text-sm font-medium">
                    Free Download
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Implementation Checklist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    150+ actionable items for successful AI deployment. Step-by-step checklist 
                    covering all aspects of AI implementation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>Checklist</span>
                      <span>•</span>
                      <span>PDF Download</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/green-ai-implementation-guide-2025" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 mb-4 text-sm font-medium">
                    Free Download
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Green AI Implementation Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Build sustainable AI systems with 60% energy reduction. Complete guide to 
                    implementing eco-friendly AI solutions.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>120+ pages</span>
                      <span>•</span>
                      <span>PDF Download</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore content organized by topic and type
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-200">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Articles & Insights</h3>
                  <p className="text-blue-800 text-sm mb-4">
                    Latest insights on AI, automation, and digital transformation
                  </p>
                  <div className="text-blue-600 font-medium group-hover:underline">
                    Browse Articles →
                  </div>
                </div>
              </Link>

              <Link href="/case-studies" className="group">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-200">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">Case Studies</h3>
                  <p className="text-green-800 text-sm mb-4">
                    Real-world success stories and implementation results
                  </p>
                  <div className="text-green-600 font-medium group-hover:underline">
                    View Case Studies →
                  </div>
                </div>
              </Link>

              <Link href="/resources" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-purple-200">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <h3 className="text-lg font-bold text-purple-900 mb-2">Resources</h3>
                  <p className="text-purple-800 text-sm mb-4">
                    Guides, templates, checklists, and implementation tools
                  </p>
                  <div className="text-purple-600 font-medium group-hover:underline">
                    Browse Resources →
                  </div>
                </div>
              </Link>

              <Link href="/services" className="group">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-orange-200">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="text-lg font-bold text-orange-900 mb-2">Services</h3>
                  <p className="text-orange-800 text-sm mb-4">
                    Professional services and consulting offerings
                  </p>
                  <div className="text-orange-600 font-medium group-hover:underline">
                    Explore Services →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Latest Content
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get weekly updates on new articles, case studies, and resources. 
              Join 10,000+ professionals who trust our content.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}