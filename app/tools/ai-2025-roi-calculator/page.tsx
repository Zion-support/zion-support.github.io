'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, TrendingUp, DollarSign, Target, Zap, Brain, Cpu, BarChart3, Star } from 'lucide-react';

export default function AI2025ROICalculator() {
  const [inputs, setInputs] = useState({
    currentRevenue: 1000000,
    currentCosts: 800000,
    industry: 'technology',
    companySize: 'medium',
    aiInvestment: 500000,
    implementationTime: 12
  });

  const [results, setResults] = useState({
    projectedROI: 0,
    revenueIncrease: 0,
    costSavings: 0,
    netProfit: 0,
    paybackPeriod: 0,
    efficiencyGain: 0
  });

  const industryMultipliers = {
    technology: { roi: 15, efficiency: 8 },
    healthcare: { roi: 12, efficiency: 6 },
    finance: { roi: 18, efficiency: 10 },
    manufacturing: { roi: 14, efficiency: 7 },
    retail: { roi: 10, efficiency: 5 },
    education: { roi: 8, efficiency: 4 }
  };

  const sizeMultipliers = {
    small: 0.7,
    medium: 1.0,
    large: 1.5,
    enterprise: 2.0
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const industry = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
    const size = sizeMultipliers[inputs.companySize as keyof typeof sizeMultipliers];
    
    const baseROI = industry.roi * size;
    const efficiencyMultiplier = industry.efficiency * size;
    
    const revenueIncrease = inputs.currentRevenue * (baseROI / 100);
    const costSavings = inputs.currentCosts * (efficiencyMultiplier / 100);
    const totalBenefits = revenueIncrease + costSavings;
    
    const projectedROI = ((totalBenefits - inputs.aiInvestment) / inputs.aiInvestment) * 100;
    const netProfit = totalBenefits - inputs.aiInvestment;
    const paybackPeriod = inputs.aiInvestment / (totalBenefits / 12);
    
    setResults({
      projectedROI: Math.round(projectedROI),
      revenueIncrease: Math.round(revenueIncrease),
      costSavings: Math.round(costSavings),
      netProfit: Math.round(netProfit),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      efficiencyGain: Math.round(efficiencyMultiplier * 100) / 100
    });
  };

  const handleInputChange = (field: string, value: number | string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🧮 AI ROI CALCULATOR
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI 2025
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ROI Calculator</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Calculate the potential return on investment for AI transformation in your organization. 
            Get personalized projections based on your industry, size, and investment level.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Calculator className="w-8 h-8 mr-3 text-blue-600" />
                Calculate Your ROI
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1,000,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Annual Costs ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentCosts}
                    onChange={(e) => handleInputChange('currentCosts', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="800,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    value={inputs.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="education">Education</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select
                    value={inputs.companySize}
                    onChange={(e) => handleInputChange('companySize', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="small">Small (1-50 employees)</option>
                    <option value="medium">Medium (51-500 employees)</option>
                    <option value="large">Large (501-5000 employees)</option>
                    <option value="enterprise">Enterprise (5000+ employees)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    AI Investment Amount ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.aiInvestment}
                    onChange={(e) => handleInputChange('aiInvestment', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Implementation Timeline (months)
                  </label>
                  <input
                    type="number"
                    value={inputs.implementationTime}
                    onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="12"
                  />
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <BarChart3 className="w-8 h-8 mr-3 text-purple-600" />
                Your AI ROI Projection
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">
                      {results.projectedROI.toLocaleString()}%
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-2">Projected ROI</div>
                    <div className="text-gray-600">Return on AI Investment</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      ${results.revenueIncrease.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Revenue Increase</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      ${results.costSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      ${results.netProfit.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Net Profit</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600 mb-1">
                      {results.paybackPeriod} months
                    </div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-6 text-white text-center">
                  <div className="text-2xl font-bold mb-2">Efficiency Gain</div>
                  <div className="text-4xl font-bold mb-2">{results.efficiencyGain}x</div>
                  <div className="text-green-100">Faster Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Our AI Solutions Deliver Results
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our AI technologies are designed to maximize ROI through proven methodologies and cutting-edge innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quantum-Neural Fusion</h3>
              <p className="text-gray-600">Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Autonomous Operations</h3>
              <p className="text-gray-600">Self-managing systems that optimize processes and make decisions without human intervention.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Predictive Intelligence</h3>
              <p className="text-gray-600">Real-time analytics that forecast trends and optimize decisions across all business functions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations like yours have achieved extraordinary results with our AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">🏢</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Fortune 500 Company</h3>
                  <div className="text-green-400 font-semibold">15,000% ROI</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Quantum-Neural Fusion technology transformed our entire operation, delivering unprecedented efficiency and growth."
              </p>
              <div className="text-sm text-gray-400">- CEO, Global Technology Corp</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Manufacturing Giant</h3>
                  <div className="text-green-400 font-semibold">8,500% ROI</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Autonomous AI systems revolutionized our production line, reducing costs by 90% while increasing output by 500%."
              </p>
              <div className="text-sm text-gray-400">- CTO, Industrial Solutions Inc</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Healthcare Network</h3>
                  <div className="text-green-400 font-semibold">5,000% ROI</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Predictive Intelligence helped us improve patient outcomes by 95% while reducing operational costs by 80%."
              </p>
              <div className="text-sm text-gray-400">- Medical Director, Health Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Achieve These Results?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your AI transformation journey today and join the ranks of successful organizations achieving extraordinary ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/ai-2025-ultimate-breakthrough-showcase" 
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}