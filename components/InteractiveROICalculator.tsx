import React, { useState } from 'react';

const InteractiveROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentRevenue: 1000000,
    currentEmployees: 100,
    currentEfficiency: 70,
    currentCosts: 500000,
    aiInvestment: 200000,
    implementationTime: 6
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const {
      currentRevenue,
      currentEmployees,
      currentEfficiency,
      currentCosts,
      aiInvestment,
      implementationTime
    } = inputs;

    // Calculate efficiency improvements
    const efficiencyGain = (100 - currentEfficiency) * 0.6; // AI can improve efficiency by 60% of current inefficiency
    const newEfficiency = Math.min(95, currentEfficiency + efficiencyGain);
    
    // Calculate cost savings
    const laborCostSavings = (currentCosts * 0.4) * (efficiencyGain / 100); // 40% of costs are labor
    const operationalSavings = currentCosts * 0.15; // 15% operational savings
    const totalCostSavings = laborCostSavings + operationalSavings;
    
    // Calculate revenue increase
    const revenueIncrease = currentRevenue * (efficiencyGain / 100) * 0.8; // 80% of efficiency gains translate to revenue
    
    // Calculate ROI
    const totalBenefits = totalCostSavings + revenueIncrease;
    const roi = ((totalBenefits - aiInvestment) / aiInvestment) * 100;
    const paybackPeriod = aiInvestment / (totalBenefits / 12); // months
    
    // Calculate 3-year projections
    const year1Benefits = totalBenefits * 0.7; // 70% in first year
    const year2Benefits = totalBenefits * 0.9; // 90% in second year
    const year3Benefits = totalBenefits; // 100% in third year
    
    const threeYearROI = ((year1Benefits + year2Benefits + year3Benefits - aiInvestment) / aiInvestment) * 100;
    
    setResults({
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      totalBenefits: Math.round(totalBenefits),
      costSavings: Math.round(totalCostSavings),
      revenueIncrease: Math.round(revenueIncrease),
      efficiencyGain: Math.round(efficiencyGain),
      newEfficiency: Math.round(newEfficiency),
      threeYearROI: Math.round(threeYearROI),
      year1Benefits: Math.round(year1Benefits),
      year2Benefits: Math.round(year2Benefits),
      year3Benefits: Math.round(year3Benefits)
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">💰 ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Investment ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the potential return on investment for your AI transformation. 
            Get personalized projections based on your business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Operational Efficiency (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="70"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Operating Costs ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentCosts}
                  onChange={(e) => handleInputChange('currentCosts', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="500,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Investment Budget ($)
                </label>
                <input
                  type="number"
                  value={inputs.aiInvestment}
                  onChange={(e) => handleInputChange('aiInvestment', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="200,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Timeline (months)
                </label>
                <select
                  value={inputs.implementationTime}
                  onChange={(e) => handleInputChange('implementationTime', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value={3}>3 months</option>
                  <option value={6}>6 months</option>
                  <option value={12}>12 months</option>
                  <option value={18}>18 months</option>
                  <option value={24}>24 months</option>
                </select>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Calculate My ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your ROI Projections</h3>
            
            {results ? (
              <div className="space-y-6">
                {/* Main ROI */}
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">{results.roi}%</div>
                  <div className="text-lg opacity-90">First Year ROI</div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{results.paybackPeriod}</div>
                    <div className="text-sm text-gray-600">Months to Payback</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">${(results.totalBenefits / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-gray-600">Annual Benefits</div>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Benefit Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Savings</span>
                      <span className="font-semibold text-green-600">${(results.costSavings / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Revenue Increase</span>
                      <span className="font-semibold text-blue-600">${(results.revenueIncrease / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Efficiency Gain</span>
                      <span className="font-semibold text-purple-600">+{results.efficiencyGain}%</span>
                    </div>
                  </div>
                </div>

                {/* 3-Year Projection */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">3-Year Projection</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year 1 Benefits</span>
                      <span className="font-semibold">${(results.year1Benefits / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year 2 Benefits</span>
                      <span className="font-semibold">${(results.year2Benefits / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year 3 Benefits</span>
                      <span className="font-semibold">${(results.year3Benefits / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold text-lg">
                      <span>3-Year ROI</span>
                      <span className="text-green-600">{results.threeYearROI}%</span>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center pt-4">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors">
                    Get Your Custom Proposal
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-500 text-lg">
                  Enter your business metrics and click "Calculate My ROI" to see your personalized projections.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How We Calculate ROI</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Efficiency Gains</h4>
              <p className="text-gray-600 text-sm">
                AI automation typically improves operational efficiency by 40-60%, 
                reducing manual work and increasing productivity.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">💰</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cost Savings</h4>
              <p className="text-gray-600 text-sm">
                Reduced labor costs, improved resource utilization, and 
                automated processes lead to significant operational savings.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Revenue Growth</h4>
              <p className="text-gray-600 text-sm">
                Enhanced efficiency and capabilities often translate to 
                increased revenue through better customer service and capacity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculator;