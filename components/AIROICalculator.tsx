'use client';

import React, { useState } from 'react';

interface ROIResult {
  totalSavings: number;
  paybackPeriod: number;
  threeYearROI: number;
  fiveYearROI: number;
  monthlySavings: number;
}

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    currentCosts: '',
    efficiencyGain: '',
    implementationCost: '',
    timeline: '12',
    teamSize: '',
    industry: 'general'
  });

  const [result, setResult] = useState<ROIResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const currentCosts = parseFloat(formData.currentCosts) || 0;
      const efficiencyGain = parseFloat(formData.efficiencyGain) || 0;
      const implementationCost = parseFloat(formData.implementationCost) || 0;
      const timeline = parseInt(formData.timeline) || 12;
      const teamSize = parseInt(formData.teamSize) || 1;

      // Industry multipliers
      const industryMultipliers = {
        healthcare: 1.4,
        finance: 1.3,
        manufacturing: 1.2,
        retail: 1.1,
        education: 1.0,
        general: 1.0
      };

      const multiplier = industryMultipliers[formData.industry as keyof typeof industryMultipliers] || 1.0;
      
      // Calculate savings
      const annualSavings = currentCosts * (efficiencyGain / 100) * multiplier;
      const monthlySavings = annualSavings / 12;
      const totalSavings = annualSavings * (timeline / 12);
      
      // Calculate ROI
      const netBenefit = totalSavings - implementationCost;
      const paybackPeriod = implementationCost / annualSavings;
      const threeYearROI = ((annualSavings * 3 - implementationCost) / implementationCost) * 100;
      const fiveYearROI = ((annualSavings * 5 - implementationCost) / implementationCost) * 100;

      setResult({
        totalSavings,
        paybackPeriod,
        threeYearROI,
        fiveYearROI,
        monthlySavings
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">💰</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">AI ROI Calculator</h2>
        <p className="text-gray-600">
          Calculate the potential return on investment for your AI implementation
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Costs ($)
            </label>
            <input
              type="number"
              value={formData.currentCosts}
              onChange={(e) => handleInputChange('currentCosts', e.target.value)}
              placeholder="100000"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Efficiency Gain (%)
            </label>
            <input
              type="number"
              value={formData.efficiencyGain}
              onChange={(e) => handleInputChange('efficiencyGain', e.target.value)}
              placeholder="25"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Cost ($)
            </label>
            <input
              type="number"
              value={formData.implementationCost}
              onChange={(e) => handleInputChange('implementationCost', e.target.value)}
              placeholder="50000"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Timeline (months)
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="18">18 months</option>
              <option value="24">24 months</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Team Size
            </label>
            <input
              type="number"
              value={formData.teamSize}
              onChange={(e) => handleInputChange('teamSize', e.target.value)}
              placeholder="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="general">General</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="education">Education</option>
            </select>
          </div>
        </div>

        <button
          onClick={calculateROI}
          disabled={isCalculating}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCalculating ? 'Calculating...' : 'Calculate ROI'}
        </button>
      </div>

      {result && (
        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Analysis Results</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Monthly Savings:</span>
                <span className="font-bold text-green-600">
                  ${result.monthlySavings.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total Savings ({formData.timeline} months):</span>
                <span className="font-bold text-green-600">
                  ${result.totalSavings.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Payback Period:</span>
                <span className="font-bold text-blue-600">
                  {result.paybackPeriod.toFixed(1)} months
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">3-Year ROI:</span>
                <span className="font-bold text-purple-600">
                  {result.threeYearROI.toFixed(1)}%
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">5-Year ROI:</span>
                <span className="font-bold text-purple-600">
                  {result.fiveYearROI.toFixed(1)}%
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Net Benefit:</span>
                <span className="font-bold text-green-600">
                  ${(result.totalSavings - parseFloat(formData.implementationCost)).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Recommendation:</h4>
            <p className="text-gray-700">
              {result.threeYearROI > 100 
                ? "✅ Strong ROI - This AI implementation is highly recommended based on projected returns."
                : result.threeYearROI > 50
                ? "⚠️ Moderate ROI - Consider this implementation with careful planning and monitoring."
                : "❌ Low ROI - Consider alternative approaches or additional cost optimization strategies."
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
}