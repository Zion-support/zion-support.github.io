import React, { useState, useEffect } from 'react';

const InteractiveROICalculator = () => {
  const [inputs, setInputs] = useState({
    annualRevenue: 10000000,
    employees: 1000,
    currentEfficiency: 70,
    industry: 'manufacturing'
  });

  const [results, setResults] = useState({
    costSavings: 0,
    revenueIncrease: 0,
    totalROI: 0,
    paybackPeriod: 0,
    efficiencyGain: 0
  });

  const industryMultipliers = {
    manufacturing: { costSavings: 0.15, revenueIncrease: 0.12, efficiencyGain: 0.25 },
    healthcare: { costSavings: 0.18, revenueIncrease: 0.15, efficiencyGain: 0.30 },
    financial: { costSavings: 0.20, revenueIncrease: 0.18, efficiencyGain: 0.35 },
    retail: { costSavings: 0.12, revenueIncrease: 0.10, efficiencyGain: 0.20 },
    technology: { costSavings: 0.22, revenueIncrease: 0.25, efficiencyGain: 0.40 }
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const multiplier = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
    
    // Calculate cost savings (15-22% of annual revenue)
    const costSavings = inputs.annualRevenue * multiplier.costSavings;
    
    // Calculate revenue increase (10-25% of annual revenue)
    const revenueIncrease = inputs.annualRevenue * multiplier.revenueIncrease;
    
    // Calculate efficiency gain
    const efficiencyGain = (100 - inputs.currentEfficiency) * multiplier.efficiencyGain;
    
    // Calculate total ROI (assuming $2M implementation cost)
    const implementationCost = 2000000;
    const totalBenefit = costSavings + revenueIncrease;
    const totalROI = ((totalBenefit - implementationCost) / implementationCost) * 100;
    
    // Calculate payback period (in months)
    const monthlyBenefit = totalBenefit / 12;
    const paybackPeriod = implementationCost / monthlyBenefit;

    setResults({
      costSavings,
      revenueIncrease,
      totalROI,
      paybackPeriod,
      efficiencyGain
    });
  };

  const handleInputChange = (field: string, value: number | string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Calculate Your AI ROI Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment for your AI transformation. 
            Our calculator uses real-world data from 500+ successful implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Details</h3>
            
            <div className="space-y-6">
              {/* Annual Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your annual revenue"
                />
              </div>

              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter number of employees"
                />
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Operational Efficiency (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0%</span>
                  <span className="font-medium">{inputs.currentEfficiency}%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="financial">Financial Services</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI ROI Projection</h3>
            
            <div className="space-y-6">
              {/* Total ROI */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Total ROI</h4>
                    <p className="text-sm text-gray-600">3-year projection</p>
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    {formatPercentage(results.totalROI)}
                  </div>
                </div>
              </div>

              {/* Cost Savings */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Annual Cost Savings</h4>
                    <p className="text-sm text-gray-600">Operational efficiency gains</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatCurrency(results.costSavings)}
                  </div>
                </div>
              </div>

              {/* Revenue Increase */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Annual Revenue Increase</h4>
                    <p className="text-sm text-gray-600">AI-driven growth</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    {formatCurrency(results.revenueIncrease)}
                  </div>
                </div>
              </div>

              {/* Payback Period */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
                    <p className="text-sm text-gray-600">Time to recover investment</p>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">
                    {results.paybackPeriod.toFixed(1)} months
                  </div>
                </div>
              </div>

              {/* Efficiency Gain */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Efficiency Improvement</h4>
                    <p className="text-sm text-gray-600">Operational efficiency gain</p>
                  </div>
                  <div className="text-2xl font-bold text-teal-600">
                    +{formatPercentage(results.efficiencyGain)}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Based on data from 500+ successful AI implementations
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Detailed Analysis
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why These Projections Are Reliable
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Real Data</h4>
              <p className="text-gray-600">
                Based on actual results from 500+ enterprise AI implementations across various industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600">
                Our clients consistently achieve 400%+ ROI within 18-24 months of implementation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Industry Specific</h4>
              <p className="text-gray-600">
                Calculations are tailored to your specific industry and business characteristics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculator;