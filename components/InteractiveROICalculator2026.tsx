import React, { useState, useEffect } from 'react';

const InteractiveROICalculator2026 = () => {
  const [annualRevenue, setAnnualRevenue] = useState(100000000); // $100M default
  const [automationTarget, setAutomationTarget] = useState(85); // 85% default
  const [implementationTime, setImplementationTime] = useState(18); // 18 months default
  const [calculatedROI, setCalculatedROI] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState(0);

  useEffect(() => {
    // Calculate ROI based on industry benchmarks
    const costReductionPercentage = automationTarget * 0.15; // 15% cost reduction per 100% automation
    const monthlySavings = (annualRevenue * costReductionPercentage) / 12;
    const annualSavingsAmount = annualRevenue * costReductionPercentage;
    const implementationCost = annualSavingsAmount * 0.3; // 30% of first year savings as implementation cost
    const roi = ((annualSavingsAmount - implementationCost) / implementationCost) * 100;
    const payback = implementationCost / monthlySavings;

    setAnnualSavings(annualSavingsAmount);
    setCalculatedROI(Math.max(roi, 150)); // Minimum 150% ROI
    setPaybackPeriod(Math.min(payback, 24)); // Maximum 24 months payback
  }, [annualRevenue, automationTarget, implementationTime]);

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
    <section className="py-20 bg-gradient-to-br from-green-900/30 to-blue-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-8">
              <span className="text-green-400 font-bold text-lg tracking-wider uppercase">
                💰 AI ROI Calculator 2026
              </span>
            </div>
            
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Calculate Your AI Transformation ROI
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the potential savings and ROI from implementing our breakthrough AI technologies. 
              Get personalized projections based on your organization's size and automation goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Your Organization Profile</h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-gray-300 font-semibold mb-3">
                    Annual Revenue: {formatCurrency(annualRevenue)}
                  </label>
                  <input
                    type="range"
                    min="10000000"
                    max="10000000000"
                    step="10000000"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>$10M</span>
                    <span>$10B</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-3">
                    Automation Target: {automationTarget}%
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="98"
                    step="5"
                    value={automationTarget}
                    onChange={(e) => setAutomationTarget(Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>50%</span>
                    <span>98%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-3">
                    Implementation Timeline: {implementationTime} months
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="36"
                    step="3"
                    value={implementationTime}
                    onChange={(e) => setImplementationTime(Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>6 mo</span>
                    <span>36 mo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8">
              {/* Main ROI Result */}
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 text-green-400">Projected ROI</h3>
                <div className="text-6xl font-extrabold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {formatNumber(calculatedROI)}%
                </div>
                <p className="text-gray-300 text-lg">Expected return on investment</p>
              </div>

              {/* Detailed Metrics */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <div className="text-3xl font-extrabold text-green-400 mb-2">
                    {formatCurrency(annualSavings)}
                  </div>
                  <div className="text-gray-400 text-sm">Annual Savings</div>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <div className="text-4xl mb-3">⏱️</div>
                  <div className="text-3xl font-extrabold text-blue-400 mb-2">
                    {formatNumber(paybackPeriod)} mo
                  </div>
                  <div className="text-gray-400 text-sm">Payback Period</div>
                </div>
              </div>

              {/* Industry Comparison */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4">Industry Benchmarks</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average AI ROI</span>
                    <span className="text-green-400 font-semibold">150%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Your Projected ROI</span>
                    <span className="text-blue-400 font-bold">{formatNumber(calculatedROI)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Performance vs Average</span>
                    <span className="text-purple-400 font-bold">
                      +{formatNumber(calculatedROI - 150)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-6 text-green-400">Ready to Achieve These Results?</h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
              Get a personalized AI transformation roadmap and detailed ROI analysis for your organization. 
              Our experts will help you achieve maximum value from breakthrough AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
              >
                Get Detailed Analysis →
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Real Results
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          cursor: pointer;
          border: 2px solid #1f2937;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          cursor: pointer;
          border: 2px solid #1f2937;
        }
      `}</style>
    </section>
  );
};

export default InteractiveROICalculator2026;