'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CalculatorState {
  currentCosts: {
    infrastructure: number;
    dataProcessing: number;
    modelTraining: number;
    maintenance: number;
    personnel: number;
  };
  optimizationLevel: number;
  timeHorizon: number;
}

export default function InteractiveAICalculator2026() {
  const [state, setState] = useState<CalculatorState>({
    currentCosts: {
      infrastructure: 50000,
      dataProcessing: 30000,
      modelTraining: 20000,
      maintenance: 15000,
      personnel: 25000,
    },
    optimizationLevel: 70,
    timeHorizon: 12,
  });

  const [results, setResults] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    roi: 0,
    paybackPeriod: 0,
  });

  useEffect(() => {
    calculateResults();
  }, [state]);

  const calculateResults = () => {
    const totalCurrentCosts = Object.values(state.currentCosts).reduce((sum, cost) => sum + cost, 0);
    const savingsPercentage = state.optimizationLevel / 100;
    const monthlySavings = totalCurrentCosts * savingsPercentage;
    const annualSavings = monthlySavings * 12;
    
    // Assume implementation cost is 20% of annual savings
    const implementationCost = annualSavings * 0.2;
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / monthlySavings;

    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    });
  };

  const updateCost = (category: keyof CalculatorState['currentCosts'], value: number) => {
    setState(prev => ({
      ...prev,
      currentCosts: {
        ...prev.currentCosts,
        [category]: value,
      },
    }));
  };

  const updateOptimizationLevel = (value: number) => {
    setState(prev => ({
      ...prev,
      optimizationLevel: value,
    }));
  };

  const updateTimeHorizon = (value: number) => {
    setState(prev => ({
      ...prev,
      timeHorizon: value,
    }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI Cost Optimization Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential AI cost savings and ROI with our interactive calculator. 
            See how much you could save with proper AI optimization strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Current AI Costs (Monthly)</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Infrastructure Costs
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={state.currentCosts.infrastructure}
                    onChange={(e) => updateCost('infrastructure', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="50000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data Processing Costs
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={state.currentCosts.dataProcessing}
                    onChange={(e) => updateCost('dataProcessing', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="30000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Model Training Costs
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={state.currentCosts.modelTraining}
                    onChange={(e) => updateCost('modelTraining', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="20000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maintenance Costs
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={state.currentCosts.maintenance}
                    onChange={(e) => updateCost('maintenance', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="15000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Personnel Costs
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={state.currentCosts.personnel}
                    onChange={(e) => updateCost('personnel', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="25000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Optimization Level: {state.optimizationLevel}%
                </label>
                <input
                  type="range"
                  min="20"
                  max="90"
                  value={state.optimizationLevel}
                  onChange={(e) => updateOptimizationLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>20%</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Horizon: {state.timeHorizon} months
                </label>
                <input
                  type="range"
                  min="6"
                  max="36"
                  value={state.timeHorizon}
                  onChange={(e) => updateTimeHorizon(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>6 months</span>
                  <span>36 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Savings */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">${results.monthlySavings.toLocaleString()}</div>
                <div className="text-xl opacity-90">Monthly Savings</div>
                <div className="text-sm opacity-75 mt-2">
                  {state.optimizationLevel}% reduction in current costs
                </div>
              </div>
            </div>

            {/* Annual Savings */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">${results.annualSavings.toLocaleString()}</div>
                <div className="text-xl opacity-90">Annual Savings</div>
                <div className="text-sm opacity-75 mt-2">
                  Total yearly cost reduction
                </div>
              </div>
            </div>

            {/* ROI */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{results.roi}%</div>
                <div className="text-xl opacity-90">Return on Investment</div>
                <div className="text-sm opacity-75 mt-2">
                  Over {state.timeHorizon} months
                </div>
              </div>
            </div>

            {/* Payback Period */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{results.paybackPeriod}</div>
                <div className="text-xl opacity-90">Months to Payback</div>
                <div className="text-sm opacity-75 mt-2">
                  Break-even point
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ready to Achieve These Savings?
              </h3>
              <p className="text-gray-600 mb-6">
                Our AI cost optimization experts can help you implement these strategies 
                and achieve real results.
              </p>
              <div className="space-y-3">
                <Link
                  href="/services/ai-cost-optimization"
                  className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Free Cost Audit
                </Link>
                <a
                  href="tel:+13024640950"
                  className="block w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How We Calculate Your Savings
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Analysis</h4>
              <p className="text-gray-600 text-sm">
                We analyze your current AI infrastructure and identify optimization opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Optimization Strategies</h4>
              <p className="text-gray-600 text-sm">
                Implement proven strategies to reduce costs while improving performance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ROI Tracking</h4>
              <p className="text-gray-600 text-sm">
                Monitor and measure your savings with detailed reporting and analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}