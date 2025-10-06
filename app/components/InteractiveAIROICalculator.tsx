import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
<<<<<<< HEAD
  const [currentSpend, setCurrentSpend] = useState(100000);
  const [expectedSavings, setExpectedSavings] = useState(30);
  const [timeframe, setTimeframe] = useState(12);

  const calculateROI = () => {
    const monthlySavings = (currentSpend * expectedSavings) / 100;
    const totalSavings = monthlySavings * timeframe;
    const netSavings = totalSavings - currentSpend;
    const roi = (netSavings / currentSpend) * 100;
    return { totalSavings, netSavings, roi };
  };

  const { totalSavings, netSavings, roi } = calculateROI();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive AI ROI Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate the potential return on investment for your AI transformation project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Spend ($)
                </label>
                <input
                  type="number"
                  value={currentSpend}
                  onChange={(e) => setCurrentSpend(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Savings (%)
                </label>
                <input
                  type="number"
                  value={expectedSavings}
                  onChange={(e) => setExpectedSavings(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeframe (months)
                </label>
                <input
                  type="number"
                  value={timeframe}
                  onChange={(e) => setTimeframe(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Savings:</span>
                  <span className="font-semibold text-green-600">
                    ${totalSavings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Net Savings:</span>
                  <span className="font-semibold text-green-600">
                    ${netSavings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI:</span>
                  <span className="font-semibold text-blue-600">
                    {roi.toFixed(1)}%
                  </span>
                </div>
              </div>
=======
  const [investment, setInvestment] = useState(100000);
  const [timeframe, setTimeframe] = useState(12);
  const [roi, setRoi] = useState(300);

  const calculateROI = () => {
    const monthlyROI = (investment * (roi / 100)) / timeframe;
    const totalReturn = investment * (roi / 100);
    return { monthlyROI, totalReturn };
  };

  const { monthlyROI, totalReturn } = calculateROI();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        AI ROI Calculator
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Investment ($)
            </label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timeframe (months)
            </label>
            <input
              type="number"
              value={timeframe}
              onChange={(e) => setTimeframe(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected ROI (%)
            </label>
            <input
              type="number"
              value={roi}
              onChange={(e) => setRoi(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Projected Returns</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Return:</span>
              <span className="font-bold text-green-600">${monthlyROI.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Return:</span>
              <span className="font-bold text-green-600">${totalReturn.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">ROI Percentage:</span>
              <span className="font-bold text-blue-600">{roi}%</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </section>
=======
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
  );
};

export default InteractiveAIROICalculator;