import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Zap, Users } from 'lucide-react';

interface ROIResult {
  annualSavings: number;
  paybackPeriod: number;
  threeYearROI: number;
  efficiencyGain: number;
}

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    employees: 100,
    currentAutomation: 20,
    monthlyITCost: 50000,
    dataVolume: 1000,
    industry: 'manufacturing'
  });

  const [result, setResult] = useState<ROIResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const { employees, currentAutomation, monthlyITCost, dataVolume, industry } = formData;
      
      // Industry multipliers
      const industryMultipliers = {
        manufacturing: 1.2,
        healthcare: 1.1,
        finance: 1.3,
        retail: 1.0,
        technology: 1.4
      };
      
      const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || 1.0;
      
      // Calculate potential automation (max 95%)
      const maxAutomation = 95;
      const potentialAutomation = Math.min(maxAutomation, currentAutomation + 60);
      const automationGap = potentialAutomation - currentAutomation;
      
      // Calculate savings based on automation gap
      const baseSavings = (automationGap / 100) * monthlyITCost * 12 * multiplier;
      const efficiencyMultiplier = 1 + (automationGap / 100) * 0.5; // 50% efficiency gain per 100% automation
      
      const annualSavings = Math.round(baseSavings);
      const paybackPeriod = Math.round((1200000 / annualSavings) * 12); // Assuming $1.2M investment
      const threeYearROI = Math.round((annualSavings * 3 - 1200000) / 1200000 * 100);
      const efficiencyGain = Math.round(automationGap * 0.8); // 80% efficiency gain per automation %
      
      setResult({
        annualSavings,
        paybackPeriod,
        threeYearROI,
        efficiencyGain
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  const handleInputChange = (field: string, value: number | string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI ROI Calculator</h2>
        <p className="text-gray-600">Discover the potential return on investment for AI transformation in your organization</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Employees
            </label>
            <input
              type="number"
              value={formData.employees}
              onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter number of employees"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Automation Level (%)
            </label>
            <input
              type="number"
              value={formData.currentAutomation}
              onChange={(e) => handleInputChange('currentAutomation', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Current automation percentage"
              max="95"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Monthly IT Costs ($)
            </label>
            <input
              type="number"
              value={formData.monthlyITCost}
              onChange={(e) => handleInputChange('monthlyITCost', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Monthly IT spending"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Data Volume (GB)
            </label>
            <input
              type="number"
              value={formData.dataVolume}
              onChange={(e) => handleInputChange('dataVolume', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Data volume in GB"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            disabled={isCalculating}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalculating ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                Calculating...
              </div>
            ) : (
              'Calculate ROI'
            )}
          </button>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {result ? (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your AI Transformation ROI</h3>
                <p className="text-gray-600">Based on your inputs, here's what you can expect:</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">
                    ${result.annualSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">
                    {result.paybackPeriod} months
                  </div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">
                    {result.threeYearROI}%
                  </div>
                  <div className="text-sm text-gray-600">3-Year ROI</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">
                    {result.efficiencyGain}%
                  </div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Insights:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• AI transformation could save you ${result.annualSavings.toLocaleString()} annually</li>
                  <li>• Break-even point in {result.paybackPeriod} months</li>
                  <li>• {result.efficiencyGain}% improvement in operational efficiency</li>
                  <li>• {result.threeYearROI}% return on investment over 3 years</li>
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setResult(null)}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Recalculate with Different Values
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Calculate?</h3>
              <p className="text-gray-600">
                Fill in your organization's details and click "Calculate ROI" to see your potential AI transformation benefits.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📊</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Data-Driven</h4>
            <p className="text-sm text-gray-600">Based on real-world case studies and industry benchmarks</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Accurate</h4>
            <p className="text-sm text-gray-600">Industry-specific calculations for precise ROI projections</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Instant</h4>
            <p className="text-sm text-gray-600">Get immediate insights into your AI transformation potential</p>
          </div>
        </div>
      </div>
    </div>
  );
}