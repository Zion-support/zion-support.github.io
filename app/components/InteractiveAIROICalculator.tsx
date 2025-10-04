import React, { useState } from 'react';

export default function InteractiveAIROICalculator() {
  const [investment, setInvestment] = useState(100000);
  const [savings, setSavings] = useState(300000);

  const roi = ((savings - investment) / investment) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Interactive AI ROI Calculator
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Annual Savings ($)
            </label>
            <input
              type="number"
              value={savings}
              onChange={(e) => setSavings(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-2">
              {roi.toFixed(0)}%
            </div>
            <div className="text-xl text-gray-600">ROI</div>
            <div className="text-sm text-gray-500 mt-2">
              Net Profit: ${(savings - investment).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}