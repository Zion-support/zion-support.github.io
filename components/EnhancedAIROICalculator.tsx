import React, { useState, useEffect } from 'react';

interface ROIInputs {
  currentEmployees: number;
  averageSalary: number;
  currentEfficiency: number;
  processAutomation: number;
  errorReduction: number;
  timeToImplement: number;
  implementationCost: number;
  industry: string;
}

interface ROICalculation {
  annualLaborSavings: number;
  errorCostSavings: number;
  efficiencyGains: number;
  totalAnnualSavings: number;
  paybackPeriod: number;
  threeYearROI: number;
  fiveYearROI: number;
  netPresentValue: number;
}

const industryMultipliers = {
  'manufacturing': { efficiency: 1.2, error: 1.5, automation: 1.3 },
  'financial': { efficiency: 1.1, error: 1.8, automation: 1.2 },
  'healthcare': { efficiency: 1.0, error: 2.0, automation: 1.1 },
  'retail': { efficiency: 1.1, error: 1.3, automation: 1.2 },
  'technology': { efficiency: 1.3, error: 1.2, automation: 1.4 },
  'other': { efficiency: 1.0, error: 1.0, automation: 1.0 }
};

export default function EnhancedAIROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    currentEmployees: 100,
    averageSalary: 75000,
    currentEfficiency: 70,
    processAutomation: 80,
    errorReduction: 90,
    timeToImplement: 12,
    implementationCost: 500000,
    industry: 'manufacturing'
  });

  const [calculation, setCalculation] = useState<ROICalculation | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const multiplier = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
    
    // Base calculations
    const annualLaborCost = inputs.currentEmployees * inputs.averageSalary;
    const currentEfficiencyCost = annualLaborCost * (1 - inputs.currentEfficiency / 100);
    const automationSavings = currentEfficiencyCost * (inputs.processAutomation / 100) * multiplier.automation;
    
    // Error cost savings (assuming 5% of labor cost is error-related)
    const errorCost = annualLaborCost * 0.05;
    const errorSavings = errorCost * (inputs.errorReduction / 100) * multiplier.error;
    
    // Efficiency gains
    const efficiencyGains = annualLaborCost * (inputs.currentEfficiency / 100) * (inputs.processAutomation / 100) * multiplier.efficiency;
    
    const annualLaborSavings = automationSavings;
    const errorCostSavings = errorSavings;
    const totalAnnualSavings = annualLaborSavings + errorCostSavings + efficiencyGains;
    
    // ROI calculations
    const paybackPeriod = inputs.implementationCost / totalAnnualSavings;
    const threeYearROI = ((totalAnnualSavings * 3 - inputs.implementationCost) / inputs.implementationCost) * 100;
    const fiveYearROI = ((totalAnnualSavings * 5 - inputs.implementationCost) / inputs.implementationCost) * 100;
    
    // NPV calculation (assuming 10% discount rate)
    const discountRate = 0.10;
    const npv = -inputs.implementationCost + 
      (totalAnnualSavings * (1 - Math.pow(1 + discountRate, -5)) / discountRate);

    setCalculation({
      annualLaborSavings,
      errorCostSavings,
      efficiencyGains,
      totalAnnualSavings,
      paybackPeriod,
      threeYearROI,
      fiveYearROI,
      netPresentValue: npv
    });
    setShowResults(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const formatMonths = (months: number) => {
    if (months < 12) {
      return `${months.toFixed(1)} months`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      return remainingMonths > 0 ? `${years}y ${remainingMonths.toFixed(0)}m` : `${years} years`;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI Transformation ROI Calculator
          </h2>
          <p className="text-lg text-gray-600">
            Calculate the potential return on investment for AI transformation in your organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Organization Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                value={inputs.currentEmployees}
                onChange={(e) => setInputs({...inputs, currentEmployees: parseInt(e.target.value) || 0})}
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
                onChange={(e) => setInputs({...inputs, averageSalary: parseInt(e.target.value) || 0})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Process Efficiency (%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={inputs.currentEfficiency}
                onChange={(e) => setInputs({...inputs, currentEfficiency: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-sm text-gray-500 text-center">{inputs.currentEfficiency}%</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={inputs.industry}
                onChange={(e) => setInputs({...inputs, industry: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="financial">Financial Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail</option>
                <option value="technology">Technology</option>
                <option value="other">Other</option>
              </select>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">AI Implementation Goals</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Process Automation Target (%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={inputs.processAutomation}
                onChange={(e) => setInputs({...inputs, processAutomation: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-sm text-gray-500 text-center">{inputs.processAutomation}%</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Error Reduction Target (%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={inputs.errorReduction}
                onChange={(e) => setInputs({...inputs, errorReduction: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-sm text-gray-500 text-center">{inputs.errorReduction}%</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Implementation Timeline (months)
              </label>
              <input
                type="range"
                min="3"
                max="24"
                value={inputs.timeToImplement}
                onChange={(e) => setInputs({...inputs, timeToImplement: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-sm text-gray-500 text-center">{inputs.timeToImplement} months</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Implementation Cost ($)
              </label>
              <input
                type="number"
                value={inputs.implementationCost}
                onChange={(e) => setInputs({...inputs, implementationCost: parseInt(e.target.value) || 0})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
              />
            </div>

            <button
              onClick={calculateROI}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Calculate ROI
            </button>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {!showResults ? (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Calculate?</h3>
                <p className="text-gray-600">
                  Fill in your organization details and AI implementation goals to see your potential ROI.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Analysis Results</h3>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(calculation!.totalAnnualSavings)}
                    </div>
                    <div className="text-sm text-green-700">Annual Savings</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatMonths(calculation!.paybackPeriod * 12)}
                    </div>
                    <div className="text-sm text-blue-700">Payback Period</div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Savings Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Labor Cost Savings</span>
                      <span className="font-semibold">{formatCurrency(calculation!.annualLaborSavings)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Error Cost Savings</span>
                      <span className="font-semibold">{formatCurrency(calculation!.errorCostSavings)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Efficiency Gains</span>
                      <span className="font-semibold">{formatCurrency(calculation!.efficiencyGains)}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-bold text-gray-900">Total Annual Savings</span>
                      <span className="font-bold text-green-600">{formatCurrency(calculation!.totalAnnualSavings)}</span>
                    </div>
                  </div>
                </div>

                {/* ROI Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-xl font-bold text-purple-600">
                      {formatPercentage(calculation!.threeYearROI)}
                    </div>
                    <div className="text-sm text-purple-700">3-Year ROI</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-xl font-bold text-orange-600">
                      {formatPercentage(calculation!.fiveYearROI)}
                    </div>
                    <div className="text-sm text-orange-700">5-Year ROI</div>
                  </div>
                </div>

                {/* NPV */}
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <div className="text-xl font-bold text-indigo-600">
                    {formatCurrency(calculation!.netPresentValue)}
                  </div>
                  <div className="text-sm text-indigo-700">Net Present Value (5 years)</div>
                </div>

                {/* Recommendations */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-800 mb-2">💡 Recommendations</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    {calculation!.paybackPeriod < 1 && (
                      <li>• Excellent ROI - implement immediately</li>
                    )}
                    {calculation!.paybackPeriod >= 1 && calculation!.paybackPeriod < 2 && (
                      <li>• Strong ROI - recommended for implementation</li>
                    )}
                    {calculation!.paybackPeriod >= 2 && calculation!.paybackPeriod < 3 && (
                      <li>• Good ROI - consider phased implementation</li>
                    )}
                    {calculation!.paybackPeriod >= 3 && (
                      <li>• Moderate ROI - evaluate specific use cases</li>
                    )}
                    {calculation!.threeYearROI > 200 && (
                      <li>• Exceptional returns - prioritize this initiative</li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Ready to start your AI transformation journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}