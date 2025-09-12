import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, TrendingUp, Zap, Target, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Autonomous Manufacturing Success: $200M Savings Case Study 2025',
  description: 'Discover how a Fortune 500 manufacturer achieved $200M in annual savings and 95% operational efficiency through AI-powered autonomous manufacturing systems.',
  keywords: 'AI manufacturing case study, autonomous systems, manufacturing automation, AI ROI, Fortune 500, manufacturing efficiency',
  openGraph: {
    title: 'AI Autonomous Manufacturing Success: $200M Savings Case Study 2025',
    description: 'Discover how a Fortune 500 manufacturer achieved $200M in annual savings and 95% operational efficiency through AI-powered autonomous manufacturing systems.',
    type: 'article',
    publishedTime: '2025-01-20T10:00:00Z',
    authors: ['Zion Tech Group'],
    tags: ['Case Study', 'Manufacturing', 'AI', 'Autonomous Systems'],
  },
};

export default function AIAutonomousManufacturingCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
              Case Study
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
              Fortune 500
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            AI Autonomous Manufacturing Success: $200M Savings Case Study 2025
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-gray-400 text-sm mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Zion Tech Group
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 20, 2025
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              12 min read
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white">
              <Bookmark className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white m-0">Executive Summary</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            A leading Fortune 500 manufacturer transformed their operations through AI-powered autonomous systems, 
            achieving unprecedented results: <strong>$200M in annual savings</strong>, <strong>95% operational efficiency</strong>, 
            and <strong>99.9% system uptime</strong>. This case study details their journey from traditional manufacturing 
            to fully autonomous operations and the strategic lessons learned along the way.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$200M</div>
              <div className="text-gray-300">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Operational Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-12">
            {/* Challenge Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white m-0">The Challenge</h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Initial Situation:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Multiple manufacturing facilities with inconsistent performance across locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>High operational costs due to manual processes and inefficient resource utilization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Quality control issues resulting in 5-8% defect rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Limited visibility into production processes and performance metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Difficulty scaling operations to meet growing demand</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white m-0">The Solution</h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The company partnered with Zion Tech Group to implement a comprehensive AI-powered autonomous 
                manufacturing system. The solution included intelligent robotics, predictive maintenance, 
                automated quality control, and real-time optimization algorithms.
              </p>

              <div className="bg-gradient-to-r from-yellow-600/20 to-green-600/20 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Key Components Implemented:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Autonomous Production Lines:</strong> AI-controlled assembly systems with adaptive learning capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Predictive Maintenance:</strong> Machine learning algorithms predicting equipment failures 30 days in advance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Quality Control AI:</strong> Computer vision systems achieving 99.9% defect detection accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Supply Chain Optimization:</strong> AI-driven inventory management and logistics coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Real-time Analytics:</strong> Comprehensive dashboard providing instant insights into all operations</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Implementation Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white m-0">Implementation Journey</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Phase 1: Assessment & Planning (Months 1-3)</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Comprehensive audit of existing manufacturing processes</li>
                    <li>• Identification of automation opportunities and ROI potential</li>
                    <li>• Development of detailed implementation roadmap</li>
                    <li>• Stakeholder alignment and change management planning</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Phase 2: Pilot Implementation (Months 4-8)</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Deployment of AI systems in one manufacturing facility</li>
                    <li>• Real-time monitoring and optimization of pilot systems</li>
                    <li>• Training of operations teams on new technologies</li>
                    <li>• Validation of ROI projections and performance metrics</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Phase 3: Full Rollout (Months 9-18)</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Expansion to all manufacturing facilities</li>
                    <li>• Integration of all systems into unified platform</li>
                    <li>• Continuous optimization and performance tuning</li>
                    <li>• Knowledge transfer and capability building</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Financial Impact:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <strong>$200M annual savings</strong> across all operations</li>
                    <li>• <strong>40% reduction</strong> in operational costs</li>
                    <li>• <strong>25% increase</strong> in profit margins</li>
                    <li>• <strong>300% ROI</strong> achieved within 18 months</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Operational Improvements:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <strong>95% operational efficiency</strong> across all facilities</li>
                    <li>• <strong>99.9% system uptime</strong> with autonomous maintenance</li>
                    <li>• <strong>90% reduction</strong> in quality defects</li>
                    <li>• <strong>50% faster</strong> time-to-market for new products</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Strategic Benefits:</h3>
                <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                  <div>
                    <h4 className="font-bold text-white mb-2">Competitive Advantage</h4>
                    <p>Industry-leading efficiency and quality standards positioning the company as a market leader</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Scalability</h4>
                    <p>Ability to rapidly scale operations and adapt to changing market demands</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Innovation Culture</h4>
                    <p>Transformation of organizational culture to embrace continuous innovation and improvement</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Lessons Learned */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Key Lessons Learned</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Change Management is Critical:</strong> Success requires comprehensive training and cultural transformation, not just technology implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Start with Pilots:</strong> Begin with smaller implementations to demonstrate value and build organizational confidence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Data Quality Matters:</strong> Ensure high-quality data inputs for optimal AI system performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Continuous Optimization:</strong> AI systems require ongoing monitoring and optimization to maintain peak performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Partnership Approach:</strong> Work with experienced AI implementation partners for faster, more successful deployments</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                This case study demonstrates the transformative potential of AI-powered autonomous manufacturing systems. 
                By embracing these technologies, the company not only achieved significant cost savings and operational 
                improvements but also positioned itself as an industry leader in manufacturing innovation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The success of this implementation serves as a blueprint for other manufacturers looking to leverage 
                AI for competitive advantage. With proper planning, execution, and partnership, organizations can 
                achieve similar results and drive sustainable growth in an increasingly competitive marketplace.
              </p>
            </section>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Learn how your organization can achieve similar results with AI-powered autonomous manufacturing systems. 
            Get a free consultation with our manufacturing AI experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/resources/autonomous-systems-implementation-guide"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Related Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                  Fortune 500 AI Transformation: Complete Business Overhaul
                </h3>
                <p className="text-gray-300 text-sm">
                  Discover how a Fortune 500 company achieved complete digital transformation through comprehensive AI implementation.
                </p>
              </div>
            </Link>
            <Link href="/case-studies/ai-transformation-manufacturing-giant-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                  Manufacturing Giant AI Success: Industry 4.0 Transformation
                </h3>
                <p className="text-gray-300 text-sm">
                  Learn how a manufacturing giant achieved Industry 4.0 transformation with AI-powered smart factories.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}