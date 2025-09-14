'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIROICalculator2025() {
  const [inputs, setInputs] = useState({
    annualRevenue: '',
    currentCosts: '',
    employees: '',
    industry: 'manufacturing'
  });
  const [results, setResults] = useState(null);

  const industries = [
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.2 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.5 },
    { value: 'finance', label: 'Financial Services', multiplier: 1.3 },
    { value: 'retail', label: 'Retail', multiplier: 1.1 },
    { value: 'technology', label: 'Technology', multiplier: 1.4 },
    { value: 'other', label: 'Other', multiplier: 1.0 }
  ];

  const calculateROI = () => {
    const revenue = parseFloat(inputs.annualRevenue) || 0;
    const costs = parseFloat(inputs.currentCosts) || 0;
    const employeeCount = parseInt(inputs.employees) || 0;
    const industry = industries.find(i => i.value === inputs.industry);
    
    if (revenue === 0 || costs === 0 || employeeCount === 0) {
      alert('Please fill in all required fields');
      return;
    }

    // AI transformation calculations
    const costSavings = costs * 0.35; // 35% cost reduction
    const efficiencyGains = revenue * 0.15; // 15% revenue increase
    const totalAnnualSavings = costSavings + efficiencyGains;
    
    // Industry-specific adjustments
    const adjustedSavings = totalAnnualSavings * industry.multiplier;
    
    // Implementation costs (typically 5-10% of annual revenue)
    const implementationCost = revenue * 0.08;
    
    // ROI calculation
    const netBenefit = adjustedSavings - implementationCost;
    const roi = ((netBenefit / implementationCost) * 100);
    
    // Payback period
    const paybackPeriod = implementationCost / adjustedSavings * 12; // in months
    
    setResults({
      costSavings: costSavings,
      efficiencyGains: efficiencyGains,
      totalAnnualSavings: adjustedSavings,
      implementationCost: implementationCost,
      netBenefit: netBenefit,
      roi: roi,
      paybackPeriod: paybackPeriod,
      industryMultiplier: industry.multiplier
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetCalculator = () => {
    setInputs({
      annualRevenue: '',
      currentCosts: '',
      employees: '',
      industry: 'manufacturing'
    });
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEO
        title="AI ROI Calculator 2025 - Zion Tech Group"
        description="Calculate your potential ROI from AI transformation with our comprehensive AI ROI calculator for 2025."
        keywords="AI ROI calculator, AI transformation ROI, AI investment calculator, enterprise AI ROI"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI ROI Calculator 2025</h1>
          <p className="text-lg text-gray-600">Calculate your potential return on investment from AI transformation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Enter Your Business Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 10000000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Operational Costs ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentCosts}
                  onChange={(e) => handleInputChange('currentCosts', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 5000000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {industries.map(industry => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Calculate AI ROI
              </button>

              <button
                onClick={resetCalculator}
                className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Reset Calculator
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Transformation ROI Projection</h2>
            
            {results ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {Math.round(results.roi)}% ROI
                  </div>
                  <div className="text-gray-600">Expected Return on Investment</div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600">Annual Cost Savings</div>
                    <div className="text-2xl font-semibold text-green-600">
                      ${(results.costSavings / 1000000).toFixed(1)}M
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600">Revenue Increase</div>
                    <div className="text-2xl font-semibold text-blue-600">
                      ${(results.efficiencyGains / 1000000).toFixed(1)}M
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600">Total Annual Benefits</div>
                    <div className="text-2xl font-semibold text-purple-600">
                      ${(results.totalAnnualSavings / 1000000).toFixed(1)}M
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600">Implementation Cost</div>
                    <div className="text-2xl font-semibold text-orange-600">
                      ${(results.implementationCost / 1000000).toFixed(1)}M
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600">Payback Period</div>
                    <div className="text-2xl font-semibold text-gray-600">
                      {Math.round(results.paybackPeriod)} months
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Get Personalized AI Strategy
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <div className="text-6xl mb-4">📊</div>
                <p>Enter your business information and click "Calculate AI ROI" to see your projected results.</p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How Our AI ROI Calculator Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Savings</h3>
              <p className="text-gray-600">AI automation typically reduces operational costs by 35% through process optimization and efficiency gains.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue Growth</h3>
              <p className="text-gray-600">AI-driven insights and automation typically increase revenue by 15% through better decision-making and customer experience.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Multipliers</h3>
              <p className="text-gray-600">Different industries see varying AI impact levels, which we factor into our calculations for more accurate projections.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}