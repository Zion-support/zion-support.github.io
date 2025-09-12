import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    currentCosts: '',
    employees: '',
    avgSalary: '',
    timeSavings: '',
    efficiencyGains: '',
    errorReduction: '',
    implementationCost: '',
    timeframe: '12'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const currentCosts = parseFloat(formData.currentCosts) || 0;
    const employees = parseInt(formData.employees) || 0;
    const avgSalary = parseFloat(formData.avgSalary) || 0;
    const timeSavings = parseFloat(formData.timeSavings) || 0;
    const efficiencyGains = parseFloat(formData.efficiencyGains) || 0;
    const errorReduction = parseFloat(formData.errorReduction) || 0;
    const implementationCost = parseFloat(formData.implementationCost) || 0;
    const timeframe = parseInt(formData.timeframe) || 12;

    // Calculate annual savings
    const annualLaborCost = employees * avgSalary;
    const timeSavingsValue = annualLaborCost * (timeSavings / 100);
    const efficiencyValue = annualLaborCost * (efficiencyGains / 100);
    const errorReductionValue = currentCosts * (errorReduction / 100);
    
    const totalAnnualSavings = timeSavingsValue + efficiencyValue + errorReductionValue;
    const totalSavingsOverTimeframe = totalAnnualSavings * (timeframe / 12);
    
    const roi = implementationCost > 0 ? ((totalSavingsOverTimeframe - implementationCost) / implementationCost) * 100 : 0;
    const paybackPeriod = totalAnnualSavings > 0 ? implementationCost / totalAnnualSavings : 0;

    setResults({
      totalAnnualSavings,
      totalSavingsOverTimeframe,
      roi,
      paybackPeriod,
      timeSavingsValue,
      efficiencyValue,
      errorReductionValue
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <SEO
        title="AI ROI Calculator - Calculate Your AI Investment Return | Zion Tech Group"
        description="Calculate the return on investment for your AI initiatives. Input your current costs and expected improvements to see projected savings and ROI."
        keywords="AI ROI calculator, return on investment, AI investment calculator, business impact calculator"
        url="/tools/ai-roi-calculator"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">💰 ROI CALCULATOR</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI ROI Calculator
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Calculate the potential return on investment for your AI initiatives. 
                Input your current costs and expected improvements to see projected savings.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Form */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Input Your Data</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Annual Operating Costs ($)
                    </label>
                    <input
                      type="number"
                      value={formData.currentCosts}
                      onChange={(e) => handleInputChange('currentCosts', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 1000000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees Affected
                    </label>
                    <input
                      type="number"
                      value={formData.employees}
                      onChange={(e) => handleInputChange('employees', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average Annual Salary ($)
                    </label>
                    <input
                      type="number"
                      value={formData.avgSalary}
                      onChange={(e) => handleInputChange('avgSalary', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 75000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Time Savings (%)
                    </label>
                    <input
                      type="number"
                      value={formData.timeSavings}
                      onChange={(e) => handleInputChange('timeSavings', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 30"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Efficiency Gains (%)
                    </label>
                    <input
                      type="number"
                      value={formData.efficiencyGains}
                      onChange={(e) => handleInputChange('efficiencyGains', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 25"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Error Reduction (%)
                    </label>
                    <input
                      type="number"
                      value={formData.errorReduction}
                      onChange={(e) => handleInputChange('errorReduction', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      AI Implementation Cost ($)
                    </label>
                    <input
                      type="number"
                      value={formData.implementationCost}
                      onChange={(e) => handleInputChange('implementationCost', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 200000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Analysis Timeframe (months)
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => handleInputChange('timeframe', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="18">18 months</option>
                      <option value="24">24 months</option>
                      <option value="36">36 months</option>
                    </select>
                  </div>

                  <button
                    onClick={calculateROI}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                  >
                    Calculate ROI
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Analysis Results</h2>
                
                {results ? (
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {results.roi > 0 ? '+' : ''}{results.roi.toFixed(1)}%
                      </div>
                      <div className="text-gray-600">Return on Investment</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          ${(results.totalAnnualSavings / 1000).toFixed(0)}K
                        </div>
                        <div className="text-sm text-gray-600">Annual Savings</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          ${(results.totalSavingsOverTimeframe / 1000).toFixed(0)}K
                        </div>
                        <div className="text-sm text-gray-600">Total Savings</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {results.paybackPeriod < 1 ? 
                          `${Math.round(results.paybackPeriod * 12)} months` : 
                          `${results.paybackPeriod.toFixed(1)} years`
                        }
                      </div>
                      <div className="text-sm text-gray-600">Payback Period</div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Savings Breakdown</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time Savings:</span>
                          <span className="font-medium">${(results.timeSavingsValue / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Efficiency Gains:</span>
                          <span className="font-medium">${(results.efficiencyValue / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Error Reduction:</span>
                          <span className="font-medium">${(results.errorReductionValue / 1000).toFixed(0)}K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-gray-600">Fill in the form and click "Calculate ROI" to see your results</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Understanding Your ROI Results
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our calculator provides estimates based on industry benchmarks and real-world implementations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">ROI Calculation</h3>
                <p className="text-gray-600 text-sm">
                  ROI = (Total Savings - Implementation Cost) / Implementation Cost × 100
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Payback Period</h3>
                <p className="text-gray-600 text-sm">
                  The time it takes for your AI investment to pay for itself through savings
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accuracy</h3>
                <p className="text-gray-600 text-sm">
                  Results are estimates based on industry data and should be validated with detailed analysis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Implement AI in Your Organization?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Our expert team can help you develop a detailed implementation plan and achieve the ROI you've calculated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}