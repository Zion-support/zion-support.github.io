'use client';

import React, { useState, useEffect } from 'react';

const ROICalculatorWidget: React.FC = () => {
  const [inputs, setInputs] = useState({
    currentRevenue: 1000000,
    currentEmployees: 50,
    currentEfficiency: 70,
    automationLevel: 50,
    implementationTime: 6
  });

  const [results, setResults] = useState({
    revenueIncrease: 0,
    costSavings: 0,
    efficiencyGain: 0,
    totalROI: 0,
    paybackPeriod: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = async () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const {
      currentRevenue,
      currentEmployees,
      currentEfficiency,
      automationLevel,
      implementationTime
    } = inputs;

    // Calculate based on typical AI automation benefits
    const efficiencyGain = (automationLevel / 100) * (100 - currentEfficiency) * 0.8;
    const revenueIncrease = currentRevenue * (efficiencyGain / 100) * 1.2;
    const costSavings = currentEmployees * 50000 * (automationLevel / 100) * 0.3; // 30% labor cost reduction
    const totalBenefits = revenueIncrease + costSavings;
    const implementationCost = currentRevenue * 0.1 * (automationLevel / 100); // 10% of revenue for implementation
    const totalROI = ((totalBenefits - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationTime + (implementationCost / (totalBenefits / 12));

    setResults({
      revenueIncrease: Math.round(revenueIncrease),
      costSavings: Math.round(costSavings),
      efficiencyGain: Math.round(efficiencyGain),
      totalROI: Math.round(totalROI),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10
    });

    setIsCalculating(false);
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">💰 ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment for your AI transformation. 
            Get instant insights based on your business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentRevenue.toLocaleString()}
                  onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value.replace(/,/g, '')) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Efficiency Level (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10%</span>
                  <span className="font-semibold">{inputs.currentEfficiency}%</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Automation Level (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={inputs.automationLevel}
                  onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10%</span>
                  <span className="font-semibold">{inputs.automationLevel}%</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Time (months)
                </label>
                <input
                  type="range"
                  min="3"
                  max="24"
                  value={inputs.implementationTime}
                  onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>3 months</span>
                  <span className="font-semibold">{inputs.implementationTime} months</span>
                  <span>24 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your ROI Projection</h3>
              
              {isCalculating ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-4"></div>
                  <p className="text-gray-600">Calculating your ROI...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-green-700 mb-2">
                        {results.totalROI}%
                      </div>
                      <div className="text-sm text-green-600 font-medium">Total ROI</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-blue-700 mb-2">
                        {results.paybackPeriod}
                      </div>
                      <div className="text-sm text-blue-600 font-medium">Months to Payback</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Revenue Increase</span>
                      <span className="font-bold text-green-600">
                        +${results.revenueIncrease.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Cost Savings</span>
                      <span className="font-bold text-blue-600">
                        +${results.costSavings.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Efficiency Gain</span>
                      <span className="font-bold text-purple-600">
                        +{results.efficiencyGain}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Ready to Start Your AI Journey?</h4>
              <p className="mb-6 opacity-90">
                Based on your metrics, you could see significant returns. Let's discuss how to make this a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8B5CF6;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8B5CF6;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default ROICalculatorWidget;