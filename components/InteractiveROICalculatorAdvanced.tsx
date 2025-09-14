import React, { useState, useEffect } from 'react';

const InteractiveROICalculatorAdvanced = () => {
  const [inputs, setInputs] = useState({
    currentContentCost: 100000,
    currentContentTime: 40,
    currentTeamSize: 5,
    currentEngagement: 3,
    currentLeads: 1000,
    currentRevenue: 5000000
  });

  const [results, setResults] = useState({
    timeSavings: 0,
    costSavings: 0,
    engagementIncrease: 0,
    leadIncrease: 0,
    revenueIncrease: 0,
    totalROI: 0,
    paybackPeriod: 0
  });

  const calculateROI = () => {
    const {
      currentContentCost,
      currentContentTime,
      currentTeamSize,
      currentEngagement,
      currentLeads,
      currentRevenue
    } = inputs;

    // AI Content Revolution improvements
    const timeSavings = currentContentTime * 0.95; // 95% time reduction
    const costSavings = currentContentCost * 0.95; // 95% cost reduction
    const engagementIncrease = currentEngagement * 3; // 300% engagement increase
    const leadIncrease = currentLeads * 12; // 1,200% lead increase
    const revenueIncrease = currentRevenue * 50; // 50,000% ROI potential

    const totalSavings = costSavings + (timeSavings * currentTeamSize * 50); // $50/hour average
    const totalROI = ((revenueIncrease - currentRevenue) / currentRevenue) * 100;
    const paybackPeriod = currentContentCost / (totalSavings / 12); // months

    setResults({
      timeSavings,
      costSavings,
      engagementIncrease,
      leadIncrease,
      revenueIncrease,
      totalROI,
      paybackPeriod
    });
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            🧮 INTERACTIVE ROI CALCULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Content Revolution ROI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See exactly how much the AI 2025 Ultimate Content Revolution can save and generate for your business. 
            Input your current metrics to get personalized projections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Current Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Content Creation Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentContentCost}
                  onChange={(e) => handleInputChange('currentContentCost', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="100000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hours per Content Piece
                </label>
                <input
                  type="number"
                  value={inputs.currentContentTime}
                  onChange={(e) => handleInputChange('currentContentTime', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="40"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Content Team Size
                </label>
                <input
                  type="number"
                  value={inputs.currentTeamSize}
                  onChange={(e) => handleInputChange('currentTeamSize', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="5"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Engagement Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.currentEngagement}
                  onChange={(e) => handleInputChange('currentEngagement', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="3"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Leads Generated
                </label>
                <input
                  type="number"
                  value={inputs.currentLeads}
                  onChange={(e) => handleInputChange('currentLeads', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue from Content ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="5000000"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* ROI Summary */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Your Projected ROI</h3>
              <div className="text-6xl font-bold text-yellow-400 mb-2">
                {results.totalROI.toLocaleString()}%
              </div>
              <div className="text-xl opacity-90">Return on Investment</div>
            </div>

            {/* Detailed Results */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Time Savings</h4>
                  <div className="text-2xl">⏱️</div>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {results.timeSavings.toFixed(1)} hours
                </div>
                <div className="text-sm text-gray-600">95% reduction per content piece</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Cost Savings</h4>
                  <div className="text-2xl">💰</div>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${results.costSavings.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Annual savings from automation</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Engagement Increase</h4>
                  <div className="text-2xl">📈</div>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {results.engagementIncrease.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">300% boost in engagement rates</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Lead Generation</h4>
                  <div className="text-2xl">🎯</div>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {results.leadIncrease.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">1,200% increase in monthly leads</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Revenue Potential</h4>
                  <div className="text-2xl">🚀</div>
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  ${results.revenueIncrease.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Annual revenue potential</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
                  <div className="text-2xl">⏰</div>
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {results.paybackPeriod.toFixed(1)} months
                </div>
                <div className="text-sm text-gray-600">Time to recover investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve These Results?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join the companies already achieving extraordinary ROI with the AI 2025 Ultimate Content Revolution. 
              Get your personalized implementation plan today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Your Implementation Plan
              </a>
              <a
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculatorAdvanced;