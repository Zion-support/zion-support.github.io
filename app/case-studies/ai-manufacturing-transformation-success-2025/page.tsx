import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, TrendingUp, Zap, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Manufacturing Transformation: 300% Productivity Increase Case Study',
  description: 'Discover how a Fortune 500 manufacturer achieved 300% productivity increase and $50M in cost savings through AI transformation.',
  keywords: 'AI manufacturing case study, AI transformation success, manufacturing AI, productivity increase, cost savings',
  openGraph: {
    title: 'AI Manufacturing Transformation: 300% Productivity Increase Case Study',
    description: 'Discover how a Fortune 500 manufacturer achieved 300% productivity increase and $50M in cost savings through AI transformation.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AIManufacturingTransformationSuccess2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              SUCCESS CASE STUDY
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Manufacturing
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Transformation Success
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              How a Fortune 500 manufacturer achieved 300% productivity increase, $50M in cost savings, 
              and revolutionized their operations through comprehensive AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#transformation-results" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                View Results
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#implementation-process" 
                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300"
              >
                Implementation Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section id="transformation-results" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transformation Results
            </h2>
            <p className="text-xl text-gray-600">
              Measurable impact achieved through AI implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-gray-600 text-lg">Productivity Increase</div>
              <div className="text-sm text-gray-500 mt-2">vs. previous year</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">$50M</div>
              <div className="text-gray-600 text-lg">Cost Savings</div>
              <div className="text-sm text-gray-500 mt-2">annual savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">99.8%</div>
              <div className="text-gray-600 text-lg">Quality Rate</div>
              <div className="text-sm text-gray-500 mt-2">defect reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">75%</div>
              <div className="text-gray-600 text-lg">Faster Delivery</div>
              <div className="text-sm text-gray-500 mt-2">time to market</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Company Overview
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry</h3>
                  <p className="text-gray-600">Automotive Manufacturing</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Company Size</h3>
                  <p className="text-gray-600">Fortune 500, 25,000+ employees</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-600">
                    Facing increasing competition, rising costs, and quality issues that threatened 
                    market position and profitability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution</h3>
                  <p className="text-gray-600">
                    Comprehensive AI transformation across manufacturing, supply chain, 
                    and quality control operations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Before vs. After</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Production Efficiency</span>
                  <div className="flex items-center">
                    <span className="text-red-600 font-semibold mr-2">65%</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-green-600 font-semibold">95%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Defect Rate</span>
                  <div className="flex items-center">
                    <span className="text-red-600 font-semibold mr-2">3.2%</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-green-600 font-semibold">0.1%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Energy Consumption</span>
                  <div className="flex items-center">
                    <span className="text-red-600 font-semibold mr-2">100%</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-green-600 font-semibold">60%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Inventory Turnover</span>
                  <div className="flex items-center">
                    <span className="text-red-600 font-semibold mr-2">4x/year</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-green-600 font-semibold">12x/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section id="implementation-process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive 18-month transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Phase 1: Foundation (Months 1-6)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                  <span>AI readiness assessment and team training</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                  <span>Pilot project selection and implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                  <span>Data infrastructure modernization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                  <span>Change management and culture shift</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Phase 2: Scale (Months 7-12)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Production line AI integration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Predictive maintenance systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Quality control automation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Supply chain optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Phase 3: Optimize (Months 13-18)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></div>
                  <span>Advanced analytics and insights</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></div>
                  <span>Autonomous decision making</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></div>
                  <span>Continuous improvement systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></div>
                  <span>ROI optimization and scaling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Technologies Implemented
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technologies that drove the transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer Vision</h3>
              <p className="text-gray-600 mb-4">
                Real-time quality inspection and defect detection using advanced image recognition algorithms.
              </p>
              <div className="text-sm text-green-600 font-medium">99.8% accuracy rate</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Machine learning models for predictive maintenance, reducing downtime by 75%.
              </p>
              <div className="text-sm text-blue-600 font-medium">75% downtime reduction</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Optimization</h3>
              <p className="text-gray-600 mb-4">
                AI-driven optimization of production schedules and resource allocation.
              </p>
              <div className="text-sm text-indigo-600 font-medium">300% efficiency gain</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Supply Chain AI</h3>
              <p className="text-gray-600 mb-4">
                Intelligent demand forecasting and inventory optimization systems.
              </p>
              <div className="text-sm text-purple-600 font-medium">60% inventory reduction</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Energy Management</h3>
              <p className="text-gray-600 mb-4">
                AI-powered energy consumption optimization and smart grid integration.
              </p>
              <div className="text-sm text-orange-600 font-medium">40% energy savings</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Autonomous Systems</h3>
              <p className="text-gray-600 mb-4">
                Self-optimizing production lines with minimal human intervention.
              </p>
              <div className="text-sm text-pink-600 font-medium">90% automation level</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Return on Investment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial impact analysis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Investment Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">AI Technology Implementation</span>
                  <span className="font-semibold text-gray-900">$15M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Infrastructure & Training</span>
                  <span className="font-semibold text-gray-900">$8M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Change Management</span>
                  <span className="font-semibold text-gray-900">$5M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Ongoing Operations</span>
                  <span className="font-semibold text-gray-900">$2M</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-4">
                  <span className="text-gray-900 font-semibold">Total Investment</span>
                  <span className="font-bold text-green-600 text-xl">$30M</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Annual Returns</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Cost Savings</span>
                  <span className="font-semibold text-green-600">$50M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Revenue Increase</span>
                  <span className="font-semibold text-green-600">$25M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Quality Improvements</span>
                  <span className="font-semibold text-green-600">$15M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Efficiency Gains</span>
                  <span className="font-semibold text-green-600">$10M</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-4">
                  <span className="text-gray-900 font-semibold">Total Annual Return</span>
                  <span className="font-bold text-green-600 text-xl">$100M</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">ROI: 233%</h3>
              <p className="text-xl text-gray-600">
                Payback period: 3.6 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Learn how AI can revolutionize your manufacturing operations and achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/resources/ai-manufacturing-transformation-playbook-2025" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Download Playbook
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Related Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-retail-transformation-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  AI Retail Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  How a retail giant achieved 250% increase in customer satisfaction.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  AI Healthcare Breakthrough
                </h3>
                <p className="text-gray-600 mb-4">
                  Revolutionary AI diagnosis system improving patient outcomes.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-manufacturing-implementation-guide-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  Manufacturing AI Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete implementation guide for AI in manufacturing.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  Download Guide <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}