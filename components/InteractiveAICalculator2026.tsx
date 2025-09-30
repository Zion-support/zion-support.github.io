'use client';

import React, { useState } from 'react';

export default function InteractiveAICalculator2026() {
  const [inputs, setInputs] = useState({
    employees: 100,
    monthlyRevenue: 100000,
    currentEfficiency: 70,
    industry: 'technology'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const { employees, monthlyRevenue, currentEfficiency, industry } = inputs;
    
    // Industry multipliers
    const industryMultipliers = {
      technology: 1.2,
      healthcare: 1.1,
      finance: 1.3,
      manufacturing: 1.4,
      retail: 1.0,
      other: 1.1
    };

    const multiplier = industryMultipliers[industry] || 1.1;
    
    // Calculate potential improvements
    const efficiencyGain = (100 - currentEfficiency) * 0.8; // 80% of potential efficiency gain
    const newEfficiency = currentEfficiency + efficiencyGain;
    
    // Cost savings calculations
    const laborCostSavings = (employees * 5000) * (efficiencyGain / 100) * 12; // $5k per employee per month
    const processSavings = monthlyRevenue * 0.15 * (efficiencyGain / 100) * 12; // 15% of revenue
    const errorReduction = monthlyRevenue * 0.05 * 12; // 5% error reduction
    
    const totalAnnualSavings = laborCostSavings + processSavings + errorReduction;
    const implementationCost = monthlyRevenue * 2; // 2 months of revenue
    const roi = ((totalAnnualSavings - implementationCost) / implementationCost) * 100;
    
    // Additional benefits
    const timeToROI = implementationCost / (totalAnnualSavings / 12);
    const productivityGain = efficiencyGain;
    
    setResults({
      totalAnnualSavings: Math.round(totalAnnualSavings),
      implementationCost: Math.round(implementationCost),
      roi: Math.round(roi),
      timeToROI: Math.round(timeToROI * 10) / 10,
      productivityGain: Math.round(productivityGain),
      newEfficiency: Math.round(newEfficiency),
      laborCostSavings: Math.round(laborCostSavings),
      processSavings: Math.round(processSavings),
      errorReduction: Math.round(errorReduction)
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for AI implementation in your organization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Organization Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Efficiency Level (%)
                </label>
                <input
                  type="range"
                  min="20"
                  max="95"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>20%</span>
                  <span className="font-semibold">{inputs.currentEfficiency}%</span>
                  <span>95%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Calculate AI ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Projected Results</h3>
            
            {results ? (
              <div className="space-y-6">
                {/* Main ROI */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {results.roi}%
                    </div>
                    <div className="text-lg font-semibold text-gray-700">Expected ROI</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Payback in {results.timeToROI} months
                    </div>
                  </div>
                </div>

                {/* Financial Benefits */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      ${results.totalAnnualSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Total Annual Savings</div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      ${results.laborCostSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Labor Cost Savings</div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      ${results.processSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Process Efficiency Savings</div>
                  </div>
                </div>

                {/* Efficiency Gains */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4">Efficiency Improvements</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Efficiency:</span>
                      <span className="font-semibold">{inputs.currentEfficiency}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Projected Efficiency:</span>
                      <span className="font-semibold text-green-600">{results.newEfficiency}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Productivity Gain:</span>
                      <span className="font-semibold text-blue-600">+{results.productivityGain}%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl text-center">
                  <h4 className="font-bold text-lg mb-2">Ready to Start Your AI Journey?</h4>
                  <p className="text-indigo-100 mb-4">
                    Get a personalized AI implementation roadmap based on your organization's needs.
                  </p>
                  <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Free Consultation
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-500 text-lg">
                  Enter your organization details and click "Calculate AI ROI" to see your potential savings and returns.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}