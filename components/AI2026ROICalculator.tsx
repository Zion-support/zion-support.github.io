import React, { useState } from 'react';

export default function AI2026ROICalculator() {
  const [inputs, setInputs] = useState({
    annualRevenue: 10000000,
    currentEfficiency: 75,
    aiImplementationCost: 2000000,
    expectedEfficiencyGain: 25,
    timeToImplement: 18,
    industry: 'manufacturing'
  });

  const [results, setResults] = useState(null);

  const industryMultipliers = {
    manufacturing: 1.2,
    healthcare: 1.1,
    finance: 1.3,
    retail: 1.0,
    technology: 1.4,
    logistics: 1.1
  };

  const calculateROI = () => {
    const {
      annualRevenue,
      currentEfficiency,
      aiImplementationCost,
      expectedEfficiencyGain,
      timeToImplement,
      industry
    } = inputs;

    const efficiencyGain = expectedEfficiencyGain / 100;
    const industryMultiplier = industryMultipliers[industry] || 1.0;
    
    // Calculate annual savings
    const currentProductivity = annualRevenue * (currentEfficiency / 100);
    const newEfficiency = currentEfficiency + expectedEfficiencyGain;
    const newProductivity = annualRevenue * (newEfficiency / 100);
    const annualSavings = (newProductivity - currentProductivity) * industryMultiplier;
    
    // Calculate ROI
    const totalSavings = annualSavings * (timeToImplement / 12);
    const roi = ((totalSavings - aiImplementationCost) / aiImplementationCost) * 100;
    
    // Calculate payback period
    const monthlySavings = annualSavings / 12;
    const paybackPeriod = aiImplementationCost / monthlySavings;

    setResults({
      annualSavings: Math.round(annualSavings),
      totalSavings: Math.round(totalSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      netBenefit: Math.round(totalSavings - aiImplementationCost)
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI 2026 ROI Calculator</h2>
        <p className="text-gray-600">
          Calculate the potential return on investment for your AI transformation using 2026 technologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Input Parameters</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Revenue ($)
            </label>
            <input
              type="number"
              value={inputs.annualRevenue}
              onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Efficiency (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={inputs.currentEfficiency}
              onChange={(e) => handleInputChange('currentEfficiency', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Efficiency Gain (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={inputs.expectedEfficiencyGain}
              onChange={(e) => handleInputChange('expectedEfficiencyGain', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Implementation Cost ($)
            </label>
            <input
              type="number"
              value={inputs.aiImplementationCost}
              onChange={(e) => handleInputChange('aiImplementationCost', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Timeline (months)
            </label>
            <input
              type="number"
              min="1"
              max="60"
              value={inputs.timeToImplement}
              onChange={(e) => handleInputChange('timeToImplement', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={inputs.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="manufacturing">Manufacturing</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
              <option value="technology">Technology</option>
              <option value="logistics">Logistics</option>
            </select>
          </div>

          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Calculate ROI
          </button>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Results</h3>
          
          {results ? (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {results.roi > 0 ? '+' : ''}{results.roi}%
                  </div>
                  <div className="text-sm text-green-700">Return on Investment</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    ${(results.annualSavings / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-xs text-blue-700">Annual Savings</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {results.paybackPeriod}
                  </div>
                  <div className="text-xs text-purple-700">Months to Payback</div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Financial Impact</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Savings:</span>
                    <span className="font-semibold">${(results.totalSavings / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Implementation Cost:</span>
                    <span className="font-semibold">${(inputs.aiImplementationCost / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-600">Net Benefit:</span>
                    <span className="font-semibold text-green-600">
                      ${(results.netBenefit / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">💡 Recommendations</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  {results.roi > 300 && <li>• Exceptional ROI - Proceed immediately</li>}
                  {results.roi > 100 && results.roi <= 300 && <li>• Strong ROI - Recommended investment</li>}
                  {results.roi > 50 && results.roi <= 100 && <li>• Good ROI - Consider pilot program</li>}
                  {results.roi <= 50 && <li>• Evaluate cost optimization opportunities</li>}
                  {results.paybackPeriod < 12 && <li>• Quick payback period - Low risk</li>}
                  {results.paybackPeriod >= 12 && <li>• Consider phased implementation</li>}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <p>Enter your parameters and click "Calculate ROI" to see results</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Start Your AI Transformation?</h3>
          <p className="text-gray-600 mb-4">
            Our expert team can help you implement these technologies and achieve similar results
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/resources/ai-2026-implementation-toolkit" 
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Download Toolkit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}