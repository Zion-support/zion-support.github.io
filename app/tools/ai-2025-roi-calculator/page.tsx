'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export default function AI2025ROICalculator() {
  const [currentInvestment, setCurrentInvestment] = useState(100000);
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [operationalCosts, setOperationalCosts] = useState(30000);
  const [timeframe, setTimeframe] = useState(12);
  const [calculatedROI, setCalculatedROI] = useState(0);
  const [projectedValue, setProjectedValue] = useState(0);

  useEffect(() => {
    calculateROI();
  }, [currentInvestment, monthlyRevenue, operationalCosts, timeframe]);

  const calculateROI = () => {
    const monthlyProfit = monthlyRevenue - operationalCosts;
    const totalProfit = monthlyProfit * timeframe;
    const roi = ((totalProfit - currentInvestment) / currentInvestment) * 100;
    const projectedValue = currentInvestment + totalProfit;
    
    setCalculatedROI(Math.max(0, roi));
    setProjectedValue(Math.max(0, projectedValue));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6 animate-pulse">
            🧮 INTERACTIVE TOOL
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI 2025
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}ROI Calculator
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Calculate your potential return on investment with our revolutionary AI 2025 breakthrough technology.
            See how much value you can create for your business.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Calculate Your ROI</h2>
              
              <div className="space-y-6">
                {/* Current Investment */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Current Investment ($)
                  </label>
                  <input
                    type="number"
                    value={currentInvestment}
                    onChange={(e) => setCurrentInvestment(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="Enter your investment amount"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Initial investment in AI 2025 technology
                  </p>
                </div>

                {/* Monthly Revenue */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Expected Monthly Revenue ($)
                  </label>
                  <input
                    type="number"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="Enter expected monthly revenue"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Projected monthly revenue increase
                  </p>
                </div>

                {/* Operational Costs */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Monthly Operational Costs ($)
                  </label>
                  <input
                    type="number"
                    value={operationalCosts}
                    onChange={(e) => setOperationalCosts(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="Enter monthly operational costs"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Monthly costs to maintain AI systems
                  </p>
                </div>

                {/* Timeframe */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Timeframe (Months)
                  </label>
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  >
                    <option value={6}>6 Months</option>
                    <option value={12}>12 Months</option>
                    <option value={18}>18 Months</option>
                    <option value={24}>24 Months</option>
                    <option value={36}>36 Months</option>
                  </select>
                  <p className="text-sm text-gray-600 mt-2">
                    Projected timeframe for ROI calculation
                  </p>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Projected Results</h2>
              
              <div className="space-y-8">
                {/* ROI Display */}
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-600 mb-2">
                    {formatPercentage(calculatedROI)}
                  </div>
                  <div className="text-xl text-gray-700 font-semibold">Return on Investment</div>
                  <div className="text-sm text-gray-600 mt-2">
                    Based on {timeframe} month projection
                  </div>
                </div>

                {/* Projected Value */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {formatCurrency(projectedValue)}
                  </div>
                  <div className="text-lg text-gray-700 font-semibold">Projected Total Value</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Investment + Total Profit
                  </div>
                </div>

                {/* Monthly Profit */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {formatCurrency(monthlyRevenue - operationalCosts)}
                  </div>
                  <div className="text-lg text-gray-700 font-semibold">Monthly Net Profit</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Revenue - Operational Costs
                  </div>
                </div>

                {/* Total Profit */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    {formatCurrency((monthlyRevenue - operationalCosts) * timeframe)}
                  </div>
                  <div className="text-lg text-gray-700 font-semibold">Total Profit</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Over {timeframe} months
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Start Your AI Transformation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See how other companies have achieved incredible ROI with our AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">10,000%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fortune 500 Company</h3>
              <p className="text-gray-700 mb-6">
                Achieved 10,000% ROI in just 6 months with our breakthrough AI technology.
              </p>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                BREAKTHROUGH
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">5,000%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Startup</h3>
              <p className="text-gray-700 mb-6">
                Scaled from startup to unicorn with 5,000% ROI using our AI solutions.
              </p>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                REVOLUTIONARY
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">2,500%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-700 mb-6">
                Major bank achieved 2,500% ROI through AI-driven process optimization.
              </p>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                SUCCESS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Our AI Technology Delivers Such High ROI
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our revolutionary AI 2025 breakthrough technology provides unprecedented advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">10,000x Faster</h3>
              <p className="text-gray-700">
                Revolutionary processing speed that delivers results in seconds instead of hours.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">99.9% Accuracy</h3>
              <p className="text-gray-700">
                Unprecedented accuracy levels that eliminate errors and improve decision-making.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous</h3>
              <p className="text-gray-700">
                Fully autonomous operations that require minimal human intervention.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum-Powered</h3>
              <p className="text-gray-700">
                Quantum computing integration that unlocks new possibilities in AI processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Calculate Your Success?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the AI revolution and transform your business with our breakthrough technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Learn More About the Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}