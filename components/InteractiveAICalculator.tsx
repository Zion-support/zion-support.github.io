'use client';

import React, { useState } from 'react';

export default function InteractiveAICalculator() {
  const [inputs, setInputs] = useState({
    employees: 100,
    monthlyRevenue: 1000000,
    currentEfficiency: 70,
    industry: 'manufacturing'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const { employees, monthlyRevenue, currentEfficiency, industry } = inputs;
    
    // Industry multipliers
    const industryMultipliers = {
      manufacturing: 1.2,
      healthcare: 1.1,
      finance: 1.3,
      retail: 1.0,
      technology: 1.4
    };

    const multiplier = industryMultipliers[industry] || 1.0;
    
    // Calculate potential improvements
    const efficiencyGain = (100 - currentEfficiency) * 0.8; // 80% of potential efficiency gain
    const newEfficiency = currentEfficiency + efficiencyGain;
    
    // Calculate savings
    const monthlySavings = (monthlyRevenue * (efficiencyGain / 100)) * multiplier;
    const annualSavings = monthlySavings * 12;
    
    // Calculate implementation costs (typically 10-15% of annual revenue)
    const implementationCost = monthlyRevenue * 12 * 0.12;
    
    // Calculate ROI
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / monthlySavings;

    setResults({
      efficiencyGain: efficiencyGain.toFixed(1),
      newEfficiency: newEfficiency.toFixed(1),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      implementationCost: Math.round(implementationCost),
      roi: roi.toFixed(0),
      paybackPeriod: paybackPeriod.toFixed(1)
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Calculate Your AI Transformation ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential impact of AI implementation on your business with our 
            interactive calculator. Get instant insights into efficiency gains, cost savings, and ROI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Business Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => setInputs({...inputs, employees: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.monthlyRevenue}
                  onChange={(e) => setInputs({...inputs, monthlyRevenue: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1000000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Efficiency (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={inputs.currentEfficiency}
                  onChange={(e) => setInputs({...inputs, currentEfficiency: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="70"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => setInputs({...inputs, industry: e.target.value})}
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
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Calculate AI ROI
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI Transformation Potential</h3>
            
            {results ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Efficiency Improvements</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">+{results.efficiencyGain}%</div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{results.newEfficiency}%</div>
                      <div className="text-sm text-gray-600">New Efficiency</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Financial Impact</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monthly Savings:</span>
                      <span className="font-bold text-green-600">${results.monthlySavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Annual Savings:</span>
                      <span className="font-bold text-green-600">${results.annualSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Implementation Cost:</span>
                      <span className="font-bold text-blue-600">${results.implementationCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">ROI Analysis</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">{results.roi}%</div>
                      <div className="text-sm text-gray-600">Annual ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">{results.paybackPeriod}</div>
                      <div className="text-sm text-gray-600">Months to Payback</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Next Steps</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Ready to transform your business with AI? Our experts can help you implement 
                    these improvements and achieve even better results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/services"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center text-sm"
                    >
                      Explore AI Services
                    </a>
                    <a
                      href="/contact"
                      className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center text-sm"
                    >
                      Get Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-gray-600">
                  Enter your business details and click "Calculate AI ROI" to see your potential results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}