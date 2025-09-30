import React, { useState } from 'react';

export default function InteractiveAI2027Calculator() {
  const [companySize, setCompanySize] = useState('small');
  const [industry, setIndustry] = useState('technology');
  const [currentAIUsage, setCurrentAIUsage] = useState('none');
  const [budget, setBudget] = useState('50000');

  const calculateROI = () => {
    const sizeMultiplier = {
      small: 1,
      medium: 2.5,
      large: 5,
      enterprise: 10
    };

    const industryMultiplier = {
      technology: 1.5,
      healthcare: 1.3,
      finance: 1.4,
      manufacturing: 1.2,
      retail: 1.1,
      other: 1.0
    };

    const aiUsageMultiplier = {
      none: 1.0,
      basic: 0.8,
      moderate: 0.6,
      advanced: 0.4
    };

    const baseROI = 300;
    const sizeFactor = sizeMultiplier[companySize as keyof typeof sizeMultiplier];
    const industryFactor = industryMultiplier[industry as keyof typeof industryMultiplier];
    const aiFactor = aiUsageMultiplier[currentAIUsage as keyof typeof aiUsageMultiplier];
    
    const calculatedROI = Math.round(baseROI * sizeFactor * industryFactor * aiFactor);
    const annualSavings = Math.round(parseInt(budget) * (calculatedROI / 100));
    const monthlySavings = Math.round(annualSavings / 12);
    
    return { calculatedROI, annualSavings, monthlySavings };
  };

  const { calculatedROI, annualSavings, monthlySavings } = calculateROI();

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
            INTERACTIVE CALCULATOR
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI 2027 ROI Calculator
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Calculate Your Potential Returns
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how AI 2027 technologies can transform your business with our advanced ROI calculator. Get personalized projections based on your company profile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Company Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Company Size</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'small', label: 'Small (1-50)', desc: '1-50 employees' },
                    { value: 'medium', label: 'Medium (51-200)', desc: '51-200 employees' },
                    { value: 'large', label: 'Large (201-1000)', desc: '201-1000 employees' },
                    { value: 'enterprise', label: 'Enterprise (1000+)', desc: '1000+ employees' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setCompanySize(option.value)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        companySize === option.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
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
                <label className="block text-sm font-semibold text-gray-700 mb-3">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Current AI Usage</label>
                <div className="space-y-3">
                  {[
                    { value: 'none', label: 'No AI Implementation', desc: 'Starting from scratch' },
                    { value: 'basic', label: 'Basic AI Tools', desc: 'Simple automation tools' },
                    { value: 'moderate', label: 'Moderate AI Usage', desc: 'Some AI-powered processes' },
                    { value: 'advanced', label: 'Advanced AI', desc: 'Comprehensive AI strategy' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setCurrentAIUsage(option.value)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        currentAIUsage === option.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
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
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Annual AI Budget ($)
                </label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="50000"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Your AI 2027 Projections</h3>
            
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">{calculatedROI}%</div>
                <div className="text-xl text-indigo-200">Expected ROI</div>
                <div className="text-sm text-indigo-300 mt-2">Based on industry benchmarks and AI 2027 capabilities</div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">${annualSavings.toLocaleString()}</div>
                  <div className="text-sm text-indigo-200">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">${monthlySavings.toLocaleString()}</div>
                  <div className="text-sm text-indigo-200">Monthly Savings</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-4">Key Benefits You'll Experience:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    {Math.round(calculatedROI * 0.3)}% reduction in operational costs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    {Math.round(calculatedROI * 0.2)}% increase in productivity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    {Math.round(calculatedROI * 0.15)}% improvement in decision speed
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    {Math.round(calculatedROI * 0.25)}% enhancement in customer satisfaction
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Get Your Custom AI Strategy
                </button>
                <div className="text-sm text-indigo-200 mt-3">
                  Free consultation with our AI experts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}