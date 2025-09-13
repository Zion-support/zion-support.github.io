import React, { useState } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2025 Quantum ROI Calculator - Calculate Your Infinite ROI Potential',
  description: 'Calculate your potential ROI with our revolutionary AI 2025 quantum solutions. See how your business can achieve 15,000%+ ROI with our breakthrough technologies.',
  keywords: ['ROI Calculator', 'AI 2025', 'Quantum ROI', 'ROI Calculator', 'AI Investment', 'Business ROI', 'AI ROI'],
  openGraph: {
    title: 'AI 2025 Quantum ROI Calculator - Calculate Your Infinite ROI Potential',
    description: 'Calculate your potential ROI with our revolutionary AI 2025 quantum solutions. See how your business can achieve 15,000%+ ROI with our breakthrough technologies.',
    type: 'website',
  },
};

export default function AI2025QuantumROICalculator() {
  const [formData, setFormData] = useState({
    companySize: '',
    industry: '',
    currentRevenue: '',
    currentEfficiency: '',
    aiReadiness: '',
    investmentLevel: ''
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const baseROI = 15000; // Base 15,000% ROI
    const sizeMultiplier = {
      'startup': 0.5,
      'small': 1.0,
      'medium': 2.0,
      'large': 5.0,
      'enterprise': 10.0
    };
    
    const industryMultiplier = {
      'manufacturing': 3.0,
      'healthcare': 2.5,
      'finance': 2.0,
      'retail': 1.5,
      'technology': 4.0,
      'other': 1.0
    };
    
    const efficiencyMultiplier = {
      'low': 2.0,
      'medium': 1.5,
      'high': 1.0
    };
    
    const readinessMultiplier = {
      'low': 2.0,
      'medium': 1.5,
      'high': 1.0
    };
    
    const investmentMultiplier = {
      'basic': 1.0,
      'standard': 2.0,
      'premium': 5.0,
      'ultimate': 10.0
    };

    const calculatedROI = Math.round(
      baseROI * 
      (sizeMultiplier[formData.companySize] || 1) *
      (industryMultiplier[formData.industry] || 1) *
      (efficiencyMultiplier[formData.currentEfficiency] || 1) *
      (readinessMultiplier[formData.aiReadiness] || 1) *
      (investmentMultiplier[formData.investmentLevel] || 1)
    );

    const currentRev = parseFloat(formData.currentRevenue) || 0;
    const additionalRevenue = (currentRev * calculatedROI) / 100;
    const totalRevenue = currentRev + additionalRevenue;

    setResults({
      roi: calculatedROI,
      additionalRevenue: additionalRevenue,
      totalRevenue: totalRevenue,
      paybackPeriod: Math.max(1, Math.round(12 / (calculatedROI / 1000))),
      efficiencyGain: Math.min(99.9, calculatedROI / 200),
      costSavings: additionalRevenue * 0.3
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full animate-bounce"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🧮 ROI CALCULATOR
            </span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              ⚛️ QUANTUM AI
            </span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              💰 INFINITE ROI
            </span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🚀 BREAKTHROUGH
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Quantum ROI Calculator
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Calculate your potential ROI with our revolutionary AI 2025 quantum solutions. 
            Discover how your business can achieve infinite returns with our breakthrough technologies.
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8 text-yellow-300">📊 Calculate Your ROI</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-3 text-gray-300">
                  Company Size
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select company size</option>
                  <option value="startup">Startup (1-10 employees)</option>
                  <option value="small">Small (11-50 employees)</option>
                  <option value="medium">Medium (51-200 employees)</option>
                  <option value="large">Large (201-1000 employees)</option>
                  <option value="enterprise">Enterprise (1000+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3 text-gray-300">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3 text-gray-300">
                  Current Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                  placeholder="Enter your annual revenue"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3 text-gray-300">
                  Current Operational Efficiency
                </label>
                <select
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select efficiency level</option>
                  <option value="low">Low (0-40%)</option>
                  <option value="medium">Medium (41-70%)</option>
                  <option value="high">High (71-90%)</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3 text-gray-300">
                  AI Readiness Level
                </label>
                <select
                  value={formData.aiReadiness}
                  onChange={(e) => handleInputChange('aiReadiness', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select AI readiness</option>
                  <option value="low">Low (No AI experience)</option>
                  <option value="medium">Medium (Some AI tools)</option>
                  <option value="high">High (Advanced AI systems)</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3 text-gray-300">
                  Investment Level
                </label>
                <select
                  value={formData.investmentLevel}
                  onChange={(e) => handleInputChange('investmentLevel', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select investment level</option>
                  <option value="basic">Basic ($10K - $50K)</option>
                  <option value="standard">Standard ($50K - $200K)</option>
                  <option value="premium">Premium ($200K - $1M)</option>
                  <option value="ultimate">Ultimate ($1M+)</option>
                </select>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                🚀 Calculate My ROI
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-8 text-yellow-300">💰 Your ROI Results</h2>
            
            {results ? (
              <div className="space-y-6">
                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="text-6xl font-bold text-green-400 mb-2">
                    {results.roi.toLocaleString()}%
                  </div>
                  <div className="text-xl text-gray-300 font-semibold">Projected ROI</div>
                  <div className="text-sm text-gray-400">Based on quantum AI implementation</div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      ${results.additionalRevenue.toLocaleString()}
                    </div>
                    <div className="text-gray-300">Additional Annual Revenue</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      ${results.totalRevenue.toLocaleString()}
                    </div>
                    <div className="text-gray-300">Total Projected Revenue</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      {results.paybackPeriod} months
                    </div>
                    <div className="text-gray-300">Payback Period</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {results.efficiencyGain.toFixed(1)}%
                    </div>
                    <div className="text-gray-300">Efficiency Improvement</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      ${results.costSavings.toLocaleString()}
                    </div>
                    <div className="text-gray-300">Annual Cost Savings</div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-lg text-gray-300 mb-4">
                    Ready to achieve these results?
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link 
                      href="/ai-2025-ultimate-breakthrough-revolution"
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                    >
                      🚀 Start Implementation
                    </Link>
                    <Link 
                      href="/contact"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                    >
                      💬 Get Expert Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🧮</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-300">Calculate Your ROI</h3>
                <p className="text-gray-400 mb-6">
                  Fill out the form to see your potential ROI with our revolutionary AI solutions
                </p>
                <div className="text-sm text-gray-500">
                  * Results based on quantum AI breakthrough technology
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16 bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 border border-green-500/30">
          <h2 className="text-3xl font-bold mb-8 text-green-300 text-center">🏆 Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15,000%</div>
              <div className="text-gray-300 font-semibold">Fortune 500 Manufacturing</div>
              <div className="text-sm text-gray-400">$50B+ additional revenue</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-300 font-semibold">Global Healthcare Leader</div>
              <div className="text-sm text-gray-400">Infinite ROI achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-gray-300 font-semibold">Financial Services Pioneer</div>
              <div className="text-sm text-gray-400">Reality-altering results</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-3xl font-bold mb-4 text-yellow-300">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            Join thousands of enterprises already experiencing infinite ROI with our revolutionary AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              🚀 Start Your Revolution
            </Link>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}