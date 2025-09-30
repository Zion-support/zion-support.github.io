'use client';

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

<<<<<<< HEAD
interface CalculatorInputs {
  currentRevenue: number;
  currentCosts: number;
  industry: string;
  companySize: string;
  aiMaturity: string;
  implementationTimeline: string;
}

interface CalculatorResults {
  projectedROI: number;
  costSavings: number;
  revenueIncrease: number;
  efficiencyGain: number;
  paybackPeriod: number;
  totalValue: number;
}
=======
import React, { useState } from 'react';
>>>>>>> origin/cursor/create-and-deploy-new-content-a9c3

export default function InteractiveAI2026Calculator() {
<<<<<<< HEAD
  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentRevenue: 10000000,
    currentCosts: 8000000,
    industry: 'manufacturing',
    companySize: 'large',
    aiMaturity: 'beginner',
    implementationTimeline: '12'
=======
  const [formData, setFormData] = useState({
    annualRevenue: '',
    employees: '',
    currentEfficiency: '',
    industry: 'manufacturing'
>>>>>>> origin/cursor/create-and-deploy-new-content-2a1c
  });

  const [results, setResults] = useState<CalculatorResults>({
    projectedROI: 0,
    costSavings: 0,
    revenueIncrease: 0,
    efficiencyGain: 0,
    paybackPeriod: 0,
    totalValue: 0
  });

<<<<<<< HEAD
  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    manufacturing: { roi: 1.4, cost: 1.3, revenue: 1.2, efficiency: 1.5 },
    healthcare: { roi: 1.6, cost: 1.4, revenue: 1.3, efficiency: 1.3 },
    finance: { roi: 1.8, cost: 1.5, revenue: 1.4, efficiency: 1.4 },
    retail: { roi: 1.2, cost: 1.2, revenue: 1.3, efficiency: 1.2 },
    technology: { roi: 1.5, cost: 1.3, revenue: 1.4, efficiency: 1.3 },
    logistics: { roi: 1.3, cost: 1.4, revenue: 1.2, efficiency: 1.6 }
  };

  const sizeMultipliers = {
    small: { roi: 0.8, cost: 0.7, revenue: 0.6, efficiency: 0.8 },
    medium: { roi: 1.0, cost: 1.0, revenue: 1.0, efficiency: 1.0 },
    large: { roi: 1.2, cost: 1.3, revenue: 1.2, efficiency: 1.2 },
    enterprise: { roi: 1.5, cost: 1.5, revenue: 1.4, efficiency: 1.4 }
  };

  const maturityMultipliers = {
    beginner: { roi: 0.7, cost: 0.8, revenue: 0.7, efficiency: 0.8 },
    intermediate: { roi: 1.0, cost: 1.0, revenue: 1.0, efficiency: 1.0 },
    advanced: { roi: 1.3, cost: 1.2, revenue: 1.2, efficiency: 1.2 },
    expert: { roi: 1.6, cost: 1.4, revenue: 1.4, efficiency: 1.4 }
  };

  const calculateResults = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industry = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
      const size = sizeMultipliers[inputs.companySize as keyof typeof sizeMultipliers];
      const maturity = maturityMultipliers[inputs.aiMaturity as keyof typeof maturityMultipliers];
      
      const baseROI = 250; // Base ROI percentage
      const baseCostReduction = 0.35; // Base cost reduction percentage
      const baseRevenueIncrease = 0.25; // Base revenue increase percentage
      const baseEfficiencyGain = 0.60; // Base efficiency gain percentage
      
      const multiplier = industry.roi * size.roi * maturity.roi;
      const costMultiplier = industry.cost * size.cost * maturity.cost;
      const revenueMultiplier = industry.revenue * size.revenue * maturity.revenue;
      const efficiencyMultiplier = industry.efficiency * size.efficiency * maturity.efficiency;
      
      const projectedROI = Math.round(baseROI * multiplier);
      const costSavings = Math.round(inputs.currentCosts * baseCostReduction * costMultiplier);
      const revenueIncrease = Math.round(inputs.currentRevenue * baseRevenueIncrease * revenueMultiplier);
      const efficiencyGain = Math.round(baseEfficiencyGain * efficiencyMultiplier * 100);
      
      const totalValue = costSavings + revenueIncrease;
      const paybackPeriod = Math.round((totalValue * 0.1) / (totalValue / 12)); // Simplified calculation
      
      setResults({
        projectedROI,
        costSavings,
        revenueIncrease,
        efficiencyGain,
        paybackPeriod: Math.max(6, Math.min(24, paybackPeriod)),
        totalValue
      });
      
      setIsCalculating(false);
    }, 1500);
