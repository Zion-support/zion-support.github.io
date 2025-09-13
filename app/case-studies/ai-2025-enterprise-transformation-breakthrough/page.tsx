import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Enterprise Transformation: 1,200% ROI Success Story | Zion Tech Group',
  description: 'Discover how a Fortune 500 company achieved 1,200% ROI through comprehensive AI transformation. Complete case study with implementation details and results.',
  keywords: [
    'AI enterprise transformation',
    'AI ROI case study',
    'Fortune 500 AI success',
    'AI implementation results',
    'enterprise AI transformation',
    'AI business transformation',
    'AI success story',
    'AI ROI 1200%'
  ],
  openGraph: {
    title: 'AI 2025 Enterprise Transformation: 1,200% ROI Success Story',
    description: 'Discover how a Fortune 500 company achieved 1,200% ROI through comprehensive AI transformation.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Case Study', 'Enterprise', 'ROI', 'Transformation']
  }
};

export default function AI2025EnterpriseTransformation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY - JANUARY 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI 2025 Enterprise Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              How a Fortune 500 Company Achieved 1,200% ROI Through Comprehensive AI Implementation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#results"
                className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                View Results
              </Link>
              <Link
                href="/resources/ai-2025-enterprise-implementation-guide"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors text-lg"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Executive Summary
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              This case study documents the complete AI transformation of a Fortune 500 manufacturing company, 
              resulting in unprecedented operational efficiency, cost savings, and revenue growth. The 18-month 
              implementation delivered measurable results across all business functions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">1,200%</div>
              <div className="text-gray-600 font-medium">Total ROI</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.4B</div>
              <div className="text-gray-600 font-medium">Cost Savings</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">340%</div>
              <div className="text-gray-600 font-medium">Productivity Increase</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">18</div>
              <div className="text-gray-600 font-medium">Months to ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Company Background
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong>Industry:</strong> Advanced Manufacturing & Industrial Equipment
                </p>
                <p>
                  <strong>Revenue:</strong> $8.2 billion annually
                </p>
                <p>
                  <strong>Employees:</strong> 45,000+ globally
                </p>
                <p>
                  <strong>Operations:</strong> 150+ facilities across 40 countries
                </p>
                <p>
                  <strong>Challenge:</strong> Declining margins, increasing competition, and operational inefficiencies 
                  across global supply chain and manufacturing processes.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-Transformation Challenges</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Manual processes causing 30% efficiency loss
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Supply chain disruptions costing $200M annually
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Quality control issues resulting in 5% defect rate
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Customer service response times exceeding 48 hours
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Predictive maintenance failures causing $50M in downtime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            AI Implementation Strategy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 1: Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Implemented AI-powered automation across manufacturing, supply chain, and administrative processes.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Robotic Process Automation (RPA)</li>
                <li>• Intelligent Document Processing</li>
                <li>• Automated Quality Control</li>
                <li>• Smart Inventory Management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 2: Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Deployed machine learning models for predictive maintenance, demand forecasting, and risk management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Predictive Maintenance AI</li>
                <li>• Demand Forecasting Models</li>
                <li>• Supply Chain Optimization</li>
                <li>• Risk Assessment Algorithms</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 3: Advanced AI</h3>
              <p className="text-gray-600 mb-4">
                Implemented advanced AI including computer vision, natural language processing, and autonomous decision systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Computer Vision for Quality</li>
                <li>• NLP for Customer Service</li>
                <li>• Autonomous Decision Systems</li>
                <li>• AI-Powered Innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Transformation Results
          </h2>
          
          <div className="space-y-12">
            {/* Financial Results */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">💰 Financial Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$2.4B</div>
                  <div className="text-gray-600">Total Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$1.8B</div>
                  <div className="text-gray-600">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1,200%</div>
                  <div className="text-gray-600">Return on Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
                  <div className="text-gray-600">Months to Break-Even</div>
                </div>
              </div>
            </div>

            {/* Operational Results */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">⚙️ Operational Excellence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">340%</div>
                  <div className="text-gray-600">Productivity Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-600">Process Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.2%</div>
                  <div className="text-gray-600">Quality Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
                  <div className="text-gray-600">Downtime Reduction</div>
                </div>
              </div>
            </div>

            {/* Customer Impact */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">👥 Customer Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2.5hrs</div>
                  <div className="text-gray-600">Avg Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">45%</div>
                  <div className="text-gray-600">Faster Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">60%</div>
                  <div className="text-gray-600">Support Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Implementation Timeline
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Months 1-3: Foundation</h3>
                    <p className="text-gray-600">Infrastructure setup, data integration, and initial automation deployment.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  1
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  2
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Months 4-9: Core AI</h3>
                    <p className="text-gray-600">Machine learning models, predictive analytics, and process optimization.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Months 10-15: Advanced AI</h3>
                    <p className="text-gray-600">Computer vision, NLP, and autonomous decision systems deployment.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  3
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  4
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Months 16-18: Optimization</h3>
                    <p className="text-gray-600">Performance tuning, scaling, and continuous improvement implementation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Success Factors
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Clear Vision & Strategy</h3>
              <p className="text-gray-600">
                Established clear AI transformation goals aligned with business objectives and measurable outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Leadership</h3>
              <p className="text-gray-600">
                Strong C-level support and dedicated AI transformation team with cross-functional expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Foundation</h3>
              <p className="text-gray-600">
                Robust data infrastructure and quality management systems enabling effective AI implementation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Iterative Approach</h3>
              <p className="text-gray-600">
                Phased implementation allowing for learning, adaptation, and continuous improvement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Change Management</h3>
              <p className="text-gray-600">
                Comprehensive training and change management programs ensuring successful adoption.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
              <p className="text-gray-600">
                Robust security measures and compliance frameworks protecting data and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get our comprehensive implementation guide and start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2025-enterprise-implementation-guide"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Download Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            More Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-2025-global-retail-transformation" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏪</div>
                <h3 className="text-xl font-semibold mb-2">Global Retail Transformation</h3>
                <p className="text-gray-600">600% ROI through AI-powered inventory and customer experience optimization.</p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2025-financial-services-revolution" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-xl font-semibold mb-2">Financial Services Revolution</h3>
                <p className="text-gray-600">1,500% ROI through AI-driven risk management and fraud detection.</p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2025-manufacturing-automation" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                <h3 className="text-xl font-semibold mb-2">Manufacturing Automation</h3>
                <p className="text-gray-600">800% ROI through intelligent manufacturing and quality control systems.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}