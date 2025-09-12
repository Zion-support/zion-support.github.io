import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

interface CalculationInputs {
  currentRevenue: number;
  currentCosts: number;
  aiInvestment: number;
  expectedEfficiencyGain: number;
  expectedCostReduction: number;
  expectedRevenueIncrease: number;
  implementationTime: number;
  industry: string;
  companySize: string;
}

const AIROICalculator2026 = () => {
  const [inputs, setInputs] = useState<CalculationInputs>({
    currentRevenue: 10000000,
    currentCosts: 8000000,
    aiInvestment: 2000000,
    expectedEfficiencyGain: 30,
    expectedCostReduction: 25,
    expectedRevenueIncrease: 20,
    implementationTime: 12,
    industry: 'manufacturing',
    companySize: 'enterprise'
  });

  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  const industries = [
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.2 },
    { value: 'retail', label: 'Retail', multiplier: 1.1 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.3 },
    { value: 'finance', label: 'Financial Services', multiplier: 1.4 },
    { value: 'technology', label: 'Technology', multiplier: 1.0 },
    { value: 'logistics', label: 'Logistics', multiplier: 1.15 }
  ];

  const companySizes = [
    { value: 'startup', label: 'Startup (1-50 employees)', multiplier: 0.8 },
    { value: 'small', label: 'Small (51-200 employees)', multiplier: 0.9 },
    { value: 'medium', label: 'Medium (201-1000 employees)', multiplier: 1.0 },
    { value: 'enterprise', label: 'Enterprise (1000+ employees)', multiplier: 1.1 }
  ];

  const calculateROI = () => {
    const industryMultiplier = industries.find(i => i.value === inputs.industry)?.multiplier || 1.0;
    const sizeMultiplier = companySizes.find(s => s.value === inputs.companySize)?.multiplier || 1.0;
    const totalMultiplier = industryMultiplier * sizeMultiplier;

    // Calculate cost savings
    const annualCostSavings = (inputs.currentCosts * inputs.expectedCostReduction / 100) * totalMultiplier;
    
    // Calculate revenue increase
    const annualRevenueIncrease = (inputs.currentRevenue * inputs.expectedRevenueIncrease / 100) * totalMultiplier;
    
    // Calculate efficiency gains (additional cost savings)
    const efficiencySavings = (inputs.currentCosts * inputs.expectedEfficiencyGain / 100) * totalMultiplier;
    
    // Total annual benefits
    const totalAnnualBenefits = annualCostSavings + annualRevenueIncrease + efficiencySavings;
    
    // Calculate ROI over implementation time
    const totalBenefits = totalAnnualBenefits * (inputs.implementationTime / 12);
    const netBenefits = totalBenefits - inputs.aiInvestment;
    const roi = (netBenefits / inputs.aiInvestment) * 100;
    
    // Calculate payback period
    const monthlyBenefits = totalAnnualBenefits / 12;
    const paybackPeriod = inputs.aiInvestment / monthlyBenefits;
    
    // Calculate 3-year ROI
    const threeYearBenefits = totalAnnualBenefits * 3;
    const threeYearROI = ((threeYearBenefits - inputs.aiInvestment) / inputs.aiInvestment) * 100;

    setResults({
      annualCostSavings,
      annualRevenueIncrease,
      efficiencySavings,
      totalAnnualBenefits,
      netBenefits,
      roi,
      paybackPeriod,
      threeYearROI,
      totalBenefits
    });
    setShowResults(true);
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: keyof CalculationInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(num);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <SEO
        title="AI ROI Calculator 2026: Calculate Your AI Investment Returns - Zion Tech Group"
        description="Calculate the potential ROI of your AI investments with our comprehensive 2026 AI ROI calculator. Get detailed projections and insights."
        keywords="AI ROI calculator, AI investment calculator, AI return on investment, AI business case, AI financial planning"
        url="/tools/ai-roi-calculator-2026"
      />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI ROI Calculator 2026
        </h1>
        <p className="text-lg text-gray-600">
          Calculate the potential return on investment for your AI transformation with our comprehensive calculator.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Enter Your Business Details</h2>
          
          <div className="space-y-6">
            {/* Company Information */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Company Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select
                    value={inputs.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {industries.map(industry => (
                      <option key={industry.value} value={industry.value}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                  <select
                    value={inputs.companySize}
                    onChange={(e) => handleInputChange('companySize', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {companySizes.map(size => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Financial Information */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Current Financials</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue</label>
                  <input
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10,000,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Costs</label>
                  <input
                    type="number"
                    value={inputs.currentCosts}
                    onChange={(e) => handleInputChange('currentCosts', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="8,000,000"
                  />
                </div>
              </div>
            </div>

            {/* AI Investment */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">AI Investment</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">AI Investment Amount</label>
                  <input
                    type="number"
                    value={inputs.aiInvestment}
                    onChange={(e) => handleInputChange('aiInvestment', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="2,000,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Implementation Time (months)</label>
                  <input
                    type="number"
                    value={inputs.implementationTime}
                    onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="12"
                  />
                </div>
              </div>
            </div>

            {/* Expected Benefits */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Expected AI Benefits</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cost Reduction (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.expectedCostReduction}
                    onChange={(e) => handleInputChange('expectedCostReduction', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="25"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Revenue Increase (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.expectedRevenueIncrease}
                    onChange={(e) => handleInputChange('expectedRevenueIncrease', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Efficiency Gain (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.expectedEfficiencyGain}
                    onChange={(e) => handleInputChange('expectedEfficiencyGain', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">ROI Projections</h2>
          
          {results && (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {formatNumber(results.roi)}%
                  </div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {formatNumber(results.paybackPeriod)} months
                  </div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                </div>
              </div>

              {/* Annual Benefits Breakdown */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Annual Benefits Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Cost Savings</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(results.annualCostSavings)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Revenue Increase</span>
                    <span className="font-semibold text-blue-600">
                      {formatCurrency(results.annualRevenueIncrease)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Efficiency Gains</span>
                    <span className="font-semibold text-purple-600">
                      {formatCurrency(results.efficiencySavings)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-gray-50 px-3 rounded-lg">
                    <span className="font-semibold text-gray-900">Total Annual Benefits</span>
                    <span className="font-bold text-gray-900 text-lg">
                      {formatCurrency(results.totalAnnualBenefits)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Long-term Projections */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Long-term Projections</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">3-Year ROI</span>
                    <span className="font-semibold text-indigo-600">
                      {formatNumber(results.threeYearROI)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">3-Year Total Benefits</span>
                    <span className="font-semibold text-indigo-600">
                      {formatCurrency(results.totalAnnualBenefits * 3)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-gray-50 px-3 rounded-lg">
                    <span className="font-semibold text-gray-900">Net Benefits (3 years)</span>
                    <span className="font-bold text-gray-900 text-lg">
                      {formatCurrency((results.totalAnnualBenefits * 3) - inputs.aiInvestment)}
                    </span>
                  </div>
                </div>
              </div>

              {/* ROI Visualization */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">ROI Timeline</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Year 1</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${Math.min(100, (results.totalAnnualBenefits / inputs.aiInvestment) * 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold">
                      {formatNumber((results.totalAnnualBenefits / inputs.aiInvestment) * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Year 2</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${Math.min(100, (results.totalAnnualBenefits * 2 / inputs.aiInvestment) * 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold">
                      {formatNumber((results.totalAnnualBenefits * 2 / inputs.aiInvestment) * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Year 3</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{ width: `${Math.min(100, results.threeYearROI)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold">
                      {formatNumber(results.threeYearROI)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Start Your AI Transformation?</h3>
        <p className="text-gray-600 mb-6">
          Get expert guidance and support for your AI implementation journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/resources/ai-2026-implementation-toolkit"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center border border-blue-600"
          >
            Download Implementation Guide
          </Link>
          <Link
            href="/case-studies"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center"
          >
            View Success Stories
          </Link>
        </div>
      </div>

      {/* Industry Benchmarks */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Benchmarks</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map(industry => (
            <div key={industry.value} className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">{industry.label}</h4>
              <div className="text-sm text-gray-600">
                <div>Average ROI: {formatNumber(industry.multiplier * 200)}%</div>
                <div>Payback: {formatNumber(12 / industry.multiplier)} months</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIROICalculator2026;