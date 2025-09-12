import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export const metadata = {
  title: 'AI ROI Calculator - Calculate Your AI Investment Returns',
  description: 'Calculate the potential ROI of AI implementation in your business. Get personalized estimates for cost savings, efficiency gains, and revenue growth.',
  keywords: 'AI ROI calculator, AI investment, business ROI, AI cost savings, efficiency calculator',
};

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    companySize: 'small',
    industry: 'technology',
    currentRevenue: 1000000,
    currentEmployees: 50,
    currentEfficiency: 70,
    aiInvestment: 100000,
    implementationTime: 12,
    expectedEfficiencyGain: 200,
    expectedCostReduction: 30,
    expectedRevenueGrowth: 25
  });

  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const {
      currentRevenue,
      currentEmployees,
      currentEfficiency,
      aiInvestment,
      implementationTime,
      expectedEfficiencyGain,
      expectedCostReduction,
      expectedRevenueGrowth
    } = formData;

    // Calculate efficiency gains
    const efficiencyMultiplier = 1 + (expectedEfficiencyGain / 100);
    const newEfficiency = Math.min(100, currentEfficiency * efficiencyMultiplier);
    const efficiencyImprovement = newEfficiency - currentEfficiency;

    // Calculate cost savings
    const annualCostSavings = (currentRevenue * expectedCostReduction / 100) * (efficiencyImprovement / 100);
    
    // Calculate revenue growth
    const annualRevenueGrowth = currentRevenue * expectedRevenueGrowth / 100;
    
    // Calculate total annual benefits
    const totalAnnualBenefits = annualCostSavings + annualRevenueGrowth;
    
    // Calculate ROI
    const roi = ((totalAnnualBenefits - aiInvestment) / aiInvestment) * 100;
    const paybackPeriod = aiInvestment / totalAnnualBenefits;
    
    // Calculate 3-year projection
    const threeYearBenefits = totalAnnualBenefits * 3;
    const threeYearROI = ((threeYearBenefits - aiInvestment) / aiInvestment) * 100;

    setResults({
      efficiencyImprovement: efficiencyImprovement.toFixed(1),
      annualCostSavings: Math.round(annualCostSavings),
      annualRevenueGrowth: Math.round(annualRevenueGrowth),
      totalAnnualBenefits: Math.round(totalAnnualBenefits),
      roi: roi.toFixed(1),
      paybackPeriod: paybackPeriod.toFixed(1),
      threeYearBenefits: Math.round(threeYearBenefits),
      threeYearROI: threeYearROI.toFixed(1)
    });
    setShowResults(true);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI ROI Calculator - Calculate Your AI Investment Returns"
        description="Calculate the potential ROI of AI implementation in your business. Get personalized estimates for cost savings, efficiency gains, and revenue growth."
        keywords="AI ROI calculator, AI investment, business ROI, AI cost savings, efficiency calculator"
        url="/tools/ai-roi-calculator"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
            🧮 INTERACTIVE TOOL
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI ROI Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for AI implementation in your business. 
            Get personalized estimates for cost savings, efficiency gains, and revenue growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Business Information</h2>
            
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-500 employees)</option>
                  <option value="large">Large (501-5000 employees)</option>
                  <option value="enterprise">Enterprise (5000+ employees)</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="technology">Technology</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="logistics">Logistics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Current Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1000000"
                />
              </div>

              {/* Current Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="50"
                />
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Efficiency Level (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>10%</span>
                  <span className="font-medium">{formData.currentEfficiency}%</span>
                  <span>90%</span>
                </div>
              </div>

              {/* AI Investment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Planned AI Investment ($)
                </label>
                <input
                  type="number"
                  value={formData.aiInvestment}
                  onChange={(e) => handleInputChange('aiInvestment', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="100000"
                />
              </div>

              {/* Implementation Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Timeline (months)
                </label>
                <input
                  type="range"
                  min="3"
                  max="24"
                  value={formData.implementationTime}
                  onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>3 months</span>
                  <span className="font-medium">{formData.implementationTime} months</span>
                  <span>24 months</span>
                </div>
              </div>

              {/* Expected Efficiency Gain */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Efficiency Gain (%)
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={formData.expectedEfficiencyGain}
                  onChange={(e) => handleInputChange('expectedEfficiencyGain', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>50%</span>
                  <span className="font-medium">{formData.expectedEfficiencyGain}%</span>
                  <span>500%</span>
                </div>
              </div>

              {/* Expected Cost Reduction */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Cost Reduction (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={formData.expectedCostReduction}
                  onChange={(e) => handleInputChange('expectedCostReduction', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>10%</span>
                  <span className="font-medium">{formData.expectedCostReduction}%</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Expected Revenue Growth */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Revenue Growth (%)
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={formData.expectedRevenueGrowth}
                  onChange={(e) => handleInputChange('expectedRevenueGrowth', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>5%</span>
                  <span className="font-medium">{formData.expectedRevenueGrowth}%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateROI}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Calculate AI ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Analysis Results</h2>
            
            {!showResults ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-600 text-lg">
                  Fill out the form and click "Calculate AI ROI" to see your personalized results.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{results.roi}%</div>
                    <div className="text-sm text-blue-800">Annual ROI</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">{results.paybackPeriod}</div>
                    <div className="text-sm text-green-800">Payback Period (years)</div>
                  </div>
                </div>

                {/* Annual Benefits */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Annual Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Cost Savings:</span>
                      <span className="font-bold text-green-600">${results.annualCostSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Revenue Growth:</span>
                      <span className="font-bold text-blue-600">${results.annualRevenueGrowth.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-gray-900 font-semibold">Total Annual Benefits:</span>
                      <span className="font-bold text-purple-600">${results.totalAnnualBenefits.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Efficiency Improvement */}
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Efficiency Impact</h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">+{results.efficiencyImprovement}%</div>
                    <div className="text-sm text-yellow-800">Efficiency Improvement</div>
                  </div>
                </div>

                {/* 3-Year Projection */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">3-Year Projection</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Total Benefits (3 years):</span>
                      <span className="font-bold text-green-600">${results.threeYearBenefits.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">3-Year ROI:</span>
                      <span className="font-bold text-blue-600">{results.threeYearROI}%</span>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recommendations</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    {parseFloat(results.roi) > 200 ? (
                      <p className="text-green-600 font-medium">✅ Excellent ROI - Highly recommended for implementation</p>
                    ) : parseFloat(results.roi) > 100 ? (
                      <p className="text-blue-600 font-medium">✅ Good ROI - Recommended with proper planning</p>
                    ) : parseFloat(results.roi) > 50 ? (
                      <p className="text-yellow-600 font-medium">⚠️ Moderate ROI - Consider optimizing parameters</p>
                    ) : (
                      <p className="text-red-600 font-medium">❌ Low ROI - Review investment strategy</p>
                    )}
                    <p>• Start with high-impact, low-risk use cases</p>
                    <p>• Invest in data quality and infrastructure</p>
                    <p>• Plan for change management and training</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Implement AI in Your Business?</h3>
          <p className="text-xl mb-6 opacity-90">
            Our expert team can help you achieve these results with proven AI implementation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/ai-automation"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore AI Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Tools</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/tools/ai-readiness-assessment" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">AI Readiness Assessment</h4>
              <p className="text-gray-600 text-sm">Evaluate your organization's readiness for AI implementation.</p>
            </Link>
            <Link href="/tools/ai-implementation-roadmap" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">AI Implementation Roadmap</h4>
              <p className="text-gray-600 text-sm">Get a personalized roadmap for your AI transformation journey.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}