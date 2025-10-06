import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState({
    currentCosts: '',
    expectedEfficiency: '',
    implementationCost: '',
    timeHorizon: '12'
  });

  const [results, setResults] = useState<{
    monthlySavings: number;
    annualSavings: number;
    roi: number;
    paybackPeriod: number;
  } | null>(null);

  const calculateROI = () => {
    const currentCosts = parseFloat(inputs.currentCosts) || 0;
    const efficiency = parseFloat(inputs.expectedEfficiency) || 0;
    const implementationCost = parseFloat(inputs.implementationCost) || 0;
    const timeHorizon = parseInt(inputs.timeHorizon) || 12;

    const monthlySavings = (currentCosts * efficiency) / 100;
    const annualSavings = monthlySavings * 12;
    const totalSavings = annualSavings * (timeHorizon / 12);
    const roi = implementationCost > 0 ? ((totalSavings - implementationCost) / implementationCost) * 100 : 0;
    const paybackPeriod = implementationCost > 0 ? implementationCost / annualSavings : 0;

    setResults({
      monthlySavings,
      annualSavings,
      roi,
      paybackPeriod
    });
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI ROI Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Calculate your potential AI investment returns
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Input Your Data</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Monthly Costs ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.currentCosts}
                      onChange={(e) => setInputs({...inputs, currentCosts: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="10000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Efficiency Improvement (%)
                    </label>
                    <input
                      type="number"
                      value={inputs.expectedEfficiency}
                      onChange={(e) => setInputs({...inputs, expectedEfficiency: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Implementation Cost ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.implementationCost}
                      onChange={(e) => setInputs({...inputs, implementationCost: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="50000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time Horizon (months)
                    </label>
                    <select
                      value={inputs.timeHorizon}
                      onChange={(e) => setInputs({...inputs, timeHorizon: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                      <option value="36">36 months</option>
                    </select>
                  </div>
                  <button
                    onClick={calculateROI}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Calculate ROI
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Results</h3>
                {results ? (
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800">Monthly Savings</h4>
                      <p className="text-2xl font-bold text-green-600">
                        ${results.monthlySavings.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Annual Savings</h4>
                      <p className="text-2xl font-bold text-blue-600">
                        ${results.annualSavings.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800">ROI</h4>
                      <p className="text-2xl font-bold text-purple-600">
                        {results.roi.toFixed(1)}%
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800">Payback Period</h4>
                      <p className="text-2xl font-bold text-orange-600">
                        {results.paybackPeriod.toFixed(1)} months
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    Enter your data and click "Calculate ROI" to see results
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIROICalculator;