'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Clock, Users, Zap, ArrowRight } from 'lucide-react';

interface ROIInputs {
  currentEmployees: number;
  averageSalary: number;
  currentEfficiency: number;
  automationLevel: number;
  implementationTime: number;
  industry: string;
}

interface ROIResults {
  monthlySavings: number;
  yearlySavings: number;
  totalROI: number;
  paybackPeriod: number;
  efficiencyGain: number;
  costReduction: number;
}

const industries = [
  { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.2 },
  { value: 'healthcare', label: 'Healthcare', multiplier: 1.1 },
  { value: 'finance', label: 'Finance', multiplier: 1.3 },
  { value: 'retail', label: 'Retail', multiplier: 1.0 },
  { value: 'technology', label: 'Technology', multiplier: 1.4 },
  { value: 'other', label: 'Other', multiplier: 1.0 }
];

export default function InteractiveROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    currentEmployees: 50,
    averageSalary: 75000,
    currentEfficiency: 70,
    automationLevel: 60,
    implementationTime: 6,
    industry: 'technology'
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industry = industries.find(i => i.value === inputs.industry);
      const multiplier = industry?.multiplier || 1.0;
      
      // Base calculations
      const totalSalaryCost = inputs.currentEmployees * inputs.averageSalary;
      const efficiencyGain = (inputs.automationLevel / 100) * 0.4; // Up to 40% efficiency gain
      const costReduction = efficiencyGain * 0.3; // 30% of efficiency gain translates to cost reduction
      
      const monthlySavings = (totalSalaryCost / 12) * costReduction * multiplier;
      const yearlySavings = monthlySavings * 12;
      
      // Implementation cost (rough estimate: 10% of yearly salary cost)
      const implementationCost = totalSalaryCost * 0.1;
      
      const totalROI = ((yearlySavings - implementationCost) / implementationCost) * 100;
      const paybackPeriod = implementationCost / monthlySavings;
      
      setResults({
        monthlySavings,
        yearlySavings,
        totalROI: Math.max(0, totalROI),
        paybackPeriod,
        efficiencyGain: efficiencyGain * 100,
        costReduction: costReduction * 100
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: keyof ROIInputs, value: number | string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <Calculator className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-semibold text-white">INTERACTIVE ROI CALCULATOR</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Transformation ROI
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment for your AI automation project. 
            Get instant, personalized calculations based on your specific business parameters.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Business Parameters</h3>
            
            <div className="space-y-6">
              {/* Current Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.currentEmployees}
                    onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                    max="10000"
                  />
                  <Users className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Average Salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Annual Salary ($)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.averageSalary}
                    onChange={(e) => handleInputChange('averageSalary', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="20000"
                    max="500000"
                  />
                  <DollarSign className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Process Efficiency (%)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    value={inputs.currentEfficiency}
                    onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    min="10"
                    max="90"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10%</span>
                    <span className="font-medium">{inputs.currentEfficiency}%</span>
                    <span>90%</span>
                  </div>
                </div>
              </div>

              {/* Automation Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Automation Level (%)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    value={inputs.automationLevel}
                    onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    min="20"
                    max="95"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20%</span>
                    <span className="font-medium">{inputs.automationLevel}%</span>
                    <span>95%</span>
                  </div>
                </div>
              </div>

              {/* Implementation Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Timeline (months)
                </label>
                <div className="relative">
                  <select
                    value={inputs.implementationTime}
                    onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={3}>3 months</option>
                    <option value={6}>6 months</option>
                    <option value={12}>12 months</option>
                    <option value={18}>18 months</option>
                    <option value={24}>24 months</option>
                  </select>
                  <Clock className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <div className="relative">
                  <select
                    value={inputs.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {industries.map(industry => (
                      <option key={industry.value} value={industry.value}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Your ROI Projection</h3>
              
              <AnimatePresence mode="wait">
                {isCalculating ? (
                  <motion.div
                    key="calculating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Calculating your ROI...</p>
                  </motion.div>
                ) : results ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    {/* Main ROI */}
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white text-center">
                      <div className="text-4xl font-bold mb-2">{results.totalROI.toFixed(0)}%</div>
                      <div className="text-lg opacity-90">Total ROI</div>
                    </div>

                    {/* Savings */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          ${(results.monthlySavings / 1000).toFixed(0)}K
                        </div>
                        <div className="text-sm text-gray-600">Monthly Savings</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          ${(results.yearlySavings / 1000).toFixed(0)}K
                        </div>
                        <div className="text-sm text-gray-600">Yearly Savings</div>
                      </div>
                    </div>

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-purple-600 mb-1">
                          {results.paybackPeriod.toFixed(1)}
                        </div>
                        <div className="text-sm text-gray-600">Months to Payback</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-orange-600 mb-1">
                          {results.efficiencyGain.toFixed(0)}%
                        </div>
                        <div className="text-sm text-gray-600">Efficiency Gain</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-gray-200">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                        <Zap className="w-5 h-5 mr-2" />
                        Get Your Custom Implementation Plan
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Disclaimer:</strong> These calculations are estimates based on industry averages and typical AI implementation results. 
                Actual results may vary based on specific business conditions, implementation quality, and other factors.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl ${className}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">🧮 Calculate Your AI ROI</h2>
          <p className="text-xl opacity-90">
            See how much your business could save and earn with AI transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Current Annual Revenue ($)
              </label>
              <input
                type="number"
                value={inputs.currentRevenue}
                onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Current Annual Costs ($)
              </label>
              <input
                type="number"
                value={inputs.currentCosts}
                onChange={(e) => handleInputChange('currentCosts', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                AI Investment ($)
              </label>
              <input
                type="number"
                value={inputs.aiInvestment}
                onChange={(e) => handleInputChange('aiInvestment', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Expected Cost Reduction (%)
              </label>
              <input
                type="number"
                value={inputs.expectedCostReduction}
                onChange={(e) => handleInputChange('expectedCostReduction', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Your AI ROI Projection</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Expected ROI:</span>
                <span className="text-3xl font-bold text-green-400">{results.roi}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Payback Period:</span>
                <span className="text-xl font-semibold">{results.paybackPeriod} months</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Annual Benefits:</span>
                <span className="text-xl font-semibold">${results.annualBenefits.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Benefits ({inputs.timeFrame} months):</span>
                <span className="text-xl font-semibold">${results.totalBenefits.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI ROI Calculator</h2>
        <p className="text-gray-600">
          Calculate the potential return on investment for your AI transformation
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Revenue ($)
            </label>
            <input
              type="number"
              value={inputs.currentRevenue}
              onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Costs ($)
            </label>
            <input
              type="number"
              value={inputs.currentCosts}
              onChange={(e) => handleInputChange('currentCosts', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Investment ($)
            </label>
            <input
              type="number"
              value={inputs.aiInvestment}
              onChange={(e) => handleInputChange('aiInvestment', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Cost Reduction (%)
            </label>
            <input
              type="number"
              value={inputs.expectedCostReduction}
              onChange={(e) => handleInputChange('expectedCostReduction', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Revenue Increase (%)
            </label>
            <input
              type="number"
              value={inputs.expectedRevenueIncrease}
              onChange={(e) => handleInputChange('expectedRevenueIncrease', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Frame (months)
            </label>
            <input
              type="number"
              value={inputs.timeFrame}
              onChange={(e) => handleInputChange('timeFrame', Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">ROI Projection</h3>
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{results.roi}%</div>
              <div className="text-gray-600">Expected ROI</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{results.paybackPeriod}</div>
                <div className="text-sm text-gray-600">Months to Payback</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-purple-600">${results.annualBenefits.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Annual Benefits</div>
              </div>
            </div>
            
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <div className="text-lg font-semibold text-green-800">
                Total Benefits: ${results.totalBenefits.toLocaleString()}
              </div>
              <div className="text-sm text-green-600">
                Over {inputs.timeFrame} months
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}