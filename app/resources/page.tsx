import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free AI Resources & Implementation Guides - Zion Tech Group"
        description="Download free AI implementation guides, checklists, templates, and resources. Get everything you need to successfully implement AI in your organization."
        keywords="AI resources, AI implementation guides, free AI templates, AI checklists, AI best practices, AI strategy"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 FREE RESOURCES</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Free AI Resources & Implementation Guides
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything you need to successfully implement AI in your organization. Download our 
            comprehensive guides, checklists, templates, and tools to accelerate your AI transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#download-all"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Download All Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              Get Custom Consultation
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Free Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25K+</div>
              <div className="text-gray-700">Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700">User Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-700">Pages of Content</div>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Implementation Master Guide 2025</h3>
              <p className="text-gray-700 mb-4">
                Complete 150+ page guide covering everything from strategy to execution. 
                Includes templates, checklists, and real-world examples.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">150+ pages</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Free</span>
              </div>
              <Link
                href="/resources/ai-implementation-master-guide-2025"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Download Now
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Strategy Framework</h3>
              <p className="text-gray-700 mb-4">
                Proven framework for developing and executing AI strategies. 
                Includes assessment tools and implementation roadmaps.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">80+ pages</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Free</span>
              </div>
              <Link
                href="/resources/ai-strategy-framework-2025"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
              >
                Download Now
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Tools & Technologies Guide</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive guide to AI tools, platforms, and technologies. 
                Compare solutions and make informed decisions.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">120+ pages</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Free</span>
              </div>
              <Link
                href="/resources/ai-tools-technologies-guide-2025"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
              >
                Download Now
              </Link>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resource Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Implementation Guides */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Guides</h3>
              <p className="text-gray-600 mb-6">
                Step-by-step guides for implementing AI solutions across different industries and use cases.
              </p>
              <div className="space-y-3">
                <Link href="/resources/ai-enterprise-implementation-guide-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Enterprise AI Implementation Guide
                </Link>
                <Link href="/resources/ai-startup-implementation-guide-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Startup AI Implementation Guide
                </Link>
                <Link href="/resources/ai-healthcare-implementation-guide-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Healthcare AI Implementation Guide
                </Link>
                <Link href="/resources/ai-manufacturing-implementation-guide-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                  Manufacturing AI Implementation Guide
                </Link>
              </div>
            </div>

            {/* Checklists & Templates */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Checklists & Templates</h3>
              <p className="text-gray-600 mb-6">
                Ready-to-use checklists and templates to streamline your AI implementation process.
              </p>
              <div className="space-y-3">
                <Link href="/resources/ai-implementation-checklist-2025" className="block text-green-600 hover:text-green-800 font-medium">
                  AI Implementation Checklist
                </Link>
                <Link href="/resources/ai-project-plan-template-2025" className="block text-green-600 hover:text-green-800 font-medium">
                  AI Project Plan Template
                </Link>
                <Link href="/resources/ai-roi-calculator-template-2025" className="block text-green-600 hover:text-green-800 font-medium">
                  AI ROI Calculator Template
                </Link>
                <Link href="/resources/ai-risk-assessment-template-2025" className="block text-green-600 hover:text-green-800 font-medium">
                  AI Risk Assessment Template
                </Link>
              </div>
            </div>

            {/* Industry-Specific Guides */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry-Specific Guides</h3>
              <p className="text-gray-600 mb-6">
                Specialized guides tailored to specific industries and their unique AI challenges.
              </p>
              <div className="space-y-3">
                <Link href="/resources/ai-financial-services-guide-2025" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Financial Services AI Guide
                </Link>
                <Link href="/resources/ai-retail-ecommerce-guide-2025" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Retail & E-commerce AI Guide
                </Link>
                <Link href="/resources/ai-education-guide-2025" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Education AI Guide
                </Link>
                <Link href="/resources/ai-logistics-supply-chain-guide-2025" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Logistics & Supply Chain AI Guide
                </Link>
              </div>
            </div>

            {/* Technical Resources */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Resources</h3>
              <p className="text-gray-600 mb-6">
                Technical documentation, code samples, and implementation patterns for developers.
              </p>
              <div className="space-y-3">
                <Link href="/resources/ai-architecture-patterns-2025" className="block text-orange-600 hover:text-orange-800 font-medium">
                  AI Architecture Patterns
                </Link>
                <Link href="/resources/ai-code-samples-2025" className="block text-orange-600 hover:text-orange-800 font-medium">
                  AI Code Samples & Examples
                </Link>
                <Link href="/resources/ai-data-preparation-guide-2025" className="block text-orange-600 hover:text-orange-800 font-medium">
                  AI Data Preparation Guide
                </Link>
                <Link href="/resources/ai-model-deployment-guide-2025" className="block text-orange-600 hover:text-orange-800 font-medium">
                  AI Model Deployment Guide
                </Link>
              </div>
            </div>

            {/* Business Strategy */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Strategy</h3>
              <p className="text-gray-600 mb-6">
                Strategic frameworks and business models for AI adoption and transformation.
              </p>
              <div className="space-y-3">
                <Link href="/resources/ai-business-case-template-2025" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  AI Business Case Template
                </Link>
                <Link href="/resources/ai-governance-framework-2025" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  AI Governance Framework
                </Link>
                <Link href="/resources/ai-ethics-guidelines-2025" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  AI Ethics Guidelines
                </Link>
                <Link href="/resources/ai-change-management-guide-2025" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  AI Change Management Guide
                </Link>
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Case Studies & Examples</h3>
              <p className="text-gray-600 mb-6">
                Real-world case studies and success stories from AI implementations across industries.
              </p>
              <div className="space-y-3">
                <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Fortune 500 AI Transformation
                </Link>
                <Link href="/case-studies/ai-startup-success-story-2025" className="block text-pink-600 hover:text-pink-800 font-medium">
                  AI Startup Success Story
                </Link>
                <Link href="/case-studies/ai-healthcare-breakthrough-2025" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Healthcare AI Breakthrough
                </Link>
                <Link href="/case-studies/ai-manufacturing-automation-2025" className="block text-pink-600 hover:text-pink-800 font-medium">
                  Manufacturing AI Automation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/resources/ai-2025-trends-report" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📈</div>
                <div className="text-xs font-medium text-blue-700 mb-2">NEW</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Trends 2025 Report</h3>
                <p className="text-gray-600 text-sm mb-3">Comprehensive analysis of AI trends and predictions</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>45 pages</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-sustainability-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🌱</div>
                <div className="text-xs font-medium text-green-700 mb-2">NEW</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">AI Sustainability Guide</h3>
                <p className="text-gray-600 text-sm mb-3">Building eco-friendly AI systems</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>60 pages</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-privacy-compliance-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🔒</div>
                <div className="text-xs font-medium text-purple-700 mb-2">NEW</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">AI Privacy Compliance</h3>
                <p className="text-gray-600 text-sm mb-3">Complete privacy compliance checklist</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Checklist</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">👥</div>
                <div className="text-xs font-medium text-orange-700 mb-2">NEW</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600">AI Workforce Playbook</h3>
                <p className="text-gray-600 text-sm mb-3">Transforming your workforce for AI</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>80 pages</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Download All Section */}
        <div id="download-all" className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Download All Resources</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Get instant access to our complete library of AI resources. Download everything 
              in one package and accelerate your AI transformation journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Resources</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Pages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$0</div>
                <div className="text-sm opacity-90">Cost</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Download Complete Package
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                Get Custom Package
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated with New Resources</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get notified when we release new resources, guides, and tools. Join 10,000+ 
            professionals who trust our content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}