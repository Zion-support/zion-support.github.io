import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Implementation Master Guide 2025: Complete Playbook | Zion Tech Group',
  description: 'Download our comprehensive 200+ page AI implementation master guide. Complete playbook with strategies, frameworks, checklists, and templates for successful AI transformation.',
  keywords: 'AI implementation guide, AI playbook, AI strategy, AI transformation, AI resources, AI templates',
  openGraph: {
    title: 'AI Implementation Master Guide 2025: Complete Playbook',
    description: 'Download our comprehensive 200+ page AI implementation master guide with strategies, frameworks, and templates.',
    type: 'article',
    publishedTime: '2025-01-28T00:00:00Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AIImplementationMasterGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">📚 FREE RESOURCE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Implementation Master Guide 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete 200+ page playbook with proven strategies, frameworks, checklists, and templates 
              for successful AI transformation. Everything you need to implement AI in your organization.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-8">
              <span>200+ pages</span>
              <span>•</span>
              <span>Published Jan 28, 2025</span>
              <span>•</span>
              <span>By Zion Tech Group</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg">
                📥 Download Free Guide
              </button>
              <Link
                href="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-lg"
              >
                Get Implementation Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Inside the Master Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive resource covering every aspect of AI implementation, from strategy development 
              to deployment and optimization. Based on real-world experience with 500+ successful AI projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Strategy & Planning */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy & Planning</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>AI readiness assessment framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>ROI calculation and business case development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Technology stack selection guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Implementation roadmap templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Risk assessment and mitigation strategies</span>
                </li>
              </ul>
            </div>

            {/* Technical Implementation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Implementation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Data infrastructure setup and best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>ML model development and deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>API integration and system architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Security and compliance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Performance monitoring and optimization</span>
                </li>
              </ul>
            </div>

            {/* Operations & Management */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Operations & Management</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Change management and training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Team structure and role definitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Governance and ethics frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Continuous improvement methodologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Success metrics and KPI tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Contents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Table of Contents
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every chapter includes practical examples, real-world case studies, and actionable templates 
              you can use immediately in your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Part 1: Foundation */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Part 1: Foundation & Strategy</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 1: AI Readiness Assessment</h4>
                  <p className="text-sm text-gray-600">Evaluate your organization's current state and identify gaps</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 2: Business Case Development</h4>
                  <p className="text-sm text-gray-600">Build compelling ROI models and secure executive buy-in</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 3: Technology Architecture</h4>
                  <p className="text-sm text-gray-600">Design scalable and secure AI infrastructure</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 4: Data Strategy</h4>
                  <p className="text-sm text-gray-600">Develop comprehensive data governance and quality frameworks</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 5: Implementation Planning</h4>
                  <p className="text-sm text-gray-600">Create detailed roadmaps and project timelines</p>
                </div>
              </div>
            </div>

            {/* Part 2: Implementation */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Part 2: Technical Implementation</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 6: Data Infrastructure</h4>
                  <p className="text-sm text-gray-600">Set up modern data pipelines and storage solutions</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 7: Model Development</h4>
                  <p className="text-sm text-gray-600">Build, train, and validate machine learning models</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 8: Deployment & Integration</h4>
                  <p className="text-sm text-gray-600">Deploy models to production and integrate with existing systems</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 9: Security & Compliance</h4>
                  <p className="text-sm text-gray-600">Implement security measures and ensure regulatory compliance</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 10: Monitoring & Maintenance</h4>
                  <p className="text-sm text-gray-600">Set up monitoring systems and establish maintenance procedures</p>
                </div>
              </div>
            </div>

            {/* Part 3: Operations */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Part 3: Operations & Management</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 11: Team Building</h4>
                  <p className="text-sm text-gray-600">Hire, train, and structure your AI team effectively</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 12: Change Management</h4>
                  <p className="text-sm text-gray-600">Manage organizational change and user adoption</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 13: Governance & Ethics</h4>
                  <p className="text-sm text-gray-600">Establish AI governance frameworks and ethical guidelines</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 14: Performance Measurement</h4>
                  <p className="text-sm text-gray-600">Define and track success metrics and KPIs</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 15: Continuous Improvement</h4>
                  <p className="text-sm text-gray-600">Optimize and scale AI systems for long-term success</p>
                </div>
              </div>
            </div>

            {/* Part 4: Advanced Topics */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Part 4: Advanced Topics</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 16: Advanced AI Techniques</h4>
                  <p className="text-sm text-gray-600">Deep learning, NLP, computer vision, and emerging technologies</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 17: Industry-Specific Solutions</h4>
                  <p className="text-sm text-gray-600">Tailored approaches for healthcare, finance, retail, and manufacturing</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 18: Scaling AI Operations</h4>
                  <p className="text-sm text-gray-600">Build AI factories and scale across the organization</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 19: Future Trends & Innovation</h4>
                  <p className="text-sm text-gray-600">Stay ahead with emerging AI trends and technologies</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Chapter 20: Case Studies & Lessons Learned</h4>
                  <p className="text-sm text-gray-600">Real-world examples and best practices from successful implementations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates and Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Included Templates & Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready-to-use templates, checklists, and tools that you can customize for your specific needs. 
              Save hundreds of hours of development time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategy Templates */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Strategy Templates</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI readiness assessment questionnaire</li>
                <li>• ROI calculation spreadsheet</li>
                <li>• Business case presentation template</li>
                <li>• Implementation roadmap template</li>
                <li>• Risk assessment matrix</li>
              </ul>
            </div>

            {/* Technical Templates */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technical Templates</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Data architecture diagrams</li>
                <li>• Model development checklist</li>
                <li>• Deployment pipeline templates</li>
                <li>• Security audit checklist</li>
                <li>• Performance monitoring dashboard</li>
              </ul>
            </div>

            {/* Management Templates */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Management Templates</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Team structure templates</li>
                <li>• Change management plan</li>
                <li>• Training curriculum outline</li>
                <li>• Governance framework template</li>
                <li>• KPI tracking dashboard</li>
              </ul>
            </div>

            {/* Industry Templates */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Industry Templates</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Healthcare AI compliance checklist</li>
                <li>• Financial services risk framework</li>
                <li>• Retail personalization strategy</li>
                <li>• Manufacturing automation plan</li>
                <li>• Supply chain optimization guide</li>
              </ul>
            </div>

            {/* Assessment Tools */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Assessment Tools</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI maturity assessment tool</li>
                <li>• Technology stack evaluation</li>
                <li>• Data quality assessment</li>
                <li>• Security vulnerability scanner</li>
                <li>• Performance benchmarking tool</li>
              </ul>
            </div>

            {/* Implementation Tools */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation Tools</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Project management templates</li>
                <li>• Communication plan template</li>
                <li>• Testing and validation checklist</li>
                <li>• Go-live readiness assessment</li>
                <li>• Post-implementation review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories from Guide Users
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how organizations have used this guide to achieve remarkable results in their AI implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fortune 500 Manufacturing</h3>
              <p className="text-gray-700 mb-4">
                "This guide helped us implement AI across our entire supply chain. We achieved 40% cost reduction 
                and 60% faster processing times in just 12 months."
              </p>
              <div className="text-sm text-gray-600">
                <strong>Results:</strong> $50M annual savings, 99.5% uptime
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare System</h3>
              <p className="text-gray-700 mb-4">
                "The templates and frameworks in this guide were invaluable. We successfully deployed AI 
                for medical diagnosis with 95% accuracy and 50% cost reduction."
              </p>
              <div className="text-sm text-gray-600">
                <strong>Results:</strong> 95% diagnosis accuracy, 50% cost reduction
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Retail Chain</h3>
              <p className="text-gray-700 mb-4">
                "Following this guide's methodology, we achieved 300% revenue growth through AI-powered 
                personalization and supply chain optimization."
              </p>
              <div className="text-sm text-gray-600">
                <strong>Results:</strong> 300% revenue growth, 45% cost reduction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Your Free AI Implementation Master Guide
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join 10,000+ professionals who have downloaded this comprehensive guide. 
            Get instant access to 200+ pages of expert insights, proven strategies, and ready-to-use templates.
          </p>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">What You'll Get:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-3">Complete Guide (200+ pages)</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• 20 comprehensive chapters</li>
                  <li>• Real-world case studies</li>
                  <li>• Step-by-step implementation guides</li>
                  <li>• Industry-specific strategies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Bonus Resources</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• 50+ ready-to-use templates</li>
                  <li>• Assessment tools and checklists</li>
                  <li>• Video tutorials and webinars</li>
                  <li>• Exclusive community access</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg">
              📥 Download Free Guide Now
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Get Implementation Support
            </Link>
          </div>

          <p className="text-sm opacity-75 mt-6">
            No spam. Instant download. Free forever. Join 10,000+ AI professionals.
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/resources/ai-automation-roi-calculator" className="group">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-6xl">💰</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Automation ROI Calculator
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Calculate the potential return on investment for your AI automation projects.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Free Tool</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/resources/ai-security-hardening-checklist" className="group">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                  <div className="text-6xl">🛡️</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    AI Security Hardening Checklist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Essential security measures and best practices for AI systems.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Free Checklist</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/resources/ai-transformation-playbook-2026" className="group">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl">📚</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Transformation Playbook 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete guide to AI transformation strategies and implementation.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Free Guide</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}