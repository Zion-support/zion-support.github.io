'use client';

import React, { useState, useEffect } from 'react';

const AIAutomationROICalculator = () => {
  const [formData, setFormData] = useState({
    currentEmployees: 100,
    averageSalary: 75000,
    currentEfficiency: 60,
    automationLevel: 80,
    implementationCost: 500000,
    maintenanceCost: 50000,
    timeToImplement: 12
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    totalInvestment: 0,
    netROI: 0,
    paybackPeriod: 0,
    efficiencyGain: 0,
    costReduction: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const {
        currentEmployees,
        averageSalary,
        currentEfficiency,
        automationLevel,
        implementationCost,
        maintenanceCost,
        timeToImplement
      } = formData;

      // Calculate efficiency gain
      const efficiencyGain = ((automationLevel - currentEfficiency) / currentEfficiency) * 100;
      
      // Calculate potential employee reduction (conservative estimate)
      const potentialReduction = Math.min(efficiencyGain / 100 * 0.7, 0.5); // Max 50% reduction
      const reducedEmployees = Math.floor(currentEmployees * potentialReduction);
      
      // Calculate annual savings
      const annualSalarySavings = reducedEmployees * averageSalary;
      const efficiencySavings = (currentEmployees - reducedEmployees) * averageSalary * (efficiencyGain / 100);
      const annualSavings = annualSalarySavings + efficiencySavings;
      
      // Calculate total investment
      const totalInvestment = implementationCost + (maintenanceCost * timeToImplement);
      
      // Calculate ROI
      const netROI = ((annualSavings * timeToImplement - totalInvestment) / totalInvestment) * 100;
      
      // Calculate payback period
      const paybackPeriod = totalInvestment / annualSavings;
      
      // Calculate cost reduction percentage
      const costReduction = (annualSavings / (currentEmployees * averageSalary)) * 100;

      setResults({
        annualSavings: Math.round(annualSavings),
        totalInvestment: Math.round(totalInvestment),
        netROI: Math.round(netROI),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        efficiencyGain: Math.round(efficiencyGain),
        costReduction: Math.round(costReduction)
      });
      
      setIsCalculating(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getROIColor = (roi: number) => {
    if (roi >= 500) return 'text-green-600';
    if (roi >= 200) return 'text-blue-600';
    if (roi >= 100) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getROIBadge = (roi: number) => {
    if (roi >= 1000) return { text: 'EXCEPTIONAL', color: 'bg-green-500' };
    if (roi >= 500) return { text: 'EXCELLENT', color: 'bg-blue-500' };
    if (roi >= 200) return { text: 'GOOD', color: 'bg-yellow-500' };
    if (roi >= 100) return { text: 'FAIR', color: 'bg-orange-500' };
    return { text: 'NEEDS IMPROVEMENT', color: 'bg-red-500' };
  };

  const roiBadge = getROIBadge(results.netROI);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Automation ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential return on investment for AI automation in your organization. 
            Get personalized insights based on your specific business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Annual Salary ($)
                </label>
                <input
                  type="number"
                  value={formData.averageSalary}
                  onChange={(e) => handleInputChange('averageSalary', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Efficiency Level (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={formData.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10%</span>
                  <span className="font-semibold">{formData.currentEfficiency}%</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Target Automation Level (%)
                </label>
                <input
                  type="range"
                  min="50"
                  max="95"
                  value={formData.automationLevel}
                  onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>50%</span>
                  <span className="font-semibold">{formData.automationLevel}%</span>
                  <span>95%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Implementation Cost ($)
                </label>
                <input
                  type="number"
                  value={formData.implementationCost}
                  onChange={(e) => handleInputChange('implementationCost', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Maintenance Cost ($)
                </label>
                <input
                  type="number"
                  value={formData.maintenanceCost}
                  onChange={(e) => handleInputChange('maintenanceCost', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Implementation Timeline (months)
                </label>
                <input
                  type="range"
                  min="3"
                  max="24"
                  value={formData.timeToImplement}
                  onChange={(e) => handleInputChange('timeToImplement', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>3 months</span>
                  <span className="font-semibold">{formData.timeToImplement} months</span>
                  <span>24 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* ROI Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">ROI Analysis</h3>
                {isCalculating && (
                  <div className="flex items-center space-x-2 text-purple-600">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                    <span className="text-sm font-medium">Calculating...</span>
                  </div>
                )}
              </div>

              <div className="text-center mb-6">
                <div className={`text-6xl font-bold ${getROIColor(results.netROI)} mb-2`}>
                  {results.netROI}%
                </div>
                <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${roiBadge.color}`}>
                  {roiBadge.text}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    ${results.annualSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    ${results.totalInvestment.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Total Investment</div>
                </div>
              </div>
            </div>

            {/* Detailed Metrics */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Metrics</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="font-semibold text-gray-900">{results.paybackPeriod} years</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Efficiency Gain</span>
                  <span className="font-semibold text-green-600">+{results.efficiencyGain}%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Cost Reduction</span>
                  <span className="font-semibold text-blue-600">-{results.costReduction}%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">3-Year Net Benefit</span>
                  <span className="font-semibold text-purple-600">
                    ${((results.annualSavings * 3) - results.totalInvestment).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Recommendations</h3>
              <div className="space-y-3 text-sm">
                {results.netROI >= 200 && (
                  <div className="flex items-start space-x-2">
                    <span className="text-green-300">✓</span>
                    <span>Excellent ROI potential - strongly recommended for implementation</span>
                  </div>
                )}
                {results.netROI >= 100 && results.netROI < 200 && (
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-300">⚠</span>
                    <span>Good ROI potential - consider phased implementation approach</span>
                  </div>
                )}
                {results.netROI < 100 && (
                  <div className="flex items-start space-x-2">
                    <span className="text-red-300">⚠</span>
                    <span>Consider optimizing parameters or starting with pilot projects</span>
                  </div>
                )}
                <div className="flex items-start space-x-2">
                  <span className="text-blue-300">💡</span>
                  <span>Contact our experts for personalized implementation strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Implement AI Automation?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experts can help you achieve these results with proven implementation strategies 
              and ongoing support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
                Get Implementation Plan
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationROICalculator;