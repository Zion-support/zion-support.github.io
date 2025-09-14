import React, { useState, useEffect } from 'react';

const UltimateContentRevolutionROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentContentCost: 100000,
    currentContentTime: 40,
    currentTeamSize: 5,
    currentContentVolume: 100,
    currentEngagementRate: 2.5,
    currentConversionRate: 1.2
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    timeSavings: 0,
    productivityGain: 0,
    engagementIncrease: 0,
    conversionIncrease: 0,
    totalROI: 0,
    paybackPeriod: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const {
        currentContentCost,
        currentContentTime,
        currentTeamSize,
        currentContentVolume,
        currentEngagementRate,
        currentConversionRate
      } = inputs;

      // AI Content Revolution improvements (based on real case studies)
      const costReduction = 0.95; // 95% cost reduction
      const timeReduction = 0.95; // 95% time reduction
      const productivityMultiplier = 5; // 500% productivity increase
      const engagementMultiplier = 5; // 500% engagement increase
      const conversionMultiplier = 3; // 300% conversion increase

      // Calculate savings
      const annualSavings = currentContentCost * costReduction;
      const timeSavings = currentContentTime * timeReduction;
      const productivityGain = (currentTeamSize * productivityMultiplier) - currentTeamSize;
      const engagementIncrease = currentEngagementRate * (engagementMultiplier - 1);
      const conversionIncrease = currentConversionRate * (conversionMultiplier - 1);

      // Calculate ROI (simplified calculation)
      const implementationCost = currentContentCost * 0.1; // 10% of current cost
      const totalROI = ((annualSavings - implementationCost) / implementationCost) * 100;
      const paybackPeriod = implementationCost / (annualSavings / 12);

      setResults({
        annualSavings: Math.round(annualSavings),
        timeSavings: Math.round(timeSavings),
        productivityGain: Math.round(productivityGain),
        engagementIncrease: Math.round(engagementIncrease * 100) / 100,
        conversionIncrease: Math.round(conversionIncrease * 100) / 100,
        totalROI: Math.round(totalROI),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10
      });

      setIsCalculating(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: number) => {
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

  const formatPercentage = (value: number) => {
    return `${value.toLocaleString()}%`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            🧮 ROI CALCULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Content Revolution ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the potential impact of implementing the Ultimate Content Revolution 
            for your business with our interactive ROI calculator.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Current Content Operations
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Content Creation Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentContentCost}
                  onChange={(e) => handleInputChange('currentContentCost', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="100000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours per Week Spent on Content
                </label>
                <input
                  type="number"
                  value={inputs.currentContentTime}
                  onChange={(e) => handleInputChange('currentContentTime', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Team Size
                </label>
                <input
                  type="number"
                  value={inputs.currentTeamSize}
                  onChange={(e) => handleInputChange('currentTeamSize', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Pieces per Month
                </label>
                <input
                  type="number"
                  value={inputs.currentContentVolume}
                  onChange={(e) => handleInputChange('currentContentVolume', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Engagement Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.currentEngagementRate}
                  onChange={(e) => handleInputChange('currentEngagementRate', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="2.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Conversion Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.currentConversionRate}
                  onChange={(e) => handleInputChange('currentConversionRate', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1.2"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              AI Content Revolution Impact
            </h3>

            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                <span className="ml-4 text-lg text-gray-600">Calculating...</span>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Main ROI Display */}
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">
                    {formatPercentage(results.totalROI)}
                  </div>
                  <div className="text-lg opacity-90">Expected ROI</div>
                </div>

                {/* Detailed Results */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-green-800">Annual Cost Savings</span>
                      <span className="text-2xl font-bold text-green-600">
                        {formatCurrency(results.annualSavings)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-blue-800">Time Savings (hours/week)</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {results.timeSavings}
                      </span>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-purple-800">Productivity Gain</span>
                      <span className="text-2xl font-bold text-purple-600">
                        {formatPercentage(results.productivityGain * 100)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-orange-800">Engagement Increase</span>
                      <span className="text-2xl font-bold text-orange-600">
                        {formatPercentage(results.engagementIncrease * 100)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-indigo-800">Conversion Increase</span>
                      <span className="text-2xl font-bold text-indigo-600">
                        {formatPercentage(results.conversionIncrease * 100)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">Payback Period</span>
                      <span className="text-2xl font-bold text-gray-600">
                        {results.paybackPeriod} months
                      </span>
                    </div>
                  </div>
                </div>

                {/* Assumptions */}
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-2">Calculation Assumptions</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• 95% reduction in content creation costs</li>
                    <li>• 95% reduction in content creation time</li>
                    <li>• 500% increase in team productivity</li>
                    <li>• 500% increase in engagement rates</li>
                    <li>• 300% increase in conversion rates</li>
                    <li>• Implementation cost: 10% of current annual spend</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve These Results?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies already experiencing the Ultimate Content Revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentRevolutionROICalculator;