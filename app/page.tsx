import React from 'react';
import Link from 'next/link';
import NewContentShowcaseBanner from '../components/NewContentShowcaseBanner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🚀 LEADING AI CONSULTING</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert AI consulting and implementation services that deliver measurable results. 
              Join Fortune 500 companies achieving 340% average ROI with our proven AI strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Get Started Today
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Showcase Banner */}
      <NewContentShowcaseBanner variant="premium" maxItems={6} />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to drive business transformation and measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Automation</h3>
              <p className="text-gray-600 mb-6">
                Streamline operations with intelligent automation that learns and adapts to your business needs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Process automation</li>
                <li>• Workflow optimization</li>
                <li>• Intelligent decision making</li>
                <li>• Cost reduction strategies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise AI</h3>
              <p className="text-gray-600 mb-6">
                Scale AI across your organization with enterprise-grade solutions and proven frameworks.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Strategic AI planning</li>
                <li>• Implementation roadmaps</li>
                <li>• Change management</li>
                <li>• ROI optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Consulting</h3>
              <p className="text-gray-600 mb-6">
                Expert guidance to help you navigate the AI landscape and make informed technology decisions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Technology assessment</li>
                <li>• Vendor evaluation</li>
                <li>• Architecture design</li>
                <li>• Best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI implementations deliver measurable business impact across all industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$200M</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
              <div className="text-gray-600">Efficiency Gains</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real companies implementing our AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-6xl">💰</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">
                    $200M Manufacturing Success
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How a Fortune 500 manufacturer achieved $200M in savings using AI autonomous systems.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>18 min read</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl">🏥</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    Healthcare AI Success
                  </h3>
                  <p className="text-gray-600 mb-4">
                    95% diagnostic accuracy and 60% faster diagnosis times with AI-powered medical imaging.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>15 min read</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-6xl">💳</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                    Financial Services Success
                  </h3>
                  <p className="text-gray-600 mb-4">
                    300% ROI and $50M cost savings through strategic AI implementation in banking.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>12 min read</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our comprehensive guides, templates, and tools to accelerate your AI journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-implementation-master-guide-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl">📚</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Implementation Master Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    200+ pages of proven frameworks, templates, and strategies for successful AI adoption.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Free Download</span>
                    <span className="mx-2">•</span>
                    <span>200+ pages</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-cybersecurity-checklist-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                  <div className="text-6xl">🛡️</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 mb-2">
                    AI Cybersecurity Checklist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    150+ security items to ensure your AI systems are protected against emerging threats.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Free Download</span>
                    <span className="mx-2">•</span>
                    <span>150+ items</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/tools/ai-roi-calculator" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-6xl">💰</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">
                    AI ROI Calculator
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Calculate potential return on investment for your AI automation projects.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Interactive Tool</span>
                    <span className="mx-2">•</span>
                    <span>Free</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest AI Insights
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </section>
    </div>
  );
}