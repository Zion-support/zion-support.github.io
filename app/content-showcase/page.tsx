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
              <Link href="/blog/ai-2025-advanced-robotics" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                  <h3 className="text-lg font-semibold mb-2">Advanced Robotics & AI Integration</h3>
                  <p className="text-sm opacity-90 mb-3">Humanoid robots and autonomous systems revolutionizing industries</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>🔥 Hot Topic</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-neural-interfaces" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
                  <h3 className="text-lg font-semibold mb-2">Neural Interfaces & BCI</h3>
                  <p className="text-sm opacity-90 mb-3">Direct brain-computer communication enabling human enhancement</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>20 min read</span>
                    <span className="mx-2">•</span>
                    <span>🚀 Trending</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-2025-autonomous-vehicles-success" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚗</div>
                  <h3 className="text-lg font-semibold mb-2">Autonomous Vehicles Success</h3>
                  <p className="text-sm opacity-90 mb-3">95% reduction in accidents, $2.3T market value created</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>🏆 Award Winner</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore Our Latest Content
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Blog Posts */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Latest Articles</h3>
              <p className="text-gray-600 mb-4 text-sm">Expert insights on AI trends, implementation strategies, and business transformation.</p>
              <div className="space-y-2 mb-4">
                <Link href="/blog/ai-2025-advanced-robotics" className="block text-sm text-blue-600 hover:text-blue-800">
                  • Advanced Robotics & AI Integration
                </Link>
                <Link href="/blog/ai-2025-neural-interfaces" className="block text-sm text-blue-600 hover:text-blue-800">
                  • Neural Interfaces & BCI
                </Link>
                <Link href="/blog/ai-2025-space-technology" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI-Powered Space Technology
                </Link>
              </div>
              <Link href="/blog" className="text-blue-600 font-medium hover:underline text-sm">
                View All Articles →
              </Link>
            </div>

            {/* Case Studies */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Success Stories</h3>
              <p className="text-gray-600 mb-4 text-sm">Real-world case studies showcasing AI transformations and measurable business results.</p>
              <div className="space-y-2 mb-4">
                <Link href="/case-studies/ai-2025-autonomous-vehicles-success" className="block text-sm text-purple-600 hover:text-purple-800">
                  • Autonomous Vehicles Revolution
                </Link>
                <Link href="/case-studies/ai-2025-manufacturing-automation-success" className="block text-sm text-purple-600 hover:text-purple-800">
                  • Manufacturing Automation Success
                </Link>
                <Link href="/case-studies/ai-2025-financial-services-transformation-success" className="block text-sm text-purple-600 hover:text-purple-800">
                  • Financial Services Transformation
                </Link>
              </div>
              <Link href="/case-studies" className="text-purple-600 font-medium hover:underline text-sm">
                View All Case Studies →
              </Link>
            </div>

            {/* Resources */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Resources</h3>
              <p className="text-gray-600 mb-4 text-sm">Downloadable guides, templates, checklists, and tools to accelerate your AI journey.</p>
              <div className="space-y-2 mb-4">
                <span className="block text-sm text-gray-500">• AI Implementation Checklist</span>
                <span className="block text-sm text-gray-500">• ROI Calculator Template</span>
                <span className="block text-sm text-gray-500">• Technology Assessment Guide</span>
              </div>
              <Link href="/resources" className="text-green-600 font-medium hover:underline text-sm">
                View All Resources →
              </Link>
            </div>

            {/* Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Services</h3>
              <p className="text-gray-600 mb-4 text-sm">Expert AI consulting, implementation, and support services to transform your business.</p>
              <div className="space-y-2 mb-4">
                <Link href="/services" className="block text-sm text-orange-600 hover:text-orange-800">
                  • AI Strategy Consulting
                </Link>
                <Link href="/services" className="block text-sm text-orange-600 hover:text-orange-800">
                  • Implementation Services
                </Link>
                <Link href="/services" className="block text-sm text-orange-600 hover:text-orange-800">
                  • Training & Support
                </Link>
              </div>
              <Link href="/services" className="text-orange-600 font-medium hover:underline text-sm">
                Explore Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Content Statistics */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Content Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Expert Articles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <p className="text-gray-700">Case Studies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100K+</div>
              <p className="text-gray-700">Monthly Readers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-700">Client Satisfaction</p>
            </div>
          </div>
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