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
            <span className="text-sm font-medium">🚀 NEW CONTENT DROP - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of cutting-edge AI insights, enterprise implementation guides, 
            and billion-dollar success stories. Expert content designed to accelerate your AI transformation journey in 2025.
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
                Our latest and most impactful content, featuring breakthrough AI implementations, 
                enterprise masterclasses, and multi-billion dollar transformation success stories.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-2025-advanced-ai-agents" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                  <h3 className="text-lg font-semibold mb-2">Advanced AI Agents Guide</h3>
                  <p className="text-sm opacity-90 mb-3">Complete enterprise implementation with 340% ROI and autonomous systems</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>15 min read</span>
                    <span className="mx-2">•</span>
                    <span>🔥 HOT</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-cybersecurity-revolution" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                  <h3 className="text-lg font-semibold mb-2">AI Cybersecurity Revolution</h3>
                  <p className="text-sm opacity-90 mb-3">94% threat detection accuracy and zero-day attack prevention</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>🆕 NEW</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-2025-global-manufacturing-ai-transformation-success" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                  <h3 className="text-lg font-semibold mb-2">$2.1B Manufacturing Success</h3>
                  <p className="text-sm opacity-90 mb-3">Global manufacturing giant transformation with 340% ROI</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>💰 $2.1B Value</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-healthcare-diagnosis-revolution" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
                  <h3 className="text-lg font-semibold mb-2">Healthcare AI Revolution</h3>
                  <p className="text-sm opacity-90 mb-3">94% accuracy in cancer detection and 67% faster diagnosis times</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>14 min read</span>
                    <span className="mx-2">•</span>
                    <span>🚀 BREAKTHROUGH</span>
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
            Get weekly updates on breakthrough AI implementations, enterprise masterclasses, 
            and exclusive transformation success stories. Join 25,000+ AI professionals and business leaders.
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