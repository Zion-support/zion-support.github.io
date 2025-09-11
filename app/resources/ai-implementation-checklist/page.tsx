import React from 'react';
import Link from 'next/link';

export default function AIImplementationChecklist() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/resources" className="text-blue-600 hover:underline">← Back to Resources</Link>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Implementation Guide
            </span>
            <span className="text-gray-500 text-sm">Free Download</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Implementation Checklist: Complete 2025 Guide
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A comprehensive step-by-step checklist to successfully implement AI in your organization. 
            Download this free guide and avoid common pitfalls.
          </p>
        </header>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-12">
          <div className="text-center">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Download Your Free AI Implementation Checklist
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get instant access to our comprehensive 50-point checklist covering everything from 
              planning to deployment and optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Download PDF (2.3 MB)
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                View Online
              </button>
            </div>
            <p className="text-sm text-gray-500">
              No email required • Instant download • Updated for 2025
            </p>
          </div>
        </div>

        {/* Preview Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included in This Checklist</h2>
            <p className="text-lg text-gray-700 mb-6">
              This comprehensive checklist covers every aspect of AI implementation, organized into clear phases 
              with actionable items and success criteria.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 1: Planning & Strategy</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Define business objectives and success metrics</li>
                    <li>• Identify use cases and prioritize by impact</li>
                    <li>• Assess current data quality and availability</li>
                    <li>• Build cross-functional AI team</li>
                    <li>• Create governance framework</li>
                    <li>• Establish budget and timeline</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 2: Technical Preparation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Set up data infrastructure and pipelines</li>
                    <li>• Implement data quality controls</li>
                    <li>• Choose AI/ML platforms and tools</li>
                    <li>• Establish development and testing environments</li>
                    <li>• Create model versioning and monitoring systems</li>
                    <li>• Implement security and compliance measures</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 3: Development & Testing</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Develop and train initial models</li>
                    <li>• Implement bias detection and mitigation</li>
                    <li>• Conduct thorough testing and validation</li>
                    <li>• Perform security and privacy assessments</li>
                    <li>• Create user acceptance testing plan</li>
                    <li>• Document processes and procedures</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 4: Deployment & Optimization</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Deploy to production environment</li>
                    <li>• Monitor performance and accuracy</li>
                    <li>• Train end users and support staff</li>
                    <li>• Implement feedback collection systems</li>
                    <li>• Optimize based on real-world usage</li>
                    <li>• Plan for scaling and expansion</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features of This Checklist</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Actionable Items</h3>
                <p className="text-gray-600 text-sm">
                  Each item includes specific actions, success criteria, and estimated timelines
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                <p className="text-gray-600 text-sm">
                  Built-in progress tracking and milestone checkpoints to keep your project on track
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Practices</h3>
                <p className="text-gray-600 text-sm">
                  Based on 500+ successful AI implementations across various industries
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Use This Checklist</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">AI Project Managers</h3>
                  <p className="text-blue-800">
                    Ensure comprehensive project planning and execution with our structured approach
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Technical Leaders</h3>
                  <p className="text-green-800">
                    Guide your team through the technical implementation with proven best practices
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Business Executives</h3>
                  <p className="text-purple-800">
                    Understand the full scope of AI implementation and ensure business alignment
                  </p>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Consultants & Advisors</h3>
                  <p className="text-orange-800">
                    Use as a framework for client engagements and implementation guidance
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-lg text-gray-700 mb-6">
              Organizations that have used this checklist report significant improvements in their AI implementation success rates:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-gray-600">Success Rate</div>
                  <div className="text-sm text-gray-500 mt-1">vs 45% industry average</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-gray-600">Faster Implementation</div>
                  <div className="text-sm text-gray-500 mt-1">Reduced project timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                  <div className="text-gray-600">Cost Reduction</div>
                  <div className="text-sm text-gray-500 mt-1">Lower implementation costs</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Manufacturing Company</h4>
                    <p className="text-gray-600 text-sm mb-2">Fortune 500 Industrial</p>
                    <p className="text-gray-700">
                      "This checklist helped us implement AI across 15 facilities in just 6 months. 
                      We avoided common pitfalls and achieved 40% cost reduction."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-bold">F</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Financial Services Firm</h4>
                    <p className="text-gray-600 text-sm mb-2">Regional Bank</p>
                    <p className="text-gray-700">
                      "The structured approach saved us months of trial and error. 
                      Our AI-powered fraud detection system went live 3 months ahead of schedule."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ai-automation-enterprise-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Automation in Enterprise: Complete 2025 Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive guide covering everything from planning to optimization
                  </p>
                </div>
              </Link>
              
              <Link href="/resources/ai-roi-calculator" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI ROI Calculator
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Calculate the potential return on investment for your AI projects
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Implement AI Successfully?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Download our comprehensive checklist and join 10,000+ professionals who have 
              successfully implemented AI using our proven framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download Free Checklist
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Implementation Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}