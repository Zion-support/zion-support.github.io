import React from 'react';
import Link from 'next/link';

export default function ComprehensiveContentShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📚 COMPREHENSIVE CONTENT LIBRARY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Complete AI Knowledge Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access our extensive library of AI insightscase studiesimplementation guides
            and tools designed to accelerate your organization's AI transformation journey.
          </p>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Predictions & Trends */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🔮</div>
              <h3 className="text-2xl font-bold text-gray-900">AI Predictions & Trends</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Stay ahead with our expert predictions and trend analysis for AI development through 2030.
            </p>
            <div className="space-y-4">
              <Link href="/blog/ai-2025-year-ahead-predictions" className="block group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-all">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">AI 2025 Predictions</h4>
                    <p className="text-sm text-gray-600">15 revolutionary predictions</p>
                  </div>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
                </div>
              </Link>
              
              <Link href="/blog/ai-2026-2030-future-predictions" className="block group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-all">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">AI 2026-2030 Predictions</h4>
                    <p className="text-sm text-gray-600">Long-term future outlook</p>
                  </div>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">TRENDING</span>
                </div>
              </Link>
              
              <Link href="/blog/quantum-ai-fusion-2025" className="block group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg hover:from-indigo-100 hover:to-purple-100 transition-all">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600">Quantum AI Fusion</h4>
                    <p className="text-sm text-gray-600">Breakthrough technology insights</p>
                  </div>
                  <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">BREAKTHROUGH</span>
                </div>
              </Link>
            </div>
            <div className="mt-6">
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
                View All Predictions →
              </Link>
            </div>
          </div>

          {/* Case Studies */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900">Success Case Studies</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Real-world examples of AI transformation success with detailed ROI analysis and implementation insights.
            </p>
            <div className="space-y-4">
              <Link href="/case-studies/ai-2025-enterprise-transformation-breakthrough" className="block group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600">Enterprise Transformation</h4>
                    <p className="text-sm text-gray-600">1,200% ROI success story</p>
                  </div>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">FEATURED</span>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-2025-global-retail-transformation" className="block group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:from-orange-100 hover:to-red-100 transition-all">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-orange-600">Retail Transformation</h4>
                    <p className="text-sm text-gray-600">600% ROI through AI optimization</p>
                  </div>
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">SUCCESS</span>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-2025-financial-services-revolution" className="block group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg hover:from-yellow-100 hover:to-amber-100 transition-all">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600">Financial Services</h4>
                    <p className="text-sm text-gray-600">1,500% ROI in risk management</p>
                  </div>
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">BREAKTHROUGH</span>
                </div>
              </Link>
            </div>
            <div className="mt-6">
              <Link href="/case-studies" className="text-blue-600 hover:text-blue-800 font-semibold">
                View All Case Studies →
              </Link>
            </div>
          </div>

          {/* Implementation Guides */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900">Implementation Guides</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Step-by-step guidestemplatesand tools to successfully implement AI across your organization.
            </p>
            <div className="space-y-4">
              <Link href="/resources/ai-2025-enterprise-implementation-guide" className="block group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-all">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">Enterprise Guide</h4>
                    <p className="text-sm text-gray-600">Complete 150+ page roadmap</p>
                  </div>
                  <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">ESSENTIAL</span>
                </div>
              </Link>
              
              <Link href="/resources/ai-2025-quantum-implementation" className="block group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg hover:from-cyan-100 hover:to-blue-100 transition-all">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600">Quantum AI Guide</h4>
                    <p className="text-sm text-gray-600">Quantum computing implementation</p>
                  </div>
                  <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">ADVANCED</span>
                </div>
              </Link>
              
              <Link href="/resources/ai-2025-automation-mastery" className="block group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-50 to-green-50 rounded-lg hover:from-teal-100 hover:to-green-100 transition-all">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-teal-600">Automation Mastery</h4>
                    <p className="text-sm text-gray-600">Process automation strategies</p>
                  </div>
                  <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full">POPULAR</span>
                </div>
              </Link>
            </div>
            <div className="mt-6">
              <Link href="/resources" className="text-blue-600 hover:text-blue-800 font-semibold">
                View All Resources →
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Tools */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Essential AI Tools</h3>
            <p className="text-xl opacity-90">
              Interactive tools and calculators to help you plan and measure your AI transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/tools/ai-2025-roi-calculator" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <h4 className="text-xl font-semibold mb-2">ROI Calculator</h4>
                <p className="text-sm opacity-90 mb-4">Calculate potential ROI for your AI initiatives</p>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs">FREE TOOL</span>
              </div>
            </Link>
            
            <Link href="/tools/ai-2025-readiness-assessment" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h4 className="text-xl font-semibold mb-2">Readiness Assessment</h4>
                <p className="text-sm opacity-90 mb-4">Evaluate your organization's AI readiness</p>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs">15 MIN</span>
              </div>
            </Link>
            
            <Link href="/tools/ai-2025-implementation-planner" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h4 className="text-xl font-semibold mb-2">Implementation Planner</h4>
                <p className="text-sm opacity-90 mb-4">Create your AI implementation roadmap</p>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs">INTERACTIVE</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Latest Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-2025-neural-interface-revolution" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
                <h4 className="text-lg font-semibold mb-2">Neural Interface Revolution</h4>
                <p className="text-gray-600 text-sm mb-3">Direct brain-computer interfaces reach commercial viability</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>20 min read</span>
                  <span className="mx-2">•</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full">BREAKTHROUGH</span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ai-2025-autonomous-enterprise" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                <h4 className="text-lg font-semibold mb-2">Autonomous Enterprise</h4>
                <p className="text-gray-600 text-sm mb-3">80% autonomous operations achieved by Fortune 500</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>18 min read</span>
                  <span className="mx-2">•</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full">TRENDING</span>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2025-manufacturing-automation" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                <h4 className="text-lg font-semibold mb-2">Manufacturing Automation</h4>
                <p className="text-gray-600 text-sm mb-3">800% ROI through intelligent manufacturing</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>15 min read</span>
                  <span className="mx-2">•</span>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full">SUCCESS</span>
                </div>
              </div>
            </Link>
            
            <Link href="/webinars/ai-2025-implementation-deep-dive" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎥</div>
                <h4 className="text-lg font-semibold mb-2">Implementation Webinar</h4>
                <p className="text-gray-600 text-sm mb-3">Live deep-dive on AI implementation strategies</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>60 min</span>
                  <span className="mx-2">•</span>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full">LIVE</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Organization?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of executives who are already leveraging our AI insights and tools 
            to drive unprecedented growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/newsletter"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all text-lg"
            >
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}