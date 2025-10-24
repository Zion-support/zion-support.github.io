'use client';

import React, { useState } from 'react';

const InteractiveAIROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentCost: 0,
    expectedSavings: 0,
    implementationCost: 0,
    timeFrame: 12;)
  });

  const [results, setResults] = useState({
    roi: 0,
    paybackPeriod: 0,
    netBenefit: 0;)
  });

  const calculateROI = () => {
    const { currentCost, expectedSavings, implementationCost, timeFrame } = inputs;
    
    const annualSavings = expectedSavings * 12;
    const totalSavings = annualSavings * (timeFrame / 12);
    const netBenefit = totalSavings - implementationCost;
    const roi = ((netBenefit - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / annualSavings;

    setResults({)
      roi: Math.max(0, roi),
      paybackPeriod: Math.max(0, paybackPeriod),
      netBenefit: Math.max(0, netBenefit)
    });
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value)
    }));
  };

  return (<div className="bg-white rounded-lg shadow p-6"></div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">AI ROI Calculator</h2>
      
      <div className="grid md:grid-cols-2 gap-8"></div>
        <div></div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Input Parameters</h3>
          
          <div className="space-y-4"></div>
            <div></div>
              <label className="block text-sm font-medium text-gray-700 mb-2">)
                Current Monthly Cost ($)
              </label>
              <input
                type="number"
                value={inputs.currentCost}
                onChange={(e) => handleInputChange('currentCost', Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div></div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Monthly Savings ($)
              </label>
              <input
                type="number"
                value={inputs.expectedSavings}
                onChange={(e) => handleInputChange('expectedSavings', Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div></div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Implementation Cost ($)
              </label>
              <input
                type="number"
                value={inputs.implementationCost}
                onChange={(e) => handleInputChange('implementationCost', Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div></div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Frame (months)
              </label>
              <input
                type="number"
                value={inputs.timeFrame}
                onChange={(e) => handleInputChange('timeFrame', Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button
              onClick={calculateROI}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate ROI
            </button>
          </div>
        </div>
        
        <div></div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Results</h3>
          
          <div className="space-y-4"></div>
            <div className="bg-green-50 p-4 rounded-lg"></div>
              <h4 className="text-sm font-medium text-green-900">ROI</h4>
              <p className="text-2xl font-bold text-green-600">{results.roi.toFixed(1)}%</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg"></div>
              <h4 className="text-sm font-medium text-blue-900">Payback Period</h4>
              <p className="text-2xl font-bold text-blue-600">{results.paybackPeriod.toFixed(1)} months</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg"></div>
              <h4 className="text-sm font-medium text-purple-900">Net Benefit</h4>
              <p className="text-2xl font-bold text-purple-600">${results.netBenefit.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIROICalculator;