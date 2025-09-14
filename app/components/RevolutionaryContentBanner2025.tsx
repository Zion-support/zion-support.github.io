import React from 'react';
import Link from 'next/link';

const RevolutionaryContentBanner2025 = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-semibold">🌟 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Cutting-Edge AI
            </span>
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover our latest comprehensive guides, real-world case studies, and proven strategies that are helping businesses achieve unprecedented success in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Main Features */}
          <div className="space-y-8">
            {/* Enterprise Automation */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">🤖</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">AI 2025 Enterprise Automation Mastery</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    Complete guide to digital transformation with AI automation. Learn implementation strategies, ROI optimization, and real-world success stories that deliver 340% ROI.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-300">15 min read • Enterprise Guide</span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">NEW</span>
                  </div>
                  <Link 
                    href="/blog/ai-2025-enterprise-automation-mastery-ultimate-guide"
                    className="inline-flex items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Read Complete Guide
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quantum AI */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">⚛️</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Quantum AI 2025 Business Revolution</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    Complete guide to next-generation intelligence. Discover how quantum AI is revolutionizing business operations and creating unprecedented opportunities.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-300">18 min read • Quantum Computing</span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">BREAKTHROUGH</span>
                  </div>
                  <Link 
                    href="/blog/quantum-ai-2025-business-revolution-complete-guide"
                    className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Quantum AI
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Success Story */}
          <div className="space-y-8">
            {/* Success Story */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-3xl font-bold mb-4">Real Success Story</h3>
              <div className="text-5xl font-bold mb-4">340% ROI</div>
              <p className="text-xl mb-6 opacity-90">
                Global manufacturing company achieved 340% ROI through comprehensive AI transformation using our proven methodologies and solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold">$51.7M</div>
                  <div className="text-sm opacity-90">Total Benefits</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">8 months</div>
                  <div className="text-sm opacity-90">Payback Period</div>
                </div>
              </div>
              <Link 
                href="/case-studies/ai-transformation-success-story-2025"
                className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Full Case Study
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">🔒</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">AI 2025 Cybersecurity Revolution</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    Ultimate guide to next-generation threat protection. Master AI-powered cybersecurity for threat detection, prevention, and response.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-300">16 min read • Security</span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">CRITICAL</span>
                  </div>
                  <Link 
                    href="/blog/ai-2025-cybersecurity-revolution-ultimate-guide"
                    className="inline-flex items-center text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Secure Your Business
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-300 mb-2">340%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our proven AI solutions and comprehensive guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentBanner2025;