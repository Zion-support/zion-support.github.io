import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import AIROICalculator from '../../components/AIROICalculator';
import AIReadinessAssessment from '../../components/AIReadinessAssessment';

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Resources & Tools 2025: Free Guides, Templates, and Implementation Tools"
        description="Access our comprehensive collection of free AI resources, implementation guides, templates, and tools. Everything you need to accelerate your AI transformation journey in 2025."
        keywords="AI resources, free AI tools, AI implementation guides, AI templates, AI checklists, AI calculators, AI frameworks"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🆓 FREE RESOURCES - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Resources & Tools
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to succeed with AI in 2025. Free guides, templates, calculators, 
            and implementation tools designed by our expert team to accelerate your AI transformation.
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
                Our most popular and impactful resources, handpicked to help you stay ahead 
                in the rapidly evolving AI landscape.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Checklist</h3>
                <p className="text-sm opacity-90 mb-3">Complete step-by-step guide for successful AI deployment</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>PDF Download</span>
                  <span className="mx-2">•</span>
                  <span>🔥 Most Popular</span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold mb-2">ROI Calculator</h3>
                <p className="text-sm opacity-90 mb-3">Calculate potential returns on your AI investments</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Interactive Tool</span>
                  <span className="mx-2">•</span>
                  <span>🚀 New</span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2">AI Readiness Assessment</h3>
                <p className="text-sm opacity-90 mb-3">Evaluate your organization's AI readiness level</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Online Quiz</span>
                  <span className="mx-2">•</span>
                  <span>⭐ Recommended</span>
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
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation Guides</h3>
              <p className="text-gray-600 mb-4">Step-by-step guides for implementing AI solutions across different industries and use cases.</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• AI Strategy Development</li>
                <li>• Data Preparation Guide</li>
                <li>• Model Deployment Checklist</li>
                <li>• Change Management Framework</li>
                <li>• Security Best Practices</li>
              </ul>
              <Link href="#implementation-guides" className="text-blue-600 font-medium hover:underline">
                View All Guides →
              </Link>
            </div>

            {/* Templates & Checklists */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Templates & Checklists</h3>
              <p className="text-gray-600 mb-4">Ready-to-use templates and checklists to streamline your AI projects and ensure nothing is missed.</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Project Planning Templates</li>
                <li>• Risk Assessment Checklists</li>
                <li>• Vendor Evaluation Forms</li>
                <li>• Testing Protocols</li>
                <li>• Documentation Templates</li>
              </ul>
              <Link href="#templates" className="text-green-600 font-medium hover:underline">
                Download Templates →
              </Link>
            </div>

            {/* Interactive Tools */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Tools</h3>
              <p className="text-gray-600 mb-4">Powerful calculators, assessments, and interactive tools to help you make informed AI decisions.</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• ROI Calculator</li>
                <li>• Readiness Assessment</li>
                <li>• Cost Estimator</li>
                <li>• Timeline Planner</li>
                <li>• Risk Analyzer</li>
              </ul>
              <Link href="#tools" className="text-purple-600 font-medium hover:underline">
                Try Tools →
              </Link>
            </div>

            {/* Industry-Specific Resources */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Resources</h3>
              <p className="text-gray-600 mb-4">Specialized resources tailored to specific industries and their unique AI challenges and opportunities.</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Healthcare AI Guide</li>
                <li>• Financial Services Toolkit</li>
                <li>• Manufacturing Solutions</li>
                <li>• Retail Transformation</li>
                <li>• Education Implementation</li>
              </ul>
              <Link href="#industry" className="text-orange-600 font-medium hover:underline">
                Browse Industries →
              </Link>
            </div>

            {/* Technical Documentation */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Docs</h3>
              <p className="text-gray-600 mb-4">Comprehensive technical documentation, API references, and developer resources for AI implementation.</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• API Documentation</li>
                <li>• Code Examples</li>
                <li>• Architecture Patterns</li>
                <li>• Performance Optimization</li>
                <li>• Troubleshooting Guides</li>
              </ul>
              <Link href="#technical" className="text-indigo-600 font-medium hover:underline">
                View Documentation →
              </Link>
            </div>

            {/* Training Materials */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training Materials</h3>
              <p className="text-gray-600 mb-4">Educational resources, courses, and training materials to upskill your team in AI technologies.</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Video Tutorials</li>
                <li>• Webinar Recordings</li>
                <li>• Course Materials</li>
                <li>• Certification Prep</li>
                <li>• Hands-on Labs</li>
              </ul>
              <Link href="#training" className="text-teal-600 font-medium hover:underline">
                Start Learning →
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Downloads */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Most Popular Downloads</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Strategy Template</h3>
              <p className="text-sm text-gray-600 mb-4">Complete framework for developing your AI strategy</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">PDF • 2.3MB</span>
                <button className="text-blue-600 text-sm font-medium hover:underline">Download</button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Quality Checklist</h3>
              <p className="text-sm text-gray-600 mb-4">Ensure your data is ready for AI implementation</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">PDF • 1.8MB</span>
                <button className="text-green-600 text-sm font-medium hover:underline">Download</button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">ROI Calculator</h3>
              <p className="text-sm text-gray-600 mb-4">Calculate potential returns on AI investments</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Excel • 1.2MB</span>
                <button className="text-purple-600 text-sm font-medium hover:underline">Download</button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Security Framework</h3>
              <p className="text-sm text-gray-600 mb-4">Comprehensive AI security guidelines</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">PDF • 3.1MB</span>
                <button className="text-orange-600 text-sm font-medium hover:underline">Download</button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tools Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Interactive Tools</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <AIROICalculator />
            <AIReadinessAssessment />
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest Resources
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Get weekly updates on new resources, tools, and insights delivered straight to your inbox. 
            Join 25,000+ AI professionals who trust our content.
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