'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentCost: '',
    timeSpent: '',
    errorRate: '',
    automationCost: '',
  });

  const [resultsetResults] = useState(null);

  const calculateROI = () => {
    const currentCost = parseFloat(inputs.currentCost) || 0;
    const timeSpent = parseFloat(inputs.timeSpent) || 0;
    const errorRate = parseFloat(inputs.errorRate) || 0;
    const automationCost = parseFloat(inputs.automationCost) || 0;

    const errorCost = currentCost * (errorRate / 100);
    const totalCurrentCost = currentCost + errorCost;
    const savings = totalCurrentCost - automationCost;
    const roi = automationCost > 0 ? ((savings / automationCost) * 100) : 0;

    setResults({
      currentCost: totalCurrentCost,
      automationCost,
      savings,
      roi,
      paybackPeriod: savings > 0 ? (automationCost / savings) * 12 : 0,
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Calculator className="w-8 h-8 text-green-600 mr-3" />
              Input Your Data
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Monthly Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentCost}
                  onChange={(e) => handleInputChange('currentCost', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter current cost"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours Spent Monthly
                </label>
                <input
                  type="number"
                  value={inputs.timeSpent}
                  onChange={(e) => handleInputChange('timeSpent', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter hours spent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Error Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.errorRate}
                  onChange={(e) => handleInputChange('errorRate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter error rate"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Automation Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.automationCost}
                  onChange={(e) => handleInputChange('automationCost', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter automation cost"
                />
              </div>

              <button
                onClick={calculateROI}
                className="w-full px-6 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Calculate ROI
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              Results
            </h3>

            {results ? (
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-700 font-medium">Monthly Savings</span>
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    ${results.savings.toLocaleString()}
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-700 font-medium">ROI Percentage</span>
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    {results.roi.toFixed(1)}%
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-700 font-medium">Payback Period</span>
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600">
                    {results.paybackPeriod.toFixed(1)} months
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Current Total Cost</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${results.currentCost.toLocaleString()}/month
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <Calculator className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>Enter your data and click "Calculate ROI" to see results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;