import React, { useState } from 'react';
import Link from 'next/link';

export default function ContentHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 AI CONTENT HUB 2026
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the latest AI innovations, transformation guides, case studies, and real-world success stories 
            that are reshaping businesses in 2026. From enterprise transformation to quantum computing, 
            explore comprehensive resources to accelerate your AI journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">150+</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25</div>
            <div className="text-gray-600">New 2026 Content</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$2.5B+</div>
            <div className="text-gray-600">Total ROI Documented</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Link href="/blog/ai-brain-computer-interfaces-2026" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-indigo-200">
                <div className="relative h-64 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🧠</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Brain-Computer Interfaces</h3>
                      <p className="text-purple-100">Neural AI</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NEW 2026
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                    <span className="text-gray-500 text-sm">12 min read</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    AI Brain-Computer Interfaces: The Next Frontier in 2026
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Discover how AI-powered brain-computer interfaces are revolutionizing human-computer interaction, healthcare, and cognitive enhancement.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">99.7%</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600">100ms</div>
                        <div className="text-xs text-gray-500">Latency</div>
                      </div>
                    </div>
                    <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-quantum-finance-transformation-2026" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-indigo-200">
                <div className="relative h-64 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">$500M Finance Success</h3>
                      <p className="text-green-100">Quantum AI</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Case Study</span>
                    <span className="text-gray-500 text-sm">12 min read</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    AI Quantum Finance Transformation: $500M ROI Success Story
                  </h4>
                  <p className="text-gray-600 mb-6">
                    How we helped a Fortune 500 financial institution achieve $500M ROI through quantum AI implementation in trading and risk management.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$500M</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">300%</div>
                        <div className="text-xs text-gray-500">Performance</div>
                      </div>
                    </div>
                    <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get started with our AI transformation services and join the companies achieving 95% automation and $10M+ ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}