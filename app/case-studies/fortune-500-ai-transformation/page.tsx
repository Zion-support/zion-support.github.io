import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fortune 500 AI Transformation Case Study - $2.5B Revenue Increase',
  description: 'How a Fortune 100 manufacturing company achieved $2.5B revenue increase through comprehensive AI transformation. Complete case study with results, implementation details, and ROI analysis.',
  keywords: ['Fortune 500', 'AI Transformation', 'Case Study', 'Manufacturing AI', 'Enterprise AI', 'ROI Analysis'],
  openGraph: {
    title: 'Fortune 500 AI Transformation Case Study - $2.5B Revenue Increase',
    description: 'Complete case study of Fortune 100 manufacturing company AI transformation with $2.5B revenue increase.',
    images: ['/og-fortune-500-case-study.png'],
  },
};

export default function Fortune500AITransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-gray-600/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-slate-500 to-gray-500 text-white text-sm font-semibold mb-6">
            📊 CASE STUDY
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fortune 100 Manufacturing
            <span className="block bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
              AI Transformation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            How a global manufacturing leader achieved $2.5B revenue increase through comprehensive AI transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#results" 
              className="px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              View Results
            </Link>
            <Link 
              href="#implementation" 
              className="px-8 py-4 border-2 border-slate-600 text-slate-600 rounded-lg font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300"
            >
              Implementation Details
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Extraordinary Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The comprehensive AI transformation delivered unprecedented business outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">$2.5B</div>
              <div className="text-gray-600 mb-2">Revenue Increase</div>
              <div className="text-sm text-gray-500">First year post-transformation</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">400%</div>
              <div className="text-gray-600 mb-2">Efficiency Gain</div>
              <div className="text-sm text-gray-500">Across all operations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600 mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-500">Operational expenses</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-gray-600 mb-2">System Uptime</div>
              <div className="text-sm text-gray-500">Autonomous operations</div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Performance Improvements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Manufacturing Operations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Production efficiency increased by 350%
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Quality control accuracy improved to 99.97%
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Predictive maintenance reduced downtime by 90%
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Energy consumption reduced by 60%
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Intelligence</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Real-time decision making with 99.8% accuracy
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Supply chain optimization reduced costs by 70%
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Customer satisfaction increased to 98.5%
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Market share expanded by 45%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id="implementation" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Implementation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive 12-month transformation across all business functions
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Foundation & Assessment</h3>
                  <p className="text-gray-600">Months 1-2</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive assessment of existing systems, data infrastructure, and business processes. 
                Identified 47 optimization opportunities across manufacturing, supply chain, and customer service.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-blue-900">Systems Audited</div>
                  <div className="text-2xl font-bold text-blue-600">47</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-blue-900">Data Sources</div>
                  <div className="text-2xl font-bold text-blue-600">156</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-blue-900">Processes Mapped</div>
                  <div className="text-2xl font-bold text-blue-600">89</div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Infrastructure Deployment</h3>
                  <p className="text-gray-600">Months 3-6</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Deployed enterprise-wide AI infrastructure including quantum computing clusters, 
                autonomous decision engines, and predictive analytics platforms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="font-semibold text-green-900">AI Models Deployed</div>
                  <div className="text-2xl font-bold text-green-600">247</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="font-semibold text-green-900">Quantum Processors</div>
                  <div className="text-2xl font-bold text-green-600">12</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="font-semibold text-green-900">Autonomous Systems</div>
                  <div className="text-2xl font-bold text-green-600">34</div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Autonomous Operations Launch</h3>
                  <p className="text-gray-600">Months 7-12</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Activated autonomous business operations across all departments. Systems now operate 
                independently with minimal human intervention, making real-time decisions and optimizations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-semibold text-purple-900">Autonomy Level</div>
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-semibold text-purple-900">Decision Speed</div>
                  <div className="text-2xl font-bold text-purple-600">&lt;1s</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-semibold text-purple-900">Success Rate</div>
                  <div className="text-2xl font-bold text-purple-600">97.5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Return on Investment Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of investment and returns from the AI transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">AI Infrastructure</span>
                  <span className="font-semibold text-gray-900">$85M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Implementation Services</span>
                  <span className="font-semibold text-gray-900">$45M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Training & Change Management</span>
                  <span className="font-semibold text-gray-900">$12M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Ongoing Operations</span>
                  <span className="font-semibold text-gray-900">$8M</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total Investment</span>
                    <span className="text-2xl font-bold text-red-600">$150M</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Returns Achieved</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue Increase</span>
                  <span className="font-semibold text-gray-900">$2.5B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cost Savings</span>
                  <span className="font-semibold text-gray-900">$1.2B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Efficiency Gains</span>
                  <span className="font-semibold text-gray-900">$800M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Market Share Growth</span>
                  <span className="font-semibold text-gray-900">$600M</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total Returns</span>
                    <span className="text-2xl font-bold text-green-600">$5.1B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Summary */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mt-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">ROI Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">3,300%</div>
                <div className="text-lg opacity-90">Return on Investment</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8.5 Months</div>
                <div className="text-lg opacity-90">Payback Period</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$34.00</div>
                <div className="text-lg opacity-90">Return per $1 Invested</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join Fortune 500 companies in achieving extraordinary results with AI transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-slate-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/enterprise-ai-transformation-2025" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-all duration-300"
            >
              Explore Enterprise Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}