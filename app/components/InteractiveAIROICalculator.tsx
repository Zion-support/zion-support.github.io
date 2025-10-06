import React, { useState } from 'react';

const InteractiveAIROICalculator: React.FC = () => {
  const [currentCosts, setCurrentCosts] = useState(100000);
  const [timeSaved, setTimeSaved] = useState(20);
  const [efficiencyGain, setEfficiencyGain] = useState(30);

  const calculateROI = () => {
    const timeValue = (currentCosts * timeSaved) / 100;
    const efficiencyValue = (currentCosts * efficiencyGain) / 100;
    const totalSavings = timeValue + efficiencyValue;
    const roi = ((totalSavings - currentCosts) / currentCosts) * 100;
    return { totalSavings, roi };
  };

  const { totalSavings, roi } = calculateROI();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI ROI Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Calculate the potential return on investment for your AI implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Costs ($)
                </label>
                <input
                  type="number"
                  value={currentCosts}
                  onChange={(e) => setCurrentCosts(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Saved (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={timeSaved}
                  onChange={(e) => setTimeSaved(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-sm text-gray-600">{timeSaved}%</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efficiency Gain (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={efficiencyGain}
                  onChange={(e) => setEfficiencyGain(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-sm text-gray-600">{efficiencyGain}%</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ROI Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Savings:</span>
                  <span className="font-semibold text-green-600">
                    ${totalSavings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI:</span>
                  <span className={`font-semibold ${roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {roi.toFixed(1)}%
                  </span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    {roi > 0 
                      ? `Your AI implementation could generate a ${roi.toFixed(1)}% return on investment.`
                      : 'Consider adjusting your parameters to see positive ROI.'
                    }
                  </p>
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