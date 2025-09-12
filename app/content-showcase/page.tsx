import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';
import NewsletterSignup from '../../components/NewsletterSignup';

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
                🎯 Featured This Week
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our most popular and impactful content, handpicked by our experts to help you 
                stay ahead in the rapidly evolving AI landscape.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/ai-2025-advanced-automation" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                  <h3 className="text-lg font-semibold mb-2">AI Advanced Automation 2025</h3>
                  <p className="text-sm opacity-90 mb-3">Complete business transformation guide with 340% ROI</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>🔥 New</span>
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
              
              <Link href="/case-studies/ai-transformation-fintech-revolution-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏦</div>
                  <h3 className="text-lg font-semibold mb-2">Fintech AI Revolution 2025</h3>
                  <p className="text-sm opacity-90 mb-3">$2.8B revenue growth and 340% ROI success story</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>🏆 Featured</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Content Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📚 Latest Content</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-cybersecurity-advanced-threats" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Cybersecurity Advanced Threats</h3>
                <p className="text-gray-600 text-sm mb-3">Protecting against next-gen AI-powered attacks in 2025</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>22 min read</span>
                  <span className="mx-2">•</span>
                  <span>🔥 Critical</span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ai-2025-enterprise-readiness" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Enterprise Readiness 2025</h3>
                <p className="text-gray-600 text-sm mb-3">Complete assessment & implementation guide</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>🔥 Trending</span>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-transformation-global-retail-giant-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛍️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Global Retail AI Transformation</h3>
                <p className="text-gray-600 text-sm mb-3">300% revenue growth and $2.4B additional revenue</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>🏆 Success</span>
                </div>
              </div>
            </Link>
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
        <section className="mb-16">
          <NewsletterSignup variant="default" />
        </section>
      </div>
    </div>
  );
}