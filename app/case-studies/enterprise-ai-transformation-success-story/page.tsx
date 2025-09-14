import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, TrendingUp, DollarSign,  Award } from 'lucide-react';
import SEO from '../../../components/SEO';

export const metadata: Metadata = {
  title: 'Enterprise AI Transformation: $50M Loss to $200M Profit Success Story | Zion Tech Group',
  description: 'Discover how a Fortune 500 manufacturing company achieved unprecedented success through comprehensive AI transformation, turning a $50M annual loss into $200M profit.',
  keywords: ['AI Transformation', 'Manufacturing', 'ROI', 'Success Story', 'Enterprise', 'Case Study'],
  openGraph: {
    title: 'Enterprise AI Transformation: $50M Loss to $200M Profit Success Story',
    description: 'Discover how a Fortune 500 manufacturing company achieved unprecedented success through comprehensive AI transformation.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI Transformation', 'Manufacturing', 'ROI', 'Success Story', 'Enterprise'],
  },
};

export default function EnterpriseTransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Enterprise AI Transformation: $50M Loss to $200M Profit Success Story"
        description="Discover how a Fortune 500 manufacturing company achieved unprecedented success through comprehensive AI transformation, turning a $50M annual loss into $200M profit."
        keywords="AI Transformation, Manufacturing, ROI, Success Story, Enterprise, Case Study"
        url="/case-studies/enterprise-ai-transformation-success-story"
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📈 CASE STUDY</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            From $50M Loss to $200M Profit in 18 Months
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
            How a Fortune 500 manufacturing company achieved unprecedented success through comprehensive AI transformation. 
            Real results, real strategies, real impact.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 15, 2025
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              10 min read
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Zion Tech Group
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Fortune 500 Company
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Executive Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>$50M annual losses</strong> for three consecutive years</li>
                  <li>• <strong>35% production downtime</strong> due to equipment failures</li>
                  <li>• <strong>Market share declining</strong> from 25% to 12%</li>
                  <li>• <strong>Customer satisfaction</strong> at all-time low (2.1/5.0)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Results</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>$200M annual profit</strong> achieved in 18 months</li>
                  <li>• <strong>400% ROI</strong> on AI investment</li>
                  <li>• <strong>Market share recovered</strong> to 28%</li>
                  <li>• <strong>Customer satisfaction</strong> improved to 4.7/5.0</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Results */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Transformation Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-green-600" />
                  Financial Transformation
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Revenue</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">$800M → $1.2B</div>
                      <div className="text-sm text-gray-500">+50% increase</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Profit</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">-$50M → +$200M</div>
                      <div className="text-sm text-gray-500">$250M swing</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Profit Margin</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">-6.25% → +16.7%</div>
                      <div className="text-sm text-gray-500">+22.95% improvement</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Stock Price</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">$12 → $65</div>
                      <div className="text-sm text-gray-500">5x increase</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
                  Operational Excellence
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Equipment Uptime</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">65% → 95%</div>
                      <div className="text-sm text-gray-500">+30% improvement</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Production Speed</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">100 → 180 units/hr</div>
                      <div className="text-sm text-gray-500">+80% increase</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Quality Defects</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">15% → 0.8%</div>
                      <div className="text-sm text-gray-500">-94% reduction</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Energy Efficiency</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">40% → 90%</div>
                      <div className="text-sm text-gray-500">+50% improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Strategy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Strategy</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1: Foundation Building (Months 1-6)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">AI Readiness Assessment</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Comprehensive audit of existing systems</li>
                      <li>• Data quality evaluation across departments</li>
                      <li>• Technology infrastructure assessment</li>
                      <li>• Staff skill gap analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Infrastructure Transformation</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Migrated to cloud-based AI platform</li>
                      <li>• Implemented real-time data pipelines</li>
                      <li>• Deployed edge computing for manufacturing</li>
                      <li>• Established data governance frameworks</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <div className="text-blue-800 font-semibold">Investment: $25M in infrastructure and training</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2: AI Implementation (Months 7-12)</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Predictive Maintenance System</h4>
                      <ul className="text-gray-600 space-y-2 text-sm">
                        <li>• Machine learning algorithms for equipment monitoring</li>
                        <li>• IoT sensors on 10,000+ machines</li>
                        <li>• <strong>85% reduction</strong> in unplanned downtime</li>
                        <li>• <strong>$35M annual savings</strong></li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Supply Chain Optimization</h4>
                      <ul className="text-gray-600 space-y-2 text-sm">
                        <li>• AI-powered demand forecasting</li>
                        <li>• Real-time inventory management</li>
                        <li>• <strong>60% reduction</strong> in inventory costs</li>
                        <li>• <strong>$45M annual savings</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Quality Control Automation</h4>
                      <ul className="text-gray-600 space-y-2 text-sm">
                        <li>• Computer vision for defect detection</li>
                        <li>• AI cameras on production lines</li>
                        <li>• <strong>95% reduction</strong> in quality defects</li>
                        <li>• <strong>$20M annual savings</strong></li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Energy Management System</h4>
                      <ul className="text-gray-600 space-y-2 text-sm">
                        <li>• AI optimization for energy consumption</li>
                        <li>• Smart grid integration</li>
                        <li>• <strong>50% reduction</strong> in energy costs</li>
                        <li>• <strong>$30M annual savings</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">ROI Analysis</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Infrastructure</span>
                      <span className="font-semibold">$25M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Software and Licenses</span>
                      <span className="font-semibold">$15M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Training and Consulting</span>
                      <span className="font-semibold">$10M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Integration and Development</span>
                      <span className="font-semibold">$20M</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-bold text-gray-900">Total Investment</span>
                      <span className="font-bold text-gray-900">$70M</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Returns</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost Savings</span>
                      <span className="font-semibold text-green-600">$130M annually</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue Increase</span>
                      <span className="font-semibold text-green-600">$400M annually</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Annual Benefit</span>
                      <span className="font-semibold text-green-600">$530M</span>
                    </div>
                    <div className="border-t pt-3 space-y-2">
                      <div className="flex justify-between">
                        <span className="font-bold text-gray-900">ROI</span>
                        <span className="font-bold text-green-600">400% in first year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold text-gray-900">Payback Period</span>
                        <span className="font-bold text-green-600">5 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Zion Tech Group specializes in enterprise AI transformations like this one. 
              Our proven methodology has helped dozens of companies achieve similar results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">300-500%</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">18 Mo</div>
                <div className="text-sm opacity-90">Implementation Time</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </Link>
              <Link
                href="/consultation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}