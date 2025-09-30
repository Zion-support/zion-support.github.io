'use client';

import React, { useState } from 'react';

export default function AIManufacturingROICalculator() {
  const [formData, setFormData] = useState({
    currentEfficiency: 65,
    productionLines: 5,
    monthlyRevenue: 2000000,
    currentDowntime: 15,
    qualityDefectRate: 8,
    maintenanceCosts: 50000,
    energyCosts: 80000,
  });

  const calculateROI = () => {
    const {
      currentEfficiency,
      productionLines,
      monthlyRevenue,
      currentDowntime,
      qualityDefectRate,
      maintenanceCosts,
      energyCosts,
    } = formData;

    // AI improvements
    const efficiencyGain = 85; // Target efficiency
    const efficiencyImprovement = efficiencyGain - currentEfficiency;
    const revenueIncrease = (monthlyRevenue * efficiencyImprovement) / 100;
    const annualRevenueIncrease = revenueIncrease * 12;

    // Downtime reduction
    const downtimeReduction = currentDowntime * 0.9; // 90% reduction
    const downtimeSavings = (monthlyRevenue * downtimeReduction) / 100;
    const annualDowntimeSavings = downtimeSavings * 12;

    // Quality improvements
    const defectReduction = qualityDefectRate * 0.7; // 70% reduction
    const qualitySavings = (monthlyRevenue * defectReduction) / 100;
    const annualQualitySavings = qualitySavings * 12;

    // Maintenance savings
    const maintenanceSavings = maintenanceCosts * 0.4; // 40% reduction
    const annualMaintenanceSavings = maintenanceSavings * 12;

    // Energy savings
    const energySavings = energyCosts * 0.3; // 30% reduction
    const annualEnergySavings = energySavings * 12;

    // Total annual savings
    const totalAnnualSavings = 
      annualRevenueIncrease + 
      annualDowntimeSavings + 
      annualQualitySavings + 
      annualMaintenanceSavings + 
      annualEnergySavings;

    // AI implementation costs (estimated)
    const aiImplementationCost = productionLines * 10000; // $10k per production line
    const monthlyAICosts = productionLines * 2000; // $2k per production line per month
    const annualAICosts = aiImplementationCost + (monthlyAICosts * 12);

    // ROI calculation
    const roi = ((totalAnnualSavings - annualAICosts) / annualAICosts) * 100;
    const paybackPeriod = annualAICosts / (totalAnnualSavings / 12);

    return {
      totalAnnualSavings,
      annualAICosts,
      roi,
      paybackPeriod,
      efficiencyImprovement,
      annualRevenueIncrease,
      annualDowntimeSavings,
      annualQualitySavings,
      annualMaintenanceSavings,
      annualEnergySavings,
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Manufacturing ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for AI manufacturing automation in your facility
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Current Operations</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Production Efficiency (%)
                </label>
                <input
                  type="range"
                  min="30"
                  max="90"
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>30%</span>
                  <span className="font-semibold text-blue-600">{formData.currentEfficiency}%</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Production Lines
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={formData.productionLines}
                  onChange={(e) => handleInputChange('productionLines', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1</span>
                  <span className="font-semibold text-blue-600">{formData.productionLines}</span>
                  <span>20</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Downtime (%)
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={formData.currentDowntime}
                  onChange={(e) => handleInputChange('currentDowntime', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5%</span>
                  <span className="font-semibold text-blue-600">{formData.currentDowntime}%</span>
                  <span>30%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quality Defect Rate (%)
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={formData.qualityDefectRate}
                  onChange={(e) => handleInputChange('qualityDefectRate', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1%</span>
                  <span className="font-semibold text-blue-600">{formData.qualityDefectRate}%</span>
                  <span>15%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Maintenance Costs ($)
                </label>
                <input
                  type="number"
                  value={formData.maintenanceCosts}
                  onChange={(e) => handleInputChange('maintenanceCosts', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Energy Costs ($)
                </label>
                <input
                  type="number"
                  value={formData.energyCosts}
                  onChange={(e) => handleInputChange('energyCosts', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Transformation Results</h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Financial Impact</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      ${(results.totalAnnualSavings / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      {results.roi.toFixed(0)}%
                    </div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Payback Period</h4>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    {results.paybackPeriod.toFixed(1)} months
                  </div>
                  <div className="text-sm text-gray-600">Time to break even</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Savings Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Efficiency Gains</span>
                    <span className="font-semibold text-green-600">
                      +{results.efficiencyImprovement}% efficiency
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Revenue Increase</span>
                    <span className="font-semibold text-green-600">
                      ${(results.annualRevenueIncrease / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Downtime Reduction</span>
                    <span className="font-semibold text-blue-600">
                      ${(results.annualDowntimeSavings / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Quality Improvements</span>
                    <span className="font-semibold text-purple-600">
                      ${(results.annualQualitySavings / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Maintenance Savings</span>
                    <span className="font-semibold text-orange-600">
                      ${(results.annualMaintenanceSavings / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Energy Savings</span>
                    <span className="font-semibold text-teal-600">
                      ${(results.annualEnergySavings / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Ready to Transform Your Manufacturing?</h4>
                <p className="text-sm opacity-90 mb-4">
                  Based on your inputs, AI automation could deliver significant ROI. Let's discuss how to make it happen.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Get Started
                  </a>
                  <a
                    href="/case-studies/ai-manufacturing-transformation"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}