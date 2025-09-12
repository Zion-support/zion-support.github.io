import React from 'react';
import Link from 'next/link';
import DynamicContentCarousel2026 from '../components/DynamicContentCarousel2026';
import AI2026NewsletterSignup from '../components/AI2026NewsletterSignup';
import AI2026ContentDiscoveryWidget from '../components/AI2026ContentDiscoveryWidget';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Strategy, implementation, and measurable ROI from modern AI systems. Discover breakthrough AI content, case studies, and implementation guides.',
  keywords: ['AI', 'Artificial Intelligence', 'Edge Computing', 'Autonomous Systems', 'Consulting', 'Case Studies', 'Implementation Guide'],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 AI 2026 BREAKTHROUGH CONTENT
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Revolutionary AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough AI content, case studies, and implementation guides that are delivering 5000% ROI for businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#content-showcase" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthrough Content
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get Implementation Help
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.7%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Carousel */}
      <section id="content-showcase" className="py-20 px-4">
        <DynamicContentCarousel2026 />
      </section>

      {/* Content Discovery Widget */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AI2026ContentDiscoveryWidget />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <AI2026NewsletterSignup />
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Breakthrough Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our most popular and impactful AI content that's transforming businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI 2026 Breakthrough Content Showcase */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI 2026 Breakthrough Content Showcase</h3>
              <p className="text-gray-600 mb-6">
                Discover the latest neural interface technologies, quantum-AI fusion, and autonomous systems that are revolutionizing industries.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  BREAKTHROUGH
                </span>
                <Link 
                  href="/ai-2026-breakthrough-content-showcase" 
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Explore →
                </Link>
              </div>
            </div>

            {/* Enterprise Transformation Case Study */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Transformation Success</h3>
              <p className="text-gray-600 mb-6">
                Learn how Fortune 500 companies achieved 5000% ROI through our AI implementation strategies and breakthrough technologies.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  5000% ROI
                </span>
                <Link 
                  href="/case-studies/ai-2026-global-enterprise-transformation-breakthrough" 
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* Ultimate Implementation Guide */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Implementation Guide</h3>
              <p className="text-gray-600 mb-6">
                Step-by-step implementation toolkit with proven strategies, templates, and best practices for AI transformation success.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  ESSENTIAL
                </span>
                <Link 
                  href="/resources/ai-2026-ultimate-implementation-master-guide" 
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Download Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already achieving breakthrough results with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
            </Link>
            <Link 
              href="/ai-services-2025" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}