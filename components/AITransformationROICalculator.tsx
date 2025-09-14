"use client";
'use client';

import React, { useState } from 'react';

interface ROICalculation {
  currentRevenue: number;
  currentCosts: number;
  expectedEfficiencyGain: number;
  expectedRevenueGrowth: number;
  implementationCost: number;
  timeframe: number;
}

export default function AITransformationROICalculator() {
  const [inputs, setInputs] = useState<ROICalculation>({
    currentRevenue: 10000000,
    currentCosts: 7000000,
    expectedEfficiencyGain: 300,
    expectedRevenueGrowth: 200,
    implementationCost: 1000000,
    timeframe: 12
  });

  const [results, setResults] = useState<{
    costSavings: number;
    revenueIncrease: number;
    totalROI: number;
    paybackPeriod: number;
  } | null>(null);

  const calculateROI = () => {
    const { currentRevenue, currentCosts, expectedEfficiencyGain, expectedRevenueGrowth, implementationCost, timeframe } = inputs;
    
    // Calculate cost savings from efficiency gains
    const monthlyCostSavings = (currentCosts * (expectedEfficiencyGain / 100)) / 12;
    const totalCostSavings = monthlyCostSavings * timeframe;
    
    // Calculate revenue increase
    const monthlyRevenueIncrease = (currentRevenue * (expectedRevenueGrowth / 100)) / 12;
    const totalRevenueIncrease = monthlyRevenueIncrease * timeframe;
    
    // Calculate total ROI
    const totalBenefits = totalCostSavings + totalRevenueIncrease;
    const totalROI = ((totalBenefits - implementationCost) / implementationCost) * 100;
    
    // Calculate payback period
    const monthlyBenefits = monthlyCostSavings + monthlyRevenueIncrease;
    const paybackPeriod = implementationCost / monthlyBenefits;

    setResults({
      costSavings: totalCostSavings,
      revenueIncrease: totalRevenueIncrease,
      totalROI,
      paybackPeriod
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(1)}%`;
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Transformation ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential ROI from AI transformation. Get personalized projections based on your business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue
                </label>
                <input
                  type="number"
                  value={inputs.currentRevenue}
                  onChange={(e) => setInputs({...inputs, currentRevenue: Number(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="10,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Operating Costs
                </label>
                <input
                  type="number"
                  value={inputs.currentCosts}
                  onChange={(e) => setInputs({...inputs, currentCosts: Number(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="7,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Efficiency Gain (%)
                </label>
                <select
                  value={inputs.expectedEfficiencyGain}
                  onChange={(e) => setInputs({...inputs, expectedEfficiencyGain: Number(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="100">100% (Conservative)</option>
                  <option value="200">200% (Moderate)</option>
                  <option value="300">300% (Optimistic)</option>
                  <option value="500">500% (Aggressive)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Revenue Growth (%)
                </label>
                <select
                  value={inputs.expectedRevenueGrowth}
                  onChange={(e) => setInputs({...inputs, expectedRevenueGrowth: Number(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="50">50% (Conservative)</option>
                  <option value="100">100% (Moderate)</option>
                  <option value="200">200% (Optimistic)</option>
                  <option value="400">400% (Aggressive)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Cost
                </label>
                <input
                  type="number"
                  value={inputs.implementationCost}
                  onChange={(e) => setInputs({...inputs, implementationCost: Number(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeframe (Months)
                </label>
                <select
                  value={inputs.timeframe}
                  onChange={(e) => setInputs({...inputs, timeframe: Number(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="6">6 Months</option>
                  <option value="12">12 Months</option>
                  <option value="18">18 Months</option>
                  <option value="24">24 Months</option>
                </select>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Calculate ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Projected Results</h3>
            
            {results ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Cost Savings</h4>
                  <p className="text-3xl font-bold text-green-600">{formatCurrency(results.costSavings)}</p>
                  <p className="text-sm text-green-600">Over {inputs.timeframe} months</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Revenue Increase</h4>
                  <p className="text-3xl font-bold text-blue-600">{formatCurrency(results.revenueIncrease)}</p>
                  <p className="text-sm text-blue-600">Over {inputs.timeframe} months</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">Total ROI</h4>
                  <p className="text-3xl font-bold text-purple-600">{formatPercentage(results.totalROI)}</p>
                  <p className="text-sm text-purple-600">Return on investment</p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">Payback Period</h4>
                  <p className="text-3xl font-bold text-orange-600">{results.paybackPeriod.toFixed(1)} months</p>
                  <p className="text-sm text-orange-600">To recover implementation cost</p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Net Benefit</h4>
                  <p className="text-3xl font-bold text-gray-600">
                    {formatCurrency(results.costSavings + results.revenueIncrease - inputs.implementationCost)}
                  </p>
                  <p className="text-sm text-gray-600">Total net benefit over {inputs.timeframe} months</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-500">Enter your business metrics and click "Calculate ROI" to see your projected results.</p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve These Results?</h3>
            <p className="text-lg opacity-90 mb-6">
              Get your personalized AI transformation roadmap and start your journey to autonomous business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Personalized Strategy
              </a>
              <a
                href="/case-studies/global-enterprise-conscious-ai-transformation-2025-15-billion-roi"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}