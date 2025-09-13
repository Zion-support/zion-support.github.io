'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export default function AI2025ROICalculator() {
  const [inputs, setInputs] = useState({
    currentRevenue: 10000000,
    currentCosts: 8000000,
    industry: 'manufacturing',
    companySize: 'large',
    implementationTime: 6
  });

  const [results, setResults] = useState({
    costSavings: 0,
    revenueIncrease: 0,
    totalROI: 0,
    paybackPeriod: 0,
    netBenefit: 0
  });

  const industryMultipliers = {
    manufacturing: { costSavings: 0.4, revenueIncrease: 0.3 },
    finance: { costSavings: 0.35, revenueIncrease: 0.25 },
    healthcare: { costSavings: 0.3, revenueIncrease: 0.2 },
    retail: { costSavings: 0.25, revenueIncrease: 0.35 },
    technology: { costSavings: 0.45, revenueIncrease: 0.4 }
  };

  const sizeMultipliers = {
    small: 0.5,
    medium: 0.75,
    large: 1.0,
    enterprise: 1.5
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const industry = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
    const sizeMultiplier = sizeMultipliers[inputs.companySize as keyof typeof sizeMultipliers];
    
    const annualCostSavings = inputs.currentCosts * industry.costSavings * sizeMultiplier;
    const annualRevenueIncrease = inputs.currentRevenue * industry.revenueIncrease * sizeMultiplier;
    const totalAnnualBenefit = annualCostSavings + annualRevenueIncrease;
    
    // Implementation cost (typically 10-20% of annual benefit)
    const implementationCost = totalAnnualBenefit * 0.15;
    
    // Calculate results
    const costSavings = annualCostSavings;
    const revenueIncrease = annualRevenueIncrease;
    const netBenefit = totalAnnualBenefit - implementationCost;
    const totalROI = ((netBenefit * inputs.implementationTime) / implementationCost) * 100;
    const paybackPeriod = implementationCost / (totalAnnualBenefit / 12);

    setResults({
      costSavings,
      revenueIncrease,
      totalROI,
      paybackPeriod,
      netBenefit
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            🧮 ROI CALCULATOR
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI 2025
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}ROI Calculator
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Calculate your potential return on investment with AI 2025 breakthrough technology. 
            See how much you could save and earn.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Business Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10,000,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Annual Costs ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentCosts}
                    onChange={(e) => handleInputChange('currentCosts', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="8,000,000"
                  />
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
                    <option value="manufacturing">Manufacturing</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select
                    value={inputs.companySize}
                    onChange={(e) => handleInputChange('companySize', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="small">Small (1-50 employees)</option>
                    <option value="medium">Medium (51-500 employees)</option>
                    <option value="large">Large (501-5000 employees)</option>
                    <option value="enterprise">Enterprise (5000+ employees)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Implementation Timeline (months)
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    value={inputs.implementationTime}
                    onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-center text-gray-600 mt-2">
                    {inputs.implementationTime} months
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Potential Results</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {results.totalROI.toLocaleString()}%
                  </div>
                  <div className="text-gray-600 font-semibold">Total ROI</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Over {inputs.implementationTime} months
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-md text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      ${(results.costSavings / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-gray-600">Annual Cost Savings</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-md text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      ${(results.revenueIncrease / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-gray-600">Revenue Increase</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {results.paybackPeriod.toFixed(1)} months
                  </div>
                  <div className="text-gray-600 font-semibold">Payback Period</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Time to recover investment
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">
                    ${(results.netBenefit / 1000000).toFixed(1)}M
                  </div>
                  <div className="font-semibold">Net Annual Benefit</div>
                  <div className="text-sm opacity-90 mt-1">
                    After implementation costs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Real Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">10,000%</div>
              <div className="text-gray-600 font-semibold mb-2">Manufacturing Giant</div>
              <div className="text-sm text-gray-500">$2.5B in savings achieved</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">8,500%</div>
              <div className="text-gray-600 font-semibold mb-2">Financial Services</div>
              <div className="text-sm text-gray-500">99.7% fraud reduction</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">15,000%</div>
              <div className="text-gray-600 font-semibold mb-2">Quantum-Neural Fusion</div>
              <div className="text-sm text-gray-500">Revolutionary breakthrough</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Achieve These Results?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your AI 2025 transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Now
            </Link>
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Download Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}