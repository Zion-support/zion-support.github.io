import React, { useState } from 'react';

export default function InteractiveAICalculator2026() {
  const [businessType, setBusinessType] = useState('startup');
  const [revenue, setRevenue] = useState('1000000');
  const [employees, setEmployees] = useState('50');
  const [aiMaturity, setAiMaturity] = useState('beginner');

  const calculateAI2026Impact = () => {
    const businessMultiplier = {
      startup: 2.0,
      sme: 1.5,
      enterprise: 1.0,
      corporation: 0.8
    };

    const maturityMultiplier = {
      beginner: 1.5,
      intermediate: 1.2,
      advanced: 1.0,
      expert: 0.9
    };

    const baseEfficiency = 70;
    const baseCostReduction = 60;
    const baseROI = 250;

    const businessFactor = businessMultiplier[businessType as keyof typeof businessMultiplier];
    const maturityFactor = maturityMultiplier[aiMaturity as keyof typeof maturityMultiplier];
    
    const efficiencyGain = Math.round(baseEfficiency * businessFactor * maturityFactor);
    const costReduction = Math.round(baseCostReduction * businessFactor * maturityFactor);
    const expectedROI = Math.round(baseROI * businessFactor * maturityFactor);
    
    const annualRevenue = parseInt(revenue);
    const costSavings = Math.round(annualRevenue * (costReduction / 100));
    const efficiencyValue = Math.round(annualRevenue * (efficiencyGain / 100));
    
    return { 
      efficiencyGain, 
      costReduction, 
      expectedROI, 
      costSavings, 
      efficiencyValue,
      totalValue: costSavings + efficiencyValue
    };
  };

  const { efficiencyGain, costReduction, expectedROI, costSavings, efficiencyValue, totalValue } = calculateAI2026Impact();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            AI 2026 IMPACT CALCULATOR
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI 2026 Impact Calculator
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Measure Your Transformation Potential
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential impact of AI 2026 technologies on your business. Get detailed projections for efficiency gains, cost savings, and ROI based on your specific business profile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Business Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Business Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'startup', label: 'Startup', desc: '0-2 years, <$5M revenue' },
                    { value: 'sme', label: 'SME', desc: '2-10 years, $5M-$50M revenue' },
                    { value: 'enterprise', label: 'Enterprise', desc: '10+ years, $50M-$500M revenue' },
                    { value: 'corporation', label: 'Corporation', desc: 'Large, $500M+ revenue' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setBusinessType(option.value)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        businessType === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Annual Revenue ($)</label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1000000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Number of Employees</label>
                <input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">AI Maturity Level</label>
                <div className="space-y-3">
                  {[
                    { value: 'beginner', label: 'AI Beginner', desc: 'No AI implementation yet' },
                    { value: 'intermediate', label: 'AI Intermediate', desc: 'Basic AI tools in use' },
                    { value: 'advanced', label: 'AI Advanced', desc: 'Multiple AI systems deployed' },
                    { value: 'expert', label: 'AI Expert', desc: 'Comprehensive AI strategy' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setAiMaturity(option.value)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        aiMaturity === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Your AI 2026 Impact Projection</h3>
            
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{expectedROI}%</div>
                <div className="text-xl text-blue-200">Expected ROI</div>
                <div className="text-sm text-blue-300 mt-2">First year return on AI investment</div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{efficiencyGain}%</div>
                  <div className="text-sm text-blue-200">Efficiency Gain</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{costReduction}%</div>
                  <div className="text-sm text-blue-200">Cost Reduction</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-4">Financial Impact (Annual)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Cost Savings:</span>
                    <span className="font-bold text-lg">${costSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Efficiency Value:</span>
                    <span className="font-bold text-lg">${efficiencyValue.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">Total Value:</span>
                      <span className="font-bold text-2xl text-cyan-300">${totalValue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-4">Key AI 2026 Capabilities:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Autonomous decision-making systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Real-time predictive analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Self-optimizing workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Quantum-enhanced processing
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Get Your AI 2026 Roadmap
                </button>
                <div className="text-sm text-blue-200 mt-3">
                  Personalized implementation strategy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}