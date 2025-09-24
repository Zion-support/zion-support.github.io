'use client';

import React, { useState } from 'react';

export default function ROICalculator() {
  const [currentCost, setCurrentCost] = useState('');
  const [automationSavings, setAutomationSavings] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateROI = () => {
    const cost = parseFloat(currentCost);
    const savings = parseFloat(automationSavings);
    
    if (cost && savings && cost > 0) {
      const roi = ((savings - cost) / cost) * 100;
      setResult(roi);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">ROI Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Annual Cost ($)
          </label>
          <input
            type="number"
            value={currentCost}
            onChange={(e) => setCurrentCost(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter current cost"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expected Annual Savings ($)
          </label>
          <input
            type="number"
            value={automationSavings}
            onChange={(e) => setAutomationSavings(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter expected savings"
          />
        </div>
        <button
          onClick={calculateROI}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate ROI
        </button>
        {result !== null && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-800">
              <strong>ROI: {result.toFixed(1)}%</strong>
            </p>
            <p className="text-xs text-green-600 mt-1">
              {result > 0 ? 'Positive return on investment' : 'Negative return on investment'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}