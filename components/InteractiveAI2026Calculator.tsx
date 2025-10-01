import React, { useState } from 'react';

export default function InteractiveAI2026Calculator() {
  const [inputs, setInputs] = useState({
    companySize: '100-500',
    industry: 'manufacturing',
    currentEfficiency: 60,
    annualRevenue: 10000000,
    automationLevel: 30
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const sizeMultiplier = {
      '1-50': 0.5,
      '51-100': 0.8,
      '101-500': 1.2,
      '501-1000': 1.5,
      '1000+': 2.0
    };

    const industryMultiplier = {
      'manufacturing': 1.3,
      'healthcare': 1.1,
      'finance': 1.4,
      'retail': 1.0,
      'technology': 1.2,
      'other': 1.0
    };

    const baseEfficiencyGain = (100 - inputs.currentEfficiency) * 0.9;
    const automationImpact = inputs.automationLevel * 0.8;
    const totalEfficiencyGain = baseEfficiencyGain + automationImpact;
    
    const annualSavings = (inputs.annualRevenue * 0.15 * totalEfficiencyGain / 100) * 
                         sizeMultiplier[inputs.companySize] * 
                         industryMultiplier[inputs.industry];
    
    const implementationCost = inputs.annualRevenue * 0.05 * sizeMultiplier[inputs.companySize];
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / (annualSavings / 12);

    setResults({
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      efficiencyGain: Math.round(totalEfficiencyGain),
      costReduction: Math.round(totalEfficiencyGain * 0.7)
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          AI Transformation ROI Calculator 2026
        </h3>
        <p className="text-lg text-gray-600">
          Calculate your potential returns from AI transformation with our advanced calculator
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Size
            </label>
            <select
              value={inputs.companySize}
              onChange={(e) => setInputs({...inputs, companySize: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1-50">1-50 employees</option>
              <option value="51-100">51-100 employees</option>
              <option value="101-500">101-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
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
              <option value="finance">Financial Services</option>
              <option value="retail">Retail</option>
              <option value="technology">Technology</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Efficiency Level: {inputs.currentEfficiency}%
            </label>
            <input
              type="range"
              min="20"
              max="90"
              value={inputs.currentEfficiency}
              onChange={(e) => setInputs({...inputs, currentEfficiency: parseInt(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>20%</span>
              <span>90%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Annual Revenue ($)
            </label>
            <input
              type="number"
              value={inputs.annualRevenue}
              onChange={(e) => setInputs({...inputs, annualRevenue: parseInt(e.target.value)})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="10,000,000"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Automation Level: {inputs.automationLevel}%
            </label>
            <input
              type="range"
              min="0"
              max="80"
              value={inputs.automationLevel}
              onChange={(e) => setInputs({...inputs, automationLevel: parseInt(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>80%</span>
            </div>
          </div>

          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Calculate My AI ROI
          </button>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {results ? (
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900 text-center mb-6">
                Your AI Transformation Results
              </h4>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {results.roi}%
                  </div>
                  <div className="text-gray-700 font-semibold">Expected ROI</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    ${(results.annualSavings / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {results.paybackPeriod}
                  </div>
                  <div className="text-sm text-gray-600">Months to ROI</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {results.efficiencyGain}%
                  </div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
                <div className="bg-teal-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-1">
                    {results.costReduction}%
                  </div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-lg p-6 text-center">
                <h5 className="font-semibold mb-2">Ready to Start Your AI Transformation?</h5>
                <p className="text-sm opacity-90 mb-4">
                  Get a free consultation to discuss your specific needs
                </p>
                <a
                  href="tel:+13024640950"
                  className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Calculate Your AI ROI
              </h4>
              <p className="text-gray-600">
                Fill in the form and click "Calculate My AI ROI" to see your potential returns
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}