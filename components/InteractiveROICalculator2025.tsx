'use client';

import React, { useState, useEffect } from 'react';

interface ROIFormData {
  companySize: string;
  industry: string;
  currentAnnualRevenue: number;
  currentOperationalCosts: number;
  aiImplementationBudget: number;
  expectedEfficiencyGains: number;
  expectedRevenueGrowth: number;
}

interface ROIResults {
  totalInvestment: number;
  annualSavings: number;
  additionalRevenue: number;
  totalBenefits: number;
  roi: number;
  paybackPeriod: number;
  fiveYearValue: number;
}

const InteractiveROICalculator2025: React.FC = () => {
  const [formData, setFormData] = useState<ROIFormData>({
    companySize: 'medium',
    industry: 'technology',
    currentAnnualRevenue: 5000000,
    currentOperationalCosts: 2000000,
    aiImplementationBudget: 500000,
    expectedEfficiencyGains: 25,
    expectedRevenueGrowth: 15,
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const companySizes = [
    { value: 'small', label: 'Small (1-50 employees)', multiplier: 1 },
    { value: 'medium', label: 'Medium (51-500 employees)', multiplier: 2 },
    { value: 'large', label: 'Large (500+ employees)', multiplier: 4 },
  ];

  const industries = [
    { value: 'technology', label: 'Technology', efficiencyMultiplier: 1.2 },
    { value: 'healthcare', label: 'Healthcare', efficiencyMultiplier: 1.5 },
    { value: 'manufacturing', label: 'Manufacturing', efficiencyMultiplier: 1.3 },
    { value: 'finance', label: 'Finance', efficiencyMultiplier: 1.4 },
    { value: 'retail', label: 'Retail', efficiencyMultiplier: 1.1 },
    { value: 'other', label: 'Other', efficiencyMultiplier: 1.0 },
  ];

  const calculateROI = (data: ROIFormData): ROIResults => {
    const sizeMultiplier = companySizes.find(s => s.value === data.companySize)?.multiplier || 2;
    const industryMultiplier = industries.find(i => i.value === data.industry)?.efficiencyMultiplier || 1.0;
    
    // Base calculations
    const adjustedEfficiency = data.expectedEfficiencyGains * industryMultiplier;
    const annualSavings = (data.currentOperationalCosts * adjustedEfficiency) / 100;
    const additionalRevenue = (data.currentAnnualRevenue * data.expectedRevenueGrowth) / 100;
    const totalBenefits = annualSavings + additionalRevenue;
    
    // Implementation costs (scaled by company size)
    const implementationCost = data.aiImplementationBudget * sizeMultiplier;
    const trainingCost = implementationCost * 0.15;
    const infrastructureCost = implementationCost * 0.25;
    const totalInvestment = implementationCost + trainingCost + infrastructureCost;
    
    // ROI calculations
    const roi = ((totalBenefits - totalInvestment) / totalInvestment) * 100;
    const paybackPeriod = totalInvestment / totalBenefits;
    const fiveYearValue = (totalBenefits * 5) - totalInvestment;
    
    return {
      totalInvestment,
      annualSavings,
      additionalRevenue,
      totalBenefits,
      roi,
      paybackPeriod,
      fiveYearValue,
    };
  };

  useEffect(() => {
    if (showResults) {
      const calculatedResults = calculateROI(formData);
      setResults(calculatedResults);
    }
  }, [formData, showResults]);

  const handleInputChange = (field: keyof ROIFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCalculate = () => {
    setShowResults(true);
    const calculatedResults = calculateROI(formData);
    setResults(calculatedResults);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const formatMonths = (years: number) => {
    const months = years * 12;
    if (months < 12) {
      return `${Math.round(months)} months`;
    } else {
      return `${years.toFixed(1)} years`;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          AI ROI Calculator 2025
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate the potential return on investment for your AI transformation project. 
          Get personalized insights based on your industry and company size.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
          
          <div className="space-y-6">
            {/* Company Size */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company Size
              </label>
              <select
                value={formData.companySize}
                onChange={(e) => handleInputChange('companySize', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {companySizes.map((size) => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {industries.map((industry) => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Annual Revenue */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Annual Revenue
              </label>
              <input
                type="number"
                value={formData.currentAnnualRevenue}
                onChange={(e) => handleInputChange('currentAnnualRevenue', parseFloat(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="5000000"
              />
            </div>

            {/* Operational Costs */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Operational Costs (Annual)
              </label>
              <input
                type="number"
                value={formData.currentOperationalCosts}
                onChange={(e) => handleInputChange('currentOperationalCosts', parseFloat(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="2000000"
              />
            </div>

            {/* AI Budget */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                AI Implementation Budget
              </label>
              <input
                type="number"
                value={formData.aiImplementationBudget}
                onChange={(e) => handleInputChange('aiImplementationBudget', parseFloat(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="500000"
              />
            </div>

            {/* Expected Efficiency Gains */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Expected Efficiency Gains (%)
              </label>
              <input
                type="range"
                min="5"
                max="50"
                value={formData.expectedEfficiencyGains}
                onChange={(e) => handleInputChange('expectedEfficiencyGains', parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>5%</span>
                <span className="font-semibold text-blue-600">{formData.expectedEfficiencyGains}%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Expected Revenue Growth */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Expected Revenue Growth (%)
              </label>
              <input
                type="range"
                min="5"
                max="40"
                value={formData.expectedRevenueGrowth}
                onChange={(e) => handleInputChange('expectedRevenueGrowth', parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>5%</span>
                <span className="font-semibold text-blue-600">{formData.expectedRevenueGrowth}%</span>
                <span>40%</span>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Calculate ROI
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {!showResults ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your AI ROI Results
              </h3>
              <p className="text-gray-600">
                Fill in your business details and click "Calculate ROI" to see your personalized results.
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI Investment Returns</h3>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {formatPercentage(results?.roi || 0)}
                  </div>
                  <div className="text-sm text-green-700 font-semibold">ROI</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {formatMonths(results?.paybackPeriod || 0)}
                  </div>
                  <div className="text-sm text-blue-700 font-semibold">Payback Period</div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Total Investment</span>
                  <span className="text-lg font-bold text-red-600">
                    {formatCurrency(results?.totalInvestment || 0)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Annual Savings</span>
                  <span className="text-lg font-bold text-green-600">
                    {formatCurrency(results?.annualSavings || 0)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Additional Revenue</span>
                  <span className="text-lg font-bold text-green-600">
                    {formatCurrency(results?.additionalRevenue || 0)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Total Annual Benefits</span>
                  <span className="text-lg font-bold text-blue-600">
                    {formatCurrency(results?.totalBenefits || 0)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">5-Year Value</span>
                  <span className="text-xl font-bold text-purple-600">
                    {formatCurrency(results?.fiveYearValue || 0)}
                  </span>
                </div>
              </div>

              {/* Recommendation */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Recommendation</h4>
                <p className="text-sm text-gray-700">
                  {results && results.roi > 100 
                    ? "Excellent investment opportunity! Your AI transformation is projected to deliver outstanding returns."
                    : results && results.roi > 50
                    ? "Strong investment potential. Consider optimizing your implementation strategy for better returns."
                    : "Consider a phased approach to AI implementation to minimize risk and maximize returns."
                  }
                </p>
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => setShowResults(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Recalculate
                </button>
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get Implementation Plan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Industry Insights */}
      <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry AI Adoption Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="text-3xl mb-2">🏥</div>
            <h4 className="font-semibold text-gray-900 mb-2">Healthcare</h4>
            <p className="text-sm text-gray-600">Average 45% efficiency gains through diagnostic AI and process automation.</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="text-3xl mb-2">🏭</div>
            <h4 className="font-semibold text-gray-900 mb-2">Manufacturing</h4>
            <p className="text-sm text-gray-600">35% reduction in downtime and 25% improvement in quality control.</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-3xl mb-2">💼</div>
            <h4 className="font-semibold text-gray-900 mb-2">Finance</h4>
            <p className="text-sm text-gray-600">60% faster fraud detection and 40% reduction in manual processes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveROICalculator2025;