import React, { useState } from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AIAutomationROICalculator() {
  const [inputs, setInputs] = useState({
    currentEmployees: 10,
    averageSalary: 75000,
    processHours: 40,
    errorRate: 5,
    processingTime: 8,
    monthlyTransactions: 1000,
    costPerError: 50,
    automationCost: 100000,
    implementationTime: 6,
    maintenanceCost: 20000
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const {
      currentEmployees,
      averageSalary,
      processHours,
      errorRate,
      processingTime,
      monthlyTransactions,
      costPerError,
      automationCost,
      implementationTime,
      maintenanceCost
    } = inputs;

    // Annual labor cost
    const annualLaborCost = currentEmployees * averageSalary;

    // Process efficiency gains (assuming 70% automation)
    const automationEfficiency = 0.7;
    const reducedLaborCost = annualLaborCost * automationEfficiency;

    // Error reduction savings (assuming 90% error reduction)
    const errorReduction = 0.9;
    const monthlyErrorCost = (monthlyTransactions * (errorRate / 100) * costPerError);
    const annualErrorSavings = monthlyErrorCost * 12 * errorReduction;

    // Processing time savings
    const timeReduction = 0.6; // 60% time reduction
    const processingSavings = (processHours * 52 * averageSalary / 2080) * timeReduction;

    // Total annual savings
    const totalAnnualSavings = reducedLaborCost + annualErrorSavings + processingSavings;

    // Implementation costs
    const implementationCost = automationCost + (maintenanceCost * (implementationTime / 12));

    // ROI calculation
    const netSavings = totalAnnualSavings - maintenanceCost;
    const roi = ((netSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / netSavings;

    setResults({
      annualLaborCost,
      reducedLaborCost,
      annualErrorSavings,
      processingSavings,
      totalAnnualSavings,
      implementationCost,
      netSavings,
      roi,
      paybackPeriod
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Automation ROI Calculator | Free Tool | Zion Tech Group"
        description="Calculate the return on investment for AI automation projects. Free interactive tool to estimate cost savings, efficiency gains, and payback period for enterprise AI implementations."
        keywords="AI ROI calculator, automation ROI, AI investment calculator, business automation ROI, AI cost savings, automation payback period"
        url="/resources/ai-automation-roi-calculator"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">Interactive Tool</span>
          </div>
          
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">💰 ROI CALCULATOR</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Automation ROI Calculator
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Calculate the return on investment for your AI automation project. Get instant insights into 
            cost savings, efficiency gains, and payback period to justify your AI investment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Parameters</h2>
            
            <div className="space-y-6">
              {/* Current State */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Current State</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees Involved
                    </label>
                    <input
                      type="number"
                      value={inputs.currentEmployees}
                      onChange={(e) => handleInputChange('currentEmployees', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average Annual Salary ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.averageSalary}
                      onChange={(e) => handleInputChange('averageSalary', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hours Spent on Process per Week
                    </label>
                    <input
                      type="number"
                      value={inputs.processHours}
                      onChange={(e) => handleInputChange('processHours', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Process Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Process Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Error Rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputs.errorRate}
                      onChange={(e) => handleInputChange('errorRate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average Processing Time (hours)
                    </label>
                    <input
                      type="number"
                      value={inputs.processingTime}
                      onChange={(e) => handleInputChange('processingTime', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Transaction Volume
                    </label>
                    <input
                      type="number"
                      value={inputs.monthlyTransactions}
                      onChange={(e) => handleInputChange('monthlyTransactions', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cost per Error ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.costPerError}
                      onChange={(e) => handleInputChange('costPerError', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Investment Costs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Costs</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Initial Automation Investment ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.automationCost}
                      onChange={(e) => handleInputChange('automationCost', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Implementation Timeline (months)
                    </label>
                    <input
                      type="number"
                      value={inputs.implementationTime}
                      onChange={(e) => handleInputChange('implementationTime', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Maintenance Cost ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.maintenanceCost}
                      onChange={(e) => handleInputChange('maintenanceCost', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Calculate ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Analysis</h2>
            
            {results ? (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        {results.roi > 0 ? '+' : ''}{results.roi.toFixed(0)}%
                      </div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        {results.paybackPeriod.toFixed(1)}
                      </div>
                      <div className="text-sm text-gray-600">Years to Payback</div>
                    </div>
                  </div>
                </div>

                {/* Annual Savings Breakdown */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Annual Savings Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Labor Cost Reduction</span>
                      <span className="font-semibold text-green-600">
                        ${results.reducedLaborCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Error Reduction Savings</span>
                      <span className="font-semibold text-green-600">
                        ${results.annualErrorSavings.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Processing Time Savings</span>
                      <span className="font-semibold text-green-600">
                        ${results.processingSavings.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b-2 border-gray-300">
                      <span className="font-semibold text-gray-900">Total Annual Savings</span>
                      <span className="font-bold text-green-600 text-lg">
                        ${results.totalAnnualSavings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Investment Summary */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Initial Investment</span>
                      <span className="font-semibold text-red-600">
                        ${results.implementationCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Annual Maintenance</span>
                      <span className="font-semibold text-red-600">
                        ${inputs.maintenanceCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b-2 border-gray-300">
                      <span className="font-semibold text-gray-900">Net Annual Savings</span>
                      <span className="font-bold text-green-600 text-lg">
                        ${results.netSavings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Recommendations</h3>
                  <div className="space-y-2 text-blue-800 text-sm">
                    {results.roi > 100 ? (
                      <p>✅ <strong>Excellent ROI:</strong> This automation project shows strong financial returns and should be prioritized.</p>
                    ) : results.roi > 50 ? (
                      <p>✅ <strong>Good ROI:</strong> This project provides solid returns and is recommended for implementation.</p>
                    ) : results.roi > 0 ? (
                      <p>⚠️ <strong>Moderate ROI:</strong> Consider optimizing the implementation to improve returns.</p>
                    ) : (
                      <p>❌ <strong>Negative ROI:</strong> This project may not be financially viable. Consider alternative approaches.</p>
                    )}
                    
                    {results.paybackPeriod < 2 ? (
                      <p>⚡ <strong>Fast Payback:</strong> Investment will be recovered quickly, reducing financial risk.</p>
                    ) : results.paybackPeriod < 5 ? (
                      <p>📊 <strong>Reasonable Payback:</strong> Typical payback period for automation projects.</p>
                    ) : (
                      <p>⏰ <strong>Long Payback:</strong> Consider phased implementation to reduce upfront investment.</p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Calculate Your ROI?</h3>
                <p className="text-gray-600">
                  Fill in the project parameters on the left and click "Calculate ROI" to see your results.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Assumptions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>70% labor cost reduction through automation</li>
                <li>90% error rate reduction</li>
                <li>60% processing time reduction</li>
                <li>Standard 2080 working hours per year</li>
                <li>Linear implementation timeline</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>Results are estimates based on industry averages</li>
                <li>Actual results may vary based on implementation quality</li>
                <li>Does not account for opportunity costs or indirect benefits</li>
                <li>Market conditions and technology changes not included</li>
                <li>Consult with experts for detailed analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement AI Automation?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get expert guidance on your AI automation project. Our team has helped 100+ companies 
            achieve an average ROI of 340% with AI implementations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              🚀 Get Expert Consultation
            </Link>
            <Link
              href="/resources/ai-implementation-checklist-2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📋 Download Implementation Guide
            </Link>
          </div>
        </div>

        {/* Related Resources */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/ai-automation-enterprise-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Automation Enterprise Guide
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete implementation guide with real case studies and best practices.
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏭</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Manufacturing AI Success
                </h3>
                <p className="text-gray-600 text-sm">
                  Case study: 40% cost reduction and 60% faster processing.
                </p>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-600 text-sm">
                  Step-by-step checklist for successful AI implementation.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}