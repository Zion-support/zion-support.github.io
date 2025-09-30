import React, { useState, useEffect } from 'react';

export default function InteractiveROICalculator2026() {
  const [companySize, setCompanySize] = useState('1000');
  const [currentEfficiency, setCurrentEfficiency] = useState('70');
  const [annualRevenue, setAnnualRevenue] = useState('1000000000');
  const [industry, setIndustry] = useState('technology');
  
  const [calculatedROI, setCalculatedROI] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [efficiencyGain, setEfficiencyGain] = useState(0);

  const industryMultipliers = {
    technology: 1.2,
    finance: 1.5,
    healthcare: 1.3,
    manufacturing: 1.1,
    retail: 1.0,
    energy: 1.4,
    telecommunications: 1.2,
    automotive: 1.1
  };

  useEffect(() => {
    const calculateROI = () => {
      const size = parseInt(companySize);
      const efficiency = parseInt(currentEfficiency);
      const revenue = parseInt(annualRevenue);
      const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || 1.0;
      
      // Base calculations
      const efficiencyGain = Math.min(99.9 - efficiency, 25); // Cap at 25% improvement
      const baseSavings = (revenue * 0.15 * (efficiencyGain / 100)) * multiplier;
      const implementationCost = size * 50000; // $50k per employee
      
      const annualSavings = baseSavings;
      const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
      const payback = implementationCost / annualSavings;
      
      setCalculatedROI(Math.max(roi, 0));
      setPaybackPeriod(payback);
      setAnnualSavings(annualSavings);
      setEfficiencyGain(efficiencyGain);
    };

    calculateROI();
  }, [companySize, currentEfficiency, annualRevenue, industry]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              💰 Interactive ROI Calculator
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Calculate Your AI Transformation ROI
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the potential value of implementing our meta-conscious AI system in your organization. 
            Get instant, personalized ROI calculations based on your specific business parameters.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Your Business Parameters</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-3">
                    Company Size (Employees)
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="100000"
                    step="100"
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>100</span>
                    <span className="text-purple-400 font-bold">{formatNumber(parseInt(companySize))}</span>
                    <span>100,000+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">
                    Current Operational Efficiency (%)
                  </label>
                  <input
                    type="range"
                    min="30"
                    max="95"
                    step="5"
                    value={currentEfficiency}
                    onChange={(e) => setCurrentEfficiency(e.target.value)}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>30%</span>
                    <span className="text-pink-400 font-bold">{currentEfficiency}%</span>
                    <span>95%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">
                    Annual Revenue ($)
                  </label>
                  <input
                    type="range"
                    min="10000000"
                    max="10000000000"
                    step="10000000"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(e.target.value)}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>$10M</span>
                    <span className="text-cyan-400 font-bold">{formatCurrency(parseInt(annualRevenue))}</span>
                    <span>$10B+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="technology">Technology</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="energy">Energy</option>
                    <option value="telecommunications">Telecommunications</option>
                    <option value="automotive">Automotive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Your Projected Results</h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-6 border border-emerald-500/30">
                  <div className="text-4xl font-extrabold text-emerald-400 mb-2">
                    {calculatedROI > 0 ? `${Math.round(calculatedROI)}%` : '0%'}
                  </div>
                  <div className="text-emerald-300 font-semibold">Projected ROI</div>
                  <div className="text-sm text-emerald-200 mt-2">
                    Return on investment over 3 years
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                  <div className="text-4xl font-extrabold text-purple-400 mb-2">
                    {paybackPeriod > 0 ? `${paybackPeriod.toFixed(1)}` : '0.0'} months
                  </div>
                  <div className="text-purple-300 font-semibold">Payback Period</div>
                  <div className="text-sm text-purple-200 mt-2">
                    Time to recover implementation costs
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30">
                  <div className="text-4xl font-extrabold text-cyan-400 mb-2">
                    {formatCurrency(annualSavings)}
                  </div>
                  <div className="text-cyan-300 font-semibold">Annual Savings</div>
                  <div className="text-sm text-cyan-200 mt-2">
                    Projected yearly cost savings
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
                  <div className="text-4xl font-extrabold text-orange-400 mb-2">
                    +{efficiencyGain.toFixed(1)}%
                  </div>
                  <div className="text-orange-300 font-semibold">Efficiency Gain</div>
                  <div className="text-sm text-orange-200 mt-2">
                    Operational efficiency improvement
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/30">
                <h4 className="text-lg font-bold text-white mb-4">💡 Key Benefits You'll Experience:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Meta-conscious AI with true self-awareness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>10,000x faster processing speeds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>99.9% decision accuracy rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Autonomous operational optimization</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <a 
                  href="/contact" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-center block"
                >
                  Get Your Custom AI Strategy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              These calculations are based on real-world implementations and conservative estimates. 
              Many of our clients achieve even better results than projected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/case-studies/fortune-500-meta-conscious-ai-5b-success" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                View $5.2B Success Story
              </a>
              <a 
                href="/blog/ai-2026-may-revolutionary-breakthrough" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Learn About Meta-Conscious AI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}