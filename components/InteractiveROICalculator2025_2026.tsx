import React, { useState, useEffect } from 'react';

const InteractiveROICalculator2025_2026: React.FC = () => {
  const [inputs, setInputs] = useState({
    currentRevenue: 100000000, // $100M
    currentCosts: 80000000,    // $80M
    industry: 'manufacturing',
    companySize: 'large',
    implementationTime: 8
  });

  const [results, setResults] = useState({
    additionalRevenue: 0,
    costSavings: 0,
    efficiencyGains: 0,
    totalBenefits: 0,
    totalInvestment: 0,
    roi: 0,
    paybackPeriod: 0
  });

  const industryMultipliers = {
    manufacturing: { revenue: 3.0, cost: 0.85, efficiency: 4.0 },
    financial: { revenue: 2.5, cost: 0.80, efficiency: 3.5 },
    healthcare: { revenue: 2.8, cost: 0.82, efficiency: 3.8 },
    retail: { revenue: 2.2, cost: 0.78, efficiency: 3.2 },
    technology: { revenue: 3.2, cost: 0.88, efficiency: 4.2 }
  };

  const sizeMultipliers = {
    small: 0.3,
    medium: 0.6,
    large: 1.0,
    enterprise: 1.5
  };

  const calculateROI = () => {
    const industry = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
    const sizeMultiplier = sizeMultipliers[inputs.companySize as keyof typeof sizeMultipliers];
    
    // Calculate benefits
    const additionalRevenue = inputs.currentRevenue * industry.revenue * sizeMultiplier;
    const costSavings = inputs.currentCosts * (1 - industry.cost) * sizeMultiplier;
    const efficiencyGains = inputs.currentRevenue * (industry.efficiency - 1) * sizeMultiplier;
    const totalBenefits = additionalRevenue + costSavings + efficiencyGains;
    
    // Calculate investment (based on company size and implementation complexity)
    const baseInvestment = inputs.currentRevenue * 0.004; // 0.4% of revenue
    const totalInvestment = baseInvestment * sizeMultiplier * (inputs.implementationTime / 8);
    
    // Calculate ROI
    const roi = ((totalBenefits - totalInvestment) / totalInvestment) * 100;
    const paybackPeriod = totalInvestment / (totalBenefits / 12); // months
    
    setResults({
      additionalRevenue,
      costSavings,
      efficiencyGains,
      totalBenefits,
      totalInvestment,
      roi,
      paybackPeriod
    });
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            🧮 INTERACTIVE ROI CALCULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Transformation ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much your business could save and earn with our revolutionary AI transformation suite
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Business Details</h3>
            
            <div className="space-y-6">
              {/* Current Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => setInputs({...inputs, currentRevenue: Number(e.target.value)})}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="100,000,000"
                  />
                </div>
              </div>

              {/* Current Costs */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Costs
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={inputs.currentCosts}
                    onChange={(e) => setInputs({...inputs, currentCosts: Number(e.target.value)})}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="80,000,000"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => setInputs({...inputs, industry: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="financial">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                </select>
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={inputs.companySize}
                  onChange={(e) => setInputs({...inputs, companySize: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-500 employees)</option>
                  <option value="large">Large (501-5000 employees)</option>
                  <option value="enterprise">Enterprise (5000+ employees)</option>
                </select>
              </div>

              {/* Implementation Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Timeline (months)
                </label>
                <input
                  type="range"
                  min="4"
                  max="12"
                  value={inputs.implementationTime}
                  onChange={(e) => setInputs({...inputs, implementationTime: Number(e.target.value)})}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>4 months</span>
                  <span className="font-medium">{inputs.implementationTime} months</span>
                  <span>12 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Your Projected Results</h3>
            
            <div className="space-y-6">
              {/* ROI */}
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {formatNumber(results.roi)}%
                </div>
                <div className="text-lg">Projected ROI</div>
              </div>

              {/* Additional Revenue */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Additional Revenue</span>
                  <span className="text-xl font-bold text-green-400">
                    {formatCurrency(results.additionalRevenue)}
                  </span>
                </div>
              </div>

              {/* Cost Savings */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Cost Savings</span>
                  <span className="text-xl font-bold text-blue-400">
                    {formatCurrency(results.costSavings)}
                  </span>
                </div>
              </div>

              {/* Efficiency Gains */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Efficiency Gains</span>
                  <span className="text-xl font-bold text-purple-400">
                    {formatCurrency(results.efficiencyGains)}
                  </span>
                </div>
              </div>

              {/* Total Benefits */}
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Benefits</span>
                  <span className="text-2xl font-bold text-yellow-400">
                    {formatCurrency(results.totalBenefits)}
                  </span>
                </div>
              </div>

              {/* Investment Required */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Investment Required</span>
                  <span className="text-xl font-bold text-white">
                    {formatCurrency(results.totalInvestment)}
                  </span>
                </div>
              </div>

              {/* Payback Period */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Payback Period</span>
                  <span className="text-xl font-bold text-green-400">
                    {results.paybackPeriod.toFixed(1)} months
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 w-full">
                Get Detailed Analysis
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Achieve These Results?
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Our proven AI transformation framework has helped Fortune 500 companies achieve extraordinary ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                Download Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculator2025_2026;