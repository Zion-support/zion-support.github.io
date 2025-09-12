import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function AIResources2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Resources 2025: Free Guides, Templates & Tools"
        description="Access our comprehensive collection of free AI resources including implementation guides, checklists, templates, and tools to accelerate your AI transformation in 2025."
        keywords="AI resources, AI guides, AI templates, AI tools, free AI resources, AI implementation tools"
        url="/ai-resources-2025"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 FREE RESOURCES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Resources 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access our comprehensive collection of free AI resources including implementation guides, 
            checklists, templates, and tools to accelerate your AI transformation in 2025.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>📅 Updated January 2025</span>
            <span>📄 50+ Resources</span>
            <span>⬇️ 25K+ Downloads</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Free Resources</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">25K+</div>
            <div className="text-sm text-gray-600">Downloads</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">User Rating</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🔥 Featured Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-implementation-master-guide-2026" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Implementation Master Guide 2026
                </h3>
                <p className="text-gray-700 mb-4">
                  Complete 200+ page resource with proven strategies, frameworks, and templates 
                  used by Fortune 500 companies to achieve breakthrough results.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>200+ pages</span>
                  <span className="text-green-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  ESSENTIAL
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-700 mb-4">
                  200+ actionable items covering every aspect of successful AI transformation. 
                  Use this checklist to ensure nothing is missed in your implementation.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>200+ items</span>
                  <span className="text-blue-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-implementation-playbook-2025" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  NEW
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Automation Implementation Playbook
                </h3>
                <p className="text-gray-700 mb-4">
                  Step-by-step playbook for implementing AI automation with proven methodologies 
                  and real-world case studies from successful implementations.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Playbook</span>
                  <span className="text-purple-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📂 Resource Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Implementation Guides */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Guides</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive step-by-step guides for implementing AI in your organization.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>AI Implementation Master Guide</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Enterprise AI Strategy Guide</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>AI Project Management Guide</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>
              <Link href="/resources?category=implementation" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All Implementation Guides →
              </Link>
            </div>

            {/* Templates & Checklists */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Templates & Checklists</h3>
              <p className="text-gray-600 mb-4">
                Ready-to-use templates and checklists to streamline your AI projects.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>AI Implementation Checklist</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Project Charter Template</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>ROI Calculator Spreadsheet</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>
              <Link href="/resources?category=templates" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All Templates →
              </Link>
            </div>

            {/* Tools & Calculators */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Calculators</h3>
              <p className="text-gray-600 mb-4">
                Interactive tools and calculators to help with AI planning and implementation.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>AI ROI Calculator</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Technology Stack Selector</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Risk Assessment Tool</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>
              <Link href="/resources?category=tools" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All Tools →
              </Link>
            </div>

            {/* Case Studies */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                Real-world case studies showcasing successful AI implementations.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Fortune 500 AI Success</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Manufacturing AI Transformation</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Healthcare AI Implementation</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>
              <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All Case Studies →
              </Link>
            </div>

            {/* Webinars & Videos */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-3xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Webinars & Videos</h3>
              <p className="text-gray-600 mb-4">
                Educational webinars and video content from AI experts and practitioners.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>AI Implementation Masterclass</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>AI Trends 2025 Webinar</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>AI Security Best Practices</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>
              <Link href="/webinars" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All Webinars →
              </Link>
            </div>

            {/* Research & Reports */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research & Reports</h3>
              <p className="text-gray-600 mb-4">
                Industry research reports and analysis on AI trends and market insights.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>AI Market Analysis 2025</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>AI Adoption Survey Results</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>AI ROI Benchmark Report</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>
              <Link href="/resources?category=research" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All Research →
              </Link>
            </div>
          </div>
        </div>

        {/* Latest Resources */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">🆕 Latest Resources</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Resources →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  NEW
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Workforce Transformation Playbook
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  150+ pages of templates, checklists, and strategies for transforming your workforce for the AI era.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>150+ pages</span>
                  <span className="text-green-600 font-medium group-hover:underline">Download →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/green-ai-implementation-guide-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  NEW
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Green AI Implementation Guide
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Build sustainable AI systems with 60% energy reduction and carbon neutrality strategies.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>120+ pages</span>
                  <span className="text-blue-600 font-medium group-hover:underline">Download →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-security-hardening-guide-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                <div className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  ESSENTIAL
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  AI Security Hardening Guide
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Essential security measures and best practices for protecting AI systems from threats.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>80+ pages</span>
                  <span className="text-red-600 font-medium group-hover:underline">Download →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📧 Get New Resources First
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Be the first to access new AI resources, tools, and guides. Join 10,000+ AI professionals 
            who get exclusive access to our latest content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}