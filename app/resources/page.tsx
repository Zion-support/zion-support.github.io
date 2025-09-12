import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free AI Resources & Tools - Implementation Guides, Templates & Checklists"
        description="Download free AI implementation guides, templates, checklists, and tools. Expert resources to accelerate your AI transformation journey in 2025."
        keywords="AI resources, free AI tools, AI implementation guides, AI templates, AI checklists, AI downloads"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📋 FREE RESOURCES</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Resources & Tools
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Download our comprehensive collection of free AI implementation guides, templates, 
            checklists, and tools. Everything you need to accelerate your AI transformation journey.
          </p>
        </header>

        {/* Featured Resources */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎯 Featured Resources
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our most popular and impactful resources, downloaded by 10,000+ AI professionals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2">AI Readiness Assessment</h3>
                <p className="text-sm opacity-90 mb-4">Comprehensive checklist to evaluate your organization's AI readiness</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-75">PDF • 15 pages</span>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                    Download
                  </button>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Roadmap</h3>
                <p className="text-sm opacity-90 mb-4">Step-by-step guide for successful AI implementation</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-75">PDF • 25 pages</span>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                    Download
                  </button>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold mb-2">ROI Calculator Template</h3>
                <p className="text-sm opacity-90 mb-4">Excel template to calculate AI project ROI and business impact</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-75">Excel • Template</span>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resource Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Implementation Guides */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation Guides</h3>
              <p className="text-gray-600 mb-4">Step-by-step guides for implementing AI solutions in your organization.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Enterprise AI Integration Guide</li>
                <li>• AI Project Management Framework</li>
                <li>• Data Preparation Checklist</li>
                <li>• Change Management Playbook</li>
              </ul>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                View All Guides →
              </button>
            </div>

            {/* Templates & Checklists */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Templates & Checklists</h3>
              <p className="text-gray-600 mb-4">Ready-to-use templates and checklists to streamline your AI projects.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI Project Charter Template</li>
                <li>• Vendor Evaluation Checklist</li>
                <li>• Security Assessment Template</li>
                <li>• Performance Metrics Dashboard</li>
              </ul>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                View All Templates →
              </button>
            </div>

            {/* Tools & Calculators */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tools & Calculators</h3>
              <p className="text-gray-600 mb-4">Interactive tools and calculators to help with AI planning and analysis.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI ROI Calculator</li>
                <li>• Technology Stack Selector</li>
                <li>• Budget Planning Tool</li>
                <li>• Risk Assessment Matrix</li>
              </ul>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                View All Tools →
              </button>
            </div>

            {/* Case Studies */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Case Studies</h3>
              <p className="text-gray-600 mb-4">Detailed case studies showcasing real-world AI implementations and results.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Healthcare AI Transformation</li>
                <li>• Manufacturing Automation Success</li>
                <li>• Financial Services AI Implementation</li>
                <li>• Retail Personalization Case Study</li>
              </ul>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                View All Case Studies →
              </button>
            </div>

            {/* Whitepapers */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Whitepapers</h3>
              <p className="text-gray-600 mb-4">In-depth research and analysis on AI trends, technologies, and best practices.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI Trends 2025 Report</li>
                <li>• Enterprise AI Security Guide</li>
                <li>• AI Ethics & Governance Framework</li>
                <li>• Future of Work with AI</li>
              </ul>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                View All Whitepapers →
              </button>
            </div>

            {/* Webinars & Videos */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Webinars & Videos</h3>
              <p className="text-gray-600 mb-4">Expert-led webinars and video tutorials on AI implementation and best practices.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI Implementation Masterclass</li>
                <li>• Data Science Best Practices</li>
                <li>• AI Security & Compliance</li>
                <li>• Future of AI Technology</li>
              </ul>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                View All Videos →
              </button>
            </div>
          </div>
        </section>

        {/* Popular Downloads */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Most Popular Downloads</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Readiness Assessment</h3>
                <p className="text-sm text-gray-600 mb-4">15-page comprehensive checklist</p>
                <div className="text-xs text-gray-500 mb-3">Downloaded 2,847 times</div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Download Free
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Implementation Roadmap</h3>
                <p className="text-sm text-gray-600 mb-4">25-page step-by-step guide</p>
                <div className="text-xs text-gray-500 mb-3">Downloaded 2,156 times</div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Download Free
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-gray-900 mb-2">ROI Calculator</h3>
                <p className="text-sm text-gray-600 mb-4">Excel template with formulas</p>
                <div className="text-xs text-gray-500 mb-3">Downloaded 1,923 times</div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Download Free
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-semibold text-gray-900 mb-2">Security Checklist</h3>
                <p className="text-sm text-gray-600 mb-4">AI security best practices</p>
                <div className="text-xs text-gray-500 mb-3">Downloaded 1,678 times</div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Download Free
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get New Resources Delivered Weekly
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 10,000+ AI professionals who receive our latest resources, tools, and insights 
            delivered straight to their inbox every week.
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
        </section>
      </div>
    </div>
  );
}