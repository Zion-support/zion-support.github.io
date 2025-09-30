import React, { useState } from 'react';

export default function InteractiveAICalculator2026() {
  const [formData, setFormData] = useState({
    companySize: 'medium',
    industry: 'technology',
    currentEfficiency: 60,
    annualRevenue: 10000000,
    currentCosts: 5000000,
    aiReadiness: 'intermediate'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const { companySize, industry, currentEfficiency, annualRevenue, currentCosts, aiReadiness } = formData;
    
    // Base multipliers based on company size
    const sizeMultipliers = {
      small: { efficiency: 0.3, cost: 0.2, implementation: 0.8 },
      medium: { efficiency: 0.4, cost: 0.3, implementation: 1.0 },
      large: { efficiency: 0.5, cost: 0.4, implementation: 1.2 },
      enterprise: { efficiency: 0.6, cost: 0.5, implementation: 1.5 }
    };

    // Industry-specific multipliers
    const industryMultipliers = {
      technology: { efficiency: 1.2, cost: 1.1 },
      manufacturing: { efficiency: 1.3, cost: 1.2 },
      healthcare: { efficiency: 1.1, cost: 1.0 },
      finance: { efficiency: 1.4, cost: 1.3 },
      retail: { efficiency: 1.0, cost: 0.9 }
    };

    // AI readiness multipliers
    const readinessMultipliers = {
      beginner: { efficiency: 0.7, cost: 0.6, time: 1.5 },
      intermediate: { efficiency: 1.0, cost: 1.0, time: 1.0 },
      advanced: { efficiency: 1.3, cost: 1.2, time: 0.7 }
    };

    const size = sizeMultipliers[companySize as keyof typeof sizeMultipliers];
    const industry = industryMultipliers[formData.industry as keyof typeof industryMultipliers];
    const readiness = readinessMultipliers[aiReadiness as keyof typeof readinessMultipliers];

    // Calculate efficiency improvement
    const baseEfficiencyGain = (100 - currentEfficiency) * 0.8; // 80% of potential improvement
    const efficiencyGain = baseEfficiencyGain * size.efficiency * industry.efficiency * readiness.efficiency;

    // Calculate cost savings
    const baseCostSavings = currentCosts * 0.4; // 40% base cost reduction
    const costSavings = baseCostSavings * size.cost * industry.cost * readiness.cost;

    // Calculate implementation costs
    const baseImplementationCost = annualRevenue * 0.05; // 5% of revenue
    const implementationCost = baseImplementationCost * size.implementation * readiness.time;

    // Calculate ROI
    const netSavings = costSavings - implementationCost;
    const roi = (netSavings / implementationCost) * 100;

    // Calculate payback period
    const paybackPeriod = implementationCost / (costSavings / 12);

    // Calculate additional revenue from efficiency gains
    const additionalRevenue = annualRevenue * (efficiencyGain / 100) * 0.3; // 30% of efficiency gain converts to revenue

    setResults({
      efficiencyGain: Math.round(efficiencyGain),
      costSavings: Math.round(costSavings),
      implementationCost: Math.round(implementationCost),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      additionalRevenue: Math.round(additionalRevenue)
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI ROI Calculator 2026
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Calculate your potential ROI from AI implementation. Get personalized projections based on your company's unique profile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Company Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Company Size</label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-500 employees)</option>
                  <option value="large">Large (501-5000 employees)</option>
                  <option value="enterprise">Enterprise (5000+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="technology">Technology</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Current Efficiency Level: {formData.currentEfficiency}%
                </label>
                <input
                  type="range"
                  min="20"
                  max="90"
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-300 mt-1">
                  <span>20%</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Annual Revenue ($)</label>
                <input
                  type="number"
                  value={formData.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter annual revenue"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Current Annual Costs ($)</label>
                <input
                  type="number"
                  value={formData.currentCosts}
                  onChange={(e) => handleInputChange('currentCosts', parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter current annual costs"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">AI Readiness Level</label>
                <select
                  value={formData.aiReadiness}
                  onChange={(e) => handleInputChange('aiReadiness', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="beginner">Beginner (Limited AI experience)</option>
                  <option value="intermediate">Intermediate (Some AI tools in use)</option>
                  <option value="advanced">Advanced (Extensive AI implementation)</option>
                </select>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Calculate My AI ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Projected Results</h3>
            
            {results ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold mb-2">{results.efficiencyGain}%</div>
                    <div className="text-sm opacity-90">Efficiency Improvement</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold mb-2">{results.roi}%</div>
                    <div className="text-sm opacity-90">ROI</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-gray-300">Annual Cost Savings:</span>
                    <span className="text-xl font-bold text-green-400">${results.costSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-gray-300">Implementation Cost:</span>
                    <span className="text-xl font-bold text-blue-400">${results.implementationCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-gray-300">Net Annual Savings:</span>
                    <span className="text-xl font-bold text-green-400">${results.netSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-gray-300">Payback Period:</span>
                    <span className="text-xl font-bold text-purple-400">{results.paybackPeriod} months</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Additional Revenue:</span>
                    <span className="text-xl font-bold text-pink-400">${results.additionalRevenue.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-bold mb-2">Total Annual Value</h4>
                  <div className="text-3xl font-bold">
                    ${(results.netSavings + results.additionalRevenue).toLocaleString()}
                  </div>
                  <div className="text-sm opacity-90">Combined savings and revenue</div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-300 text-lg">
                  Fill out the form and click "Calculate My AI ROI" to see your personalized projections
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve These Results?</h3>
            <p className="text-lg text-purple-100 mb-6">
              Our AI experts can help you implement these improvements and exceed these projections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}