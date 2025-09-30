import React, { useState, useEffect } from 'react';

interface CalculatorState {
  companySize: string;
  industry: string;
  currentAutomation: string;
  aiMaturity: string;
  annualRevenue: string;
  employeeCount: string;
}

interface CalculationResults {
  potentialSavings: string;
  automationRate: string;
  productivityGain: string;
  roiTimeline: string;
  implementationCost: string;
  netROI: string;
}

export default function InteractiveAICalculator() {
  const [state, setState] = useState<CalculatorState>({
    companySize: '',
    industry: '',
    currentAutomation: '',
    aiMaturity: '',
    annualRevenue: '',
    employeeCount: ''
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const { companySize, industry, currentAutomation, aiMaturity, annualRevenue, employeeCount } = state;
      
      // Base calculations based on inputs
      let baseSavings = 0;
      let automationRate = 0;
      let productivityGain = 0;
      let implementationCost = 0;
      
      // Company size multiplier
      const sizeMultiplier = {
        'startup': 0.5,
        'small': 1,
        'medium': 2,
        'large': 4
      }[companySize] || 1;
      
      // Industry multiplier
      const industryMultiplier = {
        'manufacturing': 1.5,
        'retail': 1.2,
        'finance': 1.8,
        'healthcare': 1.3,
        'technology': 1.1,
        'other': 1
      }[industry] || 1;
      
      // Current automation level
      const automationMultiplier = {
        'none': 1.5,
        'basic': 1.2,
        'moderate': 1,
        'advanced': 0.7
      }[currentAutomation] || 1;
      
      // AI maturity level
      const maturityMultiplier = {
        'beginner': 1.3,
        'intermediate': 1.1,
        'advanced': 0.9
      }[aiMaturity] || 1;
      
      // Calculate base metrics
      const revenue = parseInt(annualRevenue) || 1000000;
      const employees = parseInt(employeeCount) || 50;
      
      baseSavings = revenue * 0.15 * sizeMultiplier * industryMultiplier * automationMultiplier * maturityMultiplier;
      automationRate = Math.min(95, 60 + (sizeMultiplier * 10) + (industryMultiplier * 5));
      productivityGain = Math.min(500, 200 + (sizeMultiplier * 50) + (industryMultiplier * 30));
      implementationCost = baseSavings * 0.3; // 30% of first year savings
      
      const netROI = baseSavings - implementationCost;
      
      setResults({
        potentialSavings: `$${(baseSavings / 1000000).toFixed(1)}M`,
        automationRate: `${Math.round(automationRate)}%`,
        productivityGain: `${Math.round(productivityGain)}%`,
        roiTimeline: sizeMultiplier > 2 ? '6-9 months' : '9-12 months',
        implementationCost: `$${(implementationCost / 1000000).toFixed(1)}M`,
        netROI: `$${(netROI / 1000000).toFixed(1)}M`
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  const handleInputChange = (field: keyof CalculatorState, value: string) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  const isFormComplete = Object.values(state).every(value => value !== '');

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI Transformation ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized insights into your potential AI transformation ROI. 
            Answer a few questions to receive detailed projections and recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Organization</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={state.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select company size</option>
                  <option value="startup">Startup (1-50 employees)</option>
                  <option value="small">Small (51-200 employees)</option>
                  <option value="medium">Medium (201-1000 employees)</option>
                  <option value="large">Large (1000+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={state.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="finance">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Level
                </label>
                <select
                  value={state.currentAutomation}
                  onChange={(e) => handleInputChange('currentAutomation', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select automation level</option>
                  <option value="none">No automation</option>
                  <option value="basic">Basic automation (10-30%)</option>
                  <option value="moderate">Moderate automation (30-60%)</option>
                  <option value="advanced">Advanced automation (60%+)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  AI Maturity Level
                </label>
                <select
                  value={state.aiMaturity}
                  onChange={(e) => handleInputChange('aiMaturity', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select AI maturity</option>
                  <option value="beginner">Beginner (No AI implementation)</option>
                  <option value="intermediate">Intermediate (Some AI use)</option>
                  <option value="advanced">Advanced (Comprehensive AI)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue (USD)
                </label>
                <select
                  value={state.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select revenue range</option>
                  <option value="1000000">$1M - $10M</option>
                  <option value="10000000">$10M - $50M</option>
                  <option value="50000000">$50M - $100M</option>
                  <option value="100000000">$100M - $500M</option>
                  <option value="500000000">$500M+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={state.employeeCount}
                  onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                  placeholder="Enter number of employees"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={calculateROI}
                disabled={!isFormComplete || isCalculating}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                  isFormComplete && !isCalculating
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isCalculating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Calculating...
                  </div>
                ) : (
                  'Calculate My AI ROI'
                )}
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI Transformation Projection</h3>
            
            {results ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{results.potentialSavings}</div>
                    <div className="text-gray-700 font-semibold">Annual Savings</div>
                    <div className="text-sm text-gray-600">Potential cost savings</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{results.automationRate}</div>
                    <div className="text-gray-700 font-semibold">Automation Rate</div>
                    <div className="text-sm text-gray-600">Process automation</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{results.productivityGain}</div>
                    <div className="text-gray-700 font-semibold">Productivity Gain</div>
                    <div className="text-sm text-gray-600">Efficiency improvement</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{results.roiTimeline}</div>
                    <div className="text-gray-700 font-semibold">ROI Timeline</div>
                    <div className="text-sm text-gray-600">Time to break even</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Implementation Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Implementation Cost</span>
                      <span className="font-semibold text-gray-900">{results.implementationCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Savings</span>
                      <span className="font-semibold text-gray-900">{results.potentialSavings}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-semibold">Net ROI (Year 1)</span>
                        <span className="font-bold text-green-600 text-lg">{results.netROI}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">💡 Key Insights</h4>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Your organization has high potential for AI transformation</li>
                    <li>• Focus on high-impact, low-risk processes first</li>
                    <li>• Consider phased implementation to minimize risk</li>
                    <li>• ROI timeline suggests strong business case</li>
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Get Detailed AI Assessment
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Calculate Your ROI?</h4>
                <p className="text-gray-600">
                  Fill out the form on the left to get personalized AI transformation projections 
                  and recommendations for your organization.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}