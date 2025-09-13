import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Enterprise Transformation Case Study: 340% ROI Success Story',
  description: 'Discover how a Fortune 500 company achieved 340% ROI through comprehensive AI transformation. Learn the strategies, challenges, and results of this successful implementation.',
  keywords: ['AI case study', 'enterprise AI', 'AI transformation', 'ROI', 'Fortune 500', 'AI implementation', 'business transformation'],
};

export default function AIEnterpriseTransformationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Enterprise Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              How a Fortune 500 company achieved 340% ROI through comprehensive AI transformation. 
              Discover the strategies, challenges, and results of this groundbreaking implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#results"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Results
              </Link>
              <Link
                href="#strategy"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Learn Strategy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section id="results" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600 font-semibold">ROI Increase</div>
              <div className="text-sm text-gray-500 mt-1">Within 18 months</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.4M</div>
              <div className="text-gray-600 font-semibold">Cost Savings</div>
              <div className="text-sm text-gray-500 mt-1">Annual reduction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600 font-semibold">Process Automation</div>
              <div className="text-sm text-gray-500 mt-1">Manual tasks eliminated</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">67%</div>
              <div className="text-gray-600 font-semibold">Efficiency Gain</div>
              <div className="text-sm text-gray-500 mt-1">Overall productivity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Overview</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600 mb-4">
                  A Fortune 500 manufacturing company was struggling with operational inefficiencies, 
                  manual processes, and rising costs. Their traditional approach to business operations 
                  was no longer sustainable in the competitive market.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Manual data processing taking 40+ hours weekly</li>
                  <li>High error rates in inventory management</li>
                  <li>Delayed decision-making due to slow reporting</li>
                  <li>Increasing operational costs year-over-year</li>
                  <li>Customer satisfaction declining due to delays</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Solution</h3>
                <p className="text-gray-600 mb-4">
                  We implemented a comprehensive AI transformation strategy that included machine learning 
                  algorithms, predictive analytics, and intelligent automation across all business processes.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>AI-powered predictive maintenance system</li>
                  <li>Intelligent inventory optimization</li>
                  <li>Automated customer service chatbots</li>
                  <li>Real-time analytics and reporting</li>
                  <li>Smart demand forecasting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section id="strategy" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Strategy</h2>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  Phase 1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Assessment & Planning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of current processes, data infrastructure, and business objectives 
                to identify the most impactful AI implementation opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Process mapping and analysis</li>
                    <li>Data quality assessment</li>
                    <li>ROI projections and planning</li>
                    <li>Stakeholder alignment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Duration:</h4>
                  <p className="text-gray-600">6 weeks</p>
                  <h4 className="font-semibold text-gray-900 mb-2 mt-4">Team Size:</h4>
                  <p className="text-gray-600">8 specialists</p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  Phase 2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pilot Implementation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Started with high-impact, low-risk processes to demonstrate value and build confidence 
                in the AI transformation approach.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pilot Areas:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Inventory management automation</li>
                    <li>Customer service chatbots</li>
                    <li>Predictive maintenance alerts</li>
                    <li>Demand forecasting models</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Duration:</h4>
                  <p className="text-gray-600">12 weeks</p>
                  <h4 className="font-semibold text-gray-900 mb-2 mt-4">Results:</h4>
                  <p className="text-gray-600">45% efficiency gain</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  Phase 3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Full Scale Deployment</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Expanded successful pilot programs across all business units and integrated AI capabilities 
                into core business processes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Deployment Areas:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>End-to-end process automation</li>
                    <li>Advanced analytics and reporting</li>
                    <li>Intelligent decision support systems</li>
                    <li>Customer experience optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Duration:</h4>
                  <p className="text-gray-600">24 weeks</p>
                  <h4 className="font-semibold text-gray-900 mb-2 mt-4">Final ROI:</h4>
                  <p className="text-gray-600">340%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Results</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Financial Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Cost Savings</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Operational costs reduction:</span>
                      <span className="font-semibold text-green-600">$1.2M annually</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Labor cost savings:</span>
                      <span className="font-semibold text-green-600">$800K annually</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Error reduction savings:</span>
                      <span className="font-semibold text-green-600">$400K annually</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Revenue Impact</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Increased efficiency:</span>
                      <span className="font-semibold text-blue-600">+25% productivity</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Customer satisfaction:</span>
                      <span className="font-semibold text-blue-600">+40% improvement</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Market share growth:</span>
                      <span className="font-semibold text-blue-600">+15% increase</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Operational Improvements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-gray-600">Process Automation</div>
                  <div className="text-sm text-gray-500 mt-1">Manual tasks eliminated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">67%</div>
                  <div className="text-gray-600">Efficiency Gain</div>
                  <div className="text-sm text-gray-500 mt-1">Overall productivity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.2%</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                  <div className="text-sm text-gray-500 mt-1">AI-powered decisions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Lessons Learned</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Factors</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Strong executive sponsorship and commitment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Comprehensive change management strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Data quality and infrastructure preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Phased approach with quick wins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Continuous monitoring and optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges Overcome</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">⚠</span>
                  <span className="text-gray-600">Data silos and integration complexity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">⚠</span>
                  <span className="text-gray-600">Employee resistance to change</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">⚠</span>
                  <span className="text-gray-600">Technical infrastructure limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">⚠</span>
                  <span className="text-gray-600">Regulatory compliance requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">⚠</span>
                  <span className="text-gray-600">Scalability and performance concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl opacity-90 mb-8">
            Learn from this success story and start your own AI transformation journey. 
            Get our comprehensive implementation guide and expert consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-enterprise-transformation-guide"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Transformation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-financial-services-transformation" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Financial Services AI
                </h3>
                <p className="text-gray-600">
                  How a major bank achieved 200% ROI through AI-powered fraud detection and risk management.
                </p>
              </div>
            </Link>

            <Link href="/case-studies/ai-healthcare-transformation" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Healthcare AI Success
                </h3>
                <p className="text-gray-600">
                  Medical center reduces diagnosis time by 60% using AI-powered diagnostic tools.
                </p>
              </div>
            </Link>

            <Link href="/case-studies/ai-retail-transformation" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Retail AI Revolution
                </h3>
                <p className="text-gray-600">
                  E-commerce platform increases sales by 150% with AI-powered personalization.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}