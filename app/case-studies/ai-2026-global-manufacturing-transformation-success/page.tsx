import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function GlobalManufacturingTransformationSuccess() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Global Manufacturing AI Transformation Success - 2026 Case Study"
        description="How a Fortune 500 manufacturing giant achieved 300% efficiency gains through AI transformation. Real results, proven strategies, and implementation insights."
        keywords="AI transformation, manufacturing automation, Fortune 500, case study, AI success, efficiency gains"
        url="/case-studies/ai-2026-global-manufacturing-transformation-success"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SUCCESS CASE STUDY
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Global Manufacturing AI Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              How a Fortune 500 manufacturing giant achieved 300% efficiency gains, 
              $2.3B in cost savings, and revolutionized their global operations with AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400">300%</div>
                <div className="text-gray-300">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">$2.3B</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">95%</div>
                <div className="text-gray-300">Quality Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Declining Efficiency</h3>
                    <p className="text-gray-600">
                      Manufacturing efficiency had plateaued at 65% with traditional methods, 
                      unable to meet growing demand and quality requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Rising Costs</h3>
                    <p className="text-gray-600">
                      Operational costs were increasing by 15% annually due to manual processes, 
                      quality issues, and inefficient resource allocation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Issues</h3>
                    <p className="text-gray-600">
                      Defect rates were at 8%, leading to customer complaints, 
                      warranty claims, and brand reputation damage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale Complexity</h3>
                    <p className="text-gray-600">
                      Managing 47 manufacturing facilities across 23 countries with 
                      inconsistent processes and limited visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Before AI Implementation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Manufacturing Efficiency</span>
                  <span className="text-red-500 font-semibold">65%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Defect Rate</span>
                  <span className="text-red-500 font-semibold">8%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Energy Consumption</span>
                  <span className="text-red-500 font-semibold">High</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Predictive Maintenance</span>
                  <span className="text-red-500 font-semibold">None</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Data Utilization</span>
                  <span className="text-red-500 font-semibold">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our AI Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive AI transformation strategy that revolutionized every aspect of their manufacturing operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Predictive Maintenance */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Maintenance</h3>
              <p className="text-gray-600 mb-6">
                AI-powered predictive maintenance reduced unplanned downtime by 85% and extended equipment life by 40%.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Real-time equipment monitoring
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Failure prediction algorithms
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Automated maintenance scheduling
                </div>
              </div>
            </div>

            {/* Quality Control */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Quality Control</h3>
              <p className="text-gray-600 mb-6">
                Computer vision and machine learning reduced defect rates from 8% to 0.4% while improving consistency.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Real-time defect detection
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Automated quality scoring
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Continuous improvement feedback
                </div>
              </div>
            </div>

            {/* Supply Chain Optimization */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain AI</h3>
              <p className="text-gray-600 mb-6">
                Intelligent supply chain optimization reduced inventory costs by 35% and improved delivery times by 60%.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Demand forecasting
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Dynamic inventory management
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Route optimization
                </div>
              </div>
            </div>

            {/* Energy Optimization */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy Optimization</h3>
              <p className="text-gray-600 mb-6">
                AI-driven energy management reduced consumption by 45% while maintaining production levels.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Smart grid integration
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Load balancing algorithms
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Renewable energy optimization
                </div>
              </div>
            </div>

            {/* Process Automation */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600 mb-6">
                Robotic process automation eliminated 70% of manual tasks and improved accuracy to 99.8%.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  End-to-end automation
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Intelligent workflow management
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Exception handling
                </div>
              </div>
            </div>

            {/* Data Analytics */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 mb-6">
                Real-time analytics and insights enabled data-driven decision making across all operations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Real-time dashboards
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Predictive analytics
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Performance optimization
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Outstanding Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI transformation delivered measurable results that exceeded all expectations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">After AI Implementation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Manufacturing Efficiency</span>
                  <span className="text-green-500 font-semibold">95%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Defect Rate</span>
                  <span className="text-green-500 font-semibold">0.4%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Energy Consumption</span>
                  <span className="text-green-500 font-semibold">-45%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Predictive Maintenance</span>
                  <span className="text-green-500 font-semibold">85% Reduction</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Data Utilization</span>
                  <span className="text-green-500 font-semibold">95%</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Key Achievements</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-4 flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">300% Efficiency Increase</h4>
                    <p className="text-gray-600">
                      Manufacturing efficiency jumped from 65% to 95% through AI optimization of all processes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-4 flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">$2.3B Cost Savings</h4>
                    <p className="text-gray-600">
                      Annual cost savings of $2.3 billion through reduced waste, energy optimization, and efficiency gains.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-4 flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">95% Quality Improvement</h4>
                    <p className="text-gray-600">
                      Defect rates reduced from 8% to 0.4%, resulting in higher customer satisfaction and reduced warranty claims.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-4 flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Standardization</h4>
                    <p className="text-gray-600">
                      Achieved consistent processes across all 47 facilities worldwide, enabling better coordination and control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured 18-month implementation plan that delivered results at every phase
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-blue-600 text-white rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Phase 1: Foundation (Months 1-3)</h3>
                    <p className="text-blue-100">
                      Data infrastructure setup, AI platform deployment, and initial pilot programs at 3 facilities.
                    </p>
                    <div className="mt-4 text-sm">
                      <div className="flex items-center mb-1">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Data collection systems
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        AI platform setup
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Pilot implementations
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-gray-500">
                    <div className="text-2xl font-bold">Q1 2025</div>
                    <div>Foundation Phase</div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-gray-500">
                    <div className="text-2xl font-bold">Q2 2025</div>
                    <div>Expansion Phase</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-green-600 text-white rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Phase 2: Expansion (Months 4-9)</h3>
                    <p className="text-green-100">
                      Rollout to 15 facilities, implementation of predictive maintenance and quality control systems.
                    </p>
                    <div className="mt-4 text-sm">
                      <div className="flex items-center mb-1">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Predictive maintenance
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Quality control AI
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Process automation
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-purple-600 text-white rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Phase 3: Optimization (Months 10-15)</h3>
                    <p className="text-purple-100">
                      Full global rollout, advanced analytics implementation, and continuous optimization.
                    </p>
                    <div className="mt-4 text-sm">
                      <div className="flex items-center mb-1">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Global deployment
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Advanced analytics
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Performance optimization
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-gray-500">
                    <div className="text-2xl font-bold">Q3-Q4 2025</div>
                    <div>Optimization Phase</div>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-gray-500">
                    <div className="text-2xl font-bold">Q1 2026</div>
                    <div>Maturity Phase</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-orange-600 text-white rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Phase 4: Maturity (Months 16-18)</h3>
                    <p className="text-orange-100">
                      Full system maturity, advanced AI capabilities, and preparation for next-generation technologies.
                    </p>
                    <div className="mt-4 text-sm">
                      <div className="flex items-center mb-1">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Full maturity
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Advanced AI features
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Future roadmap
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Return on Investment
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The AI transformation delivered exceptional ROI with payback achieved in just 8 months
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-300 mb-2">8</div>
              <div className="text-xl text-gray-200">Months to Payback</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-300 mb-2">450%</div>
              <div className="text-xl text-gray-200">3-Year ROI</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-300 mb-2">$2.3B</div>
              <div className="text-xl text-gray-200">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-300 mb-2">18</div>
              <div className="text-xl text-gray-200">Months Implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our proven AI implementation methodology can help your organization achieve similar results. 
            Let's discuss how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Transformation
            </Link>
            <Link 
              href="/resources/ai-2026-implementation-toolkit" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}