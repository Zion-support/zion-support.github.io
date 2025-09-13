import React, { useState } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 ROI Calculator - Calculate Your AI Investment Returns',
  description: 'Calculate the potential ROI of your AI transformation with our advanced ROI calculator. Get instant projections and optimization recommendations.',
  keywords: 'AI ROI calculator, AI investment return, business transformation ROI, AI cost benefit analysis',
  openGraph: {
    title: 'AI 2025 ROI Calculator - Calculate Your Returns',
    description: 'Advanced ROI calculator for AI transformation investments',
    type: 'website',
  },
};

export default function AI2025ROICalculator() {
  const [formData, setFormData] = useState({
    annualRevenue: '',
    currentOperationalCosts: '',
    aiInvestment: '',
    expectedEfficiencyGain: '25',
    expectedCostReduction: '30',
    expectedRevenueIncrease: '20',
    implementationTimeline: '12'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const revenue = parseFloat(formData.annualRevenue) || 0;
    const currentCosts = parseFloat(formData.currentOperationalCosts) || 0;
    const investment = parseFloat(formData.aiInvestment) || 0;
    const efficiencyGain = parseFloat(formData.expectedEfficiencyGain) / 100;
    const costReduction = parseFloat(formData.expectedCostReduction) / 100;
    const revenueIncrease = parseFloat(formData.expectedRevenueIncrease) / 100;
    const timeline = parseFloat(formData.implementationTimeline);

    // Calculate benefits
    const costSavings = currentCosts * costReduction;
    const revenueGains = revenue * revenueIncrease;
    const totalAnnualBenefits = costSavings + revenueGains;
    
    // Calculate ROI
    const netBenefit = totalAnnualBenefits - investment;
    const roiPercentage = investment > 0 ? (netBenefit / investment) * 100 : 0;
    
    // Calculate payback period
    const paybackPeriod = investment > 0 ? investment / totalAnnualBenefits : 0;
    
    // Calculate 5-year projection
    const fiveYearBenefits = totalAnnualBenefits * 5 - investment;
    const fiveYearROI = investment > 0 ? (fiveYearBenefits / investment) * 100 : 0;

    setResults({
      annualBenefits: totalAnnualBenefits,
      costSavings,
      revenueGains,
      netBenefit,
      roiPercentage,
      paybackPeriod,
      fiveYearBenefits,
      fiveYearROI,
      timeline
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-500 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold">🧮 ROI CALCULATOR</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI 2025 ROI Calculator
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              Calculate the potential return on investment for your AI transformation. 
              Get instant projections and optimization recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Enter Your Business Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    value={formData.annualRevenue}
                    onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="1,000,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Annual Operational Costs ($)
                  </label>
                  <input
                    type="number"
                    value={formData.currentOperationalCosts}
                    onChange={(e) => handleInputChange('currentOperationalCosts', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="500,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    AI Implementation Investment ($)
                  </label>
                  <input
                    type="number"
                    value={formData.aiInvestment}
                    onChange={(e) => handleInputChange('aiInvestment', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="100,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Efficiency Gain (%)
                  </label>
                  <input
                    type="number"
                    value={formData.expectedEfficiencyGain}
                    onChange={(e) => handleInputChange('expectedEfficiencyGain', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="25"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Cost Reduction (%)
                  </label>
                  <input
                    type="number"
                    value={formData.expectedCostReduction}
                    onChange={(e) => handleInputChange('expectedCostReduction', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Revenue Increase (%)
                  </label>
                  <input
                    type="number"
                    value={formData.expectedRevenueIncrease}
                    onChange={(e) => handleInputChange('expectedRevenueIncrease', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Timeline (months)
                  </label>
                  <input
                    type="number"
                    value={formData.implementationTimeline}
                    onChange={(e) => handleInputChange('implementationTimeline', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="12"
                  />
                </div>

                <button
                  onClick={calculateROI}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  Calculate ROI
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                ROI Analysis Results
              </h2>
              
              {results ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {results.roiPercentage.toFixed(0)}%
                      </div>
                      <div className="text-lg font-semibold text-gray-900">Annual ROI</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        ${results.costSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Annual Cost Savings</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        ${results.revenueGains.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Revenue Increase</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-bold text-gray-900 mb-2">Key Metrics</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Annual Benefits:</span>
                        <span className="font-semibold">${results.annualBenefits.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payback Period:</span>
                        <span className="font-semibold">{(results.paybackPeriod * 12).toFixed(1)} months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5-Year ROI:</span>
                        <span className="font-semibold text-green-600">{results.fiveYearROI.toFixed(0)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Net 5-Year Benefit:</span>
                        <span className="font-semibold text-green-600">${results.fiveYearBenefits.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <div className="text-sm text-yellow-800">
                      <strong>Note:</strong> These calculations are based on industry averages and your inputs. 
                      Actual results may vary based on implementation quality and market conditions.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <div className="text-6xl mb-4">🧮</div>
                  <div className="text-lg">Enter your business information and click "Calculate ROI" to see your projected returns</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Recommendations */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Maximize Your AI ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven strategies to optimize your AI investment and achieve maximum returns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Start with High-Impact Areas
              </h3>
              <p className="text-gray-600">
                Focus on processes with the highest automation potential and cost reduction opportunities for maximum ROI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Measure Everything
              </h3>
              <p className="text-gray-600">
                Implement comprehensive tracking and analytics to monitor progress and optimize performance continuously.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Iterate and Scale
              </h3>
              <p className="text-gray-600">
                Start small, prove value, then scale successful implementations across your entire organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Achieve These Results?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get our comprehensive AI implementation toolkit and expert guidance to turn these projections into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Implementation Toolkit
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}