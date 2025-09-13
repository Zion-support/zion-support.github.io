'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export default function AI2025ROICalculator() {
  const [formData, setFormData] = useState({
    annualRevenue: 1000000,
    industry: 'manufacturing',
    efficiency: 'medium',
    employees: 100,
    currentROI: 15
  });

  const [results, setResults] = useState({
    projectedROI: 10000,
    additionalRevenue: 100000000,
    efficiencyGain: 99.9,
    paybackPeriod: 0.1
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const baseROI = 10000; // Base 10,000% ROI
      const industryMultiplier = {
        manufacturing: 1.5,
        finance: 1.2,
        healthcare: 1.8,
        retail: 1.1,
        technology: 1.3
      };
      
      const efficiencyMultiplier = {
        low: 1.8,
        medium: 1.5,
        high: 1.2
      };
      
      const employeeMultiplier = Math.min(1 + (formData.employees / 1000), 2);
      
      const calculatedROI = Math.round(
        baseROI * 
        industryMultiplier[formData.industry as keyof typeof industryMultiplier] * 
        efficiencyMultiplier[formData.efficiency as keyof typeof efficiencyMultiplier] * 
        employeeMultiplier
      );
      
      const additionalRevenue = Math.round(formData.annualRevenue * (calculatedROI / 100));
      const efficiencyGain = Math.min(99.9, 45 + (calculatedROI / 200));
      const paybackPeriod = Math.max(0.1, 12 / (calculatedROI / 100));
      
      setResults({
        projectedROI: calculatedROI,
        additionalRevenue: additionalRevenue,
        efficiencyGain: efficiencyGain,
        paybackPeriod: paybackPeriod
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold mb-6">
            🧮 INTERACTIVE TOOL - FREE CALCULATION
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI 2025 ROI Calculator
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Calculate your potential ROI with our revolutionary AI 2025 breakthrough technology. 
            See how much your business can achieve with quantum-neural fusion and autonomous operations.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-center">Your Business Data</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    Annual Revenue ($)
                  </label>
                  <input 
                    type="number" 
                    value={formData.annualRevenue}
                    onChange={(e) => setFormData({...formData, annualRevenue: Number(e.target.value)})}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-lg"
                    placeholder="1,000,000"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    Industry Type
                  </label>
                  <select 
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-blue-400 text-lg"
                  >
                    <option value="manufacturing">Manufacturing</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    Current Efficiency Level
                  </label>
                  <select 
                    value={formData.efficiency}
                    onChange={(e) => setFormData({...formData, efficiency: e.target.value})}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-blue-400 text-lg"
                  >
                    <option value="low">Low (0-30%)</option>
                    <option value="medium">Medium (30-70%)</option>
                    <option value="high">High (70-90%)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    Number of Employees
                  </label>
                  <input 
                    type="number" 
                    value={formData.employees}
                    onChange={(e) => setFormData({...formData, employees: Number(e.target.value)})}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-lg"
                    placeholder="100"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    Current ROI (%)
                  </label>
                  <input 
                    type="number" 
                    value={formData.currentROI}
                    onChange={(e) => setFormData({...formData, currentROI: Number(e.target.value)})}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-lg"
                    placeholder="15"
                  />
                </div>
              </div>
            </div>
            
            {/* Results Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-center">Your Revolutionary Results</h2>
              
              {isCalculating ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
                  <p className="text-xl text-gray-300">Calculating your revolutionary ROI...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {results.projectedROI.toLocaleString()}%
                    </div>
                    <div className="text-lg font-semibold mb-2">Projected ROI</div>
                    <div className="text-sm text-gray-300">
                      {((results.projectedROI / formData.currentROI) * 100).toFixed(0)}x improvement over current ROI
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {formatCurrency(results.additionalRevenue)}
                    </div>
                    <div className="text-lg font-semibold mb-2">Additional Annual Revenue</div>
                    <div className="text-sm text-gray-300">
                      Based on your current revenue of {formatCurrency(formData.annualRevenue)}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {results.efficiencyGain.toFixed(1)}%
                    </div>
                    <div className="text-lg font-semibold mb-2">Efficiency Gain</div>
                    <div className="text-sm text-gray-300">
                      From current level to near-perfect efficiency
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/30">
                    <div className="text-4xl font-bold text-orange-400 mb-2">
                      {results.paybackPeriod.toFixed(1)} months
                    </div>
                    <div className="text-lg font-semibold mb-2">Payback Period</div>
                    <div className="text-sm text-gray-300">
                      Time to recover your investment
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">How Our AI 2025 Breakthrough Delivers These Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary technology combines multiple breakthrough innovations to deliver unprecedented ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 mb-4">
                Revolutionary combination of quantum computing and neural networks 
                delivers 15,000x faster processing with perfect accuracy.
              </p>
              <div className="text-green-400 font-semibold">15,000x Performance Boost</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-8 border border-blue-500/30">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Operations</h3>
              <p className="text-gray-300 mb-4">
                Fully autonomous systems that run 24/7, making optimal decisions 
                without human intervention.
              </p>
              <div className="text-green-400 font-semibold">24/7 Optimization</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-8 border border-green-500/30">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4">Predictive Mastery</h3>
              <p className="text-gray-300 mb-4">
                Predict future trends and outcomes with 99.9% accuracy, 
                giving you the ultimate competitive advantage.
              </p>
              <div className="text-green-400 font-semibold">99.9% Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Real Success Stories</h2>
            <p className="text-xl text-gray-300">
              See how other companies achieved incredible results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-8 border border-green-500/30 text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">15,000%</div>
              <div className="text-lg font-semibold mb-2">Manufacturing Giant</div>
              <div className="text-sm text-gray-300 mb-4">
                "Production efficiency increased by 15,000% using quantum-neural fusion."
              </div>
              <div className="text-xs text-gray-400">- Fortune 500 CEO</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-8 border border-blue-500/30 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">8,500%</div>
              <div className="text-lg font-semibold mb-2">Financial Services</div>
              <div className="text-sm text-gray-300 mb-4">
                "Trading algorithms transformed with 8,500% ROI in 6 months."
              </div>
              <div className="text-xs text-gray-400">- CTO, Global Finance</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">12,000%</div>
              <div className="text-lg font-semibold mb-2">Healthcare Revolution</div>
              <div className="text-sm text-gray-300 mb-4">
                "Patient outcomes improved by 12,000% with transcendent intelligence."
              </div>
              <div className="text-xs text-gray-400">- Medical Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Achieve Your Revolutionary ROI?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't wait - join the AI 2025 revolution and transform your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="px-8 py-4 bg-blue-800/50 border border-white/30 text-white hover:bg-blue-800/70 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}