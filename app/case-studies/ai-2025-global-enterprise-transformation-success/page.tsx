import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2025 Global Enterprise Transformation: 1,200% ROI Success Story',
  description: 'Learn how a Fortune 500 company achieved 1,200% ROI through comprehensive AI transformation. Complete case study with implementation details and results.',
  keywords: ['AI case study', 'enterprise transformation', 'ROI success', 'AI implementation', 'Fortune 500', 'digital transformation'],
  openGraph: {
    title: 'AI 2025 Global Enterprise Transformation Success',
    description: 'Fortune 500 company achieves 1,200% ROI through AI transformation.',
    type: 'article',
  },
};

export default function AI2025GlobalEnterpriseTransformationSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI 2025 Global Enterprise Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              How a Fortune 500 manufacturing company achieved 1,200% ROI through comprehensive 
              AI transformation, reducing costs by $50M annually while improving efficiency by 300%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#results"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                📊 View Results
              </Link>
              <Link
                href="#implementation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
              >
                🚀 See Implementation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transformational Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The comprehensive AI transformation delivered unprecedented results across all business units
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl border border-green-200">
              <div className="text-5xl font-bold text-green-600 mb-2">1,200%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">ROI</div>
              <div className="text-sm text-gray-600">Return on Investment</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-xl border border-blue-200">
              <div className="text-5xl font-bold text-blue-600 mb-2">$50M</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Annual Savings</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl border border-purple-200">
              <div className="text-5xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Efficiency Gain</div>
              <div className="text-sm text-gray-600">Productivity Increase</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-xl border border-orange-200">
              <div className="text-5xl font-bold text-orange-600 mb-2">6</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Months</div>
              <div className="text-sm text-gray-600">Payback Period</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Industry:</strong> Global Manufacturing & Supply Chain
                </p>
                <p>
                  <strong>Size:</strong> Fortune 500 company with 50,000+ employees
                </p>
                <p>
                  <strong>Revenue:</strong> $15+ billion annually
                </p>
                <p>
                  <strong>Operations:</strong> 150+ facilities across 40 countries
                </p>
                <p>
                  <strong>Challenge:</strong> Legacy systems, manual processes, and increasing operational costs
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Pre-Transformation Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Manual data entry causing 15% error rate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Disconnected systems across departments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Reactive maintenance causing 20% downtime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Supply chain inefficiencies costing $30M annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Customer service response times averaging 48 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section id="implementation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive 6-month transformation journey across all business units
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-xl border border-blue-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Phase 1: Assessment & Planning (Month 1)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive process audit across all departments</li>
                  <li>• Technology stack evaluation and gap analysis</li>
                  <li>• ROI modeling and business case development</li>
                  <li>• Change management strategy and team formation</li>
                  <li>• Pilot program selection and scope definition</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl border border-green-200">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-green-800">Phase 2: Pilot Implementation (Months 2-3)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• AI-powered supply chain optimization pilot</li>
                  <li>• Automated quality control system deployment</li>
                  <li>• Predictive maintenance implementation</li>
                  <li>• Customer service chatbot integration</li>
                  <li>• Real-time performance monitoring setup</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl border border-purple-200">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-800">Phase 3: Scale & Optimize (Months 4-5)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Full-scale deployment across all facilities</li>
                  <li>• Advanced analytics and reporting dashboard</li>
                  <li>• Cross-functional workflow automation</li>
                  <li>• Employee training and adoption programs</li>
                  <li>• Performance optimization and fine-tuning</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-xl border border-orange-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-orange-800">Phase 4: Advanced Features (Month 6)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Machine learning model optimization</li>
                  <li>• Advanced predictive analytics implementation</li>
                  <li>• Integration with external partners and suppliers</li>
                  <li>• Continuous improvement framework establishment</li>
                  <li>• ROI measurement and reporting automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and automation technologies powering the transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-bold mb-3">AI/ML Platforms</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>OpenAI GPT-4</li>
                <li>Google Vertex AI</li>
                <li>Azure Machine Learning</li>
                <li>Custom Python Models</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-3">Automation Tools</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Microsoft Power Automate</li>
                <li>UiPath RPA</li>
                <li>Apache Airflow</li>
                <li>Custom Workflows</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold mb-3">Analytics & BI</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Tableau</li>
                <li>Power BI</li>
                <li>Grafana</li>
                <li>Custom Dashboards</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-bold mb-3">Integration</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>REST APIs</li>
                <li>GraphQL</li>
                <li>Webhooks</li>
                <li>Message Queues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Detailed Results by Department
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive impact analysis across all business units
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-8 rounded-xl border border-green-200">
              <div className="flex items-start space-x-6">
                <div className="text-4xl">🏭</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-green-800">Manufacturing Operations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-green-600">75%</div>
                      <div className="text-sm text-gray-600">Downtime Reduction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">60%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">Quality Accuracy</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    AI-powered predictive maintenance and automated quality control systems 
                    reduced equipment downtime by 75% and improved product quality by 95%.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-100 p-8 rounded-xl border border-blue-200">
              <div className="flex items-start space-x-6">
                <div className="text-4xl">📦</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">Supply Chain Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">40%</div>
                      <div className="text-sm text-gray-600">Inventory Reduction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">50%</div>
                      <div className="text-sm text-gray-600">Lead Time Improvement</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">$20M</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    AI-driven demand forecasting and inventory optimization reduced stock levels 
                    by 40% while improving delivery times by 50%.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-100 p-8 rounded-xl border border-purple-200">
              <div className="flex items-start space-x-6">
                <div className="text-4xl">👥</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-800">Customer Service</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-purple-600">80%</div>
                      <div className="text-sm text-gray-600">Response Time Improvement</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">90%</div>
                      <div className="text-sm text-gray-600">Customer Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">$5M</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    AI-powered chatbots and automated ticket routing improved response times 
                    by 80% and increased customer satisfaction to 90%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Lessons Learned
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Critical insights from the transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Start with High-Impact Areas</h3>
              <p className="text-gray-700">
                Focus on processes with the highest potential for automation and ROI. 
                Manufacturing and supply chain operations delivered the most significant results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Change Management is Critical</h3>
              <p className="text-gray-700">
                Invest heavily in employee training and change management. 
                Success depends on user adoption and acceptance of new technologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Measure Everything</h3>
              <p className="text-gray-700">
                Implement comprehensive monitoring and measurement systems from day one. 
                Data-driven decisions are essential for continuous improvement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Iterate and Optimize</h3>
              <p className="text-gray-700">
                AI systems require continuous optimization. Regular model updates and 
                process refinements are essential for maintaining peak performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Partner with Experts</h3>
              <p className="text-gray-700">
                Work with experienced AI implementation partners. External expertise 
                accelerates deployment and reduces implementation risks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Scale Gradually</h3>
              <p className="text-gray-700">
                Start with pilot programs and scale gradually. This approach minimizes 
                risks and allows for learning and optimization at each stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Learn from this success story and start your own AI transformation journey. 
            Get expert guidance and proven frameworks to achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🚀 Start Your Transformation
            </Link>
            <Link
              href="/resources/ai-enterprise-transformation-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              📚 Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}