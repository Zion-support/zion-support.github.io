"use client";
'use client';

import React, { useState, useEffect } from 'react';

interface ROICalculatorProps {
  className?: string;
}

const InteractiveROICalculator: React.FC<ROICalculatorProps> = ({ className = '' }) => {
  const [inputs, setInputs] = useState({
    currentRevenue: 1000000,
    operationalCosts: 500000,
    employees: 50,
    industry: 'manufacturing',
    aiInvestment: 100000,
    timeframe: 12
  });

  const [results, setResults] = useState({
    costSavings: 0,
    revenueIncrease: 0,
    totalROI: 0,
    paybackPeriod: 0,
    netBenefit: 0
  });

  const industryMultipliers = {
    manufacturing: { costSavings: 0.4, revenueIncrease: 0.25 },
    healthcare: { costSavings: 0.35, revenueIncrease: 0.20 },
    finance: { costSavings: 0.45, revenueIncrease: 0.30 },
    retail: { costSavings: 0.30, revenueIncrease: 0.35 },
    technology: { costSavings: 0.50, revenueIncrease: 0.40 }
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const multiplier = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
    
    const annualCostSavings = inputs.operationalCosts * multiplier.costSavings;
    const annualRevenueIncrease = inputs.currentRevenue * multiplier.revenueIncrease;
    const totalAnnualBenefit = annualCostSavings + annualRevenueIncrease;
    
    const totalBenefit = totalAnnualBenefit * (inputs.timeframe / 12);
    const netBenefit = totalBenefit - inputs.aiInvestment;
    const roi = (netBenefit / inputs.aiInvestment) * 100;
    const paybackPeriod = inputs.aiInvestment / totalAnnualBenefit;

    setResults({
      costSavings: annualCostSavings,
      revenueIncrease: annualRevenueIncrease,
      totalROI: roi,
      paybackPeriod: paybackPeriod,
      netBenefit: netBenefit
    });
  };

  const handleInputChange = (field: string, value: number | string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className={`bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-xl ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI Transformation ROI Calculator
          </h2>
          <p className="text-lg text-gray-600">
            Calculate your potential return on investment with AI automation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Business Metrics</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Annual Revenue ($)
              </label>
              <input
                type="number"
                value={inputs.currentRevenue}
                onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="1,000,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Operational Costs ($)
              </label>
              <input
                type="number"
                value={inputs.operationalCosts}
                onChange={(e) => handleInputChange('operationalCosts', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="500,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                value={inputs.employees}
                onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={inputs.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="technology">Technology</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI Investment ($)
              </label>
              <input
                type="number"
                value={inputs.aiInvestment}
                onChange={(e) => handleInputChange('aiInvestment', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="100,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeframe (months)
              </label>
              <input
                type="number"
                value={inputs.timeframe}
                onChange={(e) => handleInputChange('timeframe', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="12"
                min="1"
                max="60"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Projected Results</h3>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {results.totalROI.toFixed(0)}%
                </div>
                <div className="text-lg text-gray-600">Total ROI</div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Annual Cost Savings</span>
                  <span className="font-semibold text-green-600">
                    ${results.costSavings.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Annual Revenue Increase</span>
                  <span className="font-semibold text-blue-600">
                    ${results.revenueIncrease.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Net Benefit</span>
                  <span className="font-semibold text-purple-600">
                    ${results.netBenefit.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="font-semibold text-orange-600">
                    {results.paybackPeriod.toFixed(1)} months
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">Ready to Get Started?</h4>
              <p className="text-sm opacity-90 mb-4">
                Our AI experts can help you achieve these results. Get a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                </button>
                <button className="border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Results are estimates based on industry averages and may vary based on specific implementation and business factors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveROICalculator;