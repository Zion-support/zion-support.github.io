'use client';

import React, { useState, useEffect } from 'react';

export default function InteractiveAIROICalculator() {
  const [formData, setFormData] = useState({
    companySize: 'small',
    industry: 'manufacturing',
    currentRevenue: 10000000,
    currentEmployees: 100,
    aiInvestment: 500000,
    implementationTime: 12,
    expectedEfficiency: 25,
    expectedCostReduction: 20,
    expectedRevenueIncrease: 15
  });

  const [results, setResults] = useState({
    totalSavings: 0,
    additionalRevenue: 0,
    totalValue: 0,
    roi: 0,
    paybackPeriod: 0
  });

  const industryMultipliers = {
    manufacturing: 1.2,
    healthcare: 1.1,
    financial: 1.3,
    retail: 1.0,
    technology: 1.4,
    other: 1.0
  };

  const sizeMultipliers = {
    small: 0.8,
    medium: 1.0,
    large: 1.2,
    enterprise: 1.5
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    const industryMultiplier = industryMultipliers[formData.industry as keyof typeof industryMultipliers];
    const sizeMultiplier = sizeMultipliers[formData.companySize as keyof typeof sizeMultipliers];
    
    // Calculate cost savings
    const annualCosts = formData.currentRevenue * 0.6; // Assume 60% of revenue is operational costs
    const costSavings = annualCosts * (formData.expectedCostReduction / 100) * industryMultiplier * sizeMultiplier;
    
    // Calculate additional revenue
    const additionalRevenue = formData.currentRevenue * (formData.expectedRevenueIncrease / 100) * industryMultiplier * sizeMultiplier;
    
    // Calculate total value
    const totalSavings = costSavings;
    const totalValue = totalSavings + additionalRevenue;
    
    // Calculate ROI
    const roi = ((totalValue - formData.aiInvestment) / formData.aiInvestment) * 100;
    
    // Calculate payback period
    const paybackPeriod = formData.aiInvestment / (totalValue / 12); // months
    
    setResults({
      totalSavings: Math.round(totalSavings),
      additionalRevenue: Math.round(additionalRevenue),
      totalValue: Math.round(totalValue),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">INTERACTIVE TOOL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for your AI transformation. Get personalized insights based on your industry and company size.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Size</label>
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

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="financial">Financial Services</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="10,000,000"
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
                  placeholder="100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  AI Investment ($)
                </label>
                <input
                  type="number"
                  value={formData.aiInvestment}
                  onChange={(e) => handleInputChange('aiInvestment', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="500,000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expected Efficiency Improvement (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={formData.expectedEfficiency}
                  onChange={(e) => handleInputChange('expectedEfficiency', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10%</span>
                  <span className="font-semibold text-blue-600">{formData.expectedEfficiency}%</span>
                  <span>50%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expected Cost Reduction (%)
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={formData.expectedCostReduction}
                  onChange={(e) => handleInputChange('expectedCostReduction', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5%</span>
                  <span className="font-semibold text-blue-600">{formData.expectedCostReduction}%</span>
                  <span>40%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expected Revenue Increase (%)
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={formData.expectedRevenueIncrease}
                  onChange={(e) => handleInputChange('expectedRevenueIncrease', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5%</span>
                  <span className="font-semibold text-blue-600">{formData.expectedRevenueIncrease}%</span>
                  <span>30%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI ROI Projection</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    ${results.totalSavings.toLocaleString()}
                  </div>
                  <div className="text-gray-600 text-sm">Annual Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    ${results.additionalRevenue.toLocaleString()}
                  </div>
                  <div className="text-gray-600 text-sm">Additional Revenue</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {results.roi}%
                  </div>
                  <div className="text-gray-600 mb-4">Return on Investment</div>
                  <div className="text-lg text-gray-700">
                    Payback Period: <span className="font-semibold text-indigo-600">{results.paybackPeriod} months</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Total Value Created</h4>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  ${results.totalValue.toLocaleString()}
                </div>
                <div className="text-gray-600 text-sm">Annual value from AI transformation</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Next Steps</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Schedule a free AI readiness assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Get a detailed implementation roadmap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Connect with our AI transformation experts</span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Get Free Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}