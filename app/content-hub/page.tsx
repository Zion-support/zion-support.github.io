import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Content Hub 2026 - Latest Insights & Success Stories',
  description: 'Explore our comprehensive collection of AI insights, case studies, and success stories. Stay ahead with cutting-edge AI content for 2026.',
  keywords: 'AI content hub, AI insights 2026, AI case studies, AI success stories, enterprise AI content',
};

export default function ContentHub() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            🚀 AI CONTENT HUB 2026
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Content Hub 2026
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the latest AI insights, transformation guides, and real-world success stories 
          that are reshaping businesses in 2026. Stay ahead with cutting-edge content.
        </p>
      </div>

      {/* Featured Content */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                BREAKTHROUGH 2026
              </span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                FEATURED
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Quantum Computing Breakthrough</h3>
            <p className="text-blue-100 mb-6">
              Revolutionary quantum computing integration delivers 1000x performance improvements 
              and transforms enterprise AI capabilities beyond imagination.
            </p>
            <div className="flex gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">1000x</div>
                <div className="text-xs text-blue-100">Faster</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-blue-100">Energy Efficient</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-xs text-blue-100">Scalable</div>
              </div>
            </div>
            <Link
              href="/blog/ai-quantum-computing-breakthrough-2026"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Explore Quantum AI →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                MEGA SUCCESS
              </span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                FEATURED
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">$15M Agent Orchestration Success</h3>
            <p className="text-green-100 mb-6">
              TechCorp Global achieved $15M annual savings with 98% operational efficiency through 
              advanced AI agent orchestration in just 8 months.
            </p>
            <div className="flex gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">$15M</div>
                <div className="text-xs text-green-100">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-xs text-green-100">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs text-green-100">Months ROI</div>
              </div>
            </div>
            <Link
              href="/case-studies/ai-agent-orchestration-mega-success-2026"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              View Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Articles & Guides</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive guides, tutorials, and insights on AI implementation, 
              best practices, and emerging technologies.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <div>• 50+ Technical Articles</div>
              <div>• Implementation Guides</div>
              <div>• Best Practices</div>
              <div>• Industry Insights</div>
            </div>
            <Link
              href="/blog"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-4 inline-block"
            >
              Explore Articles →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Case Studies</h3>
            <p className="text-gray-600 mb-4">
              Real-world success stories showcasing AI transformations, 
              ROI achievements, and business impact across industries.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <div>• Fortune 500 Success Stories</div>
              <div>• ROI Case Studies</div>
              <div>• Industry Transformations</div>
              <div>• Implementation Results</div>
            </div>
            <Link
              href="/case-studies"
              className="text-green-600 font-semibold hover:text-green-700 transition-colors mt-4 inline-block"
            >
              View Case Studies →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Solutions</h3>
            <p className="text-gray-600 mb-4">
              Specialized AI solutions and strategies tailored for specific 
              industries and business challenges.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <div>• Healthcare AI</div>
              <div>• FinTech Solutions</div>
              <div>• Manufacturing AI</div>
              <div>• Retail Automation</div>
            </div>
            <Link
              href="/services"
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors mt-4 inline-block"
            >
              Explore Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Content Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Content</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/blog/ai-agent-orchestration-advanced-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  ADVANCED 2026
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Agent Orchestration: Advanced Enterprise Implementation
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Master AI agent orchestration with 98% efficiency gains and $15M+ savings through advanced multi-agent systems.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">98%</div>
                  <div className="text-xs text-gray-500">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">$15M+</div>
                  <div className="text-xs text-gray-500">Savings</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-4 h-4 mr-1">⏱️</span>
                  15 min read
                </div>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Sustainability Transformation 2026: $10M ROI Case Study
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">$10M</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">100%</div>
                  <div className="text-xs text-gray-500">Carbon Neutral</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-4 h-4 mr-1">⏱️</span>
                  15 min read
                </div>
                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-breakthrough-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  BREAKTHROUGH 2026
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Quantum Computing: 1000x Speed Breakthrough
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Revolutionary quantum computing breakthrough delivering unprecedented AI performance improvements and enterprise transformation.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">1000x</div>
                  <div className="text-xs text-gray-500">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">95%</div>
                  <div className="text-xs text-gray-500">Energy Efficient</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-4 h-4 mr-1">⏱️</span>
                  18 min read
                </div>
                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Content</h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly updates on AI trends, new content releases, and exclusive insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 10,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss how our AI solutions can drive your success
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}