import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI ROI Calculator: Calculate Your AI Investment Return | Zion Tech Group',
  description: 'Calculate the potential return on investment for your AI implementation. Get detailed ROI projections, cost analysis, and business impact estimates.',
  keywords: ['AI ROI calculator', 'AI investment', 'AI ROI', 'AI cost calculator', 'AI business case', 'AI ROI analysis'],
};

export default function ROICalculator() {
  const [formData, setFormData] = useState({
    companySize: '',
    industry: '',
    currentAnnualRevenue: '',
    currentOperationalCosts: '',
    expectedEfficiencyGain: '25',
    expectedCostReduction: '20',
    expectedRevenueIncrease: '15',
    implementationCost: '',
    timeline: '12'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const revenue = parseFloat(formData.currentAnnualRevenue) || 0;
    const costs = parseFloat(formData.currentOperationalCosts) || 0;
    const efficiencyGain = parseFloat(formData.expectedEfficiencyGain) / 100;
    const costReduction = parseFloat(formData.expectedCostReduction) / 100;
    const revenueIncrease = parseFloat(formData.expectedRevenueIncrease) / 100;
    const implementationCost = parseFloat(formData.implementationCost) || 0;
    const timeline = parseInt(formData.timeline);

    // Calculate benefits
    const costSavings = costs * costReduction;
    const revenueGain = revenue * revenueIncrease;
    const efficiencySavings = costs * efficiencyGain * 0.3; // 30% of efficiency gains translate to cost savings
    const totalAnnualBenefits = costSavings + revenueGain + efficiencySavings;

    // Calculate ROI
    const totalBenefits = totalAnnualBenefits * (timeline / 12);
    const netBenefits = totalBenefits - implementationCost;
    const roi = implementationCost > 0 ? (netBenefits / implementationCost) * 100 : 0;
    const paybackPeriod = implementationCost > 0 ? implementationCost / totalAnnualBenefits : 0;

    setResults({
      totalAnnualBenefits,
      totalBenefits,
      netBenefits,
      roi,
      paybackPeriod,
      costSavings,
      revenueGain,
      efficiencySavings
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI ROI Calculator: Calculate Your AI Investment Return"
        description="Calculate the potential return on investment for your AI implementation. Get detailed ROI projections, cost analysis, and business impact estimates."
        keywords="AI ROI calculator, AI investment, AI ROI, AI cost calculator, AI business case, AI ROI analysis"
        url="/tools/roi-calculator"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">💰 ROI CALCULATOR</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI ROI Calculator
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Calculate the potential return on investment for your AI implementation. 
              Get detailed projections and make informed decisions about your AI strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your AI ROI</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select company size</option>
                    <option value="startup">Startup (1-50 employees)</option>
                    <option value="small">Small (51-200 employees)</option>
                    <option value="medium">Medium (201-1000 employees)</option>
                    <option value="large">Large (1000+ employees)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="financial">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Revenue ($)</label>
                  <input
                    type="number"
                    value={formData.currentAnnualRevenue}
                    onChange={(e) => setFormData({...formData, currentAnnualRevenue: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter annual revenue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Operational Costs ($)</label>
                  <input
                    type="number"
                    value={formData.currentOperationalCosts}
                    onChange={(e) => setFormData({...formData, currentOperationalCosts: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter operational costs"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Efficiency Gain (%)</label>
                  <input
                    type="number"
                    value={formData.expectedEfficiencyGain}
                    onChange={(e) => setFormData({...formData, expectedEfficiencyGain: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="25"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Cost Reduction (%)</label>
                  <input
                    type="number"
                    value={formData.expectedCostReduction}
                    onChange={(e) => setFormData({...formData, expectedCostReduction: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Revenue Increase (%)</label>
                  <input
                    type="number"
                    value={formData.expectedRevenueIncrease}
                    onChange={(e) => setFormData({...formData, expectedRevenueIncrease: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="15"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">AI Implementation Cost ($)</label>
                  <input
                    type="number"
                    value={formData.implementationCost}
                    onChange={(e) => setFormData({...formData, implementationCost: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter implementation cost"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Implementation Timeline (months)</label>
                  <input
                    type="number"
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="12"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculateROI}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Calculate ROI
                </button>
              </form>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Analysis Results</h2>
              {results ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-green-600">
                          {results.roi.toFixed(1)}%
                        </div>
                        <div className="text-sm text-gray-600">ROI</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600">
                          {results.paybackPeriod.toFixed(1)} months
                        </div>
                        <div className="text-sm text-gray-600">Payback Period</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Annual Benefits</span>
                      <span className="font-semibold text-gray-900">
                        ${results.totalAnnualBenefits.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Total Benefits ({formData.timeline} months)</span>
                      <span className="font-semibold text-gray-900">
                        ${results.totalBenefits.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Implementation Cost</span>
                      <span className="font-semibold text-gray-900">
                        ${parseFloat(formData.implementationCost || '0').toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-semibold">Net Benefits</span>
                      <span className="font-bold text-green-600 text-lg">
                        ${results.netBenefits.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Breakdown of Benefits</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cost Savings</span>
                        <span className="font-medium">${results.costSavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenue Increase</span>
                        <span className="font-medium">${results.revenueGain.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Efficiency Gains</span>
                        <span className="font-medium">${results.efficiencySavings.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💰</div>
                  <p className="text-gray-500">Fill out the form and click "Calculate ROI" to see your results</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Industry ROI Benchmarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Manufacturing</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1">280%</div>
              <div className="text-sm text-gray-500">Average ROI</div>
              <div className="text-xs text-gray-400 mt-2">8.2 months payback</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Financial Services</h3>
              <div className="text-2xl font-bold text-green-600 mb-1">420%</div>
              <div className="text-sm text-gray-500">Average ROI</div>
              <div className="text-xs text-gray-400 mt-2">6.5 months payback</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare</h3>
              <div className="text-2xl font-bold text-purple-600 mb-1">350%</div>
              <div className="text-sm text-gray-500">Average ROI</div>
              <div className="text-xs text-gray-400 mt-2">7.8 months payback</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Retail</h3>
              <div className="text-2xl font-bold text-orange-600 mb-1">310%</div>
              <div className="text-sm text-gray-500">Average ROI</div>
              <div className="text-xs text-gray-400 mt-2">9.1 months payback</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Better ROI */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tips for Maximizing AI ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start with High-Impact Use Cases</h3>
              <p className="text-gray-600">
                Focus on processes that have the highest potential for automation and efficiency gains. 
                Look for repetitive, rule-based tasks that consume significant resources.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Measure Everything</h3>
              <p className="text-gray-600">
                Establish clear KPIs and metrics from day one. Track both technical performance 
                and business impact to demonstrate ROI and identify optimization opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Iterate and Optimize</h3>
              <p className="text-gray-600">
                AI implementations are not set-and-forget. Continuously monitor performance, 
                gather feedback, and optimize models to maximize returns over time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Invest in Change Management</h3>
              <p className="text-gray-600">
                Success depends on user adoption. Invest in training, communication, and 
                change management to ensure your team embraces AI solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ensure Data Quality</h3>
              <p className="text-gray-600">
                Poor data leads to poor AI outcomes. Invest in data quality initiatives 
                and governance to ensure your AI systems have reliable inputs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Small, Scale Fast</h3>
              <p className="text-gray-600">
                Begin with pilot projects to prove value, then scale quickly based on 
                success. This approach reduces risk and builds organizational confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert guidance to maximize your AI ROI. Our team can help you identify 
              the best use cases and implementation strategies for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/content/ai-2026-implementation-guide"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Read Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/content/ai-2026-implementation-guide" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm font-semibold text-purple-700 mb-2">Implementation Guide</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI 2026 Implementation Guide</h3>
              <p className="text-gray-600">Complete roadmap for successful AI implementation</p>
            </Link>
            
            <Link href="/case-studies/ai-transformation-success-stories" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm font-semibold text-blue-700 mb-2">Case Studies</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Success Stories</h3>
              <p className="text-gray-600">Real-world examples of AI transformation success</p>
            </Link>
            
            <Link href="/blog/ai-2026-enterprise-autonomous-systems" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm font-semibold text-green-700 mb-2">Autonomous Systems</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Autonomous Systems</h3>
              <p className="text-gray-600">How autonomous systems are transforming business</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}