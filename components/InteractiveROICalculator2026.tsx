import React, { useState } from 'react';

export default function InteractiveROICalculator2026() {
  const [currentCosts, setCurrentCosts] = useState(1000000);
  const [automationLevel, setAutomationLevel] = useState(70);
  const [industry, setIndustry] = useState('manufacturing');

  const calculateROI = () => {
    const baseMultiplier = {
      manufacturing: 3.2,
      healthcare: 2.8,
      finance: 4.1,
      retail: 2.5,
      technology: 3.8
    };

    const automationMultiplier = automationLevel / 100;
    const industryMultiplier = baseMultiplier[industry as keyof typeof baseMultiplier];
    
    const annualSavings = currentCosts * automationMultiplier * industryMultiplier;
    const implementationCost = currentCosts * 0.3; // 30% of current costs
    const netSavings = annualSavings - implementationCost;
    const roi = ((netSavings / implementationCost) * 100);
    
    return {
      annualSavings: Math.round(annualSavings),
      implementationCost: Math.round(implementationCost),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi),
      paybackMonths: Math.round((implementationCost / annualSavings) * 12)
    };
  };

  const results = calculateROI();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/50 to-blue-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              💰 Interactive ROI Calculator 2026
            </span>
          </div>
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Calculate Your AI Transformation ROI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the potential savings and returns from implementing our revolutionary AI solutions in your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-8">Customize Your Scenario</h3>
            
            {/* Current Annual Costs */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-300 mb-4">
                Current Annual Operational Costs
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 font-bold">$</span>
                <input
                  type="number"
                  value={currentCosts}
                  onChange={(e) => setCurrentCosts(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-4 bg-white/10 border border-blue-500/30 rounded-xl text-white text-xl font-semibold focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="1,000,000"
                />
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Enter your current annual operational costs including labor, processes, and inefficiencies
              </p>
            </div>

            {/* Automation Level */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-300 mb-4">
                Desired Automation Level: {automationLevel}%
              </label>
              <input
                type="range"
                min="10"
                max="95"
                value={automationLevel}
                onChange={(e) => setAutomationLevel(Number(e.target.value))}
                className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-gray-400 text-sm mt-2">
                <span>10%</span>
                <span>95%</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Percentage of processes you want to automate with AI
              </p>
            </div>

            {/* Industry Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-300 mb-4">
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full py-4 px-4 bg-white/10 border border-blue-500/30 rounded-xl text-white text-lg font-semibold focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance & Banking</option>
                <option value="retail">Retail & E-commerce</option>
                <option value="technology">Technology & Software</option>
              </select>
              <p className="text-gray-400 text-sm mt-2">
                Select your industry for more accurate ROI calculations
              </p>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-8">Your ROI Projection</h3>
            
            {/* Main ROI Display */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-6 mb-8">
              <div className="text-center">
                <div className="text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {results.roi}%
                </div>
                <div className="text-2xl font-bold text-white mb-1">Expected ROI</div>
                <div className="text-gray-300">First Year Return on Investment</div>
              </div>
            </div>

            {/* Detailed Results Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  ${(results.annualSavings / 1000000).toFixed(1)}M
                </div>
                <div className="text-gray-400 text-sm">Annual Savings</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {results.paybackMonths}
                </div>
                <div className="text-gray-400 text-sm">Payback Period (Months)</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  ${(results.netSavings / 1000000).toFixed(1)}M
                </div>
                <div className="text-gray-400 text-sm">Net Savings (Year 1)</div>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {automationLevel}%
                </div>
                <div className="text-gray-400 text-sm">Automation Achieved</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-gray-300 mb-6">
                Ready to achieve these results? Get a personalized implementation roadmap.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
              >
                Get Personalized Roadmap
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Why Our AI Solutions Deliver Superior ROI</h3>
            <p className="text-xl text-gray-300">Based on real implementations across 500+ enterprise clients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Proven Technology Stack',
                description: 'Our AI solutions are built on battle-tested architectures that have delivered consistent results across industries.',
                metric: '99.7% Success Rate'
              },
              { 
                title: 'Rapid Implementation',
                description: 'Average implementation time of 6-12 months with immediate value generation from month one.',
                metric: '6-12 Month Timeline'
              },
              { 
                title: 'Continuous Optimization',
                description: 'Self-improving AI systems that continuously optimize performance and increase savings over time.',
                metric: '15% Annual Improvement'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="text-blue-400 font-bold text-lg">{item.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}