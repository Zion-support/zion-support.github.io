import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fortune 500 AI Transformation Case Study - 340% Efficiency Increase | Zion Tech Group',
  description: 'Discover how a Fortune 500 company achieved 340% efficiency increase and $50M annual savings with Zion Tech Group\'s AI automation solutions.',
  keywords: ['Fortune 500', 'AI transformation', 'case study', 'efficiency increase', 'cost savings', 'AI automation'],
};

export default function Fortune500TransformationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
              <span className="text-lg font-bold">🏆 SUCCESS STORY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Fortune 500 AI Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              How a global manufacturing leader achieved 340% efficiency increase and $50M annual savings 
              with our revolutionary AI automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Client Overview</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Company</h3>
                    <p className="text-gray-600">Global Manufacturing Corporation (Fortune 500)</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Industry</h3>
                    <p className="text-gray-600">Manufacturing & Industrial Operations</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Challenge</h3>
                    <p className="text-gray-600">Manual processes, high operational costs, and inefficiencies in production workflows</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Solution</h3>
                    <p className="text-gray-600">Comprehensive AI automation platform with predictive analytics and intelligent process optimization</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Key Results</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-1">340%</div>
                    <div className="text-sm text-gray-600">Efficiency Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-1">$50M</div>
                    <div className="text-sm text-gray-600">Annual Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-1">6</div>
                    <div className="text-sm text-gray-600">Months to ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-xl text-gray-600">
              Understanding the complex operational challenges our client faced
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-4 text-red-600">Time Inefficiencies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Manual data entry processes</li>
                <li>• Slow production planning</li>
                <li>• Delayed quality control</li>
                <li>• Manual inventory management</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4 text-orange-600">High Operational Costs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Excessive labor costs</li>
                <li>• Equipment downtime</li>
                <li>• Waste and inefficiencies</li>
                <li>• Manual error corrections</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-600">Limited Insights</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Reactive decision making</li>
                <li>• Limited predictive capabilities</li>
                <li>• Manual reporting processes</li>
                <li>• Lack of real-time visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI automation platform that revolutionized their operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-600">AI Automation Platform</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Intelligent Process Automation</h4>
                    <p className="text-gray-600 text-sm">Automated production workflows and quality control processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Predictive Analytics Engine</h4>
                    <p className="text-gray-600 text-sm">AI-powered forecasting for demand, maintenance, and optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Real-time Monitoring</h4>
                    <p className="text-gray-600 text-sm">Continuous oversight of all manufacturing operations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Intelligent Resource Management</h4>
                    <p className="text-gray-600 text-sm">Optimized allocation of materials, equipment, and personnel</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Implementation Approach</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold">Comprehensive Assessment</h4>
                    <p className="text-gray-600 text-sm">Deep analysis of existing processes and automation opportunities</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold">Phased Deployment</h4>
                    <p className="text-gray-600 text-sm">Gradual rollout to minimize business disruption</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold">Staff Training</h4>
                    <p className="text-gray-600 text-sm">Comprehensive training programs for all stakeholders</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold">Continuous Optimization</h4>
                    <p className="text-gray-600 text-sm">Ongoing monitoring and system improvements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <p className="text-xl text-gray-600">
              Measurable outcomes that transformed the client's business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-green-50 rounded-xl p-8">
              <div className="text-5xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-lg font-semibold mb-2">Efficiency Increase</div>
              <div className="text-sm text-gray-600">Overall operational efficiency improvement</div>
            </div>

            <div className="text-center bg-blue-50 rounded-xl p-8">
              <div className="text-5xl font-bold text-blue-600 mb-2">$50M</div>
              <div className="text-lg font-semibold mb-2">Annual Savings</div>
              <div className="text-sm text-gray-600">Reduction in operational costs</div>
            </div>

            <div className="text-center bg-purple-50 rounded-xl p-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-lg font-semibold mb-2">Months to ROI</div>
              <div className="text-sm text-gray-600">Return on investment timeline</div>
            </div>

            <div className="text-center bg-orange-50 rounded-xl p-8">
              <div className="text-5xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Uptime</div>
              <div className="text-sm text-gray-600">System reliability and availability</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8">
            <div className="text-center">
              <blockquote className="text-2xl font-medium mb-6">
                "Zion Tech Group's AI automation solutions completely transformed our operations. The 340% efficiency increase 
                and $50M annual savings exceeded our wildest expectations. This investment has positioned us as an industry leader."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">John Davis</div>
                  <div className="text-blue-200">CTO, Global Manufacturing Corporation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready for Your Own Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies already transforming their operations with our AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-gray-600 text-gray-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-600 hover:text-white transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}