'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Target } from 'lucide-react';

interface ROIInputs {
  currentRevenue: number;
  currentCosts: number;
  aiInvestment: number;
  expectedEfficiency: number;
  timeToImplement: number;
}

const InteractiveAIROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    currentRevenue: 1000000,
    currentCosts: 800000,
    aiInvestment: 100000,
    expectedEfficiency: 25,
    timeToImplement: 6,
  });

  const [roi, setRoi] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    threeYearROI: 0,
  });

  useEffect(() => {
    const calculateROI = () => {
      const monthlySavings = (inputs.currentCosts * inputs.expectedEfficiency) / 100 / 12;
      const annualSavings = monthlySavings * 12;
      const paybackPeriod = inputs.aiInvestment / monthlySavings;
      const threeYearROI = ((annualSavings * 3) - inputs.aiInvestment) / inputs.aiInvestment * 100;

      setRoi({
        monthlySavings,
        annualSavings,
        paybackPeriod,
        threeYearROI,
      });
    };

    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: keyof ROIInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Calculator className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          AI ROI Calculator
        </h2>
        <p className="text-gray-600">
          Calculate the potential return on investment for AI implementation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Input Parameters</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Revenue ($)
            </label>
            <input
              type="number"
              value={inputs.currentRevenue}
              onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Costs ($)
            </label>
            <input
              type="number"
              value={inputs.currentCosts}
              onChange={(e) => handleInputChange('currentCosts', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Investment ($)
            </label>
            <input
              type="number"
              value={inputs.aiInvestment}
              onChange={(e) => handleInputChange('aiInvestment', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Efficiency Improvement (%)
            </label>
            <input
              type="number"
              value={inputs.expectedEfficiency}
              onChange={(e) => handleInputChange('expectedEfficiency', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time to Implement (months)
            </label>
            <input
              type="number"
              value={inputs.timeToImplement}
              onChange={(e) => handleInputChange('timeToImplement', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Results</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Monthly Savings</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                ${roi.monthlySavings.toLocaleString()}
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Annual Savings</span>
              </div>
              <div className="text-2xl font-bold text-green-600">
                ${roi.annualSavings.toLocaleString()}
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Payback Period</span>
              </div>
              <div className="text-2xl font-bold text-orange-600">
                {roi.paybackPeriod.toFixed(1)} months
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">3-Year ROI</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {roi.threeYearROI.toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Summary</h4>
            <p className="text-sm text-gray-600">
              With an AI investment of ${inputs.aiInvestment.toLocaleString()}, you can expect to save 
              ${roi.annualSavings.toLocaleString()} annually, achieving a payback period of {roi.paybackPeriod.toFixed(1)} months 
              and a 3-year ROI of {roi.threeYearROI.toFixed(1)}%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIROICalculator;