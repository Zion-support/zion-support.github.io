"use client";
import React, { useState, useEffect } from 'react';

export default function AI2025ROICalculator() {
  const [currentRevenuesetCurrentRevenue] = useState(1000000);
  const [implementationCostsetImplementationCost] = useState(100000);
  const [timeframesetTimeframe] = useState(12);
  const [calculatedROIsetCalculatedROI] = useState(0);
  const [revenueIncreasetRevenueIncrease] = useState(0);
  const [costSavingsetCostSavings] = useState(0);
  const [totalReturnsetTotalReturns] = useState(0);

  useEffect(() => {
    // Calculate ROI based on AI 2025 breakthrough potential
    const baseROI = 10000; // 10,000% base ROI
    const timeframeMultiplier = Math.min(timeframe / 12); // Up to 2x for longer timeframes
    const revenueMultiplier = Math.log10(currentRevenue / 1000000) + 1; // Scale with revenue size
    
    const finalROI = baseROI * timeframeMultiplier * revenueMultiplier;
    const revenueIncreaseAmount = (currentRevenue * finalROI) / 100;
    const costSavingsAmount = implementationCost * 5; // 5x cost savings
    const totalReturnsAmount = revenueIncreaseAmount + costSavingsAmount;
    
    setCalculatedROI(Math.round(finalROI));
    setRevenueIncrease(Math.round(revenueIncreaseAmount));
    setCostSavings(Math.round(costSavingsAmount));
    setTotalReturns(Math.round(totalReturnsAmount));
  }[currentRevenueimplementationCostimeframe]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US'{
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold rounded-full mb-6 animate-pulse">
            🧮 AI 2025 ROI CALCULATOR - REVOLUTIONARY RETURNS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Calculate Your Revolutionary ROI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the potential returns from implementing our AI 2025 breakthrough technologies. 
            Our revolutionary AI delivers unprecedented ROI through quantum-enhanced neural networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-xl border border-gray-600/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Investment Parameters</h3>
            
            <div className="space-y-6">
              {/* Current Annual Revenue */}
              <div>
                <label className="block text-lg font-semibold mb-3 text-white">
                  Current Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">$</span>
                  <input
                    type="number"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white text-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                    placeholder="1,000,000"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Your current annual business revenue
                </p>
              </div>

              {/* Implementation Investment */}
              <div>
                <label className="block text-lg font-semibold mb-3 text-white">
                  AI 2025 Implementation Investment
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">$</span>
                  <input
                    type="number"
                    value={implementationCost}
                    onChange={(e) => setImplementationCost(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="100,000"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Total investment in AI 2025 breakthrough system
                </p>
              </div>

              {/* Timeframe */}
              <div>
                <label className="block text-lg font-semibold mb-3 text-white">
                  Implementation Timeframe (Months)
                </label>
                <select
                  value={timeframe}
                  onChange={(e) => setTimeframe(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white text-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                >
                  <option value={6}>6 Months</option>
                  <option value={12}>12 Months</option>
                  <option value={18}>18 Months</option>
                  <option value={24}>24 Months</option>
                  <option value={36}>36 Months</option>
                </select>
                <p className="text-sm text-gray-400 mt-2">
                  Expected timeframe for full implementation
                </p>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Main ROI Display */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Your Revolutionary ROI</h3>
              <div className="text-6xl font-bold text-yellow-400 mb-2">
                {calculatedROI.toLocaleString()}%
              </div>
              <p className="text-xl text-green-100">
                Expected return on investment with AI 2025 breakthrough
              </p>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-4 text-purple-400">Detailed Breakdown</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Revenue Increase</span>
                  <span className="text-green-400 font-bold text-lg">
                    {formatCurrency(revenueIncrease)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Cost Savings</span>
                  <span className="text-blue-400 font-bold text-lg">
                    {formatCurrency(costSavings)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Total Investment</span>
                  <span className="text-red-400 font-bold text-lg">
                    {formatCurrency(implementationCost)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-t-2 border-green-500">
                  <span className="text-green-400 font-bold text-xl">Net Profit</span>
                  <span className="text-green-400 font-bold text-2xl">
                    {formatCurrency(totalReturns - implementationCost)}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-4 text-purple-400">Revolutionary Benefits</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">10,000x faster processing speeds</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">99.9% accuracy in decision-making</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">95%+ process automation</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Quantum-enhanced neural networks</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Autonomous decision systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 p-8 rounded-xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Achieve Revolutionary ROI?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies already experiencing unprecedented success with our AI 2025 breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-500 px-8 py-3 rounded-lg font-bold text-white hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Implementation
              </a>
              <a
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-bold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Learn About AI 2025 Breakthrough
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}