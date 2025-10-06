import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
  const [currentSpending, setCurrentSpending] = useState(100000);
  const [expectedEfficiency, setExpectedEfficiency] = useState(30);
  const [implementationCost, setImplementationCost] = useState(50000);

  const calculateROI = () => {
    const annualSavings = (currentSpending * expectedEfficiency) / 100;
    const netSavings = annualSavings - implementationCost;
    const roi = (netSavings / implementationCost) * 100;
    return { annualSavings, netSavings, roi };
  };

  const { annualSavings, netSavings, roi } = calculateROI();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive AI ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for AI implementation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Spending ($)
                </label>
                <input
                  type="number"
                  value={currentSpending}
                  onChange={(e) => setCurrentSpending(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Efficiency Gain (%)
                </label>
                <input
                  type="number"
                  value={expectedEfficiency}
                  onChange={(e) => setExpectedEfficiency(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Cost ($)
                </label>
                <input
                  type="number"
                  value={implementationCost}
                  onChange={(e) => setImplementationCost(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">ROI Calculation</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Annual Savings:</span>
                  <span className="font-semibold">${annualSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Implementation Cost:</span>
                  <span className="font-semibold">${implementationCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Net Savings:</span>
                  <span className="font-semibold">${netSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg border-t pt-2">
                  <span>ROI:</span>
                  <span className={`font-bold ${roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {roi.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIROICalculator;