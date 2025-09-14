import React from 'react';
import Link from 'next/link';

const AI2025EnterpriseAutomationMasteryBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M40 40c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>
      
      {/* Floating Automation Elements */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-emerald-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-32 right-20 w-20 h-20 bg-teal-400 rounded-full opacity-30 animate-ping"></div>
      <div className="absolute bottom-24 left-1/4 w-16 h-16 bg-cyan-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-16 right-1/3 w-28 h-28 bg-green-400 rounded-full opacity-30 animate-bounce"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🚀 ENTERPRISE AUTOMATION MASTERY</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
            AI 2025: Enterprise Automation Mastery
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-10 max-w-5xl mx-auto leading-relaxed">
            Master enterprise automation with 
            <span className="text-emerald-300 font-bold"> 450% ROI increases</span>, 
            <span className="text-teal-300 font-bold"> autonomous business processes</span>, and 
            <span className="text-cyan-300 font-bold"> transformative outcomes</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Key Features */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🧠</div>
                <h3 className="text-2xl font-bold">Cognitive Process Automation</h3>
              </div>
              <p className="text-emerald-200 mb-4 text-lg">
                AI systems that understand business context, make intelligent decisions, and create natural language workflows with predictive capabilities.
              </p>
              <div className="text-yellow-300 font-semibold text-lg">→ Explore CPA Solutions</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">⚡</div>
                <h3 className="text-2xl font-bold">Autonomous Business Process Management</h3>
              </div>
              <p className="text-emerald-200 mb-4 text-lg">
                Self-optimizing workflows that improve over time with real-time process adaptation and cross-departmental orchestration.
              </p>
              <div className="text-yellow-300 font-semibold text-lg">→ Discover ABPM</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">📄</div>
                <h3 className="text-2xl font-bold">Intelligent Document Processing</h3>
              </div>
              <p className="text-emerald-200 mb-4 text-lg">
                Advanced OCR with 99.7% accuracy, context-aware understanding, and automated decision-making based on document content.
              </p>
              <div className="text-yellow-300 font-semibold text-lg">→ Learn About IDP</div>
            </div>
          </div>

          {/* Right Column - Success Stories */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🏭</div>
                <h3 className="text-2xl font-bold">Fortune 500 Manufacturing</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300">450%</div>
                  <div className="text-sm text-emerald-200">ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-300">78%</div>
                  <div className="text-sm text-emerald-200">Time Reduction</div>
                </div>
              </div>
              <p className="text-emerald-200 text-sm">
                Complex supply chain automation with AI-powered autonomous planning system achieving $15M annual cost savings.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🏦</div>
                <h3 className="text-2xl font-bold">Financial Services</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-300">99.8%</div>
                  <div className="text-sm text-emerald-200">Compliance Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">67%</div>
                  <div className="text-sm text-emerald-200">Cost Reduction</div>
                </div>
              </div>
              <p className="text-emerald-200 text-sm">
                Autonomous compliance monitoring across 50+ jurisdictions with real-time regulatory updates and $8.5M in prevented penalties.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🏥</div>
                <h3 className="text-2xl font-bold">Healthcare System</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300">34%</div>
                  <div className="text-sm text-emerald-200">Outcome Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-300">56%</div>
                  <div className="text-sm text-emerald-200">Cost Reduction</div>
                </div>
              </div>
              <p className="text-emerald-200 text-sm">
                Patient care automation with intelligent care pathway optimization and 89% patient satisfaction increase.
              </p>
            </div>
          </div>
        </div>

        {/* ROI Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-300 mb-2">450%</div>
            <div className="text-sm text-emerald-200">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-300 mb-2">99.8%</div>
            <div className="text-sm text-emerald-200">Process Speed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-300 mb-2">92%</div>
            <div className="text-sm text-emerald-200">Error Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">$12.3M</div>
            <div className="text-sm text-emerald-200">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">67%</div>
            <div className="text-sm text-emerald-200">Productivity Boost</div>
          </div>
        </div>

        {/* Implementation Phases */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-12 border border-white border-opacity-20 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 text-emerald-200">
            Implementation Framework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🔍</div>
              <h4 className="text-2xl font-bold mb-4 text-emerald-300">Phase 1: Assessment</h4>
              <p className="text-emerald-200">
                Comprehensive process mapping, automation scoring, and ROI projection analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">📋</div>
              <h4 className="text-2xl font-bold mb-4 text-emerald-300">Phase 2: Planning</h4>
              <p className="text-emerald-200">
                Strategic roadmap development, technology selection, and governance establishment.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h4 className="text-2xl font-bold mb-4 text-emerald-300">Phase 3: Pilot</h4>
              <p className="text-emerald-200">
                High-impact pilot projects with full monitoring and optimization.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🌐</div>
              <h4 className="text-2xl font-bold mb-4 text-emerald-300">Phase 4: Scale</h4>
              <p className="text-emerald-200">
                Enterprise-wide rollout with continuous improvement and optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-10">
            <Link
              href="/blog/ai-2025-enterprise-automation-mastery-ultimate-guide"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Read Complete Guide
            </Link>
            <Link
              href="/services/enterprise-automation"
              className="border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-emerald-900 transition-all duration-300 transform hover:scale-105"
            >
              Start Implementation
            </Link>
          </div>
          <p className="text-2xl text-emerald-200 mb-6">
            Join 500+ enterprises mastering automation with proven results
          </p>
          <div className="flex justify-center items-center space-x-12 text-lg text-emerald-300">
            <span>🏭 Manufacturing</span>
            <span>🏦 Financial Services</span>
            <span>🏥 Healthcare</span>
            <span>🛒 Retail & E-commerce</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025EnterpriseAutomationMasteryBanner;