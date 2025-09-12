import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI articles, case studies, implementation guides, and free resources. Stay ahead with the latest insights in AI, automation, and technology."
        keywords="AI content, technology resources, implementation guides, case studies, free downloads, AI articles"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Home
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Content Library</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 Content Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive collection of AI articles, case studies, implementation guides, 
              and free resources. Everything you need to succeed in the AI-powered future.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Articles</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-sm text-gray-600">Resources</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100K+</div>
            <div className="text-sm text-gray-600">Downloads</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🔥 Featured This Week</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/ai-multimodal-revolution-2025" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👁️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600">AI Multimodal Revolution 2025</h3>
                <p className="text-gray-600 mb-4">Beyond text to vision, audio, and beyond - complete implementation guide with real-world applications</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">15 min read</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">New</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">AI Sustainability & Green Tech 2025</h3>
                <p className="text-gray-600 mb-4">Building responsible AI for a sustainable future with 60% carbon reduction strategies</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">18 min read</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">New</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">AI Sustainability Case Study</h3>
                <p className="text-gray-600 mb-4">Fortune 500 manufacturing success: 60% carbon reduction, $2.3M annual savings</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Case Study</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">New</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="space-y-16">
          {/* Latest Articles */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">📚 Latest Articles</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Articles →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-productivity-automation-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Productivity Automation 2025</h3>
                  <p className="text-gray-600 text-sm mb-3">Transform workflows with 300% productivity gains and intelligent automation</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>20 min read</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">New</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-enterprise-automation-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🏢</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Enterprise Automation 2025</h3>
                  <p className="text-gray-600 text-sm mb-3">Complete implementation guide with 40% cost reduction and 300% productivity gains</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>20 min read</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Popular</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-startup-funding-playbook-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Startup Funding Playbook 2025</h3>
                  <p className="text-gray-600 text-sm mb-3">Master the $47B funding landscape with proven strategies and templates</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>25 min read</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Trending</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Free Resources */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">📋 Free Resources</h2>
              <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Resources →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/ai-multimodal-implementation-guide-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Multimodal AI Implementation Guide</h3>
                  <p className="text-gray-600 text-sm mb-3">150+ pages with code examples, best practices, and real-world applications</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Free Download</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">New</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/sustainable-ai-checklist-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🌱</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Sustainable AI Checklist</h3>
                  <p className="text-gray-600 text-sm mb-3">50+ actionable items for green AI implementation and carbon neutrality</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Free Download</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">New</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-implementation-checklist-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Implementation Checklist</h3>
                  <p className="text-gray-600 text-sm mb-3">Step-by-step checklist for successful AI implementation across industries</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Free Download</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Popular</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Case Studies */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">📊 Success Stories</h2>
              <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Case Studies →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🏭</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Manufacturing Automation</h3>
                  <p className="text-gray-600 text-sm mb-3">40% cost reduction and 60% faster processing times through intelligent automation</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Fortune 500</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Success</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/fortune-500-ai-transformation" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🏆</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Fortune 500 AI Transformation</h3>
                  <p className="text-gray-600 text-sm mb-3">Complete digital transformation success story with measurable business impact</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Enterprise</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Featured</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🏦</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Financial Services AI</h3>
                  <p className="text-gray-600 text-sm mb-3">$50M cost savings and 300% efficiency gains through AI transformation</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Banking</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">ROI</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-lg mb-6 opacity-90">
            Get weekly updates on new articles, resources, and case studies delivered straight to your inbox.
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
          <p className="text-sm mt-4 opacity-75">
            No spam. Unsubscribe anytime. Join 10,000+ professionals.
          </p>
        </div>
      </div>
    </div>
  );
}