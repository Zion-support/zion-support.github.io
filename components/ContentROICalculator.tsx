import React, { useState } from 'react';

const ContentROICalculator: React.FC = () => {
  const [currentMetrics, setCurrentMetrics] = useState({
    monthlyContent: 50,
    contentCreationHours: 160,
    monthlyContentBudget: 10000,
    currentEngagementRate: 2.5,
    currentConversionRate: 1.2
  });

  const [results, setResults] = useState({
    timeSaved: 0,
    costSavings: 0,
    engagementBoost: 0,
    conversionBoost: 0,
    totalROI: 0
  });

  const calculateROI = () => {
    const aiMultiplier = {
      timeSaved: 0.9, // 90% time savings
      costSavings: 0.7, // 70% cost reduction
      engagementBoost: 3.0, // 300% engagement boost
      conversionBoost: 2.5 // 250% conversion boost
    };

    const timeSaved = currentMetrics.contentCreationHours * aiMultiplier.timeSaved;
    const costSavings = currentMetrics.monthlyContentBudget * aiMultiplier.costSavings;
    const engagementBoost = currentMetrics.currentEngagementRate * aiMultiplier.engagementBoost;
    const conversionBoost = currentMetrics.currentConversionRate * aiMultiplier.conversionBoost;
    
    // Calculate total ROI (simplified calculation)
    const totalROI = ((costSavings + (engagementBoost * 1000) + (conversionBoost * 5000)) / currentMetrics.monthlyContentBudget) * 100;

    setResults({
      timeSaved,
      costSavings,
      engagementBoost,
      conversionBoost,
      totalROI
    });
  };

  React.useEffect(() => {
    calculateROI();
  }, [currentMetrics]);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🧮 AI Content ROI Calculator
          </h2>
          <p className="text-xl text-gray-300">
            Calculate the potential ROI of implementing AI content automation for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Your Current Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white mb-2">Monthly Content Pieces</label>
                <input
                  type="number"
                  value={currentMetrics.monthlyContent}
                  onChange={(e) => setCurrentMetrics({...currentMetrics, monthlyContent: Number(e.target.value)})}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Content Creation Hours/Month</label>
                <input
                  type="number"
                  value={currentMetrics.contentCreationHours}
                  onChange={(e) => setCurrentMetrics({...currentMetrics, contentCreationHours: Number(e.target.value)})}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Monthly Content Budget ($)</label>
                <input
                  type="number"
                  value={currentMetrics.monthlyContentBudget}
                  onChange={(e) => setCurrentMetrics({...currentMetrics, monthlyContentBudget: Number(e.target.value)})}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Current Engagement Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={currentMetrics.currentEngagementRate}
                  onChange={(e) => setCurrentMetrics({...currentMetrics, currentEngagementRate: Number(e.target.value)})}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Current Conversion Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={currentMetrics.currentConversionRate}
                  onChange={(e) => setCurrentMetrics({...currentMetrics, currentConversionRate: Number(e.target.value)})}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">AI Implementation Results</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">Time Savings</span>
                  <span className="text-green-400 text-2xl font-bold">{results.timeSaved.toFixed(0)}h</span>
                </div>
                <p className="text-gray-300 text-sm">90% reduction in content creation time</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">Cost Savings</span>
                  <span className="text-blue-400 text-2xl font-bold">${results.costSavings.toFixed(0)}</span>
                </div>
                <p className="text-gray-300 text-sm">70% reduction in content creation costs</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">Engagement Boost</span>
                  <span className="text-purple-400 text-2xl font-bold">{results.engagementBoost.toFixed(1)}%</span>
                </div>
                <p className="text-gray-300 text-sm">300% increase in engagement rates</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">Conversion Boost</span>
                  <span className="text-yellow-400 text-2xl font-bold">{results.conversionBoost.toFixed(1)}%</span>
                </div>
                <p className="text-gray-300 text-sm">250% increase in conversion rates</p>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">{results.totalROI.toFixed(0)}%</div>
                <div className="text-white font-semibold">Total ROI Improvement</div>
                <p className="text-white/80 text-sm mt-2">Expected return on AI content investment</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all">
                Get Implementation Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentROICalculator;