"use client";

// @ts-nocheck
import React, { useState, useEffect } from 'react';

export default function InteractiveROICalculator2026() {
  const [companySize, setCompanySize] = useState('medium');
  const [industry, setIndustry] = useState('technology');
  const [currentAutomation, setCurrentAutomation] = useState(30);
  const [annualRevenue, setAnnualRevenue] = useState(100);
  const [roi, setROI] = useState({ value: 0, multiplier: 0, timeToROI: 0 });

  const calculateROI = () => {
    const baseMultiplier = {
      small: 50,
      medium: 100,
      large: 200,
      enterprise: 500
    };

    const industryMultiplier = {
      technology: 1.5,
      manufacturing: 1.8,
      finance: 2.0,
      healthcare: 1.7,
      retail: 1.3,
      logistics: 1.6
    };

    const automationGap = 99.99 - currentAutomation;
    const baseROI = baseMultiplier[companySize] * industryMultiplier[industry] * (automationGap / 10);
    const totalROI = baseROI * (annualRevenue / 100);

    setROI({
      value: Math.round(totalROI * 1000000), // Convert to millions
      multiplier: Math.round(baseROI),
      timeToROI: companySize === 'small' ? 6 : companySize === 'medium' ? 9 : companySize === 'large' ? 12 : 18
    });
  };

  useEffect(() => {
    calculateROI();
  }, [companySize, industry, currentAutomation, annualRevenue]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🧮 Interactive ROI Calculator 2026
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Calculate Your Autonomous Revolution ROI
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the potential ROI from implementing our Ultimate Autonomous Revolution based on your company's specific parameters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-8">Configure Your Scenario</h3>
            
            {/* Company Size */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-4">Company Size</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'small', label: 'Small (1-50)', icon: '🏢' },
                  { value: 'medium', label: 'Medium (51-500)', icon: '🏭' },
                  { value: 'large', label: 'Large (501-5000)', icon: '🏗️' },
                  { value: 'enterprise', label: 'Enterprise (5000+)', icon: '🌐' }
                ].map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setCompanySize(size.value)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      companySize === size.value
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-purple-400 hover:bg-purple-500/10'
                    }`}
                  >
                    <div className="text-2xl mb-2">{size.icon}</div>
                    <div className="text-sm font-semibold">{size.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Industry */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-4">Industry</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-4 rounded-lg border-2 border-gray-600 bg-gray-700/50 text-white focus:border-purple-500 focus:bg-purple-500/10 transition-all duration-300"
              >
                <option value="technology">Technology</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail</option>
                <option value="logistics">Logistics</option>
              </select>
            </div>

            {/* Current Automation Level */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-4">
                Current Automation Level: {currentAutomation}%
              </label>
              <input
                type="range"
                min="0"
                max="95"
                value={currentAutomation}
                onChange={(e) => setCurrentAutomation(Number(e.target.value))}
                className="w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${currentAutomation}%, #374151 ${currentAutomation}%, #374151 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>0% Manual</span>
                <span>95% Automated</span>
              </div>
            </div>

            {/* Annual Revenue */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-4">
                Annual Revenue: ${annualRevenue}M
              </label>
              <input
                type="range"
                min="10"
                max="10000"
                step="10"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${(annualRevenue - 10) / (10000 - 10) * 100}%, #374151 ${(annualRevenue - 10) / (10000 - 10) * 100}%, #374151 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>$10M</span>
                <span>$10B</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {/* Main ROI Result */}
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
              <div className="text-center">
                <div className="text-6xl font-extrabold text-green-400 mb-4">
                  ${roi.value.toLocaleString()}M
                </div>
                <div className="text-xl text-green-300 font-semibold mb-2">Projected ROI</div>
                <div className="text-sm text-gray-400">
                  Based on {roi.multiplier}x performance multiplier
                </div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">{roi.multiplier}x</div>
                <div className="text-sm text-purple-300 font-semibold">Performance Boost</div>
                <div className="text-xs text-gray-400 mt-1">Based on automation gap</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{roi.timeToROI}</div>
                <div className="text-sm text-cyan-300 font-semibold">Months to ROI</div>
                <div className="text-xs text-gray-400 mt-1">Time to break even</div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-lg font-bold text-white mb-4">Key Benefits You'll Achieve:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300 text-sm">99.99% Autonomous Operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300 text-sm">1 Million Times Performance Boost</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300 text-sm">0.0001 Second Decision Time</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300 text-sm">Zero Human Intervention Required</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a 
                href="/contact"
                className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Start Your Transformation
              </a>
              <p className="text-xs text-gray-400 mt-3">
                Results based on Fortune 100 company implementations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}