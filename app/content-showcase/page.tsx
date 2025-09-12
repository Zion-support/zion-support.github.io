import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Resources 2025"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Expert insights, implementation guides, and real-world success stories to accelerate your growth."
        keywords="AI content, business resources, AI articles, case studies, implementation guides, AI insights"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🚀 FRESH CONTENT - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest AI insights, implementation guides, and real-world success stories. 
            Expert content designed to accelerate your AI transformation journey in 2025.
          </p>
        </header>

        {/* Featured Content */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🔥 Latest Breakthrough Content
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our newest and most impactful content featuring AI 2026 predictions, enterprise success stories, 
                and comprehensive implementation roadmaps to accelerate your AI transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/ai-2026-future-predictions-and-trends" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                  <h3 className="text-lg font-semibold mb-2">AI 2026: Future Predictions</h3>
                  <p className="text-sm opacity-90 mb-3">Quantum AI, brain-computer interfaces, AGI breakthroughs - the future of AI</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span className="bg-red-500 px-2 py-1 rounded-full">Hot</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-enterprise-ai-transformation-success" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise AI Success Stories</h3>
                  <p className="text-sm opacity-90 mb-3">How Fortune 500 companies achieved 300% ROI through strategic AI implementation</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>15 min read</span>
                    <span className="mx-2">•</span>
                    <span className="bg-green-500 px-2 py-1 rounded-full">New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/resources/ai-2026-implementation-roadmap" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🗺️</div>
                  <h3 className="text-lg font-semibold mb-2">AI 2026 Implementation Roadmap</h3>
                  <p className="text-sm opacity-90 mb-3">Complete step-by-step guide for successful AI implementation in 2026</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span className="bg-blue-500 px-2 py-1 rounded-full">Guide</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* New Content Spotlight */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✨ Just Released - January 30, 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh insights and breakthrough content to keep you ahead of the AI curve
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-enterprise-readiness" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                <h3 className="text-lg font-semibold mb-2">AI Enterprise Readiness 2025</h3>
                <p className="text-sm text-gray-600 mb-3">Complete assessment & implementation guide with 340% ROI</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>🔥 Trending</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/resources/ai-2025-comprehensive-implementation-guide" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <h3 className="text-lg font-semibold mb-2">AI Implementation Guide 2025</h3>
                  <p className="text-sm opacity-90 mb-3">200+ pages of strategies, templates, and case studies</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Free Download</span>
                    <span className="mx-2">•</span>
                    <span>⭐ Popular</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-transformation-global-retail-giant-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛍️</div>
                  <h3 className="text-lg font-semibold mb-2">Global Retail AI Transformation</h3>
                  <p className="text-sm opacity-90 mb-3">300% revenue growth and $2.4B additional revenue</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>🏆 Success</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/blog" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Latest Articles</h3>
              <p className="text-gray-600 mb-4">Expert insights on AI trends, implementation strategies, and business transformation.</p>
              <div className="text-blue-600 font-medium group-hover:underline">Browse Articles →</div>
            </div>
          </Link>
          
          <Link href="/resources" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600">Free Resources</h3>
              <p className="text-gray-600 mb-4">Downloadable guides, templates, checklists, and tools to accelerate your AI journey.</p>
              <div className="text-green-600 font-medium group-hover:underline">View Resources →</div>
            </div>
          </Link>
          
          <Link href="/case-studies" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600">Success Stories</h3>
              <p className="text-gray-600 mb-4">Real-world case studies showcasing AI transformations and measurable business results.</p>
              <div className="text-purple-600 font-medium group-hover:underline">Read Case Studies →</div>
            </div>
          </Link>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest AI Insights
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
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