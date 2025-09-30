import React, { useState, useEffect } from 'react';

export default function InteractiveAI2027Calculator() {
  const [companySize, setCompanySize] = useState('medium');
  const [industry, setIndustry] = useState('manufacturing');
  const [aiMaturity, setAiMaturity] = useState('beginner');
  const [budget, setBudget] = useState(100000);
  const [timeframe, setTimeframe] = useState(12);
  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const sizeMultiplier = {
      small: 1.2,
      medium: 1.0,
      large: 0.8,
      enterprise: 0.6
    };

    const industryMultiplier = {
      manufacturing: 2.5,
      healthcare: 2.2,
      finance: 2.0,
      retail: 1.8,
      technology: 1.5,
      education: 1.3
    };

    const maturityMultiplier = {
      beginner: 3.0,
      intermediate: 2.0,
      advanced: 1.5,
      expert: 1.2
    };

    const baseROI = 400; // 400% base ROI for 2027
    const efficiencyGain = 95; // 95% efficiency improvement
    const costReduction = 85; // 85% cost reduction
    
    const multiplier = sizeMultiplier[companySize] * industryMultiplier[industry] * maturityMultiplier[aiMaturity];
    
    const calculatedROI = Math.round(baseROI * multiplier);
    const calculatedSavings = Math.round(budget * (calculatedROI / 100));
    const monthlySavings = Math.round(calculatedSavings / timeframe);
    const efficiencyImprovement = Math.min(95, Math.round(efficiencyGain * multiplier));
    const costReductionPercent = Math.min(85, Math.round(costReduction * multiplier));

    setResults({
      roi: calculatedROI,
      totalSavings: calculatedSavings,
      monthlySavings: monthlySavings,
      efficiencyGain: efficiencyImprovement,
      costReduction: costReductionPercent,
      paybackPeriod: Math.round(timeframe * (100 / calculatedROI))
    });
  };

  useEffect(() => {
    calculateROI();
  }, [companySize, industry, aiMaturity, budget, timeframe]);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            🚀 AI 2027 ROI CALCULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Calculate Your AI 2027 Transformation ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential returns from implementing cutting-edge AI technologies in 2027. 
            Get personalized ROI projections based on your business profile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Company Size
                </label>
                <select
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-500 employees)</option>
                  <option value="large">Large (501-5000 employees)</option>
                  <option value="enterprise">Enterprise (5000+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="education">Education</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Current AI Maturity Level
                </label>
                <select
                  value={aiMaturity}
                  onChange={(e) => setAiMaturity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="beginner">Beginner (No AI implementation)</option>
                  <option value="intermediate">Intermediate (Basic AI tools)</option>
                  <option value="advanced">Advanced (AI-integrated processes)</option>
                  <option value="expert">Expert (AI-native organization)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Investment Budget ($)
                </label>
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$10K</span>
                  <span className="font-semibold text-indigo-600">${budget.toLocaleString()}</span>
                  <span>$1M</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Implementation Timeframe (months)
                </label>
                <input
                  type="range"
                  min="6"
                  max="24"
                  step="1"
                  value={timeframe}
                  onChange={(e) => setTimeframe(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>6 months</span>
                  <span className="font-semibold text-indigo-600">{timeframe} months</span>
                  <span>24 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {results && (
              <>
                {/* Main ROI Card */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">{results.roi}%</div>
                    <div className="text-xl opacity-90 mb-6">Expected ROI</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-2xl font-bold">${results.totalSavings.toLocaleString()}</div>
                        <div className="text-sm opacity-90">Total Savings</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-2xl font-bold">{results.paybackPeriod}</div>
                        <div className="text-sm opacity-90">Months Payback</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{results.efficiencyGain}%</div>
                    <div className="text-gray-700 font-semibold">Efficiency Gain</div>
                    <div className="text-sm text-gray-500">Operational improvement</div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{results.costReduction}%</div>
                    <div className="text-gray-700 font-semibold">Cost Reduction</div>
                    <div className="text-sm text-gray-500">Process optimization</div>
                  </div>
                </div>

                {/* Monthly Savings */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">${results.monthlySavings.toLocaleString()}</div>
                      <div className="text-gray-600">Monthly savings starting month {results.paybackPeriod}</div>
                    </div>
                  </div>
                </div>

                {/* 2027 AI Technologies */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">2027 AI Technologies Included</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700">Quantum AI Computing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700">Neural Interfaces</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700">Autonomous AI Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700">Edge AI Processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700">Generative AI 3.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700">AI Security Suite</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white text-center">
                  <h4 className="text-xl font-bold mb-2">Ready to Achieve These Results?</h4>
                  <p className="opacity-90 mb-4">Start your AI transformation journey today</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="/services"
                      className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Explore Services
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                    >
                      Call +1 302 464 0950
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            * ROI projections are based on industry averages and may vary based on implementation quality, 
            market conditions, and business-specific factors. Results are not guaranteed and should be 
            considered estimates for planning purposes.
          </p>
        </div>
      </div>
    </section>
  );
}