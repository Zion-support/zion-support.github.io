'use client';

import React, { useState, useEffect } from 'react';

export default function InteractiveAI2026Calculator() {
  const [formData, setFormData] = useState({
    employees: 100,
    monthlyRevenue: 1000000,
    currentAutomation: 20,
    industry: 'manufacturing',
    processes: 50
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    roi: 0,
    paybackPeriod: 0,
    efficiencyGain: 0,
    costReduction: 0
  });

  const industries = [
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.2 },
    { value: 'finance', label: 'Financial Services', multiplier: 1.5 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.3 },
    { value: 'retail', label: 'Retail', multiplier: 1.1 },
    { value: 'technology', label: 'Technology', multiplier: 1.4 },
    { value: 'other', label: 'Other', multiplier: 1.0 }
  ];

  const calculateResults = () => {
    const industryMultiplier = industries.find(i => i.value === formData.industry)?.multiplier || 1.0;
    
    // Base calculations
    const baseSavings = formData.monthlyRevenue * 0.15; // 15% of revenue as potential savings
    const automationPotential = (100 - formData.currentAutomation) / 100;
    const processMultiplier = Math.min(formData.processes / 25, 2); // Cap at 2x for processes > 25
    
    // Calculate annual savings
    const annualSavings = baseSavings * 12 * industryMultiplier * automationPotential * processMultiplier;
    
    // Calculate implementation cost (typically 20-30% of annual savings)
    const implementationCost = annualSavings * 0.25;
    
    // Calculate ROI
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    
    // Calculate payback period (in months)
    const paybackPeriod = implementationCost / (annualSavings / 12);
    
    // Calculate efficiency gain
    const efficiencyGain = Math.min(automationPotential * 80, 85); // Cap at 85%
    
    // Calculate cost reduction percentage
    const costReduction = Math.min(automationPotential * 60, 70); // Cap at 70%

    setResults({
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      efficiencyGain: Math.round(efficiencyGain),
      costReduction: Math.round(costReduction)
    });
  };

  useEffect(() => {
    calculateResults();
  }, [formData]);

  const handleInputChange = (field: string, value: number | string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI Automation ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential savings and ROI from AI automation. Get instant insights 
            based on your business size, industry, and current automation level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="range"
                  min="10"
                  max="10000"
                  value={formData.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>10</span>
                  <span className="font-semibold text-blue-600">{formData.employees.toLocaleString()}</span>
                  <span>10,000+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="100000"
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>$100K</span>
                  <span className="font-semibold text-blue-600">${(formData.monthlyRevenue / 1000000).toFixed(1)}M</span>
                  <span>$50M+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Level (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={formData.currentAutomation}
                  onChange={(e) => handleInputChange('currentAutomation', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>0%</span>
                  <span className="font-semibold text-blue-600">{formData.currentAutomation}%</span>
                  <span>80%</span>
                </div>
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
                  {industries.map(industry => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Business Processes
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={formData.processes}
                  onChange={(e) => handleInputChange('processes', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>10</span>
                  <span className="font-semibold text-blue-600">{formData.processes}</span>
                  <span>200+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your AI Automation Potential</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">${(results.annualSavings / 1000000).toFixed(1)}M</div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{results.roi}%</div>
                  <div className="text-sm opacity-90">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{results.paybackPeriod}</div>
                  <div className="text-sm opacity-90">Months to ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{results.efficiencyGain}%</div>
                  <div className="text-sm opacity-90">Efficiency Gain</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Implementation Cost</span>
                  <span className="font-semibold text-gray-900">
                    ${Math.round(results.annualSavings * 0.25).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Annual Savings</span>
                  <span className="font-semibold text-green-600">
                    ${results.annualSavings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Net Annual Benefit</span>
                  <span className="font-semibold text-blue-600">
                    ${(results.annualSavings * 0.75).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 bg-green-50 rounded-lg px-4">
                  <span className="text-gray-700 font-semibold">3-Year Total Savings</span>
                  <span className="font-bold text-green-600 text-xl">
                    ${(results.annualSavings * 2.25).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-3">Ready to Get Started?</h4>
              <p className="text-sm opacity-90 mb-4">
                Our AI automation experts can help you achieve these results. Get a free 
                consultation and custom implementation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Insights */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why These Results Matter</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Immediate Cost Savings</h4>
              <p className="text-gray-600 text-sm">
                Reduce operational costs by automating repetitive tasks and improving process efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Productivity</h4>
              <p className="text-gray-600 text-sm">
                Free up your team to focus on strategic initiatives and high-value activities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Competitive Advantage</h4>
              <p className="text-gray-600 text-sm">
                Stay ahead of competitors with advanced AI capabilities and streamlined operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}