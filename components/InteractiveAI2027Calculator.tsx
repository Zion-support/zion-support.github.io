'use client';

import React, { useState, useEffect } from 'react';

export default function InteractiveAI2027Calculator() {
  const [companySize, setCompanySize] = useState(1000);
  const [currentAutomation, setCurrentAutomation] = useState(20);
  const [industry, setIndustry] = useState('manufacturing');
  const [results, setResults] = useState(null);

  const calculateSavings = () => {
    const baseMultiplier = {
      manufacturing: 1.2,
      healthcare: 1.1,
      finance: 1.3,
      retail: 1.0,
      technology: 1.4
    };

    const sizeMultiplier = Math.log10(companySize) / 3;
    const automationGap = 95 - currentAutomation;
    const industryMultiplier = baseMultiplier[industry] || 1.0;

    const annualSavings = Math.round(
      (companySize * 50 * sizeMultiplier * industryMultiplier * (automationGap / 75)) * 1000
    );

    const roi = Math.round((annualSavings / 500000) * 100);
    const efficiencyGain = Math.round(automationGap * 1.2);
    const timeToROI = Math.round(12 / (roi / 100));

    setResults({
      annualSavings,
      roi,
      efficiencyGain,
      timeToROI,
      newAutomationLevel: Math.min(95, currentAutomation + automationGap * 0.8)
    });
  };

  useEffect(() => {
    calculateSavings();
  }, [companySize, currentAutomation, industry]);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2027 ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential savings and ROI with our revolutionary AI 2027 solutions. 
            See how quantum-enhanced AI can transform your business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Configure Your Scenario</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size (Employees)
                </label>
                <input
                  type="range"
                  min="100"
                  max="100000"
                  step="100"
                  value={companySize}
                  onChange={(e) => setCompanySize(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>100</span>
                  <span className="font-semibold text-blue-600">{companySize.toLocaleString()}</span>
                  <span>100,000+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Level: {currentAutomation}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="5"
                  value={currentAutomation}
                  onChange={(e) => setCurrentAutomation(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0%</span>
                  <span>80%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Your AI 2027 Projection</h3>
            
            {results && (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    ${results.annualSavings.toLocaleString()}
                  </div>
                  <div className="text-lg opacity-90">Annual Savings</div>
                  <div className="text-sm opacity-75 mt-1">
                    Based on AI 2027 quantum-enhanced automation
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <div className="text-2xl font-bold text-blue-300">{results.roi}%</div>
                    <div className="text-sm opacity-90">ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <div className="text-2xl font-bold text-purple-300">{results.efficiencyGain}%</div>
                    <div className="text-sm opacity-90">Efficiency Gain</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <div className="text-2xl font-bold text-orange-300">{results.timeToROI}</div>
                    <div className="text-sm opacity-90">Months to ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <div className="text-2xl font-bold text-cyan-300">{results.newAutomationLevel}%</div>
                    <div className="text-sm opacity-90">New Automation</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h4 className="text-lg font-bold mb-3">Key Benefits</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Quantum-enhanced processing for 1000x performance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Autonomous business operations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Real-time optimization and learning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Self-healing infrastructure
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve These Results?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our AI 2027 solutions can help you achieve these projected savings and more. 
              Get a personalized implementation plan tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Personalized Plan
              </a>
              <a
                href="/services/ai-2027-revolutionary-solutions"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Explore Solutions
              </a>
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
          box-shadow: 0 0 2px 0 #555;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 2px 0 #555;
        }
      `}</style>
    </div>
  );
}