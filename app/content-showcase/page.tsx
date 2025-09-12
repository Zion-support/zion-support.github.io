import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI articles, case studies, implementation guides, and resources. Fresh content published weekly to help you succeed in 2025."
        keywords="AI content showcase, business resources, AI articles, case studies, implementation guides, free downloads"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of AI articles, case studies, implementation guides, 
            and resources. Fresh content published weekly to help you succeed in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📚 Browse Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </div>

        {/* Featured Content */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🔥 FEATURED THIS WEEK</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest & Greatest Content
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and impactful content from this week
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-year-ahead-predictions" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                  NEW
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI 2025: Year Ahead Predictions
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive predictions for breakthrough technologies, market trends, and transformative applications that will reshape industries.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>25 min read</span>
                  <span>•</span>
                  <span>Jan 15, 2025</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                  FREE DOWNLOAD
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Workforce Transformation Playbook
                </h3>
                <p className="text-gray-600 mb-4">
                  150+ page complete guide to transforming your workforce for the AI era with reskilling strategies and implementation frameworks.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>150+ pages</span>
                  <span>•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                  CASE STUDY
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Sustainability Success Story
                </h3>
                <p className="text-gray-600 mb-4">
                  How a Fortune 500 company achieved 60% energy reduction and carbon neutrality through AI-powered sustainability transformation.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Case Study</span>
                  <span>•</span>
                  <span>$2.3M savings</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Articles & Insights</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert analysis, trends, and insights on AI, technology, and business transformation.
                </p>
                <div className="text-blue-600 font-medium group-hover:underline">
                  Browse Articles →
                </div>
              </div>
            </Link>

            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Resources</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Downloadable guides, checklists, templates, and implementation playbooks.
                </p>
                <div className="text-green-600 font-medium group-hover:underline">
                  Download Resources →
                </div>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Case Studies</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Real-world success stories and detailed implementation examples.
                </p>
                <div className="text-purple-600 font-medium group-hover:underline">
                  View Case Studies →
                </div>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Services</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert consulting, implementation, and support services.
                </p>
                <div className="text-orange-600 font-medium group-hover:underline">
                  Explore Services →
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/ai-workforce-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  NEW
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Workforce Transformation 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete reskilling strategies for the AI era - how to prepare your team for AI-driven workplace changes.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>18 min read</span>
                  <span>•</span>
                  <span>Jan 18, 2025</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-innovation-trends-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  TRENDING
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Innovation Trends 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Quantum AI, neuromorphic computing, and breakthrough technologies that will define the future.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>25 min read</span>
                  <span>•</span>
                  <span>Jan 12, 2025</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  NEW
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Sustainability & Green Tech 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Building eco-friendly AI systems that reduce environmental impact and drive sustainability.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>20 min read</span>
                  <span>•</span>
                  <span>Jan 10, 2025</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Resources</h2>
            <Link href="/resources" className="text-green-600 hover:text-green-700 font-medium">
              View All Resources →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  FREE DOWNLOAD
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Implementation Master Guide
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  150-page complete blueprint for AI success with step-by-step implementation strategies.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>150+ pages</span>
                  <span>•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/green-ai-implementation-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  FREE DOWNLOAD
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Green AI Implementation Guide
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete 120+ page guide to building environmentally responsible AI systems.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>120+ pages</span>
                  <span>•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  POPULAR
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Step-by-step checklist with 150+ actionable items for successful AI deployment.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>150+ items</span>
                  <span>•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <Link href="/case-studies" className="text-purple-600 hover:text-purple-700 font-medium">
              View All Case Studies →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  CASE STUDY
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Automation in Manufacturing
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  40% cost reduction and 60% faster processing times through AI automation implementation.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Fortune 500</span>
                  <span>•</span>
                  <span>$2.3M savings</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-retail-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛒</div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  CASE STUDY
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Retail Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  300% revenue growth with AI-powered personalization and customer experience optimization.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>E-commerce</span>
                  <span>•</span>
                  <span>300% growth</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  CASE STUDY
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Healthcare Breakthrough
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  95% diagnostic accuracy and 60% faster diagnosis times with AI-powered medical imaging.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Healthcare</span>
                  <span>•</span>
                  <span>95% accuracy</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl text-blue-100 mb-6">
            Get weekly updates on new articles, resources, and case studies delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe to Updates
              </button>
            </form>
            <p className="text-sm text-blue-100 mt-4">
              Join 10,000+ professionals who trust our content
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}