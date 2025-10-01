import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Clock, Target } from 'lucide-react';

interface ROIInputs {
  currentRevenue: number;
  currentEmployees: number;
  currentOperationalCosts: number;
  automationTarget: number; // percentage of processes to automate
  implementationTimeline: number; // months
}

interface ROICalculation {
  totalInvestment: number;
  annualSavings: number;
  revenueIncrease: number;
  roi: number;
  paybackPeriod: number;
  fiveYearValue: number;
}

export default function InteractiveAI2026ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    currentRevenue: 10000000,
    currentEmployees: 500,
    currentOperationalCosts: 5000000,
    automationTarget: 60,
    implementationTimeline: 18
  });

  const [results, setResults] = useState<ROICalculation | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = (): ROICalculation => {
    const { currentRevenue, currentEmployees, currentOperationalCosts, automationTarget, implementationTimeline } = inputs;

    // AI Implementation Cost Estimation
    const baseImplementationCost = currentRevenue * 0.02; // 2% of revenue
    const timelineMultiplier = implementationTimeline <= 12 ? 1.2 : implementationTimeline <= 18 ? 1.0 : 0.8;
    const totalInvestment = baseImplementationCost * timelineMultiplier;

    // Cost Savings Calculation
    const operationalSavings = currentOperationalCosts * (automationTarget / 100) * 0.35; // 35% savings on automated processes
    const employeeProductivity = currentEmployees * 150000 * (automationTarget / 100) * 0.25; // $150k avg salary, 25% productivity gain
    const annualSavings = operationalSavings + employeeProductivity;

    // Revenue Increase (from improved efficiency, customer satisfaction, etc.)
    const revenueIncrease = currentRevenue * (automationTarget / 100) * 0.08; // 8% revenue increase

    // ROI Calculation
    const roi = ((annualSavings + revenueIncrease) / totalInvestment) * 100;
    const paybackPeriod = totalInvestment / (annualSavings + revenueIncrease) * 12; // months
    const fiveYearValue = (annualSavings + revenueIncrease) * 5 - totalInvestment;

    return {
      totalInvestment,
      annualSavings,
      revenueIncrease,
      roi,
      paybackPeriod,
      fiveYearValue
    };
  };

  const handleCalculate = () => {
    const calculation = calculateROI();
    setResults(calculation);
    setShowResults(true);
  };

  const handleInputChange = (field: keyof ROIInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
    setShowResults(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-6 py-3 mb-6">
            <Calculator className="w-5 h-5 mr-2" />
            <span className="font-semibold">INTERACTIVE ROI CALCULATOR</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Transformation ROI
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized ROI estimates for your AI implementation based on real Fortune 500 success metrics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Business Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Annual Revenue
                </label>
                <input
                  type="number"
                  value={inputs.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="10000000"
                />
                <p className="text-sm text-gray-500 mt-1">Current annual revenue in USD</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="500"
                />
                <p className="text-sm text-gray-500 mt-1">Total employees in your organization</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  Annual Operational Costs
                </label>
                <input
                  type="number"
                  value={inputs.currentOperationalCosts}
                  onChange={(e) => handleInputChange('currentOperationalCosts', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="5000000"
                />
                <p className="text-sm text-gray-500 mt-1">Current operational expenses in USD</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Target className="w-4 h-4 inline mr-2" />
                  Automation Target (%)
                </label>
                <input
                  type="range"
                  min="20"
                  max="90"
                  value={inputs.automationTarget}
                  onChange={(e) => handleInputChange('automationTarget', Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>20%</span>
                  <span className="font-semibold">{inputs.automationTarget}%</span>
                  <span>90%</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Percentage of processes to automate</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Implementation Timeline (months)
                </label>
                <input
                  type="range"
                  min="6"
                  max="36"
                  value={inputs.implementationTimeline}
                  onChange={(e) => handleInputChange('implementationTimeline', Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>6 months</span>
                  <span className="font-semibold">{inputs.implementationTimeline} months</span>
                  <span>36 months</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Expected implementation timeline</p>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Calculate My ROI
            </button>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {showResults && results ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Your AI ROI Projection</h3>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                      <h4 className="text-lg font-bold text-green-800">Expected ROI</h4>
                    </div>
                    <div className="text-3xl font-bold text-green-700">
                      {results.roi.toFixed(0)}%
                    </div>
                    <p className="text-green-600 text-sm">Return on investment</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <h5 className="font-semibold text-blue-800 mb-1">Total Investment</h5>
                      <div className="text-xl font-bold text-blue-700">
                        {formatCurrency(results.totalInvestment)}
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <h5 className="font-semibold text-purple-800 mb-1">Payback Period</h5>
                      <div className="text-xl font-bold text-purple-700">
                        {results.paybackPeriod.toFixed(1)} months
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-6 h-6 text-orange-600 mr-3" />
                      <h4 className="text-lg font-bold text-orange-800">Annual Benefits</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-orange-700">Cost Savings:</span>
                        <span className="font-bold text-orange-800">{formatCurrency(results.annualSavings)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-700">Revenue Increase:</span>
                        <span className="font-bold text-orange-800">{formatCurrency(results.revenueIncrease)}</span>
                      </div>
                      <div className="border-t border-orange-300 pt-2">
                        <div className="flex justify-between">
                          <span className="text-orange-700 font-semibold">Total Annual Value:</span>
                          <span className="font-bold text-orange-800 text-lg">
                            {formatCurrency(results.annualSavings + results.revenueIncrease)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                    <div className="flex items-center mb-2">
                      <Target className="w-6 h-6 text-indigo-600 mr-3" />
                      <h4 className="text-lg font-bold text-indigo-800">5-Year Value</h4>
                    </div>
                    <div className="text-2xl font-bold text-indigo-700">
                      {formatCurrency(results.fiveYearValue)}
                    </div>
                    <p className="text-indigo-600 text-sm">Net value over 5 years</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">💡 Based on Real Fortune 500 Data</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Average Fortune 500 ROI: 156%</li>
                    <li>• Typical payback period: 12-18 months</li>
                    <li>• Average cost savings: 35% on automated processes</li>
                    <li>• Productivity gains: 25% for employees</li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Calculate?</h3>
                  <p className="text-gray-600">
                    Fill in your business details and click "Calculate My ROI" to see your personalized AI transformation projection.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your AI Transformation?
            </h3>
            <p className="text-gray-600 mb-6">
              Get our comprehensive implementation roadmap and expert guidance to achieve these results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/guides/ai-2026-implementation-roadmap"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Get Implementation Guide
              </a>
              <a 
                href="/case-studies/fortune-500-ai-transformation-success"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}