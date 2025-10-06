import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
  const [investment, setInvestment] = useState(100000);
  const [roi, setRoi] = useState(300);

  const calculateROI = () => {
    return (investment * roi) / 100;
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        AI ROI Calculator
      </h2>
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
            Expected ROI (%)
          </label>
          <input
            type="number"
            value={roi}
            onChange={(e) => setRoi(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Projected Return</h3>
          <p className="text-2xl font-bold text-blue-600">
            ${calculateROI().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIROICalculator;