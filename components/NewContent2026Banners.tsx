import React from 'react';
import Link from 'next/link';

export function AIPredictions2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
              <span className="text-sm opacity-90">25 min read</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              AI Predictions 2026: The Future of Artificial Intelligence
            </h3>
            <p className="text-purple-100 mb-4 max-w-2xl">
              Discover the top AI predictions for 2026 including autonomous agents, quantum AI, 
              and enterprise transformation trends that will reshape business forever.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded">Autonomous Enterprise</span>
              <span className="bg-white/20 px-2 py-1 rounded">Quantum AI</span>
              <span className="bg-white/20 px-2 py-1 rounded">Edge Computing</span>
              <span className="bg-white/20 px-2 py-1 rounded">AI Agents</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/ai-2026-predictions"
              className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
            >
              Read Predictions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
            >
              Get AI Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AIEnterpriseAutomationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                ENTERPRISE AUTOMATION
              </span>
              <span className="text-sm opacity-90">18 min read</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              AI Enterprise Automation 2026: Complete Business Process Transformation
            </h3>
            <p className="text-green-100 mb-4 max-w-2xl">
              Transform your enterprise with AI automation. 95% process efficiency, $5M+ savings, 
              and zero-touch operations. Master the complete implementation framework for 2026.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded">95% Automation</span>
              <span className="bg-white/20 px-2 py-1 rounded">$5M+ Savings</span>
              <span className="bg-white/20 px-2 py-1 rounded">Zero-Touch Ops</span>
              <span className="bg-white/20 px-2 py-1 rounded">300% Productivity</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/ai-enterprise-automation-2026"
              className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
            >
              Read Guide
            </Link>
            <Link
              href="/services/ai-workflow-automation"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ManufacturingExcellenceBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                MANUFACTURING CASE STUDY
              </span>
              <span className="text-sm opacity-90">Fortune 500</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              AI Manufacturing Excellence 2026: $15M ROI Case Study
            </h3>
            <p className="text-orange-100 mb-4 max-w-2xl">
              See how a Fortune 500 manufacturer achieved $15M ROI with AI transformation. 
              98% automation, 400% productivity gains, and zero-defect production across 12 facilities.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded">$15M ROI</span>
              <span className="bg-white/20 px-2 py-1 rounded">98% Automation</span>
              <span className="bg-white/20 px-2 py-1 rounded">Zero Defects</span>
              <span className="bg-white/20 px-2 py-1 rounded">400% Productivity</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/case-studies/ai-manufacturing-excellence-2026"
              className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
            >
              View Case Study
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
            >
              Get Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AIInnovationShowcaseBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest AI Innovations & Breakthroughs
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Stay ahead with cutting-edge AI technologies and revolutionary solutions that are transforming industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/ai-2026-predictions" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm opacity-90">25 min read</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                AI Predictions 2026
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Discover the top AI predictions for 2026 including autonomous agents, quantum AI, and enterprise transformation trends.
              </p>
              <div className="text-yellow-200 font-semibold text-sm">Read Article →</div>
            </div>
          </Link>

          <Link href="/blog/ai-enterprise-automation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                  AUTOMATION
                </span>
                <span className="text-sm opacity-90">18 min read</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                Enterprise Automation 2026
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Transform your enterprise with AI automation. 95% process efficiency, $5M+ savings, and zero-touch operations.
              </p>
              <div className="text-yellow-200 font-semibold text-sm">Read Guide →</div>
            </div>
          </Link>

          <Link href="/case-studies/ai-manufacturing-excellence-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                  CASE STUDY
                </span>
                <span className="text-sm opacity-90">Fortune 500</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                Manufacturing Excellence
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                $15M ROI case study with 98% automation, 400% productivity gains, and zero-defect production.
              </p>
              <div className="text-yellow-200 font-semibold text-sm">View Case Study →</div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-block bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Innovations
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AIROICalculatorBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your AI Transformation ROI
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Discover the potential return on investment for AI transformation in your organization. 
            Get personalized insights and recommendations based on your specific industry and requirements.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick ROI Assessment</h3>
              <p className="text-cyan-100 mb-6">
                Answer a few questions to get an instant estimate of your potential AI transformation ROI.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Company Size</label>
                  <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white">
                    <option value="">Select company size</option>
                    <option value="startup">Startup (1-50 employees)</option>
                    <option value="small">Small (51-200 employees)</option>
                    <option value="medium">Medium (201-1000 employees)</option>
                    <option value="large">Large (1000+ employees)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Industry</label>
                  <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white">
                    <option value="">Select industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Current AI Maturity</label>
                  <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white">
                    <option value="">Select maturity level</option>
                    <option value="beginner">Beginner (No AI implementation)</option>
                    <option value="basic">Basic (Limited AI use)</option>
                    <option value="intermediate">Intermediate (Some AI processes)</option>
                    <option value="advanced">Advanced (Comprehensive AI)</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Potential ROI</h3>
              <div className="bg-white/20 rounded-lg p-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">$2.5M - $8M</div>
                  <div className="text-cyan-100">Annual Savings Potential</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-cyan-100">Process Automation</span>
                  <span className="text-white font-semibold">85-95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Cost Reduction</span>
                  <span className="text-white font-semibold">40-60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Productivity Gain</span>
                  <span className="text-white font-semibold">200-400%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">ROI Timeline</span>
                  <span className="text-white font-semibold">6-12 months</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Get Detailed AI Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}