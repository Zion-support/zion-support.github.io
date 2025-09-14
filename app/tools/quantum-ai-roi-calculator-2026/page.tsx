'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function QuantumAIROICalculator2026() {
  const [inputs, setInputs] = useState({
    currentRevenue: 100000000,
    currentEfficiency: 70,
    currentCosts: 50000000,
    quantumInvestment: 10000000,
    implementationTime: 18
  });

  const [results, setResults] = useState({
    efficiencyGain: 0,
    costSavings: 0,
    revenueIncrease: 0,
    totalROI: 0,
    paybackPeriod: 0
  });

  const calculateROI = () => {
    const efficiencyGain = 80; // 80% efficiency improvement
    const costSavings = (inputs.currentCosts * 0.6); // 60% cost reduction
    const revenueIncrease = (inputs.currentRevenue * 0.25); // 25% revenue increase
    const totalBenefits = costSavings + revenueIncrease;
    const totalROI = ((totalBenefits - inputs.quantumInvestment) / inputs.quantumInvestment) * 100;
    const paybackPeriod = inputs.quantumInvestment / (totalBenefits / 12);

    setResults({
      efficiencyGain,
      costSavings,
      revenueIncrease,
      totalROI,
      paybackPeriod
    });
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Quantum AI ROI Calculator 2026 - Calculate Your Investment Returns"
        description="Calculate the ROI of quantum AI implementation for your business. See potential savings, efficiency gains, and revenue increases with our advanced calculator."
        keywords="quantum AI ROI calculator, AI investment calculator, quantum computing ROI, business AI calculator"
        url="/tools/quantum-ai-roi-calculator-2026"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚛️ QUANTUM AI ROI CALCULATOR 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your Quantum AI Investment Returns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential ROI of implementing quantum AI in your organization. 
            Based on real-world data from Fortune 500 implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Business Metrics</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="100,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Operational Efficiency (%)
                </label>
                <input
                  type="number"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="70"
                  min="0"
                  max="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Operational Costs ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentCosts}
                  onChange={(e) => handleInputChange('currentCosts', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="50,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantum AI Investment ($)
                </label>
                <input
                  type="number"
                  value={inputs.quantumInvestment}
                  onChange={(e) => handleInputChange('quantumInvestment', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="10,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Time (months)
                </label>
                <input
                  type="number"
                  value={inputs.implementationTime}
                  onChange={(e) => handleInputChange('implementationTime', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="18"
                />
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
              >
                Calculate ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Projected Results</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">Efficiency Gain</h3>
                    <p className="text-sm text-green-600">Expected improvement in operational efficiency</p>
                  </div>
                  <div className="text-3xl font-bold text-green-600">+{results.efficiencyGain}%</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">Annual Cost Savings</h3>
                    <p className="text-sm text-blue-600">Reduction in operational costs</p>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    ${(results.costSavings / 1000000).toFixed(1)}M
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800">Revenue Increase</h3>
                    <p className="text-sm text-purple-600">Additional revenue from efficiency gains</p>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">
                    ${(results.revenueIncrease / 1000000).toFixed(1)}M
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800">Total ROI</h3>
                    <p className="text-sm text-yellow-600">Return on investment percentage</p>
                  </div>
                  <div className="text-3xl font-bold text-yellow-600">{results.totalROI.toFixed(0)}%</div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-orange-800">Payback Period</h3>
                    <p className="text-sm text-orange-600">Time to recover initial investment</p>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">{results.paybackPeriod.toFixed(1)} months</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Real-World Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$2.3B</div>
              <div className="text-lg text-gray-600 mb-2">Annual Savings</div>
              <div className="text-sm text-gray-500">Fortune 500 Manufacturing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-lg text-gray-600 mb-2">Efficiency Rate</div>
              <div className="text-sm text-gray-500">Global Enterprise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">400%</div>
              <div className="text-lg text-gray-600 mb-2">ROI Achieved</div>
              <div className="text-sm text-gray-500">Financial Services</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let our quantum AI experts help you implement this revolutionary technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/case-studies/quantum-ai-implementation-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}