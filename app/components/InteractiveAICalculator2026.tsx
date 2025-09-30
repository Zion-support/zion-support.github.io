'use client';
import React, { useState } from 'react';

export default function InteractiveAICalculator2026() {
  const [budget, setBudget] = useState('');
  const [employees, setEmployees] = useState('');
  const [industry, setIndustry] = useState('');
  const [results, setResults] = useState(null);

  const calculateROI = () => {
    if (!budget || !employees) return;
    
    const annualBudget = parseFloat(budget);
    const employeeCount = parseInt(employees);
    
    // AI implementation cost (typically 15-25% of annual IT budget)
    const implementationCost = annualBudget * 0.20;
    
    // Annual savings calculations
    const automationSavings = annualBudget * 0.30; // 30% from automation
    const efficiencyGains = annualBudget * 0.25; // 25% from efficiency
    const errorReduction = annualBudget * 0.15; // 15% from error reduction
    const totalAnnualSavings = automationSavings + efficiencyGains + errorReduction;
    
    // ROI calculation
    const netSavings = totalAnnualSavings - implementationCost;
    const roi = ((netSavings / implementationCost) * 100).toFixed(0);
    const paybackPeriod = (implementationCost / netSavings * 12).toFixed(1);
    
    // Industry-specific multipliers
    const industryMultipliers = {
      'manufacturing': 1.4,
      'healthcare': 1.3,
      'finance': 1.2,
      'retail': 1.1,
      'technology': 1.0,
      'other': 1.0
    };
    
    const multiplier = industryMultipliers[industry] || 1.0;
    const adjustedSavings = totalAnnualSavings * multiplier;
    const adjustedROI = ((adjustedSavings - implementationCost) / implementationCost * 100).toFixed(0);
    
    setResults({
      implementationCost,
      totalAnnualSavings: adjustedSavings,
      netSavings: adjustedSavings - implementationCost,
      roi: adjustedROI,
      paybackPeriod: (implementationCost / (adjustedSavings - implementationCost) * 12).toFixed(1),
      automationSavings: automationSavings * multiplier,
      efficiencyGains: efficiencyGains * multiplier,
      errorReduction: errorReduction * multiplier
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential return on investment with AI implementation. 
            Discover how much you could save with our proven AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your AI ROI</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual IT Budget (USD)
                </label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your annual IT budget"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter number of employees"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <button
                onClick={calculateROI}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Calculate My AI ROI
              </button>
            </div>
          </div>
          
          {/* Results Display */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI ROI Projection</h3>
            
            {results ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {results.roi}%
                    </div>
                    <div className="text-lg text-gray-700">Annual ROI</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      ${(results.totalAnnualSavings / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {results.paybackPeriod} months
                    </div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Savings Breakdown:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Automation Savings</span>
                      <span className="font-semibold">${(results.automationSavings / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Efficiency Gains</span>
                      <span className="font-semibold">${(results.efficiencyGains / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Error Reduction</span>
                      <span className="font-semibold">${(results.errorReduction / 1000).toFixed(0)}K</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Implementation Investment</h4>
                  <div className="text-2xl font-bold text-blue-600">
                    ${(results.implementationCost / 1000).toFixed(0)}K
                  </div>
                  <p className="text-sm text-blue-700 mt-1">
                    One-time implementation cost (20% of IT budget)
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-lg">Enter your information above to see your AI ROI projection</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve These Results?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our AI solutions have helped companies achieve 300% ROI and save millions annually. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}