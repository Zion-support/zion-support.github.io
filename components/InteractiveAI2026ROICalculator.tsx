'use client';

import React, { useState, useEffect } from 'react';

interface CalculationResults {
  annualSavings: number;
  totalROI: number;
  paybackPeriod: number;
  efficiencyGain: number;
  costReduction: number;
}

export default function InteractiveAI2026ROICalculator() {
  const [formData, setFormData] = useState({
    companySize: 'medium',
    industry: 'manufacturing',
    currentProcesses: 100,
    manualWorkPercentage: 60,
    annualRevenue: 10000000,
    currentEfficiency: 70,
    errorRate: 15,
    averageSalary: 75000,
    workingHours: 2000,
  });

  const [results, setResults] = useState<CalculationResults>({
    annualSavings: 0,
    totalROI: 0,
    paybackPeriod: 0,
    efficiencyGain: 0,
    costReduction: 0,
  });

  const [isCalculated, setIsCalculated] = useState(false);

  const calculateROI = () => {
    const {
      companySize,
      industry,
      currentProcesses,
      manualWorkPercentage,
      annualRevenue,
      currentEfficiency,
      errorRate,
      averageSalary,
      workingHours,
    } = formData;

    // Industry multipliers
    const industryMultipliers = {
      manufacturing: 1.2,
      healthcare: 1.1,
      finance: 1.3,
      retail: 1.0,
      technology: 1.4,
      logistics: 1.15,
    };

    // Company size multipliers
    const sizeMultipliers = {
      small: 0.8,
      medium: 1.0,
      large: 1.3,
      enterprise: 1.6,
    };

    const industryMultiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || 1.0;
    const sizeMultiplier = sizeMultipliers[companySize as keyof typeof sizeMultipliers] || 1.0;

    // Calculate base metrics
    const automationPotential = (manualWorkPercentage / 100) * 0.95; // 95% of manual work can be automated
    const efficiencyImprovement = (100 - currentEfficiency) * 0.9; // 90% of inefficiency can be addressed
    const errorReduction = (errorRate / 100) * 0.98; // 98% error reduction

    // Calculate cost savings
    const laborCostSavings = (currentProcesses * automationPotential * averageSalary * 0.3) * sizeMultiplier;
    const efficiencySavings = (annualRevenue * (efficiencyImprovement / 100) * 0.15) * industryMultiplier;
    const errorCostSavings = (annualRevenue * errorReduction * 0.05) * industryMultiplier;
    const processOptimizationSavings = (currentProcesses * 5000) * sizeMultiplier;

    const annualSavings = laborCostSavings + efficiencySavings + errorCostSavings + processOptimizationSavings;

    // Calculate implementation costs
    const baseImplementationCost = annualRevenue * 0.05; // 5% of revenue
    const aiPlatformCost = 50000 * sizeMultiplier;
    const integrationCost = currentProcesses * 1000;
    const trainingCost = 25000 * sizeMultiplier;
    const totalImplementationCost = baseImplementationCost + aiPlatformCost + integrationCost + trainingCost;

    // Calculate ROI metrics
    const totalROI = ((annualSavings - totalImplementationCost) / totalImplementationCost) * 100;
    const paybackPeriod = totalImplementationCost / annualSavings;
    const efficiencyGain = currentEfficiency + efficiencyImprovement;
    const costReduction = (annualSavings / annualRevenue) * 100;

    setResults({
      annualSavings: Math.round(annualSavings),
      totalROI: Math.round(totalROI),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      efficiencyGain: Math.round(efficiencyGain),
      costReduction: Math.round(costReduction * 10) / 10,
    });

    setIsCalculated(true);
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          AI 2026 ROI Calculator
        </h2>
        <p className="text-lg text-gray-600">
          Calculate your potential return on investment with our advanced AI solutions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Company Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size
            </label>
            <select
              value={formData.companySize}
              onChange={(e) => handleInputChange('companySize', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="small">Small (1-50 employees)</option>
              <option value="medium">Medium (51-500 employees)</option>
              <option value="large">Large (501-5000 employees)</option>
              <option value="enterprise">Enterprise (5000+ employees)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="manufacturing">Manufacturing</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
              <option value="technology">Technology</option>
              <option value="logistics">Logistics</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Revenue ($)
            </label>
            <input
              type="number"
              value={formData.annualRevenue}
              onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value) || 0)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="10,000,000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Business Processes
            </label>
            <input
              type="number"
              value={formData.currentProcesses}
              onChange={(e) => handleInputChange('currentProcesses', parseInt(e.target.value) || 0)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Manual Work Percentage (%)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.manualWorkPercentage}
              onChange={(e) => handleInputChange('manualWorkPercentage', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>0%</span>
              <span className="font-medium">{formData.manualWorkPercentage}%</span>
              <span>100%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Efficiency Level (%)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.currentEfficiency}
              onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>0%</span>
              <span className="font-medium">{formData.currentEfficiency}%</span>
              <span>100%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Error Rate (%)
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={formData.errorRate}
              onChange={(e) => handleInputChange('errorRate', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>0%</span>
              <span className="font-medium">{formData.errorRate}%</span>
              <span>50%</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Projected Results</h3>
          
          {isCalculated && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    ${results.annualSavings.toLocaleString()}
                  </div>
                  <div className="text-gray-600">Annual Savings</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {results.totalROI}%
                  </div>
                  <div className="text-sm text-gray-600">Total ROI</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {results.paybackPeriod}
                  </div>
                  <div className="text-sm text-gray-600">Months to ROI</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {results.efficiencyGain}%
                  </div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
                <div className="bg-teal-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-1">
                    {results.costReduction}%
                  </div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Key Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>95% process automation potential</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>98% error reduction capability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Real-time optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Scalable AI infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={calculateROI}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Recalculate ROI
        </button>
      </div>
    </div>
  );
}