'use client';

import React, { useState, useEffect } from 'react';

interface ROIResults {
  monthlySavings: number;
  yearlySavings: number;
  totalROI: number;
  paybackPeriod: number;
  netPresentValue: number;
}

const InteractiveROICalculatorAdvanced: React.FC = () => {
  const [formData, setFormData] = useState({
    currentEmployees: 100,
    averageSalary: 75000,
    currentEfficiency: 70,
    aiImplementationCost: 500000,
    monthlyMaintenance: 5000,
    expectedEfficiencyGain: 40,
    timeHorizon: 3
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const {
        currentEmployees,
        averageSalary,
        currentEfficiency,
        aiImplementationCost,
        monthlyMaintenance,
        expectedEfficiencyGain,
        timeHorizon
      } = formData;

      // Calculate current annual labor cost
      const currentAnnualLaborCost = currentEmployees * averageSalary;

      // Calculate efficiency improvement
      const newEfficiency = currentEfficiency + expectedEfficiencyGain;
      const efficiencyMultiplier = newEfficiency / 100;

      // Calculate labor cost savings
      const monthlyLaborSavings = (currentAnnualLaborCost / 12) * (1 - efficiencyMultiplier);
      const yearlyLaborSavings = monthlyLaborSavings * 12;

      // Calculate total costs
      const totalImplementationCost = aiImplementationCost;
      const totalMaintenanceCost = monthlyMaintenance * 12 * timeHorizon;
      const totalCosts = totalImplementationCost + totalMaintenanceCost;

      // Calculate total savings over time horizon
      const totalSavings = yearlyLaborSavings * timeHorizon;

      // Calculate ROI
      const totalROI = ((totalSavings - totalCosts) / totalCosts) * 100;

      // Calculate payback period (in months)
      const paybackPeriod = totalImplementationCost / monthlyLaborSavings;

      // Calculate NPV (simplified)
      const discountRate = 0.1; // 10% discount rate
      const npv = totalSavings / Math.pow(1 + discountRate, timeHorizon) - totalCosts;

      setResults({
        monthlySavings: monthlyLaborSavings,
        yearlySavings: yearlyLaborSavings,
        totalROI: totalROI,
        paybackPeriod: paybackPeriod,
        netPresentValue: npv
      });

      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getROIColor = (roi: number) => {
    if (roi >= 200) return 'text-green-600';
    if (roi >= 100) return 'text-blue-600';
    if (roi >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getROIBadge = (roi: number) => {
    if (roi >= 200) return '🚀 EXCEPTIONAL ROI';
    if (roi >= 100) return '💎 EXCELLENT ROI';
    if (roi >= 50) return '✅ GOOD ROI';
    return '⚠️ LOW ROI';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">💰 ADVANCED ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Investment ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment for AI implementation in your organization. 
            Get detailed financial projections and make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Investment Parameters</h3>
            
            <div className="space-y-6">
              {/* Current Employees */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                />
              </div>

              {/* Average Salary */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Annual Salary ($)
                </label>
                <input
                  type="number"
                  value={formData.averageSalary}
                  onChange={(e) => handleInputChange('averageSalary', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Efficiency Level (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10%</span>
                  <span className="font-semibold">{formData.currentEfficiency}%</span>
                  <span>90%</span>
                </div>
              </div>

              {/* Expected Efficiency Gain */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expected Efficiency Gain (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="80"
                  value={formData.expectedEfficiencyGain}
                  onChange={(e) => handleInputChange('expectedEfficiencyGain', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10%</span>
                  <span className="font-semibold">+{formData.expectedEfficiencyGain}%</span>
                  <span>80%</span>
                </div>
              </div>

              {/* Implementation Cost */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  AI Implementation Cost ($)
                </label>
                <input
                  type="number"
                  value={formData.aiImplementationCost}
                  onChange={(e) => handleInputChange('aiImplementationCost', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>

              {/* Monthly Maintenance */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Maintenance Cost ($)
                </label>
                <input
                  type="number"
                  value={formData.monthlyMaintenance}
                  onChange={(e) => handleInputChange('monthlyMaintenance', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>

              {/* Time Horizon */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Analysis Time Horizon (Years)
                </label>
                <select
                  value={formData.timeHorizon}
                  onChange={(e) => handleInputChange('timeHorizon', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={1}>1 Year</option>
                  <option value={2}>2 Years</option>
                  <option value={3}>3 Years</option>
                  <option value={5}>5 Years</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">ROI Analysis Results</h3>
            
            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-4 text-lg text-gray-600">Calculating...</span>
              </div>
            ) : results ? (
              <div className="space-y-6">
                {/* ROI Badge */}
                <div className={`text-center p-4 rounded-lg ${results.totalROI >= 100 ? 'bg-green-100' : results.totalROI >= 50 ? 'bg-yellow-100' : 'bg-red-100'}`}>
                  <div className={`text-2xl font-bold ${getROIColor(results.totalROI)}`}>
                    {results.totalROI.toFixed(1)}% ROI
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mt-1">
                    {getROIBadge(results.totalROI)}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Monthly Labor Savings</div>
                    <div className="text-2xl font-bold text-green-600">
                      ${results.monthlySavings.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Annual Labor Savings</div>
                    <div className="text-2xl font-bold text-green-600">
                      ${results.yearlySavings.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Payback Period</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {results.paybackPeriod.toFixed(1)} months
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Net Present Value</div>
                    <div className={`text-2xl font-bold ${results.netPresentValue >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${results.netPresentValue.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">💡 Recommendations</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {results.totalROI >= 200 && (
                      <li>• This is an exceptional investment opportunity</li>
                    )}
                    {results.totalROI >= 100 && (
                      <li>• Strong ROI - recommended for immediate implementation</li>
                    )}
                    {results.totalROI >= 50 && (
                      <li>• Good ROI - consider phased implementation</li>
                    )}
                    {results.totalROI < 50 && (
                      <li>• Consider optimizing parameters or reducing costs</li>
                    )}
                    {results.paybackPeriod <= 12 && (
                      <li>• Quick payback period - low risk investment</li>
                    )}
                    <li>• Monitor efficiency gains closely after implementation</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Download Report
                  </button>
                  <button className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            * Calculations are estimates based on industry averages and may vary based on specific implementation details.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🔒 Secure & Private</span>
            <span>📊 Industry Benchmarked</span>
            <span>🎯 Customizable Parameters</span>
            <span>📈 Real-time Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculatorAdvanced;