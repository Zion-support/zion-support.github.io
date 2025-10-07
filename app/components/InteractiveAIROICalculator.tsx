// import { Calculator } from 'lucide-react';
import React, { useState, memo, useCallback, useMemo } from 'react';

const InteractiveAIROICalculator: React.FC = memo(() => {
  const [investment, setInvestment] = useState(100000);
  const [savings, setSavings] = useState(300000);
  const [timeframe, setTimeframe] = useState(12);

  const roi = useMemo(() => ((savings - investment) / investment) * 100, [savings, investment]);

  const handleInvestmentChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestment(Number(e.target.value));
  }, []);

  const handleSavingsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSavings(Number(e.target.value));
  }, []);

  const handleTimeframeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeframe(Number(e.target.value));
  }, []);

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
            onChange={handleInvestmentChange}
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
            onChange={handleSavingsChange}
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
            onChange={handleTimeframeChange}
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
});

InteractiveAIROICalculator.displayName = 'InteractiveAIROICalculator';

export default InteractiveAIROICalculator;
