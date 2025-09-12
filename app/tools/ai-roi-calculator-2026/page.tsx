import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';

export const metadata = {
  title: 'AI ROI Calculator 2026 - Calculate Your AI Investment Return | Zion Tech Group',
  description: 'Calculate the potential ROI of your AI investments with our comprehensive 2026 AI ROI calculator. Get detailed projections and implementation recommendations.',
  keywords: 'AI ROI calculator, AI investment return, AI cost benefit analysis, AI business case, AI financial planning, AI ROI projection',
  openGraph: {
    title: 'AI ROI Calculator 2026 - Calculate Your AI Investment Return',
    description: 'Calculate the potential ROI of your AI investments with our comprehensive 2026 AI ROI calculator.',
    url: 'https://zion.tech/tools/ai-roi-calculator-2026',
    images: [
      {
        url: '/og-ai-roi-calculator-2026.png',
        width: 1200,
        height: 630,
        alt: 'AI ROI Calculator 2026',
      },
    ],
  },
};

interface CalculatorInputs {
  companySize: 'startup' | 'smb' | 'mid-market' | 'enterprise';
  industry: string;
  currentRevenue: number;
  currentEmployees: number;
  aiUseCases: string[];
  implementationTimeline: '3-months' | '6-months' | '12-months' | '18-months';
  budget: number;
  riskTolerance: 'low' | 'medium' | 'high';
}

interface ROICalculation {
  totalInvestment: number;
  annualSavings: number;
  revenueIncrease: number;
  totalBenefits: number;
  netROI: number;
  paybackPeriod: number;
  threeYearROI: number;
  riskAdjustedROI: number;
}

const industryMultipliers = {
  'financial-services': { savings: 1.5, revenue: 1.3, risk: 0.8 },
  'healthcare': { savings: 1.2, revenue: 1.4, risk: 0.9 },
  'manufacturing': { savings: 1.8, revenue: 1.1, risk: 0.7 },
  'retail': { savings: 1.3, revenue: 1.6, risk: 0.8 },
  'technology': { savings: 1.1, revenue: 1.8, risk: 0.9 },
  'other': { savings: 1.0, revenue: 1.0, risk: 1.0 }
};

const useCaseBenefits = {
  'automation': { savings: 0.15, revenue: 0.05 },
  'customer-service': { savings: 0.20, revenue: 0.10 },
  'data-analysis': { savings: 0.10, revenue: 0.15 },
  'predictive-analytics': { savings: 0.12, revenue: 0.20 },
  'personalization': { savings: 0.08, revenue: 0.25 },
  'supply-chain': { savings: 0.18, revenue: 0.08 },
  'quality-control': { savings: 0.14, revenue: 0.12 },
  'fraud-detection': { savings: 0.16, revenue: 0.06 }
};

const companySizeMultipliers = {
  'startup': { base: 0.5, complexity: 0.3 },
  'smb': { base: 1.0, complexity: 0.6 },
  'mid-market': { base: 2.0, complexity: 1.0 },
  'enterprise': { base: 5.0, complexity: 2.0 }
};

