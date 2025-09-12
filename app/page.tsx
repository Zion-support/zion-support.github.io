import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: 'AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation',
  openGraph: {
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI & Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. 
              Expert consulting and implementation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Explore Our Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW CONTENT LAUNCH BANNER */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🚀 MASSIVE CONTENT DROP - JANUARY 2025</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              🎉 50+ New AI Resources Just Released!
            </h2>
            <p className="text-xl opacity-90 mb-6 max-w-5xl mx-auto leading-relaxed">
              Discover groundbreaking content: AI Enterprise Automation Revolution, Advanced Cost Optimization, 
              $200M Manufacturing Success Story, plus exclusive case studies, implementation blueprints, and free downloadable resources. 
              Get expert insights on the technologies reshaping industries and driving unprecedented growth in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/content-showcase"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                aria-label="Explore all new content and resources"
              >
                Explore New Content
              </Link>
              <Link
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                aria-label="Read the latest enterprise automation article"
              >
                📖 Read Latest Article
              </Link>
              <Link
                href="/resources/ai-implementation-master-guide-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                aria-label="Download free AI implementation guide"
              >
                📥 Free Guide Download
              </Link>
            </div>
            
            {/* Featured New Content Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link href="/blog/ai-2025-enterprise-automation-revolution" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">AI Enterprise Automation Revolution</h3>
                  <p className="text-sm opacity-90 mb-3">Complete implementation guide with 340% ROI and real case studies</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                  <h3 className="text-lg font-semibold mb-2">$200M Manufacturing Success Story</h3>
                  <p className="text-sm opacity-90 mb-3">Fortune 500 manufacturer achieves massive savings with AI</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-implementation-master-guide-2026" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <h3 className="text-lg font-semibold mb-2">AI Implementation Master Guide</h3>
                  <p className="text-sm opacity-90 mb-3">200+ page complete implementation guide with checklists</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Free Download</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and technology solutions to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Automation</h3>
              <p className="text-gray-600 mb-6">
                Transform your business processes with intelligent automation solutions that deliver measurable ROI.
              </p>
              <Link
                href="/services/ai-automation"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Scalable, secure cloud solutions that grow with your business and optimize costs.
              </p>
              <Link
                href="/services/cloud-computing"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-6">
                Build and scale specialized software solutions that solve specific business problems.
              </p>
              <Link
                href="/services/micro-saas"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest insights, case studies, and resources to help you succeed with AI and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-enterprise-automation-revolution" className="group">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Enterprise Automation Revolution
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete implementation guide with 340% ROI and real case studies for enterprise AI adoption.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  $200M Manufacturing Success Story
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  How a Fortune 500 manufacturer achieved massive savings using AI autonomous systems.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-master-guide-2026" className="group">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Master Guide
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete 200+ page guide with frameworks, templates, and implementation strategies.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/content-showcase"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              View All Content
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with our AI and technology solutions. Schedule a consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/content-showcase"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}