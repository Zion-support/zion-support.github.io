import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Global Enterprise Automation Success: 800% ROI Case Study',
  description: 'Discover how a Fortune 500 company achieved 800% ROI with our AI automation solutions. Real results, proven strategies, and implementation insights.',
  keywords: 'AI automation case study, enterprise automation, 800% ROI, Fortune 500 success, AI implementation results',
};

export default function AI2025GlobalEnterpriseAutomationSuccess() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Global Enterprise Automation Success
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              How a Fortune 500 company achieved 800% ROI with advanced AI automation, 
              transforming their entire operational landscape in just 6 months.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400">800%</div>
                <div className="text-sm text-green-100">ROI Achieved</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400">$120M</div>
                <div className="text-sm text-blue-100">Annual Savings</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400">6</div>
                <div className="text-sm text-purple-100">Months to ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Industry:</strong> Global Manufacturing & Supply Chain
                </p>
                <p>
                  <strong>Size:</strong> 50,000+ employees across 40 countries
                </p>
                <p>
                  <strong>Revenue:</strong> $15+ billion annually
                </p>
                <p>
                  <strong>Challenge:</strong> Manual processes causing bottlenecks, errors, and high operational costs
                </p>
                <p>
                  <strong>Goal:</strong> Achieve 50% operational efficiency improvement while reducing costs by 30%
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Challenges</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Manual data entry causing 15% error rate
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Supply chain visibility gaps
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Inefficient inventory management
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  High operational costs
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Limited real-time decision making
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Implementation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Automation Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive AI automation platform designed to transform their entire operational ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Process Automation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated data entry and validation</li>
                <li>• Smart document processing</li>
                <li>• Workflow optimization</li>
                <li>• Exception handling</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Demand forecasting</li>
                <li>• Inventory optimization</li>
                <li>• Maintenance scheduling</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Supply Chain Intelligence</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time visibility</li>
                <li>• Automated routing</li>
                <li>• Quality control</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Remarkable Results Achieved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The implementation exceeded all expectations, delivering unprecedented value across all metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">800%</div>
              <div className="text-gray-600 font-semibold">ROI Achieved</div>
              <div className="text-sm text-gray-500 mt-1">Target: 200%</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$120M</div>
              <div className="text-gray-600 font-semibold">Annual Savings</div>
              <div className="text-sm text-gray-500 mt-1">Target: $50M</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600 font-semibold">Error Reduction</div>
              <div className="text-sm text-gray-500 mt-1">From 15% to 0.75%</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">12x</div>
              <div className="text-gray-600 font-semibold">Processing Speed</div>
              <div className="text-sm text-gray-500 mt-1">Faster than before</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Detailed Impact Analysis</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Operational Improvements</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 85% reduction in manual data entry</li>
                  <li>• 90% faster order processing</li>
                  <li>• 75% improvement in inventory accuracy</li>
                  <li>• 60% reduction in processing time</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Financial Impact</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• $120M annual cost savings</li>
                  <li>• 40% reduction in operational costs</li>
                  <li>• 25% increase in revenue</li>
                  <li>• 6-month payback period</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">"</div>
          <blockquote className="text-xl md:text-2xl mb-8 text-blue-100">
            "The AI automation implementation has been nothing short of transformational. 
            We've achieved results that exceeded our wildest expectations. The 800% ROI 
            speaks for itself, but the operational improvements have been even more valuable."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="text-left">
              <div className="font-semibold text-lg">Sarah Johnson</div>
              <div className="text-blue-200">Chief Technology Officer</div>
              <div className="text-blue-200">Global Manufacturing Corp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we achieved these remarkable results in just 6 months.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-blue-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Month 1-2: Foundation</h3>
                    <p className="text-gray-600">Infrastructure setup, data integration, and team training.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">1</div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">2</div>
                <div className="w-1/2 pl-8">
                  <div className="bg-green-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Month 3-4: Pilot Launch</h3>
                    <p className="text-gray-600">Pilot implementation in select departments with initial results.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-purple-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Month 5-6: Full Rollout</h3>
                    <p className="text-gray-600">Complete enterprise-wide deployment and optimization.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">3</div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join the ranks of successful enterprises transforming their operations with AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}