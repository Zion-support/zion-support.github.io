'use client';

import React, { useState } from 'react';

interface CalculationResult {
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
  efficiencyGain: number;
}

export default function InteractiveAIROICalculator() {
  const [companySize, setCompanySize] = useState(100);
  const [industry, setIndustry] = useState('manufacturing');
  const [currentAutomation, setCurrentAutomation] = useState(20);
  const [annualRevenue, setAnnualRevenue] = useState(10000000);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateROI = () => {
    // Industry-specific multipliers
    const industryMultipliers = {
      manufacturing: { efficiency: 0.95, costReduction: 0.70 },
      healthcare: { efficiency: 0.85, costReduction: 0.60 },
      finance: { efficiency: 0.90, costReduction: 0.65 },
      retail: { efficiency: 0.80, costReduction: 0.55 },
      technology: { efficiency: 0.88, costReduction: 0.62 }
    };

    const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers];
    
    // Base calculations
    const currentCosts = annualRevenue * 0.6; // Assume 60% of revenue is operational costs
    const automationPotential = (100 - currentAutomation) / 100;
    
    const annualSavings = currentCosts * automationPotential * multiplier.costReduction;
    const efficiencyGain = automationPotential * multiplier.efficiency * 100;
    
    // ROI calculation (assuming 20% of savings as implementation cost)
    const implementationCost = annualSavings * 0.2;
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / (annualSavings / 12);

    setResult({
      annualSavings,
      roi,
      paybackPeriod,
      efficiencyGain
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your AI ROI</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size (Employees)
            </label>
            <input
              type="range"
              min="10"
              max="10000"
              value={companySize}
              onChange={(e) => setCompanySize(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>10</span>
              <span className="font-semibold">{companySize.toLocaleString()} employees</span>
              <span>10,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              Current Automation Level
            </label>
            <input
              type="range"
              min="0"
              max="90"
              value={currentAutomation}
              onChange={(e) => setCurrentAutomation(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>0%</span>
              <span className="font-semibold">{currentAutomation}% automated</span>
              <span>90%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Revenue (USD)
            </label>
            <input
              type="range"
              min="1000000"
              max="1000000000"
              step="1000000"
              value={annualRevenue}
              onChange={(e) => setAnnualRevenue(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>$1M</span>
              <span className="font-semibold">${(annualRevenue / 1000000).toFixed(1)}M</span>
              <span>$1B</span>
            </div>
          </div>

          <button
            onClick={calculateROI}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Calculate AI ROI
          </button>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
          {result ? (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI Transformation Results</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Annual Savings</h4>
                      <p className="text-sm text-gray-600">Potential cost reduction</p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      ${(result.annualSavings / 1000000).toFixed(1)}M
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">ROI</h4>
                      <p className="text-sm text-gray-600">Return on investment</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {result.roi.toFixed(0)}%
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Payback Period</h4>
                      <p className="text-sm text-gray-600">Months to break even</p>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">
                      {result.paybackPeriod.toFixed(1)} months
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Efficiency Gain</h4>
                      <p className="text-sm text-gray-600">Operational improvement</p>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">
                      {result.efficiencyGain.toFixed(0)}%
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Projected Impact:</strong> Your AI transformation could deliver{' '}
                  <strong>${(result.annualSavings / 1000000).toFixed(1)}M annual savings</strong> with{' '}
                  <strong>{result.roi.toFixed(0)}% ROI</strong> in the first year.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculate Your AI ROI</h3>
              <p className="text-gray-600">
                Fill in your company details and click "Calculate AI ROI" to see your potential savings and returns.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}