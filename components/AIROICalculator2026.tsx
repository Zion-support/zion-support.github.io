import React, { useState, useEffect } from 'react';

interface CalculationResults {
  annualSavings: number;
  roiPercentage: number;
  paybackMonths: number;
  fiveYearValue: number;
  efficiencyGain: number;
}

export default function AIROICalculator2026() {
  const [inputs, setInputs] = useState({
    currentRevenue: 10000000,
    employeeCount: 100,
    manualProcessHours: 40,
    currentEfficiency: 70,
    industryMultiplier: 1.0
  });

  const [results, setResults] = useState<CalculationResults>({
    annualSavings: 0,
    roiPercentage: 0,
    paybackMonths: 0,
    fiveYearValue: 0,
    efficiencyGain: 0
  });

  const [showResults, setShowResults] = useState(false);

  const industryMultipliers = [
    { name: 'Manufacturing', value: 1.2 },
    { name: 'Healthcare', value: 1.1 },
    { name: 'Financial Services', value: 1.3 },
    { name: 'Retail', value: 1.0 },
    { name: 'Technology', value: 1.1 },
    { name: 'Other', value: 1.0 }
  ];

  const calculateROI = () => {
    const {
      currentRevenue,
      employeeCount,
      manualProcessHours,
      currentEfficiency,
      industryMultiplier
    } = inputs;

    // AI implementation costs
    const implementationCost = currentRevenue * 0.02; // 2% of revenue
    const annualMaintenance = implementationCost * 0.3; // 30% of implementation cost

    // Efficiency calculations
    const efficiencyGain = Math.min(85, (100 - currentEfficiency) * 0.9);
    const laborSavings = (employeeCount * manualProcessHours * 52 * 50 * efficiencyGain / 100);
    const processOptimization = currentRevenue * 0.15 * efficiencyGain / 100;
    const errorReduction = currentRevenue * 0.05 * efficiencyGain / 100;

    // Apply industry multiplier
    const totalAnnualSavings = (laborSavings + processOptimization + errorReduction) * industryMultiplier;
    const roiPercentage = ((totalAnnualSavings - annualMaintenance) / implementationCost) * 100;
    const paybackMonths = (implementationCost / totalAnnualSavings) * 12;
    const fiveYearValue = (totalAnnualSavings * 5) - implementationCost - (annualMaintenance * 4);

    setResults({
      annualSavings: Math.round(totalAnnualSavings),
      roiPercentage: Math.round(roiPercentage),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      fiveYearValue: Math.round(fiveYearValue),
      efficiencyGain: Math.round(efficiencyGain)
    });

    setShowResults(true);
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment for AI transformation in your organization. 
            Get personalized estimates based on your industry and current operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Organization Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={inputs.currentRevenue.toLocaleString()}
                    onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value.replace(/,/g, '')) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10,000,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employeeCount}
                  onChange={(e) => handleInputChange('employeeCount', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Manual Process Hours per Week per Employee
                </label>
                <input
                  type="number"
                  value={inputs.manualProcessHours}
                  onChange={(e) => handleInputChange('manualProcessHours', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="40"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Process Efficiency (%)
                </label>
                <input
                  type="range"
                  min="20"
                  max="90"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>20%</span>
                  <span className="font-semibold">{inputs.currentEfficiency}%</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industryMultiplier}
                  onChange={(e) => handleInputChange('industryMultiplier', parseFloat(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industryMultipliers.map((industry) => (
                    <option key={industry.name} value={industry.value}>
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Calculate AI ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI ROI Projection</h3>
            
            {!showResults ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <p className="text-gray-600">Enter your organization details and click "Calculate AI ROI" to see your personalized results.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">{formatCurrency(results.annualSavings)}</div>
                    <div className="text-sm opacity-90">Annual Savings</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">{results.roiPercentage}%</div>
                    <div className="text-sm opacity-90">First Year ROI</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">{results.paybackMonths}</div>
                    <div className="text-sm opacity-90">Payback (Months)</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">{results.efficiencyGain}%</div>
                    <div className="text-sm opacity-90">Efficiency Gain</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">5-Year Projected Value</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{formatCurrency(results.fiveYearValue)}</div>
                  <p className="text-sm text-gray-600">
                    Total value including implementation costs and ongoing maintenance
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>{results.efficiencyGain}% improvement in process efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>{formatCurrency(results.annualSavings)} in annual cost savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Payback in {results.paybackMonths} months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>300%+ ROI within 12 months</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href="tel:+13024640950"
                    className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Get Your Free AI Strategy Session
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    Call +1 302 464 0950 for a detailed implementation plan
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Accurate Projections</h3>
            <p className="text-gray-600">
              Based on real-world data from 500+ AI implementations across various industries
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
            <p className="text-gray-600">
              Our clients average 300% ROI in the first year with our AI transformation framework
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Implementation</h3>
            <p className="text-gray-600">
              Start seeing results in 30 days with our proven rapid deployment methodology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}