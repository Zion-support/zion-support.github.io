import React, { useState, useEffect } from 'react';

const InteractiveROICalculatorAdvanced = () => {
  const [formData, setFormData] = useState({
    companySize: 'small',
    industry: 'technology',
    currentAutomation: 0,
    monthlyRevenue: 100000,
    employees: 50,
    currentEfficiency: 60,
    targetEfficiency: 85,
    implementationTime: 6,
    monthlyCosts: 50000
  });

  const [results, setResults] = useState({
    efficiencyGain: 0,
    costSavings: 0,
    revenueIncrease: 0,
    totalROI: 0,
    paybackPeriod: 0,
    netBenefit: 0
  });

  const [isCalculated, setIsCalculated] = useState(false);

  const companySizes = [
    { value: 'startup', label: 'Startup (1-10 employees)', multiplier: 0.8 },
    { value: 'small', label: 'Small (11-50 employees)', multiplier: 1.0 },
    { value: 'medium', label: 'Medium (51-200 employees)', multiplier: 1.5 },
    { value: 'large', label: 'Large (201-1000 employees)', multiplier: 2.0 },
    { value: 'enterprise', label: 'Enterprise (1000+ employees)', multiplier: 3.0 }
  ];

  const industries = [
    { value: 'technology', label: 'Technology', multiplier: 1.2 },
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.5 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.3 },
    { value: 'finance', label: 'Finance', multiplier: 1.4 },
    { value: 'retail', label: 'Retail', multiplier: 1.1 },
    { value: 'education', label: 'Education', multiplier: 0.9 },
    { value: 'other', label: 'Other', multiplier: 1.0 }
  ];

  const calculateROI = () => {
    const sizeMultiplier = companySizes.find(s => s.value === formData.companySize)?.multiplier || 1;
    const industryMultiplier = industries.find(i => i.value === formData.industry)?.multiplier || 1;
    
    // Base calculations
    const efficiencyGain = formData.targetEfficiency - formData.currentEfficiency;
    const efficiencyGainPercent = efficiencyGain / 100;
    
    // Cost savings from efficiency gains
    const laborCostSavings = formData.monthlyCosts * efficiencyGainPercent * 0.6; // 60% of costs are labor
    const operationalSavings = formData.monthlyCosts * efficiencyGainPercent * 0.3; // 30% operational
    const totalMonthlySavings = (laborCostSavings + operationalSavings) * sizeMultiplier * industryMultiplier;
    
    // Revenue increase from efficiency gains
    const revenueIncrease = formData.monthlyRevenue * efficiencyGainPercent * 0.4; // 40% of efficiency gains translate to revenue
    
    // Implementation costs (based on company size and complexity)
    const baseImplementationCost = 50000;
    const implementationCost = baseImplementationCost * sizeMultiplier * industryMultiplier;
    
    // Monthly AI solution costs
    const monthlyAICost = 5000 * sizeMultiplier;
    
    // Calculate annual benefits
    const annualSavings = totalMonthlySavings * 12;
    const annualRevenueIncrease = revenueIncrease * 12;
    const annualAICost = monthlyAICost * 12;
    const totalAnnualBenefit = annualSavings + annualRevenueIncrease - annualAICost;
    
    // ROI calculation
    const totalROI = ((totalAnnualBenefit - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / (totalAnnualBenefit / 12);
    const netBenefit = totalAnnualBenefit - implementationCost;
    
    setResults({
      efficiencyGain: efficiencyGain,
      costSavings: annualSavings,
      revenueIncrease: annualRevenueIncrease,
      totalROI: totalROI,
      paybackPeriod: paybackPeriod,
      netBenefit: netBenefit
    });
    
    setIsCalculated(true);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setIsCalculated(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number, decimals: number = 1) => {
    return num.toFixed(decimals);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">💰 ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Investment ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See exactly how much you could save and earn with our AI solutions. 
            Get personalized ROI projections based on your business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Details</h3>
            
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Company Size</label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {companySizes.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Monthly Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Monthly Revenue: {formatCurrency(formData.monthlyRevenue)}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$10K</span>
                  <span>$10M</span>
                </div>
              </div>

              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Number of Employees: {formData.employees}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10000"
                  step="1"
                  value={formData.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1</span>
                  <span>10,000</span>
                </div>
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Current Efficiency: {formData.currentEfficiency}%
                </label>
                <input
                  type="range"
                  min="20"
                  max="90"
                  step="5"
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>20%</span>
                  <span>90%</span>
                </div>
              </div>

              {/* Target Efficiency */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Target Efficiency: {formData.targetEfficiency}%
                </label>
                <input
                  type="range"
                  min={formData.currentEfficiency + 5}
                  max="95"
                  step="5"
                  value={formData.targetEfficiency}
                  onChange={(e) => handleInputChange('targetEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>{formData.currentEfficiency + 5}%</span>
                  <span>95%</span>
                </div>
              </div>

              {/* Monthly Operating Costs */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Monthly Operating Costs: {formatCurrency(formData.monthlyCosts)}
                </label>
                <input
                  type="range"
                  min="5000"
                  max="5000000"
                  step="5000"
                  value={formData.monthlyCosts}
                  onChange={(e) => handleInputChange('monthlyCosts', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$5K</span>
                  <span>$5M</span>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Calculate My ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your ROI Projection</h3>
            
            {!isCalculated ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💰</div>
                <p className="text-gray-500 text-lg">Fill in your details and click "Calculate My ROI" to see your personalized results</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Main ROI */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {formatNumber(results.totalROI)}%
                    </div>
                    <div className="text-lg font-semibold text-green-800">Expected ROI</div>
                    <div className="text-sm text-green-600 mt-1">First year return on investment</div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {formatNumber(results.efficiencyGain)}%
                    </div>
                    <div className="text-sm font-semibold text-blue-800">Efficiency Gain</div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {formatNumber(results.paybackPeriod, 1)}m
                    </div>
                    <div className="text-sm font-semibold text-purple-800">Payback Period</div>
                  </div>
                </div>

                {/* Financial Benefits */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Annual Benefits</h4>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Cost Savings</span>
                    <span className="font-semibold text-green-600">{formatCurrency(results.costSavings)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Revenue Increase</span>
                    <span className="font-semibold text-blue-600">{formatCurrency(results.revenueIncrease)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                    <span className="font-semibold text-gray-900">Net Annual Benefit</span>
                    <span className="font-bold text-purple-600 text-lg">{formatCurrency(results.netBenefit)}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Get Detailed Proposal
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How We Calculate ROI</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Efficiency Gains</h4>
              <p className="text-gray-600 text-sm">Based on your current vs target efficiency levels and industry benchmarks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cost Savings</h4>
              <p className="text-gray-600 text-sm">Labor and operational cost reductions from improved efficiency</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Revenue Growth</h4>
              <p className="text-gray-600 text-sm">Additional revenue from improved efficiency and customer satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculatorAdvanced;