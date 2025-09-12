import React, { useState } from 'react';

interface CalculatorState {
  currentEmployees: number;
  averageSalary: number;
  currentEfficiency: number;
  expectedEfficiencyGain: number;
  implementationCost: number;
  timeToImplement: number;
}

export default function InteractiveROICalculator() {
  const [state, setState] = useState<CalculatorState>({
    currentEmployees: 100,
    averageSalary: 75000,
    currentEfficiency: 70,
    expectedEfficiencyGain: 30,
    implementationCost: 500000,
    timeToImplement: 12
  });

  const calculateROI = () => {
    const annualLaborCost = state.currentEmployees * state.averageSalary;
    const efficiencyMultiplier = state.expectedEfficiencyGain / 100;
    const annualSavings = annualLaborCost * efficiencyMultiplier;
    const monthlySavings = annualSavings / 12;
    const implementationMonths = state.timeToImplement;
    const totalImplementationCost = state.implementationCost;
    
    // Calculate payback period
    const paybackPeriod = totalImplementationCost / monthlySavings;
    
    // Calculate 3-year ROI
    const threeYearSavings = annualSavings * 3;
    const threeYearROI = ((threeYearSavings - totalImplementationCost) / totalImplementationCost) * 100;
    
    return {
      annualSavings,
      monthlySavings,
      paybackPeriod,
      threeYearROI,
      threeYearSavings
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: keyof CalculatorState, value: number) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI ROI Calculator</h2>
        <p className="text-lg text-gray-600">
          Calculate the potential return on investment for your AI implementation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Organization</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Employees
            </label>
            <input
              type="number"
              value={state.currentEmployees}
              onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Annual Salary ($)
            </label>
            <input
              type="number"
              value={state.averageSalary}
              onChange={(e) => handleInputChange('averageSalary', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Efficiency (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={state.currentEfficiency}
              onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Efficiency Gain (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={state.expectedEfficiencyGain}
              onChange={(e) => handleInputChange('expectedEfficiencyGain', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Cost ($)
            </label>
            <input
              type="number"
              value={state.implementationCost}
              onChange={(e) => handleInputChange('implementationCost', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Time (months)
            </label>
            <input
              type="number"
              value={state.timeToImplement}
              onChange={(e) => handleInputChange('timeToImplement', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Projections</h3>
          
          <div className="bg-green-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Annual Savings</h4>
            <div className="text-3xl font-bold text-green-600 mb-2">
              ${results.annualSavings.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">
              Based on {state.expectedEfficiencyGain}% efficiency improvement
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Payback Period</h4>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {results.paybackPeriod.toFixed(1)} months
            </div>
            <p className="text-sm text-gray-600">
              Time to recover implementation costs
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">3-Year ROI</h4>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {results.threeYearROI.toFixed(0)}%
            </div>
            <p className="text-sm text-gray-600">
              Total return over 3 years: ${results.threeYearSavings.toLocaleString()}
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Monthly Savings</h4>
            <div className="text-2xl font-bold text-gray-700 mb-2">
              ${results.monthlySavings.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">
              Average monthly cost savings
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Get Started?</h4>
          <p className="text-gray-600 mb-4">
            Our AI experts can help you achieve these results with a customized implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}