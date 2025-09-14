import React from 'react';
import Link from 'next/link';

const ComprehensiveContentShowcase2025 = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">📚 COMPREHENSIVE 2025 CONTENT LIBRARY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Complete AI Transformation Resource Hub
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Access our comprehensive collection of guides, case studies, tools, and resources designed to accelerate your AI transformation journey in 2025.
          </p>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Implementation Guides */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Guides</h3>
            <p className="text-gray-600 mb-6">
              Step-by-step guides for implementing AI solutions across your organization.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Enterprise Automation Mastery</h4>
                <p className="text-sm text-gray-600">Complete digital transformation guide</p>
                <span className="text-xs text-green-600 font-semibold">NEW</span>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">Quantum AI Revolution</h4>
                <p className="text-sm text-gray-600">Next-generation intelligence guide</p>
                <span className="text-xs text-blue-600 font-semibold">BREAKTHROUGH</span>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">Cybersecurity Revolution</h4>
                <p className="text-sm text-gray-600">AI-powered threat protection</p>
                <span className="text-xs text-red-600 font-semibold">CRITICAL</span>
              </div>
            </div>
            <Link 
              href="/resources"
              className="inline-flex items-center text-purple-600 font-semibold mt-4 hover:text-purple-800"
            >
              View All Guides
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Success Stories */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-gray-600 mb-6">
              Real-world case studies showcasing measurable business impact and ROI.
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">340% ROI Achievement</h4>
                <p className="text-sm text-gray-600">Global manufacturing transformation</p>
                <div className="flex items-center mt-2">
                  <span className="text-2xl font-bold text-green-600">$51.7M</span>
                  <span className="text-sm text-gray-500 ml-2">total benefits</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">85% Efficiency Gain</h4>
                <p className="text-sm text-gray-600">Financial services automation</p>
                <div className="flex items-center mt-2">
                  <span className="text-2xl font-bold text-blue-600">$2.3M</span>
                  <span className="text-sm text-gray-500 ml-2">annual savings</span>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">90% Quality Improvement</h4>
                <p className="text-sm text-gray-600">Healthcare process optimization</p>
                <div className="flex items-center mt-2">
                  <span className="text-2xl font-bold text-purple-600">$3.1M</span>
                  <span className="text-sm text-gray-500 ml-2">cost reduction</span>
                </div>
              </div>
            </div>
            <Link 
              href="/case-studies"
              className="inline-flex items-center text-purple-600 font-semibold mt-4 hover:text-purple-800"
            >
              View All Case Studies
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Tools & Resources */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools & Resources</h3>
            <p className="text-gray-600 mb-6">
              Practical tools, calculators, and resources to support your AI journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">ROI Calculator</h4>
                  <p className="text-sm text-gray-600">Calculate your AI transformation ROI</p>
                </div>
                <span className="text-green-600 text-sm font-semibold">FREE</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Implementation Checklist</h4>
                  <p className="text-sm text-gray-600">Step-by-step implementation guide</p>
                </div>
                <span className="text-blue-600 text-sm font-semibold">DOWNLOAD</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">AI Readiness Assessment</h4>
                  <p className="text-sm text-gray-600">Evaluate your AI readiness</p>
                </div>
                <span className="text-purple-600 text-sm font-semibold">INTERACTIVE</span>
              </div>
            </div>
            <Link 
              href="/tools"
              className="inline-flex items-center text-purple-600 font-semibold mt-4 hover:text-purple-800"
            >
              Explore All Tools
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enterprise Automation */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-3xl mb-4">🤖</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">AI 2025 Enterprise Automation Mastery</h4>
                <p className="text-gray-600 mb-4">
                  Complete guide to digital transformation with AI automation. Learn implementation strategies, ROI optimization, and real-world success stories.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">15 min read</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
                </div>
                <Link 
                  href="/blog/ai-2025-enterprise-automation-mastery-ultimate-guide"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800"
                >
                  Read Guide
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quantum AI */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-3xl mb-4">⚛️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Quantum AI 2025 Business Revolution</h4>
                <p className="text-gray-600 mb-4">
                  Complete guide to next-generation intelligence. Discover how quantum AI is revolutionizing business operations and creating new opportunities.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">18 min read</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
                </div>
                <Link 
                  href="/blog/quantum-ai-2025-business-revolution-complete-guide"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800"
                >
                  Explore Guide
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-3xl mb-4">📈</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">340% ROI Success Story</h4>
                <p className="text-gray-600 mb-4">
                  Real-world case study of a global manufacturing company that achieved 340% ROI through comprehensive AI transformation.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">12 min read</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
                </div>
                <Link 
                  href="/case-studies/ai-transformation-success-story-2025"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800"
                >
                  Read Case Study
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your AI Transformation?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our proven AI solutions and comprehensive guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase2025;