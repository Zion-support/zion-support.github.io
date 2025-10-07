'use client';

// import { Calculator } from 'lucide-react';
import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
  const [investment, setInvestment] = useState(100000);
  const [savings, setSavings] = useState(300000);
  const [timeframe, setTimeframe] = useState(12);

  const roi = ((savings - investment) / investment) * 100;

  return (
    <div className='bg-white rounded-lg shadow-lg p-8'>
      <h2 className='text-2xl font-bold mb-6'>AI ROI Calculator</h2>

      <div className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Initial Investment ($)
          </label>
          <input
            type='number'
            value={investment}
            onChange={e => setInvestment(Number(e.target.value))}
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Expected Savings ($)
          </label>
          <input
            type='number'
            value={savings}
            onChange={e => setSavings(Number(e.target.value))}
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Timeframe (months)
          </label>
          <input
            type='number'
            value={timeframe}
            onChange={e => setTimeframe(Number(e.target.value))}
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>

        <div className='bg-blue-50 p-6 rounded-lg'>
          <h3 className='text-lg font-semibold text-blue-900 mb-2'>
            ROI Calculation
          </h3>
          <div className='text-3xl font-bold text-blue-600'>
            {roi.toFixed(1)}%
          </div>
          <p className='text-blue-700 mt-2'>
            Return on investment over {timeframe} months
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIROICalculator;
