import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
  const [investment, setInvestment] = useState(100000);
  const [timeframe, setTimeframe] = useState(12);
  const [roi, setRoi] = useState(300);

  const calculateROI = () => {
    const monthlyROI = (investment * (roi / 100)) / timeframe;
    const totalReturn = investment * (roi / 100);
    return { monthlyROI, totalReturn };
  };

  const { monthlyROI, totalReturn } = calculateROI();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        AI ROI Calculator
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected ROI (%)
            </label>
            <input
              type="number"
              value={roi}
              onChange={(e) => setRoi(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Projected Returns</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Return:</span>
              <span className="font-bold text-green-600">${monthlyROI.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Return:</span>
              <span className="font-bold text-green-600">${totalReturn.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">ROI Percentage:</span>
              <span className="font-bold text-blue-600">{roi}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIROICalculator;