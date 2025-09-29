import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Users, BarChart3 } from 'lucide-react';

interface CalculationResults {
  annualSavings: number;
  monthlySavings: number;
  roiPercentage: number;
  paybackPeriod: number;
  productivityGain: number;
  costReduction: number;
}

export default function AIROICalculator2026() {
  const [formData, setFormData] = useState({
    companySize: '100-500',
    currentAICost: 500000,
    currentAutomation: 20,
    industry: 'manufacturing',
    processComplexity: 'medium',
    dataQuality: 'good',
    implementationTimeline: '6-12'
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const { companySize, currentAICost, currentAutomation, industry, processComplexity, dataQuality, implementationTimeline } = formData;
      
      // Base multipliers based on company size
      const sizeMultipliers = {
        '1-50': 0.3,
        '51-100': 0.6,
        '101-500': 1.0,
        '501-1000': 1.5,
        '1000+': 2.0
      };

      // Industry-specific multipliers
      const industryMultipliers = {
        'manufacturing': 1.2,
        'finance': 1.0,
        'healthcare': 0.9,
        'retail': 1.1,
        'technology': 1.3,
        'other': 1.0
      };

      // Process complexity multipliers
      const complexityMultipliers = {
        'low': 0.8,
        'medium': 1.0,
        'high': 1.3
      };

      // Data quality multipliers
      const dataQualityMultipliers = {
        'poor': 0.7,
        'fair': 0.9,
        'good': 1.1,
        'excellent': 1.3
      };

      const baseMultiplier = sizeMultipliers[companySize as keyof typeof sizeMultipliers] || 1.0;
      const industryMultiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || 1.0;
      const complexityMultiplier = complexityMultipliers[processComplexity as keyof typeof complexityMultipliers] || 1.0;
      const dataMultiplier = dataQualityMultipliers[dataQuality as keyof typeof dataQualityMultipliers] || 1.0;

      // Calculate potential automation level (max 98%)
      const maxAutomation = Math.min(98, currentAutomation + (98 - currentAutomation) * 0.8);
      const automationGain = maxAutomation - currentAutomation;

      // Calculate savings based on current costs and automation potential
      const costReductionPercentage = (automationGain / 100) * 0.9; // 90% of automation gain translates to cost reduction
      const annualSavings = currentAICost * costReductionPercentage * baseMultiplier * industryMultiplier * complexityMultiplier * dataMultiplier;
      
      const monthlySavings = annualSavings / 12;
      const implementationCost = annualSavings * 0.3; // Assume 30% of first year savings as implementation cost
      const roiPercentage = ((annualSavings - implementationCost) / implementationCost) * 100;
      const paybackPeriod = implementationCost / monthlySavings;
      const productivityGain = automationGain * 1.5; // 1.5x productivity gain per automation percentage
      const costReduction = costReductionPercentage * 100;

      setResults({
        annualSavings: Math.round(annualSavings),
        monthlySavings: Math.round(monthlySavings),
        roiPercentage: Math.round(roiPercentage),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        productivityGain: Math.round(productivityGain),
        costReduction: Math.round(costReduction)
      });
      
      setIsCalculating(false);
    }, 1500);
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
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="text-blue-600 w-8 h-8" />
          <h2 className="text-3xl font-bold text-gray-900">AI ROI Calculator 2026</h2>
        </div>
        <p className="text-lg text-gray-600">
          Calculate your potential savings and ROI from AI automation implementation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Size
            </label>
            <select
              value={formData.companySize}
              onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1-50">1-50 employees</option>
              <option value="51-100">51-100 employees</option>
              <option value="101-500">101-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Annual AI/IT Costs
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="number"
                value={formData.currentAICost}
                onChange={(e) => setFormData({ ...formData, currentAICost: parseInt(e.target.value) || 0 })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="500000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Automation Level (%)
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={formData.currentAutomation}
              onChange={(e) => setFormData({ ...formData, currentAutomation: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>0%</span>
              <span className="font-semibold">{formData.currentAutomation}%</span>
              <span>50%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Process Complexity
            </label>
            <select
              value={formData.processComplexity}
              onChange={(e) => setFormData({ ...formData, processComplexity: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="low">Low - Simple, repetitive tasks</option>
              <option value="medium">Medium - Some decision-making required</option>
              <option value="high">High - Complex, multi-step processes</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Data Quality
            </label>
            <select
              value={formData.dataQuality}
              onChange={(e) => setFormData({ ...formData, dataQuality: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="poor">Poor - Inconsistent, incomplete data</option>
              <option value="fair">Fair - Some gaps, basic structure</option>
              <option value="good">Good - Well-structured, mostly complete</option>
              <option value="excellent">Excellent - Clean, comprehensive data</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Implementation Timeline
            </label>
            <select
              value={formData.implementationTimeline}
              onChange={(e) => setFormData({ ...formData, implementationTimeline: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1-3">1-3 months</option>
              <option value="3-6">3-6 months</option>
              <option value="6-12">6-12 months</option>
              <option value="12+">12+ months</option>
            </select>
          </div>

          <button
            onClick={calculateROI}
            disabled={isCalculating}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isCalculating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Calculating...
              </>
            ) : (
              <>
                <Calculator className="w-5 h-5" />
                Calculate ROI
              </>
            )}
          </button>
        </div>

        <div className="space-y-6">
          {results ? (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your AI ROI Projection</h3>
                <p className="text-gray-600">Based on your inputs, here's what you can expect:</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="text-green-600 w-6 h-6" />
                    <h4 className="text-lg font-semibold text-gray-900">Annual Savings</h4>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {formatCurrency(results.annualSavings)}
                  </div>
                  <p className="text-sm text-gray-600">
                    {formatCurrency(results.monthlySavings)} per month
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="text-blue-600 w-6 h-6" />
                    <h4 className="text-lg font-semibold text-gray-900">ROI Percentage</h4>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {results.roiPercentage}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Return on investment
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="text-purple-600 w-6 h-6" />
                    <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {results.paybackPeriod} months
                  </div>
                  <p className="text-sm text-gray-600">
                    Time to recover investment
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-yellow-600 w-6 h-6" />
                    <h4 className="text-lg font-semibold text-gray-900">Productivity Gain</h4>
                  </div>
                  <div className="text-3xl font-bold text-yellow-600 mb-1">
                    {results.productivityGain}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Increase in operational efficiency
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="text-red-600 w-6 h-6" />
                    <h4 className="text-lg font-semibold text-gray-900">Cost Reduction</h4>
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-1">
                    {results.costReduction}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Reduction in operational costs
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center">
                <h4 className="text-lg font-semibold mb-2">Ready to Achieve These Results?</h4>
                <p className="text-blue-100 mb-4">
                  Get a free consultation with our AI experts to create your implementation roadmap.
                </p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
              <div className="text-center">
                <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Calculate Your AI ROI</h3>
                <p className="text-gray-500">
                  Fill in your details and click "Calculate ROI" to see your potential savings
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}