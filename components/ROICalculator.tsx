'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Target, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    initialInvestment: 100000,
    monthlySavings: 50000,
    timeFrame: 12,
    efficiencyGain: 95
  });

  const calculateROI = () => {
    const { initialInvestment, monthlySavings, timeFrame, efficiencyGain } = inputs;
    const totalSavings = monthlySavings * timeFrame;
    const roi = ((totalSavings - initialInvestment) / initialInvestment) * 100;
    const paybackPeriod = initialInvestment / monthlySavings;
    
    return {
      roi: Math.round(roi),
      totalSavings,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      monthlyROI: Math.round((roi / timeFrame) * 10) / 10
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI 2026 ROI
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {' '}Calculator
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for implementing 
            AI 2026 technologies in your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calculator className="w-6 h-6 mr-2 text-green-600" />
              Investment Parameters
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Initial Investment ($)
                </label>
                <input
                  type="number"
                  value={inputs.initialInvestment}
                  onChange={(e) => handleInputChange('initialInvestment', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Savings ($)
                </label>
                <input
                  type="number"
                  value={inputs.monthlySavings}
                  onChange={(e) => handleInputChange('monthlySavings', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Time Frame (months)
                </label>
                <input
                  type="number"
                  value={inputs.timeFrame}
                  onChange={(e) => handleInputChange('timeFrame', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Efficiency Gain (%)
                </label>
                <input
                  type="number"
                  value={inputs.efficiencyGain}
                  onChange={(e) => handleInputChange('efficiencyGain', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2 text-green-600" />
              ROI Results
            </h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {results.roi.toLocaleString()}%
                </div>
                <div className="text-lg font-semibold text-gray-900">Total ROI</div>
                <div className="text-sm text-gray-600">Return on investment over {inputs.timeFrame} months</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    ${results.totalSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Total Savings</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {results.paybackPeriod} months
                  </div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-xl font-bold text-blue-600 mb-1">
                  {results.monthlyROI}%
                </div>
                <div className="text-sm text-gray-600">Monthly ROI</div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {inputs.efficiencyGain}% efficiency improvement
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    ${inputs.monthlySavings.toLocaleString()} monthly savings
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Break-even in {results.paybackPeriod} months
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve These Results?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Start your AI 2026 transformation journey and achieve unprecedented ROI 
              with our proven implementation strategies.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Implementation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROICalculator;