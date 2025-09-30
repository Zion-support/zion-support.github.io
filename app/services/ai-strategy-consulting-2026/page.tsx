import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Strategy Consulting 2026 | Transform Your Enterprise | Zion Tech Group',
  description: 'End-to-end AI strategy consulting. From roadmap to execution, achieve 300% ROI with proven methodologies. CTO-led consulting for Fortune 500 companies.',
  keywords: 'AI strategy consulting, AI transformation, AI roadmap, enterprise AI strategy, AI implementation, digital transformation consulting, AI ROI',
};

export default function AIStrategyConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
            🎯 CTO-LED AI STRATEGY CONSULTING
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Enterprise with Strategic AI
          </h1>
          <p className="text-2xl mb-8 opacity-90 max-w-4xl">
            From vision to execution - comprehensive AI strategy consulting that delivers 300% ROI and sustainable competitive advantage.
          </p>
          <div className="flex flex-wrap gap-8 text-lg mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>300% Average ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Fortune 500 Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>12-Week Roadmap</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Schedule Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Proven Results Across Industries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600 font-semibold">Average ROI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">$250M+</div>
              <div className="text-gray-600 font-semibold">Value Created</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Enterprises</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600 font-semibold">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Our Strategic Consulting Methodology
          </h2>
          <p className="text-center text-gray-600 mb-16 text-xl max-w-3xl mx-auto">
            A battle-tested framework used by Fortune 500 companies to achieve AI transformation
          </p>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery & Assessment (Weeks 1-3)</h3>
                  <p className="text-gray-700 mb-4">
                    Deep dive into your business objectives, technology landscape, and organizational readiness. 
                    Identify high-impact AI opportunities aligned with strategic priorities.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-blue-600 mb-1">Business Analysis</div>
                      <div className="text-sm text-gray-600">Stakeholder interviews, process mapping, pain point identification</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-blue-600 mb-1">Technical Audit</div>
                      <div className="text-sm text-gray-600">Infrastructure assessment, data readiness, skills gap analysis</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-blue-600 mb-1">Opportunity Scoring</div>
                      <div className="text-sm text-gray-600">ROI modeling, feasibility assessment, prioritization framework</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategy Development (Weeks 4-6)</h3>
                  <p className="text-gray-700 mb-4">
                    Craft a comprehensive AI roadmap with clear milestones, resource requirements, and success metrics. 
                    Define governance, ethics, and risk management frameworks.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-purple-600 mb-1">AI Roadmap</div>
                      <div className="text-sm text-gray-600">3-year strategic plan, phased implementation, quick wins identification</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-purple-600 mb-1">Business Case</div>
                      <div className="text-sm text-gray-600">Financial modeling, risk analysis, executive presentation deck</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-purple-600 mb-1">Governance Framework</div>
                      <div className="text-sm text-gray-600">AI ethics, compliance, organizational structure, policies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Pilot Implementation (Weeks 7-10)</h3>
                  <p className="text-gray-700 mb-4">
                    Execute high-value pilot projects to validate strategy, demonstrate ROI, and build internal momentum. 
                    Rapid prototyping with production-ready architecture.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-green-600 mb-1">Quick Win Projects</div>
                      <div className="text-sm text-gray-600">2-3 high-impact pilots, measurable business outcomes, stakeholder buy-in</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-green-600 mb-1">Technical Foundation</div>
                      <div className="text-sm text-gray-600">MLOps pipelines, data infrastructure, model deployment platforms</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-green-600 mb-1">Team Enablement</div>
                      <div className="text-sm text-gray-600">Training programs, best practices, knowledge transfer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Scale & Optimization (Weeks 11-12+)</h3>
                  <p className="text-gray-700 mb-4">
                    Scale successful pilots enterprise-wide. Establish centers of excellence, optimize operations, 
                    and create self-sustaining AI capabilities.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-orange-600 mb-1">Enterprise Rollout</div>
                      <div className="text-sm text-gray-600">Deployment strategy, change management, adoption tracking</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-orange-600 mb-1">Center of Excellence</div>
                      <div className="text-sm text-gray-600">Organizational structure, talent development, best practices</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-orange-600 mb-1">Continuous Improvement</div>
                      <div className="text-sm text-gray-600">Performance monitoring, optimization, innovation pipeline</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What You Get
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Strategy Roadmap</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive 3-year plan with quarterly milestones, resource requirements, and success metrics
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ROI Business Case</h3>
              <p className="text-gray-600 text-sm">
                Detailed financial projections, risk analysis, and executive presentation materials
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Architecture</h3>
              <p className="text-gray-600 text-sm">
                End-to-end architecture design, technology stack recommendations, integration blueprints
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Use Case Portfolio</h3>
              <p className="text-gray-600 text-sm">
                Prioritized AI opportunities with feasibility assessments and implementation plans
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Governance Framework</h3>
              <p className="text-gray-600 text-sm">
                AI ethics guidelines, compliance procedures, risk management protocols
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Team Enablement</h3>
              <p className="text-gray-600 text-sm">
                Training programs, hiring guides, organizational design recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Client Success Story
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-300">
            <div className="mb-6">
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                FORTUNE 100 MANUFACTURING
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                $100M Value Creation in 18 Months
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                A global manufacturing leader engaged us to transform their operations with AI. We developed a 
                comprehensive strategy spanning predictive maintenance, supply chain optimization, and quality control.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$100M</div>
                <div className="text-gray-600 font-semibold">Total Value Created</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600 font-semibold">Defect Reduction</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-gray-600 font-semibold">Downtime ↓</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">18 mo</div>
                <div className="text-gray-600 font-semibold">Transformation Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a complimentary strategy session with our AI experts. Let's discuss how we can drive 300% ROI for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="text-sm opacity-80">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}