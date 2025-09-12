import React, { useState, useEffect } from 'react';

interface ROIResults {
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  threeYearROI: number;
  totalInvestment: number;
}

export default function InteractiveROICalculator() {
  const [formData, setFormData] = useState({
    currentMonthlyCosts: 50000,
    expectedEfficiencyGain: 30,
    implementationCost: 100000,
    monthlyMaintenance: 5000,
    timeToImplement: 6
  });

  const [results, setResults] = useState<ROIResults>({
    monthlySavings: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    threeYearROI: 0,
    totalInvestment: 0
  });

  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    const { currentMonthlyCosts, expectedEfficiencyGain, implementationCost, monthlyMaintenance, timeToImplement } = formData;
    
    const monthlySavings = (currentMonthlyCosts * expectedEfficiencyGain) / 100;
    const annualSavings = monthlySavings * 12;
    const totalInvestment = implementationCost + (monthlyMaintenance * timeToImplement);
    const paybackPeriod = totalInvestment / monthlySavings;
    const threeYearROI = ((annualSavings * 3) - totalInvestment) / totalInvestment * 100;

    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      threeYearROI: Math.round(threeYearROI),
      totalInvestment: Math.round(totalInvestment)
    });
  };

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setIsCalculated(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Automation ROI Calculator</h2>
        <p className="text-lg text-gray-600">
          Calculate the potential return on investment for your AI automation project
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Parameters</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Monthly Operational Costs ($)
            </label>
            <input
              type="number"
              value={formData.currentMonthlyCosts}
              onChange={(e) => handleInputChange('currentMonthlyCosts', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="50000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Efficiency Gain (%)
            </label>
            <input
              type="number"
              value={formData.expectedEfficiencyGain}
              onChange={(e) => handleInputChange('expectedEfficiencyGain', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="30"
            />
            <p className="text-sm text-gray-500 mt-1">Typical range: 20-50%</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Cost ($)
            </label>
            <input
              type="number"
              value={formData.implementationCost}
              onChange={(e) => handleInputChange('implementationCost', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="100000"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="5000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Time (months)
            </label>
            <input
              type="number"
              value={formData.timeToImplement}
              onChange={(e) => handleInputChange('timeToImplement', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="6"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Projections</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                ${results.monthlySavings.toLocaleString()}
              </div>
              <div className="text-sm text-green-800">Monthly Savings</div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                ${results.annualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-blue-800">Annual Savings</div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {results.paybackPeriod}
              </div>
              <div className="text-sm text-purple-800">Payback (months)</div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {results.threeYearROI}%
              </div>
              <div className="text-sm text-orange-800">3-Year ROI</div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Investment Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Implementation Cost:</span>
                <span className="font-medium">${results.totalInvestment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Savings:</span>
                <span className="font-medium text-green-600">${results.monthlySavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Annual Savings:</span>
                <span className="font-medium text-green-600">${results.annualSavings.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* ROI Assessment */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">ROI Assessment</h4>
            {results.threeYearROI > 200 ? (
              <div className="text-green-600 font-medium">Excellent ROI - Highly Recommended</div>
            ) : results.threeYearROI > 100 ? (
              <div className="text-blue-600 font-medium">Good ROI - Recommended</div>
            ) : results.threeYearROI > 50 ? (
              <div className="text-yellow-600 font-medium">Moderate ROI - Consider Carefully</div>
            ) : (
              <div className="text-red-600 font-medium">Low ROI - Review Parameters</div>
            )}
            <p className="text-sm text-gray-600 mt-1">
              Based on industry benchmarks and your specific parameters
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Ready to Start Your AI Journey?</h3>
          <p className="mb-4 opacity-90">
            Get a personalized consultation and detailed implementation plan for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}