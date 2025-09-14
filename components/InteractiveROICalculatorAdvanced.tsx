import React, { useState, useEffect } from 'react';

const InteractiveROICalculatorAdvanced = () => {
  const [formData, setFormData] = useState({
    companySize: 'small',
    industry: 'technology',
    currentAutomation: 0,
    monthlyRevenue: 100000,
    employees: 50,
    currentEfficiency: 70,
    aiImplementation: 'basic'
  });

  const [results, setResults] = useState({
    projectedROI: 0,
    monthlySavings: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    efficiencyGain: 0,
    revenueIncrease: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const companySizes = [
    { value: 'startup', label: 'Startup (1-10 employees)', multiplier: 1.2 },
    { value: 'small', label: 'Small (11-50 employees)', multiplier: 1.0 },
    { value: 'medium', label: 'Medium (51-200 employees)', multiplier: 0.8 },
    { value: 'large', label: 'Large (201-1000 employees)', multiplier: 0.6 },
    { value: 'enterprise', label: 'Enterprise (1000+ employees)', multiplier: 0.4 }
  ];

  const industries = [
    { value: 'technology', label: 'Technology', multiplier: 1.5 },
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.3 },
    { value: 'finance', label: 'Financial Services', multiplier: 1.4 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.2 },
    { value: 'retail', label: 'Retail', multiplier: 1.1 },
    { value: 'logistics', label: 'Logistics', multiplier: 1.3 },
    { value: 'other', label: 'Other', multiplier: 1.0 }
  ];

  const aiImplementationLevels = [
    { value: 'basic', label: 'Basic AI Tools', multiplier: 0.3 },
    { value: 'intermediate', label: 'Intermediate Automation', multiplier: 0.6 },
    { value: 'advanced', label: 'Advanced AI Systems', multiplier: 1.0 },
    { value: 'revolutionary', label: 'Revolutionary AI Transformation', multiplier: 1.5 }
  ];

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const sizeMultiplier = companySizes.find(s => s.value === formData.companySize)?.multiplier || 1;
      const industryMultiplier = industries.find(i => i.value === formData.industry)?.multiplier || 1;
      const aiMultiplier = aiImplementationLevels.find(a => a.value === formData.aiImplementation)?.multiplier || 1;
      
      // Base calculations
      const baseEfficiencyGain = (100 - formData.currentEfficiency) * 0.8; // 80% of remaining efficiency potential
      const efficiencyMultiplier = 1 + (baseEfficiencyGain / 100);
      
      // Calculate savings from efficiency gains
      const monthlySavings = (formData.monthlyRevenue * 0.3 * baseEfficiencyGain / 100) * sizeMultiplier * industryMultiplier * aiMultiplier;
      const annualSavings = monthlySavings * 12;
      
      // Calculate revenue increase from improved efficiency
      const revenueIncrease = formData.monthlyRevenue * (baseEfficiencyGain / 100) * 0.5; // 50% of efficiency gain converts to revenue
      const annualRevenueIncrease = revenueIncrease * 12;
      
      // Total annual benefit
      const totalAnnualBenefit = annualSavings + annualRevenueIncrease;
      
      // Implementation cost (simplified)
      const implementationCost = formData.monthlyRevenue * 2 * sizeMultiplier * industryMultiplier;
      
      // ROI calculation
      const projectedROI = ((totalAnnualBenefit - implementationCost) / implementationCost) * 100;
      
      // Payback period (in months)
      const paybackPeriod = implementationCost / monthlySavings;
      
      setResults({
        projectedROI: Math.max(0, projectedROI),
        monthlySavings: Math.round(monthlySavings),
        annualSavings: Math.round(annualSavings),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        efficiencyGain: Math.round(baseEfficiencyGain),
        revenueIncrease: Math.round(annualRevenueIncrease)
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🧮 ADVANCED ROI CALCULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Transformation ROI
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the potential return on investment for your AI transformation. 
            Get personalized projections based on your company's unique profile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Company Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                >
                  {companySizes.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                >
                  {industries.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                  placeholder="100000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                  placeholder="50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Efficiency Level (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0%</span>
                  <span className="font-semibold">{formData.currentEfficiency}%</span>
                  <span>100%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  AI Implementation Level
                </label>
                <select
                  value={formData.aiImplementation}
                  onChange={(e) => handleInputChange('aiImplementation', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                >
                  {aiImplementationLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Projected Results</h3>
            
            {isCalculating ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Calculating your ROI...</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {results.projectedROI.toFixed(0)}%
                    </div>
                    <div className="text-lg font-semibold text-gray-700">Projected ROI</div>
                    <div className="text-sm text-gray-600 mt-2">
                      Based on your company profile
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      ${results.monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      ${results.annualSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {results.paybackPeriod} months
                    </div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">
                      {results.efficiencyGain}%
                    </div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    ${results.revenueIncrease.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Additional Annual Revenue</div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={calculateROI}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Recalculate ROI
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve These Results?</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of companies that have already transformed their operations 
              with our AI solutions. Get started with a personalized consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-xl font-bold mb-2">Personalized Strategy</h4>
              <p className="text-gray-300">Custom AI implementation plan tailored to your business</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-xl font-bold mb-2">Rapid Implementation</h4>
              <p className="text-gray-300">See results within 30 days of implementation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="text-xl font-bold mb-2">Guaranteed Results</h4>
              <p className="text-gray-300">ROI guarantee backed by our success track record</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
              Get Your Custom AI Strategy →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculatorAdvanced;