import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Content Hub 2026: Latest Articles, Case Studies & Guides | Zion Tech Group',
  description: 'Explore our comprehensive AI content hub featuring the latest articles, case studies, implementation guides, and success stories for 2026.',
  keywords: 'AI content, articles, case studies, guides, AI transformation, enterprise AI, 2026',
};

export default function ContentHub() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            🚀 CONTENT HUB 2026
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Content Hub 2026
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the latest AI insights, success stories, and cutting-edge technologies. 
          From neural interfaces to quantum computing, explore comprehensive content that drives innovation.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-3xl font-bold text-indigo-600 mb-2">150+</div>
          <div className="text-sm text-gray-600">Articles</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
          <div className="text-sm text-gray-600">Case Studies</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
          <div className="text-sm text-gray-600">Guides</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">500K+</div>
          <div className="text-sm text-gray-600">Readers</div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <Link href="/blog/ai-2026-ultimate-breakthrough" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ULTIMATE BREAKTHROUGH
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  $100B REVOLUTION
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                AI 2026 Ultimate Breakthrough: $100B Revolution Guide
              </h3>
              <p className="text-gray-600 mb-6">
                Master the complete AI 2026 breakthrough transformation. From cognitive superintelligence to quantum neural networks, 
                discover strategies delivering $100M+ ROI for Fortune 100 companies.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">45 min read</div>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  Read Ultimate Guide →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link href="/case-studies/ai-2026-ultimate-breakthrough-success" className="group">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  MEGA SUCCESS
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  $100M ROI
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                $100M ROI Success Story: Fortune 100 AI Transformation
              </h3>
              <p className="text-gray-600 mb-6">
                See how a Fortune 100 company achieved $100M ROI with ultimate AI breakthrough implementation. 
                99.9% automation, 500% efficiency gain, and complete autonomous operation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">25 min read</div>
                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                  View Success Story →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Content Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Content Categories</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/blog" className="group">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                AI Articles & Guides
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive guides covering AI implementation, best practices, and emerging technologies.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                Explore Articles →
              </div>
            </div>
          </Link>

          <Link href="/case-studies" className="group">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Success Stories
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Real-world case studies showcasing AI transformation results and ROI achievements.
              </p>
              <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                View Case Studies →
              </div>
            </div>
          </Link>

          <Link href="/services" className="group">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                AI Services
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional AI consulting, implementation, and transformation services for enterprises.
              </p>
              <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                Explore Services →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Content */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">📖</span>
          <h2 className="text-3xl font-bold text-gray-900">Latest Content</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/blog/ai-cognitive-superintelligence-2026" className="group">
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  BREAKTHROUGH
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Cognitive Superintelligence 2026: The Next Evolution
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore how cognitive superintelligence is revolutionizing decision-making with 99.9% accuracy and $750M+ ROI potential.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">30 min read</div>
                <div className="text-sm text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-space-mission-success-2026" className="group">
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  SPACE AI
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Space Mission Success 2026: $50M Breakthrough
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                See how AI-powered space missions achieved 1000x efficiency gains and $50M in cost savings with autonomous operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">22 min read</div>
                <div className="text-sm text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
        <p className="text-xl mb-8 opacity-90">
          Get the latest AI breakthroughs, case studies, and implementation guides delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Transformation
          </Link>
          <Link
            href="/blog"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Explore All Content
          </Link>
        </div>
      </section>
    </div>
  );
}