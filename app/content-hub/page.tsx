import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Content Hub - Resources, Guides & Success Stories | Zion Tech Group',
  description: 'Explore our comprehensive AI content hub featuring latest trends, implementation guides, case studies, and success stories. Everything you need for AI transformation.',
  keywords: 'AI content hub, AI resources, AI guides, AI case studies, AI trends, enterprise AI, AI implementation',
  openGraph: {
    title: 'AI Content Hub - Resources, Guides & Success Stories',
    description: 'Explore our comprehensive AI content hub featuring latest trends, implementation guides, case studies, and success stories.',
    type: 'website',
    url: 'https://ziontechgroup.com/content-hub',
    images: [
      {
        url: '/og-content-hub.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Content Hub - Zion Tech Group',
      },
    ],
  },
};

export default function ContentHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <span className="text-sm font-semibold">📚 CONTENT HUB</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI Content Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Your comprehensive resource center for AI transformation. Discover trends, 
              guides, case studies, and success stories that drive 
              <span className="font-bold text-yellow-300"> 300% ROI</span>.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-sm text-white/80">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">25+</div>
              <div className="text-sm text-white/80">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">15+</div>
              <div className="text-sm text-white/80">Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">10K+</div>
              <div className="text-sm text-white/80">Readers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your AI transformation journey with our most popular and impactful content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📊</span>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Article
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI 2026 Comprehensive Trends Guide
              </h3>
              <p className="text-gray-600 mb-6">
                Complete guide to revolutionary AI trends shaping enterprise transformation. 
                Quantum computing, autonomous systems, neural interfaces, and more.
              </p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">25 min read</span>
                <span className="text-sm text-gray-500">Jan 20, 2025</span>
              </div>
              <Link
                href="/blog/ai-2026-comprehensive-trends"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Read Article →
              </Link>
            </div>

            {/* Success Story */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">💰</span>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Success Story
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                $100M ROI Success Story
              </h3>
              <p className="text-gray-600 mb-6">
                Fortune 500 manufacturing company achieves $100M ROI in 8 months through 
                comprehensive AI 2026 transformation with quantum-enhanced optimization.
              </p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">Fortune 500</span>
                <span className="text-sm text-gray-500">Jan 20, 2025</span>
              </div>
              <Link
                href="/case-studies/ai-2026-mega-transformation-success-story"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Read Case Study →
              </Link>
            </div>

            {/* New Service */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  New Service
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI 2026 Revolutionary Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Transform your enterprise with cutting-edge AI technologies. 
                300% ROI guaranteed with quantum computing, autonomous systems, and neural interfaces.
              </p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">Custom Pricing</span>
                <span className="text-sm text-gray-500">Available Now</span>
              </div>
              <Link
                href="/services/ai-2026-revolutionary-solutions"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you're looking for with our organized content categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Trends */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Trends & Predictions</h3>
              <p className="text-gray-600 mb-6">
                Stay ahead with the latest AI trends, predictions, and future technologies 
                shaping enterprise transformation.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• AI 2026 Comprehensive Trends</li>
                <li>• Quantum AI Breakthroughs</li>
                <li>• Autonomous Systems Evolution</li>
                <li>• Neural Interface Technology</li>
              </ul>
              <Link
                href="/blog"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Explore AI Trends →
              </Link>
            </div>

            {/* Case Studies */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-6">
                Real-world case studies showcasing how companies achieve remarkable results 
                through AI transformation.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• $100M ROI Transformation</li>
                <li>• Manufacturing AI Success</li>
                <li>• Fortune 500 Case Studies</li>
                <li>• Enterprise Automation Results</li>
              </ul>
              <Link
                href="/case-studies"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                View Case Studies →
              </Link>
            </div>

            {/* Implementation Guides */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Guides</h3>
              <p className="text-gray-600 mb-6">
                Step-by-step guides to implement AI solutions and achieve measurable results 
                in your organization.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• AI Transformation Roadmap</li>
                <li>• ROI Calculation Methods</li>
                <li>• Technology Selection Guide</li>
                <li>• Change Management Strategies</li>
              </ul>
              <Link
                href="/blog"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Read Guides →
              </Link>
            </div>

            {/* Technology Deep Dives */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Deep Dives</h3>
              <p className="text-gray-600 mb-6">
                In-depth analysis of cutting-edge AI technologies and their enterprise applications.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Quantum Computing Applications</li>
                <li>• Neural Interface Systems</li>
                <li>• Edge AI Computing</li>
                <li>• Multimodal AI Integration</li>
              </ul>
              <Link
                href="/blog"
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Explore Technologies →
              </Link>
            </div>

            {/* ROI & Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ROI & Analytics</h3>
              <p className="text-gray-600 mb-6">
                Data-driven insights on AI ROI, performance metrics, and business impact 
                measurement strategies.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• ROI Calculation Tools</li>
                <li>• Performance Metrics Guide</li>
                <li>• Cost-Benefit Analysis</li>
                <li>• Success Measurement</li>
              </ul>
              <Link
                href="/blog"
                className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                Learn About ROI →
              </Link>
            </div>

            {/* Industry Applications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Applications</h3>
              <p className="text-gray-600 mb-6">
                Industry-specific AI applications and solutions tailored to different 
                business sectors and use cases.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Manufacturing AI Solutions</li>
                <li>• Healthcare AI Applications</li>
                <li>• Financial Services AI</li>
                <li>• Retail AI Transformation</li>
              </ul>
              <Link
                href="/blog"
                className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                Explore Industries →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our newest content, case studies, and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Recent Articles */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      AI 2026 Comprehensive Trends Guide
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Complete guide to revolutionary AI trends shaping enterprise transformation.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Jan 20, 2025</span>
                      <span>•</span>
                      <span>25 min read</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      $100M ROI Success Story
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Fortune 500 company achieves unprecedented results with AI transformation.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Jan 20, 2025</span>
                      <span>•</span>
                      <span>30 min read</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      AI 2026 Revolutionary Solutions
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      New service offering with guaranteed 300% ROI and cutting-edge technologies.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Jan 20, 2025</span>
                      <span>•</span>
                      <span>Service</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/blog"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  View All Articles →
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-white/90 mb-6">
                Get the latest AI insights, trends, and success stories delivered to your inbox.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe to Newsletter
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Join 10,000+ professionals. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your AI Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Access our comprehensive resources and expert guidance to achieve 
            300% ROI with AI 2026 technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </Link>
            <Link
              href="/services/ai-2026-revolutionary-solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore AI Solutions
            </Link>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
  );
}