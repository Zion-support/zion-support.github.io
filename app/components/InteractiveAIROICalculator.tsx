import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';

export default function InteractiveAIROICalculator() {
  const [inputs, setInputs] = useState({
    currentEmployees: 100,
    averageSalary: 75000,
    currentProductivity: 100,
    aiImplementationCost: 500000,
    timeToImplement: 12
  });

  const calculateROI = () => {
    const { currentEmployees, averageSalary, currentProductivity, aiImplementationCost, timeToImplement } = inputs;
    
    // Calculate annual labor cost
    const annualLaborCost = currentEmployees * averageSalary;
    
    // AI productivity improvement (conservative estimate)
    const productivityImprovement = 0.3; // 30% improvement
    const newProductivity = currentProductivity * (1 + productivityImprovement);
    
    // Calculate savings from productivity gains
    const productivitySavings = annualLaborCost * productivityImprovement;
    
    // Additional benefits (reduced errors, faster processing, etc.)
    const additionalBenefits = annualLaborCost * 0.15; // 15% additional benefits
    
    // Total annual savings
    const totalAnnualSavings = productivitySavings + additionalBenefits;
    
    // Calculate ROI
    const roi = ((totalAnnualSavings - aiImplementationCost) / aiImplementationCost) * 100;
    
    // Calculate payback period
    const paybackPeriod = aiImplementationCost / totalAnnualSavings;
    
    return {
      roi: Math.max(0, roi),
      paybackPeriod: Math.max(0, paybackPeriod),
      totalAnnualSavings,
      productivitySavings,
      additionalBenefits,
      newProductivity
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-xl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">AI ROI Calculator</h2>
          </div>
          <p className="text-lg text-gray-600">
            Calculate the potential return on investment for AI implementation in your organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Organization Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                value={inputs.currentEmployees}
                onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Annual Salary ($)
              </label>
              <input
                type="number"
                value={inputs.averageSalary}
                onChange={(e) => handleInputChange('averageSalary', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="10000"
                step="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Productivity Level (%)
              </label>
              <input
                type="number"
                value={inputs.currentProductivity}
                onChange={(e) => handleInputChange('currentProductivity', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI Implementation Cost ($)
              </label>
              <input
                type="number"
                value={inputs.aiImplementationCost}
                onChange={(e) => handleInputChange('aiImplementationCost', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="10000"
                step="10000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Implementation Timeline (months)
              </label>
              <input
                type="number"
                value={inputs.timeToImplement}
                onChange={(e) => handleInputChange('timeToImplement', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="36"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Projected Results</h3>
            
            {/* ROI */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">ROI</h4>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {results.roi.toFixed(1)}%
              </div>
              <p className="text-sm text-gray-600">
                Return on investment after first year
              </p>
            </div>

            {/* Payback Period */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {results.paybackPeriod.toFixed(1)} years
              </div>
              <p className="text-sm text-gray-600">
                Time to recover implementation costs
              </p>
            </div>

            {/* Annual Savings */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <DollarSign className="w-6 h-6 text-purple-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Annual Savings</h4>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                ${results.totalAnnualSavings.toLocaleString()}
              </div>
              <p className="text-sm text-gray-600">
                Total annual cost savings
              </p>
            </div>

            {/* Productivity Gain */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 text-orange-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Productivity Gain</h4>
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {((results.newProductivity - inputs.currentProductivity) / inputs.currentProductivity * 100).toFixed(1)}%
              </div>
              <p className="text-sm text-gray-600">
                Increase in productivity levels
              </p>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Savings Breakdown</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600">Productivity Savings</div>
              <div className="text-xl font-semibold text-green-600">
                ${results.productivitySavings.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Additional Benefits</div>
              <div className="text-xl font-semibold text-blue-600">
                ${results.additionalBenefits.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> This calculator provides estimates based on industry averages. 
            Actual results may vary based on implementation quality, industry specifics, and organizational factors. 
            Consult with our AI experts for a detailed analysis tailored to your organization.
          </p>
        </div>
      </div>
    </div>
  );
}