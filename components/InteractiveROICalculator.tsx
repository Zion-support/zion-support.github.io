import React, { useState } from 'react';

interface ROICalculatorProps {
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
}

export default function InteractiveROICalculator({ variant = 'default', className = '' }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    currentRevenue: 1000000,
    currentCosts: 800000,
    aiInvestment: 100000,
    expectedEfficiency: 30,
    expectedCostReduction: 25,
    expectedRevenueIncrease: 20,
    timeFrame: 12
  });

  const calculateROI = () => {
    const {
      currentRevenue,
      currentCosts,
      aiInvestment,
      expectedEfficiency,
      expectedCostReduction,
      expectedRevenueIncrease,
      timeFrame
    } = inputs;

    // Calculate annual benefits
    const costSavings = (currentCosts * expectedCostReduction) / 100;
    const revenueIncrease = (currentRevenue * expectedRevenueIncrease) / 100;
    const efficiencyGains = (currentRevenue * expectedEfficiency) / 100;
    
    const totalAnnualBenefits = costSavings + revenueIncrease + efficiencyGains;
    const totalBenefits = totalAnnualBenefits * (timeFrame / 12);
    
    const roi = ((totalBenefits - aiInvestment) / aiInvestment) * 100;
    const paybackPeriod = aiInvestment / totalAnnualBenefits * 12;
    
    return {
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      totalBenefits: Math.round(totalBenefits),
      annualBenefits: Math.round(totalAnnualBenefits)
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-white border border-gray-200 rounded-lg p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick ROI Calculator</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              AI Investment ($)
            </label>
            <input
              type="number"
              value={inputs.aiInvestment}
              onChange={(e) => handleInputChange('aiInvestment', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{results.roi}%</div>
            <div className="text-sm text-blue-800">Expected ROI</div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl ${className}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">🧮 Calculate Your AI ROI</h2>
          <p className="text-xl opacity-90">
            See how much your business could save and earn with AI transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Current Annual Revenue ($)
              </label>
              <input
                type="number"
                value={inputs.currentRevenue}
                onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Current Annual Costs ($)
              </label>
              <input
                type="number"
                value={inputs.currentCosts}
                onChange={(e) => handleInputChange('currentCosts', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                AI Investment ($)
              </label>
              <input
                type="number"
                value={inputs.aiInvestment}
                onChange={(e) => handleInputChange('aiInvestment', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Expected Cost Reduction (%)
              </label>
              <input
                type="number"
                value={inputs.expectedCostReduction}
                onChange={(e) => handleInputChange('expectedCostReduction', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Your AI ROI Projection</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Expected ROI:</span>
                <span className="text-3xl font-bold text-green-400">{results.roi}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Payback Period:</span>
                <span className="text-xl font-semibold">{results.paybackPeriod} months</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Annual Benefits:</span>
                <span className="text-xl font-semibold">${results.annualBenefits.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Benefits ({inputs.timeFrame} months):</span>
                <span className="text-xl font-semibold">${results.totalBenefits.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI ROI Calculator</h2>
        <p className="text-gray-600">
          Calculate the potential return on investment for your AI transformation
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Revenue ($)
            </label>
            <input
              type="number"
              value={inputs.currentRevenue}
              onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Investment ($)
            </label>
            <input
              type="number"
              value={inputs.aiInvestment}
              onChange={(e) => handleInputChange('aiInvestment', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Cost Reduction (%)
            </label>
            <input
              type="number"
              value={inputs.expectedCostReduction}
              onChange={(e) => handleInputChange('expectedCostReduction', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">ROI Projection</h3>
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{results.roi}%</div>
              <div className="text-gray-600">Expected ROI</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{results.paybackPeriod}</div>
                <div className="text-sm text-gray-600">Months to Payback</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-purple-600">${results.annualBenefits.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Annual Benefits</div>
              </div>
            </div>
            
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <div className="text-lg font-semibold text-green-800">
                Total Benefits: ${results.totalBenefits.toLocaleString()}
              </div>
              <div className="text-sm text-green-600">
                Over {inputs.timeFrame} months
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}