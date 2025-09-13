import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revolutionary Content Showcase 2025 - AI Breakthroughs & Business Insights',
  description: 'Explore our comprehensive collection of AI 2025 content including trends, case studies, implementation guides, and success stories. Everything you need to transform your business.',
  keywords: ['AI 2025', 'content showcase', 'AI trends', 'case studies', 'implementation guides', 'business transformation', 'AI insights'],
  openGraph: {
    title: 'Revolutionary Content Showcase 2025 - AI Breakthroughs & Business Insights',
    description: 'Explore our comprehensive collection of AI 2025 content including trends, case studies, and implementation guides.',
    type: 'website',
  },
};

export default function RevolutionaryContentShowcase2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT - JANUARY 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionary Content Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive collection of AI 2025 content: breakthrough insights, 
              success stories, implementation guides, and expert analysis to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#content"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Explore Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Articles & Insights</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Implementation Guides</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Expert Tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="content" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful content to help you succeed with AI 2025.
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">🔮</span>
              </span>
              AI 2025 Trends & Predictions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href="/blog/ai-2025-ultimate-trends-predictions"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🔮</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Ultimate Trends & Predictions</h4>
                    <p className="text-sm text-gray-600">Revolutionary Breakthroughs</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Discover the most revolutionary AI trends and predictions for 2025. From quantum computing 
                  breakthroughs to autonomous operations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold text-sm">Read Article →</span>
                  <span className="text-xs text-gray-500">5 min read</span>
                </div>
              </Link>

              <Link
                href="/blog/ai-2025-enterprise-transformation"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Enterprise Transformation</h4>
                    <p className="text-sm text-gray-600">Business Revolution</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Learn how Fortune 500 companies are implementing AI 2025 technologies to achieve 
                  unprecedented business transformation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">Read Article →</span>
                  <span className="text-xs text-gray-500">7 min read</span>
                </div>
              </Link>

              <Link
                href="/blog/ai-2025-quantum-computing-breakthrough"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">⚛️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Quantum Computing Breakthrough</h4>
                    <p className="text-sm text-gray-600">Revolutionary Technology</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Explore the latest breakthroughs in quantum computing and how they're revolutionizing 
                  AI applications and business operations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold text-sm">Read Article →</span>
                  <span className="text-xs text-gray-500">6 min read</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Case Studies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">🏆</span>
              </span>
              Success Stories & Case Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Global Enterprise Transformation</h4>
                    <p className="text-sm text-gray-600">1,200% ROI Success</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  How a Fortune 500 company achieved 1,200% ROI through revolutionary AI 2025 implementation, 
                  transforming their entire business operations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">Read Case Study →</span>
                  <span className="text-xs text-gray-500">10 min read</span>
                </div>
              </Link>

              <Link
                href="/case-studies/ai-2025-manufacturing-revolution"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏭</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Manufacturing Revolution</h4>
                    <p className="text-sm text-gray-600">800% ROI Success</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Discover how a manufacturing company achieved 800% ROI through AI-powered automation 
                  and intelligent process optimization.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold text-sm">Read Case Study →</span>
                  <span className="text-xs text-gray-500">8 min read</span>
                </div>
              </Link>

              <Link
                href="/case-studies/ai-2025-financial-services-breakthrough"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💰</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Financial Services Breakthrough</h4>
                    <p className="text-sm text-gray-600">1,500% ROI Success</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Learn how a financial services company achieved 1,500% ROI through AI-powered 
                  risk assessment and automated decision making.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold text-sm">Read Case Study →</span>
                  <span className="text-xs text-gray-500">9 min read</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Resources */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">📚</span>
              </span>
              Implementation Guides & Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href="/resources/ai-2025-ultimate-implementation-guide"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📚</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Ultimate Implementation Guide</h4>
                    <p className="text-sm text-gray-600">Complete Business Transformation</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  The most comprehensive guide to implementing AI 2025 technologies in your business. 
                  Step-by-step instructions for 2,500% ROI.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold text-sm">Download Guide →</span>
                  <span className="text-xs text-gray-500">50+ pages</span>
                </div>
              </Link>

              <Link
                href="/resources/ai-2025-roi-calculator"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🧮</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">ROI Calculator</h4>
                    <p className="text-sm text-gray-600">Calculate Your Potential ROI</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Calculate the potential ROI of implementing AI 2025 solutions in your business 
                  with our advanced ROI calculator.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">Calculate ROI →</span>
                  <span className="text-xs text-gray-500">Interactive Tool</span>
                </div>
              </Link>

              <Link
                href="/resources/ai-2025-readiness-assessment"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Readiness Assessment</h4>
                    <p className="text-sm text-gray-600">Evaluate Your AI Readiness</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Assess your organization's readiness for AI 2025 implementation with our 
                  comprehensive readiness assessment tool.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold text-sm">Take Assessment →</span>
                  <span className="text-xs text-gray-500">15 min assessment</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Get started with our comprehensive AI 2025 content library and begin your 
              transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                Download All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}