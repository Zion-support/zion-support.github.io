import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Enterprise Transformation Case Study: 340% ROI in 6 Months',
  description: 'Discover how a Fortune 500 company achieved 340% ROI through AI transformation. Complete case study with implementation details, results, and lessons learned.',
  keywords: ['AI case study', 'enterprise AI', 'AI transformation', 'ROI', 'Fortune 500', 'AI implementation'],
};

export default function AIEnterpriseTransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Enterprise Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              How a Fortune 500 company achieved 340% ROI through strategic AI implementation 
              in just 6 months. Complete case study with implementation details and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#results"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                View Results
              </Link>
              <Link
                href="#implementation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
              >
                Implementation Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section id="results" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Results Achieved
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable impact and ROI achieved through AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">340%</div>
              <div className="text-lg font-semibold mb-2">ROI Achieved</div>
              <div className="text-sm opacity-90">In just 6 months</div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">$2.4M</div>
              <div className="text-lg font-semibold mb-2">Cost Savings</div>
              <div className="text-sm opacity-90">Annual reduction</div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg font-semibold mb-2">Process Automation</div>
              <div className="text-sm opacity-90">Manual tasks eliminated</div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-lg font-semibold mb-2">Faster Processing</div>
              <div className="text-sm opacity-90">Time reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Industry:</strong> Financial Services<br/>
                  <strong>Company Size:</strong> Fortune 500 (50,000+ employees)<br/>
                  <strong>Revenue:</strong> $15.2B annually<br/>
                  <strong>Challenge:</strong> Manual processes, high operational costs, slow decision making
                </p>
                <p>
                  The company was struggling with legacy systems and manual processes that were 
                  hindering growth and increasing operational costs. They needed a comprehensive 
                  AI solution to modernize their operations and improve efficiency.
                </p>
                <p>
                  Key pain points included:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Manual data processing taking 40+ hours per week</li>
                  <li>High error rates in financial calculations (12%)</li>
                  <li>Slow customer service response times (48+ hours)</li>
                  <li>Inefficient resource allocation and planning</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Before AI Implementation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Processing Time</span>
                  <span className="text-red-600 font-bold">40+ hours</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Error Rate</span>
                  <span className="text-red-600 font-bold">12%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Response Time</span>
                  <span className="text-red-600 font-bold">48+ hours</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Manual Tasks</span>
                  <span className="text-red-600 font-bold">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section id="implementation" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Strategy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 6-month AI transformation approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="text-2xl font-bold text-blue-600 mb-4">Phase 1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment & Planning</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Comprehensive process audit</p>
                <p>• Data quality analysis</p>
                <p>• ROI projections</p>
                <p>• Stakeholder alignment</p>
                <p>• Technology stack selection</p>
              </div>
              <div className="mt-4 text-sm text-blue-600 font-semibold">Duration: 4 weeks</div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600 mb-4">Phase 2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pilot Implementation</h3>
              <div className="space-y-3 text-gray-600">
                <p>• AI model development</p>
                <p>• Data pipeline setup</p>
                <p>• Integration testing</p>
                <p>• User training</p>
                <p>• Performance monitoring</p>
              </div>
              <div className="mt-4 text-sm text-green-600 font-semibold">Duration: 8 weeks</div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-500">
              <div className="text-2xl font-bold text-purple-600 mb-4">Phase 3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Full Deployment</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Enterprise-wide rollout</p>
                <p>• Advanced AI features</p>
                <p>• Continuous optimization</p>
                <p>• Change management</p>
                <p>• Success measurement</p>
              </div>
              <div className="mt-4 text-sm text-purple-600 font-semibold">Duration: 12 weeks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced AI technologies and tools used in the implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-sm text-gray-600">TensorFlow, PyTorch, Scikit-learn</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-gray-900 mb-2">Natural Language Processing</h3>
              <p className="text-sm text-gray-600">GPT-4, BERT, Transformers</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Processing</h3>
              <p className="text-sm text-gray-600">Apache Spark, Pandas, NumPy</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-3">☁️</div>
              <h3 className="font-bold text-gray-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-sm text-gray-600">AWS, Azure, Google Cloud</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results After Implementation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Results After Implementation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dramatic improvements achieved across all key metrics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Processing Time</span>
                  <span className="text-green-600 font-bold">16 hours (60% reduction)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Error Rate</span>
                  <span className="text-green-600 font-bold">0.8% (93% improvement)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Response Time</span>
                  <span className="text-green-600 font-bold">2 hours (96% improvement)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Manual Tasks</span>
                  <span className="text-green-600 font-bold">15% (82% automation)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Business Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Cost Savings</span>
                  <span className="text-green-600 font-bold">$2.4M annually</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Revenue Increase</span>
                  <span className="text-green-600 font-bold">$5.8M annually</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Customer Satisfaction</span>
                  <span className="text-green-600 font-bold">94% (up from 67%)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Employee Productivity</span>
                  <span className="text-green-600 font-bold">+45% improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Lessons Learned
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Critical insights from this successful AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Factors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Strong executive sponsorship and clear vision
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Comprehensive change management program
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Phased implementation approach
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Continuous monitoring and optimization
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Investment in employee training
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges Overcome</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">⚠</span>
                  Data quality and integration issues
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">⚠</span>
                  Resistance to change from employees
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">⚠</span>
                  Legacy system compatibility
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">⚠</span>
                  Regulatory compliance requirements
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">⚠</span>
                  Scalability and performance optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let us help you achieve similar results with AI transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/resources/ai-implementation-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}