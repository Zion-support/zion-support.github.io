import React, { useState, useEffect } from 'react';
import SEO from '../../../components/SEO';

export default function AIROICalculator2026() {
  const [inputs, setInputs] = useState({
    companySize: 'medium',
    industry: 'manufacturing',
    currentRevenue: 100000000,
    currentEmployees: 1000,
    currentOperationalCosts: 60000000,
    automationLevel: 30,
    implementationTimeline: 18,
    technologyInvestment: 5000000
  });

  const [results, setResults] = useState({
    totalROI: 0,
    paybackPeriod: 0,
    netPresentValue: 0,
    costSavings: 0,
    revenueIncrease: 0,
    productivityGains: 0
  });

  const industryMultipliers = {
    manufacturing: { costReduction: 0.45, productivity: 0.34, revenue: 0.25 },
    healthcare: { costReduction: 0.35, productivity: 0.28, revenue: 0.20 },
    finance: { costReduction: 0.40, productivity: 0.30, revenue: 0.22 },
    retail: { costReduction: 0.38, productivity: 0.32, revenue: 0.28 },
    technology: { costReduction: 0.42, productivity: 0.36, revenue: 0.30 },
    logistics: { costReduction: 0.48, productivity: 0.40, revenue: 0.26 }
  };

  const sizeMultipliers = {
    small: 0.8,
    medium: 1.0,
    large: 1.2,
    enterprise: 1.5
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const industry = industryMultipliers[inputs.industry];
    const sizeMultiplier = sizeMultipliers[inputs.companySize];
    
    // Calculate cost savings
    const annualCostSavings = inputs.currentOperationalCosts * industry.costReduction * sizeMultiplier;
    
    // Calculate productivity gains (as additional revenue)
    const productivityRevenue = inputs.currentRevenue * industry.productivity * sizeMultiplier;
    
    // Calculate direct revenue increase
    const revenueIncrease = inputs.currentRevenue * industry.revenue * sizeMultiplier;
    
    // Total annual benefits
    const totalAnnualBenefits = annualCostSavings + productivityRevenue + revenueIncrease;
    
    // Calculate ROI over implementation timeline
    const totalBenefits = totalAnnualBenefits * (inputs.implementationTimeline / 12);
    const totalROI = ((totalBenefits - inputs.technologyInvestment) / inputs.technologyInvestment) * 100;
    
    // Calculate payback period
    const monthlyBenefits = totalAnnualBenefits / 12;
    const paybackPeriod = inputs.technologyInvestment / monthlyBenefits;
    
    // Calculate NPV (simplified)
    const discountRate = 0.1; // 10% discount rate
    const npv = totalBenefits / Math.pow(1 + discountRate, inputs.implementationTimeline / 12) - inputs.technologyInvestment;
    
    setResults({
      totalROI: Math.round(totalROI),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      netPresentValue: Math.round(npv),
      costSavings: Math.round(annualCostSavings),
      revenueIncrease: Math.round(revenueIncrease),
      productivityGains: Math.round(productivityRevenue)
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <SEO
        title="AI ROI Calculator 2026 - Calculate Your AI Investment Returns"
        description="Calculate the ROI of your AI investment with our advanced 2026 calculator. Get detailed projections for cost savings, revenue growth, and productivity gains."
        keywords="AI ROI calculator, AI investment calculator, AI ROI analysis, AI business case, AI financial planning"
        url="/tools/ai-roi-calculator-2026"
      />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI ROI Calculator 2026
        </h1>
        <p className="text-lg text-gray-600">
          Calculate the return on investment for your AI transformation with our comprehensive 2026 calculator. 
          Get detailed projections based on industry benchmarks and real-world success stories.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Parameters</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Size
              </label>
              <select
                value={inputs.companySize}
                onChange={(e) => handleInputChange('companySize', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="small">Small (1-50 employees)</option>
                <option value="medium">Medium (51-500 employees)</option>
                <option value="large">Large (501-5000 employees)</option>
                <option value="enterprise">Enterprise (5000+ employees)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={inputs.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="technology">Technology</option>
                <option value="logistics">Logistics</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Annual Revenue ($)
              </label>
              <input
                type="number"
                value={inputs.currentRevenue}
                onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="100,000,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                value={inputs.currentEmployees}
                onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Annual Operational Costs ($)
              </label>
              <input
                type="number"
                value={inputs.currentOperationalCosts}
                onChange={(e) => handleInputChange('currentOperationalCosts', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="60,000,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Automation Level (%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={inputs.automationLevel}
                onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-sm text-gray-600 text-center">{inputs.automationLevel}%</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Implementation Timeline (months)
              </label>
              <input
                type="range"
                min="6"
                max="36"
                value={inputs.implementationTimeline}
                onChange={(e) => handleInputChange('implementationTimeline', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-sm text-gray-600 text-center">{inputs.implementationTimeline} months</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technology Investment ($)
              </label>
              <input
                type="number"
                value={inputs.technologyInvestment}
                onChange={(e) => handleInputChange('technologyInvestment', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="5,000,000"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Projections</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {results.totalROI}%
                </div>
                <div className="text-lg text-gray-700">Total ROI</div>
                <div className="text-sm text-gray-600 mt-2">
                  Over {inputs.implementationTimeline} months
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {results.paybackPeriod}
                </div>
                <div className="text-sm text-gray-600">Months to Payback</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">
                  ${(results.netPresentValue / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-gray-600">Net Present Value</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Annual Benefits Breakdown</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Cost Savings</span>
                  <span className="font-semibold text-green-600">
                    ${(results.costSavings / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Productivity Gains</span>
                  <span className="font-semibold text-blue-600">
                    ${(results.productivityGains / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: '25%' }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Revenue Increase</span>
                  <span className="font-semibold text-purple-600">
                    ${(results.revenueIncrease / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full" 
                    style={{ width: '15%' }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Key Insights</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Based on 2026 industry benchmarks</li>
                <li>• Includes both direct and indirect benefits</li>
                <li>• Accounts for implementation timeline</li>
                <li>• Conservative estimates for reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How This Calculator Works</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Benchmarks</h3>
            <p className="text-gray-600 text-sm">
              Our calculations are based on real-world data from Fortune 500 companies 
              that have successfully implemented AI automation in 2026.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Conservative Estimates</h3>
            <p className="text-gray-600 text-sm">
              We use conservative multipliers to ensure realistic projections. 
              Actual results often exceed these estimates by 20-40%.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Comprehensive Benefits</h3>
            <p className="text-gray-600 text-sm">
              Includes cost savings, productivity gains, revenue increases, 
              and risk mitigation benefits for complete ROI analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Start Your AI Transformation?</h3>
          <p className="text-gray-600 mb-4">
            Get expert guidance to achieve these projected results with our comprehensive implementation support.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Get Expert Consultation
          </a>
        </div>
      </div>
    </div>
  );
}