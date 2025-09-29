import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CalculationResults {
  monthlySavings: number;
  annualSavings: number;
  roiPercentage: number;
  paybackPeriod: number;
  totalROI: number;
}

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    currentEmployees: 100,
    avgSalary: 75000,
    manualProcesses: 50,
    errorRate: 5,
    processingTime: 40,
    aiImplementationCost: 50000,
    timeframe: 12
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateROI = () => {
    const {
      currentEmployees,
      avgSalary,
      manualProcesses,
      errorRate,
      processingTime,
      aiImplementationCost,
      timeframe
    } = formData;

    // Calculate cost savings
    const employeeCostPerHour = (avgSalary / 2080); // 2080 hours per year
    const monthlyEmployeeCost = currentEmployees * employeeCostPerHour * 160; // 160 hours per month
    
    // AI efficiency gains
    const timeSavings = (processingTime * 0.7) / 100; // 70% time reduction
    const errorReduction = (errorRate * 0.8) / 100; // 80% error reduction
    const automationRate = (manualProcesses * 0.6) / 100; // 60% automation
    
    // Monthly savings calculation
    const timeSavingsValue = monthlyEmployeeCost * timeSavings;
    const errorSavingsValue = monthlyEmployeeCost * errorReduction * 0.3; // 30% of time spent on errors
    const automationSavings = monthlyEmployeeCost * automationRate * 0.4; // 40% of automated processes
    
    const monthlySavings = timeSavingsValue + errorSavingsValue + automationSavings;
    const annualSavings = monthlySavings * 12;
    
    // ROI calculations
    const totalROI = annualSavings - aiImplementationCost;
    const roiPercentage = (totalROI / aiImplementationCost) * 100;
    const paybackPeriod = aiImplementationCost / monthlySavings;

    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roiPercentage: Math.round(roiPercentage),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      totalROI: Math.round(totalROI)
    });
    
    setIsCalculated(true);
  };

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setIsCalculated(false);
  };

  const resetCalculator = () => {
    setFormData({
      currentEmployees: 100,
      avgSalary: 75000,
      manualProcesses: 50,
      errorRate: 5,
      processingTime: 40,
      aiImplementationCost: 50000,
      timeframe: 12
    });
    setResults(null);
    setIsCalculated(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">🤖 AI ROI Calculator</h2>
        <p className="opacity-90">Calculate the potential return on investment for your AI transformation</p>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Organization Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                value={formData.currentEmployees}
                onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="10000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Salary ($)
              </label>
              <input
                type="number"
                value={formData.avgSalary}
                onChange={(e) => handleInputChange('avgSalary', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="30000"
                max="200000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Manual Processes (%)
              </label>
              <input
                type="number"
                value={formData.manualProcesses}
                onChange={(e) => handleInputChange('manualProcesses', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
                max="100"
              />
              <p className="text-xs text-gray-500 mt-1">Percentage of processes that are manual</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Error Rate (%)
              </label>
              <input
                type="number"
                value={formData.errorRate}
                onChange={(e) => handleInputChange('errorRate', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
                max="50"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Processing Time (% of workday)
              </label>
              <input
                type="number"
                value={formData.processingTime}
                onChange={(e) => handleInputChange('processingTime', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
                max="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI Implementation Cost ($)
              </label>
              <input
                type="number"
                value={formData.aiImplementationCost}
                onChange={(e) => handleInputChange('aiImplementationCost', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="10000"
                max="1000000"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={calculateROI}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Calculate ROI
              </button>
              <button
                onClick={resetCalculator}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📈 Projected Results</h3>
            
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Monthly Savings</h4>
                    <span className="text-2xl">💰</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    ${results.monthlySavings.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Expected monthly cost savings from AI automation
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Annual Savings</h4>
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    ${results.annualSavings.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Projected yearly savings after implementation
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">ROI Percentage</h4>
                    <span className="text-2xl">📈</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">
                    {results.roiPercentage}%
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Return on investment in the first year
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Payback Period</h4>
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    {results.paybackPeriod} months
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Time to recover initial investment
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Net ROI (Year 1)</h4>
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="text-3xl font-bold text-teal-600">
                    ${results.totalROI.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Net profit after implementation costs
                  </p>
                </div>
              </motion.div>
            )}

            {!results && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-gray-500">Enter your organization details and click "Calculate ROI" to see projected results</p>
              </div>
            )}

            {results && (
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-6 mt-6">
                <h4 className="font-semibold text-lg mb-2">🎉 Ready to Get Started?</h4>
                <p className="text-sm opacity-90 mb-4">
                  Based on your inputs, AI transformation could deliver significant value to your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                    Get Expert Consultation
                  </button>
                  <button className="border border-white text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-blue-600 transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Assumptions */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">📋 Calculation Assumptions</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <h5 className="font-medium text-gray-900 mb-1">Efficiency Gains</h5>
              <ul className="space-y-1">
                <li>• 70% time reduction</li>
                <li>• 80% error reduction</li>
                <li>• 60% process automation</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-1">Cost Factors</h5>
              <ul className="space-y-1">
                <li>• 2080 working hours/year</li>
                <li>• 160 hours/month average</li>
                <li>• 30% of time on error correction</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-1">Implementation</h5>
              <ul className="space-y-1">
                <li>• Phased rollout approach</li>
                <li>• Training and change management</li>
                <li>• Continuous optimization</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            * Results are estimates based on industry averages. Actual results may vary based on implementation quality, 
            organizational readiness, and specific use cases.
          </p>
        </div>
      </div>
    </div>
  );
}