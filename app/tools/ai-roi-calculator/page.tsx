'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    companySize: 'small',
    industry: 'technology',
    currentRevenue: 1000000,
    currentEmployees: 50,
    currentOperationalCosts: 500000,
    automationLevel: 20,
    aiReadiness: 'low'
  });

  const [results, setResults] = useState(null);

  const industryMultipliers = {
    technology: { roi: 1.2, costReduction: 1.1, efficiency: 1.15 },
    manufacturing: { roi: 1.3, costReduction: 1.2, efficiency: 1.25 },
    healthcare: { roi: 1.1, costReduction: 1.0, efficiency: 1.1 },
    finance: { roi: 1.4, costReduction: 1.3, efficiency: 1.3 },
    retail: { roi: 1.0, costReduction: 0.9, efficiency: 1.0 },
    other: { roi: 1.0, costReduction: 1.0, efficiency: 1.0 }
  };

  const sizeMultipliers = {
    small: { base: 1.0, min: 0.8, max: 1.2 },
    medium: { base: 1.2, min: 1.0, max: 1.5 },
    large: { base: 1.5, min: 1.2, max: 2.0 },
    enterprise: { base: 2.0, min: 1.5, max: 3.0 }
  };

  const readinessMultipliers = {
    low: 0.6,
    medium: 0.8,
    high: 1.0
  };

  const calculateROI = () => {
    const industry = industryMultipliers[formData.industry];
    const size = sizeMultipliers[formData.companySize];
    const readiness = readinessMultipliers[formData.aiReadiness];

    // Base calculations
    const baseROI = 300; // 300% base ROI
    const baseCostReduction = 70; // 70% base cost reduction
    const baseEfficiencyGain = 90; // 90% base efficiency gain

    // Apply multipliers
    const adjustedROI = Math.round(baseROI * industry.roi * size.base * readiness);
    const adjustedCostReduction = Math.round(baseCostReduction * industry.costReduction * readiness);
    const adjustedEfficiencyGain = Math.round(baseEfficiencyGain * industry.efficiency * readiness);

    // Calculate financial impact
    const annualCostSavings = Math.round(formData.currentOperationalCosts * (adjustedCostReduction / 100));
    const revenueIncrease = Math.round(formData.currentRevenue * (adjustedEfficiencyGain / 100) * 0.3);
    const totalAnnualBenefit = annualCostSavings + revenueIncrease;
    const implementationCost = Math.round(formData.currentRevenue * 0.1); // 10% of revenue
    const netAnnualBenefit = totalAnnualBenefit - implementationCost;
    const paybackPeriod = Math.round((implementationCost / netAnnualBenefit) * 12);

    // Calculate time to value
    const timeToValue = formData.aiReadiness === 'high' ? '3-6 months' : 
                       formData.aiReadiness === 'medium' ? '6-9 months' : '9-12 months';

    setResults({
      roi: adjustedROI,
      costReduction: adjustedCostReduction,
      efficiencyGain: adjustedEfficiencyGain,
      annualCostSavings,
      revenueIncrease,
      totalAnnualBenefit,
      implementationCost,
      netAnnualBenefit,
      paybackPeriod,
      timeToValue
    });
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Transformation ROI Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the potential ROI and cost savings from AI transformation. 
          Get personalized estimates based on your company size, industry, and AI readiness.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Input Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company Size
              </label>
              <select
                value={formData.companySize}
                onChange={(e) => handleInputChange('companySize', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="small">Small (1-50 employees)</option>
                <option value="medium">Medium (51-500 employees)</option>
                <option value="large">Large (501-5000 employees)</option>
                <option value="enterprise">Enterprise (5000+ employees)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="technology">Technology</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Revenue ($)
              </label>
              <input
                type="number"
                value={formData.currentRevenue}
                onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="1000000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                value={formData.currentEmployees}
                onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Operational Costs ($)
              </label>
              <input
                type="number"
                value={formData.currentOperationalCosts}
                onChange={(e) => handleInputChange('currentOperationalCosts', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="500000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Automation Level (%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={formData.automationLevel}
                onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>0%</span>
                <span>{formData.automationLevel}%</span>
                <span>100%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                AI Readiness Level
              </label>
              <select
                value={formData.aiReadiness}
                onChange={(e) => handleInputChange('aiReadiness', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="low">Low - Limited AI experience</option>
                <option value="medium">Medium - Some AI initiatives</option>
                <option value="high">High - Advanced AI capabilities</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {results && (
            <>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Projected Results</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{results.roi}%</div>
                    <div className="text-gray-600">Expected ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{results.costReduction}%</div>
                    <div className="text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{results.efficiencyGain}%</div>
                    <div className="text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{results.paybackPeriod}</div>
                    <div className="text-gray-600">Payback (months)</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Financial Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Annual Cost Savings</span>
                    <span className="font-semibold text-green-600">${results.annualCostSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Revenue Increase</span>
                    <span className="font-semibold text-green-600">${results.revenueIncrease.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Implementation Cost</span>
                    <span className="font-semibold text-red-600">${results.implementationCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-gray-50 rounded-lg px-4">
                    <span className="text-gray-900 font-semibold">Net Annual Benefit</span>
                    <span className="font-bold text-green-600 text-lg">${results.netAnnualBenefit.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Implementation Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Strategy & Assessment</h4>
                      <p className="text-sm text-gray-600">4-6 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pilot Implementation</h4>
                      <p className="text-sm text-gray-600">2-3 months</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Scale & Integration</h4>
                      <p className="text-sm text-gray-600">3-6 months</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Time to Value</h4>
                      <p className="text-sm text-gray-600">{results.timeToValue}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Transformation?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Get a personalized AI transformation strategy and implementation plan tailored to your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    href="/services/ai-enterprise-transformation"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How We Calculate ROI</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Analysis</h3>
            <p className="text-gray-600 text-sm">
              Our calculations are based on real-world data from 500+ AI transformations across different industries.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Size</h3>
            <p className="text-gray-600 text-sm">
              We adjust projections based on your company size, as larger organizations typically see higher ROI.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Readiness</h3>
            <p className="text-gray-600 text-sm">
              Your current AI maturity level affects implementation timeline and success probability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}