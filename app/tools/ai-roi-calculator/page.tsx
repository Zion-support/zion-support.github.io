'use client';

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AIROICalculator = () => {
  const [inputs, setInputs] = useState({
    companySize: 'small',
    industry: 'technology',
    currentEfficiency: 70,
    targetEfficiency: 90,
    annualRevenue: 1000000,
    laborCostPercentage: 30,
    implementationCost: 100000,
    timeToImplement: 12
  });

  const [results, setResults] = useState({});

  const companySizes = {
    small: { employees: 50, multiplier: 1 },
    medium: { employees: 250, multiplier: 2.5 },
    large: { employees: 1000, multiplier: 5 },
    enterprise: { employees: 5000, multiplier: 15 }
  };

  const industries = {
    technology: { efficiencyGain: 1.2, costReduction: 1.1 },
    healthcare: { efficiencyGain: 1.1, costReduction: 1.0 },
    finance: { efficiencyGain: 1.3, costReduction: 1.2 },
    manufacturing: { efficiencyGain: 1.4, costReduction: 1.3 },
    retail: { efficiencyGain: 1.0, costReduction: 0.9 },
    other: { efficiencyGain: 1.1, costReduction: 1.0 }
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const size = companySizes[inputs.companySize];
    const industry = industries[inputs.industry];
    
    // Calculate efficiency improvement
    const efficiencyImprovement = (inputs.targetEfficiency - inputs.currentEfficiency) / 100;
    const adjustedEfficiencyGain = efficiencyImprovement * industry.efficiencyGain;
    
    // Calculate cost savings
    const annualLaborCost = inputs.annualRevenue * (inputs.laborCostPercentage / 100);
    const laborCostSavings = annualLaborCost * adjustedEfficiencyGain * industry.costReduction;
    
    // Calculate revenue increase
    const revenueIncrease = inputs.annualRevenue * adjustedEfficiencyGain * 0.3; // 30% of efficiency gain converts to revenue
    
    // Calculate total benefits
    const annualBenefits = laborCostSavings + revenueIncrease;
    const totalBenefits = annualBenefits * 3; // 3-year projection
    
    // Calculate ROI
    const netBenefits = totalBenefits - inputs.implementationCost;
    const roi = (netBenefits / inputs.implementationCost) * 100;
    const paybackPeriod = inputs.implementationCost / annualBenefits;
    
    // Calculate additional metrics
    const productivityGain = adjustedEfficiencyGain * 100;
    const costReduction = (laborCostSavings / annualLaborCost) * 100;
    
    setResults({
      annualBenefits,
      totalBenefits,
      netBenefits,
      roi,
      paybackPeriod,
      productivityGain,
      costReduction,
      laborCostSavings,
      revenueIncrease
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (number, decimals = 1) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(number);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI ROI Calculator</h1>
          <p className="text-xl opacity-90">Calculate the potential return on investment for your AI implementation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h2 className="text-2xl font-bold mb-6">Your Organization</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Company Size</label>
                <select
                  value={inputs.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white"
                >
                  <option value="small">Small (1-100 employees)</option>
                  <option value="medium">Medium (101-500 employees)</option>
                  <option value="large">Large (501-2000 employees)</option>
                  <option value="enterprise">Enterprise (2000+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Industry</label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white"
                >
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Current Efficiency Level: {inputs.currentEfficiency}%
                </label>
                <input
                  type="range"
                  min="30"
                  max="95"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-300 mt-1">
                  <span>30%</span>
                  <span>95%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Target Efficiency Level: {inputs.targetEfficiency}%
                </label>
                <input
                  type="range"
                  min={inputs.currentEfficiency + 5}
                  max="99"
                  value={inputs.targetEfficiency}
                  onChange={(e) => handleInputChange('targetEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-300 mt-1">
                  <span>{inputs.currentEfficiency + 5}%</span>
                  <span>99%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Annual Revenue</label>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value))}
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white"
                  placeholder="1,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Labor Cost as % of Revenue: {inputs.laborCostPercentage}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={inputs.laborCostPercentage}
                  onChange={(e) => handleInputChange('laborCostPercentage', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-300 mt-1">
                  <span>10%</span>
                  <span>60%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">AI Implementation Cost</label>
                <input
                  type="number"
                  value={inputs.implementationCost}
                  onChange={(e) => handleInputChange('implementationCost', parseInt(e.target.value))}
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white"
                  placeholder="100,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Implementation Timeline: {inputs.timeToImplement} months
                </label>
                <input
                  type="range"
                  min="3"
                  max="24"
                  value={inputs.timeToImplement}
                  onChange={(e) => handleInputChange('timeToImplement', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-300 mt-1">
                  <span>3 months</span>
                  <span>24 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* ROI Summary */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h2 className="text-2xl font-bold mb-6">ROI Projection (3 Years)</h2>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {formatNumber(results.roi || 0)}%
                  </div>
                  <div className="text-sm text-gray-300">Return on Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {formatNumber(results.paybackPeriod || 0, 1)}
                  </div>
                  <div className="text-sm text-gray-300">Months to Payback</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white border-opacity-20">
                  <span className="text-gray-300">Annual Benefits</span>
                  <span className="font-semibold text-green-400">
                    {formatCurrency(results.annualBenefits || 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white border-opacity-20">
                  <span className="text-gray-300">Total Benefits (3 years)</span>
                  <span className="font-semibold text-green-400">
                    {formatCurrency(results.totalBenefits || 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white border-opacity-20">
                  <span className="text-gray-300">Implementation Cost</span>
                  <span className="font-semibold text-red-400">
                    -{formatCurrency(inputs.implementationCost)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 font-semibold">Net Benefits</span>
                  <span className="font-bold text-yellow-400">
                    {formatCurrency(results.netBenefits || 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-6">Performance Improvements</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    +{formatNumber(results.productivityGain || 0)}%
                  </div>
                  <div className="text-sm text-gray-300">Productivity Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-2">
                    -{formatNumber(results.costReduction || 0)}%
                  </div>
                  <div className="text-sm text-gray-300">Cost Reduction</div>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-6">Benefits Breakdown</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Labor Cost Savings</span>
                  <span className="font-semibold text-green-400">
                    {formatCurrency(results.laborCostSavings || 0)}/year
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Revenue Increase</span>
                  <span className="font-semibold text-blue-400">
                    {formatCurrency(results.revenueIncrease || 0)}/year
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve These Results?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get a personalized AI implementation strategy and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources/ai-2025-implementation-roadmap-ultimate-guide"
                className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIROICalculator;