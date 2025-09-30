import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Hub: AI Insights, Success Stories & Revolutionary Solutions | Zion Tech Group',
  description: 'Explore our comprehensive content hub featuring AI insights, success stories, case studies, and revolutionary solutions. Stay ahead with cutting-edge AI knowledge.',
  keywords: 'AI content hub, AI insights, success stories, case studies, AI solutions, enterprise AI, AI trends, AI knowledge',
  openGraph: {
    title: 'Content Hub: AI Insights, Success Stories & Revolutionary Solutions',
    description: 'Explore our comprehensive content hub featuring AI insights, success stories, case studies, and revolutionary solutions.',
    type: 'website',
    url: 'https://ziontechgroup.com/content-hub',
    images: [
      {
        url: '/og-content-hub.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group Content Hub',
      },
    ],
  },
};

export default function ContentHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              📚 Comprehensive AI Knowledge Hub
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Content Hub
            </h1>
            <p className="text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Discover cutting-edge AI insights, success stories, case studies, and revolutionary solutions 
              that are transforming industries worldwide
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">50+</div>
                <div className="text-sm opacity-90">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">25+</div>
                <div className="text-sm opacity-90">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">15+</div>
                <div className="text-sm opacity-90">Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">500+</div>
                <div className="text-sm opacity-90">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Featured Content */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular and impactful content that's driving AI transformation across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Featured Blog Post */}
            <Link href="/blog/ai-trends-2026-revolutionary-breakthroughs" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 hover:border-purple-200">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                      Featured Article
                    </span>
                    <span className="text-sm opacity-90">25 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-200 transition-colors">
                    AI Trends 2026: Revolutionary Breakthroughs
                  </h3>
                  <p className="text-lg opacity-90">
                    Discover the groundbreaking AI trends of 2026 that are revolutionizing enterprise operations. 
                    From quantum AI to autonomous systems, explore the future of artificial intelligence.
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 20, 2025</div>
                    <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                      Read Article →
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Case Study */}
            <Link href="/case-studies/fortune-500-ai-transformation-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 hover:border-green-200">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                      Success Story
                    </span>
                    <span className="text-sm opacity-90">Fortune 500</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-200 transition-colors">
                    Fortune 500 AI Transformation: $100M ROI
                  </h3>
                  <p className="text-lg opacity-90">
                    See how a Fortune 500 manufacturing company achieved $100M ROI, 70% cost reduction, 
                    and 90% efficiency gains through comprehensive AI transformation.
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 20, 2025</div>
                    <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      View Case Study →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our content organized by category to find exactly what you're looking for
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Insights & Trends */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Insights & Trends</h3>
              <p className="text-gray-600 mb-6">
                Stay ahead with the latest AI trends, insights, and predictions shaping the future of technology.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Featured Articles</span>
                  <span className="font-semibold text-blue-600">15+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Trend Reports</span>
                  <span className="font-semibold text-blue-600">8+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Industry Analysis</span>
                  <span className="font-semibold text-blue-600">12+</span>
                </div>
              </div>
              <Link
                href="/blog"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
              >
                Explore Articles
              </Link>
            </div>

            {/* Success Stories */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-green-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-6">
                Discover real-world success stories of enterprises achieving remarkable results with AI transformation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Case Studies</span>
                  <span className="font-semibold text-green-600">25+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">ROI Achievements</span>
                  <span className="font-semibold text-green-600">$2.5B+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Industries</span>
                  <span className="font-semibold text-green-600">15+</span>
                </div>
              </div>
              <Link
                href="/case-studies"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-green-700 transition-colors"
              >
                View Success Stories
              </Link>
            </div>

            {/* Solutions & Services */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions & Services</h3>
              <p className="text-gray-600 mb-6">
                Explore our comprehensive AI solutions and services designed to transform your business operations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">AI Solutions</span>
                  <span className="font-semibold text-purple-600">15+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Service Packages</span>
                  <span className="font-semibold text-purple-600">8+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Industries Served</span>
                  <span className="font-semibold text-purple-600">20+</span>
                </div>
              </div>
              <Link
                href="/services"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-purple-700 transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Content */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our most recent articles, case studies, and insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Latest Blog Post */}
            <Link href="/blog/ai-trends-2026-revolutionary-breakthroughs" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-purple-200 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Latest Article
                  </span>
                  <span className="text-sm text-gray-500">25 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Trends 2026: Revolutionary Breakthroughs
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the groundbreaking AI trends of 2026 that are revolutionizing enterprise operations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Jan 20, 2025</div>
                  <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                    Read →
                  </div>
                </div>
              </div>
            </Link>

            {/* Latest Case Study */}
            <Link href="/case-studies/fortune-500-ai-transformation-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-green-200 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Fortune 500</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Fortune 500 AI Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  $100M ROI achieved in 8 months through comprehensive AI transformation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Jan 20, 2025</div>
                  <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    View →
                  </div>
                </div>
              </div>
            </Link>

            {/* Latest Solution */}
            <Link href="/services/ai-2026-revolutionary-solutions" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Solution
                  </span>
                  <span className="text-sm text-gray-500">Revolutionary</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI 2026 Revolutionary Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform your enterprise with 300% ROI guaranteed through cutting-edge AI technologies.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Available Now</div>
                  <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Explore →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join industry leaders achieving unprecedented results with our AI solutions. 
              Get your free consultation and ROI projection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/ai-2026-revolutionary-solutions"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore AI Solutions
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-600">
                Get the latest AI insights, trends, and success stories delivered to your inbox
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                Join 10,000+ professionals. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}