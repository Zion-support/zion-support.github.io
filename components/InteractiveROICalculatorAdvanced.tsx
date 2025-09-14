import React, { useState, useEffect } from 'react';

const InteractiveROICalculatorAdvanced = () => {
  const [formData, setFormData] = useState({
    currentRevenue: 1000000,
    currentCosts: 800000,
    automationInvestment: 200000,
    timeToImplement: 6,
    productivityGain: 25,
    costReduction: 30,
    errorReduction: 50,
    customerSatisfaction: 20
  });

  const [results, setResults] = useState({
    netProfit: 0,
    roi: 0,
    paybackPeriod: 0,
    totalSavings: 0,
    productivityValue: 0,
    costSavings: 0,
    errorSavings: 0,
    customerValue: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const {
        currentRevenue,
        currentCosts,
        automationInvestment,
        timeToImplement,
        productivityGain,
        costReduction,
        errorReduction,
        customerSatisfaction
      } = formData;

      // Calculate productivity value (revenue increase)
      const productivityValue = (currentRevenue * productivityGain) / 100;
      
      // Calculate cost savings
      const costSavings = (currentCosts * costReduction) / 100;
      
      // Calculate error reduction savings (assume 5% of revenue is lost to errors)
      const errorSavings = (currentRevenue * 0.05 * errorReduction) / 100;
      
      // Calculate customer satisfaction value (assume 10% revenue increase from better service)
      const customerValue = (currentRevenue * 0.10 * customerSatisfaction) / 100;
      
      // Total annual savings
      const totalSavings = productivityValue + costSavings + errorSavings + customerValue;
      
      // Net profit (savings minus investment)
      const netProfit = totalSavings - automationInvestment;
      
      // ROI percentage
      const roi = automationInvestment > 0 ? (netProfit / automationInvestment) * 100 : 0;
      
      // Payback period in months
      const paybackPeriod = totalSavings > 0 ? (automationInvestment / totalSavings) * 12 : 0;

      setResults({
        netProfit,
        roi,
        paybackPeriod,
        totalSavings,
        productivityValue,
        costSavings,
        errorSavings,
        customerValue
      });
      
      setIsCalculating(false);
    }, 500);
  };

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getROIColor = (roi: number) => {
    if (roi >= 300) return 'text-green-600';
    if (roi >= 100) return 'text-blue-600';
    if (roi >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getROIBadge = (roi: number) => {
    if (roi >= 300) return '🚀 Exceptional';
    if (roi >= 100) return '⭐ Excellent';
    if (roi >= 50) return '✅ Good';
    return '⚠️ Needs Review';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">💰 INTERACTIVE ROI CALCULATOR</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Automation ROI
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the potential return on investment for your AI automation project. 
            Get instant, personalized calculations based on your business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Metrics</h3>
            
            <div className="space-y-6">
              {/* Current Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1,000,000"
                />
              </div>

              {/* Current Costs */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Operating Costs ($)
                </label>
                <input
                  type="number"
                  value={formData.currentCosts}
                  onChange={(e) => handleInputChange('currentCosts', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="800,000"
                />
              </div>

              {/* Automation Investment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Automation Investment ($)
                </label>
                <input
                  type="number"
                  value={formData.automationInvestment}
                  onChange={(e) => handleInputChange('automationInvestment', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="200,000"
                />
              </div>

              {/* Time to Implement */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Time (months)
                </label>
                <input
                  type="number"
                  value={formData.timeToImplement}
                  onChange={(e) => handleInputChange('timeToImplement', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="6"
                />
              </div>

              {/* Productivity Gain */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Productivity Gain (%)
                </label>
                <input
                  type="number"
                  value={formData.productivityGain}
                  onChange={(e) => handleInputChange('productivityGain', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="25"
                />
              </div>

              {/* Cost Reduction */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Cost Reduction (%)
                </label>
                <input
                  type="number"
                  value={formData.costReduction}
                  onChange={(e) => handleInputChange('costReduction', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="30"
                />
              </div>

              {/* Error Reduction */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Error Reduction (%)
                </label>
                <input
                  type="number"
                  value={formData.errorReduction}
                  onChange={(e) => handleInputChange('errorReduction', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="50"
                />
              </div>

              {/* Customer Satisfaction */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Customer Satisfaction Improvement (%)
                </label>
                <input
                  type="number"
                  value={formData.customerSatisfaction}
                  onChange={(e) => handleInputChange('customerSatisfaction', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="20"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your ROI Analysis</h3>
            
            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                <span className="ml-3 text-gray-600">Calculating...</span>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Main ROI */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl text-center">
                  <div className="text-sm opacity-90 mb-2">Expected ROI</div>
                  <div className={`text-4xl font-bold ${getROIColor(results.roi)}`}>
                    {results.roi.toFixed(0)}%
                  </div>
                  <div className="text-sm opacity-90 mt-2">
                    {getROIBadge(results.roi)}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ${(results.netProfit / 1000).toFixed(0)}K
                    </div>
                    <div className="text-sm text-gray-600">Annual Net Profit</div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {results.paybackPeriod.toFixed(1)}m
                    </div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-gray-900">Value Breakdown</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Productivity Gains</span>
                      <span className="font-semibold text-green-600">
                        +${(results.productivityValue / 1000).toFixed(0)}K
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Cost Savings</span>
                      <span className="font-semibold text-blue-600">
                        +${(results.costSavings / 1000).toFixed(0)}K
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Error Reduction</span>
                      <span className="font-semibold text-purple-600">
                        +${(results.errorSavings / 1000).toFixed(0)}K
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Customer Value</span>
                      <span className="font-semibold text-orange-600">
                        +${(results.customerValue / 1000).toFixed(0)}K
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 font-bold text-lg">
                      <span className="text-gray-900">Total Annual Value</span>
                      <span className="text-purple-600">
                        ${(results.totalSavings / 1000).toFixed(0)}K
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <h5 className="font-bold text-yellow-800 mb-2">💡 Recommendations</h5>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    {results.roi >= 200 && (
                      <li>• Excellent ROI! Consider accelerating implementation</li>
                    )}
                    {results.paybackPeriod <= 12 && (
                      <li>• Quick payback period - low risk investment</li>
                    )}
                    {results.productivityValue > results.costSavings && (
                      <li>• Focus on productivity gains for maximum impact</li>
                    )}
                    <li>• Start with high-impact, low-risk processes</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve These Results?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Our AI automation experts can help you implement solutions that deliver real ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Custom Analysis
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculatorAdvanced;