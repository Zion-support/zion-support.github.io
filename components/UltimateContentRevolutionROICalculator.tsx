'use client';

import React, { useState, useEffect } from 'react';

const UltimateContentRevolutionROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentContentCost: 100000,
    currentContentVolume: 1000,
    currentEngagementRate: 2.5,
    currentConversionRate: 1.2,
    teamSize: 10,
    marketSize: 1000000
  });

  const [results, setResults] = useState({
    currentROI: 0,
    projectedROI: 0,
    costSavings: 0,
    revenueIncrease: 0,
    netBenefit: 0,
    paybackPeriod: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const {
        currentContentCost,
        currentContentVolume,
        currentEngagementRate,
        currentConversionRate,
        teamSize,
        marketSize
      } = inputs;

      // Current metrics
      const currentRevenue = currentContentVolume * currentConversionRate * 100; // $100 per conversion
      const currentROI = ((currentRevenue - currentContentCost) / currentContentCost) * 100;

      // AI Content Revolution improvements
      const aiContentCost = currentContentCost * 0.15; // 85% cost reduction
      const aiContentVolume = currentContentVolume * 12; // 1,200% increase
      const aiEngagementRate = currentEngagementRate * 4.5; // 450% improvement
      const aiConversionRate = currentConversionRate * 3.4; // 340% improvement

      // Projected metrics
      const projectedRevenue = aiContentVolume * aiConversionRate * 100;
      const projectedROI = ((projectedRevenue - aiContentCost) / aiContentCost) * 100;
      const costSavings = currentContentCost - aiContentCost;
      const revenueIncrease = projectedRevenue - currentRevenue;
      const netBenefit = costSavings + revenueIncrease;
      const paybackPeriod = aiContentCost / (netBenefit / 12); // months

      setResults({
        currentROI: Math.round(currentROI),
        projectedROI: Math.round(projectedROI),
        costSavings: Math.round(costSavings),
        revenueIncrease: Math.round(revenueIncrease),
        netBenefit: Math.round(netBenefit),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10
      });

      setIsCalculating(false);
    }, 1000);
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
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-400 text-black rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">💰 ROI CALCULATOR</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Content Revolution ROI Calculator
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Calculate your potential ROI with our revolutionary AI content strategies. 
            See how your organization can achieve 25,000% ROI within 18 months.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Current Content Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Annual Content Production Cost
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    value={inputs.currentContentCost}
                    onChange={(e) => handleInputChange('currentContentCost', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="100,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Annual Content Volume (pieces)
                </label>
                <input
                  type="number"
                  value={inputs.currentContentVolume}
                  onChange={(e) => handleInputChange('currentContentVolume', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="1,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Current Engagement Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.currentEngagementRate}
                  onChange={(e) => handleInputChange('currentEngagementRate', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="2.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Current Conversion Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.currentConversionRate}
                  onChange={(e) => handleInputChange('currentConversionRate', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="1.2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Content Team Size
                </label>
                <input
                  type="number"
                  value={inputs.teamSize}
                  onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Target Market Size
                </label>
                <input
                  type="number"
                  value={inputs.marketSize}
                  onChange={(e) => handleInputChange('marketSize', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="1,000,000"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Projected Results</h3>
            
            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Current vs Projected ROI */}
                <div className="bg-white/20 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium text-blue-100">Current ROI</span>
                    <span className="text-2xl font-bold text-red-400">{results.currentROI}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-blue-100">Projected ROI</span>
                    <span className="text-2xl font-bold text-green-400">{formatNumber(results.projectedROI)}%</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-red-400 to-green-400 h-2 rounded-full">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(100, (results.currentROI / results.projectedROI) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Financial Impact */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Cost Savings</span>
                      <span className="text-xl font-bold text-green-400">
                        {formatCurrency(results.costSavings)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Revenue Increase</span>
                      <span className="text-xl font-bold text-blue-400">
                        {formatCurrency(results.revenueIncrease)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-black font-medium">Total Net Benefit</span>
                      <span className="text-xl font-bold text-black">
                        {formatCurrency(results.netBenefit)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payback Period */}
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-blue-100 mb-2">Payback Period</div>
                    <div className="text-3xl font-bold text-yellow-400">
                      {results.paybackPeriod} months
                    </div>
                  </div>
                </div>

                {/* AI Content Revolution Benefits */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-4">AI Content Revolution Benefits</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Content Production Speed:</span>
                      <span className="font-bold">+1,200%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Engagement Rate:</span>
                      <span className="font-bold">+450%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion Rate:</span>
                      <span className="font-bold">+340%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost Reduction:</span>
                      <span className="font-bold">-85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Content Accuracy:</span>
                      <span className="font-bold">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Achieve These Results?
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Join 1,000+ organizations already achieving 25,000% ROI with our AI Content Revolution framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentRevolutionROICalculator;