'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CalculatorInputs {
  companySize: number;
  currentAutomation: number;
  industry: string;
  budget: number;
  timeline: number;
}

interface CalculatorResults {
  potentialROI: number;
  annualSavings: number;
  efficiencyGains: number;
  paybackPeriod: number;
  costReduction: number;
}

const InteractiveAI2026Calculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    companySize: 100,
    currentAutomation: 20,
    industry: 'manufacturing',
    budget: 500000,
    timeline: 12
  });

  const [results, setResults] = useState<CalculatorResults>({
    potentialROI: 0,
    annualSavings: 0,
    efficiencyGains: 0,
    paybackPeriod: 0,
    costReduction: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const industries = [
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.2 },
    { value: 'finance', label: 'Financial Services', multiplier: 1.5 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.3 },
    { value: 'retail', label: 'Retail', multiplier: 1.1 },
    { value: 'technology', label: 'Technology', multiplier: 1.4 },
    { value: 'logistics', label: 'Logistics', multiplier: 1.0 }
  ];

  const calculateResults = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industryData = industries.find(i => i.value === inputs.industry);
      const industryMultiplier = industryData?.multiplier || 1.0;
      
      // Base calculations
      const baseROI = 300;
      const baseSavings = inputs.companySize * 50000; // $50K per employee
      const baseEfficiency = 70;
      
      // Apply multipliers
      const sizeMultiplier = Math.log10(inputs.companySize) / 2; // Logarithmic scaling
      const automationGap = (100 - inputs.currentAutomation) / 100;
      const budgetMultiplier = Math.log10(inputs.budget) / 5; // Budget impact
      const timelineMultiplier = 12 / inputs.timeline; // Timeline impact
      
      const calculatedResults: CalculatorResults = {
        potentialROI: Math.round(
          baseROI * industryMultiplier * sizeMultiplier * automationGap * budgetMultiplier
        ),
        annualSavings: Math.round(
          baseSavings * industryMultiplier * sizeMultiplier * automationGap
        ),
        efficiencyGains: Math.round(
          baseEfficiency * industryMultiplier * automationGap
        ),
        paybackPeriod: Math.round(
          (inputs.timeline * 0.5) / (budgetMultiplier * timelineMultiplier)
        ),
        costReduction: Math.round(
          60 * industryMultiplier * automationGap
        )
      };

      setResults(calculatedResults);
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number | string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential ROI and savings with our advanced AI transformation solutions. 
            Get personalized projections based on your company's specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Company Profile</h3>
            
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size (Employees)
                </label>
                <input
                  type="range"
                  min="10"
                  max="10000"
                  value={inputs.companySize}
                  onChange={(e) => handleInputChange('companySize', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10</span>
                  <span className="font-semibold text-blue-600">{inputs.companySize.toLocaleString()}</span>
                  <span>10,000+</span>
                </div>
              </div>

              {/* Current Automation Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Level: {inputs.currentAutomation}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="90"
                  value={inputs.currentAutomation}
                  onChange={(e) => handleInputChange('currentAutomation', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>90%</span>
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  AI Investment Budget
                </label>
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="50000"
                  value={inputs.budget}
                  onChange={(e) => handleInputChange('budget', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$50K</span>
                  <span className="font-semibold text-blue-600">{formatCurrency(inputs.budget)}</span>
                  <span>$10M+</span>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Implementation Timeline: {inputs.timeline} months
                </label>
                <input
                  type="range"
                  min="3"
                  max="24"
                  value={inputs.timeline}
                  onChange={(e) => handleInputChange('timeline', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>3 months</span>
                  <span>12 months</span>
                  <span>24 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Your AI Transformation Projections</h3>
              
              {isCalculating ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
                  <p className="text-lg">Calculating your potential ROI...</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{results.potentialROI}%</div>
                    <div className="text-blue-200 text-sm">Potential ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{formatCurrency(results.annualSavings)}</div>
                    <div className="text-blue-200 text-sm">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{results.efficiencyGains}%</div>
                    <div className="text-blue-200 text-sm">Efficiency Gains</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{results.paybackPeriod}</div>
                    <div className="text-blue-200 text-sm">Months to ROI</div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Detailed Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6">Detailed Impact Analysis</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Cost Reduction</span>
                  <span className="text-2xl font-bold text-green-600">{results.costReduction}%</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Process Automation</span>
                  <span className="text-2xl font-bold text-blue-600">95%</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Decision Speed</span>
                  <span className="text-2xl font-bold text-purple-600">90%</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                  <span className="text-gray-700 font-semibold">Quality Improvement</span>
                  <span className="text-2xl font-bold text-orange-600">85%</span>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center"
            >
              <h4 className="text-xl font-bold mb-4">Ready to Achieve These Results?</h4>
              <p className="text-green-100 mb-6">
                Get a personalized AI transformation strategy tailored to your specific needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Get Free Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  );
};

export default InteractiveAI2026Calculator;