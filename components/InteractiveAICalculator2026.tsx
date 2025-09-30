'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveAICalculator2026() {
  const [companySize, setCompanySize] = useState('medium');
  const [industry, setIndustry] = useState('manufacturing');
  const [currentEfficiency, setCurrentEfficiency] = useState(70);
  const [annualRevenue, setAnnualRevenue] = useState(10000000);

  const calculateROI = () => {
    const baseROI = 300;
    const sizeMultiplier = companySize === 'small' ? 0.8 : companySize === 'medium' ? 1.0 : 1.2;
    const industryMultiplier = industry === 'manufacturing' ? 1.2 : industry === 'finance' ? 1.1 : 1.0;
    const efficiencyMultiplier = (100 - currentEfficiency) / 30; // Higher improvement potential = higher ROI
    
    return Math.round(baseROI * sizeMultiplier * industryMultiplier * efficiencyMultiplier);
  };

  const calculateSavings = () => {
    const baseSavings = 0.15; // 15% of revenue
    const sizeMultiplier = companySize === 'small' ? 0.5 : companySize === 'medium' ? 1.0 : 1.5;
    const industryMultiplier = industry === 'manufacturing' ? 1.3 : industry === 'finance' ? 1.2 : 1.0;
    
    return Math.round(annualRevenue * baseSavings * sizeMultiplier * industryMultiplier);
  };

  const calculateEfficiencyGain = () => {
    const baseGain = 90;
    const efficiencyMultiplier = (100 - currentEfficiency) / 30;
    
    return Math.round(baseGain * efficiencyMultiplier);
  };

  const roi = calculateROI();
  const savings = calculateSavings();
  const efficiencyGain = calculateEfficiencyGain();

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your potential AI transformation ROI with our interactive calculator. 
            Get personalized projections based on your company's specific metrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Calculate Your AI ROI</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Company Size
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'small', label: 'Small (1-50)', desc: 'Employees' },
                    { value: 'medium', label: 'Medium (51-500)', desc: 'Employees' },
                    { value: 'large', label: 'Large (500+)', desc: 'Employees' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setCompanySize(option.value)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        companySize === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-xs text-gray-500">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Current Operational Efficiency: {currentEfficiency}%
                </label>
                <input
                  type="range"
                  min="30"
                  max="95"
                  value={currentEfficiency}
                  onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Low (30%)</span>
                  <span>High (95%)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Annual Revenue (USD)
                </label>
                <input
                  type="number"
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your annual revenue"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-8">Your AI Transformation Projections</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-yellow-300 mb-2">{roi}%</div>
                <div className="text-lg font-semibold mb-2">Expected ROI</div>
                <div className="text-sm opacity-90">
                  Return on investment within 12-18 months
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-green-300 mb-2">${savings.toLocaleString()}</div>
                <div className="text-lg font-semibold mb-2">Annual Savings</div>
                <div className="text-sm opacity-90">
                  Projected cost savings from AI automation
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-300 mb-2">{efficiencyGain}%</div>
                <div className="text-lg font-semibold mb-2">Efficiency Improvement</div>
                <div className="text-sm opacity-90">
                  Expected operational efficiency gain
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-purple-300 mb-2">12-18</div>
                <div className="text-lg font-semibold mb-2">Months to ROI</div>
                <div className="text-sm opacity-90">
                  Time to achieve positive ROI
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                <h4 className="font-bold mb-2">What's Included:</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Complete AI strategy and roadmap</li>
                  <li>• Data infrastructure setup</li>
                  <li>• AI model development and deployment</li>
                  <li>• Team training and change management</li>
                  <li>• 24/7 support and monitoring</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/services/ai-enterprise-transformation"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Call +1 302 464 0950
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            * Projections are based on industry averages and may vary based on specific implementation details.
          </p>
          <Link
            href="/case-studies/ai-enterprise-transformation-mega-success-2026"
            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View Real Success Stories →
          </Link>
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
          box-shadow: 0 0 0 2px white, 0 0 0 4px #3B82F6;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 2px white, 0 0 0 4px #3B82F6;
        }
      `}</style>
    </section>
  );
}