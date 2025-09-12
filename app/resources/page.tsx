import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function Resources() {
  return (
    <>
      <SEO
        title="Free AI & Technology Resources | Implementation Guides & Templates"
        description="Download free AI implementation guides, cybersecurity checklists, workforce transformation playbooks, and ROI calculators. Expert resources to accelerate your digital transformation."
        keywords="AI resources, implementation guides, cybersecurity checklist, workforce transformation, ROI calculator, free downloads"
        url="/resources"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🎁 FREE RESOURCES</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI & Technology Resources
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Download our comprehensive collection of free implementation guides, checklists, 
                templates, and tools designed to accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#downloads"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
                >
                  📋 Browse All Resources
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors text-lg"
                >
                  🎯 Get Expert Help
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section id="downloads" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🎯 Featured Downloads
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular and impactful resources, updated regularly with the latest insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* AI Implementation Master Guide */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6">📖</div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI Implementation Master Guide 2026
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive 200+ page guide covering everything from strategy development to 
                  deployment and optimization. Includes frameworks, templates, and real-world case studies.
                </p>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Pages:</span>
                    <span className="font-medium">200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Templates:</span>
                    <span className="font-medium">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Case Studies:</span>
                    <span className="font-medium">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frameworks:</span>
                    <span className="font-medium">10+</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  📥 Download Free Guide
                </button>
              </div>

              {/* AI Cybersecurity Checklist */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6">🛡️</div>
                <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                  NEW
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI Cybersecurity Checklist 2025
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Essential security checklist with 150+ items covering data protection, 
                  access controls, monitoring, and compliance requirements for AI systems.
                </p>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Security Items:</span>
                    <span className="font-medium">150+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance:</span>
                    <span className="font-medium">GDPR, HIPAA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frameworks:</span>
                    <span className="font-medium">NIST, ISO</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Updates:</span>
                    <span className="font-medium">Monthly</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  📥 Download Checklist
                </button>
              </div>

              {/* Workforce Transformation Playbook */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6">👥</div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                  NEW
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI Workforce Transformation Playbook
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete guide to reskilling and upskilling strategies for the AI era. 
                  Includes assessment tools, training programs, and change management frameworks.
                </p>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Pages:</span>
                    <span className="font-medium">150+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Assessment Tools:</span>
                    <span className="font-medium">12+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Training Programs:</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Templates:</span>
                    <span className="font-medium">20+</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  📥 Download Playbook
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tools */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🧮 Interactive Tools & Calculators
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Use our interactive tools to calculate ROI, assess readiness, and plan your implementation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI ROI Calculator */}
              <Link href="/tools/ai-roi-calculator" className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">💰</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI ROI Calculator
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Calculate potential return on investment for your AI initiatives. 
                    Input your current costs and expected improvements to see projected savings.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Interactive Tool</span>
                    <span className="group-hover:text-blue-600 transition-colors">Launch Calculator →</span>
                  </div>
                </div>
              </Link>

              {/* AI Readiness Assessment */}
              <Link href="/tools/ai-readiness-assessment" className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Readiness Assessment
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Evaluate your organization's readiness for AI implementation across 
                    technology, data, skills, and culture dimensions.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Assessment Tool</span>
                    <span className="group-hover:text-green-600 transition-colors">Start Assessment →</span>
                  </div>
                </div>
              </Link>

              {/* Implementation Timeline Planner */}
              <Link href="/tools/implementation-timeline" className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Implementation Timeline Planner
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Create a detailed timeline for your AI implementation project with 
                    milestones, dependencies, and resource allocation.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Planning Tool</span>
                    <span className="group-hover:text-purple-600 transition-colors">Create Timeline →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Template Library */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                📝 Template Library
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready-to-use templates for common AI implementation tasks and documentation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Charter</h3>
                <p className="text-gray-600 text-sm mb-4">AI project initiation and scope definition</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Download
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements Document</h3>
                <p className="text-gray-600 text-sm mb-4">Business and technical requirements template</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  Download
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ROI Analysis</h3>
                <p className="text-gray-600 text-sm mb-4">Financial impact assessment template</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                  Download
                </button>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Checklist</h3>
                <p className="text-gray-600 text-sm mb-4">AI security implementation checklist</p>
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                  Download
                </button>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Training Plan</h3>
                <p className="text-gray-600 text-sm mb-4">Workforce training and development plan</p>
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors">
                  Download
                </button>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Metrics</h3>
                <p className="text-gray-600 text-sm mb-4">KPI tracking and measurement framework</p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                  Download
                </button>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Change Management</h3>
                <p className="text-gray-600 text-sm mb-4">Organizational change management plan</p>
                <button className="w-full bg-pink-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors">
                  Download
                </button>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Plan</h3>
                <p className="text-gray-600 text-sm mb-4">Step-by-step implementation roadmap</p>
                <button className="w-full bg-yellow-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors">
                  Download
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              📧 Get New Resources First
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Be the first to receive new resources, templates, and tools as we release them. 
              Join thousands of professionals who rely on our expert content.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}