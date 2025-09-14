import React from 'react';
import Link from 'next/link';

export default function NewContent2025ShowcaseBanner() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest comprehensive content covering the most important AI trends and technologies for 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Enterprise AI Transformation Guide */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
              <div className="text-6xl">🏢</div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                  Complete Guide
                </span>
                <span className="ml-2 text-sm text-gray-500">15 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI 2025: Enterprise AI Transformation Complete Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the comprehensive roadmap for enterprise AI transformation in 2025. Learn implementation strategies, best practices, and real-world success stories.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/blog/ai-2025-enterprise-ai-transformation-complete-guide"
                  className="text-purple-600 font-semibold hover:text-purple-800"
                >
                  Read Guide →
                </Link>
                <div className="flex items-center text-sm text-gray-500">
                  <span>⭐ 4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quantum Computing Revolution */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <div className="text-6xl">⚛️</div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  Revolution
                </span>
                <span className="ml-2 text-sm text-gray-500">12 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI 2025: Quantum Computing Business Revolution
              </h3>
              <p className="text-gray-600 mb-4">
                Explore how quantum computing is revolutionizing business operations in 2025. Discover practical applications, implementation strategies, and real-world success stories.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/blog/ai-2025-quantum-computing-business-revolution"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Explore Now →
                </Link>
                <div className="flex items-center text-sm text-gray-500">
                  <span>⭐ 4.8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Autonomous Systems Implementation */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
              <div className="text-6xl">🤖</div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  Implementation
                </span>
                <span className="ml-2 text-sm text-gray-500">14 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI 2025: Autonomous Systems Enterprise Implementation
              </h3>
              <p className="text-gray-600 mb-4">
                Master the implementation of autonomous AI systems in enterprise environments. Learn strategies, best practices, and real-world success stories for 2025.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/blog/ai-2025-autonomous-systems-enterprise-implementation"
                  className="text-green-600 font-semibold hover:text-green-800"
                >
                  Learn More →
                </Link>
                <div className="flex items-center text-sm text-gray-500">
                  <span>⭐ 4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing Success Case Study */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <div className="text-6xl">🏭</div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                  Case Study
                </span>
                <span className="ml-2 text-sm text-gray-500">8 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI Transformation Success: 400% ROI Achievement
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how a global manufacturing company achieved 400% ROI and $50M annual savings through comprehensive AI implementation.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/case-studies/ai-transformation-global-manufacturing-success"
                  className="text-orange-600 font-semibold hover:text-orange-800"
                >
                  View Case Study →
                </Link>
                <div className="flex items-center text-sm text-gray-500">
                  <span>⭐ 4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Readiness Assessment Tool */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <div className="text-6xl">📊</div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
                  Interactive Tool
                </span>
                <span className="ml-2 text-sm text-gray-500">5 min</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI Transformation Readiness Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Assess your organization's readiness for AI transformation with our comprehensive assessment tool and get personalized recommendations.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/tools/ai-transformation-readiness-assessment"
                  className="text-indigo-600 font-semibold hover:text-indigo-800"
                >
                  Take Assessment →
                </Link>
                <div className="flex items-center text-sm text-gray-500">
                  <span>⭐ 4.8</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Calculator Tool */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
              <div className="text-6xl">💰</div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                  Calculator
                </span>
                <span className="ml-2 text-sm text-gray-500">3 min</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI Transformation ROI Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Calculate the potential ROI of your AI transformation project with our comprehensive ROI calculator tool.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/tools/ai-transformation-roi-calculator-2025"
                  className="text-teal-600 font-semibold hover:text-teal-800"
                >
                  Calculate ROI →
                </Link>
                <div className="flex items-center text-sm text-gray-500">
                  <span>⭐ 4.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}