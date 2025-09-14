'use client';

import React, { useState, useEffect } from 'react';

const UltimateROICalculator2025 = () => {
  const [inputs, setInputs] = useState({
    currentEmployees: 50,
    averageSalary: 75000,
    manualHoursPerWeek: 40,
    errorRate: 15,
    processingTime: 8,
    currentCosts: 100000,
    expectedEfficiency: 80,
    implementationTime: 6
  });

  const [results, setResults] = useState({
    timeSaved: 0,
    costSavings: 0,
    errorReduction: 0,
    productivityGain: 0,
    totalROI: 0,
    paybackPeriod: 0,
    threeYearValue: 0
  });

  const calculateROI = () => {
    const {
      currentEmployees,
      averageSalary,
      manualHoursPerWeek,
      errorRate,
      processingTime,
      currentCosts,
      expectedEfficiency,
      implementationTime
    } = inputs;

    // Calculate time savings
    const timeSaved = (manualHoursPerWeek * expectedEfficiency / 100) * 52;
    
    // Calculate cost savings
    const hourlyRate = averageSalary / (52 * 40);
    const costSavings = timeSaved * hourlyRate;
    
    // Calculate error reduction savings
    const errorReduction = errorRate * 0.8; // 80% error reduction
    const errorSavings = (errorReduction / 100) * currentCosts;
    
    // Calculate productivity gain
    const productivityGain = expectedEfficiency;
    
    // Calculate total ROI
    const totalSavings = costSavings + errorSavings;
    const implementationCost = currentCosts * 0.3; // 30% of current costs
    const totalROI = ((totalSavings - implementationCost) / implementationCost) * 100;
    
    // Calculate payback period
    const paybackPeriod = implementationCost / (totalSavings / 12);
    
    // Calculate 3-year value
    const threeYearValue = (totalSavings * 3) - implementationCost;

    setResults({
      timeSaved: Math.round(timeSaved),
      costSavings: Math.round(costSavings),
      errorReduction: Math.round(errorReduction),
      productivityGain: Math.round(productivityGain),
      totalROI: Math.round(totalROI),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      threeYearValue: Math.round(threeYearValue)
    });
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">💰 ROI CALCULATOR 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Automation ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment for your AI automation project. 
            Get instant calculations based on your specific business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Business Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Salary ($)
                </label>
                <input
                  type="number"
                  value={inputs.averageSalary}
                  onChange={(e) => handleInputChange('averageSalary', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Manual Hours Per Week
                </label>
                <input
                  type="number"
                  value={inputs.manualHoursPerWeek}
                  onChange={(e) => handleInputChange('manualHoursPerWeek', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Error Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.errorRate}
                  onChange={(e) => handleInputChange('errorRate', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Processing Time (hours)
                </label>
                <input
                  type="number"
                  value={inputs.processingTime}
                  onChange={(e) => handleInputChange('processingTime', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Annual Costs ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentCosts}
                  onChange={(e) => handleInputChange('currentCosts', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expected Efficiency Gain (%)
                </label>
                <input
                  type="number"
                  value={inputs.expectedEfficiency}
                  onChange={(e) => handleInputChange('expectedEfficiency', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Implementation Time (months)
                </label>
                <input
                  type="number"
                  value={inputs.implementationTime}
                  onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Main ROI Display */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Your Projected ROI</h3>
              <div className="text-6xl font-bold mb-2">{results.totalROI}%</div>
              <p className="text-xl opacity-90">Return on Investment</p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{results.timeSaved}</div>
                <div className="text-gray-600">Hours Saved Annually</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">${results.costSavings.toLocaleString()}</div>
                <div className="text-gray-600">Annual Cost Savings</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">{results.errorReduction}%</div>
                <div className="text-gray-600">Error Reduction</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">{results.productivityGain}%</div>
                <div className="text-gray-600">Productivity Gain</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{results.paybackPeriod}</div>
                <div className="text-gray-600">Payback Period (months)</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-pink-600 mb-2">${results.threeYearValue.toLocaleString()}</div>
                <div className="text-gray-600">3-Year Value</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Achieve These Results?</h3>
              <p className="text-lg opacity-90 mb-6">
                Let's discuss how we can help you implement AI automation to achieve these projected returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateROICalculator2025;