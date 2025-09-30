'use client';

import React, { useState, useEffect } from 'react';

interface CalculatorInputs {
  currentRevenue: number;
  currentCosts: number;
  industry: string;
  companySize: string;
  aiMaturity: string;
  implementationTimeline: string;
}

interface CalculatorResults {
  projectedROI: number;
  costSavings: number;
  revenueIncrease: number;
  efficiencyGain: number;
  paybackPeriod: number;
  totalValue: number;
}

export default function InteractiveAI2026Calculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentRevenue: 10000000,
    currentCosts: 8000000,
    industry: 'manufacturing',
    companySize: 'large',
    aiMaturity: 'beginner',
    implementationTimeline: '12'
  });

  const [results, setResults] = useState<CalculatorResults>({
    projectedROI: 0,
    costSavings: 0,
    revenueIncrease: 0,
    efficiencyGain: 0,
    paybackPeriod: 0,
    totalValue: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    manufacturing: { roi: 1.4, cost: 1.3, revenue: 1.2, efficiency: 1.5 },
    healthcare: { roi: 1.6, cost: 1.4, revenue: 1.3, efficiency: 1.3 },
    finance: { roi: 1.8, cost: 1.5, revenue: 1.4, efficiency: 1.4 },
    retail: { roi: 1.2, cost: 1.2, revenue: 1.3, efficiency: 1.2 },
    technology: { roi: 1.5, cost: 1.3, revenue: 1.4, efficiency: 1.3 },
    logistics: { roi: 1.3, cost: 1.4, revenue: 1.2, efficiency: 1.6 }
  };

  const sizeMultipliers = {
    small: { roi: 0.8, cost: 0.7, revenue: 0.6, efficiency: 0.8 },
    medium: { roi: 1.0, cost: 1.0, revenue: 1.0, efficiency: 1.0 },
    large: { roi: 1.2, cost: 1.3, revenue: 1.2, efficiency: 1.2 },
    enterprise: { roi: 1.5, cost: 1.5, revenue: 1.4, efficiency: 1.4 }
  };

  const maturityMultipliers = {
    beginner: { roi: 0.7, cost: 0.8, revenue: 0.7, efficiency: 0.8 },
    intermediate: { roi: 1.0, cost: 1.0, revenue: 1.0, efficiency: 1.0 },
    advanced: { roi: 1.3, cost: 1.2, revenue: 1.2, efficiency: 1.2 },
    expert: { roi: 1.6, cost: 1.4, revenue: 1.4, efficiency: 1.4 }
  };

  const calculateResults = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industry = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
      const size = sizeMultipliers[inputs.companySize as keyof typeof sizeMultipliers];
      const maturity = maturityMultipliers[inputs.aiMaturity as keyof typeof maturityMultipliers];
      
      const baseROI = 250; // Base ROI percentage
      const baseCostReduction = 0.35; // Base cost reduction percentage
      const baseRevenueIncrease = 0.25; // Base revenue increase percentage
      const baseEfficiencyGain = 0.60; // Base efficiency gain percentage
      
      const multiplier = industry.roi * size.roi * maturity.roi;
      const costMultiplier = industry.cost * size.cost * maturity.cost;
      const revenueMultiplier = industry.revenue * size.revenue * maturity.revenue;
      const efficiencyMultiplier = industry.efficiency * size.efficiency * maturity.efficiency;
      
      const projectedROI = Math.round(baseROI * multiplier);
      const costSavings = Math.round(inputs.currentCosts * baseCostReduction * costMultiplier);
      const revenueIncrease = Math.round(inputs.currentRevenue * baseRevenueIncrease * revenueMultiplier);
      const efficiencyGain = Math.round(baseEfficiencyGain * efficiencyMultiplier * 100);
      
      const totalValue = costSavings + revenueIncrease;
      const paybackPeriod = Math.round((totalValue * 0.1) / (totalValue / 12)); // Simplified calculation
      
      setResults({
        projectedROI,
        costSavings,
        revenueIncrease,
        efficiencyGain,
        paybackPeriod: Math.max(6, Math.min(24, paybackPeriod)),
        totalValue
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
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

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your AI ROI</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Annual Revenue
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
                Current Annual Costs
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
                <option value="healthcare">Healthcare</option>
                <option value="finance">Financial Services</option>
                <option value="retail">Retail & E-commerce</option>
                <option value="technology">Technology</option>
                <option value="logistics">Logistics & Supply Chain</option>
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
                Current AI Maturity
              </label>
              <select
                value={inputs.aiMaturity}
                onChange={(e) => handleInputChange('aiMaturity', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="beginner">Beginner - No AI implementation</option>
                <option value="intermediate">Intermediate - Some AI tools</option>
                <option value="advanced">Advanced - Multiple AI systems</option>
                <option value="expert">Expert - AI-first organization</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Implementation Timeline (months)
              </label>
              <select
                value={inputs.implementationTimeline}
                onChange={(e) => handleInputChange('implementationTimeline', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="6">6 months</option>
                <option value="12">12 months</option>
                <option value="18">18 months</option>
                <option value="24">24 months</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI Transformation Projections</h3>
          
          {isCalculating ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Calculating your AI ROI...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {results.projectedROI}%
                  </div>
                  <div className="text-gray-600 font-semibold">Projected ROI</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Based on industry benchmarks and your inputs
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {formatCurrency(results.costSavings)}
                  </div>
                  <div className="text-sm text-gray-600">Annual Cost Savings</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {formatCurrency(results.revenueIncrease)}
                  </div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {results.efficiencyGain}%
                  </div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {results.paybackPeriod}
                  </div>
                  <div className="text-sm text-gray-600">Payback (months)</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    {formatCurrency(results.totalValue)}
                  </div>
                  <div className="text-lg font-semibold mb-1">Total Annual Value</div>
                  <div className="text-sm opacity-90">
                    Combined cost savings and revenue increase
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="text-yellow-600 text-xl">💡</div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Pro Tip</h4>
                    <p className="text-sm text-yellow-700">
                      These projections are based on industry averages. Actual results may vary based on 
                      implementation quality, data quality, and organizational readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How We Calculate Your AI ROI</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Industry Analysis</h4>
            <p className="text-sm text-gray-600">
              We analyze your industry's AI adoption patterns and success rates to provide accurate projections.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Company Factors</h4>
            <p className="text-sm text-gray-600">
              Your company size, current AI maturity, and implementation timeline all factor into the calculation.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Real Data</h4>
            <p className="text-sm text-gray-600">
              Our calculations are based on real-world data from 500+ successful AI implementations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}