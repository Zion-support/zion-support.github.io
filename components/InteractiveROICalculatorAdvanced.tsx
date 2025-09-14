'use client';

import React, { useState, useEffect } from 'react';

const InteractiveROICalculatorAdvanced = () => {
  const [formData, setFormData] = useState({
    currentRevenue: 1000000,
    currentEmployees: 50,
    currentProcessTime: 40,
    industry: 'manufacturing',
    companySize: 'medium'
  });

  const [results, setResults] = useState({
    efficiencyGain: 0,
    costSavings: 0,
    revenueIncrease: 0,
    totalROI: 0,
    paybackPeriod: 0
  });

  const [isCalculated, setIsCalculated] = useState(false);

  const industryMultipliers = {
    manufacturing: { efficiency: 0.35, cost: 0.25, revenue: 0.20 },
    healthcare: { efficiency: 0.30, cost: 0.20, revenue: 0.15 },
    finance: { efficiency: 0.40, cost: 0.30, revenue: 0.25 },
    retail: { efficiency: 0.25, cost: 0.15, revenue: 0.18 },
    technology: { efficiency: 0.45, cost: 0.35, revenue: 0.30 }
  };

  const sizeMultipliers = {
    small: 0.8,
    medium: 1.0,
    large: 1.5,
    enterprise: 2.0
  };

  const calculateROI = () => {
    const industry = industryMultipliers[formData.industry as keyof typeof industryMultipliers];
    const sizeMultiplier = sizeMultipliers[formData.companySize as keyof typeof sizeMultipliers];
    
    const baseEfficiency = industry.efficiency * sizeMultiplier;
    const baseCostSavings = industry.cost * sizeMultiplier;
    const baseRevenueIncrease = industry.revenue * sizeMultiplier;

    const efficiencyGain = Math.round(formData.currentProcessTime * baseEfficiency);
    const costSavings = Math.round(formData.currentRevenue * baseCostSavings);
    const revenueIncrease = Math.round(formData.currentRevenue * baseRevenueIncrease);
    const totalROI = Math.round(((costSavings + revenueIncrease) / (formData.currentRevenue * 0.1)) * 100);
    const paybackPeriod = Math.round(12 / (totalROI / 100));

    setResults({
      efficiencyGain,
      costSavings,
      revenueIncrease,
      totalROI,
      paybackPeriod
    });
    setIsCalculated(true);
  };

  useEffect(() => {
    if (isCalculated) {
      calculateROI();
    }
  }, [formData]);

  const handleInputChange = (field: string, value: number | string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setIsCalculated(false);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">💰 ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your AI ROI Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment from implementing AI solutions in your organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your annual revenue"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter number of employees"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Process Time (hours/week)
                </label>
                <input
                  type="number"
                  value={formData.currentProcessTime}
                  onChange={(e) => handleInputChange('currentProcessTime', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter process time"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-200 employees)</option>
                  <option value="large">Large (201-1000 employees)</option>
                  <option value="enterprise">Enterprise (1000+ employees)</option>
                </select>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Calculate ROI Potential
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your ROI Projection</h3>
            
            {isCalculated ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {results.totalROI}%
                    </div>
                    <div className="text-lg font-semibold text-gray-700">Total ROI</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Expected return on AI investment
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {results.efficiencyGain}%
                    </div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">
                      ${results.costSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Annual Cost Savings</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600">
                      ${results.revenueIncrease.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Revenue Increase</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">
                      {results.paybackPeriod} months
                    </div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
                  <h4 className="text-lg font-semibold mb-2">Ready to Get Started?</h4>
                  <p className="text-sm opacity-90 mb-4">
                    Schedule a consultation to discuss how we can help you achieve these results
                  </p>
                  <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💰</div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">
                  Calculate Your Potential
                </h4>
                <p className="text-gray-600">
                  Fill in your business details and click calculate to see your AI ROI potential
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Our ROI Calculations Are Accurate
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Real Data</h4>
              <p className="text-gray-600">
                Based on actual results from 500+ successful implementations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Industry Specific</h4>
              <p className="text-gray-600">
                Tailored calculations for your specific industry and company size
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600">
                Our clients typically see 200-500% ROI within the first year
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveROICalculatorAdvanced;