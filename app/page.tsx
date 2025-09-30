import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Transformation Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Transform your enterprise with AI. Achieve 400% ROI, 90% automation, and 99.9% reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">400%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Process Automation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">System Reliability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Latest AI Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* AI Transformation Guide */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    New Guide
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  AI Transformation 2026: Complete Implementation Guide
                </h3>
                <p className="opacity-90">
                  Master enterprise AI with proven strategies and achieve 400% ROI.
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">400%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">90%</div>
                    <div className="text-sm text-gray-600">Automation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-sm text-gray-600">Reliability</div>
                  </div>
                </div>
                <Link 
                  href="/blog/ai-transformation-2026-complete-guide"
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read Complete Guide
                </Link>
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Success Story
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  AI Transformation Mega Success: 500% ROI Case Study
                </h3>
                <p className="opacity-90">
                  Fortune 500 manufacturing breakthrough with $200M annual savings.
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">500%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">95%</div>
                    <div className="text-sm text-gray-600">Automation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$200M</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                </div>
                <Link 
                  href="/case-studies/ai-transformation-mega-success-2026"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View Case Study
                </Link>
              </div>
            </div>

            {/* AI Enterprise Adoption */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Essential
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  AI Enterprise Adoption 2025: Complete Implementation Guide
                </h3>
                <p className="opacity-90">
                  Master AI enterprise adoption with proven strategies and ROI frameworks.
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">300%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">80%</div>
                    <div className="text-sm text-gray-600">Adoption</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-gray-600">Success</div>
                  </div>
                </div>
                <Link 
                  href="/blog/ai-enterprise-adoption-2025"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies achieving unprecedented success with our AI transformation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}