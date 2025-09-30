'use client';
import React, { useState, useEffect } from 'react';

interface ROICalculatorProps {
  className?: string;
}

export default function InteractiveAIROICalculator({ className = '' }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    annualRevenue: 10000000,
    operationalCosts: 5000000,
    currentEfficiency: 70,
    expectedEfficiencyGain: 90,
    implementationCost: 2000000,
    timeToDeploy: 8
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    roi: 0,
    paybackPeriod: 0,
    netBenefit: 0,
    efficiencyGain: 0
  });

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const { annualRevenue, operationalCosts, currentEfficiency, expectedEfficiencyGain, implementationCost, timeToDeploy } = inputs;
    
    // Calculate efficiency improvement
    const efficiencyGain = (expectedEfficiencyGain - currentEfficiency) / 100;
    
    // Calculate annual savings based on operational cost reduction
    const annualSavings = operationalCosts * efficiencyGain;
    
    // Calculate ROI
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    
    // Calculate payback period in months
    const monthlySavings = annualSavings / 12;
    const paybackPeriod = implementationCost / monthlySavings;
    
    // Calculate net benefit over 3 years
    const netBenefit = (annualSavings * 3) - implementationCost;
    
    setResults({
      annualSavings,
      roi,
      paybackPeriod,
      netBenefit,
      efficiencyGain: efficiencyGain * 100
    });
  };

  const handleInputChange = (field: string, value: number) => {
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

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          AI ROI Calculator
        </h2>
        <p className="text-lg text-gray-600">
          Calculate your potential return on investment with AI transformation
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Business Metrics</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Revenue
            </label>
            <input
              type="number"
              value={inputs.annualRevenue}
              onChange={(e) => handleInputChange('annualRevenue', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="10,000,000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Operational Costs
            </label>
            <input
              type="number"
              value={inputs.operationalCosts}
              onChange={(e) => handleInputChange('operationalCosts', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="5,000,000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Efficiency Level (%)
            </label>
            <input
              type="number"
              value={inputs.currentEfficiency}
              onChange={(e) => handleInputChange('currentEfficiency', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              max="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected AI Efficiency Gain (%)
            </label>
            <input
              type="number"
              value={inputs.expectedEfficiencyGain}
              onChange={(e) => handleInputChange('expectedEfficiencyGain', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              max="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Implementation Cost
            </label>
            <input
              type="number"
              value={inputs.implementationCost}
              onChange={(e) => handleInputChange('implementationCost', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="2,000,000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time to Deploy (months)
            </label>
            <input
              type="number"
              value={inputs.timeToDeploy}
              onChange={(e) => handleInputChange('timeToDeploy', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="1"
              max="24"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your AI ROI Projections</h3>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {formatCurrency(results.annualSavings)}
              </div>
              <div className="text-gray-700 font-semibold">Annual Savings</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {formatPercentage(results.roi)}
              </div>
              <div className="text-gray-700 font-semibold">ROI</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {results.paybackPeriod.toFixed(1)}m
              </div>
              <div className="text-gray-700 font-semibold">Payback Period</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {formatCurrency(results.netBenefit)}
              </div>
              <div className="text-gray-700 font-semibold">3-Year Net Benefit</div>
            </div>
          </div>

          {/* Efficiency Gain Visualization */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">
                {formatPercentage(results.efficiencyGain)}
              </div>
              <div className="text-gray-700 font-semibold">Efficiency Improvement</div>
            </div>
          </div>

          {/* ROI Breakdown */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">ROI Breakdown</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Investment:</span>
                <span className="font-semibold">{formatCurrency(inputs.implementationCost)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Annual Savings:</span>
                <span className="font-semibold text-green-600">{formatCurrency(results.annualSavings)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">ROI:</span>
                <span className="font-semibold text-blue-600">{formatPercentage(results.roi)}</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                <span className="text-gray-900 font-semibold">Net Benefit (3 years):</span>
                <span className="font-bold text-purple-600">{formatCurrency(results.netBenefit)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Achieve These Results?
          </h3>
          <p className="text-gray-600 mb-6">
            Let our AI experts help you implement a transformation strategy that delivers real ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          * ROI calculations are estimates based on industry averages and may vary based on specific business conditions, 
          implementation approach, and market factors. Actual results may differ.
        </p>
      </div>
    </div>
  );
}