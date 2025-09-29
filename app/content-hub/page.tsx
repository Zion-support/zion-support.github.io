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
            <div className="text-3xl font-bold text-indigo-600 mb-2">12</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-gray-600">New 2026 Content</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">13</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$50M+</div>
            <div className="text-gray-600">Total ROI Documented</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-enterprise-transformation-2026" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-indigo-200">
                <div className="relative h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📝</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">AI Enterprise Transformation 2026</h3>
                      <p className="text-indigo-100">Enterprise AI</p>
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
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    AI Enterprise Transformation 2026: Complete Business Revolution Guide
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Master enterprise AI transformation with 95% automation, $10M+ ROI, and complete business revolution. Comprehensive guide to AI implementation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">95%</div>
                        <div className="text-xs text-gray-500">Automation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$10M+</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                    </div>
                    <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-enterprise-transformation-success-2026" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-indigo-200">
                <div className="relative h-64 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">$10M ROI Success Story</h3>
                      <p className="text-green-100">Success Story</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NEW CASE STUDY
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Case Study</span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    AI Enterprise Transformation Success 2026: $10M ROI Case Study
                  </h4>
                  <p className="text-gray-600 mb-6">
                    See how a Fortune 500 company achieved $10M ROI with comprehensive AI transformation. 95% automation, 300% productivity gains.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$10M</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">95%</div>
                        <div className="text-xs text-gray-500">Automation</div>
                      </div>
                    </div>
                    <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* New AI Autonomous Financial Systems */}
            <Link href="/blog/ai-autonomous-financial-systems-2026" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-green-200">
                <div className="relative h-64 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">AI Autonomous Financial Systems</h3>
                      <p className="text-green-100">Financial AI</p>
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
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                    <span className="text-gray-500 text-sm">12 min read</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Autonomous Financial Systems: Self-Managing Finance
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Revolutionary AI systems that handle complex financial operations, real-time risk management, and self-optimizing investment strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">24/7</div>
                        <div className="text-xs text-gray-500">Operations</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">95%</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                    </div>
                    <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* New AI Quantum Enterprise */}
            <Link href="/blog/ai-quantum-enterprise-2026" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-purple-200">
                <div className="relative h-64 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">⚛️</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">AI Quantum Enterprise</h3>
                      <p className="text-purple-100">Quantum AI</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      BREAKTHROUGH
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI Quantum Enterprise: The Next Frontier of Computing
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Discover how quantum-enhanced AI is unlocking unprecedented computational power for enterprise applications and solving intractable problems.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">75%</div>
                        <div className="text-xs text-gray-500">Faster</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">90%</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                    </div>
                    <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* New Manufacturing Case Study */}
            <Link href="/case-studies/ai-autonomous-manufacturing-2026" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-blue-200">
                <div className="relative h-64 bg-gradient-to-br from-blue-600 via-green-600 to-teal-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🏭</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">AI Manufacturing Success</h3>
                      <p className="text-blue-100">Case Study</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      75% ROI
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Case Study</span>
                    <span className="text-gray-500 text-sm">8 min read</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Autonomous Manufacturing: 75% Efficiency Boost
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Real case study: How we helped a Fortune 500 company achieve 75% efficiency improvement and $50M in annual savings.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">75%</div>
                        <div className="text-xs text-gray-500">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$50M</div>
                        <div className="text-xs text-gray-500">Savings</div>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
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