import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import { ArrowLeft, Calendar, Clock, User, TrendingUp, DollarSign, Users, Zap } from 'lucide-react';

export default function Fortune500AITransformationSuccess() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Fortune 500 AI Transformation Success: $200M Savings Case Study"
        description="Discover how a Fortune 500 company achieved $200M in annual savings through comprehensive AI transformation. Learn the strategies, challenges, and results."
        keywords="Fortune 500 AI transformation, AI case study, enterprise AI, digital transformation, AI ROI, artificial intelligence success story"
        url="/case-studies/fortune-500-ai-transformation-success"
      />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center gap-4 text-sm mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Zion Tech Group</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Fortune 500</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">AI Transformation</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">$200M Savings</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Enterprise</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fortune 500 AI Transformation Success: $200M Annual Savings
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            How a global manufacturing leader achieved unprecedented results through comprehensive AI transformation, 
            reducing costs by $200M annually while improving efficiency and customer satisfaction.
          </p>
        </div>
      </header>

      {/* Case Study Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Executive Summary */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Executive Summary</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A Fortune 500 global manufacturing company with operations in 45 countries and 150,000 employees 
                embarked on a comprehensive AI transformation journey. Through strategic implementation of AI 
                technologies across supply chain, manufacturing, and customer service operations, the company 
                achieved remarkable results within 18 months.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">$200M</div>
                  <div className="text-sm text-gray-600">Annual Cost Savings</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">45%</div>
                  <div className="text-sm text-gray-600">Efficiency Improvement</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">18</div>
                  <div className="text-sm text-gray-600">Months to ROI</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">325%</div>
                  <div className="text-sm text-gray-600">Total ROI</div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Background */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🏢 Company Background</h2>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Organization Profile</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span><strong>Industry:</strong> Global Manufacturing & Distribution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span><strong>Revenue:</strong> $12.5B annually</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span><strong>Employees:</strong> 150,000+ globally</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span><strong>Operations:</strong> 45 countries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span><strong>Products:</strong> Industrial equipment, consumer goods</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Challenges</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Complex global supply chain with 60% manual processes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Equipment downtime costing $50M annually</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Customer service response times averaging 48 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Inventory management inefficiencies causing 15% waste</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Quality control issues resulting in 3% defect rate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* AI Transformation Strategy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🚀 AI Transformation Strategy</h2>
            
            <div className="grid gap-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Phase 1: Foundation & Assessment (Months 1-3)</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Strategic Initiatives</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Comprehensive AI readiness assessment across all divisions</li>
                      <li>• Data quality audit and governance framework establishment</li>
                      <li>• Executive AI steering committee formation</li>
                      <li>• Pilot project identification and prioritization</li>
                      <li>• Technology stack evaluation and selection</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Outcomes</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Identified 47 high-impact AI use cases</li>
                      <li>• Established data governance policies for 15TB of data</li>
                      <li>• Secured $150M budget allocation for AI initiatives</li>
                      <li>• Assembled 200-person cross-functional AI team</li>
                      <li>• Created 3-year AI transformation roadmap</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Phase 2: Pilot Implementation (Months 4-9)</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Supply Chain AI</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Demand forecasting with 92% accuracy</li>
                      <li>• Automated inventory optimization</li>
                      <li>• Route optimization for logistics</li>
                      <li>• Supplier risk assessment</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Manufacturing AI</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Predictive maintenance systems</li>
                      <li>• Quality control automation</li>
                      <li>• Production line optimization</li>
                      <li>• Energy consumption optimization</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Customer Service AI</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Intelligent chatbots and virtual assistants</li>
                      <li>• Automated ticket routing</li>
                      <li>• Sentiment analysis for feedback</li>
                      <li>• Proactive issue resolution</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Phase 3: Enterprise Rollout (Months 10-18)</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Scaling Strategy</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Gradual rollout across all 45 countries</li>
                      <li>• Integration with existing ERP and CRM systems</li>
                      <li>• Comprehensive employee training programs</li>
                      <li>• Continuous monitoring and optimization</li>
                      <li>• Change management and adoption tracking</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Advanced Capabilities</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Real-time decision-making systems</li>
                      <li>• Autonomous process optimization</li>
                      <li>• Cross-functional AI orchestration</li>
                      <li>• Advanced analytics and reporting</li>
                      <li>• Continuous learning and improvement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Results */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Implementation Results</h2>
            
            <div className="grid gap-8">
              {/* Supply Chain Results */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Supply Chain Optimization Results
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Demand Forecasting Accuracy</span>
                        <span className="font-bold text-green-600">92% (+15%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Inventory Turnover</span>
                        <span className="font-bold text-green-600">+35%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Logistics Costs</span>
                        <span className="font-bold text-green-600">-28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Supplier Lead Time</span>
                        <span className="font-bold text-green-600">-22%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Financial Impact</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Inventory Carrying Costs</span>
                        <span className="font-bold text-green-600">-$45M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Transportation Savings</span>
                        <span className="font-bold text-green-600">-$32M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Procurement Efficiency</span>
                        <span className="font-bold text-green-600">-$18M</span>
                      </div>
                      <div className="flex justify-between items-center border-t pt-2">
                        <span className="font-semibold text-gray-900">Total Supply Chain Savings</span>
                        <span className="font-bold text-green-600">-$95M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturing Results */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-green-600" />
                  Manufacturing Excellence Results
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Operational Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Equipment Uptime</span>
                        <span className="font-bold text-green-600">96% (+12%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Quality Defect Rate</span>
                        <span className="font-bold text-green-600">0.8% (-2.2%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Production Efficiency</span>
                        <span className="font-bold text-green-600">+28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Energy Consumption</span>
                        <span className="font-bold text-green-600">-19%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Financial Impact</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Maintenance Cost Reduction</span>
                        <span className="font-bold text-green-600">-$38M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Quality Cost Savings</span>
                        <span className="font-bold text-green-600">-$25M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Energy Cost Savings</span>
                        <span className="font-bold text-green-600">-$17M</span>
                      </div>
                      <div className="flex justify-between items-center border-t pt-2">
                        <span className="font-semibold text-gray-900">Total Manufacturing Savings</span>
                        <span className="font-bold text-green-600">-$80M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Service Results */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-600" />
                  Customer Service Transformation Results
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Service Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Response Time</span>
                        <span className="font-bold text-green-600">2.5 hours (-45.5 hours)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">First-Call Resolution</span>
                        <span className="font-bold text-green-600">78% (+25%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Customer Satisfaction</span>
                        <span className="font-bold text-green-600">4.7/5 (+1.2)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Agent Productivity</span>
                        <span className="font-bold text-green-600">+42%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Financial Impact</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Support Cost Reduction</span>
                        <span className="font-bold text-green-600">-$18M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Revenue Protection</span>
                        <span className="font-bold text-green-600">-$7M</span>
                      </div>
                      <div className="flex justify-between items-center border-t pt-2">
                        <span className="font-semibold text-gray-900">Total Customer Service Savings</span>
                        <span className="font-bold text-green-600">-$25M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 ROI Analysis & Financial Impact</h2>
            
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8">Investment vs. Returns</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Total Investment (18 months)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Technology Infrastructure</span>
                      <span>$45M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Personnel & Training</span>
                      <span>$38M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Consulting & Implementation</span>
                      <span>$25M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Change Management</span>
                      <span>$12M</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-semibold">Total Investment</span>
                      <span className="font-bold">$120M</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Annual Returns (Year 2+)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Supply Chain Savings</span>
                      <span>$95M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Manufacturing Savings</span>
                      <span>$80M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customer Service Savings</span>
                      <span>$25M</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-semibold">Total Annual Savings</span>
                      <span className="font-bold">$200M</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">ROI Calculation</h4>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">$200M</div>
                    <div className="text-sm opacity-90">Annual Benefits</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$120M</div>
                    <div className="text-sm opacity-90">Total Investment</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">18</div>
                    <div className="text-sm opacity-90">Months to Break-Even</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">325%</div>
                    <div className="text-sm opacity-90">3-Year ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lessons Learned */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🎓 Key Lessons Learned</h2>
            
            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Success Factors</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Executive Sponsorship:</strong> Strong C-level commitment was critical for overcoming organizational resistance</li>
                  <li>• <strong>Cross-Functional Teams:</strong> Business-IT collaboration accelerated implementation and adoption</li>
                  <li>• <strong>Pilot Approach:</strong> Starting with high-impact, low-risk use cases built confidence and momentum</li>
                  <li>• <strong>Change Management:</strong> Investing 15% of budget in training and communication was essential</li>
                  <li>• <strong>Data Quality:</strong> Addressing data issues early prevented costly delays later</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">⚠️ Challenges Overcome</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Legacy System Integration:</strong> Custom APIs and middleware solutions enabled seamless connectivity</li>
                  <li>• <strong>Skills Gap:</strong> Comprehensive training programs and strategic hiring addressed capability gaps</li>
                  <li>• <strong>Cultural Resistance:</strong> Change champions and success stories helped drive adoption</li>
                  <li>• <strong>Data Silos:</strong> Unified data platform and governance framework broke down barriers</li>
                  <li>• <strong>Scalability Concerns:</strong> Cloud-native architecture and microservices ensured growth readiness</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">🚀 Recommendations for Other Organizations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Start with Strategy:</strong> Define clear objectives and success metrics before technology selection</li>
                  <li>• <strong>Invest in Data:</strong> Data quality and governance are foundational to AI success</li>
                  <li>• <strong>Think Big, Start Small:</strong> Begin with pilot projects but plan for enterprise-wide transformation</li>
                  <li>• <strong>Focus on Adoption:</strong> Technical success means nothing without user adoption</li>
                  <li>• <strong>Measure Everything:</strong> Comprehensive metrics and monitoring enable continuous improvement</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Learn from this Fortune 500 success story and achieve similar results for your organization. 
                Get expert guidance and proven methodologies for AI transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Transformation Consultation
                </Link>
                <Link
                  href="/resources/fortune-500-ai-transformation-playbook"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Download Transformation Playbook
                </Link>
              </div>
            </div>
          </section>

          {/* Related Case Studies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/case-studies/ai-manufacturing-automation-success" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Manufacturing Automation Success
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How a mid-size manufacturer achieved 60% efficiency gains with AI automation.
                  </p>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-supply-chain-optimization" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Supply Chain Optimization
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Global logistics company reduces costs by 40% with AI-driven optimization.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}