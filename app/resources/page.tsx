import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free AI Resources & Implementation Guides 2025 - Zion Tech Group"
        description="Download free AI implementation guides, templates, checklists, and tools. Expert resources to accelerate your AI transformation journey in 2025."
        keywords="AI resources, implementation guides, AI templates, free downloads, AI tools, business transformation"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 FREE RESOURCES - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Free AI Resources & Implementation Guides
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Download our comprehensive collection of AI implementation guides, templates, 
            checklists, and tools. Expert resources designed to accelerate your AI 
            transformation journey in 2025.
          </p>
        </header>

        {/* Featured Resources */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎯 Featured This Week
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our most popular and impactful resources, handpicked by our experts to help you 
                get started with AI implementation immediately.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Roadmap 2025</h3>
                <p className="text-sm opacity-90 mb-3">Complete 12-month roadmap with milestones, checklists, and success metrics</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-75">200+ pages</span>
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors">
                    Download Free
                  </button>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold mb-2">ROI Calculator & Templates</h3>
                <p className="text-sm opacity-90 mb-3">Interactive ROI calculator and financial projection templates</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-75">Excel + PDF</span>
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors">
                    Download Free
                  </button>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold mb-2">AI Technology Selection Guide</h3>
                <p className="text-sm opacity-90 mb-3">Comprehensive guide to choosing the right AI platforms and tools</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-75">150+ pages</span>
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors">
                    Download Free
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
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Guides</h3>
              <p className="text-gray-600 mb-6">Step-by-step guides for implementing AI across different business functions</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">AI Enterprise Readiness Guide</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Generative AI Implementation</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Automation Roadmap Template</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">DOCX</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">AI Security Best Practices</span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">PDF</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View All Guides
              </button>
            </div>

            {/* Templates & Checklists */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Templates & Checklists</h3>
              <p className="text-gray-600 mb-6">Ready-to-use templates and checklists to streamline your AI projects</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">AI Project Charter Template</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">DOCX</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Data Quality Assessment</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">XLSX</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">AI Ethics Checklist</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">Change Management Plan</span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">DOCX</span>
                </div>
              </div>
              
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                View All Templates
              </button>
            </div>

            {/* Tools & Calculators */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools & Calculators</h3>
              <p className="text-gray-600 mb-6">Interactive tools and calculators to help with AI planning and ROI analysis</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">AI ROI Calculator</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">XLSX</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Technology Selection Matrix</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">XLSX</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Risk Assessment Tool</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">Implementation Timeline</span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">XLSX</span>
                </div>
              </div>
              
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                View All Tools
              </button>
            </div>

            {/* Case Studies */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Studies</h3>
              <p className="text-gray-600 mb-6">Detailed case studies showcasing real-world AI implementations and results</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Healthcare AI Success Story</span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Manufacturing Automation</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Financial Services AI</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">Retail AI Transformation</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">PDF</span>
                </div>
              </div>
              
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                View All Case Studies
              </button>
            </div>

            {/* Whitepapers */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Whitepapers</h3>
              <p className="text-gray-600 mb-6">In-depth research and analysis on AI trends, technologies, and best practices</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">AI Trends 2025 Report</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Generative AI Business Impact</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">AI Ethics & Governance</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">Future of Work with AI</span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">PDF</span>
                </div>
              </div>
              
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                View All Whitepapers
              </button>
            </div>

            {/* Webinars & Videos */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Webinars & Videos</h3>
              <p className="text-gray-600 mb-6">Expert-led webinars and video tutorials on AI implementation and best practices</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">AI Implementation Masterclass</span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Video</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">ROI Measurement Best Practices</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Video</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">AI Security & Compliance</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Video</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">Change Management Strategies</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Video</span>
                </div>
              </div>
              
              <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                View All Videos
              </button>
            </div>
          </div>
        </section>

        {/* Popular Downloads */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Most Popular Downloads</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📊</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI ROI Calculator 2025</h3>
                  <p className="text-sm text-gray-600 mb-4">Interactive Excel tool to calculate AI project ROI and financial projections</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Excel</span>
                      <span>2.3k downloads</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📋</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Implementation Checklist</h3>
                  <p className="text-sm text-gray-600 mb-4">Comprehensive checklist covering all aspects of AI project implementation</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">PDF</span>
                      <span>1.8k downloads</span>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔧</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology Selection Matrix</h3>
                  <p className="text-sm text-gray-600 mb-4">Compare AI platforms and tools with detailed evaluation criteria</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">XLSX</span>
                      <span>1.5k downloads</span>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏆</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories Collection</h3>
                  <p className="text-sm text-gray-600 mb-4">Compilation of 20+ real-world AI implementation success stories</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2">PDF</span>
                      <span>1.2k downloads</span>
                    </div>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📚</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Readiness Assessment</h3>
                  <p className="text-sm text-gray-600 mb-4">Self-assessment tool to evaluate your organization's AI readiness</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded mr-2">PDF</span>
                      <span>980 downloads</span>
                    </div>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎯</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Strategy Template</h3>
                  <p className="text-sm text-gray-600 mb-4">Complete template for developing your AI strategy and roadmap</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded mr-2">DOCX</span>
                      <span>850 downloads</span>
                    </div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get New Resources Delivered Weekly
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 15,000+ AI professionals who receive our latest resources, guides, 
            and insights delivered straight to their inbox every week.
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