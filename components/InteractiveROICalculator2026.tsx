import React, { useState, useEffect } from 'react';

const InteractiveROICalculator2026: React.FC = () => {
  const [companySize, setCompanySize] = useState('medium');
  const [industry, setIndustry] = useState('technology');
  const [currentAutomation, setCurrentAutomation] = useState(30);
  const [currentAccuracy, setCurrentAccuracy] = useState(75);
  const [roi, setRoi] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState(0);

  const sizeMultipliers = {
    small: { revenue: 10000000, employees: 100, multiplier: 1 },
    medium: { revenue: 100000000, employees: 1000, multiplier: 2.5 },
    large: { revenue: 1000000000, employees: 10000, multiplier: 5 },
    enterprise: { revenue: 10000000000, employees: 100000, multiplier: 10 }
  };

  const industryMultipliers = {
    technology: 1.2,
    finance: 1.5,
    manufacturing: 1.3,
    healthcare: 1.1,
    retail: 1.0,
    energy: 1.4
  };

  useEffect(() => {
    calculateROI();
  }, [companySize, industry, currentAutomation, currentAccuracy]);

  const calculateROI = () => {
    const size = sizeMultipliers[companySize as keyof typeof sizeMultipliers];
    const industryMult = industryMultipliers[industry as keyof typeof industryMultipliers];
    
    // Base calculations
    const automationImprovement = (98 - currentAutomation) / 100;
    const accuracyImprovement = (99.7 - currentAccuracy) / 100;
    const efficiencyGain = automationImprovement * 0.6 + accuracyImprovement * 0.4;
    
    // Calculate annual savings
    const baseSavings = size.revenue * 0.15 * efficiencyGain * size.multiplier * industryMult;
    const calculatedSavings = Math.round(baseSavings);
    
    // Calculate ROI (assuming implementation cost is 10% of annual revenue)
    const implementationCost = size.revenue * 0.1;
    const calculatedROI = Math.round(((calculatedSavings - implementationCost) / implementationCost) * 100);
    
    // Calculate payback period (in months)
    const calculatedPaybackPeriod = Math.round((implementationCost / calculatedSavings) * 12 * 10) / 10;
    
    setAnnualSavings(calculatedSavings);
    setRoi(calculatedROI);
    setPaybackPeriod(calculatedPaybackPeriod);
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive ROI Calculator
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate the potential return on investment for implementing Next-Generation Autonomous Intelligence in your organization.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Calculate Your ROI</h3>
              
              {/* Company Size */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-4">Company Size</label>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(sizeMultipliers).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setCompanySize(key)}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        companySize === key
                          ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                          : 'border-white/20 bg-white/5 text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10'
                      }`}
                    >
                      <div className="font-bold capitalize">{key}</div>
                      <div className="text-sm opacity-75">
                        {formatCurrency(value.revenue)} revenue
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-4">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full p-4 rounded-xl border border-white/20 bg-white/5 text-white focus:border-purple-500 focus:outline-none"
                >
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="energy">Energy</option>
                </select>
              </div>

              {/* Current Automation Level */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-4">
                  Current Automation Level: {currentAutomation}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="95"
                  value={currentAutomation}
                  onChange={(e) => setCurrentAutomation(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>0%</span>
                  <span>95%</span>
                </div>
              </div>

              {/* Current Decision Accuracy */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-4">
                  Current Decision Accuracy: {currentAccuracy}%
                </label>
                <input
                  type="range"
                  min="50"
                  max="95"
                  value={currentAccuracy}
                  onChange={(e) => setCurrentAccuracy(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>50%</span>
                  <span>95%</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Your Potential Results</h3>
              
              {/* Key Metrics */}
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                  <div className="text-3xl font-extrabold text-green-400 mb-2">
                    {formatCurrency(annualSavings)}
                  </div>
                  <div className="text-green-300 text-sm">Annual Savings Potential</div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-3xl font-extrabold text-blue-400 mb-2">
                    {roi}%
                  </div>
                  <div className="text-blue-300 text-sm">Return on Investment</div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                  <div className="text-3xl font-extrabold text-purple-400 mb-2">
                    {paybackPeriod} months
                  </div>
                  <div className="text-purple-300 text-sm">Payback Period</div>
                </div>
              </div>

              {/* Improvement Metrics */}
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-indigo-500/30 mb-8">
                <h4 className="text-lg font-bold text-indigo-400 mb-4">Expected Improvements</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Automation Rate</span>
                    <span className="text-green-400 font-bold">{currentAutomation}% → 98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Decision Accuracy</span>
                    <span className="text-blue-400 font-bold">{currentAccuracy}% → 99.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-purple-400 font-bold">15s → 0.3s</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 inline-block"
                >
                  Get Detailed Analysis
                </a>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/30">
              <h4 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h4>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join the companies that have already achieved unprecedented results with Next-Generation Autonomous Intelligence. 
                Get your personalized ROI analysis and free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                >
                  Get Free Consultation
                </a>
                <a 
                  href="/case-studies/ai-2026-july-revolutionary-breakthrough-mega-success"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                >
                  View Success Stories →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculator2026;