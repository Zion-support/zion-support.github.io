<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

export default function Component() {
=======
'use client';
import React, { useState } from 'react';
const InteractiveAIROICalculator: React.FC = () => {
  const [currentCost, setCurrentCost] = useState(100000);
  const [efficiencyGain, setEfficiencyGain] = useState(70);
  const [timeframe, setTimeframe] = useState(12);
<<<<<<< HEAD
  const calculateROI = () => {
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    const annualSavings = (currentCost * efficiencyGain) / 100;
    const totalSavings = annualSavings * (timeframe / 12);
    const roi = ((totalSavings - currentCost) / currentCost) * 100;
    return Math.max(0, roi);
  };
  const roi = calculateROI();
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
=======
          AI ROI Calculator;
                  Current Annual Cost ($)

 setCurrentCost(Number(e.target.value))}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'

                  Expected Efficiency Gain (%)

 setEfficiencyGain(Number(e.target.value))}
                  className='w-full'

                  {efficiencyGain}%
                  Implementation Timeframe (months)

 setTimeframe(Number(e.target.value))}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  <option value={6}>6 months</option>
                  <option value={12}>12 months</option>
                  <option value={18}>18 months</option>
                  <option value={24}>24 months</option>
                Your ROI Projection;
                  {roi.toFixed(0)}%
                  Expected return on investment over {timeframe} months;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df
  );
}