import React, { useState } from 'react';

interface InteractiveAIROICalculatorProps {
  className?: string;
}

export default function InteractiveAIROICalculator({ className = '' }: InteractiveAIROICalculatorProps) {
  const [investment, setInvestment] = useState(10000);
  const [monthlySavings, setMonthlySavings] = useState(2000);
  const [timeframe, setTimeframe] = useState(12);

  const calculateROI = () => {
    const totalSavings = monthlySavings * timeframe;
    const roi = ((totalSavings - investment) / investment) * 100;
    return Math.max(0, roi);
  };

  const roi = calculateROI();

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold mb-4">AI ROI Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Initial Investment ($)</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Monthly Savings ($)</label>
          <input
            type="number"
            value={monthlySavings}
            onChange={(e) => setMonthlySavings(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Timeframe (months)</label>
          <input
            type="number"
            value={timeframe}
            onChange={(e) => setTimeframe(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold">ROI: {roi.toFixed(1)}%</h4>
          <p className="text-sm text-gray-600">
            Total Savings: ${(monthlySavings * timeframe).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
