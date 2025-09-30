'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CalculatorState {
  companySize: string;
  industry: string;
  currentProcesses: number;
  monthlyTransactions: number;
  averageProcessingTime: number;
  errorRate: number;
  laborCost: number;
}

const InteractiveAICalculator2026: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    companySize: 'medium',
    industry: 'finance',
    currentProcesses: 50,
    monthlyTransactions: 10000,
    averageProcessingTime: 5,
    errorRate: 8,
    laborCost: 50
  });

  const [results, setResults] = useState({
    automationPercentage: 0,
    timeSavings: 0,
    costSavings: 0,
    errorReduction: 0,
    roi: 0,
    paybackPeriod: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    finance: { automation: 0.95, efficiency: 0.85, cost: 0.70 },
    healthcare: { automation: 0.80, efficiency: 0.75, cost: 0.65 },
    manufacturing: { automation: 0.90, efficiency: 0.80, cost: 0.75 },
    retail: { automation: 0.85, efficiency: 0.70, cost: 0.60 },
    technology: { automation: 0.88, efficiency: 0.82, cost: 0.68 },
    other: { automation: 0.75, efficiency: 0.70, cost: 0.65 }
  };

  const sizeMultipliers = {
    small: 0.8,
    medium: 1.0,
    large: 1.2,
    enterprise: 1.5
  };

  useEffect(() => {
    calculateResults();
  }, [state]);

  const calculateResults = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industry = industryMultipliers[state.industry as keyof typeof industryMultipliers];
      const size = sizeMultipliers[state.companySize as keyof typeof sizeMultipliers];
      
      const automationPercentage = Math.round(industry.automation * 100);
      const timeSavings = Math.round(industry.efficiency * 100);
      const costSavings = Math.round(industry.cost * 100);
      const errorReduction = Math.round((state.errorRate * 0.9) * 100) / 100;
      
      const monthlySavings = (state.monthlyTransactions * state.laborCost * industry.cost) * size;
      const annualSavings = monthlySavings * 12;
      const implementationCost = annualSavings * 0.3; // 30% of annual savings
      const roi = Math.round(((annualSavings - implementationCost) / implementationCost) * 100);
      const paybackPeriod = Math.round((implementationCost / monthlySavings) * 10) / 10;
      
      setResults({
        automationPercentage,
        timeSavings,
        costSavings,
        errorReduction,
        roi,
        paybackPeriod
      });
      
      setIsCalculating(false);
    }, 1000);
  };

  const handleInputChange = (field: keyof CalculatorState, value: string | number) => {
    setState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI Automation ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential impact of AI automation on your business. Get instant insights into cost savings, efficiency gains, and ROI projections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={state.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-200 employees)</option>
                  <option value="large">Large (201-1000 employees)</option>
                  <option value="enterprise">Enterprise (1000+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={state.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="finance">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Manual Processes
                </label>
                <input
                  type="number"
                  value={state.currentProcesses}
                  onChange={(e) => handleInputChange('currentProcesses', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                  max="1000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Transactions
                </label>
                <input
                  type="number"
                  value={state.monthlyTransactions}
                  onChange={(e) => handleInputChange('monthlyTransactions', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="100"
                  max="1000000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Processing Time (days)
                </label>
                <input
                  type="number"
                  value={state.averageProcessingTime}
                  onChange={(e) => handleInputChange('averageProcessingTime', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                  max="30"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Error Rate (%)
                </label>
                <input
                  type="number"
                  value={state.errorRate}
                  onChange={(e) => handleInputChange('errorRate', parseFloat(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  max="50"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Labor Cost per Transaction ($)
                </label>
                <input
                  type="number"
                  value={state.laborCost}
                  onChange={(e) => handleInputChange('laborCost', parseFloat(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                  max="1000"
                  step="0.01"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Automation Impact</h3>
            
            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-4 text-gray-600">Calculating your AI potential...</span>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {results.automationPercentage}%
                    </div>
                    <div className="text-sm text-gray-600">Process Automation</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {results.timeSavings}%
                    </div>
                    <div className="text-sm text-gray-600">Time Savings</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {results.costSavings}%
                    </div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {results.errorReduction}%
                    </div>
                    <div className="text-sm text-gray-600">Error Reduction</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Financial Impact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600 mb-1">
                        {results.roi}%
                      </div>
                      <div className="text-sm text-gray-600">Projected ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {results.paybackPeriod}
                      </div>
                      <div className="text-sm text-gray-600">Months Payback</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Estimated Annual Savings</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ${Math.round((state.monthlyTransactions * state.laborCost * (results.costSavings / 100)) * 12).toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on your current transaction volume and processing costs
                  </p>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                  >
                    Get Detailed Analysis
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center block"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join 500+ companies that have already transformed their operations with our AI automation solutions. 
            Get a free consultation and discover how AI can revolutionize your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Our AI Services
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAICalculator2026;