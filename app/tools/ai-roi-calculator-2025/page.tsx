"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIROICalculator2025() {
  const [inputs, setInputs] = useState({
    currentRevenue: '',
    currentCosts: '',
    aiInvestment: '',
    expectedEfficiencyGain: '',
    expectedRevenueGrowth: '',
    implementationTime: '12'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const revenue = parseFloat(inputs.currentRevenue) || 0;
    const costs = parseFloat(inputs.currentCosts) || 0;
    const investment = parseFloat(inputs.aiInvestment) || 0;
    const efficiencyGain = parseFloat(inputs.expectedEfficiencyGain) || 0;
    const revenueGrowth = parseFloat(inputs.expectedRevenueGrowth) || 0;
    const timeMonths = parseFloat(inputs.implementationTime) || 12;

    // Calculate annual benefits
    const costSavings = (costs * efficiencyGain) / 100;
    const revenueIncrease = (revenue * revenueGrowth) / 100;
    const totalAnnualBenefits = costSavings + revenueIncrease;

    // Calculate ROI
    const roi = investment > 0 ? ((totalAnnualBenefits - investment) / investment) * 100 : 0;
    const paybackPeriod = totalAnnualBenefits > 0 ? (investment / totalAnnualBenefits) * 12 : 0;

    // Calculate 3-year projection
    const year1Benefits = totalAnnualBenefits;
    const year2Benefits = totalAnnualBenefits * 1.2; // 20% growth
    const year3Benefits = totalAnnualBenefits * 1.44; // 44% growth
    const total3YearBenefits = year1Benefits + year2Benefits + year3Benefits;
    const net3YearROI = ((total3YearBenefits - investment) / investment) * 100;

    setResults({
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      annualBenefits: Math.round(totalAnnualBenefits),
      costSavings: Math.round(costSavings),
      revenueIncrease: Math.round(revenueIncrease),
      year1Benefits: Math.round(year1Benefits),
      year2Benefits: Math.round(year2Benefits),
      year3Benefits: Math.round(year3Benefits),
      total3YearBenefits: Math.round(total3YearBenefits),
      net3YearROI: Math.round(net3YearROI)
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const resetCalculator = () => {
    setInputs({
      currentRevenue: '',
      currentCosts: '',
      aiInvestment: '',
      expectedEfficiencyGain: '',
      expectedRevenueGrowth: '',
      implementationTime: '12'
    });
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEO
        title="AI Transformation ROI Calculator 2025"
        description="Calculate the potential ROI of your AI transformation project with our comprehensive ROI calculator tool."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              AI Transformation ROI Calculator 2025
            </h1>
            <p className="text-gray-600 mb-6">
              Calculate the potential return on investment for your AI transformation project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Project Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 10000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Annual Operating Costs ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentCosts}
                    onChange={(e) => handleInputChange('currentCosts', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 8000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    AI Investment Amount ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.aiInvestment}
                    onChange={(e) => handleInputChange('aiInvestment', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 2000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Efficiency Gain (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.expectedEfficiencyGain}
                    onChange={(e) => handleInputChange('expectedEfficiencyGain', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 25"
                  />
                  <p className="text-sm text-gray-500 mt-1">Typical range: 20-40%</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Revenue Growth (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.expectedRevenueGrowth}
                    onChange={(e) => handleInputChange('expectedRevenueGrowth', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 15"
                  />
                  <p className="text-sm text-gray-500 mt-1">Typical range: 10-30%</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Time (months)
                  </label>
                  <select
                    value={inputs.implementationTime}
                    onChange={(e) => handleInputChange('implementationTime', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="18">18 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                  </select>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={calculateROI}
                    className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Calculate ROI
                  </button>
                  <button
                    onClick={resetCalculator}
                    className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">ROI Analysis</h2>
              
              {results ? (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">{results.roi}%</div>
                        <div className="text-sm text-gray-600">Annual ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{results.paybackPeriod}</div>
                        <div className="text-sm text-gray-600">Payback (months)</div>
                      </div>
                    </div>
                  </div>

                  {/* Annual Benefits */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Annual Benefits</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cost Savings:</span>
                        <span className="font-semibold">${results.costSavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenue Increase:</span>
                        <span className="font-semibold">${results.revenueIncrease.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-t pt-3">
                        <span className="text-gray-900 font-semibold">Total Annual Benefits:</span>
                        <span className="font-bold text-green-600">${results.annualBenefits.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* 3-Year Projection */}
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">3-Year Projection</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Year 1 Benefits:</span>
                        <span className="font-semibold">${results.year1Benefits.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Year 2 Benefits:</span>
                        <span className="font-semibold">${results.year2Benefits.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Year 3 Benefits:</span>
                        <span className="font-semibold">${results.year3Benefits.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-t pt-3">
                        <span className="text-gray-900 font-semibold">Total 3-Year Benefits:</span>
                        <span className="font-bold text-green-600">${results.total3YearBenefits.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-900 font-semibold">Net 3-Year ROI:</span>
                        <span className="font-bold text-green-600">{results.net3YearROI}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      {results.roi > 300 ? (
                        <p className="text-green-700 font-semibold">✅ Excellent ROI - Highly recommended for implementation</p>
                      ) : results.roi > 200 ? (
                        <p className="text-blue-700 font-semibold">✅ Good ROI - Recommended for implementation</p>
                      ) : results.roi > 100 ? (
                        <p className="text-yellow-700 font-semibold">⚠️ Moderate ROI - Consider optimization before implementation</p>
                      ) : (
                        <p className="text-red-700 font-semibold">❌ Low ROI - Review assumptions and consider alternatives</p>
                      )}
                      
                      {results.paybackPeriod < 12 && (
                        <p className="text-green-700">✅ Quick payback period - Low risk investment</p>
                      )}
                      
                      {results.annualBenefits > 1000000 && (
                        <p className="text-blue-700">💡 High-value project - Consider enterprise-wide implementation</p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">💰</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Calculate Your ROI</h3>
                  <p className="text-gray-600">
                    Fill in the project details on the left to see your AI transformation ROI analysis
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-semibold text-gray-900 mb-2">Take Readiness Assessment</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Assess your organization's readiness for AI transformation
                </p>
                <Link
                  href="/tools/ai-transformation-readiness-assessment"
                  className="text-purple-600 font-semibold hover:text-purple-800 text-sm"
                >
                  Take Assessment →
                </Link>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📚</div>
                <h4 className="font-semibold text-gray-900 mb-2">Read Implementation Guide</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Learn how to successfully implement AI transformation
                </p>
                <Link
                  href="/blog/ai-2025-enterprise-ai-transformation-complete-guide"
                  className="text-purple-600 font-semibold hover:text-purple-800 text-sm"
                >
                  Read Guide →
                </Link>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💬</div>
                <h4 className="font-semibold text-gray-900 mb-2">Get Expert Consultation</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Schedule a free consultation with our AI experts
                </p>
                <Link
                  href="/contact"
                  className="text-purple-600 font-semibold hover:text-purple-800 text-sm"
                >
                  Schedule Call →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}