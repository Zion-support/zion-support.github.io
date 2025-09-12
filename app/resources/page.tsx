import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free AI Resources & Tools - Implementation Guides, Checklists & Templates"
        description="Download our comprehensive collection of free AI resources: Implementation Master Guide, Cybersecurity Checklist, ROI Calculator, and 50+ tools to accelerate your AI success."
        keywords="AI resources, AI tools, AI implementation guide, AI checklist, AI templates, free AI resources"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 FREE RESOURCES</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free AI Resources & Tools
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive library of free AI resources, tools, and templates. 
            Everything you need to successfully implement AI in your organization, from 
            strategic planning to technical execution.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🌟 Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-purple-200">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Implementation Master Guide 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  200+ page comprehensive guide with frameworks, templates, and real-world case studies for successful AI implementation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium">Free Download</span>
                  <span className="text-sm text-gray-500">200+ pages</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-cybersecurity-checklist-2025" className="group">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-red-200">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  AI Cybersecurity Checklist 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  150+ security items for secure AI implementation. Essential checklist for protecting your AI systems and data.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-red-600 font-medium">Free Download</span>
                  <span className="text-sm text-gray-500">150+ items</span>
                </div>
              </div>
            </Link>

            <Link href="/tools/ai-roi-calculator" className="group">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-green-200">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI ROI Calculator
                </h3>
                <p className="text-gray-600 mb-4">
                  Calculate potential return on AI investments with our comprehensive ROI calculator and financial modeling tools.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">Free Tool</span>
                  <span className="text-sm text-gray-500">Interactive</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Implementation Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📋 Implementation Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">📖</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Implementation Master Guide 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete step-by-step framework for AI implementation
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>200+ pages</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Workforce Transformation Playbook
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete reskilling strategies and implementation guides
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>150+ pages</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-governance-starter-kit-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Governance Starter Kit 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Essential framework for responsible AI governance
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>100+ pages</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-gtm-starter-kit-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Go-To-Market Starter Kit
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete guide to launching AI products successfully
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>120+ pages</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-transformation-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Transformation Playbook 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Strategic roadmap for enterprise AI transformation
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>180+ pages</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-transformation-readiness-assessment-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Readiness Assessment
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive assessment tool for AI readiness
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Interactive</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Tools & Calculators */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🛠️ Tools & Calculators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/tools/ai-roi-calculator" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI ROI Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Calculate potential return on AI investments
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Interactive</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/tools/ai-readiness-assessment" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Readiness Assessment
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Evaluate your organization's AI readiness
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Interactive</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/tools/ai-cost-optimizer" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Cost Optimizer
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Optimize AI infrastructure costs and performance
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Interactive</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Checklists & Templates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📋 Checklists & Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/ai-cybersecurity-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  AI Cybersecurity Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  150+ security items for secure AI implementation
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>150+ items</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Step-by-step checklist for AI project success
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>100+ items</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-vendor-evaluation-template" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  AI Vendor Evaluation Template
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive template for evaluating AI vendors
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Template</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
          <p className="text-xl opacity-90 mb-6">
            Our AI experts are here to help you choose the right resources and guide your implementation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services/ai-consulting"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}