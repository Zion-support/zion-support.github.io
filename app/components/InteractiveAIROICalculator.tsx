import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
  const [investment, setInvestment] = useState(100000);
  const [timeframe, setTimeframe] = useState(12);
  const [efficiency, setEfficiency] = useState(30);

  const calculateROI = () => {
    const monthlySavings = (investment * efficiency) / 100 / 12;
    const totalSavings = monthlySavings * timeframe;
    const roi = ((totalSavings - investment) / investment) * 100;
    return Math.max(0, roi);
  };

  const roi = calculateROI();

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        AI ROI Calculator
      </h2>
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Investment ($)
            </label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Efficiency Gain (%)
            </label>
            <input
              type="number"
              value={efficiency}
              onChange={(e) => setEfficiency(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Projected ROI
            </h3>
            <div className="text-4xl font-bold text-green-600 mb-2">
              {roi.toFixed(1)}%
            </div>
            <p className="text-gray-600">
              Return on investment over {timeframe} months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIROICalculator;