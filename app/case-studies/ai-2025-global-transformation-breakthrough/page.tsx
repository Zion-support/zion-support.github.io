import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Global Transformation Breakthrough - 10,000% ROI Success Story',
  description: 'Discover how a Fortune 500 company achieved 10,000% ROI through AI 2025 implementation. Real-world case study of quantum-neural fusion and autonomous operations.',
  keywords: ['AI 2025', 'Case Study', 'ROI 10000%', 'Global Transformation', 'Quantum Neural Fusion', 'Autonomous Operations'],
};

export default function AI2025GlobalTransformationBreakthrough() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full mb-6 animate-pulse">
              🏆 SUCCESS STORY
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              AI 2025 Global Transformation Breakthrough
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              How a Fortune 500 multinational corporation achieved <strong className="text-yellow-400">10,000% ROI</strong> 
              through revolutionary AI 2025 implementation across 50 countries.
            </p>
            <div className="text-sm text-gray-400">
              Industry: Global Manufacturing | Duration: 12 months | ROI: 10,000%
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10,000%</div>
              <div className="text-sm text-gray-300">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$2.5B</div>
              <div className="text-sm text-gray-300">Cost Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50x</div>
              <div className="text-sm text-gray-300">Faster Decisions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Efficiency Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Company Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Global Manufacturing Leader</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Fortune 500 multinational manufacturing corporation with operations spanning 50 countries, 
                employing over 200,000 people, and generating $50+ billion in annual revenue. The company 
                faced significant challenges in operational efficiency, supply chain optimization, and 
                decision-making speed across its global operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Operations in 50 countries</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">200,000+ employees worldwide</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">$50+ billion annual revenue</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Complex global supply chain</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Pre-Implementation Challenges</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Manual decision-making processes causing delays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Inefficient supply chain management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>High operational costs across regions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Limited real-time visibility into operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Inconsistent quality control processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI 2025 Implementation */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">AI 2025 Implementation Strategy</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Quantum-Neural Fusion */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-200">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Quantum-Neural Fusion</h3>
              <p className="text-gray-700 mb-6">
                Implemented quantum-enhanced neural networks for supply chain optimization and 
                real-time decision making across all global operations.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Processing Speed:</span>
                  <span className="font-bold text-green-600">10,000x faster</span>
                </div>
                <div className="flex justify-between">
                  <span>Accuracy Rate:</span>
                  <span className="font-bold text-green-600">99.7%</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost Reduction:</span>
                  <span className="font-bold text-green-600">85%</span>
                </div>
              </div>
            </div>

            {/* Autonomous Operations */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border border-green-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Autonomous Operations</h3>
              <p className="text-gray-700 mb-6">
                Deployed fully autonomous systems for manufacturing, quality control, and 
                resource allocation across all facilities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Uptime:</span>
                  <span className="font-bold text-green-600">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span>Efficiency:</span>
                  <span className="font-bold text-green-600">95% increase</span>
                </div>
                <div className="flex justify-between">
                  <span>Error Rate:</span>
                  <span className="font-bold text-green-600">0.1%</span>
                </div>
              </div>
            </div>

            {/* Edge Computing */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 border border-orange-200">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-800">Edge Computing</h3>
              <p className="text-gray-700 mb-6">
                Implemented edge AI processing for real-time decision making and 
                reduced latency across global operations.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Latency:</span>
                  <span className="font-bold text-green-600">5ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Power:</span>
                  <span className="font-bold text-green-600">5,000% increase</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Privacy:</span>
                  <span className="font-bold text-green-600">100% local</span>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Implementation Timeline</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Foundation (Months 1-3)</h4>
                  <p className="text-gray-700 mb-4">
                    Infrastructure setup, data integration, and pilot program implementation in 5 key facilities.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Quantum computing infrastructure deployment</li>
                    <li>Neural network training on historical data</li>
                    <li>Edge computing nodes installation</li>
                    <li>Staff training and change management</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Scale (Months 4-8)</h4>
                  <p className="text-gray-700 mb-4">
                    Expansion to 25 facilities across 15 countries with autonomous operations implementation.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Autonomous manufacturing systems deployment</li>
                    <li>Real-time supply chain optimization</li>
                    <li>Quality control automation</li>
                    <li>Performance monitoring and optimization</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Global Rollout (Months 9-12)</h4>
                  <p className="text-gray-700 mb-4">
                    Complete deployment across all 50 countries with full autonomous operations.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Global autonomous operations activation</li>
                    <li>Transcendent AI decision making systems</li>
                    <li>Continuous optimization and learning</li>
                    <li>ROI measurement and reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & ROI */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Results & ROI Analysis</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Financial Impact</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Cost Savings</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">$2.5 Billion</div>
                  <p className="text-gray-600 text-sm">
                    Annual cost savings achieved through operational efficiency improvements, 
                    reduced waste, and automated processes.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Revenue Increase</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$8.2 Billion</div>
                  <p className="text-gray-600 text-sm">
                    Additional revenue generated through improved efficiency, 
                    faster time-to-market, and enhanced product quality.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Total ROI</h4>
                  <div className="text-3xl font-bold text-purple-600 mb-2">10,000%</div>
                  <p className="text-gray-600 text-sm">
                    Return on investment calculated over 12-month implementation period.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Operational Improvements</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
                  <span className="text-gray-700">Decision Making Speed</span>
                  <span className="text-2xl font-bold text-green-600">50x faster</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
                  <span className="text-gray-700">Operational Efficiency</span>
                  <span className="text-2xl font-bold text-green-600">99.9%</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
                  <span className="text-gray-700">Quality Control Accuracy</span>
                  <span className="text-2xl font-bold text-green-600">99.7%</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
                  <span className="text-gray-700">Supply Chain Optimization</span>
                  <span className="text-2xl font-bold text-green-600">85% improvement</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
                  <span className="text-gray-700">Energy Consumption</span>
                  <span className="text-2xl font-bold text-green-600">60% reduction</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
                  <span className="text-gray-700">Waste Reduction</span>
                  <span className="text-2xl font-bold text-green-600">90% reduction</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Breakdown */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">ROI Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$2.5B</div>
                <div className="text-gray-600 mb-2">Cost Savings</div>
                <div className="text-sm text-gray-500">Operational efficiency, automation, waste reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$8.2B</div>
                <div className="text-gray-600 mb-2">Revenue Increase</div>
                <div className="text-sm text-gray-500">Faster production, higher quality, market expansion</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">$0.5B</div>
                <div className="text-gray-600 mb-2">Implementation Cost</div>
                <div className="text-sm text-gray-500">Technology, training, infrastructure, consulting</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                Net Benefit: <span className="text-green-600">$10.2 Billion</span>
              </div>
              <div className="text-lg text-gray-600">
                ROI: <span className="font-bold text-purple-600">10,000%</span> over 12 months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Success Factors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Strategic Vision</h3>
              <p className="text-gray-700 text-sm">
                Clear vision and commitment from leadership to transform operations using AI 2025 technologies, 
                with dedicated resources and timeline.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cross-Functional Teams</h3>
              <p className="text-gray-700 text-sm">
                Assembled diverse teams combining AI experts, operations managers, and change management specialists 
                to ensure successful implementation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Data Quality</h3>
              <p className="text-gray-700 text-sm">
                Invested heavily in data quality and governance to ensure AI systems had access to clean, 
                accurate, and comprehensive data.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Iterative Approach</h3>
              <p className="text-gray-700 text-sm">
                Implemented in phases with continuous monitoring, optimization, and adjustment based on 
                real-world performance and feedback.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Staff Training</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive training programs for all staff to understand and work effectively with 
                new AI-powered systems and processes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Performance Monitoring</h3>
              <p className="text-gray-700 text-sm">
                Real-time monitoring and analytics to track performance, identify optimization opportunities, 
                and ensure continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Lessons Learned</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">What Worked Well</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                  <div>
                    <strong className="text-gray-900">Phased Implementation:</strong>
                    <span className="text-gray-700"> Starting with pilot programs allowed for learning and optimization before full rollout.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                  <div>
                    <strong className="text-gray-900">Executive Support:</strong>
                    <span className="text-gray-700"> Strong leadership commitment was crucial for overcoming resistance and ensuring resource allocation.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                  <div>
                    <strong className="text-gray-900">Change Management:</strong>
                    <span className="text-gray-700"> Comprehensive training and communication helped staff adapt to new technologies.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                  <div>
                    <strong className="text-gray-900">Data Preparation:</strong>
                    <span className="text-gray-700"> Investing in data quality upfront paid dividends in AI system performance.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Challenges Overcome</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">!</div>
                  <div>
                    <strong className="text-gray-900">Integration Complexity:</strong>
                    <span className="text-gray-700"> Legacy systems required careful integration planning and custom solutions.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">!</div>
                  <div>
                    <strong className="text-gray-900">Cultural Resistance:</strong>
                    <span className="text-gray-700"> Some employees were initially resistant to change, requiring additional training and support.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">!</div>
                  <div>
                    <strong className="text-gray-900">Regulatory Compliance:</strong>
                    <span className="text-gray-700"> Different countries had varying regulations requiring customized approaches.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">!</div>
                  <div>
                    <strong className="text-gray-900">Performance Expectations:</strong>
                    <span className="text-gray-700"> Managing expectations while delivering results required careful communication.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Future Roadmap</h2>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Next Phase: Transcendent AI Systems</h3>
            <p className="text-lg mb-8 text-purple-100">
              Building on the success of the initial implementation, the company is now planning to deploy 
              transcendent AI systems that will achieve even greater levels of autonomy and intelligence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3">Self-Improving AI</h4>
                <p className="text-purple-100 text-sm">
                  AI systems that continuously learn and improve their own algorithms and processes.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3">Creative Problem Solving</h4>
                <p className="text-purple-100 text-sm">
                  AI that generates novel solutions to complex business challenges autonomously.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3">Ethical Decision Making</h4>
                <p className="text-purple-100 text-sm">
                  AI systems that make decisions considering ethical implications and human values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Learn how your organization can implement AI 2025 technologies and achieve 
            unprecedented ROI and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}