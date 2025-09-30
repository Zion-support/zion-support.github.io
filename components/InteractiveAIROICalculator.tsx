'use client';

import React, { useState, useEffect } from 'react';

interface CalculatorInputs {
  employees: number;
  monthlyRevenue: number;
  currentEfficiency: number;
  industry: string;
  aiMaturity: string;
  budget: number;
}

interface CalculatorResults {
  potentialSavings: number;
  efficiencyGain: number;
  roi: number;
  paybackPeriod: number;
  annualValue: number;
}

export default function InteractiveAIROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 100,
    monthlyRevenue: 1000000,
    currentEfficiency: 70,
    industry: 'manufacturing',
    aiMaturity: 'beginner',
    budget: 500000
  });

  const [results, setResults] = useState<CalculatorResults>({
    potentialSavings: 0,
    efficiencyGain: 0,
    roi: 0,
    paybackPeriod: 0,
    annualValue: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const industries = [
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.2 },
    { value: 'finance', label: 'Financial Services', multiplier: 1.5 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.3 },
    { value: 'retail', label: 'Retail & E-commerce', multiplier: 1.1 },
    { value: 'logistics', label: 'Logistics & Transportation', multiplier: 1.4 },
    { value: 'education', label: 'Education', multiplier: 0.9 },
    { value: 'technology', label: 'Technology', multiplier: 1.0 },
    { value: 'other', label: 'Other', multiplier: 1.0 }
  ];

  const maturityLevels = [
    { value: 'beginner', label: 'Beginner', multiplier: 0.8 },
    { value: 'intermediate', label: 'Intermediate', multiplier: 1.0 },
    { value: 'advanced', label: 'Advanced', multiplier: 1.2 },
    { value: 'expert', label: 'Expert', multiplier: 1.4 }
  ];

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const industry = industries.find(i => i.value === inputs.industry);
      const maturity = maturityLevels.find(m => m.value === inputs.aiMaturity);
      
      const industryMultiplier = industry?.multiplier || 1.0;
      const maturityMultiplier = maturity?.multiplier || 1.0;
      
      // Base calculations
      const annualRevenue = inputs.monthlyRevenue * 12;
      const efficiencyGap = 100 - inputs.currentEfficiency;
      
      // Calculate potential savings based on efficiency improvement
      const baseEfficiencyGain = (efficiencyGap * 0.6) + 20; // 60% of efficiency gap + 20% base improvement
      const efficiencyGain = Math.min(baseEfficiencyGain * industryMultiplier * maturityMultiplier, 90);
      
      // Calculate savings
      const laborCostSavings = (annualRevenue * 0.3 * efficiencyGain) / 100; // 30% of revenue is labor cost
      const operationalSavings = (annualRevenue * 0.15 * efficiencyGain) / 100; // 15% operational savings
      const qualitySavings = (annualRevenue * 0.05 * efficiencyGain) / 100; // 5% quality improvement savings
      
      const potentialSavings = laborCostSavings + operationalSavings + qualitySavings;
      const annualValue = potentialSavings;
      const roi = inputs.budget > 0 ? ((annualValue - inputs.budget) / inputs.budget) * 100 : 0;
      const paybackPeriod = inputs.budget > 0 ? inputs.budget / annualValue : 0;

      setResults({
        potentialSavings,
        efficiencyGain,
        roi,
        paybackPeriod,
        annualValue
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number | string) => {
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

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const formatMonths = (months: number) => {
    if (months < 1) return '< 1 month';
    if (months < 12) return `${months.toFixed(1)} months`;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths === 0) return `${years} year${years > 1 ? 's' : ''}`;
    return `${years} year${years > 1 ? 's' : ''} ${remainingMonths.toFixed(0)} month${remainingMonths > 1 ? 's' : ''}`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for AI transformation in your organization. 
            Get personalized insights based on your industry, size, and current efficiency levels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Organization</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="range"
                  min="10"
                  max="10000"
                  step="10"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10</span>
                  <span className="font-medium">{inputs.employees.toLocaleString()}</span>
                  <span>10,000+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Revenue
                </label>
                <input
                  type="range"
                  min="10000"
                  max="100000000"
                  step="10000"
                  value={inputs.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$10K</span>
                  <span className="font-medium">{formatCurrency(inputs.monthlyRevenue)}</span>
                  <span>$100M+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Efficiency Level
                </label>
                <input
                  type="range"
                  min="30"
                  max="95"
                  step="5"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>30%</span>
                  <span className="font-medium">{inputs.currentEfficiency}%</span>
                  <span>95%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {industries.map(industry => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Maturity Level
                </label>
                <select
                  value={inputs.aiMaturity}
                  onChange={(e) => handleInputChange('aiMaturity', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {maturityLevels.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Investment Budget
                </label>
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="50000"
                  value={inputs.budget}
                  onChange={(e) => handleInputChange('budget', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$50K</span>
                  <span className="font-medium">{formatCurrency(inputs.budget)}</span>
                  <span>$10M+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Your AI ROI Projection</h3>
            
            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">{formatCurrency(results.annualValue)}</div>
                  <div className="text-blue-100">Annual Value Generated</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">{formatPercentage(results.roi)}</div>
                    <div className="text-blue-100 text-sm">ROI</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">{formatMonths(results.paybackPeriod)}</div>
                    <div className="text-blue-100 text-sm">Payback Period</div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">{formatPercentage(results.efficiencyGain)}</div>
                  <div className="text-blue-100 text-sm">Efficiency Improvement</div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">{formatCurrency(results.potentialSavings)}</div>
                  <div className="text-blue-100 text-sm">Potential Annual Savings</div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="text-sm text-blue-100 mb-4">
                    *Projections based on industry averages and our experience with 500+ AI implementations
                  </div>
                  <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Detailed Analysis
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Calculate Your ROI</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Labor Cost Savings</h4>
                <p className="text-gray-600 text-sm">
                  AI automation reduces manual work, leading to 30-50% reduction in labor costs for routine tasks.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Operational Efficiency</h4>
                <p className="text-gray-600 text-sm">
                  Process optimization and predictive analytics improve operational efficiency by 20-40%.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Quality Improvements</h4>
                <p className="text-gray-600 text-sm">
                  AI-driven quality control reduces defects and rework, saving 5-15% in quality-related costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}