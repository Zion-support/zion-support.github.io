"use client";
'use client';

import React, { useState, useEffect } from 'react';

const NewInteractiveROICalculator2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    companySize: 'small',
    industry: 'manufacturing',
    currentEfficiency: 60,
    automationLevel: 30,
    annualRevenue: 1000000,
    implementationTime: 6
  });

  const [results, setResults] = useState({
    projectedROI: 0,
    costSavings: 0,
    efficiencyGain: 0,
    paybackPeriod: 0
  });

  const industryMultipliers = {
    manufacturing: 2.5,
    finance: 2.0,
    healthcare: 1.8,
    retail: 1.6,
    technology: 2.2,
    logistics: 2.1
  };

  const sizeMultipliers = {
    small: 1.5,
    medium: 2.0,
    large: 2.5,
    enterprise: 3.0
  };

  useEffect(() => {
    setIsVisible(true);
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    const industryMultiplier = industryMultipliers[formData.industry as keyof typeof industryMultipliers];
    const sizeMultiplier = sizeMultipliers[formData.companySize as keyof typeof sizeMultipliers];
    
    const baseEfficiencyGain = (100 - formData.currentEfficiency) * 0.8;
    const automationBonus = formData.automationLevel * 0.5;
    const efficiencyGain = baseEfficiencyGain + automationBonus;
    
    const annualSavings = (formData.annualRevenue * 0.15 * efficiencyGain / 100) * industryMultiplier * sizeMultiplier;
    const implementationCost = formData.annualRevenue * 0.05 * (formData.implementationTime / 12);
    
    const projectedROI = ((annualSavings - implementationCost) / implementationCost) * 100;
    const costSavings = annualSavings;
    const paybackPeriod = implementationCost / (annualSavings / 12);

    setResults({
      projectedROI: Math.round(projectedROI),
      costSavings: Math.round(costSavings),
      efficiencyGain: Math.round(efficiencyGain),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className={`py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">🧮 INTERACTIVE CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Transformation ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential return on investment with our AI solutions. Get personalized projections based on your industry and company size.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Details</h3>
            
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-200 employees)</option>
                  <option value="large">Large (201-1000 employees)</option>
                  <option value="enterprise">Enterprise (1000+ employees)</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="logistics">Logistics</option>
                </select>
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Efficiency Level: {formData.currentEfficiency}%
                </label>
                <input
                  type="range"
                  min="20"
                  max="90"
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>

              {/* Automation Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Level: {formData.automationLevel}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={formData.automationLevel}
                  onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Manual</span>
                  <span>Automated</span>
                </div>
              </div>

              {/* Annual Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue
                </label>
                <select
                  value={formData.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value={100000}>$100K - $500K</option>
                  <option value={1000000}>$500K - $5M</option>
                  <option value={10000000}>$5M - $50M</option>
                  <option value={100000000}>$50M - $500M</option>
                  <option value={1000000000}>$500M+</option>
                </select>
              </div>

              {/* Implementation Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Implementation Timeline: {formData.implementationTime} months
                </label>
                <input
                  type="range"
                  min="3"
                  max="24"
                  value={formData.implementationTime}
                  onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3 months</span>
                  <span>24 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Projected Results</h3>
            
            <div className="space-y-6">
              {/* ROI */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Projected ROI</h4>
                    <p className="text-sm text-gray-600">Return on Investment</p>
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    {results.projectedROI}%
                  </div>
                </div>
              </div>

              {/* Cost Savings */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Annual Cost Savings</h4>
                    <p className="text-sm text-gray-600">Expected yearly savings</p>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    ${(results.costSavings / 1000000).toFixed(1)}M
                  </div>
                </div>
              </div>

              {/* Efficiency Gain */}
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Efficiency Gain</h4>
                    <p className="text-sm text-gray-600">Expected improvement</p>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">
                    +{results.efficiencyGain}%
                  </div>
                </div>
              </div>

              {/* Payback Period */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
                    <p className="text-sm text-gray-600">Time to recover investment</p>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    {results.paybackPeriod}m
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white text-center">
              <h4 className="text-xl font-bold mb-2">Ready to Achieve These Results?</h4>
              <p className="text-purple-100 mb-4">
                Get a personalized consultation and detailed implementation plan
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInteractiveROICalculator2025;