import React, { useState } from 'react';

interface CalculationResult {
  currentCosts: number;
  aiSavings: number;
  implementationCost: number;
  netSavings: number;
  roi: number;
  paybackPeriod: number;
}

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    employees: 100,
    avgSalary: 75000,
    currentEfficiency: 70,
    aiEfficiencyGain: 40,
    implementationCost: 500000,
    monthlyMaintenance: 25000,
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const {
      employees,
      avgSalary,
      currentEfficiency,
      aiEfficiencyGain,
      implementationCost,
      monthlyMaintenance,
    } = formData;

    // Calculate current annual costs
    const currentCosts = employees * avgSalary;

    // Calculate efficiency improvement
    const efficiencyMultiplier = (100 + aiEfficiencyGain) / 100;
    const newEfficiency = currentEfficiency * efficiencyMultiplier;
    const efficiencyGain = (newEfficiency - currentEfficiency) / 100;

    // Calculate AI savings (assuming efficiency gain translates to cost savings)
    const aiSavings = currentCosts * efficiencyGain;

    // Calculate total implementation cost (one-time + 12 months maintenance)
    const totalImplementationCost = implementationCost + (monthlyMaintenance * 12);

    // Calculate net savings
    const netSavings = aiSavings - monthlyMaintenance;

    // Calculate ROI
    const roi = ((aiSavings - totalImplementationCost) / totalImplementationCost) * 100;

    // Calculate payback period (in months)
    const paybackPeriod = totalImplementationCost / (aiSavings / 12);

    setResult({
      currentCosts,
      aiSavings,
      implementationCost: totalImplementationCost,
      netSavings,
      roi,
      paybackPeriod,
    });
    setShowResults(true);
  };

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          AI ROI Calculator
        </h2>
        <p className="text-xl text-gray-600">
          Calculate the potential return on investment for AI implementation in your organization
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Input Parameters</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Employees
            </label>
            <input
              type="number"
              value={formData.employees}
              onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Annual Salary ($)
            </label>
            <input
              type="number"
              value={formData.avgSalary}
              onChange={(e) => handleInputChange('avgSalary', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Efficiency (%)
            </label>
            <input
              type="number"
              value={formData.currentEfficiency}
              onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected AI Efficiency Gain (%)
            </label>
            <input
              type="number"
              value={formData.aiEfficiencyGain}
              onChange={(e) => handleInputChange('aiEfficiencyGain', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Implementation Cost ($)
            </label>
            <input
              type="number"
              value={formData.implementationCost}
              onChange={(e) => handleInputChange('implementationCost', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Maintenance Cost ($)
            </label>
            <input
              type="number"
              value={formData.monthlyMaintenance}
              onChange={(e) => handleInputChange('monthlyMaintenance', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Calculate ROI
          </button>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
          
          {showResults && result ? (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {result.roi.toFixed(1)}% ROI
                </div>
                <div className="text-sm text-green-700">Return on Investment</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">
                    ${(result.aiSavings / 1000).toFixed(0)}K
                  </div>
                  <div className="text-sm text-blue-700">Annual AI Savings</div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">
                    {result.paybackPeriod.toFixed(1)} months
                  </div>
                  <div className="text-sm text-purple-700">Payback Period</div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Cost Breakdown:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Current Annual Costs:</span>
                    <span>${(result.currentCosts / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Implementation:</span>
                    <span>${(result.implementationCost / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Net Annual Savings:</span>
                    <span className="text-green-600">${(result.netSavings / 1000).toFixed(0)}K</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Key Insights:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• AI will save ${(result.aiSavings / 1000).toFixed(0)}K annually</li>
                  <li>• Payback period: {result.paybackPeriod.toFixed(1)} months</li>
                  <li>• 3-year ROI: {((result.aiSavings * 3 - result.implementationCost) / result.implementationCost * 100).toFixed(1)}%</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <div className="text-4xl mb-4">📊</div>
              <p>Enter your parameters and click "Calculate ROI" to see results</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Ready to Implement AI?</h3>
        <p className="text-gray-700 mb-4">
          Our AI experts can help you achieve these results with proven implementation strategies 
          and ongoing support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}