=======
export default function InteractiveAI2026Calculator() {
  const [formData, setFormData] = useState({
    employees: 100,
    monthlyRevenue: 1000000,
    currentAutomation: 20,
    industry: 'manufacturing',
    processes: 50
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    roi: 0,
    paybackPeriod: 0,
    efficiencyGain: 0,
    costReduction: 0
  });

  const industries = [
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.2 },
    { value: 'finance', label: 'Financial Services', multiplier: 1.5 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.3 },
    { value: 'retail', label: 'Retail', multiplier: 1.1 },
    { value: 'technology', label: 'Technology', multiplier: 1.4 },
    { value: 'other', label: 'Other', multiplier: 1.0 }
  ];

  const calculateResults = () => {
    const industryMultiplier = industries.find(i => i.value === formData.industry)?.multiplier || 1.0;
    
    // Base calculations
    const baseSavings = formData.monthlyRevenue * 0.15; // 15% of revenue as potential savings
    const automationPotential = (100 - formData.currentAutomation) / 100;
    const processMultiplier = Math.min(formData.processes / 25, 2); // Cap at 2x for processes > 25
    
    // Calculate annual savings
    const annualSavings = baseSavings * 12 * industryMultiplier * automationPotential * processMultiplier;
    
    // Calculate implementation cost (typically 20-30% of annual savings)
    const implementationCost = annualSavings * 0.25;
    
    // Calculate ROI
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    
    // Calculate payback period (in months)
    const paybackPeriod = implementationCost / (annualSavings / 12);
    
    // Calculate efficiency gain
    const efficiencyGain = Math.min(automationPotential * 80, 85); // Cap at 85%
    
    // Calculate cost reduction percentage
    const costReduction = Math.min(automationPotential * 60, 70); // Cap at 70%

    setResults({
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      efficiencyGain: Math.round(efficiencyGain),
      costReduction: Math.round(costReduction)
=======
  const calculateROI = () => {
    const revenue = parseFloat(formData.annualRevenue) || 0;
    const empCount = parseInt(formData.employees) || 0;
    const efficiency = parseFloat(formData.currentEfficiency) || 0;
    
    // AI 2026 ROI calculation based on industry benchmarks
    const costSavings = revenue * 0.15; // 15% cost reduction
    const productivityGains = revenue * 0.25; // 25% productivity increase
    const efficiencyImprovement = (100 - efficiency) * 0.9; // 90% of current inefficiency
    const totalROI = ((costSavings + productivityGains) / revenue) * 100;
    
    setResults({
      costSavings: Math.round(costSavings),
      productivityGains: Math.round(productivityGains),
      efficiencyImprovement: Math.round(efficiencyImprovement),
      totalROI: Math.round(totalROI),
      paybackPeriod: Math.round(12 / (totalROI / 100))
>>>>>>> origin/cursor/create-and-deploy-new-content-2a1c
    });
>>>>>>> origin/cursor/create-and-deploy-new-content-2736
  };

  useEffect(() => {
    calculateResults();
<<<<<<< HEAD
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
=======
  }, [formData]);

  const handleInputChange = (field: string, value: number | string) => {
    setFormData(prev => ({
>>>>>>> origin/cursor/create-and-deploy-new-content-2736
      ...prev,
      [field]: value
    }));
  };

<<<<<<< HEAD
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
<<<<<<< HEAD
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your AI ROI</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Annual Revenue
              </label>
              <input
                type="number"
                value={inputs.currentRevenue}
                onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="10,000,000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Annual Costs
              </label>
              <input
                type="number"
                value={inputs.currentCosts}
                onChange={(e) => handleInputChange('currentCosts', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="8,000,000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={inputs.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Financial Services</option>
                <option value="retail">Retail & E-commerce</option>
                <option value="technology">Technology</option>
                <option value="logistics">Logistics & Supply Chain</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company Size
              </label>
              <select
                value={inputs.companySize}
                onChange={(e) => handleInputChange('companySize', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="small">Small (1-50 employees)</option>
                <option value="medium">Medium (51-500 employees)</option>
                <option value="large">Large (501-5000 employees)</option>
                <option value="enterprise">Enterprise (5000+ employees)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current AI Maturity
              </label>
              <select
                value={inputs.aiMaturity}
                onChange={(e) => handleInputChange('aiMaturity', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="beginner">Beginner - No AI implementation</option>
                <option value="intermediate">Intermediate - Some AI tools</option>
                <option value="advanced">Advanced - Multiple AI systems</option>
                <option value="expert">Expert - AI-first organization</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Implementation Timeline (months)
              </label>
              <select
                value={inputs.implementationTimeline}
                onChange={(e) => handleInputChange('implementationTimeline', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="6">6 months</option>
                <option value="12">12 months</option>
                <option value="18">18 months</option>
                <option value="24">24 months</option>
              </select>
            </div>
=======
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your AI 2026 ROI</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Revenue ($)
              </label>
              <input
                type="number"
                placeholder="10,000,000"
                value={formData.annualRevenue}
                onChange={(e) => setFormData({...formData, annualRevenue: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                placeholder="500"
                value={formData.employees}
                onChange={(e) => setFormData({...formData, employees: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Efficiency (%)
              </label>
              <input
                type="number"
                placeholder="60"
                min="0"
                max="100"
                value={formData.currentEfficiency}
                onChange={(e) => setFormData({...formData, currentEfficiency: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="technology">Technology</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <button
              onClick={calculateROI}
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Calculate AI 2026 ROI
            </button>
>>>>>>> origin/cursor/create-and-deploy-new-content-2a1c
          </div>
        </div>

        {/* Results Section */}
<<<<<<< HEAD
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI Transformation Projections</h3>
          
          {isCalculating ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Calculating your AI ROI...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {results.projectedROI}%
                  </div>
                  <div className="text-gray-600 font-semibold">Projected ROI</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Based on industry benchmarks and your inputs
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {formatCurrency(results.costSavings)}
                  </div>
                  <div className="text-sm text-gray-600">Annual Cost Savings</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {formatCurrency(results.revenueIncrease)}
                  </div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {results.efficiencyGain}%
                  </div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {results.paybackPeriod}
                  </div>
                  <div className="text-sm text-gray-600">Payback (months)</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    {formatCurrency(results.totalValue)}
                  </div>
                  <div className="text-lg font-semibold mb-1">Total Annual Value</div>
                  <div className="text-sm opacity-90">
                    Combined cost savings and revenue increase
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="text-yellow-600 text-xl">💡</div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Pro Tip</h4>
                    <p className="text-sm text-yellow-700">
                      These projections are based on industry averages. Actual results may vary based on 
                      implementation quality, data quality, and organizational readiness.
                    </p>
                  </div>
                </div>
              </div>
=======
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Projected Results</h3>
          {results ? (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Annual Cost Savings</h4>
                    <p className="text-gray-600 text-sm">From AI automation and optimization</p>
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    ${results.costSavings.toLocaleString()}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Productivity Gains</h4>
                    <p className="text-gray-600 text-sm">From enhanced efficiency</p>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    ${results.productivityGains.toLocaleString()}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Efficiency Improvement</h4>
                    <p className="text-gray-600 text-sm">Overall operational efficiency</p>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">
                    {results.efficiencyImprovement}%
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Total ROI</h4>
                    <p className="text-gray-600 text-sm">Return on AI investment</p>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    {results.totalROI}%
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
                    <p className="text-gray-600 text-sm">Months to recover investment</p>
                  </div>
                  <div className="text-3xl font-bold text-teal-600">
                    {results.paybackPeriod} months
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Calculate?</h4>
              <p className="text-gray-600">
                Enter your business metrics to see your projected AI 2026 ROI and transformation results.
              </p>
>>>>>>> origin/cursor/create-and-deploy-new-content-2a1c
            </div>
          )}
          
          {results && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-semibold text-blue-900 mb-2">AI 2026 Technologies Included:</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Quantum-enhanced optimization</li>
                  <li>• Autonomous business systems</li>
                  <li>• Neural interface technology</li>
                  <li>• Edge AI computing</li>
                  <li>• Multimodal AI integration</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
<<<<<<< HEAD

      {/* Additional Information */}
      <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How We Calculate Your AI ROI</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Industry Analysis</h4>
            <p className="text-sm text-gray-600">
              We analyze your industry's AI adoption patterns and success rates to provide accurate projections.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Company Factors</h4>
            <p className="text-sm text-gray-600">
              Your company size, current AI maturity, and implementation timeline all factor into the calculation.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Real Data</h4>
            <p className="text-sm text-gray-600">
              Our calculations are based on real-world data from 500+ successful AI implementations.
            </p>
          </div>
        </div>
      </div>
=======
      
      {results && (
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Achieve These Results?</h4>
          <p className="text-gray-600 mb-6">
            Our AI 2026 Revolutionary Solutions can help you achieve these projected results 
            with guaranteed ROI and expert implementation support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="/services/ai-2026-revolutionary-solutions"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Explore AI 2026 Solutions
            </a>
          </div>
        </div>
      )}
>>>>>>> origin/cursor/create-and-deploy-new-content-2a1c
    </div>
=======
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI Automation ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential savings and ROI from AI automation. Get instant insights 
            based on your business size, industry, and current automation level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="range"
                  min="10"
                  max="10000"
                  value={formData.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>10</span>
                  <span className="font-semibold text-blue-600">{formData.employees.toLocaleString()}</span>
                  <span>10,000+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="100000"
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>$100K</span>
                  <span className="font-semibold text-blue-600">${(formData.monthlyRevenue / 1000000).toFixed(1)}M</span>
                  <span>$50M+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Level (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={formData.currentAutomation}
                  onChange={(e) => handleInputChange('currentAutomation', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>0%</span>
                  <span className="font-semibold text-blue-600">{formData.currentAutomation}%</span>
                  <span>80%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industries.map(industry => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Business Processes
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={formData.processes}
                  onChange={(e) => handleInputChange('processes', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>10</span>
                  <span className="font-semibold text-blue-600">{formData.processes}</span>
                  <span>200+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your AI Automation Potential</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">${(results.annualSavings / 1000000).toFixed(1)}M</div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{results.roi}%</div>
                  <div className="text-sm opacity-90">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{results.paybackPeriod}</div>
                  <div className="text-sm opacity-90">Months to ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{results.efficiencyGain}%</div>
                  <div className="text-sm opacity-90">Efficiency Gain</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Implementation Cost</span>
                  <span className="font-semibold text-gray-900">
                    ${Math.round(results.annualSavings * 0.25).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Annual Savings</span>
                  <span className="font-semibold text-green-600">
                    ${results.annualSavings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Net Annual Benefit</span>
                  <span className="font-semibold text-blue-600">
                    ${(results.annualSavings * 0.75).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 bg-green-50 rounded-lg px-4">
                  <span className="text-gray-700 font-semibold">3-Year Total Savings</span>
                  <span className="font-bold text-green-600 text-xl">
                    ${(results.annualSavings * 2.25).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-3">Ready to Get Started?</h4>
              <p className="text-sm opacity-90 mb-4">
                Our AI automation experts can help you achieve these results. Get a free 
                consultation and custom implementation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Insights */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why These Results Matter</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Immediate Cost Savings</h4>
              <p className="text-gray-600 text-sm">
                Reduce operational costs by automating repetitive tasks and improving process efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Productivity</h4>
              <p className="text-gray-600 text-sm">
                Free up your team to focus on strategic initiatives and high-value activities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Competitive Advantage</h4>
              <p className="text-gray-600 text-sm">
                Stay ahead of competitors with advanced AI capabilities and streamlined operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> origin/cursor/create-and-deploy-new-content-2736
  );
}