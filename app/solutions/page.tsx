import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Comprehensive AI, micro SaaS, and IT solutions designed to transform your business operations and drive growth.',
  keywords: 'AI solutions, micro SaaS, IT solutions, enterprise automation, business intelligence, cloud solutions',
};

export default function SolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Technology Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with our cutting-edge AI, micro SaaS, and IT solutions 
          designed to drive innovation, efficiency, and sustainable growth.
        </p>
      </div>

      {/* Solutions Overview */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">AI Services</h2>
          <p className="text-gray-700 mb-4">
            Advanced artificial intelligence solutions including autonomous operations, 
            machine learning, and cognitive computing.
          </p>
          <Link href="/services/ai-services" className="text-blue-600 font-medium hover:text-blue-700">
            Explore AI Services →
          </Link>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Micro SaaS</h2>
          <p className="text-gray-700 mb-4">
            Scalable micro SaaS platforms and applications designed for rapid deployment 
            and enterprise-grade performance.
          </p>
          <Link href="/services/micro-saas" className="text-purple-600 font-medium hover:text-purple-700">
            Explore Micro SaaS →
          </Link>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">IT Services</h2>
          <p className="text-gray-700 mb-4">
            Comprehensive IT services including cloud migration, DevOps, cybersecurity, 
            and infrastructure management.
          </p>
          <Link href="/services/it-services" className="text-green-600 font-medium hover:text-green-700">
            Explore IT Services →
          </Link>
        </div>
      </div>

      {/* Featured Solutions */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Autonomous Enterprise Operations</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Transform your business with AI-powered autonomous operations that can 
              handle complex workflows, decision-making, and process optimization.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">ROI: $2.8B+</span>
              <Link href="/services/ai-autonomous-operations" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Business Intelligence Platform</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Advanced analytics and business intelligence solutions that provide 
              real-time insights and predictive analytics for data-driven decisions.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">ROI: $1.2B+</span>
              <Link href="/services/ai-business-intelligence-2025" className="text-purple-600 font-medium hover:text-purple-700">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cybersecurity Solutions</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Comprehensive cybersecurity solutions including AI-powered threat detection, 
              compliance management, and security automation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">ROI: $800M+</span>
              <Link href="/services/ai-cybersecurity-2025" className="text-green-600 font-medium hover:text-green-700">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cloud Migration</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Seamless cloud migration services with zero downtime, automated scaling, 
              and comprehensive infrastructure management.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">ROI: $600M+</span>
              <Link href="/services/ai-cloud-infrastructure-2025" className="text-orange-600 font-medium hover:text-orange-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Solutions</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Finance</h3>
            <p className="text-sm text-gray-600">AI-powered financial automation and risk management</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Healthcare</h3>
            <p className="text-sm text-gray-600">Medical AI and healthcare automation solutions</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Retail</h3>
            <p className="text-sm text-gray-600">E-commerce automation and customer analytics</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Manufacturing</h3>
            <p className="text-sm text-gray-600">Industrial automation and predictive maintenance</p>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Proven Results</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">$43B+</div>
            <div className="text-gray-700">Total ROI Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-700">Successful Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-700">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-700">Support Available</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-blue-100 mb-6">
          Let's discuss how our solutions can drive your next breakthrough.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
          <Link 
            href="/case-studies" 
            className="inline-block border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}