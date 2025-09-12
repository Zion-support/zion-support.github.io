import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';

export const metadata = {
  title: 'AI ROI Calculator 2026 - Calculate Your AI Investment Returns',
  description: 'Interactive AI ROI calculator to estimate returns on AI investments including neural interfaces, quantum AI, and autonomous systems. Get personalized projections for 2026.',
  keywords: 'AI ROI calculator, AI investment calculator, AI return on investment, AI cost benefit analysis, AI business case calculator',
  openGraph: {
    title: 'AI ROI Calculator 2026 - Calculate Your AI Investment Returns',
    description: 'Interactive AI ROI calculator to estimate returns on AI investments including neural interfaces, quantum AI, and autonomous systems.',
    images: ['/og-ai-roi-calculator.png'],
  },
};

export default function AIROICalculator2026() {
  const [formData, setFormData] = useState({
    companySize: 'small',
    industry: 'technology',
    currentRevenue: 1000000,
    aiTechnologies: [] as string[],
    implementationTimeline: '12',
    budget: 500000,
  });

  const [results, setResults] = useState({
    totalInvestment: 0,
    expectedROI: 0,
    paybackPeriod: 0,
    threeYearValue: 0,
    efficiencyGains: 0,
    costSavings: 0,
    revenueIncrease: 0,
  });

  const technologies = [
    { id: 'neural-interfaces', name: 'Neural Interfaces', multiplier: 1.5, cost: 200000 },
    { id: 'quantum-ai', name: 'Quantum AI Systems', multiplier: 2.0, cost: 500000 },
    { id: 'autonomous-systems', name: 'Autonomous Systems', multiplier: 1.8, cost: 300000 },
    { id: 'advanced-analytics', name: 'Advanced Analytics', multiplier: 1.2, cost: 150000 },
    { id: 'ai-automation', name: 'AI Automation', multiplier: 1.3, cost: 100000 },
    { id: 'predictive-modeling', name: 'Predictive Modeling', multiplier: 1.4, cost: 120000 },
  ];

  const industryMultipliers = {
    technology: 1.5,
    finance: 2.0,
    healthcare: 1.8,
    manufacturing: 1.6,
    retail: 1.3,
    education: 1.2,
    government: 1.1,
  };

  const sizeMultipliers = {
    small: 1.0,
    medium: 1.3,
    large: 1.8,
    enterprise: 2.5,
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    const selectedTechs = technologies.filter(tech => formData.aiTechnologies.includes(tech.id));
    const totalTechCost = selectedTechs.reduce((sum, tech) => sum + tech.cost, 0);
    const baseMultiplier = selectedTechs.reduce((sum, tech) => sum + tech.multiplier, 0) / Math.max(selectedTechs.length, 1);
    const industryMultiplier = industryMultipliers[formData.industry as keyof typeof industryMultipliers] || 1.0;
    const sizeMultiplier = sizeMultipliers[formData.companySize as keyof typeof sizeMultipliers] || 1.0;
    
    const totalMultiplier = baseMultiplier * industryMultiplier * sizeMultiplier;
    const totalInvestment = totalTechCost + formData.budget;
    
    const efficiencyGains = formData.currentRevenue * 0.15 * totalMultiplier;
    const costSavings = formData.currentRevenue * 0.10 * totalMultiplier;
    const revenueIncrease = formData.currentRevenue * 0.25 * totalMultiplier;
    
    const annualBenefits = efficiencyGains + costSavings + revenueIncrease;
    const expectedROI = ((annualBenefits - totalInvestment) / totalInvestment) * 100;
    const paybackPeriod = totalInvestment / annualBenefits;
    const threeYearValue = (annualBenefits * 3) - totalInvestment;
    
    setResults({
      totalInvestment,
      expectedROI: Math.round(expectedROI),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      threeYearValue: Math.round(threeYearValue),
      efficiencyGains: Math.round(efficiencyGains),
      costSavings: Math.round(costSavings),
      revenueIncrease: Math.round(revenueIncrease),
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTechnologyToggle = (techId: string) => {
    setFormData(prev => ({
      ...prev,
      aiTechnologies: prev.aiTechnologies.includes(techId)
        ? prev.aiTechnologies.filter(id => id !== techId)
        : [...prev.aiTechnologies, techId]
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <ErrorBoundary>
      <SEO
        title="AI ROI Calculator 2026 - Calculate Your AI Investment Returns"
        description="Interactive AI ROI calculator to estimate returns on AI investments including neural interfaces, quantum AI, and autonomous systems."
        keywords="AI ROI calculator, AI investment calculator, AI return on investment, AI cost benefit analysis"
        url="/tools/ai-roi-calculator-2026"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-400 text-black rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold">💰 AI ROI CALCULATOR 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI ROI Calculator 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Calculate the potential return on investment for cutting-edge AI technologies including neural interfaces, quantum AI, and autonomous systems
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-8 text-white">Investment Parameters</h2>
              
              {/* Company Size */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-gray-300">Company Size</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'small', label: 'Small (1-50 employees)', desc: 'Startup to SMB' },
                    { value: 'medium', label: 'Medium (51-500 employees)', desc: 'Growing company' },
                    { value: 'large', label: 'Large (501-5000 employees)', desc: 'Established enterprise' },
                    { value: 'enterprise', label: 'Enterprise (5000+ employees)', desc: 'Fortune 500' },
                  ].map(size => (
                    <button
                      key={size.value}
                      onClick={() => handleInputChange('companySize', size.value)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        formData.companySize === size.value
                          ? 'border-green-400 bg-green-400/10 text-green-400'
                          : 'border-gray-600 hover:border-gray-500 text-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{size.label}</div>
                      <div className="text-sm opacity-75">{size.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-gray-300">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full p-4 bg-slate-700 border border-gray-600 rounded-lg text-white focus:border-green-400 focus:outline-none"
                >
                  <option value="technology">Technology</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="education">Education</option>
                  <option value="government">Government</option>
                </select>
              </div>

              {/* Current Revenue */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-gray-300">
                  Current Annual Revenue: {formatCurrency(formData.currentRevenue)}
                </label>
                <input
                  type="range"
                  min="100000"
                  max="1000000000"
                  step="100000"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>$100K</span>
                  <span>$1B</span>
                </div>
              </div>

              {/* AI Technologies */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-gray-300">AI Technologies</label>
                <div className="space-y-3">
                  {technologies.map(tech => (
                    <label key={tech.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.aiTechnologies.includes(tech.id)}
                        onChange={() => handleTechnologyToggle(tech.id)}
                        className="w-5 h-5 text-green-400 bg-slate-700 border-gray-600 rounded focus:ring-green-400"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-white">{tech.name}</div>
                        <div className="text-sm text-gray-400">
                          Investment: {formatCurrency(tech.cost)} • Multiplier: {tech.multiplier}x
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Implementation Timeline */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-gray-300">
                  Implementation Timeline: {formData.implementationTimeline} months
                </label>
                <input
                  type="range"
                  min="3"
                  max="24"
                  step="1"
                  value={formData.implementationTimeline}
                  onChange={(e) => handleInputChange('implementationTimeline', e.target.value)}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>3 months</span>
                  <span>24 months</span>
                </div>
              </div>

              {/* Additional Budget */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-gray-300">
                  Additional Budget: {formatCurrency(formData.budget)}
                </label>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>$50K</span>
                  <span>$5M</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8">
              {/* ROI Summary */}
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-8 border border-green-500/20">
                <h3 className="text-2xl font-bold mb-6 text-green-400">ROI Projection</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">{results.expectedROI}%</div>
                    <div className="text-green-400 font-semibold">Expected ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">{results.paybackPeriod}</div>
                    <div className="text-blue-400 font-semibold">Years to Payback</div>
                  </div>
                </div>
              </div>

              {/* Investment Details */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Investment Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Investment:</span>
                    <span className="text-white font-semibold">{formatCurrency(results.totalInvestment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">3-Year Value:</span>
                    <span className="text-white font-semibold">{formatCurrency(results.threeYearValue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Net 3-Year Gain:</span>
                    <span className="text-green-400 font-bold">{formatCurrency(results.threeYearValue - results.totalInvestment)}</span>
                  </div>
                </div>
              </div>

              {/* Annual Benefits */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Annual Benefits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Efficiency Gains:</span>
                    <span className="text-white font-semibold">{formatCurrency(results.efficiencyGains)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cost Savings:</span>
                    <span className="text-white font-semibold">{formatCurrency(results.costSavings)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Revenue Increase:</span>
                    <span className="text-white font-semibold">{formatCurrency(results.revenueIncrease)}</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-semibold">Total Annual Benefits:</span>
                      <span className="text-cyan-400 font-bold text-lg">
                        {formatCurrency(results.efficiencyGains + results.costSavings + results.revenueIncrease)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Recommendations</h3>
                <div className="space-y-3 text-gray-300">
                  {results.expectedROI > 200 && (
                    <div className="flex items-start space-x-2">
                      <div className="text-green-400">✓</div>
                      <span>Excellent investment opportunity with high ROI potential</span>
                    </div>
                  )}
                  {results.paybackPeriod < 2 && (
                    <div className="flex items-start space-x-2">
                      <div className="text-green-400">✓</div>
                      <span>Quick payback period indicates strong financial viability</span>
                    </div>
                  )}
                  {formData.aiTechnologies.length === 0 && (
                    <div className="flex items-start space-x-2">
                      <div className="text-yellow-400">⚠</div>
                      <span>Select AI technologies to see detailed ROI projections</span>
                    </div>
                  )}
                  {results.expectedROI < 50 && (
                    <div className="flex items-start space-x-2">
                      <div className="text-yellow-400">⚠</div>
                      <span>Consider starting with fewer technologies for better ROI</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all text-lg shadow-lg inline-block"
                >
                  Get Personalized AI Strategy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}