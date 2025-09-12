import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ClockIcon, UserIcon, TagIcon, ArrowRightIcon, CheckIcon, StarIcon, TrendingUpIcon, DollarSignIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'AI Enterprise Transformation Success: $100M Revenue Impact Case Study | Zion Tech Group',
  description: 'Discover how a Fortune 500 company achieved $100M revenue impact through comprehensive AI transformation. Learn the strategies, challenges, and results.',
  keywords: 'AI transformation, enterprise AI, case study, revenue impact, Fortune 500, AI success story',
  openGraph: {
    title: 'AI Enterprise Transformation Success: $100M Revenue Impact Case Study',
    description: 'Discover how a Fortune 500 company achieved $100M revenue impact through comprehensive AI transformation. Learn the strategies, challenges, and results.',
    type: 'article',
  },
};

export default function AIEnterpriseTransformationSuccess2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Enterprise Transformation Success
            </h1>
            <p className="text-xl md:text-2xl text-emerald-200 mb-8 max-w-3xl mx-auto">
              $100M Revenue Impact Case Study: How a Fortune 500 company achieved unprecedented 
              growth through comprehensive AI transformation in just 18 months.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                <span>18 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                <span>Zion Tech Group</span>
              </div>
              <div className="flex items-center gap-2">
                <TagIcon className="w-4 h-4" />
                <span>Case Study</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Banner */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Transformation Results</h2>
            <p className="text-xl text-emerald-100">Measurable impact achieved in 18 months</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$100M</div>
              <div className="text-emerald-200">Revenue Impact</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">340%</div>
              <div className="text-emerald-200">ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-emerald-200">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-emerald-200">Months to ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Executive Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This case study details how a Fortune 500 manufacturing company achieved a $100M revenue impact 
              through comprehensive AI transformation. The 18-month journey involved strategic planning, 
              phased implementation, and cultural change management that resulted in unprecedented business outcomes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Company Profile</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fortune 500 Manufacturing Company</li>
                  <li>• 50,000+ employees globally</li>
                  <li>• $5B+ annual revenue</li>
                  <li>• Operations in 25+ countries</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Declining operational efficiency</li>
                  <li>• Rising labor costs</li>
                  <li>• Increasing competition</li>
                  <li>• Manual process bottlenecks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The company was facing significant operational challenges that threatened its competitive position 
            and profitability. Despite being a market leader, inefficiencies in core processes were eroding margins 
            and limiting growth potential.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-900 mb-3">Critical Issues Identified</h3>
            <ul className="space-y-2 text-red-800">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Manual data entry consuming 40% of workforce time</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Supply chain inefficiencies causing 15% inventory waste</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Quality control processes with 8% defect rates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Customer service response times averaging 48 hours</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">$50M</div>
              <div className="text-gray-700">Annual Losses</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
              <div className="text-gray-700">Efficiency Gap</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">40%</div>
              <div className="text-gray-700">Manual Processes</div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our team developed a comprehensive AI transformation strategy that addressed core operational 
            challenges while building a foundation for sustainable growth and innovation.
          </p>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1: Strategic Assessment (Months 1-3)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Activities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Comprehensive process mapping</li>
                    <li>• AI readiness assessment</li>
                    <li>• Technology stack evaluation</li>
                    <li>• Change management planning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Deliverables</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI transformation roadmap</li>
                    <li>• ROI projections and timeline</li>
                    <li>• Technology architecture design</li>
                    <li>• Training and adoption plan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2: Pilot Implementation (Months 4-9)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Pilot Areas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Supply chain optimization</li>
                    <li>• Quality control automation</li>
                    <li>• Customer service chatbots</li>
                    <li>• Predictive maintenance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 30% reduction in processing time</li>
                    <li>• 25% improvement in accuracy</li>
                    <li>• 40% cost savings in pilot areas</li>
                    <li>• 95% user satisfaction rate</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 3: Enterprise Rollout (Months 10-18)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Implementation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cross-functional deployment</li>
                    <li>• Advanced AI capabilities</li>
                    <li>• System integration</li>
                    <li>• Continuous optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Impact</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• $100M revenue impact</li>
                    <li>• 60% cost reduction</li>
                    <li>• 340% ROI achieved</li>
                    <li>• 18-month payback period</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Technologies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Technologies Implemented</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning Models</h3>
              <p className="text-gray-700 mb-4">
                Custom ML models for demand forecasting, quality prediction, and maintenance scheduling.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 95% accuracy in demand forecasting</li>
                <li>• 90% reduction in quality defects</li>
                <li>• 80% improvement in maintenance efficiency</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Automation</h3>
              <p className="text-gray-700 mb-4">
                RPA and intelligent automation for routine tasks and workflow optimization.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 80% reduction in manual tasks</li>
                <li>• 99.9% accuracy in data processing</li>
                <li>• 24/7 automated operations</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-700 mb-4">
                Advanced analytics for real-time decision making and strategic planning.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Real-time performance monitoring</li>
                <li>• Predictive maintenance scheduling</li>
                <li>• Dynamic pricing optimization</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Chatbots</h3>
              <p className="text-gray-700 mb-4">
                Intelligent customer service and internal support automation.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 90% customer query resolution</li>
                <li>• 60% reduction in response time</li>
                <li>• 24/7 customer support</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Integration</h3>
              <p className="text-gray-700 mb-4">
                Seamless integration with existing ERP, CRM, and operational systems.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Unified data platform</li>
                <li>• Real-time synchronization</li>
                <li>• Legacy system compatibility</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Compliance</h3>
              <p className="text-gray-700 mb-4">
                Enterprise-grade security and regulatory compliance frameworks.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• End-to-end encryption</li>
                <li>• GDPR compliance</li>
                <li>• SOC 2 certification</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The AI transformation delivered unprecedented results across all key business metrics, 
            establishing the company as an industry leader in digital innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Revenue Impact</span>
                  <span className="text-2xl font-bold text-green-600">$100M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">$60M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ROI</span>
                  <span className="text-2xl font-bold text-green-600">340%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Payback Period</span>
                  <span className="text-2xl font-bold text-green-600">18 months</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Operational Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Process Efficiency</span>
                  <span className="text-2xl font-bold text-blue-600">+60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Quality Improvement</span>
                  <span className="text-2xl font-bold text-blue-600">+90%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Response Time</span>
                  <span className="text-2xl font-bold text-blue-600">-80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Customer Satisfaction</span>
                  <span className="text-2xl font-bold text-blue-600">+95%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Automated 95% of routine business processes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Reduced operational costs by 60%</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Improved customer satisfaction to 95%</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Achieved 99.9% system uptime</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Eliminated 80% of manual data entry</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Reduced quality defects by 90%</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Accelerated decision-making by 70%</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Enabled 24/7 automated operations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">What Worked Well</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Strong executive sponsorship and leadership</li>
                <li>• Phased approach with quick wins</li>
                <li>• Comprehensive change management</li>
                <li>• Investment in training and development</li>
                <li>• Clear success metrics and KPIs</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Challenges Overcome</h3>
              <ul className="space-y-2 text-orange-800">
                <li>• Legacy system integration complexity</li>
                <li>• Employee resistance to change</li>
                <li>• Data quality and consistency issues</li>
                <li>• Scalability and performance concerns</li>
                <li>• Regulatory compliance requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
              Learn how your organization can achieve similar results with our proven AI transformation 
              methodology. Get your personalized assessment and implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/resources/ai-implementation-master-guide-2025"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* Related Case Studies */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
              <article className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  AI Healthcare Diagnosis Success
                </h3>
                <p className="text-gray-600 mb-4">
                  95% accuracy and 80% faster processing in healthcare AI implementation.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Read Case Study
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
              <article className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  AI Autonomous Manufacturing Success
                </h3>
                <p className="text-gray-600 mb-4">
                  $200M savings through AI autonomous systems in manufacturing.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Read Case Study
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <article className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  AI Financial Services Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  300% ROI through strategic AI implementation in financial services.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Read Case Study
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}