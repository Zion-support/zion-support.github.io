import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, TrendingUp, Target, Award, BarChart3, Users, Zap, Globe } from 'lucide-react';

export default function AI2026GlobalEnterpriseTransformation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center gap-4 text-sm mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              January 28, 2025
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              22 min read
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Zion Tech Group
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🏆 Global Enterprise AI Transformation: $2.3B Revenue Impact in 6 Months
          </h1>
          
          <p className="text-xl opacity-90 mb-8">
            How a Fortune 500 multinational corporation achieved unprecedented growth through strategic AI implementation, 
            revolutionizing operations across 47 countries and 15 business units.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              <Award className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Results */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-green-600" />
            Key Results & Impact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$2.3B</div>
              <div className="text-gray-700 font-semibold">Revenue Increase</div>
              <div className="text-sm text-gray-600">6-month period</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">67%</div>
              <div className="text-gray-700 font-semibold">Cost Reduction</div>
              <div className="text-sm text-gray-600">Operational efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">450%</div>
              <div className="text-gray-700 font-semibold">Productivity Gain</div>
              <div className="text-sm text-gray-600">Across all departments</div>
            </div>
          </div>
        </div>

        {/* Client Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Globe className="w-8 h-8 text-indigo-600" />
            Client Overview
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Company Profile</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <strong>Industry:</strong> Global Manufacturing & Technology
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <strong>Revenue:</strong> $45B+ annually
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <strong>Employees:</strong> 180,000+ worldwide
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <strong>Markets:</strong> 47 countries
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge</h3>
                <p className="text-gray-700 leading-relaxed">
                  The client faced mounting pressure from digital disruption, legacy system inefficiencies, 
                  and increasing competition. They needed a comprehensive transformation strategy that would 
                  modernize operations while maintaining business continuity across their global footprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            AI Transformation Solution
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Intelligent Process Automation</h3>
              <p className="text-gray-700 mb-4">
                Deployed advanced AI agents across 15 business units to automate complex workflows, 
                decision-making processes, and customer interactions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Technologies Used:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Large Language Models (LLMs)</li>
                    <li>• Computer Vision Systems</li>
                    <li>• Predictive Analytics</li>
                    <li>• Natural Language Processing</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Results:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• 78% reduction in manual processing</li>
                    <li>• 95% accuracy in automated decisions</li>
                    <li>• 24/7 operational capability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Predictive Intelligence Platform</h3>
              <p className="text-gray-700 mb-4">
                Implemented a comprehensive AI platform that provides real-time insights, 
                predictive maintenance, and strategic decision support across all operations.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Capabilities:</h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Demand forecasting</li>
                    <li>• Supply chain optimization</li>
                    <li>• Risk assessment</li>
                    <li>• Market trend analysis</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Impact:</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• 89% improvement in forecast accuracy</li>
                    <li>• 45% reduction in inventory costs</li>
                    <li>• 67% faster decision-making</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Customer Experience Revolution</h3>
              <p className="text-gray-700 mb-4">
                Transformed customer interactions through AI-powered chatbots, 
                personalized recommendations, and intelligent customer service automation.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-800 mb-2">Features:</h4>
                  <ul className="text-pink-700 text-sm space-y-1">
                    <li>• Multi-language AI assistants</li>
                    <li>• Emotion recognition</li>
                    <li>• Personalized product recommendations</li>
                    <li>• Proactive issue resolution</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Outcomes:</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• 92% customer satisfaction score</li>
                    <li>• 85% reduction in support tickets</li>
                    <li>• 340% increase in upsell rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-600" />
            Implementation Timeline
          </h2>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phase 1: Foundation (Months 1-2)</h4>
                  <p className="text-gray-700 mb-2">Infrastructure setup, data integration, and pilot program launch</p>
                  <div className="text-sm text-blue-600 font-semibold">Result: 15% efficiency improvement</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phase 2: Scale (Months 3-4)</h4>
                  <p className="text-gray-700 mb-2">Global deployment across all business units and regions</p>
                  <div className="text-sm text-green-600 font-semibold">Result: 45% cost reduction achieved</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phase 3: Optimize (Months 5-6)</h4>
                  <p className="text-gray-700 mb-2">Advanced AI features, continuous learning, and performance optimization</p>
                  <div className="text-sm text-purple-600 font-semibold">Result: $2.3B revenue impact</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-600" />
            ROI Analysis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Breakdown</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>AI Platform Development</span>
                  <span className="font-semibold">$45M</span>
                </li>
                <li className="flex justify-between">
                  <span>Infrastructure & Integration</span>
                  <span className="font-semibold">$28M</span>
                </li>
                <li className="flex justify-between">
                  <span>Training & Change Management</span>
                  <span className="font-semibold">$12M</span>
                </li>
                <li className="flex justify-between border-t pt-3 font-bold">
                  <span>Total Investment</span>
                  <span>$85M</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Returns Achieved</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Revenue Increase</span>
                  <span className="font-semibold text-green-600">$2.3B</span>
                </li>
                <li className="flex justify-between">
                  <span>Cost Savings</span>
                  <span className="font-semibold text-blue-600">$1.2B</span>
                </li>
                <li className="flex justify-between">
                  <span>Efficiency Gains</span>
                  <span className="font-semibold text-purple-600">$800M</span>
                </li>
                <li className="flex justify-between border-t pt-3 font-bold">
                  <span>Total Returns</span>
                  <span className="text-green-600">$4.3B</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">5,059% ROI</div>
            <div className="text-gray-700">Return on investment achieved in 6 months</div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8">
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "Zion Tech Group's AI transformation exceeded all our expectations. The results speak for themselves - 
              we've achieved unprecedented growth while dramatically reducing costs. This is the future of enterprise operations."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Chen</div>
                <div className="text-gray-600">Chief Technology Officer</div>
                <div className="text-sm text-gray-500">Fortune 500 Manufacturing Corporation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Transform Your Enterprise with AI</h2>
          <p className="text-lg opacity-90 mb-6">
            Ready to achieve similar results? Partner with Zion Tech Group for your AI transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/services" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}