export default function AIROICalculator2026() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    companySize: 'smb',
    industry: 'technology',
    currentRevenue: 1000000,
    currentEmployees: 50,
    aiUseCases: [],
    implementationTimeline: '6-months',
    budget: 100000,
    riskTolerance: 'medium'
  });

  const [calculation, setCalculation] = useState<ROICalculation | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = (inputs: CalculatorInputs): ROICalculation => {
    const industry = industryMultipliers[inputs.industry as keyof typeof industryMultipliers] || industryMultipliers.other;
    const companySize = companySizeMultipliers[inputs.companySize];
    
    // Base calculations
    let totalInvestment = inputs.budget;
    let annualSavings = 0;
    let revenueIncrease = 0;
    
    // Calculate savings from use cases
    inputs.aiUseCases.forEach(useCase => {
      const benefits = useCaseBenefits[useCase as keyof typeof useCaseBenefits];
      if (benefits) {
        annualSavings += inputs.currentRevenue * benefits.savings * industry.savings;
        revenueIncrease += inputs.currentRevenue * benefits.revenue * industry.revenue;
      }
    });
    
    // Apply company size multipliers
    annualSavings *= companySize.base;
    revenueIncrease *= companySize.base;
    
    // Add implementation costs
    const implementationCosts = {
      '3-months': 0.3,
      '6-months': 0.5,
      '12-months': 0.8,
      '18-months': 1.2
    };
    
    totalInvestment += inputs.budget * implementationCosts[inputs.implementationTimeline];
    
    // Calculate total benefits
    const totalBenefits = annualSavings + revenueIncrease;
    const netROI = ((totalBenefits - totalInvestment) / totalInvestment) * 100;
    const paybackPeriod = totalInvestment / totalBenefits;
    const threeYearROI = ((totalBenefits * 3 - totalInvestment) / totalInvestment) * 100;
    
    // Apply risk adjustment
    const riskMultipliers = { low: 0.8, medium: 1.0, high: 1.2 };
    const riskAdjustedROI = netROI * riskMultipliers[inputs.riskTolerance] * industry.risk;
    
    return {
      totalInvestment,
      annualSavings,
      revenueIncrease,
      totalBenefits,
      netROI,
      paybackPeriod,
      threeYearROI,
      riskAdjustedROI
    };
  };

  useEffect(() => {
    if (inputs.aiUseCases.length > 0) {
      setIsCalculating(true);
      setTimeout(() => {
        const result = calculateROI(inputs);
        setCalculation(result);
        setIsCalculating(false);
      }, 1000);
    }
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleUseCaseToggle = (useCase: string) => {
    setInputs(prev => ({
      ...prev,
      aiUseCases: prev.aiUseCases.includes(useCase)
        ? prev.aiUseCases.filter(uc => uc !== useCase)
        : [...prev.aiUseCases, useCase]
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

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const formatMonths = (months: number) => {
    if (months < 12) {
      return `${months.toFixed(1)} months`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      return remainingMonths > 0 ? `${years}y ${remainingMonths.toFixed(0)}m` : `${years}y`;
    }
  };

  return (
    <ErrorBoundary>
      <SEO
        title="AI ROI Calculator 2026 - Calculate Your AI Investment Return"
        description="Calculate the potential ROI of your AI investments with our comprehensive 2026 AI ROI calculator. Get detailed projections and implementation recommendations."
        keywords="AI ROI calculator, AI investment return, AI cost benefit analysis, AI business case, AI financial planning, AI ROI projection"
        url="/tools/ai-roi-calculator-2026"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">💰 AI ROI CALCULATOR 2026</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI ROI Calculator 2026
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                Calculate the potential return on investment for your AI initiatives. 
                Get detailed projections and implementation recommendations.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your AI ROI</h2>
              
              <div className="space-y-6">
                {/* Company Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                  <select
                    value={inputs.companySize}
                    onChange={(e) => handleInputChange('companySize', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="startup">Startup (1-10 employees)</option>
                    <option value="smb">Small Business (11-50 employees)</option>
                    <option value="mid-market">Mid-Market (51-500 employees)</option>
                    <option value="enterprise">Enterprise (500+ employees)</option>
                  </select>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select
                    value={inputs.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="financial-services">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Current Revenue */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Revenue</label>
                  <input
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="1000000"
                  />
                </div>

                {/* Current Employees */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                  <input
                    type="number"
                    value={inputs.currentEmployees}
                    onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="50"
                  />
                </div>

                {/* AI Use Cases */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">AI Use Cases (Select all that apply)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.keys(useCaseBenefits).map((useCase) => (
                      <label key={useCase} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={inputs.aiUseCases.includes(useCase)}
                          onChange={() => handleUseCaseToggle(useCase)}
                          className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700 capitalize">
                          {useCase.replace('-', ' ')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Implementation Timeline */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Implementation Timeline</label>
                  <select
                    value={inputs.implementationTimeline}
                    onChange={(e) => handleInputChange('implementationTimeline', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="3-months">3 months</option>
                    <option value="6-months">6 months</option>
                    <option value="12-months">12 months</option>
                    <option value="18-months">18 months</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">AI Implementation Budget</label>
                  <input
                    type="number"
                    value={inputs.budget}
                    onChange={(e) => handleInputChange('budget', parseInt(e.target.value) || 0)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="100000"
                  />
                </div>

                {/* Risk Tolerance */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Risk Tolerance</label>
                  <select
                    value={inputs.riskTolerance}
                    onChange={(e) => handleInputChange('riskTolerance', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="low">Low Risk</option>
                    <option value="medium">Medium Risk</option>
                    <option value="high">High Risk</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Projection</h2>
              
              {isCalculating ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                  <span className="ml-3 text-gray-600">Calculating...</span>
                </div>
              ) : calculation ? (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-600 font-medium">Net ROI</div>
                      <div className="text-2xl font-bold text-green-700">
                        {formatPercentage(calculation.netROI)}
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-600 font-medium">Payback Period</div>
                      <div className="text-2xl font-bold text-blue-700">
                        {formatMonths(calculation.paybackPeriod * 12)}
                      </div>
                    </div>
                  </div>

                  {/* Investment Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Investment Breakdown</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Investment:</span>
                        <span className="font-semibold">{formatCurrency(calculation.totalInvestment)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Savings:</span>
                        <span className="font-semibold text-green-600">{formatCurrency(calculation.annualSavings)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenue Increase:</span>
                        <span className="font-semibold text-blue-600">{formatCurrency(calculation.revenueIncrease)}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-900 font-semibold">Total Annual Benefits:</span>
                        <span className="font-bold text-indigo-600">{formatCurrency(calculation.totalBenefits)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Long-term Projections */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Long-term Projections</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">3-Year ROI:</span>
                        <span className="font-semibold text-indigo-600">{formatPercentage(calculation.threeYearROI)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Risk-Adjusted ROI:</span>
                        <span className="font-semibold text-purple-600">{formatPercentage(calculation.riskAdjustedROI)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Recommendations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {calculation.netROI > 200 && (
                        <li>• Excellent ROI potential - strongly recommended to proceed</li>
                      )}
                      {calculation.netROI > 100 && calculation.netROI <= 200 && (
                        <li>• Good ROI potential - recommended with proper planning</li>
                      )}
                      {calculation.netROI > 50 && calculation.netROI <= 100 && (
                        <li>• Moderate ROI potential - consider pilot project first</li>
                      )}
                      {calculation.netROI <= 50 && (
                        <li>• Low ROI potential - review use cases and budget</li>
                      )}
                      {calculation.paybackPeriod < 1 && (
                        <li>• Quick payback period - low risk investment</li>
                      )}
                      {calculation.paybackPeriod > 2 && (
                        <li>• Longer payback period - consider phased implementation</li>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>Select AI use cases to see your ROI projection</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Implement Your AI Strategy?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Our AI implementation toolkit and expert guidance can help you achieve these projected returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Get Implementation Support
                </Link>
                <Link
                  href="/resources/ai-2026-implementation-toolkit"
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  Download Toolkit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}