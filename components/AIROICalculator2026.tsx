import React, { useState } from 'react';

interface CalculatorInputs {
  currentRevenue: number;
  currentCosts: number;
  aiImplementationCost: number;
  expectedEfficiencyGain: number;
  expectedRevenueIncrease: number;
  timeHorizon: number;
}

export default function AIROICalculator2026() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentRevenue: 10000000,
    currentCosts: 8000000,
    aiImplementationCost: 2000000,
    expectedEfficiencyGain: 25,
    expectedRevenueIncrease: 15,
    timeHorizon: 3
  });

  const [results, setResults] = useState<{
    totalSavings: number;
    totalRevenueIncrease: number;
    netBenefit: number;
    roi: number;
    paybackPeriod: number;
    npv: number;
  } | null>(null);

  const calculateROI = () => {
    const { currentRevenue, currentCosts, aiImplementationCost, expectedEfficiencyGain, expectedRevenueIncrease, timeHorizon } = inputs;
    
    // Calculate annual savings from efficiency gains
    const annualSavings = (currentCosts * expectedEfficiencyGain) / 100;
    
    // Calculate annual revenue increase
    const annualRevenueIncrease = (currentRevenue * expectedRevenueIncrease) / 100;
    
    // Calculate total benefits over time horizon
    const totalSavings = annualSavings * timeHorizon;
    const totalRevenueIncrease = annualRevenueIncrease * timeHorizon;
    const totalBenefits = totalSavings + totalRevenueIncrease;
    
    // Calculate ROI
    const netBenefit = totalBenefits - aiImplementationCost;
    const roi = (netBenefit / aiImplementationCost) * 100;
    
    // Calculate payback period
    const annualNetBenefit = (annualSavings + annualRevenueIncrease) - (aiImplementationCost / timeHorizon);
    const paybackPeriod = aiImplementationCost / (annualSavings + annualRevenueIncrease);
    
    // Simple NPV calculation (assuming 10% discount rate)
    const discountRate = 0.10;
    let npv = -aiImplementationCost;
    for (let year = 1; year <= timeHorizon; year++) {
      npv += (annualSavings + annualRevenueIncrease) / Math.pow(1 + discountRate, year);
    }
    
    setResults({
      totalSavings,
      totalRevenueIncrease,
      netBenefit,
      roi,
      paybackPeriod,
      npv
    });
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI ROI Calculator 2026</h2>
        <p className="text-gray-600">Calculate the potential return on investment for your AI transformation</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Input Parameters</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Revenue ($)
            </label>
            <input
              type="number"
              value={inputs.currentRevenue}
              onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Horizon (Years)
            </label>
            <input
              type="number"
              value={inputs.timeHorizon}
              onChange={(e) => handleInputChange('timeHorizon', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Calculate ROI
          </button>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Results</h3>
          
          {results ? (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {results.roi.toFixed(1)}% ROI
                </div>
                <div className="text-sm text-green-700">Return on Investment</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-xl font-bold text-blue-600">
                    ${(results.totalSavings / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-blue-700">Total Savings</div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-xl font-bold text-purple-600">
                    ${(results.totalRevenueIncrease / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-purple-700">Revenue Increase</div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-lg font-bold text-gray-900 mb-2">Net Benefit</div>
                <div className="text-2xl font-bold text-gray-700">
                  ${(results.netBenefit / 1000000).toFixed(1)}M
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-yellow-600">
                    {results.paybackPeriod.toFixed(1)} years
                  </div>
                  <div className="text-sm text-yellow-700">Payback Period</div>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-indigo-600">
                    ${(results.npv / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-indigo-700">NPV (10% discount)</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                <h4 className="font-bold mb-2">Recommendation</h4>
                <p className="text-sm">
                  {results.roi > 200 ? 
                    "Excellent investment opportunity! High ROI expected." :
                    results.roi > 100 ?
                    "Good investment with solid returns expected." :
                    results.roi > 50 ?
                    "Moderate investment with acceptable returns." :
                    "Consider optimizing parameters or reducing implementation costs."
                  }
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              Enter your parameters and click "Calculate ROI" to see results
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-bold text-gray-900 mb-2">💡 Pro Tips for Better ROI</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Start with pilot projects to validate assumptions</li>
          <li>• Focus on high-impact, low-complexity use cases first</li>
          <li>• Invest in change management and training</li>
          <li>• Consider phased implementation to reduce risk</li>
          <li>• Monitor and optimize continuously</li>
        </ul>
      </div>
    </div>
  );
}