import React, { useState, useEffect } from 'react';

interface ROIResult {
  totalROI: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  netPresentValue: number;
}

export default function AI2026ROICalculator() {
  const [formData, setFormData] = useState({
    currentRevenue: 1000000,
    employeeCount: 100,
    currentEfficiency: 70,
    industry: 'technology',
    implementationScope: 'full'
  });

  const [roiResult, setRoiResult] = useState<ROIResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    technology: 1.5,
    healthcare: 1.8,
    manufacturing: 2.2,
    financial: 1.6,
    retail: 1.4,
    education: 1.3
  };

  const scopeMultipliers = {
    pilot: 0.3,
    department: 0.6,
    full: 1.0,
    enterprise: 1.5
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const industryMultiplier = industryMultipliers[formData.industry as keyof typeof industryMultipliers];
      const scopeMultiplier = scopeMultipliers[formData.implementationScope as keyof typeof scopeMultipliers];
      
      // Base efficiency improvement
      const efficiencyImprovement = (100 - formData.currentEfficiency) * 0.8; // 80% of potential improvement
      
      // Calculate savings based on revenue and efficiency
      const baseSavings = formData.currentRevenue * (efficiencyImprovement / 100);
      const industryAdjustedSavings = baseSavings * industryMultiplier;
      const scopeAdjustedSavings = industryAdjustedSavings * scopeMultiplier;
      
      // Calculate costs (implementation, training, maintenance)
      const implementationCost = formData.currentRevenue * 0.15 * scopeMultiplier;
      const annualMaintenanceCost = implementationCost * 0.2;
      
      // Calculate results
      const monthlySavings = scopeAdjustedSavings / 12;
      const annualSavings = scopeAdjustedSavings - annualMaintenanceCost;
      const totalROI = ((annualSavings - implementationCost) / implementationCost) * 100;
      const paybackPeriod = implementationCost / monthlySavings;
      const netPresentValue = annualSavings - implementationCost;

      setRoiResult({
        totalROI: Math.round(totalROI),
        monthlySavings: Math.round(monthlySavings),
        annualSavings: Math.round(annualSavings),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        netPresentValue: Math.round(netPresentValue)
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (field: string, value: number | string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold mb-4">
            <span className="animate-pulse mr-2">🧮</span>
            AI 2026 ROI CALCULATOR
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your AI Investment ROI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment for implementing our revolutionary AI 2026 technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              {/* Annual Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1,000,000"
                />
              </div>

              {/* Employee Count */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.employeeCount}
                  onChange={(e) => handleInputChange('employeeCount', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Efficiency Level (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="95"
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10%</span>
                  <span className="font-semibold text-purple-600">{formData.currentEfficiency}%</span>
                  <span>95%</span>
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="financial">Financial Services</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                </select>
              </div>

              {/* Implementation Scope */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Implementation Scope
                </label>
                <select
                  value={formData.implementationScope}
                  onChange={(e) => handleInputChange('implementationScope', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="pilot">Pilot Project</option>
                  <option value="department">Department-wide</option>
                  <option value="full">Full Organization</option>
                  <option value="enterprise">Enterprise-wide</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your ROI Projection</h3>
            
            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                <span className="ml-4 text-gray-600">Calculating your ROI...</span>
              </div>
            ) : roiResult ? (
              <div className="space-y-6">
                {/* Total ROI */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {roiResult.totalROI.toLocaleString()}%
                    </div>
                    <div className="text-gray-700 font-semibold">Total ROI</div>
                    <div className="text-sm text-gray-500 mt-1">Annual return on investment</div>
                  </div>
                </div>

                {/* Monthly Savings */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      ${roiResult.monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-gray-700 font-semibold">Monthly Savings</div>
                    <div className="text-sm text-gray-500 mt-1">Average monthly cost savings</div>
                  </div>
                </div>

                {/* Annual Savings */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      ${roiResult.annualSavings.toLocaleString()}
                    </div>
                    <div className="text-gray-700 font-semibold">Annual Savings</div>
                    <div className="text-sm text-gray-500 mt-1">Net annual cost savings</div>
                  </div>
                </div>

                {/* Payback Period */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {roiResult.paybackPeriod} months
                    </div>
                    <div className="text-gray-700 font-semibold">Payback Period</div>
                    <div className="text-sm text-gray-500 mt-1">Time to recover investment</div>
                  </div>
                </div>

                {/* Net Present Value */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      ${roiResult.netPresentValue.toLocaleString()}
                    </div>
                    <div className="text-gray-700 font-semibold">Net Present Value</div>
                    <div className="text-sm text-gray-500 mt-1">Total value after 1 year</div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* CTA */}
            <div className="mt-8 text-center">
              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Recalculate ROI
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            * ROI calculations are based on industry averages and may vary based on specific implementation factors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Detailed Analysis
            </a>
            <a
              href="/resources/ai-2026-ultimate-implementation-master-guide"
              className="inline-flex items-center px-6 py-3 border border-indigo-500 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300"
            >
              Download Implementation Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}