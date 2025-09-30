import React, { useState, useEffect } from 'react';

const InteractiveAITransformationCalculator: React.FC = () => {
  const [companySize, setCompanySize] = useState('medium');
  const [industry, setIndustry] = useState('manufacturing');
  const [currentAutomation, setCurrentAutomation] = useState(20);
  const [annualRevenue, setAnnualRevenue] = useState(10000000);
  const [employees, setEmployees] = useState(500);

  const [results, setResults] = useState({
    roi: 0,
    costSavings: 0,
    efficiencyGains: 0,
    paybackPeriod: 0,
    totalValue: 0
  });

  useEffect(() => {
    calculateResults();
  }, [companySize, industry, currentAutomation, annualRevenue, employees]);

  const calculateResults = () => {
    // Base multipliers by industry
    const industryMultipliers = {
      manufacturing: { roi: 3.5, savings: 0.15, efficiency: 0.95 },
      healthcare: { roi: 2.8, savings: 0.12, efficiency: 0.85 },
      finance: { roi: 4.2, savings: 0.18, efficiency: 0.90 },
      retail: { roi: 3.0, savings: 0.13, efficiency: 0.80 },
      technology: { roi: 3.8, savings: 0.16, efficiency: 0.88 },
      education: { roi: 2.5, savings: 0.10, efficiency: 0.75 }
    };

    // Size multipliers
    const sizeMultipliers = {
      small: { roi: 2.5, savings: 0.8, efficiency: 0.9 },
      medium: { roi: 3.0, savings: 1.0, efficiency: 1.0 },
      large: { roi: 3.5, savings: 1.2, efficiency: 1.1 },
      enterprise: { roi: 4.0, savings: 1.5, efficiency: 1.2 }
    };

    const industry = industryMultipliers[industry as keyof typeof industryMultipliers];
    const size = sizeMultipliers[companySize as keyof typeof sizeMultipliers];
    
    // Calculate investment based on company size and automation level
    const baseInvestment = employees * 2000; // $2000 per employee base investment
    const automationMultiplier = (100 - currentAutomation) / 100; // Higher automation = lower investment needed
    
    const totalInvestment = baseInvestment * automationMultiplier * size.savings;
    
    // Calculate annual savings
    const annualSavings = annualRevenue * industry.savings * size.savings;
    
    // Calculate ROI
    const roi = (annualSavings / totalInvestment) * industry.roi * size.roi * 100;
    
    // Calculate efficiency gains
    const efficiencyGains = industry.efficiency * size.efficiency * 100;
    
    // Calculate payback period
    const paybackPeriod = totalInvestment / annualSavings;
    
    // Calculate total 3-year value
    const totalValue = (annualSavings * 3) - totalInvestment;

    setResults({
      roi: Math.round(roi),
      costSavings: Math.round(annualSavings),
      efficiencyGains: Math.round(efficiencyGains),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      totalValue: Math.round(totalValue)
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Transformation Calculator</h3>
          
          <div className="space-y-6">
            {/* Company Size */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Company Size
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'small', label: 'Small (1-50)', desc: '1-50 employees' },
                  { value: 'medium', label: 'Medium (51-500)', desc: '51-500 employees' },
                  { value: 'large', label: 'Large (501-5000)', desc: '501-5000 employees' },
                  { value: 'enterprise', label: 'Enterprise (5000+)', desc: '5000+ employees' }
                ].map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setCompanySize(size.value)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      companySize === size.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    <div className="font-semibold">{size.label}</div>
                    <div className="text-sm text-gray-500">{size.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="technology">Technology</option>
                <option value="education">Education</option>
              </select>
            </div>

            {/* Annual Revenue */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Annual Revenue: ${annualRevenue.toLocaleString()}
              </label>
              <input
                type="range"
                min="1000000"
                max="1000000000"
                step="1000000"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>$1M</span>
                <span>$1B</span>
              </div>
            </div>

            {/* Number of Employees */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Number of Employees: {employees}
              </label>
              <input
                type="range"
                min="10"
                max="10000"
                step="10"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>10</span>
                <span>10,000</span>
              </div>
            </div>

            {/* Current Automation Level */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Current Automation Level: {currentAutomation}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={currentAutomation}
                onChange={(e) => setCurrentAutomation(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Manual</span>
                <span>Fully Automated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI Transformation Results</h3>
          
          <div className="space-y-6">
            {/* ROI */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-gray-700">Expected ROI</span>
                <span className="text-3xl font-bold text-green-600">{results.roi}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(results.roi / 5, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Return on investment within 12 months</p>
            </div>

            {/* Cost Savings */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-gray-700">Annual Cost Savings</span>
                <span className="text-3xl font-bold text-blue-600">${results.costSavings.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(results.costSavings / 1000000 * 10, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Expected annual savings from AI automation</p>
            </div>

            {/* Efficiency Gains */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-gray-700">Efficiency Gains</span>
                <span className="text-3xl font-bold text-purple-600">{results.efficiencyGains}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${results.efficiencyGains}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Process efficiency improvement</p>
            </div>

            {/* Payback Period */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-gray-700">Payback Period</span>
                <span className="text-3xl font-bold text-orange-600">{results.paybackPeriod} years</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Time to recover initial investment</p>
            </div>

            {/* Total 3-Year Value */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
              <div className="text-center">
                <div className="text-sm opacity-90 mb-1">Total 3-Year Value</div>
                <div className="text-4xl font-bold">${results.totalValue.toLocaleString()}</div>
                <div className="text-sm opacity-90 mt-1">Net value after investment</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Detailed Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAITransformationCalculator;