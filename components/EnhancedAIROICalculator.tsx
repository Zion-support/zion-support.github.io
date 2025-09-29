import React, { useState, useEffect } from 'react';

interface ROIResults {
  totalInvestment: number;
  annualSavings: number;
  monthlySavings: number;
  paybackPeriod: number;
  threeYearROI: number;
  fiveYearROI: number;
  netPresentValue: number;
  breakEvenPoint: number;
}

export default function EnhancedAIROICalculator() {
  const [formData, setFormData] = useState({
    companySize: 'medium',
    industry: 'technology',
    currentAnnualRevenue: 10000000,
    currentEmployees: 100,
    currentITSpend: 500000,
    automationLevel: 30,
    processComplexity: 'medium',
    implementationTimeline: 12,
    expectedEfficiencyGain: 25,
    expectedCostReduction: 20,
    expectedRevenueIncrease: 15,
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const industryMultipliers = {
    technology: 1.2,
    finance: 1.1,
    healthcare: 1.0,
    manufacturing: 1.3,
    retail: 1.1,
    education: 0.9,
    government: 0.8,
    other: 1.0,
  };

  const companySizeMultipliers = {
    startup: 0.5,
    small: 0.7,
    medium: 1.0,
    large: 1.5,
    enterprise: 2.0,
  };

  const calculateROI = () => {
    const {
      companySize,
      industry,
      currentAnnualRevenue,
      currentEmployees,
      currentITSpend,
      automationLevel,
      processComplexity,
      implementationTimeline,
      expectedEfficiencyGain,
      expectedCostReduction,
      expectedRevenueIncrease,
    } = formData;

    // Base calculations
    const industryMultiplier = industryMultipliers[industry as keyof typeof industryMultipliers];
    const sizeMultiplier = companySizeMultipliers[companySize as keyof typeof companySizeMultipliers];
    
    // Complexity multipliers
    const complexityMultipliers = {
      low: 0.8,
      medium: 1.0,
      high: 1.3,
    };
    const complexityMultiplier = complexityMultipliers[processComplexity as keyof typeof complexityMultipliers];

    // Calculate investment costs
    const baseImplementationCost = currentITSpend * 0.3; // 30% of current IT spend
    const employeeCost = currentEmployees * 2000; // $2K per employee for training
    const infrastructureCost = currentITSpend * 0.2; // 20% for infrastructure
    const consultingCost = baseImplementationCost * 0.4; // 40% for consulting
    
    const totalInvestment = (baseImplementationCost + employeeCost + infrastructureCost + consultingCost) 
      * industryMultiplier * sizeMultiplier * complexityMultiplier;

    // Calculate savings
    const efficiencySavings = (currentAnnualRevenue * expectedEfficiencyGain / 100) * 0.3; // 30% of efficiency gains translate to cost savings
    const costReductionSavings = currentITSpend * expectedCostReduction / 100;
    const revenueIncrease = currentAnnualRevenue * expectedRevenueIncrease / 100;
    const automationSavings = currentEmployees * 50000 * (automationLevel / 100) * 0.4; // 40% of salary costs for automated processes
    
    const annualSavings = efficiencySavings + costReductionSavings + automationSavings;
    const monthlySavings = annualSavings / 12;

    // Calculate ROI metrics
    const paybackPeriod = totalInvestment / annualSavings;
    const threeYearROI = ((annualSavings * 3) - totalInvestment) / totalInvestment * 100;
    const fiveYearROI = ((annualSavings * 5) - totalInvestment) / totalInvestment * 100;
    
    // Net Present Value (simplified)
    const discountRate = 0.1; // 10% discount rate
    const npv = -totalInvestment + (annualSavings / discountRate) * (1 - Math.pow(1 + discountRate, -5));
    
    const breakEvenPoint = totalInvestment / annualSavings;

    setResults({
      totalInvestment: Math.round(totalInvestment),
      annualSavings: Math.round(annualSavings),
      monthlySavings: Math.round(monthlySavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      threeYearROI: Math.round(threeYearROI * 10) / 10,
      fiveYearROI: Math.round(fiveYearROI * 10) / 10,
      netPresentValue: Math.round(npv),
      breakEvenPoint: Math.round(breakEvenPoint * 10) / 10,
    });
    
    setShowResults(true);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetCalculator = () => {
    setFormData({
      companySize: 'medium',
      industry: 'technology',
      currentAnnualRevenue: 10000000,
      currentEmployees: 100,
      currentITSpend: 500000,
      automationLevel: 30,
      processComplexity: 'medium',
      implementationTimeline: 12,
      expectedEfficiencyGain: 25,
      expectedCostReduction: 20,
      expectedRevenueIncrease: 15,
    });
    setResults(null);
    setShowResults(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          AI Transformation ROI Calculator
        </h2>
        <p className="text-lg text-gray-600">
          Calculate the potential return on investment for AI transformation in your organization
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size
            </label>
            <select
              value={formData.companySize}
              onChange={(e) => handleInputChange('companySize', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="startup">Startup (1-10 employees)</option>
              <option value="small">Small (11-50 employees)</option>
              <option value="medium">Medium (51-200 employees)</option>
              <option value="large">Large (201-1000 employees)</option>
              <option value="enterprise">Enterprise (1000+ employees)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="education">Education</option>
              <option value="government">Government</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Revenue ($)
            </label>
            <input
              type="number"
              value={formData.currentAnnualRevenue}
              onChange={(e) => handleInputChange('currentAnnualRevenue', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="10,000,000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Employees
            </label>
            <input
              type="number"
              value={formData.currentEmployees}
              onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current IT Spend ($)
            </label>
            <input
              type="number"
              value={formData.currentITSpend}
              onChange={(e) => handleInputChange('currentITSpend', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="500,000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Automation Level (%)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.automationLevel}
              onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-gray-500 text-center">{formData.automationLevel}%</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Process Complexity
            </label>
            <select
              value={formData.processComplexity}
              onChange={(e) => handleInputChange('processComplexity', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Low - Simple, standardized processes</option>
              <option value="medium">Medium - Mixed complexity processes</option>
              <option value="high">High - Complex, custom processes</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Efficiency Gain (%)
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={formData.expectedEfficiencyGain}
              onChange={(e) => handleInputChange('expectedEfficiencyGain', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-gray-500 text-center">{formData.expectedEfficiencyGain}%</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Cost Reduction (%)
            </label>
            <input
              type="range"
              min="5"
              max="40"
              value={formData.expectedCostReduction}
              onChange={(e) => handleInputChange('expectedCostReduction', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-gray-500 text-center">{formData.expectedCostReduction}%</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Revenue Increase (%)
            </label>
            <input
              type="range"
              min="5"
              max="30"
              value={formData.expectedRevenueIncrease}
              onChange={(e) => handleInputChange('expectedRevenueIncrease', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-gray-500 text-center">{formData.expectedRevenueIncrease}%</div>
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
              className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {showResults && results ? (
            <>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ${results.totalInvestment.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Total Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ${results.annualSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Monthly Savings</span>
                    <span className="font-semibold text-gray-900">
                      ${results.monthlySavings.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Payback Period</span>
                    <span className="font-semibold text-gray-900">
                      {results.paybackPeriod} months
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">3-Year ROI</span>
                    <span className="font-semibold text-green-600">
                      {results.threeYearROI}%
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">5-Year ROI</span>
                    <span className="font-semibold text-green-600">
                      {results.fiveYearROI}%
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Net Present Value</span>
                    <span className="font-semibold text-green-600">
                      ${results.netPresentValue.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Break-Even Point</span>
                    <span className="font-semibold text-gray-900">
                      {results.breakEvenPoint} months
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Recommendation</h4>
                <p className="text-blue-800 text-sm">
                  {results.threeYearROI > 100 
                    ? "Excellent investment opportunity! High ROI indicates strong potential for AI transformation success."
                    : results.threeYearROI > 50
                    ? "Good investment opportunity. AI transformation shows positive returns with manageable risk."
                    : "Consider starting with pilot projects to validate AI benefits before full-scale implementation."
                  }
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Calculate Your AI ROI
              </h3>
              <p className="text-gray-500">
                Fill in your organization details and click "Calculate ROI" to see your potential returns
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}