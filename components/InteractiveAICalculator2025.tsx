'use client';

import React, { useState } from 'react';

export default function InteractiveAICalculator2025() {
  const [companySize, setCompanySize] = useState('medium');
  const [industry, setIndustry] = useState('manufacturing');
  const [currentEfficiency, setCurrentEfficiency] = useState(70);
  const [budget, setBudget] = useState(100000);

  const calculateROI = () => {
    const baseROI = 300;
    const sizeMultiplier = companySize === 'small' ? 0.8 : companySize === 'medium' ? 1.0 : 1.2;
    const industryMultiplier = industry === 'manufacturing' ? 1.3 : industry === 'finance' ? 1.1 : 1.0;
    const efficiencyMultiplier = (100 - currentEfficiency) / 30; // Higher efficiency = lower potential gain
    
    return Math.round(baseROI * sizeMultiplier * industryMultiplier * efficiencyMultiplier);
  };

  const calculateSavings = () => {
    const baseSavings = budget * 0.7; // 70% cost reduction
    const sizeMultiplier = companySize === 'small' ? 0.5 : companySize === 'medium' ? 1.0 : 1.5;
    
    return Math.round(baseSavings * sizeMultiplier);
  };

  const calculateEfficiencyGain = () => {
    const baseGain = 90;
    const efficiencyMultiplier = (100 - currentEfficiency) / 30;
    
    return Math.round(baseGain * efficiencyMultiplier);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Interactive Calculator</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Calculate Your AI Transformation ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential impact of AI transformation on your business with our interactive calculator. 
            Get personalized estimates based on your specific industry and requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Business Profile</h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Company Size
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'small', label: 'Small (1-50)', desc: 'Startup to Mid-size' },
                    { value: 'medium', label: 'Medium (51-500)', desc: 'Growing Company' },
                    { value: 'large', label: 'Large (500+)', desc: 'Enterprise' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setCompanySize(option.value)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        companySize === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300 text-gray-700'
                      }`}
                    >
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-sm opacity-75">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-700"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="finance">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="technology">Technology</option>
                  <option value="logistics">Logistics & Supply Chain</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Current Process Efficiency: {currentEfficiency}%
                </label>
                <input
                  type="range"
                  min="30"
                  max="95"
                  value={currentEfficiency}
                  onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>Low Efficiency</span>
                  <span>High Efficiency</span>
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Annual IT Budget: ${budget.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="25000"
                  max="1000000"
                  step="25000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$25K</span>
                  <span>$1M+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Your AI Transformation Potential</h3>
            
            <div className="space-y-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Projected ROI</h4>
                  <span className="text-3xl font-bold text-yellow-300">{calculateROI()}%</span>
                </div>
                <p className="text-sm opacity-90">
                  Expected return on investment within 12-18 months of AI implementation
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Annual Savings</h4>
                  <span className="text-3xl font-bold text-green-300">${calculateSavings().toLocaleString()}</span>
                </div>
                <p className="text-sm opacity-90">
                  Estimated annual cost savings from AI automation and optimization
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Efficiency Gain</h4>
                  <span className="text-3xl font-bold text-cyan-300">{calculateEfficiencyGain()}%</span>
                </div>
                <p className="text-sm opacity-90">
                  Expected improvement in operational efficiency and productivity
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Payback Period</h4>
                  <span className="text-3xl font-bold text-orange-300">
                    {Math.round(12 / (calculateROI() / 100))} months
                  </span>
                </div>
                <p className="text-sm opacity-90">
                  Estimated time to recover initial AI investment
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm opacity-90 mb-6">
                These estimates are based on industry benchmarks and our experience with similar implementations. 
                Actual results may vary based on specific implementation details.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Get Detailed Analysis
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group for Your AI Transformation?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Methodology</h4>
                <p className="text-gray-600 text-sm">
                  Our 5-phase AI transformation framework has delivered 300% ROI for 500+ companies
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Rapid Implementation</h4>
                <p className="text-gray-600 text-sm">
                  Average implementation time of 3-6 months with measurable results in 30 days
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-gray-600 text-sm">
                  Dedicated support team ensuring 99.9% uptime and continuous optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </section>
  );
}