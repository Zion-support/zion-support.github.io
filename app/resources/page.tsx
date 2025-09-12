import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free AI Resources & Implementation Guides | Zion Tech Group"
        description="Download our comprehensive collection of free AI resources, implementation guides, checklists, and playbooks. Everything you need to succeed with AI in 2025."
        keywords="AI resources, implementation guides, AI checklists, free downloads, AI playbooks, business automation guides"
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Download our comprehensive collection of expert-created resources to accelerate your AI journey. 
            From implementation guides to ROI calculators, get everything you need to succeed with AI in 2025.
          </p>
        </div>

        {/* Featured Resources Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">🔥 New This Week</h2>
          <p className="text-xl mb-6 opacity-90">
            Fresh resources just added: AI Workforce Transformation Playbook, Green AI Implementation Guide, 
            and Privacy Compliance Checklists. Download them all for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#workforce-playbook"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Download New Resources
            </Link>
            <Link
              href="#all-resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              View All Resources
            </Link>
          </div>
        </div>

        {/* Featured Resources */}
        <section id="workforce-playbook" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Resources</h2>
            <div className="text-sm text-gray-500">
              Updated weekly • Free downloads
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-8xl">👥</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Implementation Playbook
                    </span>
                    <span className="text-gray-500 text-sm">150+ pages</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Workforce Transformation Playbook 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete guide to transforming your workforce for the AI era. Includes reskilling strategies, 
                    change management frameworks, and implementation templates.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      PDF • 2.1MB • Free Download
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/resources/green-ai-implementation-guide-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🌱</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Sustainability Guide
                    </span>
                    <span className="text-gray-500 text-sm">120+ pages</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Green AI Implementation Guide 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Build sustainable AI systems with 60% energy reduction. Complete guide to eco-friendly 
                    AI implementation with carbon footprint optimization strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      PDF • 1.8MB • Free Download
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">📋</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    POPULAR
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Checklist
                    </span>
                    <span className="text-gray-500 text-sm">150+ items</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Implementation Checklist 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Step-by-step checklist for successful AI implementation. 150+ actionable items 
                    to ensure your AI project succeeds from start to finish.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      PDF • 1.2MB • Free Download
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* All Resources */}
        <section id="all-resources" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Resources</h2>
          
          {/* Implementation Guides */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Guides</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/ai-enterprise-implementation-guide-2025" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-4">🏢</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Enterprise Implementation Guide
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete guide to implementing AI in enterprise environments
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>200+ pages</span>
                    <span>Free Download</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-automation-playbook-2025" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-4">🤖</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Automation Playbook
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Strategic playbook for business process automation
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>180+ pages</span>
                    <span>Free Download</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-data-strategy-guide-2025" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-4">📊</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Data Strategy Guide
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Building data foundations for AI success
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>160+ pages</span>
                    <span>Free Download</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Checklists & Templates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Checklists & Templates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/resources/ai-project-planning-template" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-4">📝</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Project Planning Template
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Comprehensive project planning template
                  </p>
                  <div className="text-xs text-gray-500">Excel • Free</div>
                </div>
              </Link>

              <Link href="/resources/ai-roi-calculator" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-4">💰</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI ROI Calculator
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Calculate potential AI investment returns
                  </p>
                  <div className="text-xs text-gray-500">Excel • Free</div>
                </div>
              </Link>

              <Link href="/resources/ai-security-checklist" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-4">🛡️</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Security Checklist
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Essential security measures for AI systems
                  </p>
                  <div className="text-xs text-gray-500">PDF • Free</div>
                </div>
              </Link>

              <Link href="/resources/ai-governance-framework" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-4">⚖️</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Governance Framework
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete governance framework template
                  </p>
                  <div className="text-xs text-gray-500">PDF • Free</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Industry-Specific Guides */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry-Specific Guides</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/ai-healthcare-implementation-guide" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-4">🏥</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Healthcare Implementation Guide
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    AI implementation in healthcare settings
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>250+ pages</span>
                    <span>Free Download</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-financial-services-guide" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-4">🏦</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Financial Services Guide
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    AI applications in financial services
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>220+ pages</span>
                    <span>Free Download</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-manufacturing-guide" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-3xl mb-4">🏭</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Manufacturing Guide
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    AI transformation in manufacturing
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>200+ pages</span>
                    <span>Free Download</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get New Resources First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Be the first to access our latest resources, guides, and tools. Join 10,000+ professionals 
              who get exclusive access to new content every week.
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
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom AI Solutions?</h2>
          <p className="text-xl mb-6 opacity-90">
            Our expert team can help you implement AI solutions tailored to your specific business needs. 
            Get a free consultation and discover how AI can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}