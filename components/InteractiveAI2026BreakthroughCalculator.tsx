import React, { useState } from 'react';

export default function InteractiveAI2026BreakthroughCalculator() {
  const [formData, setFormData] = useState({
    companySize: 'large',
    industry: 'manufacturing',
    currentAnalyticsCost: 1000000,
    dataVolume: 'petabyte',
    automationLevel: 30,
    useCases: ['predictive', 'optimization', 'automation']
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const { companySize, industry, currentAnalyticsCost, dataVolume, automationLevel, useCases } = formData;
    
    // Base multipliers based on company size
    const sizeMultipliers = {
      small: { cost: 0.3, roi: 2.5, automation: 0.8 },
      medium: { cost: 0.6, roi: 3.0, automation: 0.9 },
      large: { cost: 1.0, roi: 3.5, automation: 1.0 },
      enterprise: { cost: 1.5, roi: 4.0, automation: 1.2 }
    };

    // Industry-specific multipliers
    const industryMultipliers = {
      manufacturing: { efficiency: 1.2, cost: 0.9 },
      finance: { efficiency: 1.0, cost: 1.1 },
      healthcare: { efficiency: 1.3, cost: 0.8 },
      retail: { efficiency: 1.1, cost: 1.0 },
      technology: { efficiency: 1.4, cost: 0.7 }
    };

    const sizeMultiplier = sizeMultipliers[companySize];
    const industryMultiplier = industryMultipliers[industry];

    // Calculate cost savings
    const baseSavings = currentAnalyticsCost * 0.7; // 70% base savings
    const costSavings = baseSavings * sizeMultiplier.cost * industryMultiplier.cost;

    // Calculate efficiency gains
    const baseEfficiency = 250; // 250% base efficiency improvement
    const efficiencyGain = baseEfficiency * sizeMultiplier.efficiency * industryMultiplier.efficiency;

    // Calculate automation improvement
    const automationImprovement = (95 - automationLevel) * sizeMultiplier.automation;

    // Calculate ROI
    const baseROI = 300; // 300% base ROI
    const totalROI = baseROI * sizeMultiplier.roi * (1 + (useCases.length * 0.2));

    // Calculate time to value
    const timeToValue = companySize === 'enterprise' ? '12 months' : 
                       companySize === 'large' ? '9 months' : 
                       companySize === 'medium' ? '6 months' : '4 months';

    setResults({
      costSavings: Math.round(costSavings),
      efficiencyGain: Math.round(efficiencyGain),
      automationImprovement: Math.round(automationImprovement),
      totalROI: Math.round(totalROI),
      timeToValue,
      quantumBoost: companySize === 'enterprise' ? '1000x performance' : '500x performance'
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-2">AI 2026 Breakthrough ROI Calculator</h2>
        <p className="text-lg opacity-90">
          Calculate your potential returns from revolutionary AI technologies
        </p>
      </div>

      <div className="p-8">
        {/* Input Form */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company Size
              </label>
              <select
                value={formData.companySize}
                onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="small">Small (1-50 employees)</option>
                <option value="medium">Medium (51-500 employees)</option>
                <option value="large">Large (501-5000 employees)</option>
                <option value="enterprise">Enterprise (5000+ employees)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="finance">Financial Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail & E-commerce</option>
                <option value="technology">Technology</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Analytics Cost (Annual)
              </label>
              <input
                type="number"
                value={formData.currentAnalyticsCost}
                onChange={(e) => setFormData({...formData, currentAnalyticsCost: parseInt(e.target.value)})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="1000000"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Data Volume
              </label>
              <select
                value={formData.dataVolume}
                onChange={(e) => setFormData({...formData, dataVolume: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="terabyte">Terabyte (TB)</option>
                <option value="petabyte">Petabyte (PB)</option>
                <option value="exabyte">Exabyte (EB)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Automation Level (%)
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={formData.automationLevel}
                onChange={(e) => setFormData({...formData, automationLevel: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-center text-sm text-gray-600 mt-1">
                {formData.automationLevel}%
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Use Cases (Select all that apply)
              </label>
              <div className="space-y-2">
                {[
                  { value: 'predictive', label: 'Predictive Analytics' },
                  { value: 'optimization', label: 'Process Optimization' },
                  { value: 'automation', label: 'Business Automation' },
                  { value: 'intelligence', label: 'Business Intelligence' },
                  { value: 'forecasting', label: 'Demand Forecasting' }
                ].map(useCase => (
                  <label key={useCase.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.useCases.includes(useCase.value)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            useCases: [...formData.useCases, useCase.value]
                          });
                        } else {
                          setFormData({
                            ...formData,
                            useCases: formData.useCases.filter(uc => uc !== useCase.value)
                          });
                        }
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm">{useCase.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="text-center mb-8">
          <button
            onClick={calculateROI}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            Calculate Your Breakthrough ROI
          </button>
        </div>

        {/* Results */}
        {results && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Your AI 2026 Breakthrough Projections
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${results.costSavings.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Annual Cost Savings</div>
                <div className="text-xs text-gray-500 mt-1">70% reduction in analytics costs</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {results.efficiencyGain}%
                </div>
                <div className="text-sm text-gray-600">Efficiency Improvement</div>
                <div className="text-xs text-gray-500 mt-1">Operational excellence gains</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {results.automationImprovement}%
                </div>
                <div className="text-sm text-gray-600">Automation Increase</div>
                <div className="text-xs text-gray-500 mt-1">Routine task automation</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {results.totalROI}%
                </div>
                <div className="text-sm text-gray-600">Total ROI</div>
                <div className="text-xs text-gray-500 mt-1">Return on investment</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Implementation Timeline</h4>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">⏱️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{results.timeToValue}</div>
                    <div className="text-sm text-gray-600">Time to full value realization</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Quantum Performance Boost</h4>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">⚛️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{results.quantumBoost}</div>
                    <div className="text-sm text-gray-600">Quantum-enhanced capabilities</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-6">
                <h4 className="text-xl font-bold mb-2">Ready to Achieve These Results?</h4>
                <p className="text-white/90 mb-4">
                  Join Fortune 500 companies already achieving breakthrough ROI with our AI solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Your Transformation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}