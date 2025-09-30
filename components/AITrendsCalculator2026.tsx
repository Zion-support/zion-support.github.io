import React, { useState } from 'react';

export default function AITrendsCalculator2026() {
  const [industry, setIndustry] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [currentAutomation, setCurrentAutomation] = useState(0);
  const [budget, setBudget] = useState('');

  const calculateROI = () => {
    if (!industry || !companySize || !budget) return null;

    const sizeMultiplier = {
      'startup': 1.5,
      'small': 1.2,
      'medium': 1.0,
      'large': 0.8,
      'enterprise': 0.6
    };

    const industryMultiplier = {
      'manufacturing': 2.5,
      'healthcare': 2.0,
      'finance': 1.8,
      'retail': 2.2,
      'technology': 1.5,
      'other': 1.0
    };

    const budgetMultiplier = {
      'under-100k': 0.3,
      '100k-500k': 0.6,
      '500k-1m': 1.0,
      '1m-5m': 1.5,
      'over-5m': 2.0
    };

    const baseROI = 150; // 150% base ROI
    const automationGap = (95 - currentAutomation) / 100; // Gap to 95% automation
    const multiplier = sizeMultiplier[companySize] * industryMultiplier[industry] * budgetMultiplier[budget];
    
    const projectedROI = Math.round(baseROI * multiplier * automationGap);
    const projectedSavings = Math.round(parseInt(budget.replace(/[^0-9]/g, '')) * (projectedROI / 100));
    const paybackPeriod = Math.round(12 / (projectedROI / 100));

    return {
      roi: projectedROI,
      savings: projectedSavings,
      payback: paybackPeriod,
      automation: Math.min(currentAutomation + (projectedROI / 10), 95)
    };
  };

  const results = calculateROI();

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI Transformation ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your potential ROI and transformation impact with our AI trends calculator. 
            Get personalized insights based on your industry, company size, and investment level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Financial Services</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select company size</option>
                  <option value="startup">Startup (1-10 employees)</option>
                  <option value="small">Small (11-50 employees)</option>
                  <option value="medium">Medium (51-200 employees)</option>
                  <option value="large">Large (201-1000 employees)</option>
                  <option value="enterprise">Enterprise (1000+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Level: {currentAutomation}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="95"
                  value={currentAutomation}
                  onChange={(e) => setCurrentAutomation(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0% Manual</span>
                  <span>95% Automated</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  AI Investment Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-100k">Under $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="over-5m">Over $5M</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Your AI Transformation Potential</h3>
            
            {results ? (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300 mb-2">
                      {results.roi}%
                    </div>
                    <div className="text-lg opacity-90">Projected ROI</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-300 mb-1">
                      ${results.savings.toLocaleString()}
                    </div>
                    <div className="text-sm opacity-75">Annual Savings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-300 mb-1">
                      {results.payback}
                    </div>
                    <div className="text-sm opacity-75">Months Payback</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Automation Level</span>
                    <span className="text-sm font-semibold">{Math.round(results.automation)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${results.automation}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold mb-2">Key Benefits:</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• 99.9% system uptime</li>
                    <li>• Real-time decision making</li>
                    <li>• Zero-touch operations</li>
                    <li>• Predictive maintenance</li>
                    <li>• Intelligent automation</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🧮</span>
                </div>
                <p className="text-lg opacity-75">
                  Fill in your business details to see your AI transformation potential
                </p>
              </div>
            )}
          </div>
        </div>

        {results && (
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your AI Transformation?
              </h3>
              <p className="text-gray-600 mb-6">
                Based on your profile, you could achieve {results.roi}% ROI with our AI solutions. 
                Let's discuss how to make this a reality for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-all"
                >
                  View Success Stories
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}