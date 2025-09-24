"use client";

import { useState, useEffect, memo, useCallback } from 'react';

interface ROIData {
  investment: number;
  monthlySavings: number;
  timeframe: number;
}

const ROICalculator = memo(function ROICalculator() {
  const [data, setData] = useState<ROIData>({
    investment: 50000,
    monthlySavings: 15000,
    timeframe: 12,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ROIData, string>>>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const totalSavings = data.monthlySavings * data.timeframe;
  const netROI = totalSavings - data.investment;
  const roiPercentage = ((netROI / data.investment) * 100).toFixed(1);
  const paybackPeriod = Math.ceil(data.investment / data.monthlySavings);

  const validateInput = (field: keyof ROIData, value: number): string | null => {
    if (value < 0) return 'Value cannot be negative';
    if (field === 'investment' && value === 0) return 'Investment must be greater than 0';
    if (field === 'monthlySavings' && value === 0) return 'Monthly savings must be greater than 0';
    if (field === 'timeframe' && (value < 1 || value > 60)) return 'Timeframe must be between 1 and 60 months';
    return null;
  };

  const handleInputChange = useCallback((field: keyof ROIData, value: number) => {
    const error = validateInput(field, value);
    setErrors(prev => ({ ...prev, [field]: error || '' }));
    setData(prev => ({ ...prev, [field]: value }));
  }, []);

  return (
    <div className={isVisible ? 'space-y-6 animate-fade-in' : 'space-y-6 opacity-0'}>
      {/* Input Controls */}
      <div className='space-y-4'>
        <div>
          <label htmlFor="investment" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Initial Investment ($)
          </label>
          <input
            type='number',
            id='investment',
            value={data.investment}
            onChange={e => handleInputChange('investment', Number(e.target.value))}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
              errors.investment ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            min='0',
            step='1000',
            aria-invalid={!!errors.investment}
            aria-describedby={errors.investment ? 'investment-error' : undefined}
          />
          {errors.investment && (
            <p id="investment-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.investment}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="monthlySavings" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Monthly Savings ($)
          </label>
          <input
            type='number',
            id='monthlySavings',
            value={data.monthlySavings}
            onChange={e => handleInputChange('monthlySavings', Number(e.target.value))}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
              errors.monthlySavings ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            min='0',
            step='1000',
            aria-invalid={!!errors.monthlySavings}
            aria-describedby={errors.monthlySavings ? 'monthlySavings-error' : undefined}
          />
          {errors.monthlySavings && (
            <p id="monthlySavings-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.monthlySavings}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="timeframe" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Timeframe (months)
          </label>
          <input
            type='number',
            id='timeframe',
            value={data.timeframe}
            onChange={e => handleInputChange('timeframe', Number(e.target.value))}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
              errors.timeframe ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            min='1',
            max='60',
            aria-invalid={!!errors.timeframe}
            aria-describedby={errors.timeframe ? 'timeframe-error' : undefined}
          />
          {errors.timeframe && (
            <p id="timeframe-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.timeframe}
            </p>
          )}
        </div>
      </div>
      {/* Results */}
      <div className='space-y-3'>
        <div className='p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800'>
          <div className='flex justify-between items-center'>
            <span className='text-sm font-medium text-green-800 dark:text-green-200'>
              Total Savings
            </span>
            <span className='text-lg font-bold text-green-900 dark:text-green-100'>
              ${totalSavings.toLocaleString()}
            </span>
          </div>
        </div>
        <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800'>
          <div className='flex justify-between items-center'>
            <span className='text-sm font-medium text-blue-800 dark:text-blue-200'>
              Net ROI
            </span>
            <span
              className={`text-lg font-bold ${netROI >= 0 ? 'text-blue-900 dark:text-blue-100' : 'text-red-600 dark:text-red-400'}`}
            >
              ${netROI.toLocaleString()}
            </span>
          </div>
        </div>
        <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800'>
          <div className='flex justify-between items-center'>
            <span className='text-sm font-medium text-purple-800 dark:text-purple-200'>
              ROI Percentage
            </span>
            <span
              className={`text-lg font-bold ${parseFloat(roiPercentage) >= 0 ? 'text-purple-900 dark:text-purple-100' : 'text-red-600 dark:text-red-400'}`}
            >
              {roiPercentage}%
            </span>
          </div>
        </div>
        <div className='p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800'>
          <div className='flex justify-between items-center'>
            <span className='text-sm font-medium text-orange-800 dark:text-orange-200'>
              Payback Period
            </span>
            <span className='text-lg font-bold text-orange-900 dark:text-orange-100'>
              {paybackPeriod} months
            </span>
          </div>
        </div>
      </div>
      {/* Summary */}
      <div className='mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg'>
        <p className='text-sm text-gray-600 dark:text-gray-300 text-center'>
          {parseFloat(roiPercentage) >= 0
            ? `Your investment will generate a ${roiPercentage}% return over ${data.timeframe} months`
            : `Consider adjusting your parameters for a positive ROI`}
        </p>
      </div>
    </div>
  );
});

export default ROICalculator;
