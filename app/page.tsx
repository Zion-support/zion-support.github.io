import React from 'react';
import Link from 'next/link';
import FeaturedContent from './components/FeaturedContent';
import Testimonials from './components/Testimonials';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 AI & TECHNOLOGY SOLUTIONS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with AI
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge AI, cloud infrastructure, and micro SaaS solutions. 
              Expert consulting and implementation services for enterprise success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Content Showcase */}
      <section className="py-16 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT RELEASE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Master the AI Revolution: 2025-2026
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
              Exclusive access to breakthrough AI strategies, quantum computing insights, and proven transformation methodologies that are reshaping entire industries.
            </p>
          </div>
          
          {/* Featured Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Ultimate AI Guide */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">Ultimate AI Automation Mastery</h3>
              <p className="text-sm opacity-90 mb-4">
                Complete implementation guide with 340% ROI strategies, 90-day transformation roadmap, and enterprise-ready solutions.
              </p>
              <Link
                href="/blog/ai-2025-ultimate-business-automation-mastery-complete-guide"
                className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Read Guide →
              </Link>
            </div>

            {/* Quantum AI Breakthrough */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Quantum AI Revolution 2026</h3>
              <p className="text-sm opacity-90 mb-4">
                Discover how quantum-enhanced AI is revolutionizing enterprise operations with 1000x faster processing and breakthrough capabilities.
              </p>
              <Link
                href="/blog/quantum-ai-2026-revolutionary-breakthrough-enterprise-transformation"
                className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Explore Quantum AI →
              </Link>
            </div>

            {/* Success Story */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">340% ROI Success Story</h3>
              <p className="text-sm opacity-90 mb-4">
                How a Fortune 500 retail giant achieved $2.3B additional revenue and market leadership through AI transformation.
              </p>
              <Link
                href="/case-studies/global-retail-ai-transformation-2025-ultimate-success"
                className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                View Case Study →
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Success Stories
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Spotlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">📚 EXCLUSIVE CONTENT</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest Insights & Breakthrough Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the AI revolution with our cutting-edge research, proven methodologies, and real-world success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Latest Blog Posts */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest AI Insights</h3>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full p-2 mr-4">
                    <span className="text-sm font-bold">NEW</span>
                  </div>
                  <span className="text-sm text-gray-600">January 15, 2025</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  AI 2025: Ultimate Business Automation Mastery
                </h4>
                <p className="text-gray-600 mb-4">
                  Complete implementation guide with 340% ROI strategies, 90-day transformation roadmap, and enterprise-ready solutions that are transforming businesses worldwide.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="/blog/ai-2025-ultimate-business-automation-mastery-complete-guide"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Read Full Guide →
                  </Link>
                  <span className="text-sm text-gray-500">15 min read</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white rounded-full p-2 mr-4">
                    <span className="text-sm font-bold">HOT</span>
                  </div>
                  <span className="text-sm text-gray-600">January 15, 2025</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Quantum AI 2026: Revolutionary Breakthrough
                </h4>
                <p className="text-gray-600 mb-4">
                  Discover how quantum-enhanced AI is revolutionizing enterprise operations with 1000x faster processing and breakthrough capabilities that were impossible before.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="/blog/quantum-ai-2026-revolutionary-breakthrough-enterprise-transformation"
                    className="text-green-600 font-semibold hover:text-green-800 transition-colors"
                  >
                    Explore Quantum AI →
                  </Link>
                  <span className="text-sm text-gray-500">18 min read</span>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Success Stories</h3>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white rounded-full p-2 mr-4">
                    <span className="text-sm font-bold">🏆</span>
                  </div>
                  <span className="text-sm text-gray-600">January 15, 2025</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Global Retail Giant: 340% ROI Achievement
                </h4>
                <p className="text-gray-600 mb-4">
                  How a Fortune 500 retail corporation achieved $2.3 billion in additional revenue and market leadership through comprehensive AI transformation.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="/case-studies/global-retail-ai-transformation-2025-ultimate-success"
                    className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    View Case Study →
                  </Link>
                  <span className="text-sm text-gray-500">12 min read</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 text-white rounded-full p-2 mr-4">
                    <span className="text-sm font-bold">⭐</span>
                  </div>
                  <span className="text-sm text-gray-600">Coming Soon</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Manufacturing Revolution: 85% Efficiency Gains
                </h4>
                <p className="text-gray-600 mb-4">
                  Exclusive case study: How a global manufacturer transformed operations with AI automation, achieving unprecedented efficiency and cost savings.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-semibold">
                    Coming Soon →
                  </span>
                  <span className="text-sm text-gray-500">TBD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
            >
              Explore All Content
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Automation</h3>
              <p className="text-gray-600 mb-4">
                Intelligent automation solutions that streamline operations and boost productivity across your organization.
              </p>
              <Link href="/services/ai-automation" className="text-purple-600 font-semibold hover:text-purple-800">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Scalable, secure cloud solutions designed to support your business growth and digital transformation.
              </p>
              <Link href="/services/cloud-infrastructure" className="text-purple-600 font-semibold hover:text-purple-800">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">
                Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.
              </p>
              <Link href="/services/micro-saas" className="text-purple-600 font-semibold hover:text-purple-800">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <FeaturedContent />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already benefiting from our AI solutions. 
            Get started with a free consultation and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}