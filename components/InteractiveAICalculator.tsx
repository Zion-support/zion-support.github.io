<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CalculatorInputs {
  currentRevenue: number;
  currentCosts: number;
  aiInvestment: number;
  expectedEfficiency: number;
  timeframe: number;
}

interface CalculationResult {
  currentROI: number;
  projectedROI: number;
  roiImprovement: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  netBenefit: number;
}

const InteractiveAICalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentRevenue: 1000000,
    currentCosts: 600000,
    aiInvestment: 100000,
    expectedEfficiency: 25,
    timeframe: 12
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const calculateROI = useCallback(() => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const { currentRevenue, currentCosts, aiInvestment, expectedEfficiency, timeframe } = inputs;
      
      const currentROI = ((currentRevenue - currentCosts) / currentCosts) * 100;
      
      const efficiencyMultiplier = 1 + (expectedEfficiency / 100);
      const newCosts = currentCosts / efficiencyMultiplier;
      const newRevenue = currentRevenue * efficiencyMultiplier;
      
      const projectedROI = ((newRevenue - newCosts) / newCosts) * 100;
      const roiImprovement = projectedROI - currentROI;
      
      const monthlySavings = (currentCosts - newCosts) / 12;
      const annualSavings = currentCosts - newCosts;
      
      const paybackPeriod = aiInvestment / monthlySavings;
      const netBenefit = (annualSavings * (timeframe / 12)) - aiInvestment;
      
      setResult({
        currentROI,
        projectedROI,
        roiImprovement,
        monthlySavings,
        annualSavings,
        paybackPeriod,
        netBenefit
      });
      
      setIsCalculating(false);
      setShowAnimation(true);
    }, 1500);
  }, [inputs]);

  useEffect(() => {
    calculateROI();
  }, [calculateROI]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
    setShowAnimation(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          AI ROI Calculator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate your potential return on investment with AI transformation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Business Metrics
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current Annual Revenue
              </label>
              <input
                type="number"
                value={inputs.currentRevenue}
                onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="1000000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current Annual Costs
              </label>
              <input
                type="number"
                value={inputs.currentCosts}
                onChange={(e) => handleInputChange('currentCosts', Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="600000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                AI Investment Amount
              </label>
              <input
                type="number"
                value={inputs.aiInvestment}
                onChange={(e) => handleInputChange('aiInvestment', Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="100000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Expected Efficiency Improvement (%)
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={inputs.expectedEfficiency}
                onChange={(e) => handleInputChange('expectedEfficiency', Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="25"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Timeframe (months)
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={inputs.timeframe}
                onChange={(e) => handleInputChange('timeframe', Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="12"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            ROI Projections
          </h3>

          {isCalculating ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600 dark:text-gray-400">Calculating...</span>
            </div>
          ) : result ? (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="text-sm text-blue-600 dark:text-blue-400">Current ROI</div>
                    <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                      {formatPercentage(result.currentROI)}
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="text-sm text-green-600 dark:text-green-400">Projected ROI</div>
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                      {formatPercentage(result.projectedROI)}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <div className="text-sm text-purple-600 dark:text-purple-400">ROI Improvement</div>
                  <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                    +{formatPercentage(result.roiImprovement)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                    <span className="text-gray-600 dark:text-gray-400">Monthly Savings</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {formatCurrency(result.monthlySavings)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                    <span className="text-gray-600 dark:text-gray-400">Annual Savings</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {formatCurrency(result.annualSavings)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                    <span className="text-gray-600 dark:text-gray-400">Payback Period</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {result.paybackPeriod.toFixed(1)} months
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 bg-gray-50 dark:bg-gray-700 rounded-lg px-4">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Net Benefit</span>
                    <span className="font-bold text-lg text-green-600 dark:text-green-400">
                      {formatCurrency(result.netBenefit)}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InteractiveAICalculator;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
