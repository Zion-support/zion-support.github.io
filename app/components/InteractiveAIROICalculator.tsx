import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
  const [currentCost, setCurrentCost] = useState(100000);
  const [efficiencyGain, setEfficiencyGain] = useState(70);
  const [timeframe, setTimeframe] = useState(12);

  const calculateROI = () => {
    const monthlySavings = (currentCost * efficiencyGain) / 100;
    const totalSavings = monthlySavings * timeframe;
    const roi = ((totalSavings - currentCost) / currentCost) * 100;
    return { monthlySavings, totalSavings, roi };
  };

  const { monthlySavings, totalSavings, roi } = calculateROI();

  return (
    <div className="interactive-ai-roi-calculator bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">AI ROI Calculator</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Input Your Current Costs</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Monthly Cost ($)
                  </label>
                  <input
                    type="number"
                    value={currentCost}
                    onChange={(e) => setCurrentCost(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Efficiency Gain (%)
                  </label>
                  <input
                    type="number"
                    value={efficiencyGain}
                    onChange={(e) => setEfficiencyGain(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeframe (months)
                  </label>
                  <input
                    type="number"
                    value={timeframe}
                    onChange={(e) => setTimeframe(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Projected Results</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-600 font-medium">Monthly Savings</div>
                  <div className="text-2xl font-bold text-blue-900">
                    ${monthlySavings.toLocaleString()}
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-green-600 font-medium">Total Savings ({timeframe} months)</div>
                  <div className="text-2xl font-bold text-green-900">
                    ${totalSavings.toLocaleString()}
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-purple-600 font-medium">ROI</div>
                  <div className="text-2xl font-bold text-purple-900">
                    {roi.toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIROICalculator;