import React, { useState } from 'react';

const AI2028ROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentRevenue: 1000000,
    currentEmployees: 100,
    currentEfficiency: 70,
    industry: 'technology',
    companySize: 'medium'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const { currentRevenue, currentEmployees, currentEfficiency, industry, companySize } = inputs;
    
    // Industry multipliers
    const industryMultipliers = {
      technology: 1.2,
      healthcare: 1.5,
      finance: 1.3,
      manufacturing: 1.1,
      retail: 1.0,
      other: 1.0
    };

    // Company size multipliers
    const sizeMultipliers = {
      small: 0.8,
      medium: 1.0,
      large: 1.3,
      enterprise: 1.5
    };

    const industryMultiplier = industryMultipliers[industry] || 1.0;
    const sizeMultiplier = sizeMultipliers[companySize] || 1.0;
    const baseMultiplier = industryMultiplier * sizeMultiplier;

    // Calculate improvements
    const efficiencyImprovement = (100 - currentEfficiency) * 0.8; // AI can improve efficiency by 80% of current gap
    const newEfficiency = Math.min(95, currentEfficiency + efficiencyImprovement);
    
    const revenueIncrease = currentRevenue * (efficiencyImprovement / 100) * baseMultiplier;
    const costSavings = currentEmployees * 50000 * (efficiencyImprovement / 100) * baseMultiplier; // $50k per employee saved
    const aiImplementationCost = currentRevenue * 0.15; // 15% of current revenue for implementation
    
    const totalBenefits = revenueIncrease + costSavings;
    const netBenefits = totalBenefits - aiImplementationCost;
    const roi = ((netBenefits / aiImplementationCost) * 100);
    
    const paybackPeriod = aiImplementationCost / (totalBenefits / 12); // months

    setResults({
      revenueIncrease,
      costSavings,
      totalBenefits,
      aiImplementationCost,
      netBenefits,
      roi,
      paybackPeriod,
      newEfficiency,
      efficiencyImprovement
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2028 ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for implementing AI 2028 breakthrough technologies in your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Information</h3>
            
            <div className="space-y-6">
              {/* Current Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Annual Revenue
                </label>
                <input
                  type="number"
                  value={inputs.currentRevenue}
                  onChange={(e) => setInputs({...inputs, currentRevenue: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1000000"
                />
              </div>

              {/* Current Employees */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.currentEmployees}
                  onChange={(e) => setInputs({...inputs, currentEmployees: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Process Efficiency (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={inputs.currentEfficiency}
                  onChange={(e) => setInputs({...inputs, currentEfficiency: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="70"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => setInputs({...inputs, industry: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={inputs.companySize}
                  onChange={(e) => setInputs({...inputs, companySize: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-500 employees)</option>
                  <option value="large">Large (501-5000 employees)</option>
                  <option value="enterprise">Enterprise (5000+ employees)</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Calculate AI 2028 ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Projected Results</h3>
            
            {results ? (
              <div className="space-y-6">
                {/* ROI Percentage */}
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {formatNumber(Math.round(results.roi))}%
                  </div>
                  <div className="text-lg font-semibold text-green-800">Expected ROI</div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {formatCurrency(results.revenueIncrease)}
                    </div>
                    <div className="text-sm text-blue-800">Revenue Increase</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {formatCurrency(results.costSavings)}
                    </div>
                    <div className="text-sm text-purple-800">Cost Savings</div>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Total Benefits</span>
                    <span className="font-bold text-green-600">{formatCurrency(results.totalBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Implementation Cost</span>
                    <span className="font-bold text-red-600">{formatCurrency(results.aiImplementationCost)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Net Benefits</span>
                    <span className="font-bold text-green-600">{formatCurrency(results.netBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Payback Period</span>
                    <span className="font-bold text-blue-600">{results.paybackPeriod.toFixed(1)} months</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">New Efficiency</span>
                    <span className="font-bold text-purple-600">{results.newEfficiency.toFixed(1)}%</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Implementation Plan
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <div className="text-6xl mb-4">🧮</div>
                <p className="text-lg">Enter your business information and click "Calculate AI 2028 ROI" to see your projected results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2028ROICalculator;