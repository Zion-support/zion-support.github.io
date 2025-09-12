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
            <div>
              <div className="text-4xl font-bold mb-2">2000%</div>
              <div className="text-green-100">ROI Achieved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2.4B</div>
              <div className="text-green-100">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-green-100">Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-green-100">Months to ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Challenge Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Target className="w-8 h-8 text-red-600" />
              The Challenge
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">Critical Business Problems</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Declining operational efficiency across 50+ manufacturing facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Rising production costs due to outdated processes and manual operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Inability to predict maintenance needs, leading to costly downtime</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Supply chain inefficiencies causing delays and increased costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Competitive pressure requiring rapid innovation and cost reduction</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-600" />
              The AI Solution
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">AI Technologies Implemented</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Predictive Maintenance AI Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Autonomous Quality Control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Supply Chain Optimization AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Intelligent Process Automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Real-time Analytics Dashboard</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-green-900 mb-4">Implementation Approach</h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Phased rollout across 50 facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Custom AI model training for each facility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Comprehensive staff training program</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Continuous monitoring and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Integration with existing ERP systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-green-600" />
              Outstanding Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">$2.4B</div>
                <div className="text-green-100">Total Cost Savings</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-6 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-blue-100">Efficiency Improvement</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-purple-100">Employee Satisfaction</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Performance Improvements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Operational Excellence</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 90% reduction in unplanned downtime</li>
                    <li>• 75% faster production cycles</li>
                    <li>• 60% reduction in quality defects</li>
                    <li>• 50% improvement in energy efficiency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Financial Impact</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• $2.4B in total cost savings</li>
                    <li>• 2000% ROI in 18 months</li>
                    <li>• 40% reduction in operational costs</li>
                    <li>• 25% increase in profit margins</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Timeline</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Months 1-3: Foundation & Planning</h3>
                  <p className="text-gray-600">Infrastructure assessment, team training, and pilot program setup at 5 facilities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Months 4-9: Pilot Implementation</h3>
                  <p className="text-gray-600">AI systems deployment at pilot facilities with continuous monitoring and optimization.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Months 10-15: Full Rollout</h3>
                  <p className="text-gray-600">Expansion to all 50 facilities with comprehensive training and support.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Months 16-18: Optimization & Results</h3>
                  <p className="text-gray-600">Fine-tuning systems and achieving full ROI with 2000% return on investment.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-green-100 mb-6">
              Get our comprehensive AI transformation guide and ROI calculator to start your journey to 2000% ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources/ai-2025-ultimate-implementation-toolkit"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Guide
              </Link>
              <Link 
                href="/tools/ai-2025-roi-calculator"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Calculate Your ROI
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
              <p className="text-gray-600 mb-4">1500% ROI transformation case study</p>
              <span className="text-blue-600 font-semibold">Read Case Study →</span>
            </Link>
            <Link href="/case-studies/ai-2025-global-tech-transformation-breakthrough" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Industry Breakthrough</h3>
              <p className="text-gray-600 mb-4">900% ROI in technology sector</p>
              <span className="text-blue-600 font-semibold">Read Case Study →</span>
            </Link>
            <Link href="/case-studies/ai-2025-global-finance-transformation-breakthrough" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finance Sector Success</h3>
              <p className="text-gray-600 mb-4">1500% ROI in financial services</p>
              <span className="text-blue-600 font-semibold">Read Case Study →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}