"use client";
import React, { useState, useEffect } from 'react';
import { CurrencyDollarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

export default function ROICalculator() {
  const [investment, setInvestment] = useState(100000);
  const [savings, setSavings] = useState(150000);
  const [paybackPeriod, setPaybackPeriod] = useState(0);
  
  const roi = ((savings - investment) / investment * 100).toFixed(1);
  const netBenefit = savings - investment;

  useEffect(() => {
    if (investment > 0 && savings > investment) {
      setPaybackPeriod(Math.ceil(investment / (savings / 12)));
    } else {
      setPaybackPeriod(0);
    }
  }, [investment, savings]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <ArrowTrendingUpIcon className="h-6 w-6 text-green-600 mr-2" />
          <div className="text-3xl font-bold text-green-600">{roi}%</div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Annual ROI</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Net Benefit: {formatCurrency(netBenefit)}
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            <CurrencyDollarIcon className="h-4 w-4 inline mr-1" />
            Investment
          </label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter investment amount"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            <ArrowTrendingUpIcon className="h-4 w-4 inline mr-1" />
            Annual Savings
          </label>
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter annual savings"
          />
        </div>
      </div>
      
      {paybackPeriod > 0 && (
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
          <div className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Payback Period:</strong> {paybackPeriod} months
          </div>
        </div>
      )}
      
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        Calculate your AI transformation ROI
      </div>
    </div>
  );
}
