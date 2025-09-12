import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, Calendar, User, Clock, CheckCircle, AlertCircle, Target, Brain, Zap, Shield, BarChart3, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Implementation Roadmap 2025 | Zion Tech Group',
  description: 'Complete step-by-step roadmap for implementing AI solutions in your organization. Download our comprehensive guide with timelines, checklists, and best practices.',
  keywords: 'AI implementation, AI roadmap, AI strategy, digital transformation, AI planning, AI guide',
  openGraph: {
    title: 'AI Implementation Roadmap 2025',
    description: 'Your complete guide to successful AI implementation in 2025.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AIImplementationRoadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
        </div>

        {/* Resource Header */}
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
                15 min read
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              AI Implementation Roadmap 2025
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Your comprehensive guide to successfully implementing AI solutions in your organization. Download our detailed roadmap with timelines, checklists, and proven strategies.
            </p>
          </header>

          {/* Resource Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-green-400" />
                Download the Complete Roadmap
              </h2>
              <p className="text-gray-300 mb-4">
                Get our comprehensive 50-page AI Implementation Roadmap with detailed timelines, checklists, templates, and best practices.
              </p>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download PDF Guide
              </button>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3 text-red-400" />
                Roadmap Overview
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our AI Implementation Roadmap is designed to guide organizations through a systematic approach to AI adoption, from initial assessment to full-scale deployment. The roadmap is divided into six key phases, each with specific deliverables and success metrics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">1</div>
                  <h3 className="text-lg font-bold text-white mb-2">Assessment & Strategy</h3>
                  <p className="text-gray-300 text-sm">Evaluate current state and define AI strategy</p>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">2</div>
                  <h3 className="text-lg font-bold text-white mb-2">Planning & Preparation</h3>
                  <p className="text-gray-300 text-sm">Develop detailed implementation plan</p>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">3</div>
                  <h3 className="text-lg font-bold text-white mb-2">Pilot Implementation</h3>
                  <p className="text-gray-300 text-sm">Start with small-scale pilot projects</p>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">4</div>
                  <h3 className="text-lg font-bold text-white mb-2">Scale & Deploy</h3>
                  <p className="text-gray-300 text-sm">Expand successful pilots across organization</p>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="bg-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">5</div>
                  <h3 className="text-lg font-bold text-white mb-2">Optimize & Enhance</h3>
                  <p className="text-gray-300 text-sm">Continuous improvement and optimization</p>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">6</div>
                  <h3 className="text-lg font-bold text-white mb-2">Innovate & Expand</h3>
                  <p className="text-gray-300 text-sm">Advanced AI capabilities and new use cases</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Brain className="w-8 h-8 mr-3 text-purple-400" />
                Phase 1: Assessment & Strategy (Weeks 1-4)
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Current State Assessment</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Evaluate existing technology infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Assess data quality and availability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Identify skill gaps and training needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Analyze current processes and pain points</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">AI Strategy Development</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Define AI vision and objectives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Identify high-impact use cases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Establish success metrics and KPIs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Create governance framework</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-8 h-8 mr-3 text-yellow-400" />
                Phase 2: Planning & Preparation (Weeks 5-8)
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Technical Planning</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Select AI technologies and platforms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Design system architecture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Plan data infrastructure requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Define integration requirements</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Organizational Preparation</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Build AI team and assign roles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Develop change management plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Create training programs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Establish communication protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-blue-400" />
                Phase 3: Pilot Implementation (Weeks 9-16)
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Pilot Project Selection</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Choose low-risk, high-impact use cases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Define pilot scope and timeline</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Set up monitoring and evaluation systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Establish feedback collection mechanisms</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Implementation & Testing</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Deploy AI solutions in controlled environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Conduct thorough testing and validation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Train end users and gather feedback</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Iterate and refine based on results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 mr-3 text-green-400" />
                Success Metrics & KPIs
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Technical Metrics</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• System uptime and reliability</li>
                    <li>• Model accuracy and performance</li>
                    <li>• Processing speed and efficiency</li>
                    <li>• Data quality and completeness</li>
                    <li>• Integration success rate</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Business Metrics</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Cost reduction and savings</li>
                    <li>• Productivity improvements</li>
                    <li>• Customer satisfaction scores</li>
                    <li>• Revenue impact and growth</li>
                    <li>• Time-to-market improvements</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Common Pitfalls to Avoid</h2>
              
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Lack of Clear Strategy</h3>
                      <p className="text-gray-300 text-sm">Starting without a clear AI strategy and objectives leads to scattered efforts and poor results.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Poor Data Quality</h3>
                      <p className="text-gray-300 text-sm">Implementing AI without ensuring data quality and governance leads to unreliable results.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Insufficient Change Management</h3>
                      <p className="text-gray-300 text-sm">Failing to prepare employees for AI adoption results in resistance and low adoption rates.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Overambitious Scope</h3>
                      <p className="text-gray-300 text-sm">Trying to implement too many AI solutions at once leads to resource constraints and failure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your AI Journey?</h2>
              <p className="text-gray-300 mb-6">
                Download our complete AI Implementation Roadmap and get expert guidance from Zion Tech Group's AI specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Complete Roadmap
                </button>
                <Link 
                  href="/contact" 
                  className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Expert Consultation
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}