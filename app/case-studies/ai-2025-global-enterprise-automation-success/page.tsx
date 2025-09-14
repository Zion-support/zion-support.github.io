import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Global Enterprise Automation Success: 2,400% ROI Case Study',
  description: 'Discover how a Fortune 500 company achieved 2,400% ROI with our AI automation solutions. Learn the strategies, implementation details, and results that transformed their operations.',
  keywords: 'AI automation case study, enterprise automation, Fortune 500 success, ROI case study, AI implementation results',
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
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              How a Fortune 500 manufacturing company achieved 2,400% ROI and $180M annual savings 
              through advanced AI automation implementation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-300">2,400%</div>
                <div className="text-sm">ROI Improvement</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-300">$180M</div>
                <div className="text-sm">Annual Savings</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-300">95%</div>
                <div className="text-sm">Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Industry:</strong> Global Manufacturing & Supply Chain
                </p>
                <p>
                  <strong>Size:</strong> Fortune 500 with 50,000+ employees across 40 countries
                </p>
                <p>
                  <strong>Challenge:</strong> Inefficient manual processes, high operational costs, 
                  and inability to scale operations effectively.
                </p>
                <p>
                  <strong>Goals:</strong> Reduce operational costs by 30%, improve efficiency by 50%, 
                  and enable rapid scaling of manufacturing operations.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Metrics Before Implementation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Manual Process Time:</span>
                  <span className="font-semibold">72 hours average</span>
                </div>
                <div className="flex justify-between">
                  <span>Error Rate:</span>
                  <span className="font-semibold text-red-600">12%</span>
                </div>
                <div className="flex justify-between">
                  <span>Operational Costs:</span>
                  <span className="font-semibold">$240M annually</span>
                </div>
                <div className="flex justify-between">
                  <span>Customer Satisfaction:</span>
                  <span className="font-semibold text-yellow-600">78%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach focused on end-to-end automation across all critical business processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive process mapping</li>
                <li>• Bottleneck identification</li>
                <li>• Automation opportunity assessment</li>
                <li>• ROI projection modeling</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Integration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced neural network deployment</li>
                <li>• Machine learning model training</li>
                <li>• Real-time decision automation</li>
                <li>• Predictive maintenance systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Performance monitoring</li>
                <li>• Continuous improvement</li>
                <li>• Scalability enhancement</li>
                <li>• Quality assurance automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The implementation delivered unprecedented results across all key performance indicators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quantitative Results</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-lg font-medium text-gray-900">ROI Improvement</span>
                  <span className="text-2xl font-bold text-green-600">2,400%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="text-lg font-medium text-gray-900">Annual Cost Savings</span>
                  <span className="text-2xl font-bold text-blue-600">$180M</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <span className="text-lg font-medium text-gray-900">Efficiency Gain</span>
                  <span className="text-2xl font-bold text-purple-600">95%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="text-lg font-medium text-gray-900">Processing Speed</span>
                  <span className="text-2xl font-bold text-orange-600">15x faster</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <span className="text-lg font-medium text-gray-900">Error Reduction</span>
                  <span className="text-2xl font-bold text-red-600">99.2%</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Qualitative Impact</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Operational Excellence</h4>
                  <p className="text-gray-600">
                    Complete transformation of manufacturing processes with 24/7 automated operations 
                    and real-time quality monitoring.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Employee Satisfaction</h4>
                  <p className="text-gray-600">
                    Staff freed from repetitive tasks to focus on strategic initiatives, 
                    leading to 40% increase in job satisfaction.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Experience</h4>
                  <p className="text-gray-600">
                    Faster delivery times and improved product quality resulted in 
                    35% increase in customer satisfaction scores.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Competitive Advantage</h4>
                  <p className="text-gray-600">
                    Gained significant market share through superior operational efficiency 
                    and ability to scale rapidly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">"</div>
          <blockquote className="text-xl md:text-2xl mb-8 italic">
            "The AI automation implementation exceeded all our expectations. We achieved results 
            that seemed impossible just 12 months ago. The 2,400% ROI speaks for itself, but the 
            transformation in our operational capabilities is what truly sets us apart from competitors."
          </blockquote>
          <div className="text-lg">
            <div className="font-semibold">Sarah Chen</div>
            <div className="text-blue-200">Chief Technology Officer</div>
            <div className="text-blue-200">Global Manufacturing Leader</div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn how your organization can implement the same strategies that delivered 
            these remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}