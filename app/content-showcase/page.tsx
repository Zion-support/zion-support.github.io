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
                  <p className="text-sm opacity-90 mb-3">Master Large Language Model optimization with 10x performance improvements through advanced techniques</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>🆕 NEW</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-edge-computing-revolution" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                  <h3 className="text-lg font-semibold mb-2">Edge Computing Revolution</h3>
                  <p className="text-sm opacity-90 mb-3">10x performance with AI at the edge, ultra-low latency, and real-time processing capabilities</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>22 min read</span>
                    <span className="mx-2">•</span>
                    <span>🚀 TRENDING</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-2025-global-manufacturing-ai-revolution" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                  <h3 className="text-lg font-semibold mb-2">$2.8B Manufacturing AI Success</h3>
                  <p className="text-sm opacity-90 mb-3">Fortune 100 manufacturing giant achieves 45% efficiency gains and 340% ROI across 50+ facilities</p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest AI Insights & Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our comprehensive collection of AI articles, case studies, and implementation guides. 
              Expert insights to accelerate your AI transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Masterclass Series */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🎓</div>
                <h3 className="text-xl font-bold text-gray-900">Masterclass Series</h3>
              </div>
              <p className="text-gray-600 mb-4">In-depth guides for AI professionals and enterprise leaders</p>
              <div className="space-y-3">
                <Link href="/blog/ai-2025-llm-optimization-masterclass" className="block group">
                  <div className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">LLM Optimization Masterclass</h4>
                    <p className="text-sm text-gray-600">10x performance with advanced techniques</p>
                  </div>
                </Link>
                <Link href="/blog/ai-2025-enterprise-security-masterclass" className="block group">
                  <div className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Enterprise Security Masterclass</h4>
                    <p className="text-sm text-gray-600">Complete AI protection framework</p>
                  </div>
                </Link>
                <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="block group">
                  <div className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Enterprise Implementation</h4>
                    <p className="text-sm text-gray-600">Complete transformation guide</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Technology Deep Dives */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🔬</div>
                <h3 className="text-xl font-bold text-gray-900">Technology Deep Dives</h3>
              </div>
              <p className="text-gray-600 mb-4">Cutting-edge AI technologies and their business applications</p>
              <div className="space-y-3">
                <Link href="/blog/ai-2025-edge-computing-revolution" className="block group">
                  <div className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600">Edge Computing Revolution</h4>
                    <p className="text-sm text-gray-600">10x performance with AI at the edge</p>
                  </div>
                </Link>
                <Link href="/blog/ai-2025-advanced-ai-agents" className="block group">
                  <div className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600">Advanced AI Agents</h4>
                    <p className="text-sm text-gray-600">300-500% efficiency improvements</p>
                  </div>
                </Link>
                <Link href="/blog/quantum-computing-business-revolution-2025" className="block group">
                  <div className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600">Quantum Computing</h4>
                    <p className="text-sm text-gray-600">10,000x speedups in optimization</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🏆</div>
                <h3 className="text-xl font-bold text-gray-900">Success Stories</h3>
              </div>
              <p className="text-gray-600 mb-4">Real-world case studies showcasing AI transformation results</p>
              <div className="space-y-3">
                <Link href="/case-studies/ai-2025-global-manufacturing-ai-revolution" className="block group">
                  <div className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">Manufacturing AI Revolution</h4>
                    <p className="text-sm text-gray-600">$2.8B value creation across 50+ facilities</p>
                  </div>
                </Link>
                <Link href="/case-studies/ai-2025-fortune-500-quantum-transformation" className="block group">
                  <div className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">$3.2B Quantum AI Success</h4>
                    <p className="text-sm text-gray-600">Fortune 500 transformation with 340% ROI</p>
                  </div>
                </Link>
                <Link href="/case-studies/ai-2025-financial-services-ai-transformation-success" className="block group">
                  <div className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">Financial Services AI</h4>
                    <p className="text-sm text-gray-600">Banking transformation with AI-powered operations</p>
                  </div>
                </Link>
              </div>
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