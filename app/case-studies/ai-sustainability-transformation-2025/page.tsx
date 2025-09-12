import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Leaf, TrendingUp, CheckCircle, Award, Target } from 'lucide-react';

export default function AISustainabilityTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center gap-4 text-sm mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              January 10, 2025
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 min read
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Zion Tech Group
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Sustainability Transformation: 60% Energy Reduction and Carbon Neutrality Achieved
          </h1>
          
          <p className="text-xl opacity-90 mb-8">
            How EcoManufacturing Corp achieved carbon neutrality and 60% energy reduction through AI-powered sustainability initiatives, 
            saving $15M annually while building a greener future.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              <BookOpen className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              EcoManufacturing Corp, a Fortune 500 industrial company, achieved remarkable sustainability milestones through 
              comprehensive AI implementation. By leveraging AI for energy optimization, waste reduction, and carbon tracking, 
              the company reduced energy consumption by 60%, achieved carbon neutrality, and saved $15M annually while 
              improving operational efficiency and employee satisfaction.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Company Overview</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About EcoManufacturing Corp</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Fortune 500 industrial manufacturing company</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>25,000+ employees across 15 countries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>$8.5B annual revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>50+ manufacturing facilities worldwide</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sustainability Challenge</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>High energy consumption and carbon footprint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Regulatory pressure for carbon reduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Rising energy costs and waste management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Customer demand for sustainable products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">AI Sustainability Solutions Implemented</h2>
          
          <div className="space-y-8 mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Smart Energy Management System</h3>
              </div>
              <p className="text-gray-700 mb-4">
                AI-powered energy optimization system that continuously monitors and adjusts energy consumption across all facilities, 
                predicting demand patterns and optimizing renewable energy usage.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-blue-600">45% Energy Reduction</div>
                  <div className="text-gray-600">in manufacturing facilities</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-blue-600">$8M Annual Savings</div>
                  <div className="text-gray-600">in energy costs</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-blue-600">90% Renewable Energy</div>
                  <div className="text-gray-600">usage optimization</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Waste Reduction & Circular Economy</h3>
              </div>
              <p className="text-gray-700 mb-4">
                AI-driven waste analysis and optimization system that identifies waste reduction opportunities, optimizes material usage, 
                and enables circular economy practices across the supply chain.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-green-600">70% Waste Reduction</div>
                  <div className="text-gray-600">in production processes</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-green-600">$3M Annual Savings</div>
                  <div className="text-gray-600">in waste management costs</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-green-600">95% Material Efficiency</div>
                  <div className="text-gray-600">optimization achieved</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Carbon Footprint Tracking & Optimization</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Real-time carbon tracking system that monitors emissions across all operations, identifies reduction opportunities, 
                and provides actionable insights for achieving carbon neutrality.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-purple-600">100% Carbon Neutral</div>
                  <div className="text-gray-600">achieved across all operations</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-purple-600">$4M Annual Savings</div>
                  <div className="text-gray-600">in carbon offset costs</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-purple-600">Real-time Monitoring</div>
                  <div className="text-gray-600">of all emissions</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementation Timeline & Process</h2>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">18-Month Transformation Journey</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase 1: Assessment & Planning (Months 1-3)</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Comprehensive sustainability audit and baseline measurement</li>
                    <li>• AI solution design and technology selection</li>
                    <li>• Stakeholder engagement and change management planning</li>
                    <li>• Pilot facility selection and team training</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase 2: Pilot Implementation (Months 4-9)</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Deploy AI energy management system at 3 pilot facilities</li>
                    <li>• Implement waste reduction AI tools and processes</li>
                    <li>• Launch carbon tracking and optimization platform</li>
                    <li>• Train staff and establish new operational procedures</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase 3: Scale & Optimize (Months 10-18)</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Roll out AI solutions across all 50+ facilities</li>
                    <li>• Optimize AI models based on pilot learnings</li>
                    <li>• Integrate with existing ERP and operational systems</li>
                    <li>• Achieve carbon neutrality and full sustainability goals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Energy Consumption Reduction</span>
                  <span className="text-2xl font-bold text-green-600">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Carbon Footprint Reduction</span>
                  <span className="text-2xl font-bold text-green-600">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Waste Reduction</span>
                  <span className="text-2xl font-bold text-green-600">70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Water Usage Reduction</span>
                  <span className="text-2xl font-bold text-green-600">40%</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Annual Cost Savings</span>
                  <span className="text-2xl font-bold text-blue-600">$15M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">ROI on AI Investment</span>
                  <span className="text-2xl font-bold text-blue-600">340%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Operational Efficiency</span>
                  <span className="text-2xl font-bold text-blue-600">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Employee Satisfaction</span>
                  <span className="text-2xl font-bold text-blue-600">85%</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Success Factors</h2>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">What Made This Transformation Successful</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Leadership & Strategy</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Strong executive commitment and vision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Clear sustainability goals and metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Dedicated sustainability team and budget</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology & Implementation</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Pilot-first approach with gradual scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Integration with existing systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Continuous monitoring and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Lessons Learned & Best Practices</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Critical Success Factors</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Start with a pilot:</strong> Test AI solutions on a small scale before full deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Measure everything:</strong> Establish clear baselines and track progress continuously</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Engage employees:</strong> Involve staff in the transformation process and provide training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Partner with experts:</strong> Work with AI and sustainability specialists for best results</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Challenges & Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Data quality issues:</strong> Invest in data cleaning and validation processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Change resistance:</strong> Implement comprehensive change management and training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Integration complexity:</strong> Plan for gradual integration with existing systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>ROI measurement:</strong> Establish clear metrics and measurement frameworks from the start</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Sustainability with AI?</h3>
            <p className="text-gray-300 mb-6">
              Join EcoManufacturing Corp and other industry leaders in achieving carbon neutrality and significant cost savings 
              through AI-powered sustainability solutions. Our expert team can help you develop and implement a comprehensive 
              sustainability transformation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                Get Sustainability AI Consultation
              </Link>
              <Link href="/resources/ai-sustainability-implementation-guide-2025" className="border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center">
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}