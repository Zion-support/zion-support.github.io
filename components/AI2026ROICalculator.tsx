import React, { useState, useEffect } from 'react';

interface CalculatorInputs {
  currentRevenue: number;
  currentCosts: number;
  aiImplementationCost: number;
  expectedEfficiencyGain: number;
  expectedRevenueIncrease: number;
  timeFrame: number;
}

export default function AI2026ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentRevenue: 1000000,
    currentCosts: 800000,
    aiImplementationCost: 100000,
    expectedEfficiencyGain: 30,
    expectedRevenueIncrease: 25,
    timeFrame: 12
  });

  const [results, setResults] = useState({
    totalSavings: 0,
    totalRevenueIncrease: 0,
    netBenefit: 0,
    roi: 0,
    paybackPeriod: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show calculator after page load
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const monthlySavings = (inputs.currentCosts * inputs.expectedEfficiencyGain) / 100;
    const monthlyRevenueIncrease = (inputs.currentRevenue * inputs.expectedRevenueIncrease) / 100;
    
    const totalSavings = monthlySavings * inputs.timeFrame;
    const totalRevenueIncrease = monthlyRevenueIncrease * inputs.timeFrame;
    const netBenefit = totalSavings + totalRevenueIncrease - inputs.aiImplementationCost;
    const roi = (netBenefit / inputs.aiImplementationCost) * 100;
    const paybackPeriod = inputs.aiImplementationCost / (monthlySavings + monthlyRevenueIncrease);

    setResults({
      totalSavings,
      totalRevenueIncrease,
      netBenefit,
      roi,
      paybackPeriod
    });
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-md">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">🧮 AI 2026 ROI Calculator</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close calculator"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-green-100 mt-1">
            Calculate your potential AI implementation ROI
          </p>
        </div>

        {/* Inputs */}
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Revenue ($)
            </label>
            <input
              type="number"
              value={inputs.currentRevenue}
              onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Costs ($)
            </label>
            <input
              type="number"
              value={inputs.currentCosts}
              onChange={(e) => handleInputChange('currentCosts', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Implementation Cost ($)
            </label>
            <input
              type="number"
              value={inputs.aiImplementationCost}
              onChange={(e) => handleInputChange('aiImplementationCost', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Efficiency Gain (%)
            </label>
            <input
              type="number"
              value={inputs.expectedEfficiencyGain}
              onChange={(e) => handleInputChange('expectedEfficiencyGain', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Revenue Increase (%)
            </label>
            <input
              type="number"
              value={inputs.expectedRevenueIncrease}
              onChange={(e) => handleInputChange('expectedRevenueIncrease', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Frame (months)
            </label>
            <input
              type="number"
              value={inputs.timeFrame}
              onChange={(e) => handleInputChange('timeFrame', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 p-4 space-y-3">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">ROI Analysis Results</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600">Total Savings</div>
              <div className="text-lg font-bold text-green-600">
                ${results.totalSavings.toLocaleString()}
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600">Revenue Increase</div>
              <div className="text-lg font-bold text-blue-600">
                ${results.totalRevenueIncrease.toLocaleString()}
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600">Net Benefit</div>
              <div className="text-lg font-bold text-purple-600">
                ${results.netBenefit.toLocaleString()}
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600">ROI</div>
              <div className={`text-lg font-bold ${results.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {results.roi.toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-lg">
            <div className="text-sm text-gray-700">Payback Period</div>
            <div className="text-lg font-bold text-gray-900">
              {results.paybackPeriod.toFixed(1)} months
            </div>
          </div>

          {results.roi > 1000 && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-lg text-center">
              <div className="text-sm font-bold">🚀 BREAKTHROUGH ROI ACHIEVED!</div>
              <div className="text-xs">You're on track for extraordinary returns!</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Implementation Quote
          </button>
        </div>
      </div>
    </div>
  );
}