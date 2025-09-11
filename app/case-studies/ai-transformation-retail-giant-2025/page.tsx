import React from 'react';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Transformation Case Study: 300% Revenue Growth in Retail | Zion Tech Group',
  description: 'Discover how a Fortune 500 retail company achieved 300% revenue growth through comprehensive AI transformation. Real results, strategies, and implementation insights.',
  keywords: 'AI transformation case study, retail AI, revenue growth, AI implementation, business transformation, retail automation',
  openGraph: {
    title: 'AI Transformation Case Study: 300% Revenue Growth in Retail',
    description: 'Discover how a Fortune 500 retail company achieved 300% revenue growth through comprehensive AI transformation.',
    type: 'article',
    publishedTime: '2025-01-28T00:00:00Z',
    authors: ['Zion Tech Group'],
  },
};

export default function RetailAITransformation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">📊 CASE STUDY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Transformation: 300% Revenue Growth
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How a Fortune 500 retail company achieved unprecedented growth through comprehensive 
              AI transformation, including customer personalization, supply chain optimization, and operational automation.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>15 min read</span>
              <span>•</span>
              <span>Published Jan 28, 2025</span>
              <span>•</span>
              <span>By Zion Tech Group</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Banner */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🏆 Transformation Results</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Measurable impact achieved through strategic AI implementation across all business functions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-sm opacity-90">Revenue Growth</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl font-bold mb-2">45%</div>
              <div className="text-sm opacity-90">Cost Reduction</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-sm opacity-90">Months to ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Executive Summary */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Executive Summary</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">The Challenge</h3>
                <p className="text-blue-800 mb-4">
                  A Fortune 500 retail company with 2,000+ stores and $15B annual revenue was facing 
                  declining sales, increasing operational costs, and intense competition from e-commerce giants. 
                  Traditional retail strategies were no longer sufficient to maintain market position.
                </p>
                <ul className="space-y-2 text-blue-800">
                  <li>• 15% decline in same-store sales over 2 years</li>
                  <li>• 25% increase in operational costs</li>
                  <li>• 30% customer churn rate</li>
                  <li>• Inefficient inventory management leading to $200M in waste</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-green-900 mb-4">The Solution</h3>
                <p className="text-green-800 mb-4">
                  Comprehensive AI transformation across customer experience, supply chain, operations, 
                  and decision-making processes, implemented over 18 months with phased rollout.
                </p>
                <ul className="space-y-2 text-green-800">
                  <li>• AI-powered customer personalization and recommendation engines</li>
                  <li>• Intelligent supply chain optimization and demand forecasting</li>
                  <li>• Automated inventory management and pricing optimization</li>
                  <li>• Predictive analytics for business intelligence and decision support</li>
                </ul>
              </div>
            </section>

            {/* Implementation Timeline */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">📅 Implementation Timeline</h2>
              
              <div className="space-y-8">
                {/* Phase 1 */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1: Foundation (Months 1-6)</h3>
                      <p className="text-gray-700 mb-4">
                        Established AI infrastructure, data governance, and pilot programs in select locations.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Data infrastructure modernization</li>
                            <li>• AI talent acquisition and training</li>
                            <li>• Customer data platform implementation</li>
                            <li>• Pilot store selection and setup</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Early Results:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• 20% improvement in data quality</li>
                            <li>• 15% reduction in pilot store costs</li>
                            <li>• 25% increase in customer engagement</li>
                            <li>• Foundation for scalable AI deployment</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2: Scale (Months 7-12)</h3>
                      <p className="text-gray-700 mb-4">
                        Expanded AI solutions across 500 stores, implemented advanced analytics, and optimized operations.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Rollout of personalization engine</li>
                            <li>• Supply chain optimization deployment</li>
                            <li>• Dynamic pricing implementation</li>
                            <li>• Customer service automation</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Scale Results:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• 150% revenue increase in pilot stores</li>
                            <li>• 35% reduction in inventory waste</li>
                            <li>• 40% improvement in customer satisfaction</li>
                            <li>• $50M in operational cost savings</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 3: Optimization (Months 13-18)</h3>
                      <p className="text-gray-700 mb-4">
                        Full deployment across all stores, advanced AI capabilities, and continuous optimization.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Complete store network deployment</li>
                            <li>• Advanced predictive analytics</li>
                            <li>• AI-driven business intelligence</li>
                            <li>• Continuous learning and optimization</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Final Results:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• 300% overall revenue growth</li>
                            <li>• 45% reduction in operational costs</li>
                            <li>• 85% customer satisfaction score</li>
                            <li>• $200M+ in total cost savings</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Solutions Implemented */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">🤖 AI Solutions Implemented</h2>
              
              <div className="space-y-8">
                {/* Customer Personalization */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Customer Personalization</h3>
                      <p className="text-gray-700 mb-4">
                        Advanced recommendation engine that analyzes customer behavior, preferences, and purchase history 
                        to deliver personalized product recommendations, offers, and experiences across all touchpoints.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-3">Technology Stack:</h4>
                          <ul className="space-y-2 text-blue-800">
                            <li>• Machine learning recommendation algorithms</li>
                            <li>• Real-time customer data processing</li>
                            <li>• Behavioral analytics and segmentation</li>
                            <li>• A/B testing and optimization platform</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-3">Business Impact:</h4>
                          <ul className="space-y-2 text-blue-800">
                            <li>• 250% increase in conversion rates</li>
                            <li>• 40% improvement in average order value</li>
                            <li>• 60% reduction in customer acquisition cost</li>
                            <li>• 35% increase in customer lifetime value</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supply Chain Optimization */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📦</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Supply Chain Optimization</h3>
                      <p className="text-gray-700 mb-4">
                        AI-driven demand forecasting, inventory optimization, and logistics management that 
                        reduces waste, improves efficiency, and ensures optimal product availability.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-900 mb-3">Key Features:</h4>
                          <ul className="space-y-2 text-green-800">
                            <li>• Predictive demand forecasting with 95% accuracy</li>
                            <li>• Dynamic inventory optimization</li>
                            <li>• Automated supplier management</li>
                            <li>• Real-time logistics tracking and optimization</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-900 mb-3">Operational Results:</h4>
                          <ul className="space-y-2 text-green-800">
                            <li>• 50% reduction in inventory waste</li>
                            <li>• 30% improvement in stock availability</li>
                            <li>• 25% reduction in logistics costs</li>
                            <li>• 99.5% on-time delivery rate</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Pricing */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Driven Dynamic Pricing</h3>
                      <p className="text-gray-700 mb-4">
                        Intelligent pricing system that adjusts prices in real-time based on demand, 
                        competition, inventory levels, and customer behavior to maximize revenue and profitability.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-3">Pricing Intelligence:</h4>
                          <ul className="space-y-2 text-purple-800">
                            <li>• Real-time market analysis and competitor monitoring</li>
                            <li>• Demand elasticity modeling</li>
                            <li>• Customer price sensitivity analysis</li>
                            <li>• Automated price optimization algorithms</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-3">Revenue Impact:</h4>
                          <ul className="space-y-2 text-purple-800">
                            <li>• 20% increase in gross margins</li>
                            <li>• 15% improvement in price competitiveness</li>
                            <li>• 25% reduction in markdowns</li>
                            <li>• $100M+ additional annual revenue</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operational Automation */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Process Automation</h3>
                      <p className="text-gray-700 mb-4">
                        Comprehensive automation of routine operational tasks including scheduling, 
                        reporting, customer service, and administrative processes to improve efficiency and reduce costs.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-orange-900 mb-3">Automation Areas:</h4>
                          <ul className="space-y-2 text-orange-800">
                            <li>• Employee scheduling and workforce optimization</li>
                            <li>• Automated customer service and support</li>
                            <li>• Financial reporting and analytics</li>
                            <li>• Store operations and maintenance</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-900 mb-3">Efficiency Gains:</h4>
                          <ul className="space-y-2 text-orange-800">
                            <li>• 70% reduction in manual administrative tasks</li>
                            <li>• 50% improvement in operational efficiency</li>
                            <li>• 40% reduction in labor costs</li>
                            <li>• 24/7 automated operations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Financial Impact */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Financial Impact Analysis</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Growth</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-700">Total Revenue Growth</span>
                      <span className="text-2xl font-bold text-green-600">300%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-700">Same-Store Sales Growth</span>
                      <span className="text-2xl font-bold text-blue-600">180%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium text-gray-700">Online Revenue Growth</span>
                      <span className="text-2xl font-bold text-purple-600">450%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                      <span className="font-medium text-gray-700">Average Order Value</span>
                      <span className="text-2xl font-bold text-orange-600">+40%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Cost Savings</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-700">Total Cost Reduction</span>
                      <span className="text-2xl font-bold text-green-600">45%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-700">Inventory Waste Reduction</span>
                      <span className="text-2xl font-bold text-blue-600">50%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium text-gray-700">Operational Cost Savings</span>
                      <span className="text-2xl font-bold text-purple-600">$200M</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                      <span className="font-medium text-gray-700">Customer Acquisition Cost</span>
                      <span className="text-2xl font-bold text-orange-600">-60%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">ROI Summary</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-green-600 mb-2">$2.1B</div>
                    <div className="text-gray-700">Additional Annual Revenue</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">$200M</div>
                    <div className="text-gray-700">Annual Cost Savings</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">850%</div>
                    <div className="text-gray-700">Total ROI</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Lessons Learned */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">🎓 Key Lessons Learned</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Success Factors</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Strong executive sponsorship and clear vision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Phased implementation with measurable milestones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Investment in data quality and infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Comprehensive change management and training</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">📊 Critical Metrics</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Customer satisfaction and retention rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Operational efficiency and cost reduction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Revenue growth and profitability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Employee productivity and satisfaction</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">⚠️ Challenges Overcome</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Data silos and integration complexity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Change resistance and skill gaps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Technology scalability and performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Regulatory compliance and data privacy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">🚀 Future Opportunities</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">→</span>
                        <span>Advanced predictive analytics and forecasting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">→</span>
                        <span>AI-powered product development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">→</span>
                        <span>Autonomous store operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">→</span>
                        <span>Enhanced customer experience personalization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
              <p className="text-lg opacity-90 mb-6">
                Learn how to achieve similar results in your organization. Our AI transformation experts 
                can help you develop and implement a comprehensive strategy tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get AI Transformation Consultation
                </Link>
                <Link
                  href="/resources/ai-transformation-playbook-2026"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Download Transformation Playbook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl">🏭</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Manufacturing AI Automation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How a Fortune 500 manufacturer achieved 40% cost reduction and 60% faster processing times.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Case Study</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-6xl">🏦</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Financial Services AI Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    $50M additional revenue and 40% cost reduction through comprehensive AI implementation.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Case Study</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-6xl">🏥</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Healthcare AI Diagnosis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    95% accuracy in medical diagnosis with 50% cost reduction in healthcare delivery.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Case Study</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}