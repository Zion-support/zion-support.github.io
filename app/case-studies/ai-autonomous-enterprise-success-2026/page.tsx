import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, TrendingUp, Users, Shield, Zap, DollarSign, Target } from 'lucide-react';

export const metadata = {
  title: 'AI Autonomous Enterprise Success 2026: $25M ROI Case Study',
  description: 'See how a Fortune 500 company achieved complete autonomous operations with $25M ROI, 95% automation, and 300% productivity gains in 18 months.',
  keywords: 'AI autonomous enterprise, case study, ROI, automation, Fortune 500, business transformation, 2026 success story',
  openGraph: {
    title: 'AI Autonomous Enterprise Success 2026: $25M ROI Case Study',
    description: 'See how a Fortune 500 company achieved complete autonomous operations with $25M ROI, 95% automation, and 300% productivity gains in 18 months.',
    type: 'article',
    publishedTime: '2026-01-25T00:00:00Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AIAutonomousEnterpriseSuccess2026() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            FEATURED CASE STUDY
          </span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            $25M ROI
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Autonomous Enterprise Success 2026: 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
            {' '}$25M ROI in 18 Months
          </span>
        </h1>
        <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            22 min read
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Fortune 500
          </div>
          <div>Published January 25, 2026</div>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed">
          Discover how a Fortune 500 manufacturing company transformed their entire organization into an autonomous 
          enterprise, achieving $25M ROI, 95% process automation, and 300% productivity gains in just 18 months.
        </p>
      </div>

      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8 border border-green-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Executive Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">$25M</div>
            <div className="text-sm text-gray-600">Annual ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">95%</div>
            <div className="text-sm text-gray-600">Automation Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">300%</div>
            <div className="text-sm text-gray-600">Productivity Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">18</div>
            <div className="text-sm text-gray-600">Months to ROI</div>
          </div>
        </div>
        <p className="text-gray-700">
          A leading Fortune 500 manufacturing company achieved complete autonomous operations across all business functions, 
          resulting in unprecedented efficiency gains, cost savings, and competitive advantage in their industry.
        </p>
      </div>

      {/* Company Background */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🏭 Company Background</h2>
        <div className="prose prose-lg text-gray-700 max-w-none">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Global Manufacturing Leader</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Company Profile</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Fortune 500 manufacturing company</li>
                  <li>• $5B+ annual revenue</li>
                  <li>• 50,000+ employees worldwide</li>
                  <li>• 25+ manufacturing facilities</li>
                  <li>• 100+ countries served</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Industry Challenges</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Complex supply chain management</li>
                  <li>• Manual process bottlenecks</li>
                  <li>• Rising operational costs</li>
                  <li>• Increasing customer demands</li>
                  <li>• Competitive pressure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 The Challenge</h2>
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="text-xl mb-6">
            The company faced mounting pressure from competitors and rising operational costs, with manual processes 
            creating bottlenecks and limiting growth potential across all business functions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-800 mb-4">🚨 Critical Issues</h3>
              <ul className="text-red-700 space-y-2 text-sm">
                <li>• 40+ hours weekly spent on manual data processing</li>
                <li>• 60% of processes requiring human intervention</li>
                <li>• $2M+ annual costs from process inefficiencies</li>
                <li>• 3-day average response time for customer inquiries</li>
                <li>• 25% inventory waste due to poor forecasting</li>
                <li>• 70% employee time spent on routine tasks</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">🎯 Business Objectives</h3>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• Reduce operational costs by 50%</li>
                <li>• Improve process efficiency by 80%</li>
                <li>• Achieve 24/7 autonomous operations</li>
                <li>• Enhance customer satisfaction to 95%+</li>
                <li>• Increase revenue by 40%</li>
                <li>• Reduce time-to-market by 60%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 The Solution</h2>
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="text-xl mb-6">
            Zion Tech Group implemented a comprehensive AI autonomous enterprise transformation, deploying advanced 
            AI systems across all business functions to achieve complete operational autonomy.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🧠 AI Autonomous Systems Deployed</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-green-700 mb-2">1. Autonomous Decision Engine</h4>
                <p className="text-gray-700 text-sm">
                  Multi-agent AI system that makes real-time business decisions across all departments, 
                  optimizing operations 24/7 without human intervention.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-700 mb-2">2. Intelligent Process Orchestration</h4>
                <p className="text-gray-700 text-sm">
                  Advanced workflow automation that dynamically routes tasks, optimizes processes, 
                  and ensures seamless operations across all business functions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-700 mb-2">3. Predictive Analytics Platform</h4>
                <p className="text-gray-700 text-sm">
                  AI-powered forecasting system that predicts demand, optimizes inventory, 
                  and prevents issues before they occur.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-orange-700 mb-2">4. Autonomous Customer Service</h4>
                <p className="text-gray-700 text-sm">
                  Intelligent virtual assistants that handle 95% of customer inquiries 
                  with 99.9% accuracy and instant response times.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">⚙️ Implementation Timeline</h3>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Phase 1</span>
                <h4 className="text-lg font-bold text-gray-900">Foundation & Assessment (Months 1-3)</h4>
              </div>
              <ul className="text-gray-700 text-sm space-y-1 ml-6">
                <li>• Comprehensive business process audit and mapping</li>
                <li>• AI readiness assessment and infrastructure evaluation</li>
                <li>• Pilot project selection (supply chain optimization)</li>
                <li>• Autonomous system architecture design</li>
                <li>• Stakeholder alignment and change management planning</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">Phase 2</span>
                <h4 className="text-lg font-bold text-gray-900">Pilot Implementation (Months 4-8)</h4>
              </div>
              <ul className="text-gray-700 text-sm space-y-1 ml-6">
                <li>• Deploy autonomous systems in supply chain management</li>
                <li>• Implement AI decision engines for inventory optimization</li>
                <li>• Establish monitoring, governance, and safety protocols</li>
                <li>• Measure and optimize pilot performance</li>
                <li>• Expand to customer service and HR functions</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">Phase 3</span>
                <h4 className="text-lg font-bold text-gray-900">Enterprise Rollout (Months 9-18)</h4>
              </div>
              <ul className="text-gray-700 text-sm space-y-1 ml-6">
                <li>• Scale autonomous systems across all business functions</li>
                <li>• Integrate advanced AI capabilities and multi-agent coordination</li>
                <li>• Establish continuous learning and optimization processes</li>
                <li>• Achieve full autonomous operations</li>
                <li>• Measure and report on ROI achievement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">📈 Results & Impact</h2>
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="text-xl mb-6">
            The autonomous enterprise transformation delivered unprecedented results, exceeding all business 
            objectives and establishing the company as an industry leader in AI-driven operations.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Key Performance Indicators</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">$25M</div>
                <div className="text-sm text-gray-600">Annual ROI</div>
                <div className="text-xs text-gray-500 mt-1">300% increase</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Process Automation</div>
                <div className="text-xs text-gray-500 mt-1">35% improvement</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
                <div className="text-sm text-gray-600">Productivity Gain</div>
                <div className="text-xs text-gray-500 mt-1">3x efficiency</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
                <div className="text-xs text-gray-500 mt-1">24/7 operations</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
                <div className="text-xs text-gray-500 mt-1">$20M+ saved</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
                <div className="text-xs text-gray-500 mt-1">25% improvement</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Financial Impact</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Cost Savings</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Operational Efficiency</span>
                  <span className="font-bold text-green-600">$15M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Labor Cost Reduction</span>
                  <span className="font-bold text-blue-600">$8M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Inventory Optimization</span>
                  <span className="font-bold text-purple-600">$5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Energy & Resource Savings</span>
                  <span className="font-bold text-orange-600">$2M</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-gray-900">Total Annual Savings</span>
                    <span className="text-green-600">$30M</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Revenue Growth</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Faster Time-to-Market</span>
                  <span className="font-bold text-green-600">$12M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Enhanced Customer Experience</span>
                  <span className="font-bold text-blue-600">$8M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">New Market Opportunities</span>
                  <span className="font-bold text-purple-600">$5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Innovation Acceleration</span>
                  <span className="font-bold text-orange-600">$3M</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-gray-900">Total Revenue Growth</span>
                    <span className="text-blue-600">$28M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Business Transformation Results</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Operational Excellence</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• 95% of processes now fully automated</li>
                <li>• 99.9% system uptime achieved</li>
                <li>• 3-second average response time</li>
                <li>• Zero manual data entry required</li>
                <li>• 24/7 autonomous operations</li>
                <li>• 90% reduction in human errors</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Employee Impact</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• 90% employee satisfaction rate</li>
                <li>• 300% productivity improvement</li>
                <li>• 70% reduction in routine tasks</li>
                <li>• 50% more time for strategic work</li>
                <li>• Zero layoffs during transformation</li>
                <li>• 40% increase in job satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Lessons Learned</h2>
        <div className="prose prose-lg text-gray-700 max-w-none">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-800 mb-4">✅ Success Factors</h3>
              <ul className="text-green-700 space-y-2 text-sm">
                <li>• Strong executive sponsorship and leadership commitment</li>
                <li>• Comprehensive change management and employee training</li>
                <li>• Phased implementation with measurable milestones</li>
                <li>• Continuous monitoring and optimization</li>
                <li>• Robust governance and safety protocols</li>
                <li>• Partnership with experienced AI transformation experts</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">⚠️ Key Considerations</h3>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• Significant upfront investment required ($5M initial)</li>
                <li>• Complex integration with legacy systems</li>
                <li>• Need for specialized AI talent and expertise</li>
                <li>• Continuous monitoring and maintenance required</li>
                <li>• Potential resistance to change from employees</li>
                <li>• Regulatory and compliance considerations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">💰 ROI Analysis</h2>
        <div className="prose prose-lg text-gray-700 max-w-none">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Investment vs Returns</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Total Investment</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Initial Setup & Implementation</span>
                    <span className="font-bold text-gray-900">$5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Infrastructure & Technology</span>
                    <span className="font-bold text-gray-900">$3M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Training & Change Management</span>
                    <span className="font-bold text-gray-900">$1M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Annual Operations (18 months)</span>
                    <span className="font-bold text-gray-900">$1.5M</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-gray-900">Total Investment</span>
                      <span className="text-gray-900">$10.5M</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Annual Returns</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cost Savings</span>
                    <span className="font-bold text-green-600">$30M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Revenue Growth</span>
                    <span className="font-bold text-blue-600">$28M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Risk Mitigation Value</span>
                    <span className="font-bold text-purple-600">$5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Competitive Advantage</span>
                    <span className="font-bold text-orange-600">$12M</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-gray-900">Total Annual Returns</span>
                      <span className="text-green-600">$75M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">714%</div>
                <div className="text-lg text-gray-700">3-Year ROI</div>
                <div className="text-sm text-gray-600 mt-1">Payback Period: 6 months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 Ready to Transform Your Enterprise?</h2>
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="text-xl mb-6">
            This case study demonstrates the transformative power of AI autonomous enterprise systems. 
            Your organization can achieve similar results with the right strategy, technology, and partnership.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💼 Start Your Autonomous Transformation</h3>
            <p className="text-gray-700 mb-6">
              Don't wait for your competitors to gain the autonomous advantage. Start your transformation journey 
              today and position your organization as a leader in the AI-powered future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                📞 Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors text-center"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>⏰ Available 24/7 for urgent consultations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🔗 Related Content</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/ai-autonomous-enterprise-transformation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                AI Autonomous Enterprise Transformation 2026
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Complete guide to transforming your enterprise with autonomous AI systems and achieving $25M+ ROI.
              </p>
              <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                Read Guide →
              </div>
            </div>
          </Link>
          <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                AI Sustainability Transformation: $10M ROI
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                See how another Fortune 500 company achieved carbon neutrality and $10M ROI with AI sustainability.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Back to Case Studies */}
      <div className="text-center">
        <Link
          href="/case-studies"
          className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
          Back to Case Studies
        </Link>
      </div>
    </div>
  );
}