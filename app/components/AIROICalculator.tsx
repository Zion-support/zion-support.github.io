import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Zap } from 'lucide-react';



import { DollarSign, TrendingUp, Zap } from 'lucide-react';

export default function AIROICalculator() {
  const [annualRevenue, setAnnualRevenue] = useState(1000000);
  const [currentEfficiency, setCurrentEfficiency] = useState(70);
  const [aiImplementationCost, setAiImplementationCost] = useState(100000);

  const efficiencyGain = 95 - currentEfficiency;
  const potentialSavings = (annualRevenue * efficiencyGain) / 100;
  const roi = ((potentialSavings - aiImplementationCost) / aiImplementationCost) * 100;
  const paybackPeriod = aiImplementationCost / (potentialSavings / 12);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">AI ROI Calculator</h3>
        <p className="text-gray-600">Calculate your potential return on investment with AI transformation</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Revenue ($)
          </label>
          <input
            type="number"
            value={annualRevenue}
            onChange={(e) => setAnnualRevenue(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            value={currentEfficiency}
            onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AI Implementation Cost ($)
          </label>
          <input
            type="number"
            value={aiImplementationCost}
            onChange={(e) => setAiImplementationCost(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900">Potential ROI</h4>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">
            {roi > 0 ? `+${roi.toFixed(0)}%` : `${roi.toFixed(0)}%`}
          </div>
          <p className="text-sm text-gray-600">
            {roi > 0 ? 'Excellent investment opportunity' : 'Consider optimizing parameters'}
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900">Annual Savings</h4>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            ${(potentialSavings / 1000000).toFixed(1)}M
          </div>
          <p className="text-sm text-gray-600">
            Based on {efficiencyGain}% efficiency gain
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900">Payback Period</h4>
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {paybackPeriod.toFixed(1)} months
          </div>
          <p className="text-sm text-gray-600">
            Time to recover investment
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
        <h4 className="font-semibold text-gray-900 mb-3">Key Assumptions</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• AI systems can achieve up to 95% operational efficiency</li>
          <li>• Efficiency gains translate directly to cost savings</li>
          <li>• Implementation costs are one-time investments</li>
          <li>• Results may vary based on industry and implementation quality</li>
        </ul>
      </div>
    </div>
  );
}