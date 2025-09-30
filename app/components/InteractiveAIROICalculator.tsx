'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface CalculatorInputs {
  employees: number;
  currentCosts: number;
  processHours: number;
  industry: string;
  automationLevel: number;
}

interface ROICalculations {
  timeSavings: number;
  costSavings: number;
  productivityGain: number;
  totalROI: number;
  paybackPeriod: number;
}

export default function InteractiveAIROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 100,
    currentCosts: 500000,
    processHours: 40,
    industry: 'technology',
    automationLevel: 70
  });

  const [results, setResults] = useState<ROICalculations | null>(null);

  const calculateROI = () => {
    const { employees, currentCosts, processHours, industry, automationLevel } = inputs;
    
    // Industry multipliers
    const industryMultipliers = {
      technology: 1.2,
      healthcare: 1.1,
      finance: 1.3,
      manufacturing: 1.4,
      retail: 1.0,
      education: 0.9
    };

    const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || 1.0;
    
    // Calculate savings
    const hourlyRate = 50; // Average hourly rate
    const timeSavings = (processHours * (automationLevel / 100)) * employees * 52; // Annual hours saved
    const costSavings = timeSavings * hourlyRate * multiplier;
    const productivityGain = (automationLevel / 100) * 0.8; // 80% of automation level becomes productivity gain
    
    // AI implementation costs (estimated)
    const implementationCost = currentCosts * 0.15; // 15% of current costs
    const annualMaintenance = implementationCost * 0.2; // 20% of implementation cost
    
    const netSavings = costSavings - annualMaintenance;
    const totalROI = ((netSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / netSavings;

    setResults({
      timeSavings,
      costSavings,
      productivityGain,
      totalROI,
      paybackPeriod
    });
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: number | string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your AI ROI</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                value={inputs.employees}
                onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="10000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Operational Costs ($)
              </label>
              <input
                type="number"
                value={inputs.currentCosts}
                onChange={(e) => handleInputChange('currentCosts', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="10000"
                step="10000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Weekly Process Hours
              </label>
              <input
                type="number"
                value={inputs.processHours}
                onChange={(e) => handleInputChange('processHours', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="168"
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
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail</option>
                <option value="education">Education</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Automation Level: {inputs.automationLevel}%
              </label>
              <input
                type="range"
                value={inputs.automationLevel}
                onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                min="10"
                max="100"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Calculate ROI
          </button>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI ROI Projection</h3>
          
          {results ? (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">%</span>
                  </div>
                  <h4 className="font-semibold text-green-800">Total ROI</h4>
                </div>
                <div className="text-3xl font-bold text-green-600">
                  {Math.round(results.totalROI)}%
                </div>
                <p className="text-sm text-green-700">
                  Expected return on AI investment
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">$</span>
                  </div>
                  <h4 className="font-semibold text-blue-800">Annual Savings</h4>
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  ${Math.round(results.costSavings).toLocaleString()}
                </div>
                <p className="text-sm text-blue-700">
                  Projected yearly cost reduction
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">⏱</span>
                  </div>
                  <h4 className="font-semibold text-purple-800">Time Savings</h4>
                </div>
                <div className="text-3xl font-bold text-purple-600">
                  {Math.round(results.timeSavings).toLocaleString()}
                </div>
                <p className="text-sm text-purple-700">
                  Hours saved per year
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">📅</span>
                  </div>
                  <h4 className="font-semibold text-orange-800">Payback Period</h4>
                </div>
                <div className="text-3xl font-bold text-orange-600">
                  {results.paybackPeriod < 1 ? 
                    `${Math.round(results.paybackPeriod * 12)} months` : 
                    `${Math.round(results.paybackPeriod)} years`
                  }
                </div>
                <p className="text-sm text-orange-700">
                  Time to recover investment
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/services"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 text-center block"
                >
                  Get Started with AI Transformation
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-gray-400">📊</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-600 mb-2">Ready to Calculate?</h4>
              <p className="text-gray-500">
                Fill in your business details and click "Calculate ROI" to see your potential AI transformation results.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}