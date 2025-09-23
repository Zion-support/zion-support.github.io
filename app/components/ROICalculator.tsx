"use client";
import React, { useState } from 'react';

export default function ROICalculator() {
  const [investment, setInvestment] = useState(100000);
  const [savings, setSavings] = useState(150000);
  
  const roi = ((savings - investment) / investment * 100).toFixed(1);

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-3xl font-bold text-green-600 mb-2">{roi}%</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Annual ROI</div>
      </div>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Investment ($)
          </label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Annual Savings ($)
          </label>
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
      </div>
      
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        Calculate your AI transformation ROI
      </div>
    </div>
  );
}
