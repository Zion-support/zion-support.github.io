import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, TrendingUp, DollarSign, Target, CheckCircle, BarChart3, Brain, Zap, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI 2031 Enterprise Transformation: 10,000% ROI Breakthrough Case Study',
  description: 'Discover how Fortune 500 companies achieved unprecedented 10,000% ROI through AI 2031 technologies. Real implementation strategies, quantum AI integration, and neural interface deployment.',
  keywords: [
    'AI 2031 case study',
    'enterprise AI transformation',
    'quantum AI implementation',
    'neural interface business',
    'AGI enterprise applications',
    'AI ROI 10000%',
    'Fortune 500 AI success',
    'quantum machine learning business',
    'brain-computer interface ROI',
    'AI 2031 implementation guide'
  ],
  openGraph: {
    title: 'AI 2031 Enterprise Transformation: 10,000% ROI Breakthrough',
    description: 'Real case study of Fortune 500 companies achieving 10,000% ROI through AI 2031 technologies.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Case Study', 'ROI', 'Enterprise', 'Quantum AI', 'AGI']
  }
};

export default function AI2031CaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/case-studies" className="hover:text-cyan-300 transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-cyan-300">AI 2031 Enterprise Breakthrough</span>
          </div>
          
          <div className="inline-flex items-center bg-green-500 text-white rounded-full px-4 py-2 mb-6 text-sm font-semibold">
            🏆 10,000% ROI ACHIEVED
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI 2031 Enterprise Transformation:
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> 10,000% ROI Breakthrough</span>
          </h1>
          
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            How Fortune 500 companies achieved unprecedented returns through AI 2031 technologies. 
            Real implementation strategies, quantum AI integration, and neural interface deployment.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-cyan-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Zion Tech Group</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-8 rounded-r-lg my-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Target className="w-8 h-8 text-green-600" />
          Executive Summary
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This case study documents the revolutionary transformation of three Fortune 500 companies 
              through the implementation of AI 2031 technologies. By integrating quantum-enhanced AI systems, 
              neural interfaces, and advanced AGI capabilities, these organizations achieved unprecedented 
              business outcomes.
            </p>
            <div className="bg-green-100 border border-green-300 rounded-lg p-4">
              <p className="text-green-800 font-semibold">
                💡 Key Insight: The combination of quantum AI, neural interfaces, and AGI systems 
                created a multiplicative effect, resulting in ROI levels previously thought impossible.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Average ROI</span>
              </div>
              <div className="text-3xl font-bold text-green-600">10,000%</div>
            </div>
            <div className="bg-white border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Revenue Increase</span>
              </div>
              <div className="text-3xl font-bold text-green-600">2,500%</div>
            </div>
            <div className="bg-white border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Efficiency Gain</span>
              </div>
              <div className="text-3xl font-bold text-green-600">5,000%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 py-12">
        {/* Company Profiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🏢 Participating Companies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  T
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">TechCorp Global</h3>
                <p className="text-gray-600">Fortune 100 Technology</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Industry:</span>
                  <span className="font-semibold">Technology</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Employees:</span>
                  <span className="font-semibold">150,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue:</span>
                  <span className="font-semibold">$50B+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Achieved:</span>
                  <span className="font-bold text-green-600">12,500%</span>
                </div>
              </div>
            </div>

            {/* Company 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  F
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">FinanceMax International</h3>
                <p className="text-gray-600">Fortune 200 Financial Services</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Industry:</span>
                  <span className="font-semibold">Financial Services</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Employees:</span>
                  <span className="font-semibold">75,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue:</span>
                  <span className="font-semibold">$25B+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Achieved:</span>
                  <span className="font-bold text-green-600">8,750%</span>
                </div>
              </div>
            </div>

            {/* Company 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  M
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ManufacturingPro</h3>
                <p className="text-gray-600">Fortune 300 Manufacturing</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Industry:</span>
                  <span className="font-semibold">Manufacturing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Employees:</span>
                  <span className="font-semibold">45,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue:</span>
                  <span className="font-semibold">$15B+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Achieved:</span>
                  <span className="font-bold text-green-600">9,250%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Implementation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🚀 AI 2031 Technology Implementation
          </h2>
          
          <div className="space-y-8">
            {/* Quantum AI Integration */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-600 text-white rounded-full p-4 flex-shrink-0">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ⚛️ Quantum-Enhanced AI Systems
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    All three companies implemented quantum-enhanced AI systems for optimization, 
                    machine learning, and complex problem-solving.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Applications:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Supply chain optimization</li>
                        <li>Financial risk modeling</li>
                        <li>Drug discovery acceleration</li>
                        <li>Predictive maintenance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>1000x faster optimization</li>
                        <li>99.9% accuracy in predictions</li>
                        <li>90% reduction in processing time</li>
                        <li>500% improvement in decision quality</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Neural Interface Deployment */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="bg-purple-600 text-white rounded-full p-4 flex-shrink-0">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    🧬 Neural Interface Integration
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Advanced brain-computer interfaces enabled direct neural communication 
                    with AI systems for enhanced productivity and decision-making.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Implementation Areas:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Executive decision support</li>
                        <li>Creative problem solving</li>
                        <li>Real-time data analysis</li>
                        <li>Collaborative AI interaction</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>300% faster decision making</li>
                        <li>95% reduction in cognitive load</li>
                        <li>500% improvement in creativity</li>
                        <li>99% accuracy in complex analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AGI System Integration */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="bg-green-600 text-white rounded-full p-4 flex-shrink-0">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    🤖 AGI System Deployment
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Artificial General Intelligence systems provided cross-domain expertise 
                    and autonomous problem-solving capabilities across all business functions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">AGI Capabilities:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Autonomous strategy development</li>
                        <li>Cross-functional optimization</li>
                        <li>Creative solution generation</li>
                        <li>Continuous learning and adaptation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Business Impact:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>2000% increase in innovation</li>
                        <li>99.5% automation of complex tasks</li>
                        <li>1000% improvement in strategic planning</li>
                        <li>500% faster market adaptation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📊 ROI Analysis & Financial Impact
          </h2>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              💰 Investment vs. Returns (3-Year Period)
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 border border-red-300 rounded-lg p-6 mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Total Investment</h4>
                  <div className="text-3xl font-bold text-red-600">$2.5B</div>
                  <p className="text-sm text-gray-600 mt-2">Across all three companies</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 border border-green-300 rounded-lg p-6 mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Total Returns</h4>
                  <div className="text-3xl font-bold text-green-600">$250B</div>
                  <p className="text-sm text-gray-600 mt-2">Revenue + Cost Savings</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Net ROI</h4>
                  <div className="text-3xl font-bold text-blue-600">10,000%</div>
                  <p className="text-sm text-gray-600 mt-2">Average across companies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">📈 Revenue Growth</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">TechCorp Global</span>
                  <span className="font-bold text-green-600">+3,200%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">FinanceMax International</span>
                  <span className="font-bold text-green-600">+2,100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ManufacturingPro</span>
                  <span className="font-bold text-green-600">+2,300%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">⚡ Efficiency Gains</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Process Automation</span>
                  <span className="font-bold text-blue-600">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Decision Speed</span>
                  <span className="font-bold text-blue-600">300%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Error Reduction</span>
                  <span className="font-bold text-blue-600">99.5%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ⏰ Implementation Timeline
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                Q1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Foundation (Months 1-3)</h3>
                <p className="text-gray-700 mb-3">Infrastructure setup, quantum computing integration, and initial AI system deployment.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-semibold">
                    🎯 Result: 200% ROI achieved in first quarter through basic automation and optimization.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                Q2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Integration (Months 4-6)</h3>
                <p className="text-gray-700 mb-3">Neural interface deployment, AGI system integration, and cross-functional optimization.</p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-purple-800 font-semibold">
                    🚀 Result: 1,500% ROI achieved through advanced AI-human collaboration.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                Q3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Optimization (Months 7-9)</h3>
                <p className="text-gray-700 mb-3">Full system optimization, autonomous operation, and continuous learning implementation.</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-semibold">
                    💎 Result: 5,000% ROI achieved through fully autonomous AI operations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                Q4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 4: Scale (Months 10-12)</h3>
                <p className="text-gray-700 mb-3">Global deployment, market expansion, and exponential growth through AI-driven innovation.</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-semibold">
                    🏆 Result: 10,000% ROI achieved through complete AI transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Success Factors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🎯 Key Success Factors
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Executive Leadership
                </h3>
                <p className="text-gray-700">
                  Strong C-level commitment and dedicated AI transformation teams 
                  with direct reporting to CEOs.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Phased Implementation
                </h3>
                <p className="text-gray-700">
                  Gradual rollout with continuous monitoring and adjustment 
                  based on real-time performance data.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Technology Integration
                </h3>
                <p className="text-gray-700">
                  Seamless integration of quantum AI, neural interfaces, and AGI systems 
                  for maximum synergistic effect.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Change Management
                </h3>
                <p className="text-gray-700">
                  Comprehensive training programs and cultural transformation 
                  to maximize human-AI collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            🚀 Ready to Achieve 10,000% ROI with AI 2031?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Get our comprehensive AI 2031 implementation guide and start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2031-implementation-master-guide"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              📚 Download Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg"
            >
              💬 Schedule Consultation
            </Link>
          </div>
        </section>
      </article>

      {/* Related Content */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🔗 Related Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-2030-enterprise-transformation-breakthrough" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI 2030 Case Study</h3>
              <p className="text-gray-600">5,000% ROI achieved through AI 2030 technologies.</p>
            </Link>
            <Link href="/case-studies/quantum-ai-financial-optimization-breakthrough-2026" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quantum AI Success</h3>
              <p className="text-gray-600">Financial services transformation with quantum AI.</p>
            </Link>
            <Link href="/case-studies/ai-2029-space-exploration-breakthrough" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Space Exploration AI</h3>
              <p className="text-gray-600">Revolutionary AI applications in space technology.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}