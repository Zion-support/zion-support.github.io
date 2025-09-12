import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag, TrendingUp, Factory, Zap, Shield, Target, DollarSign, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Manufacturing Transformation: $2.3B Cost Savings Case Study',
  description: 'Discover how a Fortune 500 manufacturing company achieved $2.3B in cost savings and 400% efficiency gains through comprehensive AI transformation across their global operations.',
  keywords: 'AI manufacturing, AI transformation case study, manufacturing automation, AI cost savings, industrial AI, smart manufacturing',
  openGraph: {
    title: 'AI Manufacturing Transformation: $2.3B Cost Savings Case Study',
    description: 'Discover how a Fortune 500 manufacturing company achieved $2.3B in cost savings through AI transformation.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Manufacturing', 'Case Study', 'Transformation', 'Cost Savings']
  }
};

export default function AIManufacturingTransformation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6">
                <Factory className="w-4 h-4 mr-2" />
                Manufacturing AI Transformation
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI Manufacturing
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Transformation</span>
                <br />$2.3B Cost Savings
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                How a Fortune 500 manufacturing giant transformed their global operations with AI, 
                achieving unprecedented cost savings, efficiency gains, and competitive advantages 
                in just 18 months.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  January 17, 2025
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  12 min read
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Zion Tech Group
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#results" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  View Results
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  href="/resources/ai-manufacturing-implementation-guide-2025" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Implementation Guide
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Results</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <div className="text-sm text-gray-600">Total Cost Savings</div>
                      <div className="text-2xl font-bold text-green-600">$2.3B</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">ROI</div>
                    <div className="text-lg font-semibold text-green-600">1,240%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <div className="text-sm text-gray-600">Efficiency Gains</div>
                      <div className="text-2xl font-bold text-blue-600">400%</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Time to Value</div>
                    <div className="text-lg font-semibold text-blue-600">18 months</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <Target className="w-8 h-8 text-purple-600 mr-3" />
                    <div>
                      <div className="text-sm text-gray-600">Quality Improvement</div>
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Defect Reduction</div>
                    <div className="text-lg font-semibold text-purple-600">87%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Executive Summary</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Global Manufacturing Corp</strong> (name anonymized for confidentiality) is a Fortune 500 
              manufacturing company with operations across 47 countries, 156 facilities, and over 180,000 employees. 
              Facing increasing competition, rising costs, and supply chain disruptions, they embarked on a 
              comprehensive AI transformation initiative that would fundamentally reshape their operations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">47</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
                <div className="text-sm text-gray-600">Facilities</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">180K+</div>
                <div className="text-sm text-gray-600">Employees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Challenge</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Pressures</h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-red-50 rounded-lg">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Rising Operational Costs</h4>
                    <p className="text-red-700">Labor costs increased 23% over 3 years, while raw material costs rose 18%</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Supply Chain Disruptions</h4>
                    <p className="text-orange-700">COVID-19 and geopolitical tensions caused 34% increase in supply chain costs</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-yellow-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">Quality Issues</h4>
                    <p className="text-yellow-700">Defect rates were 2.3% higher than industry average, costing $180M annually</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">Competitive Pressure</h4>
                    <p className="text-purple-700">New AI-powered competitors were gaining market share with 40% lower costs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Financial Impact</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-gray-700">Annual Operating Costs</span>
                    <span className="text-red-600 font-bold">$8.7B</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-gray-700">Quality-Related Losses</span>
                    <span className="text-red-600 font-bold">$180M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-gray-700">Supply Chain Inefficiencies</span>
                    <span className="text-red-600 font-bold">$420M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-gray-700">Energy Waste</span>
                    <span className="text-red-600 font-bold">$95M</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                      <span className="font-bold text-gray-900">Total Annual Losses</span>
                      <span className="text-red-600 font-bold text-xl">$695M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The AI Solution</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Deployed AI-powered predictive maintenance, quality control, and production optimization across all facilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Predictive maintenance systems</li>
                <li>• Computer vision quality control</li>
                <li>• Real-time production optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain AI</h3>
              <p className="text-gray-600 mb-4">
                Implemented intelligent supply chain management with demand forecasting and automated logistics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Demand forecasting algorithms</li>
                <li>• Automated inventory management</li>
                <li>• Route optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Energy Optimization</h3>
              <p className="text-gray-600 mb-4">
                AI-driven energy management systems reduced consumption and optimized power usage across facilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Smart energy monitoring</li>
                <li>• Predictive energy optimization</li>
                <li>• Renewable energy integration</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">1</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Phase 1: Foundation (Months 1-6)</h4>
                  <p className="text-gray-600">Data infrastructure setup, pilot programs at 3 facilities, team training</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">2</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Phase 2: Scale (Months 7-12)</h4>
                  <p className="text-gray-600">Rollout to 50 facilities, supply chain AI implementation, energy optimization</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Phase 3: Optimization (Months 13-18)</h4>
                  <p className="text-gray-600">Full deployment across all facilities, advanced analytics, continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Results & Impact</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Financial Results</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Total Cost Savings</span>
                    <span className="text-2xl font-bold text-green-600">$2.3B</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Over 18 months</div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">ROI</span>
                    <span className="text-2xl font-bold text-blue-600">1,240%</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Return on investment</div>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Payback Period</span>
                    <span className="text-2xl font-bold text-purple-600">8 months</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Time to break even</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Operational Improvements</h3>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Efficiency Gains</span>
                    <span className="text-2xl font-bold text-orange-600">400%</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Overall productivity increase</div>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Defect Reduction</span>
                    <span className="text-2xl font-bold text-red-600">87%</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Quality improvement</div>
                </div>
                
                <div className="p-4 bg-teal-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Energy Savings</span>
                    <span className="text-2xl font-bold text-teal-600">35%</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Reduction in energy consumption</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Detailed Breakdown of Savings</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">$890M</div>
                <div className="text-sm text-gray-600 mb-1">Labor Optimization</div>
                <div className="text-xs text-gray-500">Automated processes & scheduling</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">$650M</div>
                <div className="text-sm text-gray-600 mb-1">Supply Chain</div>
                <div className="text-xs text-gray-500">Inventory & logistics optimization</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">$420M</div>
                <div className="text-sm text-gray-600 mb-1">Quality Improvements</div>
                <div className="text-xs text-gray-500">Reduced defects & rework</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">$340M</div>
                <div className="text-sm text-gray-600 mb-1">Energy & Maintenance</div>
                <div className="text-xs text-gray-500">Predictive maintenance & efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Learnings & Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Worked</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Executive sponsorship and clear vision from leadership</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Phased approach with quick wins to build momentum</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Comprehensive change management and training</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Data quality and infrastructure investment upfront</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Cross-functional teams with diverse expertise</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges Overcome</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span>Legacy system integration and data silos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span>Employee resistance to change and new technologies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span>Scaling AI solutions across diverse facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span>Measuring and attributing ROI to specific initiatives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span>Regulatory compliance and data privacy concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Manufacturing Operations?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let your competitors get ahead. Start your AI transformation journey today 
            and achieve similar results in your manufacturing operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/ai-manufacturing-implementation-guide-2025" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Manufacturing AI Guide
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-2xl mb-3">🏦</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Financial Services AI</h3>
                <p className="text-gray-600">$50M cost savings through AI transformation</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-retail-transformation-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-2xl mb-3">🛍️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Retail AI Success</h3>
                <p className="text-gray-600">300% efficiency gains in retail operations</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-2xl mb-3">🏥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Healthcare AI</h3>
                <p className="text-gray-600">95% accuracy in medical diagnosis</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}