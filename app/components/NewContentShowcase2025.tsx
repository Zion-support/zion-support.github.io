import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white">🔥 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI & Technology Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our newest comprehensive guides, case studies, and resources covering the latest trends in AI, edge computing, blockchain, and IoT.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Edge Computing Guide */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <div className="text-6xl">⚡</div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">NEW</span>
                <span className="ml-2 text-sm text-gray-500">Edge & IoT</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Edge Computing Revolution</h3>
              <p className="text-gray-600 mb-4">
                Master edge computing with AI-powered solutions. Achieve 500%+ ROI through intelligent edge strategies.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">18 min read</div>
                <Link 
                  href="/blog/ai-2025-edge-computing-revolution-ultimate-guide"
                  className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Blockchain Guide */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
              <div className="text-6xl">🔗</div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">NEW</span>
                <span className="ml-2 text-sm text-gray-500">Blockchain & Web3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Blockchain Integration</h3>
              <p className="text-gray-600 mb-4">
                Master blockchain integration with AI-powered solutions. Achieve 600%+ ROI through intelligent automation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">20 min read</div>
                <Link 
                  href="/blog/ai-2025-blockchain-integration-enterprise-guide"
                  className="text-teal-600 font-semibold hover:text-teal-800 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>

          {/* IoT Guide */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <div className="text-6xl">🌐</div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">NEW</span>
                <span className="ml-2 text-sm text-gray-500">IoT & Smart Systems</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IoT Revolution</h3>
              <p className="text-gray-600 mb-4">
                Master IoT implementation with AI-powered solutions. Achieve 700%+ ROI through intelligent automation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">22 min read</div>
                <Link 
                  href="/blog/ai-2025-iot-revolution-smart-enterprise-guide"
                  className="text-cyan-600 font-semibold hover:text-cyan-800 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Real-World Success Stories</h3>
            <p className="text-xl opacity-90">Discover how leading enterprises achieved exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-3">Global Manufacturing Giant</h4>
              <div className="space-y-2 text-purple-100">
                <div className="flex justify-between">
                  <span>ROI Achievement:</span>
                  <span className="font-bold text-green-300">500%</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Savings:</span>
                  <span className="font-bold text-green-300">$50M</span>
                </div>
                <div className="flex justify-between">
                  <span>Efficiency Improvement:</span>
                  <span className="font-bold text-green-300">95%</span>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  href="/case-studies/global-manufacturing-ai-transformation"
                  className="text-purple-200 hover:text-white font-semibold transition-colors"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-3">Financial Services Leader</h4>
              <div className="space-y-2 text-purple-100">
                <div className="flex justify-between">
                  <span>ROI Achievement:</span>
                  <span className="font-bold text-green-300">600%</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Savings:</span>
                  <span className="font-bold text-green-300">$75M</span>
                </div>
                <div className="flex justify-between">
                  <span>Customer Satisfaction:</span>
                  <span className="font-bold text-green-300">98%</span>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  href="/case-studies/financial-services-ai-revolution"
                  className="text-purple-200 hover:text-white font-semibold transition-colors"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Free Implementation Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h4 className="text-xl font-bold mb-3">AI Transformation Checklist</h4>
              <p className="text-gray-600 mb-4">Complete step-by-step guide for successful AI implementation</p>
              <Link 
                href="/resources/ai-transformation-checklist-2025"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Download Free Guide →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-xl font-bold mb-3">Expert Consultation</h4>
              <p className="text-gray-600 mb-4">Get personalized guidance for your AI transformation journey</p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300"
              >
                Schedule Consultation →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-3">ROI Calculator</h4>
              <p className="text-gray-600 mb-4">Calculate potential ROI from AI implementation in your organization</p>
              <Link 
                href="/tools/roi-calculator"
                className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
              >
                Calculate ROI →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;