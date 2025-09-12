import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Resources & Tools - Free Guides, Templates, and Implementation Tools"
        description="Access our comprehensive collection of free AI resources, implementation guides, templates, and tools. Everything you need to accelerate your AI transformation journey."
        keywords="AI resources, free guides, AI templates, implementation tools, AI checklists, best practices, AI frameworks"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 FREE RESOURCES</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Resources & Tools
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of free AI resources, implementation guides, 
            templates, and tools. Everything you need to accelerate your AI transformation journey.
          </p>
        </header>

        {/* Featured Resources */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎯 Featured Resources
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our most popular and impactful resources, handpicked by our experts to help you 
                succeed with AI implementation and transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Checklist</h3>
                <p className="text-sm opacity-90 mb-3">Complete step-by-step guide for successful AI deployment</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>PDF Download</span>
                  <span className="mx-2">•</span>
                  <span>🔥 Most Popular</span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">ROI Calculator Tool</h3>
                <p className="text-sm opacity-90 mb-3">Calculate potential returns on AI investments</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Interactive Tool</span>
                  <span className="mx-2">•</span>
                  <span>⚡ Instant Results</span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2">AI Readiness Assessment</h3>
                <p className="text-sm opacity-90 mb-3">Evaluate your organization's AI readiness level</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Online Assessment</span>
                  <span className="mx-2">•</span>
                  <span>📈 Detailed Report</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Implementation Guides</h3>
            <p className="text-gray-600 mb-6">Comprehensive guides covering every aspect of AI implementation, from strategy to deployment.</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• AI Strategy Development Guide</li>
              <li>• Data Preparation Best Practices</li>
              <li>• Model Selection Framework</li>
              <li>• Deployment & Monitoring Guide</li>
              <li>• Change Management Playbook</li>
            </ul>
            <Link href="/resources/guides" className="text-blue-600 font-medium hover:underline">
              View All Guides →
            </Link>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Templates & Checklists</h3>
            <p className="text-gray-600 mb-6">Ready-to-use templates and checklists to streamline your AI projects and ensure nothing is missed.</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Project Planning Templates</li>
              <li>• Risk Assessment Checklists</li>
              <li>• Vendor Evaluation Forms</li>
              <li>• Testing & Validation Templates</li>
              <li>• Documentation Templates</li>
            </ul>
            <Link href="/resources/templates" className="text-green-600 font-medium hover:underline">
              View All Templates →
            </Link>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-6xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Tools & Calculators</h3>
            <p className="text-gray-600 mb-6">Interactive tools and calculators to help you make informed decisions about AI investments and implementations.</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• ROI & Cost Calculators</li>
              <li>• Readiness Assessment Tools</li>
              <li>• Technology Comparison Matrix</li>
              <li>• Timeline Planning Tools</li>
              <li>• Performance Benchmarking</li>
            </ul>
            <Link href="/resources/tools" className="text-purple-600 font-medium hover:underline">
              View All Tools →
            </Link>
          </div>
        </section>

        {/* Industry-Specific Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry-Specific Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-sm text-gray-600 mb-4">AI implementation guides for healthcare organizations</p>
              <Link href="/resources/healthcare" className="text-blue-600 text-sm font-medium hover:underline">
                View Resources →
              </Link>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-sm text-gray-600 mb-4">Industrial AI automation and optimization guides</p>
              <Link href="/resources/manufacturing" className="text-green-600 text-sm font-medium hover:underline">
                View Resources →
              </Link>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Services</h3>
              <p className="text-sm text-gray-600 mb-4">AI solutions for banking and financial institutions</p>
              <Link href="/resources/finance" className="text-purple-600 text-sm font-medium hover:underline">
                View Resources →
              </Link>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Retail</h3>
              <p className="text-sm text-gray-600 mb-4">AI-powered customer experience and operations</p>
              <Link href="/resources/retail" className="text-orange-600 text-sm font-medium hover:underline">
                View Resources →
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Interactive AI ROI Calculator</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your AI Investment Returns</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use our interactive calculator to estimate the potential ROI of AI implementation 
                for your organization. Get instant projections based on your specific parameters.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Your Organization</h4>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Employees
                      </label>
                      <input
                        type="number"
                        placeholder="100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Average Annual Salary ($)
                      </label>
                      <input
                        type="number"
                        placeholder="75000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Efficiency Gain (%)
                      </label>
                      <input
                        type="number"
                        placeholder="30"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Implementation Cost ($)
                      </label>
                      <input
                        type="number"
                        placeholder="500000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Results Preview */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Projected Results</h4>
                    
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">Annual Savings</h5>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        $2,250,000
                      </div>
                      <p className="text-sm text-gray-600">
                        Based on 30% efficiency improvement
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">Payback Period</h5>
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        2.7 months
                      </div>
                      <p className="text-sm text-gray-600">
                        Time to recover implementation costs
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl">
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">3-Year ROI</h5>
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        1,250%
                      </div>
                      <p className="text-sm text-gray-600">
                        Total return over 3 years
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                    Launch Full Calculator
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Readiness Quiz</h3>
              <p className="text-gray-600 text-sm mb-4">Quick 5-minute assessment to evaluate your AI readiness</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Take Quiz
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology Comparison</h3>
              <p className="text-gray-600 text-sm mb-4">Compare different AI technologies and vendors</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                Compare Now
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Checklist</h3>
              <p className="text-gray-600 text-sm mb-4">Step-by-step guide for successful AI deployment</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get New Resources Weekly
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive new AI resources, guides, and tools 
            delivered straight to your inbox every week. Join 15,000+ AI professionals.
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