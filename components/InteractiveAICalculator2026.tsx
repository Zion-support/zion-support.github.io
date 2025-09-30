import React, { useState, useEffect } from 'react';

export default function InteractiveAICalculator2026() {
  const [businessType, setBusinessType] = useState('enterprise');
  const [currentChallenges, setCurrentChallenges] = useState([]);
  const [investment, setInvestment] = useState(50000);
  const [results, setResults] = useState(null);

  const challenges = [
    { id: 'automation', label: 'Manual Process Automation', impact: 0.3 },
    { id: 'analytics', label: 'Data Analytics & Insights', impact: 0.25 },
    { id: 'customer', label: 'Customer Experience', impact: 0.2 },
    { id: 'security', label: 'Cybersecurity', impact: 0.15 },
    { id: 'scalability', label: 'Scalability Issues', impact: 0.1 }
  ];

  const calculateResults = () => {
    const businessMultiplier = {
      startup: 2.5,
      smb: 2.0,
      enterprise: 1.5,
      corporation: 1.0
    };

    const challengeImpact = currentChallenges.reduce((total, challengeId) => {
      const challenge = challenges.find(c => c.id === challengeId);
      return total + (challenge ? challenge.impact : 0);
    }, 0);

    const baseROI = 300; // 300% base ROI for 2026
    const efficiencyGain = 85; // 85% efficiency improvement
    const costReduction = 70; // 70% cost reduction
    
    const multiplier = businessMultiplier[businessType] * (1 + challengeImpact);
    
    const calculatedROI = Math.round(baseROI * multiplier);
    const totalSavings = Math.round(investment * (calculatedROI / 100));
    const monthlySavings = Math.round(totalSavings / 12);
    const efficiencyImprovement = Math.min(90, Math.round(efficiencyGain * multiplier));
    const costReductionPercent = Math.min(75, Math.round(costReduction * multiplier));
    const paybackPeriod = Math.round(12 * (100 / calculatedROI));

    setResults({
      roi: calculatedROI,
      totalSavings: totalSavings,
      monthlySavings: monthlySavings,
      efficiencyGain: efficiencyImprovement,
      costReduction: costReductionPercent,
      paybackPeriod: paybackPeriod,
      challengeImpact: challengeImpact
    });
  };

  useEffect(() => {
    calculateResults();
  }, [businessType, currentChallenges, investment]);

  const handleChallengeChange = (challengeId) => {
    setCurrentChallenges(prev => 
      prev.includes(challengeId) 
        ? prev.filter(id => id !== challengeId)
        : [...prev, challengeId]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            🎯 AI 2026 IMPACT CALCULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Calculate Your AI 2026 Business Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the transformative potential of AI implementation in 2026. 
            Get personalized projections based on your business challenges and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Assessment</h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Business Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'startup', label: 'Startup (1-10 employees)' },
                    { value: 'smb', label: 'SMB (11-100 employees)' },
                    { value: 'enterprise', label: 'Enterprise (101-1000 employees)' },
                    { value: 'corporation', label: 'Corporation (1000+ employees)' }
                  ].map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setBusinessType(type.value)}
                      className={`p-3 rounded-lg border-2 text-left transition-all ${
                        businessType === type.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="font-semibold text-sm">{type.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Current Business Challenges (Select all that apply)
                </label>
                <div className="space-y-3">
                  {challenges.map((challenge) => (
                    <label key={challenge.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={currentChallenges.includes(challenge.id)}
                        onChange={() => handleChallengeChange(challenge.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{challenge.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Investment Budget ($)
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={investment}
                  onChange={(e) => setInvestment(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$10K</span>
                  <span className="font-semibold text-blue-600">${investment.toLocaleString()}</span>
                  <span>$500K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {results && (
              <>
                {/* Main Results Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold mb-2">{results.roi}%</div>
                    <div className="text-xl opacity-90 mb-4">Expected ROI</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">${results.totalSavings.toLocaleString()}</div>
                      <div className="text-sm opacity-90">Annual Savings</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">{results.paybackPeriod}</div>
                      <div className="text-sm opacity-90">Months Payback</div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold">${results.monthlySavings.toLocaleString()}</div>
                    <div className="text-sm opacity-90">Monthly savings after payback</div>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{results.efficiencyGain}%</div>
                    <div className="text-gray-700 font-semibold">Efficiency Gain</div>
                    <div className="text-sm text-gray-500">Process improvement</div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                    <div className="text-3xl mb-2">💰</div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{results.costReduction}%</div>
                    <div className="text-gray-700 font-semibold">Cost Reduction</div>
                    <div className="text-sm text-gray-500">Operational savings</div>
                  </div>
                </div>

                {/* Challenge Impact */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Challenge Impact Analysis</h4>
                  <div className="space-y-3">
                    {currentChallenges.map(challengeId => {
                      const challenge = challenges.find(c => c.id === challengeId);
                      return (
                        <div key={challengeId} className="flex items-center justify-between">
                          <span className="text-gray-700">{challenge?.label}</span>
                          <span className="text-green-600 font-semibold">
                            +{Math.round(challenge?.impact * 100)}% ROI boost
                          </span>
                        </div>
                      );
                    })}
                    {currentChallenges.length === 0 && (
                      <p className="text-gray-500 text-sm">Select challenges to see impact analysis</p>
                    )}
                  </div>
                </div>

                {/* 2026 AI Solutions */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">2026 AI Solutions for Your Business</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500">🤖</span>
                      <span className="text-sm text-gray-700">Autonomous Process Automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-500">📊</span>
                      <span className="text-sm text-gray-700">Predictive Analytics & Insights</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500">🎯</span>
                      <span className="text-sm text-gray-700">AI-Powered Customer Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-500">🛡️</span>
                      <span className="text-sm text-gray-700">Advanced Cybersecurity AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-500">📈</span>
                      <span className="text-sm text-gray-700">Scalable AI Infrastructure</span>
                    </div>
                  </div>
                </div>

                {/* Implementation Timeline */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Implementation Timeline</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                      <span className="text-sm text-gray-700">Month 1-2: Assessment & Planning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                      <span className="text-sm text-gray-700">Month 3-6: Core AI Implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                      <span className="text-sm text-gray-700">Month 7-9: Advanced Features</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                      <span className="text-sm text-gray-700">Month 10-12: Optimization & Scale</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white text-center">
                  <h4 className="text-xl font-bold mb-2">Ready to Transform Your Business?</h4>
                  <p className="opacity-90 mb-4">Start your AI journey with Zion Tech Group</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="/services"
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      View AI Services
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                    >
                      Get Free Consultation
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Real Results from Our Clients</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$50M</div>
              <div className="text-gray-700 font-semibold mb-2">Enterprise ROI</div>
              <div className="text-sm text-gray-500">Fortune 500 manufacturing company</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-700 font-semibold mb-2">Efficiency Gain</div>
              <div className="text-sm text-gray-500">Healthcare provider automation</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">75%</div>
              <div className="text-gray-700 font-semibold mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-500">Financial services optimization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}