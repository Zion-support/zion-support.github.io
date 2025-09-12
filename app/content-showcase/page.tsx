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
                🎯 Featured This Week
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our most popular and impactful content, handpicked by our experts to help you 
                stay ahead in the rapidly evolving AI landscape.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/ai-2025-llm-optimization-masterclass" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">LLM Optimization Masterclass</h3>
                  <p className="text-sm opacity-90 mb-3">10x performance with advanced techniques: prompt engineering, fine-tuning, RAG optimization</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>🆕 NEW</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-automation-enterprise-transformation" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                  <h3 className="text-lg font-semibold mb-2">AI Automation Enterprise Guide</h3>
                  <p className="text-sm opacity-90 mb-3">Complete implementation guide for 300-500% efficiency gains through strategic AI automation</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>30 min read</span>
                    <span className="mx-2">•</span>
                    <span>🔥 HOT</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-2025-global-tech-unicorn-transformation" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                  <h3 className="text-lg font-semibold mb-2">$2.8B Unicorn Transformation</h3>
                  <p className="text-sm opacity-90 mb-3">Global tech unicorn achieves 340% ROI and market leadership through comprehensive AI transformation</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>💰 $2.8B Value</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Content Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest AI Insights & Success Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Posts */}
            <Link href="/blog/ai-2025-advanced-ai-agents" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Advanced AI Agents Revolution</h3>
                <p className="text-gray-600 text-sm mb-3">Autonomous intelligence systems with 300-500% efficiency improvements</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>15 min read</span>
                  <span className="mx-2">•</span>
                  <span>🆕 NEW</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/quantum-computing-business-revolution-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Quantum Computing Revolution</h3>
                <p className="text-gray-600 text-sm mb-3">10,000x speedups with breakthrough quantum algorithms</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>18 min read</span>
                  <span className="mx-2">•</span>
                  <span>🚀 TRENDING</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Enterprise Implementation Masterclass</h3>
                <p className="text-gray-600 text-sm mb-3">Complete guide to enterprise AI implementation strategies</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>22 min read</span>
                  <span className="mx-2">•</span>
                  <span>📖 GUIDE</span>
                </div>
              </div>
            </Link>

            {/* Case Studies */}
            <Link href="/case-studies/ai-2025-fortune-500-quantum-transformation" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">$3.2B Fortune 500 Success</h3>
                <p className="text-gray-600 text-sm mb-3">Quantum AI transformation with 45% efficiency gains</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>💰 $3.2B Value</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-2025-fintech-unicorn-transformation" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💳</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Fintech Unicorn Revolution</h3>
                <p className="text-gray-600 text-sm mb-3">500% efficiency gains through AI automation</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>📈 500% Gains</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-2025-manufacturing-transformation-success" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Manufacturing AI Success</h3>
                <p className="text-gray-600 text-sm mb-3">Smart manufacturing transformation with 60% cost reduction</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>🏭 Manufacturing</span>
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