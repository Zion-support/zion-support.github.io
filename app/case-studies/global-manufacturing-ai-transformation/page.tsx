import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, TrendingUp, Brain, Zap, Shield, Target, BarChart3, Factory, Globe, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Manufacturing AI Transformation Case Study | Zion Tech Group',
  description: 'How a Fortune 500 manufacturing company achieved 40% cost reduction and 60% efficiency improvement through comprehensive AI automation and digital transformation.',
  keywords: 'manufacturing AI, digital transformation, case study, AI automation, industrial AI, smart manufacturing',
  openGraph: {
    title: 'Global Manufacturing AI Transformation Case Study',
    description: 'Real-world success story of AI-driven manufacturing transformation.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function GlobalManufacturingAITransformation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>

        {/* Case Study Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                January 17, 2025
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Zion Tech Group
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                8 min read
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Global Manufacturing AI Transformation
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              How a Fortune 500 manufacturing company achieved unprecedented efficiency gains and cost savings through comprehensive AI automation and digital transformation.
            </p>
          </header>

          {/* Case Study Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Award className="w-6 h-6 mr-3 text-green-400" />
                Project Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">40%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">60%</div>
                  <div className="text-gray-300">Efficiency Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">$50M</div>
                  <div className="text-gray-300">Annual Savings</div>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Factory className="w-8 h-8 mr-3 text-orange-400" />
                Client Background
              </h2>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Company Profile</h3>
                <ul className="text-gray-300 space-y-2">
                  <li><strong>Industry:</strong> Global Manufacturing & Industrial Equipment</li>
                  <li><strong>Size:</strong> Fortune 500 company with 50,000+ employees</li>
                  <li><strong>Operations:</strong> 25 manufacturing facilities across 15 countries</li>
                  <li><strong>Revenue:</strong> $8.5 billion annually</li>
                  <li><strong>Challenge:</strong> Legacy systems, manual processes, and rising operational costs</li>
                </ul>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Our client, a leading global manufacturer of industrial equipment, faced significant challenges in maintaining competitive advantage in an increasingly digital marketplace. With legacy systems, manual processes, and rising operational costs, they needed a comprehensive transformation strategy to modernize their operations and improve efficiency.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3 text-red-400" />
                Challenges & Objectives
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Key Challenges</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Outdated legacy systems and processes</li>
                    <li>• High operational costs and inefficiencies</li>
                    <li>• Manual data collection and analysis</li>
                    <li>• Limited predictive maintenance capabilities</li>
                    <li>• Inconsistent quality control processes</li>
                    <li>• Supply chain visibility gaps</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Strategic Objectives</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Reduce operational costs by 30%+</li>
                    <li>• Improve production efficiency by 50%+</li>
                    <li>• Implement predictive maintenance</li>
                    <li>• Enhance quality control systems</li>
                    <li>• Optimize supply chain operations</li>
                    <li>• Enable data-driven decision making</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Brain className="w-8 h-8 mr-3 text-purple-400" />
                Solution Architecture
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">1. AI-Powered Predictive Maintenance</h3>
                  <p className="text-gray-300 mb-3">
                    Implemented machine learning algorithms to predict equipment failures before they occur, reducing unplanned downtime by 75%.
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• IoT sensor integration across all production lines</li>
                    <li>• Real-time data collection and analysis</li>
                    <li>• Predictive failure models with 95% accuracy</li>
                    <li>• Automated maintenance scheduling</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">2. Intelligent Quality Control</h3>
                  <p className="text-gray-300 mb-3">
                    Deployed computer vision systems for automated quality inspection, improving defect detection rates by 90%.
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Computer vision-based inspection systems</li>
                    <li>• Real-time defect detection and classification</li>
                    <li>• Automated quality reporting and analytics</li>
                    <li>• Integration with production line controls</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">3. Supply Chain Optimization</h3>
                  <p className="text-gray-300 mb-3">
                    Created AI-driven supply chain management system that optimized inventory levels and reduced costs by 25%.
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Demand forecasting with machine learning</li>
                    <li>• Automated inventory optimization</li>
                    <li>• Supplier performance analytics</li>
                    <li>• Real-time supply chain visibility</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">4. Production Line Intelligence</h3>
                  <p className="text-gray-300 mb-3">
                    Implemented smart manufacturing systems that optimized production schedules and resource allocation in real-time.
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Real-time production monitoring</li>
                    <li>• Automated scheduling optimization</li>
                    <li>• Energy consumption optimization</li>
                    <li>• Performance analytics and reporting</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 mr-3 text-green-400" />
                Results & Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quantitative Results</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex justify-between">
                      <span>Cost Reduction:</span>
                      <span className="font-bold text-green-400">40%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Efficiency Improvement:</span>
                      <span className="font-bold text-green-400">60%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Unplanned Downtime:</span>
                      <span className="font-bold text-green-400">-75%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Quality Defect Rate:</span>
                      <span className="font-bold text-green-400">-90%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Annual Savings:</span>
                      <span className="font-bold text-green-400">$50M</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Qualitative Benefits</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Enhanced decision-making capabilities</li>
                    <li>• Improved employee satisfaction and productivity</li>
                    <li>• Increased customer satisfaction</li>
                    <li>• Better compliance and risk management</li>
                    <li>• Strengthened competitive position</li>
                    <li>• Future-ready technology foundation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-8 h-8 mr-3 text-yellow-400" />
                Implementation Timeline
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Phase 1: Assessment & Planning (Months 1-2)</h3>
                    <p className="text-gray-300">Comprehensive analysis of current systems, processes, and infrastructure. Development of detailed transformation roadmap.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Phase 2: Pilot Implementation (Months 3-6)</h3>
                    <p className="text-gray-300">Deployed AI solutions in select facilities to validate approach and demonstrate early results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Phase 3: Global Rollout (Months 7-12)</h3>
                    <p className="text-gray-300">Scaled successful solutions across all manufacturing facilities worldwide.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Phase 4: Optimization & Enhancement (Months 13-18)</h3>
                    <p className="text-gray-300">Continuous improvement and advanced AI capabilities implementation.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-blue-400" />
                Key Success Factors
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-white mb-2">Executive Sponsorship</h3>
                    <p className="text-gray-300 text-sm">Strong leadership support and clear vision from C-level executives.</p>
                  </div>
                  
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-white mb-2">Change Management</h3>
                    <p className="text-gray-300 text-sm">Comprehensive training and communication programs for all stakeholders.</p>
                  </div>
                  
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-white mb-2">Data Quality</h3>
                    <p className="text-gray-300 text-sm">Robust data governance and quality assurance processes.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-white mb-2">Phased Approach</h3>
                    <p className="text-gray-300 text-sm">Gradual implementation with pilot programs and iterative improvements.</p>
                  </div>
                  
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-white mb-2">Technology Integration</h3>
                    <p className="text-gray-300 text-sm">Seamless integration with existing systems and infrastructure.</p>
                  </div>
                  
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-white mb-2">Continuous Monitoring</h3>
                    <p className="text-gray-300 text-sm">Real-time performance tracking and optimization.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-8 h-8 mr-3 text-cyan-400" />
                Global Impact
              </h2>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  This transformation has positioned our client as a leader in smart manufacturing, with the AI-driven systems now serving as a model for the entire industry. The success has led to:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Industry recognition and awards for innovation</li>
                  <li>• Increased market share and competitive advantage</li>
                  <li>• Enhanced customer satisfaction and retention</li>
                  <li>• Improved environmental sustainability metrics</li>
                  <li>• Attraction of top talent and investment</li>
                </ul>
              </div>
            </section>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready for Your Own Transformation?</h2>
              <p className="text-gray-300 mb-6">
                Let Zion Tech Group help you achieve similar results with our proven AI automation and digital transformation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </Link>
                <Link 
                  href="/case-studies" 
                  className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  View More Case Studies
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}