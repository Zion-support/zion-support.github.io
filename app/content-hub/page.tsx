import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Star, TrendingUp, Users, Award, BookOpen, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'AI Content Hub 2026 - Latest Articles, Case Studies & Success Stories',
  description: 'Explore our comprehensive collection of AI articles, case studies, and success stories. Stay ahead with cutting-edge AI insights and real-world implementations.',
  keywords: 'AI content hub, AI articles, case studies, success stories, AI insights, 2026, artificial intelligence',
};

export default function ContentHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            CONTENT HUB 2026
          </span>
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            LATEST UPDATES
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI Content Hub 2026
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {' '}— Your Gateway to AI Excellence
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Discover the latest AI insights, success stories, and cutting-edge technologies. 
          From neural interfaces to quantum computing, explore comprehensive content that drives innovation.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-sm text-gray-600">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$100M+</div>
            <div className="text-sm text-gray-600">Client ROI Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">25K+</div>
            <div className="text-sm text-gray-600">Monthly Readers</div>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-8 h-8 text-yellow-500" />
          <h2 className="text-3xl font-bold text-gray-900">Featured Content</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">FEATURED</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">NEW 2026</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Neural Interfaces 2026: Brain-Computer Integration Revolution</h3>
            <p className="text-purple-100 mb-6">
              Discover how AI-powered neural interfaces are revolutionizing human-computer interaction with 99.7% accuracy, 
              real-time brain signal processing, and unprecedented cognitive enhancement capabilities.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>28 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>99.7% accuracy</span>
                </div>
              </div>
              <Link
                href="/blog/ai-neural-interfaces-2026"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Article →
              </Link>
            </div>
          </div>

          {/* Featured Case Study */}
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">CASE STUDY</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">$10M ROI</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Sustainability Transformation 2026: $10M ROI Case Study</h3>
            <p className="text-green-100 mb-6">
              See how a Fortune 500 company achieved carbon neutrality and $10M ROI through comprehensive AI 
              sustainability transformation, reducing energy consumption by 80% and operational costs by 60%.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>Fortune 500</span>
                </div>
              </div>
              <Link
                href="/case-studies/ai-sustainability-transformation-2026"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Content Categories</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Technology */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">AI Technology</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Explore cutting-edge AI technologies including neural interfaces, quantum computing, and autonomous systems.
            </p>
            <div className="space-y-2">
              <Link href="/blog/ai-neural-interfaces-2026" className="block text-blue-600 hover:text-blue-700 font-medium">
                AI Neural Interfaces 2026
              </Link>
              <Link href="/blog/ai-quantum-computing-2026" className="block text-blue-600 hover:text-blue-700 font-medium">
                AI Quantum Computing 2026
              </Link>
              <Link href="/blog/ai-space-tech-2026" className="block text-blue-600 hover:text-blue-700 font-medium">
                AI Space Technology 2026
              </Link>
            </div>
            <Link href="/blog" className="inline-flex items-center text-blue-600 font-semibold mt-4">
              View All AI Tech Articles →
            </Link>
          </div>

          {/* Case Studies */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Case Studies</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Real-world success stories showcasing AI implementations with measurable ROI and business impact.
            </p>
            <div className="space-y-2">
              <Link href="/case-studies/ai-sustainability-transformation-2026" className="block text-green-600 hover:text-green-700 font-medium">
                $10M Sustainability ROI
              </Link>
              <Link href="/case-studies/ai-quantum-optimization-2026" className="block text-green-600 hover:text-green-700 font-medium">
                $12M Quantum Optimization
              </Link>
              <Link href="/case-studies/techcorp-ai-transformation" className="block text-green-600 hover:text-green-700 font-medium">
                TechCorp 90% Efficiency
              </Link>
            </div>
            <Link href="/case-studies" className="inline-flex items-center text-green-600 font-semibold mt-4">
              View All Case Studies →
            </Link>
          </div>

          {/* Enterprise Solutions */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Enterprise Solutions</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive guides for enterprise AI implementation, automation, and digital transformation.
            </p>
            <div className="space-y-2">
              <Link href="/blog/ai-enterprise-automation-2026" className="block text-purple-600 hover:text-purple-700 font-medium">
                Enterprise Automation 2026
              </Link>
              <Link href="/blog/ai-multimodal-enterprise-2026" className="block text-purple-600 hover:text-purple-700 font-medium">
                Multimodal Enterprise AI
              </Link>
              <Link href="/blog/ai-data-analytics-enterprise-2026" className="block text-purple-600 hover:text-purple-700 font-medium">
                Data Analytics Enterprise
              </Link>
            </div>
            <Link href="/services" className="inline-flex items-center text-purple-600 font-semibold mt-4">
              Explore Enterprise Solutions →
            </Link>
          </div>

          {/* Sustainability & Green Tech */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sustainability & Green Tech</h3>
            </div>
            <p className="text-gray-600 mb-4">
              AI solutions for environmental sustainability, carbon neutrality, and green technology implementation.
            </p>
            <div className="space-y-2">
              <Link href="/blog/ai-sustainability-green-tech-2026" className="block text-green-600 hover:text-green-700 font-medium">
                AI Sustainability 2026
              </Link>
              <Link href="/case-studies/ai-sustainability-transformation-2026" className="block text-green-600 hover:text-green-700 font-medium">
                $10M Green Transformation
              </Link>
              <Link href="/blog/ai-sustainable-tech-2026" className="block text-green-600 hover:text-green-700 font-medium">
                Sustainable AI Technology
              </Link>
            </div>
            <Link href="/blog" className="inline-flex items-center text-green-600 font-semibold mt-4">
              View Sustainability Content →
            </Link>
          </div>

          {/* Industry Applications */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Industry Applications</h3>
            </div>
            <p className="text-gray-600 mb-4">
              AI implementations across various industries including healthcare, finance, retail, and manufacturing.
            </p>
            <div className="space-y-2">
              <Link href="/blog/ai-healthcare-transformation-2025" className="block text-orange-600 hover:text-orange-700 font-medium">
                Healthcare AI Transformation
              </Link>
              <Link href="/case-studies/fintech-ai-risk-compliance-2025" className="block text-orange-600 hover:text-orange-700 font-medium">
                FinTech AI Risk Management
              </Link>
              <Link href="/case-studies/retail-ai-transformation" className="block text-orange-600 hover:text-orange-700 font-medium">
                Retail AI Success Story
              </Link>
            </div>
            <Link href="/blog" className="inline-flex items-center text-orange-600 font-semibold mt-4">
              View Industry Content →
            </Link>
          </div>

          {/* Technical Guides */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Technical Guides</h3>
            </div>
            <p className="text-gray-600 mb-4">
              In-depth technical guides, implementation strategies, and best practices for AI development.
            </p>
            <div className="space-y-2">
              <Link href="/blog/ai-mlops-best-practices-2025" className="block text-indigo-600 hover:text-indigo-700 font-medium">
                MLOps Best Practices 2025
              </Link>
              <Link href="/blog/ai-enterprise-implementation-2025" className="block text-indigo-600 hover:text-indigo-700 font-medium">
                Enterprise AI Implementation
              </Link>
              <Link href="/blog/ai-governance-framework-2025" className="block text-indigo-600 hover:text-indigo-700 font-medium">
                AI Governance Framework
              </Link>
            </div>
            <Link href="/blog" className="inline-flex items-center text-indigo-600 font-semibold mt-4">
              View Technical Guides →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-blue-500" />
          <h2 className="text-3xl font-bold text-gray-900">Latest Content</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/blog/ai-neural-interfaces-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm text-gray-500">28 min read</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Neural Interfaces 2026: Brain-Computer Integration Revolution
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover how AI-powered neural interfaces are revolutionizing human-computer interaction with 99.7% accuracy.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  28 min read
                </div>
                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-space-tech-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm text-gray-500">32 min read</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Space Technology 2026: Revolutionizing Space Exploration
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore how AI is transforming space exploration with autonomous spacecraft and intelligent mission planning.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  32 min read
                </div>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-quantum-optimization-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  CASE STUDY
                </span>
                <span className="text-sm text-gray-500">12 min read</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Quantum Optimization 2026: 1000x Speed Improvement
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                See how a financial services company achieved 1000x optimization speed and $12M additional returns.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  12 min read
                </div>
                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
        <p className="text-xl mb-8 opacity-90">
          Get weekly updates on the latest AI trends, case studies, and success stories delivered to your inbox
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
          Join 25,000+ professionals. Unsubscribe anytime.
        </p>
      </section>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Let's discuss how our AI solutions can drive your success. Get a free consultation and discover the potential for your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/services"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}