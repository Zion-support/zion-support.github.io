import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tools 2025 Ultimate Showcase - Revolutionary AI Solutions & Tools',
  description: 'Discover the most advanced AI tools and solutions for 2025. Revolutionary automation tools, AI calculators, and breakthrough technologies delivering exceptional results.',
  keywords: [
    'AI Tools 2025',
    'AI Calculator',
    'ROI Calculator',
    'Automation Tools',
    'AI Solutions',
    'Breakthrough Technology',
    'AI Implementation',
    'Business Automation'
  ],
  openGraph: {
    title: 'AI Tools 2025 Ultimate Showcase - Revolutionary AI Solutions & Tools',
    description: 'Discover the most advanced AI tools and solutions for 2025.',
    type: 'website',
    images: ['/og-ai-tools-2025.png'],
  },
};

export default function AITools2025UltimateShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-semibold mb-6 animate-pulse">
              🛠️ ULTIMATE AI TOOLS - 2025 COLLECTION
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              AI Tools 2025
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {' '}Ultimate Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Revolutionary AI tools and solutions that transform your business operations with 
              <strong className="text-green-600"> advanced automation</strong>, 
              <strong className="text-blue-600"> intelligent analytics</strong>, and 
              <strong className="text-purple-600"> breakthrough technologies</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#tools-showcase"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore All Tools
              </Link>
              <Link 
                href="/tools/ai-2025-roi-calculator"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Try ROI Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Showcase Grid */}
      <section id="tools-showcase" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary AI Tools Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI tools designed to accelerate your business transformation and deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ROI Calculator */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI 2025 ROI Calculator
              </h3>
              <p className="text-gray-600 mb-6">
                Calculate the potential return on investment for AI implementations with our advanced calculator tool.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Real-time Calculations
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Industry Comparisons
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Detailed Reports
                </div>
              </div>
              <Link 
                href="/tools/ai-2025-roi-calculator"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Try Calculator
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Automation Assessment */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Automation Readiness Assessment
              </h3>
              <p className="text-gray-600 mb-6">
                Evaluate your organization's readiness for AI automation with our comprehensive assessment tool.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Customized Analysis
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Actionable Recommendations
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Implementation Roadmap
                </div>
              </div>
              <Link 
                href="/tools/automation-readiness-assessment"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Start Assessment
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Performance Monitor */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Performance Monitor
              </h3>
              <p className="text-gray-600 mb-6">
                Monitor and optimize your AI systems performance with real-time analytics and insights.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Real-time Monitoring
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Performance Analytics
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Optimization Alerts
                </div>
              </div>
              <Link 
                href="/tools/ai-performance-monitor"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Monitor Performance
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Content Generator */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-indigo-500">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Content Generator
              </h3>
              <p className="text-gray-600 mb-6">
                Generate high-quality content with our advanced AI-powered content creation tool.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Multi-format Support
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  SEO Optimized
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Brand Voice Matching
                </div>
              </div>
              <Link 
                href="/tools/ai-content-generator"
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                Generate Content
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Security Scanner */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-red-500">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Security Scanner
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive security analysis for your AI systems and data protection compliance.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Vulnerability Detection
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Compliance Checking
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Security Recommendations
                </div>
              </div>
              <Link 
                href="/tools/ai-security-scanner"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                Scan Security
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Business Intelligence */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-yellow-500">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Business Intelligence
              </h3>
              <p className="text-gray-600 mb-6">
                Advanced business intelligence powered by AI for data-driven decision making.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Predictive Analytics
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Interactive Dashboards
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Automated Insights
                </div>
              </div>
              <Link 
                href="/tools/ai-business-intelligence"
                className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
              >
                View Analytics
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Tool Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI tools organized by category for easy discovery and implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🧮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calculators</h3>
              <p className="text-gray-600 mb-4">ROI, performance, and impact calculators</p>
              <Link href="/tools/calculators" className="text-blue-600 font-semibold hover:text-blue-700">
                View All →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600 mb-4">Performance monitoring and insights</p>
              <Link href="/tools/analytics" className="text-blue-600 font-semibold hover:text-blue-700">
                View All →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assessments</h3>
              <p className="text-gray-600 mb-4">Readiness and capability assessments</p>
              <Link href="/tools/assessments" className="text-blue-600 font-semibold hover:text-blue-700">
                View All →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Utilities</h3>
              <p className="text-gray-600 mb-4">Content generation and automation tools</p>
              <Link href="/tools/utilities" className="text-blue-600 font-semibold hover:text-blue-700">
                View All →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI Tools?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Access our complete suite of AI tools and start your transformation journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link 
              href="/resources/ai-tools-implementation-guide"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}