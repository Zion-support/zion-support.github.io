'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InteractiveAICalculator2026() {
  const [annualRevenue, setAnnualRevenue] = useState(10000000);
  const [currentEfficiency, setCurrentEfficiency] = useState(70);
  const [automationLevel, setAutomationLevel] = useState(30);
  const [industry, setIndustry] = useState('manufacturing');
  const [aiTechnologies, setAiTechnologies] = useState<string[]>([]);

  const calculateROI = () => {
    const baseMultiplier = industry === 'manufacturing' ? 1.5 : 
                          industry === 'finance' ? 1.3 : 
                          industry === 'healthcare' ? 1.4 : 1.2;
    
    const efficiencyGain = (100 - currentEfficiency) * 0.8;
    const automationGain = (100 - automationLevel) * 0.6;
    const technologyBonus = aiTechnologies.length * 0.3;
    
    const totalGain = (efficiencyGain + automationGain + technologyBonus) * baseMultiplier;
    const annualSavings = (annualRevenue * totalGain) / 100;
    const implementationCost = annualRevenue * 0.15;
    const netSavings = annualSavings - implementationCost;
    const roi = (netSavings / implementationCost) * 100;
    
    return {
      annualSavings: Math.round(annualSavings),
      implementationCost: Math.round(implementationCost),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi),
      efficiencyImprovement: Math.round(totalGain)
    };
  };

  const results = calculateROI();

  const handleTechnologyChange = (tech: string) => {
    setAiTechnologies(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI 2026 ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential returns from AI 2026 transformation. Get precise 
            projections for quantum AI, neural interfaces, and autonomous systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your annual revenue"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Efficiency Level: {currentEfficiency}%
                </label>
                <input
                  type="range"
                  min="30"
                  max="95"
                  value={currentEfficiency}
                  onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Low (30%)</span>
                  <span>High (95%)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Level: {automationLevel}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={automationLevel}
                  onChange={(e) => setAutomationLevel(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Manual (0%)</span>
                  <span>Automated (80%)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  AI 2026 Technologies (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Quantum AI Computing',
                    'Neural Interfaces',
                    'Autonomous AI Agents',
                    'Multimodal AI',
                    'Edge AI Computing',
                    'Predictive Analytics'
                  ].map((tech) => (
                    <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={aiTechnologies.includes(tech)}
                        onChange={() => handleTechnologyChange(tech)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI 2026 Projection</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {results.roi}%
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">Expected ROI</div>
                  <div className="text-sm text-gray-600">3-year return on investment</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    ${(results.annualSavings / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {results.efficiencyImprovement}%
                  </div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-lg font-semibold text-gray-900 mb-2">Implementation Cost</div>
                <div className="text-2xl font-bold text-orange-600">
                  ${(results.implementationCost / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-gray-600 mt-1">One-time investment</div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 text-white">
                <div className="text-lg font-semibold mb-2">Net Annual Benefit</div>
                <div className="text-3xl font-bold">
                  ${(results.netSavings / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm opacity-90 mt-1">
                  After implementation costs
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/services/ai-2026-revolutionary-solutions"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Start Your AI 2026 Transformation
                </Link>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Get a detailed implementation plan and timeline
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            * Projections based on industry data and AI 2026 technology capabilities
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ Quantum AI Computing</span>
            <span>✓ Neural Interface Systems</span>
            <span>✓ Autonomous AI Agents</span>
            <span>✓ Multimodal AI Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
}