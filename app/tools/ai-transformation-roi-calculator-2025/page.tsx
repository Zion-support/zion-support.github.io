'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Metadata is handled by the SEO component

interface ROIResults {
  totalInvestment: number;
  year1Returns: number;
  year3Returns: number;
  roi: number;
  paybackPeriod: number;
  npv: number;
  irr: number;
}

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    industry: 'manufacturing',
    companySize: 500,
    annualRevenue: 100000000,
    aiMaturity: 25,
    processAutomation: 50,
    aiTechnologies: ['machine-learning', 'predictive-analytics'],
    timeline: '12-18',
    investmentLevel: 'moderate',
    efficiencyGains: 150,
    costReductions: 40,
    revenueGrowth: 75,
    qualityImprovements: 60
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industries = {
    manufacturing: { name: 'Manufacturing', multiplier: 1.4, avgROI: 340 },
    financial: { name: 'Financial Services', multiplier: 1.2, avgROI: 280 },
    healthcare: { name: 'Healthcare', multiplier: 1.0, avgROI: 250 },
    retail: { name: 'Retail/E-commerce', multiplier: 1.1, avgROI: 220 },
    technology: { name: 'Technology', multiplier: 1.6, avgROI: 400 }
  };

  const companySizes = {
    small: { name: 'Small (1-50)', multiplier: 0.8 },
    medium: { name: 'Medium (51-500)', multiplier: 1.0 },
    large: { name: 'Large (501-5000)', multiplier: 1.3 },
    enterprise: { name: 'Enterprise (5000+)', multiplier: 1.6 }
  };

  const investmentLevels = {
    conservative: { name: 'Conservative', multiplier: 0.5, base: 500000 },
    moderate: { name: 'Moderate', multiplier: 1.0, base: 2000000 },
    aggressive: { name: 'Aggressive', multiplier: 2.0, base: 10000000 },
    transformational: { name: 'Transformational', multiplier: 4.0, base: 50000000 }
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const industry = industries[formData.industry as keyof typeof industries];
      const companySize = companySizes[getCompanySizeCategory() as keyof typeof companySizes];
      const investment = investmentLevels[formData.investmentLevel as keyof typeof investmentLevels];
      
      // Calculate investment
      const totalInvestment = investment.base * companySize.multiplier;
      
      // Calculate returns based on various factors
      const efficiencyMultiplier = 1 + (formData.efficiencyGains / 100);
      const costReductionMultiplier = 1 + (formData.costReductions / 100);
      const revenueMultiplier = 1 + (formData.revenueGrowth / 100);
      
      const year1Returns = totalInvestment * industry.multiplier * 
        (efficiencyMultiplier * 0.4 + costReductionMultiplier * 0.3 + revenueMultiplier * 0.3);
      
      const year3Returns = year1Returns * 2.5; // Compound growth
      
      const roi = ((year3Returns - totalInvestment) / totalInvestment) * 100;
      const paybackPeriod = totalInvestment / (year1Returns / 12);
      const npv = year3Returns - totalInvestment;
      const irr = (Math.pow(year3Returns / totalInvestment, 1/3) - 1) * 100;
      
      setResults({
        totalInvestment,
        year1Returns,
        year3Returns,
        roi,
        paybackPeriod,
        npv,
        irr
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  const getCompanySizeCategory = () => {
    if (formData.companySize <= 50) return 'small';
    if (formData.companySize <= 500) return 'medium';
    if (formData.companySize <= 5000) return 'large';
    return 'enterprise';
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number, decimals: number = 1) => {
    return num.toFixed(decimals);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Transformation ROI Calculator 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential ROI from AI transformation. Get personalized projections 
            based on your industry, company size, and implementation approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Input Parameters</h2>
            
            {/* Industry */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="financial">Financial Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail/E-commerce</option>
                <option value="technology">Technology</option>
              </select>
            </div>

            {/* Company Size */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Size (Employees)
              </label>
              <input
                type="number"
                value={formData.companySize}
                onChange={(e) => handleInputChange('companySize', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                min="1"
              />
            </div>

            {/* Annual Revenue */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Revenue
              </label>
              <input
                type="number"
                value={formData.annualRevenue}
                onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                min="1000000"
              />
            </div>

            {/* AI Maturity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current AI Maturity: {formData.aiMaturity}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={formData.aiMaturity}
                onChange={(e) => handleInputChange('aiMaturity', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Basic</span>
                <span>Advanced</span>
                <span>Fully AI-enabled</span>
              </div>
            </div>

            {/* Process Automation */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Process Automation Target: {formData.processAutomation}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={formData.processAutomation}
                onChange={(e) => handleInputChange('processAutomation', parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Investment Level */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Level
              </label>
              <select
                value={formData.investmentLevel}
                onChange={(e) => handleInputChange('investmentLevel', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="conservative">Conservative ($100K - $1M)</option>
                <option value="moderate">Moderate ($1M - $10M)</option>
                <option value="aggressive">Aggressive ($10M - $50M)</option>
                <option value="transformational">Transformational ($50M+)</option>
              </select>
            </div>

            {/* Expected Outcomes */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected Outcomes</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efficiency Gains: {formData.efficiencyGains}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={formData.efficiencyGains}
                  onChange={(e) => handleInputChange('efficiencyGains', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cost Reductions: {formData.costReductions}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={formData.costReductions}
                  onChange={(e) => handleInputChange('costReductions', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Revenue Growth: {formData.revenueGrowth}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={formData.revenueGrowth}
                  onChange={(e) => handleInputChange('revenueGrowth', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateROI}
              disabled={isCalculating}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isCalculating ? 'Calculating...' : 'Calculate ROI'}
            </button>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Analysis Results</h2>
            
            {results ? (
              <div className="space-y-6">
                {/* Investment Analysis */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Analysis</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Investment:</span>
                      <span className="font-semibold">{formatCurrency(results.totalInvestment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Technology Infrastructure:</span>
                      <span>{formatCurrency(results.totalInvestment * 0.4)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Implementation Services:</span>
                      <span>{formatCurrency(results.totalInvestment * 0.3)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Training & Change Management:</span>
                      <span>{formatCurrency(results.totalInvestment * 0.2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ongoing Operations:</span>
                      <span>{formatCurrency(results.totalInvestment * 0.1)}</span>
                    </div>
                  </div>
                </div>

                {/* Return Analysis */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Return Analysis</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year 1 Returns:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(results.year1Returns)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">3-Year Total Returns:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(results.year3Returns)}</span>
                    </div>
                  </div>
                </div>

                {/* ROI Metrics */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">ROI Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Return on Investment:</span>
                      <span className="font-semibold text-green-600">{formatNumber(results.roi)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payback Period:</span>
                      <span className="font-semibold">{formatNumber(results.paybackPeriod)} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Net Present Value:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(results.npv)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Internal Rate of Return:</span>
                      <span className="font-semibold text-green-600">{formatNumber(results.irr)}%</span>
                    </div>
                  </div>
                </div>

                {/* Industry Benchmark */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Benchmark</h3>
                  <p className="text-gray-600">
                    Average ROI for {industries[formData.industry as keyof typeof industries].name}: {industries[formData.industry as keyof typeof industries].avgROI}%
                  </p>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm">
                      <span>Your Projected ROI:</span>
                      <span className="font-semibold">{formatNumber(results.roi)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${Math.min(100, (results.roi / 500) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="block w-full bg-purple-600 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Schedule Consultation
                    </Link>
                    <Link
                      href="/resources/ai-implementation-guide"
                      className="block w-full border border-purple-600 text-purple-600 text-center py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Download Implementation Guide
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Fill out the form and click "Calculate ROI" to see your personalized analysis.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Benchmarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(industries).map(([key, industry]) => (
              <div key={key} className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-2xl font-bold text-purple-600 mb-1">{industry.avgROI}%</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}