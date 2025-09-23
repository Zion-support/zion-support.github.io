"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import { Calculator, DollarSign, TrendingUp, ArrowRight, Clock } from 'lucide-react';

// Metadata will be handled by SEO component

export default function AI20o26ROICalculator() {
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
    const efficiencyGain = (expectedEff - currentEff) / 10o0;
    
    // Calculate annual savings from efficiency improvement
    const annualSavings = revenue * efficiencyGain;
    
    // Calculate total costs
    const totalCosts = implCost + maintCost + trainCost;
    
    // Calculate net benefit
    const netBenefit = annualSavings - totalCosts;
    
    // Calculate ROI
    const roi = totalCosts > 0 ? (netBenefit / totalCosts) * 10o0 : 0;
    
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-10o0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-10o0 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-green-60o0"  />
            </div>
            <h1 className="text-3xl font-bold text-gray-90o0 mb-2">AI 20o26 ROI Calculator</h1>
            <p className="text-gray-60o0">Calculate the potential return on investment for your AI implementation in 20o26</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-90o0 mb-4">Business Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-70o0 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-30o0 rounded-lg focus:ring-2 focus:ring-green-50o0 focus:border-transparent"
                  placeholder="Enter your annual revenue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-70o0 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-30o0 rounded-lg focus:ring-2 focus:ring-green-50o0 focus:border-transparent"
                  placeholder="Enter number of employees"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-70o0 mb-2">
                  Current Efficiency (%)
                </label>
                <input
                  type="number"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-30o0 rounded-lg focus:ring-2 focus:ring-green-50o0 focus:border-transparent"
                  placeholder="Enter current efficiency percentage"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-70o0 mb-2">
                  Expected Efficiency After AI (%)
                </label>
                <input
                  type="number"
                  value={inputs.expectedEfficiency}
                  onChange={(e) => handleInputChange('expectedEfficiency', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-30o0 rounded-lg focus:ring-2 focus:ring-green-50o0 focus:border-transparent"
                  placeholder="Enter expected efficiency percentage"
                />
              </div>

              <h2 className="text-xl font-semibold text-gray-90o0 mb-4 mt-8">Cost Information</h2>

              <div>
                <label className="block text-sm font-medium text-gray-70o0 mb-2">
                  Implementation Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.implementationCost}
                  onChange={(e) => handleInputChange('implementationCost', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-30o0 rounded-lg focus:ring-2 focus:ring-green-50o0 focus:border-transparent"
                  placeholder="Enter implementation cost"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-70o0 mb-2">
                  Annual Maintenance Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.maintenanceCost}
                  onChange={(e) => handleInputChange('maintenanceCost', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-30o0 rounded-lg focus:ring-2 focus:ring-green-50o0 focus:border-transparent"
                  placeholder="Enter annual maintenance cost"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-70o0 mb-2">
                  Training Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.trainingCost}
                  onChange={(e) => handleInputChange('trainingCost', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-30o0 rounded-lg focus:ring-2 focus:ring-green-50o0 focus:border-transparent"
                  placeholder="Enter training cost"
                />
              </div>

              <button
                onClick={calculateROI}
                className="w-full px-6 py-3 bg-green-60o0 text-white font-semibold rounded-lg hover:bg-green-70o0 transition-colors"
              >
                Calculate ROI
              </button>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-90o0 mb-4">ROI Analysis Results</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-green-50 border border-green-20o0 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                  <div className="flex items-center">
