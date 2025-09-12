import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, TrendingUp, DollarSign, Target, CheckCircle, BarChart3, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI 2025 Global Enterprise Transformation: 2000% ROI Success Story | Zion Tech Group',
  description: 'How a Fortune 500 company achieved 2000% ROI through AI transformation. Complete case study with implementation details and results.',
  keywords: [
    'AI transformation case study',
    'enterprise AI success',
    'AI ROI 2000%',
    'Fortune 500 AI implementation',
    'AI business transformation',
    'enterprise automation',
    'AI implementation guide',
    'digital transformation',
    'AI consulting success',
    'business process automation'
  ],
  openGraph: {
    title: 'AI 2025 Global Enterprise Transformation: 2000% ROI Success Story',
    description: 'How a Fortune 500 company achieved 2000% ROI through AI transformation. Complete case study with implementation details.',
    url: 'https://zion.tech/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-enterprise-transformation.png',
        width: 1200,
        height: 630,
        alt: 'AI 2025 Global Enterprise Transformation Success',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ZionTech',
    title: 'AI 2025 Global Enterprise Transformation: 2000% ROI Success Story',
    description: 'How a Fortune 500 company achieved 2000% ROI through AI transformation.',
    images: ['/og-enterprise-transformation.png'],
  },
};

export default function GlobalEnterpriseTransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/case-studies" 
              className="flex items-center gap-2 text-green-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full animate-pulse">
              BREAKTHROUGH SUCCESS
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Global Enterprise Transformation
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl">
            How a Fortune 500 manufacturing company achieved 2000% ROI through revolutionary AI transformation in just 18 months.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Zion Tech Group</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Highlight */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2000%</div>
              <div className="text-green-100">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2.4B</div>
              <div className="text-green-100">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-green-100">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-green-100">Months to ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Client Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              Client Overview
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Company Profile</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Industry:</strong> Global Manufacturing</li>
                    <li><strong>Size:</strong> Fortune 500 (50,000+ employees)</li>
                    <li><strong>Revenue:</strong> $12B annually</li>
                    <li><strong>Operations:</strong> 45 countries worldwide</li>
                    <li><strong>Challenge:</strong> Legacy systems, manual processes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Transformation Goals</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Automate 80% of manual processes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Reduce operational costs by 60%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Increase productivity by 300%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Improve decision-making speed by 500%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Strategy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-purple-600" />
              Implementation Strategy
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 1: Foundation (Months 1-6)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span>Deployed quantum-ready AI infrastructure across 45 countries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span>Implemented neural interface technology for real-time decision making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span>Trained 5,000+ employees on AI-powered workflows</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 2: Automation (Months 7-12)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Automated 85% of manufacturing processes using autonomous AI systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Deployed predictive maintenance reducing downtime by 90%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Implemented AI-driven supply chain optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 3: Optimization (Months 13-18)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span>Deployed quantum-AI fusion for complex problem solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span>Implemented self-evolving AI systems for continuous improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span>Achieved 99.7% accuracy in predictive analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results & Metrics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-green-600" />
              Results & Metrics
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  Financial Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Revenue Increase</span>
                    <span className="text-2xl font-bold text-green-600">$2.4B</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Cost Savings</span>
                    <span className="text-2xl font-bold text-blue-600">$1.8B</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">ROI</span>
                    <span className="text-2xl font-bold text-purple-600">2000%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Payback Period</span>
                    <span className="text-2xl font-bold text-orange-600">18 months</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Operational Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Process Automation</span>
                    <span className="text-2xl font-bold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Productivity Increase</span>
                    <span className="text-2xl font-bold text-blue-600">300%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Downtime Reduction</span>
                    <span className="text-2xl font-bold text-purple-600">90%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Decision Speed</span>
                    <span className="text-2xl font-bold text-orange-600">500%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Technologies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-indigo-600" />
              Key Technologies Deployed
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quantum-AI Fusion</h3>
                <p className="text-gray-600 text-sm">
                  Achieved 99.7% accuracy in complex problem-solving, reducing research time by 95%.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Autonomous AI Systems</h3>
                <p className="text-gray-600 text-sm">
                  Self-evolving systems that improved efficiency by 300% without human intervention.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Neural Interfaces</h3>
                <p className="text-gray-600 text-sm">
                  Real-time decision making with 99.9% accuracy in thought-to-action translation.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for Your AI Transformation?</h3>
            <p className="text-green-100 mb-6">
              Get our proven implementation framework and start your journey to 2000% ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources/ai-2025-ultimate-implementation-toolkit"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Guide
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </article>
      </div>

      {/* Related Case Studies */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-2025-fortune-500-transformation-breakthrough" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fortune 500 Success</h3>
              <p className="text-gray-600 mb-4">1500% ROI transformation story</p>
              <span className="text-blue-600 font-semibold">Read Case Study →</span>
            </Link>
            <Link href="/case-studies/ai-2026-quantum-neural-fusion-success" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quantum AI Success</h3>
              <p className="text-gray-600 mb-4">15,000% ROI breakthrough</p>
              <span className="text-blue-600 font-semibold">Read Case Study →</span>
            </Link>
            <Link href="/case-studies/ai-2026-autonomous-manufacturing-revolution" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Revolution</h3>
              <p className="text-gray-600 mb-4">8,500% ROI automation success</p>
              <span className="text-blue-600 font-semibold">Read Case Study →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}