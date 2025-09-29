import React, { useState } from 'react';

interface CalculatorResults {
  efficiencyGain: number;
  costSavings: number;
  productivityIncrease: number;
  roi: number;
}

export default function InteractiveAICalculator() {
  const [inputs, setInputs] = useState({
    employees: 100,
    annualRevenue: 10000000,
    currentEfficiency: 70,
    industry: 'manufacturing'
  });

  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    manufacturing: { efficiency: 1.2, cost: 0.85, productivity: 1.15 },
    healthcare: { efficiency: 1.1, cost: 0.90, productivity: 1.10 },
    finance: { efficiency: 1.3, cost: 0.80, productivity: 1.20 },
    retail: { efficiency: 1.15, cost: 0.88, productivity: 1.12 },
    technology: { efficiency: 1.25, cost: 0.82, productivity: 1.18 }
  };

  const calculateAIImpact = async () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 2000));

    const multiplier = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
    
    const efficiencyGain = Math.min(95, (100 - inputs.currentEfficiency) * multiplier.efficiency);
    const costSavings = (inputs.annualRevenue * 0.15 * multiplier.cost) / 1000000; // Convert to millions
    const productivityIncrease = Math.min(400, (100 - inputs.currentEfficiency) * multiplier.productivity);
    const roi = (costSavings * 1000000 * 3) / (inputs.employees * 50000) * 100; // 3-year ROI

    setResults({
      efficiencyGain: Math.round(efficiencyGain),
      costSavings: Math.round(costSavings * 10) / 10,
      productivityIncrease: Math.round(productivityIncrease),
      roi: Math.round(roi)
    });

    setIsCalculating(false);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          AI Transformation ROI Calculator
        </h2>
        <p className="text-lg text-gray-600">
          Calculate the potential impact of AI transformation on your organization
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Organization Details</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Employees
            </label>
            <input
              type="number"
              value={inputs.employees}
              onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="1"
              max="100000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Revenue ($)
            </label>
            <input
              type="number"
              value={inputs.annualRevenue}
              onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="100000"
              step="100000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Efficiency (%)
            </label>
            <input
              type="range"
              min="30"
              max="95"
              value={inputs.currentEfficiency}
              onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>30%</span>
              <span className="font-semibold text-blue-600">{inputs.currentEfficiency}%</span>
              <span>95%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={inputs.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
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
            onClick={calculateAIImpact}
            disabled={isCalculating}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalculating ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Calculating...
              </div>
            ) : (
              'Calculate AI Impact'
            )}
          </button>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Projected Results</h3>
          
          {results ? (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    +{results.efficiencyGain}%
                  </div>
                  <div className="text-gray-700 font-medium">Efficiency Gain</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Expected improvement in operational efficiency
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    ${results.costSavings}M
                  </div>
                  <div className="text-gray-700 font-medium">Annual Cost Savings</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Projected reduction in operational costs
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    +{results.productivityIncrease}%
                  </div>
                  <div className="text-gray-700 font-medium">Productivity Increase</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Expected boost in employee productivity
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    {results.roi}%
                  </div>
                  <div className="text-gray-700 font-medium">3-Year ROI</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Return on investment over 3 years
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Key Insights</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• AI implementation typically pays for itself within 12-18 months</li>
                  <li>• Larger organizations see proportionally higher benefits</li>
                  <li>• Manufacturing and finance sectors show the highest ROI</li>
                  <li>• Cognitive enhancement can boost productivity by 300%+</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧮</span>
              </div>
              <p className="text-gray-500">
                Enter your organization details and click "Calculate AI Impact" to see your personalized results
              </p>
            </div>
          )}
        </div>
      </div>

      {results && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Ready to Transform Your Organization?
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Download Report
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 0 2px 0 #555;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 2px 0 #555;
        }
      `}</style>
    </div>
  );
}