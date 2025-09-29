import React from 'react';
import Link from 'next/link';

export function AICostCalculatorBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                New Article
              </span>
              <span className="text-sm opacity-90">January 20, 2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Cost Calculator 2026: Optimize Your AI Spending
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Calculate and optimize your AI costs with our comprehensive guide. Save up to 70% 
              on LLM expenses with proven strategies and real-world case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-cost-calculator-2026"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Article
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Quick Savings Preview</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Current Monthly Cost:</span>
                <span className="font-bold text-red-300">$2,450</span>
              </div>
              <div className="flex justify-between items-center">
                <span>With Optimization:</span>
                <span className="font-bold text-green-300">$735</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Potential Savings:</span>
                <span className="text-green-300">70%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AIImplementationPlaybookBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Featured Guide
              </span>
              <span className="text-sm opacity-90">January 20, 2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Implementation Playbook 2026
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Master AI implementation with our comprehensive enterprise guide. From strategy 
              to deployment, achieve 300% ROI with proven methodologies and real-world examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-implementation-playbook-2026"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Implementation Phases</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">1</span>
                </div>
                <span>Strategy & Planning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">2</span>
                </div>
                <span>Pilot Implementation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">3</span>
                </div>
                <span>Scaling & Deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">4</span>
                </div>
                <span>Optimization & Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SupplyChainOptimizationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Success Story
              </span>
              <span className="text-sm opacity-90">Manufacturing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Supply Chain: 85% Efficiency & $5M Savings
            </h2>
            <p className="text-lg mb-6 opacity-90">
              See how we transformed a global manufacturer's supply chain with AI, achieving 
              unprecedented efficiency gains and massive cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-supply-chain-optimization-2026"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Case Study
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Optimize Your Supply Chain
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Results Achieved</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-1">85%</div>
                <div className="text-sm opacity-90">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">$5M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-1">60%</div>
                <div className="text-sm opacity-90">Inventory Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">95%</div>
                <div className="text-sm opacity-90">Forecast Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AI2026TrendsBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              Trending Now
            </span>
            <span className="text-sm opacity-90">2026 AI Trends</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Trends 2026: What's Next in Enterprise AI
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            Discover the latest AI trends shaping enterprise transformation in 2026. 
            From autonomous agents to edge computing, stay ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore AI Trends
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Get AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InteractiveAICalculatorBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Interactive Tool
              </span>
              <span className="text-sm opacity-90">Free Calculator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI ROI Calculator: Calculate Your Potential Savings
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Use our interactive calculator to estimate your potential AI cost savings and ROI. 
              Get personalized recommendations based on your specific use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-cost-calculator-2026"
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Try Calculator
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Get Custom Analysis
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Quick Estimate</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Monthly API Calls</label>
                <input
                  type="number"
                  placeholder="1,000,000"
                  className="w-full px-3 py-2 rounded-lg text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Average Tokens/Call</label>
                <input
                  type="number"
                  placeholder="500"
                  className="w-full px-3 py-2 rounded-lg text-gray-900"
                />
              </div>
              <div className="pt-4 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span>Potential Savings:</span>
                  <span className="text-2xl font-bold text-green-300">70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EnterpriseAIReadinessBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Assessment Tool
              </span>
              <span className="text-sm opacity-90">Free Analysis</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise AI Readiness Assessment
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Evaluate your organization's AI readiness with our comprehensive assessment. 
              Get personalized recommendations and a roadmap for AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View AI Services
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Assessment Areas</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Data Quality & Availability</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏗️</span>
                <span>Technical Infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">👥</span>
                <span>Organizational Readiness</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>Use Case Identification</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span>Governance & Risk Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}