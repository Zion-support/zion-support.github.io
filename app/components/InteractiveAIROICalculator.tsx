import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
  const [investment, setInvestment] = useState(1000000);
  const [timeframe, setTimeframe] = useState(12);

  const calculateROI = () => {
    const monthlySavings = investment * 0.15; // 15% monthly savings
    const totalSavings = monthlySavings * timeframe;
    const roi = ((totalSavings - investment) / investment) * 100;
    return { totalSavings, roi };
  };

  const { totalSavings, roi } = calculateROI();

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">AI ROI Calculator</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Investment ($)
            </label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Projected Results</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Savings:</span>
              <span className="font-semibold text-green-600">${totalSavings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">ROI:</span>
              <span className="font-semibold text-blue-600">{roi.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIROICalculator;
