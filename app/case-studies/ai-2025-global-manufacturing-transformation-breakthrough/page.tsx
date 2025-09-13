import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Global Manufacturing Transformation: $2.4B Savings Case Study',
  description: 'How a Fortune 100 manufacturing company achieved $2.4B in annual savings and 850% ROI through AI automation. Complete case study with implementation details, results, and lessons learned.',
  keywords: ['manufacturing AI', 'industrial automation', 'AI case study', 'Fortune 100', 'supply chain AI', 'manufacturing transformation', 'ROI case study'],
  openGraph: {
    title: 'AI 2025 Global Manufacturing Transformation: $2.4B Savings',
    description: 'Fortune 100 manufacturing company achieves $2.4B annual savings through AI automation.',
    type: 'article',
  },
};

export default function GlobalManufacturingTransformation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY - JANUARY 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Global Manufacturing Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              How a Fortune 100 manufacturing company achieved $2.4B in annual savings and 850% ROI 
              through comprehensive AI automation across their entire supply chain and operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">$2.4B</div>
                <div className="text-lg">Annual Savings</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">850%</div>
                <div className="text-lg">ROI Achieved</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-lg">Process Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Executive Summary</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">The Challenge</h3>
                <p className="text-gray-700 mb-4">
                  A Fortune 100 global manufacturing company with operations across 50+ countries was facing 
                  significant operational inefficiencies, supply chain disruptions, and rising costs. With 
                  $50B+ in annual revenue, even small improvements could yield massive returns.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Supply chain visibility gaps across 200+ facilities</li>
                  <li>Manual processes causing 15% operational waste</li>
                  <li>Predictive maintenance failures costing $500M annually</li>
                  <li>Inventory optimization challenges with $2B+ in excess stock</li>
                  <li>Quality control issues affecting customer satisfaction</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">The Solution</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive AI automation implementation across supply chain, manufacturing, and quality 
                  control processes using advanced machine learning models and real-time data analytics.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>AI-powered supply chain optimization</li>
                  <li>Predictive maintenance with 99.7% accuracy</li>
                  <li>Intelligent inventory management</li>
                  <li>Automated quality control systems</li>
                  <li>Real-time operational dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Company Background</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Company Profile</h3>
              <ul className="space-y-2 text-blue-800">
                <li><strong>Industry:</strong> Global Manufacturing</li>
                <li><strong>Revenue:</strong> $50B+ annually</li>
                <li><strong>Employees:</strong> 150,000+ worldwide</li>
                <li><strong>Facilities:</strong> 200+ across 50+ countries</li>
                <li><strong>Products:</strong> Industrial equipment & components</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-900">Pre-Implementation</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Operational Waste:</strong> 15% of total costs</li>
                <li><strong>Maintenance Costs:</strong> $500M annually</li>
                <li><strong>Inventory Value:</strong> $8B+ in excess stock</li>
                <li><strong>Quality Issues:</strong> 3.2% defect rate</li>
                <li><strong>Supply Chain Delays:</strong> 12% of orders</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Post-Implementation</h3>
              <ul className="space-y-2 text-purple-800">
                <li><strong>Operational Waste:</strong> 2% of total costs</li>
                <li><strong>Maintenance Costs:</strong> $50M annually</li>
                <li><strong>Inventory Value:</strong> $2B optimized</li>
                <li><strong>Quality Issues:</strong> 0.3% defect rate</li>
                <li><strong>Supply Chain Delays:</strong> 1% of orders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Implementation Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Phase 1: Assessment & Planning</h3>
                    <p className="text-gray-600 mb-2">Months 1-3</p>
                    <p className="text-sm text-gray-700">
                      Comprehensive process audit, data analysis, and strategic planning. 
                      Identified 47 automation opportunities across supply chain and manufacturing.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold z-10">1</div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">2</div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-green-600">Phase 2: Pilot Implementation</h3>
                    <p className="text-gray-600 mb-2">Months 4-6</p>
                    <p className="text-sm text-gray-700">
                      Deployed AI solutions in 3 pilot facilities. Achieved 40% efficiency gains 
                      and 60% cost reduction in pilot locations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Phase 3: Full Deployment</h3>
                    <p className="text-gray-600 mb-2">Months 7-12</p>
                    <p className="text-sm text-gray-700">
                      Scaled AI solutions across all 200+ facilities. Implemented real-time 
                      monitoring and optimization systems.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold z-10">3</div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-semibold z-10">4</div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Phase 4: Optimization</h3>
                    <p className="text-gray-600 mb-2">Months 13-18</p>
                    <p className="text-sm text-gray-700">
                      Fine-tuned AI models, expanded capabilities, and achieved full ROI. 
                      Implemented advanced predictive analytics and autonomous decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">$2.4B</div>
              <div className="text-lg font-semibold mb-1">Annual Savings</div>
              <div className="text-sm opacity-90">Cost reduction achieved</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">850%</div>
              <div className="text-lg font-semibold mb-1">ROI Achieved</div>
              <div className="text-sm opacity-90">Return on investment</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg font-semibold mb-1">Process Accuracy</div>
              <div className="text-sm opacity-90">Automation precision</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-lg font-semibold mb-1">Months</div>
              <div className="text-sm opacity-90">Implementation time</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Financial Impact</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Annual Cost Savings</span>
                  <span className="font-semibold text-green-600">$2.4B</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">ROI Achieved</span>
                  <span className="font-semibold text-green-600">850%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Payback Period</span>
                  <span className="font-semibold text-green-600">8 months</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">NPV (5 years)</span>
                  <span className="font-semibold text-green-600">$12.8B</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Operational Impact</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Process Efficiency</span>
                  <span className="font-semibold text-blue-600">+87%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Quality Improvement</span>
                  <span className="font-semibold text-blue-600">+91%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Supply Chain Visibility</span>
                  <span className="font-semibold text-blue-600">+95%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Predictive Accuracy</span>
                  <span className="font-semibold text-blue-600">99.7%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Implementation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">AI Technologies Used</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Machine Learning Models</li>
                <li>• Deep Learning Networks</li>
                <li>• Computer Vision Systems</li>
                <li>• Natural Language Processing</li>
                <li>• Predictive Analytics</li>
                <li>• Real-time Data Processing</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Data Infrastructure</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cloud-based Data Lakes</li>
                <li>• Real-time Streaming</li>
                <li>• Data Quality Management</li>
                <li>• API Integration</li>
                <li>• Edge Computing</li>
                <li>• Security & Compliance</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Implementation Approach</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Agile Methodology</li>
                <li>• Phased Rollout</li>
                <li>• Change Management</li>
                <li>• Training Programs</li>
                <li>• Continuous Monitoring</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Lessons Learned</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Success Factors</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Executive Leadership:</strong> Strong C-level support was crucial for success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Data Quality:</strong> Clean, accurate data was the foundation of success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Change Management:</strong> Comprehensive training and support for teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Phased Approach:</strong> Starting small and scaling gradually reduced risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Continuous Monitoring:</strong> Real-time performance tracking enabled quick adjustments</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Challenges Overcome</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠</span>
                  <span><strong>Data Integration:</strong> Legacy systems required custom integration solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠</span>
                  <span><strong>Change Resistance:</strong> Some teams initially resisted automation changes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠</span>
                  <span><strong>Scalability:</strong> Scaling from pilot to full deployment required careful planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠</span>
                  <span><strong>Performance Optimization:</strong> Fine-tuning AI models for optimal performance took time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠</span>
                  <span><strong>Compliance:</strong> Ensuring regulatory compliance across all regions was complex</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Future Roadmap</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Building on the success of this implementation, the company has outlined an ambitious roadmap 
              for continued AI innovation and expansion:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Next 12 Months</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Advanced predictive maintenance across all equipment</li>
                  <li>• Autonomous quality control systems</li>
                  <li>• AI-powered demand forecasting</li>
                  <li>• Intelligent supply chain optimization</li>
                  <li>• Real-time performance dashboards</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Next 24 Months</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fully autonomous manufacturing lines</li>
                  <li>• AI-driven product design optimization</li>
                  <li>• Advanced customer personalization</li>
                  <li>• Predictive market analysis</li>
                  <li>• Integration with IoT and edge computing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Learn how your company can achieve similar results with AI automation. 
            Get your free consultation and implementation roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}