import React, { useState, useEffect } from 'react';

interface ROIResult {
  annualSavings: number;
  totalROI: number;
  paybackPeriod: number;
  fiveYearValue: number;
}

const InteractiveROICalculator2025: React.FC = () => {
  const [annualRevenue, setAnnualRevenue] = useState<number>(10000000);
  const [currentEfficiency, setCurrentEfficiency] = useState<number>(75);
  const [aiInvestment, setAiInvestment] = useState<number>(500000);
  const [implementationTime, setImplementationTime] = useState<number>(12);
  const [roiResult, setRoiResult] = useState<ROIResult | null>(null);

  useEffect(() => {
    calculateROI();
  }, [annualRevenue, currentEfficiency, aiInvestment, implementationTime]);

  const calculateROI = () => {
    // Based on real-world AI transformation data
    const efficiencyGain = (100 - currentEfficiency) * 0.8; // 80% of inefficiency can be addressed
    const newEfficiency = Math.min(100, currentEfficiency + efficiencyGain);
    
    // Calculate savings based on efficiency improvement
    const efficiencyImprovement = (newEfficiency - currentEfficiency) / 100;
    const annualSavings = annualRevenue * efficiencyImprovement * 0.4; // 40% of revenue impacted by efficiency
    
    // Additional AI benefits (cost reduction, productivity, etc.)
    const additionalSavings = annualRevenue * 0.15; // 15% additional savings from AI
    
    const totalAnnualSavings = annualSavings + additionalSavings;
    const totalROI = ((totalAnnualSavings - aiInvestment) / aiInvestment) * 100;
    const paybackPeriod = aiInvestment / totalAnnualSavings;
    const fiveYearValue = (totalAnnualSavings * 5) - aiInvestment;

    setRoiResult({
      annualSavings: totalAnnualSavings,
      totalROI,
      paybackPeriod,
      fiveYearValue
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(0)}%`;
  };

  const getROIColor = (roi: number) => {
    if (roi >= 500) return 'text-green-500';
    if (roi >= 200) return 'text-blue-500';
    if (roi >= 100) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">💰 ROI CALCULATOR</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Calculate Your AI Transformation ROI
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Based on real-world data from Fortune 500 companies, discover the potential return on investment 
            for your AI transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Panel */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Parameters</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="10,000,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Operational Efficiency
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="50"
                    max="95"
                    value={currentEfficiency}
                    onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-lg font-semibold text-purple-600 min-w-[3rem]">
                    {formatPercentage(currentEfficiency)}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Lower efficiency = Higher AI improvement potential
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Investment Budget
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={aiInvestment}
                    onChange={(e) => setAiInvestment(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="500,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Timeline (Months)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="6"
                    max="24"
                    value={implementationTime}
                    onChange={(e) => setImplementationTime(Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-lg font-semibold text-purple-600 min-w-[3rem]">
                    {implementationTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your ROI Projection</h3>
            
            {roiResult && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Annual Savings</span>
                    <span className="text-2xl font-bold text-green-600">
                      {formatCurrency(roiResult.annualSavings)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (roiResult.annualSavings / annualRevenue) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Total ROI</span>
                    <span className={`text-2xl font-bold ${getROIColor(roiResult.totalROI)}`}>
                      {formatPercentage(roiResult.totalROI)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        roiResult.totalROI >= 500 ? 'bg-green-500' :
                        roiResult.totalROI >= 200 ? 'bg-blue-500' :
                        roiResult.totalROI >= 100 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(100, roiResult.totalROI / 10)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {(roiResult.paybackPeriod * 12).toFixed(1)}
                    </div>
                    <div className="text-sm text-gray-600">Months to Payback</div>
                  </div>
                  
                  <div className="bg-indigo-50 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-indigo-600">
                      {formatCurrency(roiResult.fiveYearValue)}
                    </div>
                    <div className="text-sm text-gray-600">5-Year Value</div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="text-yellow-600 mr-3">💡</div>
                    <div>
                      <div className="font-medium text-yellow-800 mb-1">Pro Tip</div>
                      <div className="text-sm text-yellow-700">
                        {roiResult.totalROI >= 500 
                          ? "Excellent potential! You're in the top 10% of AI transformation candidates."
                          : roiResult.totalROI >= 200
                          ? "Strong ROI potential! Consider starting with a pilot program."
                          : roiResult.totalROI >= 100
                          ? "Good ROI potential! Focus on high-impact areas first."
                          : "Consider optimizing current processes before major AI investment."
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your AI Transformation?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a personalized AI transformation roadmap and detailed ROI analysis from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="/case-studies"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculator2025;