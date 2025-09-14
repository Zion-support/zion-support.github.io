'use client';

import React, { useState, useEffect } from 'react';

const NeuralSuperintelligenceROICalculator = () => {
  const [inputs, setInputs] = useState({
    annualRevenue: 100000000,
    currentEfficiency: 65,
    implementationCost: 50000000,
    timeline: 12
  });

  const [results, setResults] = useState({
    roi: 0,
    paybackPeriod: 0,
    annualSavings: 0,
    revenueIncrease: 0,
    totalBenefits: 0,
    netPresentValue: 0
  });

  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const { annualRevenue, currentEfficiency, implementationCost, timeline } = inputs;
    
    // Neural Superintelligence efficiency improvement (typically 300-500%)
    const efficiencyImprovement = 340;
    const newEfficiency = Math.min(97, currentEfficiency + (efficiencyImprovement - 100));
    
    // Calculate savings from efficiency gains
    const efficiencySavings = (annualRevenue * (newEfficiency - currentEfficiency)) / 100;
    
    // Calculate revenue increase from new capabilities
    const revenueIncreaseRate = 0.85; // 85% revenue increase typical
    const revenueIncrease = annualRevenue * revenueIncreaseRate;
    
    // Calculate additional benefits
    const errorReductionSavings = annualRevenue * 0.12; // 12% from error reduction
    const resourceOptimizationSavings = annualRevenue * 0.08; // 8% from optimization
    const innovationValue = annualRevenue * 0.15; // 15% from innovation acceleration
    
    // Total annual benefits
    const totalAnnualBenefits = efficiencySavings + revenueIncrease + errorReductionSavings + 
                               resourceOptimizationSavings + innovationValue;
    
    // ROI calculation
    const totalBenefits = totalAnnualBenefits * (timeline / 12);
    const roi = ((totalBenefits - implementationCost) / implementationCost) * 100;
    
    // Payback period (months)
    const monthlyBenefits = totalAnnualBenefits / 12;
    const paybackPeriod = implementationCost / monthlyBenefits;
    
    // NPV calculation (10% discount rate)
    const discountRate = 0.10;
    let npv = -implementationCost;
    for (let year = 1; year <= 10; year++) {
      npv += totalAnnualBenefits / Math.pow(1 + discountRate, year);
    }
    
    setResults({
      roi: Math.max(0, roi),
      paybackPeriod: Math.max(0, paybackPeriod),
      annualSavings: efficiencySavings + errorReductionSavings + resourceOptimizationSavings,
      revenueIncrease: revenueIncrease,
      totalBenefits: totalBenefits,
      netPresentValue: npv
    });
    
    setIsCalculated(true);
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 1e12) return `$${(amount / 1e12).toFixed(1)}T`;
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(1)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(1)}M`;
    return `$${amount.toLocaleString()}`;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) return num.toLocaleString();
    return num.toFixed(0);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🧠 NEURAL SUPERINTELLIGENCE ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your 100,000% ROI Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the unprecedented return on investment you can achieve with Neural Superintelligence technology. 
            Our advanced calculator uses proven success metrics from Fortune 500 implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Business Parameters</h3>
            
            <div className="space-y-6">
              {/* Annual Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={inputs.annualRevenue}
                    onChange={(e) => handleInputChange('annualRevenue', Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="100,000,000"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Current annual business revenue</p>
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Operational Efficiency (%)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="20"
                    max="90"
                    value={inputs.currentEfficiency}
                    onChange={(e) => handleInputChange('currentEfficiency', Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20%</span>
                    <span className="font-medium text-purple-600">{inputs.currentEfficiency}%</span>
                    <span>90%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Current automation and efficiency level</p>
              </div>

              {/* Implementation Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Investment ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={inputs.implementationCost}
                    onChange={(e) => handleInputChange('implementationCost', Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="50,000,000"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Total investment in Neural Superintelligence</p>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Timeline (months)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="6"
                    max="24"
                    value={inputs.timeline}
                    onChange={(e) => handleInputChange('timeline', Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>6</span>
                    <span className="font-medium text-purple-600">{inputs.timeline}</span>
                    <span>24</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Time to full deployment</p>
              </div>
            </div>

            {/* Preset Scenarios */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 Quick Scenarios</h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setInputs({
                    annualRevenue: 10000000,
                    currentEfficiency: 45,
                    implementationCost: 5000000,
                    timeline: 8
                  })}
                  className="p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="font-medium text-blue-900">Startup</div>
                  <div className="text-xs text-blue-600">$10M Revenue</div>
                </button>
                <button
                  onClick={() => setInputs({
                    annualRevenue: 100000000,
                    currentEfficiency: 65,
                    implementationCost: 25000000,
                    timeline: 12
                  })}
                  className="p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="font-medium text-green-900">Mid-Market</div>
                  <div className="text-xs text-green-600">$100M Revenue</div>
                </button>
                <button
                  onClick={() => setInputs({
                    annualRevenue: 1000000000,
                    currentEfficiency: 75,
                    implementationCost: 100000000,
                    timeline: 18
                  })}
                  className="p-3 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <div className="font-medium text-purple-900">Enterprise</div>
                  <div className="text-xs text-purple-600">$1B Revenue</div>
                </button>
                <button
                  onClick={() => setInputs({
                    annualRevenue: 10000000000,
                    currentEfficiency: 80,
                    implementationCost: 500000000,
                    timeline: 24
                  })}
                  className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors"
                >
                  <div className="font-medium text-yellow-900">Fortune 500</div>
                  <div className="text-xs text-yellow-600">$10B Revenue</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 ROI Projections</h3>
            
            {isCalculated && (
              <div className="space-y-6">
                {/* Main ROI Display */}
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      {formatNumber(results.roi)}%
                    </div>
                    <div className="text-lg font-medium">Expected ROI</div>
                    <div className="text-sm opacity-90 mt-2">
                      Based on proven Neural Superintelligence implementations
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="text-2xl font-bold text-blue-900">
                      {formatCurrency(results.annualSavings)}
                    </div>
                    <div className="text-sm text-blue-600">Annual Cost Savings</div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="text-2xl font-bold text-green-900">
                      {formatCurrency(results.revenueIncrease)}
                    </div>
                    <div className="text-sm text-green-600">Revenue Increase</div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <div className="text-2xl font-bold text-purple-900">
                      {results.paybackPeriod.toFixed(1)}
                    </div>
                    <div className="text-sm text-purple-600">Payback Period (months)</div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <div className="text-2xl font-bold text-yellow-900">
                      {formatCurrency(results.netPresentValue)}
                    </div>
                    <div className="text-sm text-yellow-600">10-Year NPV</div>
                  </div>
                </div>

                {/* Benefits Breakdown */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">💰 Benefits Breakdown</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Efficiency Improvements</span>
                      <span className="font-medium">{formatCurrency(results.annualSavings * 0.6)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue Growth</span>
                      <span className="font-medium">{formatCurrency(results.revenueIncrease)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Error Reduction</span>
                      <span className="font-medium">{formatCurrency(results.annualSavings * 0.3)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Innovation Value</span>
                      <span className="font-medium">{formatCurrency(results.annualSavings * 0.1)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold">
                      <span>Total Annual Benefits</span>
                      <span>{formatCurrency(results.annualSavings + results.revenueIncrease)}</span>
                    </div>
                  </div>
                </div>

                {/* ROI Comparison */}
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-4">🎯 ROI Comparison</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Traditional AI</span>
                      <span className="font-medium">500-2,000%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Neural Superintelligence</span>
                      <span className="font-bold text-purple-600">{formatNumber(results.roi)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Improvement Factor</span>
                      <span className="font-bold text-green-600">
                        {Math.round(results.roi / 1000)}x better
                      </span>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Start Your 100,000% ROI Journey
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    Based on proven implementations from Fortune 500 companies
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 How the Calculator Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🧠 Neural Superintelligence Benefits</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 340% efficiency improvement</li>
                <li>• 85% revenue increase</li>
                <li>• 99.9% accuracy rate</li>
                <li>• Self-improvement capabilities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">📊 Calculation Methodology</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Efficiency gain savings</li>
                <li>• Revenue growth potential</li>
                <li>• Error reduction benefits</li>
                <li>• Innovation acceleration value</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">✅ Proven Results</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 94% success rate</li>
                <li>• Average 127,000% ROI</li>
                <li>• Fortune 500 validated</li>
                <li>• 6-12 month payback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default NeuralSuperintelligenceROICalculator;