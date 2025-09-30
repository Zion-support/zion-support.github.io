'use client';

import React, { useState, useEffect } from 'react';

export default function InteractiveAIROICalculator2026() {
  const [inputs, setInputs] = useState({
    annualRevenue: 100000000,
    employees: 1000,
    currentEfficiency: 70,
    industry: 'manufacturing'
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    roi: 0,
    efficiencyGain: 0,
    paybackPeriod: 0,
    npv: 0
  });

  const industryMultipliers = {
    manufacturing: { savings: 0.15, efficiency: 0.9, roi: 3.0 },
    healthcare: { savings: 0.12, efficiency: 0.85, roi: 2.8 },
    finance: { savings: 0.18, efficiency: 0.95, roi: 3.2 },
    retail: { savings: 0.10, efficiency: 0.80, roi: 2.5 },
    technology: { savings: 0.20, efficiency: 0.95, roi: 3.5 }
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const multiplier = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
    
    // Calculate annual savings based on revenue and industry
    const annualSavings = inputs.annualRevenue * multiplier.savings;
    
    // Calculate efficiency gain
    const efficiencyGain = multiplier.efficiency * 100;
    
    // Calculate ROI
    const roi = multiplier.roi * 100;
    
    // Calculate payback period (assuming 20% of savings as initial investment)
    const initialInvestment = annualSavings * 0.2;
    const paybackPeriod = initialInvestment / (annualSavings / 12);
    
    // Calculate NPV (5 years, 10% discount rate)
    const discountRate = 0.10;
    let npv = 0;
    for (let year = 1; year <= 5; year++) {
      npv += annualSavings / Math.pow(1 + discountRate, year);
    }
    npv -= initialInvestment;
    
    setResults({
      annualSavings,
      roi,
      efficiencyGain,
      paybackPeriod,
      npv
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
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential impact of AI transformation on your organization. 
            Get personalized projections based on your industry and business metrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Enter Your Business Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="100000000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="1000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Current Efficiency Level (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="70"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Financial Services</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Industry Insights</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <div className="flex justify-between">
                  <span>Typical AI Savings:</span>
                  <span className="font-semibold">{(industryMultipliers[inputs.industry as keyof typeof industryMultipliers].savings * 100).toFixed(1)}% of revenue</span>
                </div>
                <div className="flex justify-between">
                  <span>Efficiency Improvement:</span>
                  <span className="font-semibold">{(industryMultipliers[inputs.industry as keyof typeof industryMultipliers].efficiency * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected ROI:</span>
                  <span className="font-semibold">{(industryMultipliers[inputs.industry as keyof typeof industryMultipliers].roi * 100).toFixed(0)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Main Results */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Your AI Transformation Projections</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">
                    {formatCurrency(results.annualSavings)}
                  </div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">
                    {results.roi.toFixed(0)}%
                  </div>
                  <div className="text-sm opacity-90">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    {results.efficiencyGain.toFixed(0)}%
                  </div>
                  <div className="text-sm opacity-90">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-2">
                    {results.paybackPeriod.toFixed(1)}m
                  </div>
                  <div className="text-sm opacity-90">Payback Period</div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Detailed Financial Impact</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">5-Year Net Present Value</span>
                  <span className="text-2xl font-bold text-green-600">
                    {formatCurrency(results.npv)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Initial Investment</span>
                  <span className="text-xl font-semibold text-gray-900">
                    {formatCurrency(results.annualSavings * 0.2)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Year 1 Savings</span>
                  <span className="text-xl font-semibold text-blue-600">
                    {formatCurrency(results.annualSavings)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">5-Year Total Savings</span>
                  <span className="text-xl font-semibold text-purple-600">
                    {formatCurrency(results.annualSavings * 5)}
                  </span>
                </div>
              </div>
            </div>

            {/* Success Factors */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Key Success Factors</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">Data Quality</div>
                    <div className="text-sm text-gray-600">Clean, complete data is essential for AI success</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">Change Management</div>
                    <div className="text-sm text-gray-600">Proper training and cultural transformation</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">Phased Implementation</div>
                    <div className="text-sm text-gray-600">Start with pilots, then scale enterprise-wide</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">Executive Support</div>
                    <div className="text-sm text-gray-600">Strong leadership commitment to AI transformation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve These Results?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and custom AI transformation roadmap for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}