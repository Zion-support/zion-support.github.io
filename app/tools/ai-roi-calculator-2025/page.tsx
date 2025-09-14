import React, { useState } from 'react';
import Link from 'next/link';

const AIROICalculator2025 = () => {
  const [inputs, setInputs] = useState({
    currentCosts: '',
    expectedEfficiency: '',
    implementationCost: '',
    timeline: '12',
    riskFactor: 'medium'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const currentCosts = parseFloat(inputs.currentCosts) || 0;
    const efficiency = parseFloat(inputs.expectedEfficiency) || 0;
    const implementationCost = parseFloat(inputs.implementationCost) || 0;
    const timeline = parseInt(inputs.timeline) || 12;
    const riskMultiplier = inputs.riskFactor === 'low' ? 0.9 : inputs.riskFactor === 'high' ? 1.2 : 1.0;

    const annualSavings = currentCosts * (efficiency / 100);
    const totalSavings = annualSavings * (timeline / 12);
    const netSavings = totalSavings - implementationCost;
    const roi = implementationCost > 0 ? ((netSavings / implementationCost) * 100) : 0;
    const paybackPeriod = annualSavings > 0 ? implementationCost / annualSavings : 0;

    setResults({
      annualSavings: annualSavings * riskMultiplier,
      totalSavings: totalSavings * riskMultiplier,
      netSavings: (totalSavings - implementationCost) * riskMultiplier,
      roi: roi * riskMultiplier,
      paybackPeriod: paybackPeriod / riskMultiplier
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 AI ROI CALCULATOR 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Implementation ROI Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Calculate the potential return on investment for your AI implementation project. 
            Get accurate projections based on industry benchmarks and real-world data.
          </p>
        </div>

        {/* Calculator Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Parameters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Annual Operational Costs ($)
              </label>
              <input
                type="number"
                value={inputs.currentCosts}
                onChange={(e) => setInputs({...inputs, currentCosts: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="1000000"
              />
              <p className="text-sm text-gray-500 mt-1">Total costs for the process you want to optimize</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Efficiency Improvement (%)
              </label>
              <input
                type="number"
                value={inputs.expectedEfficiency}
                onChange={(e) => setInputs({...inputs, expectedEfficiency: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="30"
              />
              <p className="text-sm text-gray-500 mt-1">Industry average: 25-40%</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI Implementation Cost ($)
              </label>
              <input
                type="number"
                value={inputs.implementationCost}
                onChange={(e) => setInputs({...inputs, implementationCost: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="200000"
              />
              <p className="text-sm text-gray-500 mt-1">One-time implementation costs</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Implementation Timeline (Months)
              </label>
              <select
                value={inputs.timeline}
                onChange={(e) => setInputs({...inputs, timeline: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="6">6 months</option>
                <option value="12">12 months</option>
                <option value="18">18 months</option>
                <option value="24">24 months</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Risk Factor
              </label>
              <div className="grid grid-cols-3 gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="riskFactor"
                    value="low"
                    checked={inputs.riskFactor === 'low'}
                    onChange={(e) => setInputs({...inputs, riskFactor: e.target.value})}
                    className="mr-2"
                  />
                  <span className="text-sm">Low Risk</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="riskFactor"
                    value="medium"
                    checked={inputs.riskFactor === 'medium'}
                    onChange={(e) => setInputs({...inputs, riskFactor: e.target.value})}
                    className="mr-2"
                  />
                  <span className="text-sm">Medium Risk</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="riskFactor"
                    value="high"
                    checked={inputs.riskFactor === 'high'}
                    onChange={(e) => setInputs({...inputs, riskFactor: e.target.value})}
                    className="mr-2"
                  />
                  <span className="text-sm">High Risk</span>
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={calculateROI}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 mt-6"
          >
            Calculate ROI
          </button>
        </div>

        {/* Results */}
        {results && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Analysis Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">
                  {results.roi.toFixed(0)}%
                </div>
                <div className="text-sm opacity-90">Return on Investment</div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">
                  ${(results.annualSavings / 1000).toFixed(0)}K
                </div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">
                  ${(results.totalSavings / 1000).toFixed(0)}K
                </div>
                <div className="text-sm opacity-90">Total Savings</div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">
                  {results.paybackPeriod.toFixed(1)}
                </div>
                <div className="text-sm opacity-90">Payback Period (Years)</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Analysis Summary</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• <strong>Net Savings:</strong> ${(results.netSavings / 1000).toFixed(0)}K over {inputs.timeline} months</p>
                <p>• <strong>ROI Rating:</strong> {results.roi > 200 ? 'Excellent' : results.roi > 100 ? 'Good' : results.roi > 50 ? 'Moderate' : 'Low'}</p>
                <p>• <strong>Risk-Adjusted:</strong> Results adjusted for {inputs.riskFactor} risk level</p>
                <p>• <strong>Recommendation:</strong> {results.roi > 100 ? 'Proceed with implementation' : 'Consider pilot project first'}</p>
              </div>
            </div>
          </div>
        )}

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Journey?</h3>
          <p className="text-lg opacity-90 mb-6">
            Get expert guidance and support for your AI implementation. Our team of specialists 
            can help you achieve even better results than projected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/blog/ai-2025-enterprise-transformation-complete-guide"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Read Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIROICalculator2025;