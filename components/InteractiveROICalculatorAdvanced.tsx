import React, { useState, useEffect } from 'react';

const InteractiveROICalculatorAdvanced = () => {
  const [formData, setFormData] = useState({
    currentEmployees: 100,
    averageSalary: 75000,
    manualProcesses: 50,
    errorRate: 15,
    processingTime: 8,
    customerSatisfaction: 70,
    revenue: 10000000
  });

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const {
        currentEmployees,
        averageSalary,
        manualProcesses,
        errorRate,
        processingTime,
        customerSatisfaction,
        revenue
      } = formData;

      // AI Implementation Costs
      const aiSetupCost = 500000; // Base setup cost
      const aiMonthlyCost = 50000; // Monthly operational cost
      const trainingCost = currentEmployees * 2000; // Training cost per employee
      const totalFirstYearCost = aiSetupCost + (aiMonthlyCost * 12) + trainingCost;

      // Cost Savings Calculations
      const laborSavings = (currentEmployees * 0.4) * averageSalary; // 40% reduction in labor
      const processEfficiency = manualProcesses * 0.8 * 1000; // 80% process automation
      const errorReduction = (errorRate / 100) * revenue * 0.1; // 10% of revenue lost to errors
      const timeSavings = processingTime * 0.6 * currentEmployees * 50; // 60% time reduction
      const customerRetention = (customerSatisfaction / 100) * revenue * 0.05; // 5% revenue from satisfaction

      const totalAnnualSavings = laborSavings + processEfficiency + errorReduction + timeSavings + customerRetention;
      const netSavings = totalAnnualSavings - totalFirstYearCost;
      const roi = ((netSavings / totalFirstYearCost) * 100);
      const paybackPeriod = totalFirstYearCost / (totalAnnualSavings / 12);

      setResults({
        totalFirstYearCost,
        totalAnnualSavings,
        netSavings,
        roi,
        paybackPeriod,
        laborSavings,
        processEfficiency,
        errorReduction,
        timeSavings,
        customerRetention
      });
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-4 text-sm font-semibold text-white">
            <span className="mr-2">💰</span>
            INTERACTIVE ROI CALCULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your AI Automation ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment for your AI automation implementation. 
            Get personalized insights based on your business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Metrics</h3>
            
            <div className="space-y-6">
              {/* Current Employees */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Employees
                </label>
                <input
                  type="number"
                  value={formData.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="1"
                />
              </div>

              {/* Average Salary */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Annual Salary ($)
                </label>
                <input
                  type="number"
                  value={formData.averageSalary}
                  onChange={(e) => handleInputChange('averageSalary', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                />
              </div>

              {/* Manual Processes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Manual Processes
                </label>
                <input
                  type="number"
                  value={formData.manualProcesses}
                  onChange={(e) => handleInputChange('manualProcesses', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                />
              </div>

              {/* Error Rate */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Error Rate (%)
                </label>
                <input
                  type="number"
                  value={formData.errorRate}
                  onChange={(e) => handleInputChange('errorRate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                  max="100"
                />
              </div>

              {/* Processing Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Processing Time (hours)
                </label>
                <input
                  type="number"
                  value={formData.processingTime}
                  onChange={(e) => handleInputChange('processingTime', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                />
              </div>

              {/* Customer Satisfaction */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Customer Satisfaction Score (%)
                </label>
                <input
                  type="number"
                  value={formData.customerSatisfaction}
                  onChange={(e) => handleInputChange('customerSatisfaction', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                  max="100"
                />
              </div>

              {/* Annual Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.revenue}
                  onChange={(e) => handleInputChange('revenue', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ROI Analysis Results</h3>
            
            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                <span className="ml-4 text-gray-600">Calculating your ROI...</span>
              </div>
            ) : results ? (
              <div className="space-y-6">
                {/* Main ROI */}
                <div className="text-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {formatNumber(Math.round(results.roi))}%
                  </div>
                  <div className="text-lg font-semibold text-gray-700">Return on Investment</div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(results.totalAnnualSavings)}
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatCurrency(results.totalFirstYearCost)}
                    </div>
                    <div className="text-sm text-gray-600">First Year Cost</div>
                  </div>
                </div>

                {/* Payback Period */}
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {results.paybackPeriod.toFixed(1)} months
                  </div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Savings Breakdown:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Labor Savings:</span>
                      <span className="font-semibold">{formatCurrency(results.laborSavings)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Process Efficiency:</span>
                      <span className="font-semibold">{formatCurrency(results.processEfficiency)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Error Reduction:</span>
                      <span className="font-semibold">{formatCurrency(results.errorReduction)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time Savings:</span>
                      <span className="font-semibold">{formatCurrency(results.timeSavings)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customer Retention:</span>
                      <span className="font-semibold">{formatCurrency(results.customerRetention)}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Your Custom AI Strategy
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            * This calculator provides estimates based on industry averages. Actual results may vary.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/blog/ai-2025-ultimate-automation-revolution" className="text-purple-600 hover:text-purple-800">
              Read Full AI Automation Guide →
            </a>
            <a href="/case-studies/fortune-500-ai-transformation" className="text-purple-600 hover:text-purple-800">
              View Success Stories →
            </a>
            <a href="/services/ai-automation" className="text-purple-600 hover:text-purple-800">
              Explore AI Services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculatorAdvanced;