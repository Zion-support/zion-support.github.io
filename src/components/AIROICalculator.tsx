import React, { useState } from 'react';

interface CalculationResult {
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
  threeYearValue: number;
}

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    currentRevenue: 10000000,
    currentEmployees: 500,
    currentITCosts: 1000000,
    automationPercentage: 30,
    efficiencyImprovement: 25,
    industry: 'manufacturing'
  });

  const [results, setResults] = useState<CalculationResult | null>(null);

  const calculateROI = () => {
    const { currentRevenue, currentEmployees, currentITCosts, automationPercentage, efficiencyImprovement, industry } = formData;
    
    // Industry multipliers
    const industryMultipliers = {
      manufacturing: { cost: 1.2, efficiency: 1.3 },
      healthcare: { cost: 1.1, efficiency: 1.2 },
      finance: { cost: 1.3, efficiency: 1.4 },
      retail: { cost: 1.0, efficiency: 1.1 },
      technology: { cost: 1.1, efficiency: 1.2 }
    };

    const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || industryMultipliers.manufacturing;
    
    // Calculate savings
    const laborSavings = (currentEmployees * 75000 * (automationPercentage / 100)) * multiplier.efficiency;
    const operationalSavings = (currentITCosts * (automationPercentage / 100)) * multiplier.cost;
    const efficiencyGains = (currentRevenue * (efficiencyImprovement / 100)) * 0.1; // 10% of efficiency gains as savings
    
    const annualSavings = laborSavings + operationalSavings + efficiencyGains;
    
    // AI implementation costs (typically 15-25% of first year savings)
    const implementationCost = annualSavings * 0.2;
    
    // Calculate ROI
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / (annualSavings / 12); // months
    const threeYearValue = (annualSavings * 3) - implementationCost;
    
    setResults({
      annualSavings,
      roi,
      paybackPeriod,
      threeYearValue
    });
  };

  const handleInputChange = (field: string, value: number | string) => {
    setFormData(prev => ({
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
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI ROI Calculator</h2>
        <p className="text-gray-600">
          Calculate the potential return on investment for AI transformation in your organization
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Revenue
            </label>
            <input
              type="number"
              value={formData.currentRevenue}
              onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual IT Costs
            </label>
            <input
              type="number"
              value={formData.currentITCosts}
              onChange={(e) => handleInputChange('currentITCosts', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="1,000,000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Automation Percentage
            </label>
            <input
              type="range"
              min="10"
              max="80"
              value={formData.automationPercentage}
              onChange={(e) => handleInputChange('automationPercentage', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-center text-sm text-gray-600 mt-1">
              {formData.automationPercentage}%
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Efficiency Improvement
            </label>
            <input
              type="range"
              min="10"
              max="50"
              value={formData.efficiencyImprovement}
              onChange={(e) => handleInputChange('efficiencyImprovement', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-center text-sm text-gray-600 mt-1">
              {formData.efficiencyImprovement}%
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="manufacturing">Manufacturing</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
              <option value="technology">Technology</option>
            </select>
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
          {results ? (
            <>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your AI ROI Results</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Savings:</span>
                    <span className="text-2xl font-bold text-green-600">
                      {formatCurrency(results.annualSavings)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {results.roi.toFixed(0)}%
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Payback Period:</span>
                    <span className="text-lg font-semibold text-purple-600">
                      {results.paybackPeriod.toFixed(1)} months
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">3-Year Value:</span>
                    <span className="text-lg font-semibold text-indigo-600">
                      {formatCurrency(results.threeYearValue)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-3">Key Benefits</h4>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Reduced operational costs</li>
                  <li>• Improved efficiency and productivity</li>
                  <li>• Enhanced decision-making capabilities</li>
                  <li>• Competitive advantage in your industry</li>
                </ul>
              </div>

              <div className="text-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mr-4">
                  Get Detailed Analysis
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Download Report
                </button>
              </div>
            </>
          ) : (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Ready to Calculate?</h3>
              <p className="text-gray-500 text-sm">
                Fill in your organization's details and click "Calculate ROI" to see your potential AI transformation benefits.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">300%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-1">8 weeks</div>
            <div className="text-sm text-gray-600">Typical Payback</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 mb-1">$2.5M</div>
            <div className="text-sm text-gray-600">Average Savings</div>
          </div>
        </div>
      </div>
    </div>
  );
}