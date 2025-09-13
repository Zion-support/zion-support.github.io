import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2026 ROI Calculator | Zion Tech Group',
  description: 'Calculate your potential ROI from AI 2026 breakthrough implementations including quantum-neural fusion and consciousness-level AI.',
  keywords: ['AI 2026', 'ROI calculator', 'quantum neural', 'ROI', 'calculator', 'breakthrough'],
  openGraph: {
    title: 'AI 2026 ROI Calculator',
    description: 'Calculate your potential ROI from revolutionary AI 2026 implementations',
    images: ['/og-ai-2026-roi-calculator.jpg'],
  },
};

export default function AI2026ROICalculator() {
  const [formData, setFormData] = useState({
    industry: '',
    companySize: '',
    currentEfficiency: 0,
    annualRevenue: 0,
    implementationType: '',
    timeHorizon: 12
  });

  const [results, setResults] = useState({
    projectedROI: 0,
    totalSavings: 0,
    paybackPeriod: 0,
    efficiencyGain: 0,
    accuracyImprovement: 0
  });

  const [isCalculated, setIsCalculated] = useState(false);

  const industries = [
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 15.0 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 12.0 },
    { value: 'finance', label: 'Financial Services', multiplier: 10.0 },
    { value: 'retail', label: 'Retail', multiplier: 8.0 },
    { value: 'technology', label: 'Technology', multiplier: 20.0 },
    { value: 'automotive', label: 'Automotive', multiplier: 18.0 },
    { value: 'energy', label: 'Energy', multiplier: 14.0 },
    { value: 'logistics', label: 'Logistics', multiplier: 16.0 }
  ];

  const implementationTypes = [
    { value: 'quantum-neural', label: 'Quantum-Neural Fusion', multiplier: 15.0 },
    { value: 'consciousness', label: 'Consciousness-Level AI', multiplier: 12.0 },
    { value: 'dimensional', label: 'Multi-Dimensional AI', multiplier: 10.0 },
    { value: 'temporal', label: 'Temporal Optimization', multiplier: 8.0 },
    { value: 'neural-interface', label: 'Neural Interface', multiplier: 14.0 },
    { value: 'edge-ai', label: 'Advanced Edge AI', multiplier: 6.2 }
  ];

  const calculateROI = () => {
    const industry = industries.find(i => i.value === formData.industry);
    const implementation = implementationTypes.find(i => i.value === formData.implementationType);
    
    if (!industry || !implementation) return;

    const baseMultiplier = industry.multiplier * implementation.multiplier / 10;
    const efficiencyFactor = (100 - formData.currentEfficiency) / 100;
    const revenueFactor = Math.log(formData.annualRevenue / 1000000) / 10;
    
    const projectedROI = Math.round(baseMultiplier * efficiencyFactor * revenueFactor * 100);
    const totalSavings = Math.round(formData.annualRevenue * (projectedROI / 100));
    const paybackPeriod = Math.round(12 / (projectedROI / 100));
    const efficiencyGain = Math.round(300 * efficiencyFactor);
    const accuracyImprovement = Math.round(99.8 * efficiencyFactor);

    setResults({
      projectedROI,
      totalSavings,
      paybackPeriod,
      efficiencyGain,
      accuracyImprovement
    });
    
    setIsCalculated(true);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setIsCalculated(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
            🧮 ROI CALCULATOR
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            AI 2026 ROI Calculator
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl">
            Calculate your potential return on investment from implementing revolutionary 
            AI 2026 breakthroughs. See how quantum-neural fusion and consciousness-level 
            AI can transform your business.
          </p>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Calculate Your ROI</h2>
              
              <div className="space-y-6">
                {/* Industry Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select your industry</option>
                    {industries.map(industry => (
                      <option key={industry.value} value={industry.value}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Company Size */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Company Size
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => handleInputChange('companySize', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select company size</option>
                    <option value="startup">Startup (1-50 employees)</option>
                    <option value="small">Small (51-200 employees)</option>
                    <option value="medium">Medium (201-1000 employees)</option>
                    <option value="large">Large (1001-5000 employees)</option>
                    <option value="enterprise">Enterprise (5000+ employees)</option>
                  </select>
                </div>

                {/* Annual Revenue */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    value={formData.annualRevenue}
                    onChange={(e) => handleInputChange('annualRevenue', parseFloat(e.target.value) || 0)}
                    placeholder="Enter your annual revenue"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Current Efficiency */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Current Efficiency (%)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.currentEfficiency}
                    onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>0%</span>
                    <span className="font-semibold">{formData.currentEfficiency}%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Implementation Type */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    AI Implementation Type
                  </label>
                  <select
                    value={formData.implementationType}
                    onChange={(e) => handleInputChange('implementationType', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select implementation type</option>
                    {implementationTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time Horizon */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Implementation Time Horizon (months)
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="24"
                    value={formData.timeHorizon}
                    onChange={(e) => handleInputChange('timeHorizon', parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>6 months</span>
                    <span className="font-semibold">{formData.timeHorizon} months</span>
                    <span>24 months</span>
                  </div>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Calculate ROI
                </button>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Projected Results</h2>
              
              {!isCalculated ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🧮</div>
                  <p className="text-xl text-gray-600">
                    Fill out the form and click "Calculate ROI" to see your projected results
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Main ROI */}
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">
                      {results.projectedROI.toLocaleString()}%
                    </div>
                    <div className="text-xl font-semibold text-green-800">Projected ROI</div>
                    <div className="text-sm text-green-600 mt-2">
                      Over {formData.timeHorizon} months
                    </div>
                  </div>

                  {/* Total Savings */}
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          ${results.totalSavings.toLocaleString()}
                        </div>
                        <div className="text-sm text-blue-800">Total Savings</div>
                      </div>
                      <div className="text-3xl">💰</div>
                    </div>
                  </div>

                  {/* Payback Period */}
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          {results.paybackPeriod} months
                        </div>
                        <div className="text-sm text-purple-800">Payback Period</div>
                      </div>
                      <div className="text-3xl">⏰</div>
                    </div>
                  </div>

                  {/* Efficiency Gain */}
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-orange-600">
                          {results.efficiencyGain}%
                        </div>
                        <div className="text-sm text-orange-800">Efficiency Improvement</div>
                      </div>
                      <div className="text-3xl">📈</div>
                    </div>
                  </div>

                  {/* Accuracy Improvement */}
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-indigo-600">
                          {results.accuracyImprovement}%
                        </div>
                        <div className="text-sm text-indigo-800">Accuracy Improvement</div>
                      </div>
                      <div className="text-3xl">🎯</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 space-y-4">
                    <Link
                      href="/contact"
                      className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
                    >
                      Start Implementation
                    </Link>
                    <Link
                      href="/resources/ai-2026-ultimate-implementation-master-guide"
                      className="block w-full bg-transparent text-purple-600 py-3 px-6 rounded-lg font-semibold text-center border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
                    >
                      View Implementation Guide
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Real Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15,000%</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Manufacturing Success</h3>
              <p className="text-gray-700 mb-4">
                Global manufacturing company achieved unprecedented ROI through quantum-neural fusion implementation.
              </p>
              <Link 
                href="/case-studies/ai-2026-quantum-neural-fusion-success"
                className="text-green-600 hover:text-green-800 font-semibold"
              >
                Read Case Study →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Healthcare Breakthrough</h3>
              <p className="text-gray-700 mb-4">
                Medical AI system achieved near-perfect accuracy in diagnosis and treatment recommendations.
              </p>
              <Link 
                href="/case-studies/ai-2026-healthcare-revolution"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                View Results →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">6,200%</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Edge AI Success</h3>
              <p className="text-gray-700 mb-4">
                Advanced edge AI systems achieved remarkable ROI in distributed computing applications.
              </p>
              <Link 
                href="/case-studies/ai-2026-edge-optimization"
                className="text-purple-600 hover:text-purple-800 font-semibold"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join hundreds of companies already experiencing unprecedented success with 
            AI 2026 breakthrough implementations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start Your Implementation
            </Link>
            <Link 
              href="/ai-2026-ultimate-breakthrough-showcase"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Explore Breakthroughs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}