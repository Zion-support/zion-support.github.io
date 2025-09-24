import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Factory, TrendingUp, CheckCircle, DollarSign, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Manufacturing Transformation: $75M Cost Savings Success Story',
  description: 'Discover how a global manufacturing company achieved $75M in annual savings and 85% efficiency gains through comprehensive AI transformation in 2025.',
  keywords: 'AI manufacturing, manufacturing transformation, AI case study, industrial AI, smart manufacturing',
  openGraph: {
    title: 'AI Manufacturing Transformation: $75M Cost Savings Success Story',
    description: 'Discover how a global manufacturing company achieved $75M in annual savings and 85% efficiency gains through comprehensive AI transformation in 2025.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AIManufacturingTransformation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Factory className="w-4 h-4 mr-2" />
              Manufacturing Case Study
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Manufacturing Transformation
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              How a global manufacturing leader achieved $75M in annual cost savings and 85% efficiency gains 
              through comprehensive AI transformation across their entire production ecosystem.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                22 min read
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Manufacturing AI
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                $75M Savings
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">$75M</div>
              <div className="text-sm text-gray-600">Annual Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Months to ROI</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Employees Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Executive Summary */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <p className="text-lg text-gray-700 mb-6">
              This case study examines the comprehensive AI transformation of a Fortune 500 manufacturing company 
              with operations across 15 countries. The 18-month initiative resulted in unprecedented operational 
              improvements and established a new benchmark for AI adoption in industrial manufacturing.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Key Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    $75M annual cost reduction achieved
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    85% improvement in production efficiency
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    94% reduction in equipment downtime
                  </li>
                </ul>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    78% improvement in quality metrics
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    67% reduction in waste generation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    12-month payback period
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Company Background */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manufacturing Giant Profile</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Company Overview</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Fortune 500 global manufacturer</li>
                    <li>• 15 countries, 50+ facilities</li>
                    <li>• 50,000+ employees worldwide</li>
                    <li>• $12B annual revenue</li>
                    <li>• 75+ years in operation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Challenges Faced</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Rising operational costs</li>
                    <li>• Equipment downtime issues</li>
                    <li>• Quality control inefficiencies</li>
                    <li>• Supply chain complexity</li>
                    <li>• Manual process dependencies</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* AI Implementation Strategy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Implementation Strategy</h2>
            
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 1: Foundation & Assessment (Months 1-3)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Activities</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Comprehensive facility audit</li>
                      <li>• Data infrastructure assessment</li>
                      <li>• Process mapping and analysis</li>
                      <li>• AI readiness evaluation</li>
                      <li>• Stakeholder alignment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Deliverables</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• AI transformation roadmap</li>
                      <li>• Technology architecture design</li>
                      <li>• Change management plan</li>
                      <li>• ROI projections and metrics</li>
                      <li>• Pilot project selection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 2: Pilot Implementation (Months 4-9)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Pilot Projects</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Predictive maintenance system</li>
                      <li>• Quality control automation</li>
                      <li>• Supply chain optimization</li>
                      <li>• Energy consumption management</li>
                      <li>• Workforce scheduling AI</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Results Achieved</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 40% reduction in maintenance costs</li>
                      <li>• 60% improvement in quality scores</li>
                      <li>• 35% supply chain efficiency gain</li>
                      <li>• 25% energy consumption reduction</li>
                      <li>• 50% scheduling optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 3: Full-Scale Deployment (Months 10-18)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Global Rollout</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Multi-facility implementation</li>
                      <li>• Cross-functional integration</li>
                      <li>• Advanced AI model deployment</li>
                      <li>• Real-time monitoring systems</li>
                      <li>• Continuous optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Final Outcomes</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• $75M annual cost savings</li>
                      <li>• 85% efficiency improvement</li>
                      <li>• 94% equipment uptime</li>
                      <li>• 78% quality enhancement</li>
                      <li>• 67% waste reduction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Solutions Implemented</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Predictive Maintenance AI</h3>
                <p className="text-blue-800 mb-4">
                  Advanced machine learning models analyze equipment sensor data to predict failures 
                  before they occur, enabling proactive maintenance and minimizing downtime.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">94%</div>
                    <div className="text-sm text-blue-700">Uptime Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$18M</div>
                    <div className="text-sm text-blue-700">Maintenance Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">72%</div>
                    <div className="text-sm text-blue-700">Failure Prediction Accuracy</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Quality Control Automation</h3>
                <p className="text-green-800 mb-4">
                  Computer vision and AI-powered inspection systems automatically detect defects 
                  and quality issues in real-time, ensuring consistent product quality.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">78%</div>
                    <div className="text-sm text-green-700">Quality Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$12M</div>
                    <div className="text-sm text-green-700">Defect Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-green-700">Detection Accuracy</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Supply Chain Optimization</h3>
                <p className="text-purple-800 mb-4">
                  AI algorithms optimize inventory levels, demand forecasting, and logistics 
                  to reduce costs and improve supply chain efficiency across all facilities.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">35%</div>
                    <div className="text-sm text-purple-700">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$22M</div>
                    <div className="text-sm text-purple-700">Inventory Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">89%</div>
                    <div className="text-sm text-purple-700">Forecast Accuracy</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">Energy Management AI</h3>
                <p className="text-orange-800 mb-4">
                  Smart energy management systems optimize power consumption across facilities, 
                  reducing costs and environmental impact through intelligent load balancing.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">25%</div>
                    <div className="text-sm text-orange-700">Energy Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">$8M</div>
                    <div className="text-sm text-orange-700">Energy Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">67%</div>
                    <div className="text-sm text-orange-700">Carbon Footprint Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Analysis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Return on Investment Analysis</h2>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Financial Impact Breakdown</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Investment Summary</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>AI Technology & Infrastructure:</span>
                        <span className="font-semibold">$45M</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Implementation & Training:</span>
                        <span className="font-semibold">$12M</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Change Management:</span>
                        <span className="font-semibold">$8M</span>
                      </li>
                      <li className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Total Investment:</span>
                        <span className="font-semibold text-lg">$65M</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Annual Savings</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Maintenance Cost Reduction:</span>
                        <span className="font-semibold text-green-600">$18M</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Quality Defect Savings:</span>
                        <span className="font-semibold text-green-600">$12M</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Supply Chain Optimization:</span>
                        <span className="font-semibold text-green-600">$22M</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Energy Cost Reduction:</span>
                        <span className="font-semibold text-green-600">$8M</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Operational Efficiency:</span>
                        <span className="font-semibold text-green-600">$15M</span>
                      </li>
                      <li className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Total Annual Savings:</span>
                        <span className="font-semibold text-lg text-green-600">$75M</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-green-900 mb-2">ROI Summary</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">115%</div>
                      <div className="text-sm text-green-700">First Year ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">12</div>
                      <div className="text-sm text-green-700">Months Payback</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$10M</div>
                      <div className="text-sm text-green-700">Net Annual Benefit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lessons Learned */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Lessons Learned</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4">✅ Success Factors</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Strong executive sponsorship and clear vision
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Comprehensive change management program
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Phased implementation approach
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Investment in employee training and development
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Robust data infrastructure and governance
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-4">⚠️ Challenges Overcome</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0">•</span>
                    Legacy system integration complexity
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0">•</span>
                    Data quality and standardization issues
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0">•</span>
                    Workforce resistance to change
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0">•</span>
                    Regulatory compliance requirements
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0">•</span>
                    Scalability across multiple facilities
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Manufacturing Operations?</h2>
              <p className="text-blue-100 mb-6">
                Our AI manufacturing experts can help you achieve similar results. 
                Let's discuss how AI can revolutionize your production processes and drive significant cost savings.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Start Your AI Transformation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  href="/services/manufacturing-ai" 
                  className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Our Services
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Financial Services Transformation
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover how a leading financial firm achieved $50M in savings through AI transformation.
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Healthcare Diagnosis Breakthrough
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn how AI is revolutionizing medical diagnosis and patient care.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}