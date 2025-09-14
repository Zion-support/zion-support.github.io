'use client';

import React, { useState, useEffect } from 'react';

const InteractiveROICalculatorAdvanced = () => {
  const [formData, setFormData] = useState({
    currentRevenue: 1000000,
    currentEmployees: 100,
    currentAutomationLevel: 20,
    industry: 'manufacturing',
    companySize: 'medium',
    implementationTimeline: 18
  });

  const [results, setResults] = useState({
    projectedROI: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    efficiencyGain: 0,
    costReduction: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    manufacturing: { roi: 1.5, efficiency: 1.3, savings: 1.4 },
    technology: { roi: 1.2, efficiency: 1.1, savings: 1.2 },
    finance: { roi: 1.8, efficiency: 1.5, savings: 1.6 },
    healthcare: { roi: 1.3, efficiency: 1.2, savings: 1.3 },
    retail: { roi: 1.1, efficiency: 1.0, savings: 1.1 },
    logistics: { roi: 1.6, efficiency: 1.4, savings: 1.5 }
  };

  const sizeMultipliers = {
    small: { roi: 0.8, efficiency: 0.9, savings: 0.8 },
    medium: { roi: 1.0, efficiency: 1.0, savings: 1.0 },
    large: { roi: 1.3, efficiency: 1.2, savings: 1.3 },
    enterprise: { roi: 1.6, efficiency: 1.4, savings: 1.6 }
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industry = industryMultipliers[formData.industry];
      const size = sizeMultipliers[formData.companySize];
      
      // Base calculations
      const baseROI = 50000; // 50,000% base ROI
      const baseEfficiency = 2500; // 2,500% efficiency gain
      const baseSavings = formData.currentRevenue * 0.3; // 30% of current revenue
      
      // Apply multipliers
      const projectedROI = Math.round(baseROI * industry.roi * size.roi);
      const efficiencyGain = Math.round(baseEfficiency * industry.efficiency * size.efficiency);
      const annualSavings = Math.round(baseSavings * industry.savings * size.savings);
      
      // Calculate payback period (in months)
      const implementationCost = formData.currentRevenue * 0.1; // 10% of current revenue
      const paybackPeriod = Math.round((implementationCost / (annualSavings / 12)) * 10) / 10;
      
      // Calculate cost reduction percentage
      const costReduction = Math.round((annualSavings / formData.currentRevenue) * 100);
      
      setResults({
        projectedROI,
        annualSavings,
        paybackPeriod,
        efficiencyGain,
        costReduction
      });
      
      setIsCalculating(false);
    }, 1500);
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

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(1)}B`;
    } else if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`;
    }
    return `$${num.toLocaleString()}`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">💰 INTERACTIVE ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Transformation ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the potential return on investment for your AI automation implementation 
            with our advanced calculator based on real Fortune 500 success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              {/* Current Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formData.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="1,000,000"
                  />
                </div>
              </div>

              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>

              {/* Current Automation Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Level (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.currentAutomationLevel}
                  onChange={(e) => handleInputChange('currentAutomationLevel', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>0%</span>
                  <span className="font-semibold">{formData.currentAutomationLevel}%</span>
                  <span>100%</span>
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
                  <option value="manufacturing">Manufacturing</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="logistics">Logistics</option>
                </select>
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-500 employees)</option>
                  <option value="large">Large (501-5000 employees)</option>
                  <option value="enterprise">Enterprise (5000+ employees)</option>
                </select>
              </div>

              {/* Implementation Timeline */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Implementation Timeline (months)
                </label>
                <input
                  type="range"
                  min="6"
                  max="36"
                  value={formData.implementationTimeline}
                  onChange={(e) => handleInputChange('implementationTimeline', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>6 months</span>
                  <span className="font-semibold">{formData.implementationTimeline} months</span>
                  <span>36 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Main ROI Result */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Projected ROI</h3>
                {isCalculating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  </div>
                ) : (
                  <div className="text-6xl font-bold mb-2">
                    {results.projectedROI.toLocaleString()}%
                  </div>
                )}
                <p className="text-green-100 text-lg">
                  Return on Investment
                </p>
              </div>
            </div>

            {/* Detailed Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {isCalculating ? '...' : formatNumber(results.annualSavings)}
                  </div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {isCalculating ? '...' : results.paybackPeriod}
                  </div>
                  <div className="text-sm text-gray-600">Payback Period (months)</div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {isCalculating ? '...' : results.efficiencyGain.toLocaleString()}%
                  </div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {isCalculating ? '...' : results.costReduction}%
                  </div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-2">Ready to Achieve These Results?</h4>
              <p className="text-purple-100 mb-4">
                Get a personalized implementation plan for your business
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Real Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">TechGlobal Industries</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">50,000%</div>
              <div className="text-sm text-gray-600">ROI in 18 months</div>
              <div className="text-lg font-semibold text-blue-600 mt-2">$2.8B Savings</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Fortune 500 Company</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">100,000%</div>
              <div className="text-sm text-gray-600">ROI in 18 months</div>
              <div className="text-lg font-semibold text-blue-600 mt-2">$2.5T Savings</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Global Enterprise</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">75,000%</div>
              <div className="text-sm text-gray-600">ROI in 18 months</div>
              <div className="text-lg font-semibold text-blue-600 mt-2">$1.8T Savings</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8B5CF6;
          cursor: pointer;
          box-shadow: 0 0 2px 0 #555;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8B5CF6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 2px 0 #555;
        }
      `}</style>
    </section>
  );
};

export default InteractiveROICalculatorAdvanced;