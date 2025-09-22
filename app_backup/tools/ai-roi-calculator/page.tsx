"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calculator, TrendingUp, DollarSign, Users, Clock, ArrowRight } from 'lucide-react';

export default function AIROICalculator() {
  const [inputs, setInputs] = useState({
    annualRevenue: '',
    employees: '',
    currentEfficiency: '',
    expectedEfficiency: '',
    implementationCost: '',
    maintenanceCost: '',
    trainingCost: ''
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    totalCosts: 0,
    netBenefit: 0,
    roi: 0,
    paybackPeriod: 0
  });

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    const revenue = parseFloat(inputs.annualRevenue) || 0;
    const employees = parseFloat(inputs.employees) || 0;
    const currentEff = parseFloat(inputs.currentEfficiency) || 0;
    const expectedEff = parseFloat(inputs.expectedEfficiency) || 0;
    const implCost = parseFloat(inputs.implementationCost) || 0;
    const maintCost = parseFloat(inputs.maintenanceCost) || 0;
    const trainCost = parseFloat(inputs.trainingCost) || 0;

    // Calculate efficiency improvement
    const efficiencyGain = (expectedEff - currentEff) / 100;
    
    // Calculate annual savings from efficiency improvement
    const annualSavings = revenue * efficiencyGain;
    
    // Calculate total costs
    const totalCosts = implCost + maintCost + trainCost;
    
    // Calculate net benefit
    const netBenefit = annualSavings - totalCosts;
    
    // Calculate ROI
    const roi = totalCosts > 0 ? (netBenefit / totalCosts) * 100 : 0;
    
    // Calculate payback period (in months)
    const paybackPeriod = annualSavings > 0 ? (totalCosts / annualSavings) * 12 : 0;

    setResults({
      annualSavings,
      totalCosts,
      netBenefit,
      roi,
      paybackPeriod
    });
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI ROI Calculator</h1>
            <p className="text-gray-600">Calculate the potential return on investment for your AI implementation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Business Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your annual revenue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter number of employees"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Efficiency (%)
                </label>
                <input
                  type="number"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter current efficiency percentage"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Efficiency After AI (%)
                </label>
                <input
                  type="number"
                  value={inputs.expectedEfficiency}
                  onChange={(e) => handleInputChange('expectedEfficiency', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter expected efficiency percentage"
                />
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Cost Information</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.implementationCost}
                  onChange={(e) => handleInputChange('implementationCost', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter implementation cost"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Maintenance Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.maintenanceCost}
                  onChange={(e) => handleInputChange('maintenanceCost', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter annual maintenance cost"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Training Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.trainingCost}
                  onChange={(e) => handleInputChange('trainingCost', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter training cost"
                />
              </div>

              <button
                onClick={calculateROI}
                className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Calculate ROI
              </button>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">ROI Analysis Results</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Annual Savings</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      {formatCurrency(results.annualSavings)}
                    </span>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-red-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Total Costs</span>
                    </div>
                    <span className="text-lg font-bold text-red-600">
                      {formatCurrency(results.totalCosts)}
                    </span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Net Benefit</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">
                      {formatCurrency(results.netBenefit)}
                    </span>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">ROI</span>
                    </div>
                    <span className="text-lg font-bold text-purple-600">
                      {formatPercentage(results.roi)}
                    </span>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Payback Period</span>
                    </div>
                    <span className="text-lg font-bold text-orange-600">
                      {results.paybackPeriod.toFixed(1)} months
                    </span>
                  </div>
                </div>
              </div>

              {/* ROI Interpretation */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">ROI Interpretation</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  {results.roi > 300 && (
                    <p className="text-green-600 font-medium">Excellent ROI - Highly recommended for implementation</p>
                  )}
                  {results.roi >= 100 && results.roi <= 300 && (
                    <p className="text-blue-600 font-medium">Good ROI - Recommended with proper planning</p>
                  )}
                  {results.roi >= 50 && results.roi < 100 && (
                    <p className="text-yellow-600 font-medium">Moderate ROI - Consider pilot implementation first</p>
                  )}
                  {results.roi < 50 && results.roi > 0 && (
                    <p className="text-orange-600 font-medium">Low ROI - Review costs and expected benefits</p>
                  )}
                  {results.roi <= 0 && (
                    <p className="text-red-600 font-medium">Negative ROI - Not recommended at current parameters</p>
                  )}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommendations</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Start with pilot projects to validate assumptions</li>
                  <li>• Focus on high-impact use cases first</li>
                  <li>• Invest in team training and change management</li>
                  <li>• Monitor and measure results continuously</li>
                  <li>• Scale successful implementations gradually</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}