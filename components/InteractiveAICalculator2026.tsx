import React, { useState } from 'react';

export default function InteractiveAICalculator2026() {
  const [companySize, setCompanySize] = useState('1000');
  const [industry, setIndustry] = useState('manufacturing');
  const [currentEfficiency, setCurrentEfficiency] = useState('85');
  const [annualRevenue, setAnnualRevenue] = useState('1000000000');

  const calculateROI = () => {
    const size = parseInt(companySize);
    const efficiency = parseInt(currentEfficiency);
    const revenue = parseInt(annualRevenue);
    
    // Calculate potential improvements
    const efficiencyGain = 99.9 - efficiency;
    const costSavings = (revenue * 0.15 * (efficiencyGain / 100)) * 0.8; // 15% of revenue in operational costs, 80% savings
    const revenueIncrease = revenue * 0.25 * (efficiencyGain / 100); // 25% revenue increase
    const totalValue = costSavings + revenueIncrease;
    const implementationCost = revenue * 0.05; // 5% of revenue for implementation
    const roi = ((totalValue - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / (totalValue / 12);
    
    return {
      costSavings,
      revenueIncrease,
      totalValue,
      implementationCost,
      roi,
      paybackPeriod
    };
  };

  const results = calculateROI();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🧮 Interactive AI ROI Calculator
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Calculate Your AI Transformation Value
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the potential value of implementing our Meta-Cognitive Quantum Fusion AI system 
            for your organization. Get instant ROI calculations and business impact projections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Your Organization Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-3">Company Size (Employees)</label>
                <select 
                  value={companySize} 
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="100">100-500</option>
                  <option value="1000">1,000-5,000</option>
                  <option value="10000">10,000-50,000</option>
                  <option value="100000">100,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-3">Industry</label>
                <select 
                  value={industry} 
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="financial">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="logistics">Logistics</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-3">Current Operational Efficiency (%)</label>
                <input 
                  type="range" 
                  min="50" 
                  max="95" 
                  value={currentEfficiency} 
                  onChange={(e) => setCurrentEfficiency(e.target.value)}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-center text-white font-bold text-lg mt-2">{currentEfficiency}%</div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-3">Annual Revenue ($)</label>
                <select 
                  value={annualRevenue} 
                  onChange={(e) => setAnnualRevenue(e.target.value)}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="100000000">$100M - $500M</option>
                  <option value="1000000000">$1B - $5B</option>
                  <option value="10000000000">$10B - $50B</option>
                  <option value="100000000000">$100B+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Projected Results</h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                <div className="text-3xl font-extrabold text-green-400 mb-2">
                  ${(results.totalValue / 1000000000).toFixed(1)}B
                </div>
                <div className="text-green-300 font-semibold">Total Annual Value</div>
                <div className="text-sm text-gray-300 mt-2">
                  Cost savings + Revenue increase
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl p-4 border border-blue-500/30">
                  <div className="text-2xl font-extrabold text-blue-400 mb-1">
                    ${(results.costSavings / 1000000000).toFixed(1)}B
                  </div>
                  <div className="text-blue-300 text-sm">Cost Savings</div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl p-4 border border-purple-500/30">
                  <div className="text-2xl font-extrabold text-purple-400 mb-1">
                    ${(results.revenueIncrease / 1000000000).toFixed(1)}B
                  </div>
                  <div className="text-purple-300 text-sm">Revenue Increase</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl p-6 border border-orange-500/30">
                <div className="text-3xl font-extrabold text-orange-400 mb-2">
                  {results.roi.toFixed(0)}%
                </div>
                <div className="text-orange-300 font-semibold">ROI</div>
                <div className="text-sm text-gray-300 mt-2">
                  Return on investment
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-xl p-6 border border-cyan-500/30">
                <div className="text-3xl font-extrabold text-cyan-400 mb-2">
                  {results.paybackPeriod.toFixed(1)} months
                </div>
                <div className="text-cyan-300 font-semibold">Payback Period</div>
                <div className="text-sm text-gray-300 mt-2">
                  Time to recover investment
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Your Free AI Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}