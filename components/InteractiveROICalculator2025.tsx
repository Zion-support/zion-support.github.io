import React, { useState, useEffect } from 'react';

const InteractiveROICalculator2025 = () => {
  const [annualRevenue, setAnnualRevenue] = useState(1000000);
  const [efficiencyGain, setEfficiencyGain] = useState(25);
  const [implementationCost, setImplementationCost] = useState(100000);
  const [timeframe, setTimeframe] = useState(12);
  const [calculatedROI, setCalculatedROI] = useState(0);
  const [savings, setSavings] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState(0);

  useEffect(() => {
    calculateROI();
  }, [annualRevenue, efficiencyGain, implementationCost, timeframe]);

  const calculateROI = () => {
    const annualSavings = (annualRevenue * efficiencyGain) / 100;
    const totalSavings = annualSavings * (timeframe / 12);
    const netProfit = totalSavings - implementationCost;
    const roi = implementationCost > 0 ? (netProfit / implementationCost) * 100 : 0;
    const payback = implementationCost > 0 ? implementationCost / annualSavings : 0;

    setSavings(totalSavings);
    setCalculatedROI(roi);
    setPaybackPeriod(payback);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI ROI Calculator 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for your AI transformation. 
            See how much you could save and earn with our proven AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Parameters</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue
                </label>
                <select
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={100000}>$100K - Small Business</option>
                  <option value={1000000}>$1M - Medium Business</option>
                  <option value={10000000}>$10M - Large Business</option>
                  <option value={100000000}>$100M - Enterprise</option>
                  <option value={1000000000}>$1B+ - Fortune 500</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Efficiency Gain: {efficiencyGain}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="75"
                  value={efficiencyGain}
                  onChange={(e) => setEfficiencyGain(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10%</span>
                  <span>75%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Cost
                </label>
                <select
                  value={implementationCost}
                  onChange={(e) => setImplementationCost(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={50000}>$50K - Basic Package</option>
                  <option value={100000}>$100K - Standard Package</option>
                  <option value={250000}>$250K - Advanced Package</option>
                  <option value={500000}>$500K - Enterprise Package</option>
                  <option value={1000000}>$1M+ - Custom Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeframe (Months)
                </label>
                <select
                  value={timeframe}
                  onChange={(e) => setTimeframe(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={6}>6 Months</option>
                  <option value={12}>12 Months</option>
                  <option value={18}>18 Months</option>
                  <option value={24}>24 Months</option>
                  <option value={36}>36 Months</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Your AI ROI Projection</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">
                  {calculatedROI > 0 ? `+${formatNumber(Math.round(calculatedROI))}%` : '0%'}
                </div>
                <div className="text-lg opacity-90">Return on Investment</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-300 mb-2">
                  {formatCurrency(savings)}
                </div>
                <div className="text-lg opacity-90">Total Savings</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-300 mb-2">
                  {paybackPeriod > 0 ? `${paybackPeriod.toFixed(1)} months` : 'N/A'}
                </div>
                <div className="text-lg opacity-90">Payback Period</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-300 mb-2">
                  {formatCurrency(annualRevenue * efficiencyGain / 100)}
                </div>
                <div className="text-lg opacity-90">Annual Savings</div>
              </div>
            </div>

            {/* Success Indicators */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4">Success Indicators</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${calculatedROI > 100 ? 'bg-green-400' : calculatedROI > 50 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
                  <span className="text-sm">
                    {calculatedROI > 100 ? 'Excellent ROI Potential' : calculatedROI > 50 ? 'Good ROI Potential' : 'Consider Optimization'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${paybackPeriod < 12 ? 'bg-green-400' : paybackPeriod < 24 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
                  <span className="text-sm">
                    {paybackPeriod < 12 ? 'Fast Payback Period' : paybackPeriod < 24 ? 'Reasonable Payback' : 'Longer Payback Period'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${efficiencyGain > 30 ? 'bg-green-400' : efficiencyGain > 20 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
                  <span className="text-sm">
                    {efficiencyGain > 30 ? 'High Efficiency Potential' : efficiencyGain > 20 ? 'Moderate Efficiency Gain' : 'Consider Higher Targets'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve These Results?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our AI experts can help you implement solutions that deliver the ROI you calculated. 
              Get a free consultation and custom implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </a>
              <a
                href="/case-studies"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Success Stories
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
          background: #3B82F6;
          cursor: pointer;
          box-shadow: 0 0 2px 0 #555;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 2px 0 #555;
        }
      `}</style>
    </section>
  );
};

export default InteractiveROICalculator2025;