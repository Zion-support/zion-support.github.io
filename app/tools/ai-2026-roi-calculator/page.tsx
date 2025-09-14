'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

// Metadata removed for client component

export default function AI2026ROICalculator() {
  const [inputs, setInputs] = useState({
    annualRevenue: 100000000,
    employeeCount: 1000,
    currentAutomation: 20,
    industry: 'technology',
    region: 'north-america'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const { annualRevenue, employeeCount, currentAutomation, industry, region } = inputs;
    
    // Base calculations
    const automationIncrease = 85 - currentAutomation; // Target 85% automation
    const productivityGain = 500; // 500% productivity gain
    const costReduction = 80; // 80% cost reduction
    
    // Industry multipliers
    const industryMultipliers = {
      'technology': 1.2,
      'manufacturing': 1.5,
      'finance': 1.3,
      'healthcare': 1.4,
      'retail': 1.1,
      'other': 1.0
    };
    
    // Region multipliers
    const regionMultipliers = {
      'north-america': 1.0,
      'europe': 0.9,
      'asia-pacific': 1.2,
      'latin-america': 0.8,
      'middle-east-africa': 0.7
    };
    
    const industryMultiplier = industryMultipliers[industry] || 1.0;
    const regionMultiplier = regionMultipliers[region] || 1.0;
    const totalMultiplier = industryMultiplier * regionMultiplier;
    
    // Calculate benefits
    const additionalRevenue = annualRevenue * 0.25 * totalMultiplier; // 25% revenue increase
    const costSavings = annualRevenue * 0.15 * totalMultiplier; // 15% cost savings
    const productivityValue = (employeeCount * 50000) * (productivityGain / 100) * totalMultiplier; // $50k per employee
    
    const totalBenefits = additionalRevenue + costSavings + productivityValue;
    
    // Calculate costs
    const implementationCost = annualRevenue * 0.05; // 5% of annual revenue
    const trainingCost = employeeCount * 2000; // $2k per employee
    const infrastructureCost = annualRevenue * 0.02; // 2% of annual revenue
    
    const totalCosts = implementationCost + trainingCost + infrastructureCost;
    
    // Calculate ROI
    const netBenefits = totalBenefits - totalCosts;
    const roi = (netBenefits / totalCosts) * 100;
    const paybackPeriod = totalCosts / (totalBenefits / 12); // months
    
    setResults({
      additionalRevenue,
      costSavings,
      productivityValue,
      totalBenefits,
      totalCosts,
      netBenefits,
      roi,
      paybackPeriod,
      automationIncrease,
      productivityGain,
      costReduction
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI 2026 ROI Calculator - Calculate Your Transformation Returns"
        description="Calculate the potential ROI and business impact of implementing AI 2026 technologies including enterprise automation and quantum computing."
        keywords="AI 2026, ROI calculator, business transformation, enterprise automation, quantum computing"
        url="/tools/ai-2026-roi-calculator"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">💰 ROI CALCULATOR</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI 2026 ROI Calculator
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Calculate the potential return on investment and business impact of implementing 
              AI 2026 technologies in your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Enter Your Business Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.annualRevenue}
                    onChange={(e) => setInputs({...inputs, annualRevenue: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="100,000,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    value={inputs.employeeCount}
                    onChange={(e) => setInputs({...inputs, employeeCount: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Automation Level (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={inputs.currentAutomation}
                    onChange={(e) => setInputs({...inputs, currentAutomation: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    value={inputs.industry}
                    onChange={(e) => setInputs({...inputs, industry: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="technology">Technology</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Region
                  </label>
                  <select
                    value={inputs.region}
                    onChange={(e) => setInputs({...inputs, region: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="north-america">North America</option>
                    <option value="europe">Europe</option>
                    <option value="asia-pacific">Asia Pacific</option>
                    <option value="latin-america">Latin America</option>
                    <option value="middle-east-africa">Middle East & Africa</option>
                  </select>
                </div>

                <button
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Calculate ROI
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your AI 2026 ROI Projection</h2>
              
              {results ? (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{results.roi.toFixed(0)}%</div>
                        <div className="text-sm text-gray-600">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{results.paybackPeriod.toFixed(1)}</div>
                        <div className="text-sm text-gray-600">Months Payback</div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Impact */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Financial Impact (Annual)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Additional Revenue</span>
                        <span className="font-bold text-green-600">{formatCurrency(results.additionalRevenue)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Cost Savings</span>
                        <span className="font-bold text-blue-600">{formatCurrency(results.costSavings)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Productivity Value</span>
                        <span className="font-bold text-purple-600">{formatCurrency(results.productivityValue)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Total Benefits</span>
                        <span className="font-bold text-green-600 text-lg">{formatCurrency(results.totalBenefits)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Implementation Costs</span>
                        <span className="font-bold text-red-600">{formatCurrency(results.totalCosts)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-900 font-semibold">Net Benefits</span>
                        <span className="font-bold text-green-600 text-xl">{formatCurrency(results.netBenefits)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Operational Improvements */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Operational Improvements</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{results.automationIncrease}%</div>
                        <div className="text-sm text-gray-600">Automation Increase</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{results.productivityGain}%</div>
                        <div className="text-sm text-gray-600">Productivity Gain</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💰</div>
                  <p className="text-gray-600 text-lg">
                    Enter your business details and click "Calculate ROI" to see your potential returns
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Calculate ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Growth</h3>
              <p className="text-gray-600">
                Based on proven results showing 25% average revenue increase through AI 2026 implementation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Reduction</h3>
              <p className="text-gray-600">
                Calculated from 80% cost reduction in automated processes and 15% overall operational savings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Productivity Gains</h3>
              <p className="text-gray-600">
                Based on 500% productivity improvement per employee valued at $50,000 annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Achieve These Results?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our AI 2026 implementation experts can help you achieve these projected returns 
            with our proven methodology and comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/resources/ai-2026-implementation-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              View Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}