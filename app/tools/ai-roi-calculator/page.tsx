import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from "../../components/SEO";

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    companySize: '',
    industry: '',
    currentProcesses: '',
    expectedEfficiency: 0,
    expectedCostReduction: 0,
    implementationCost: 0,
    timeline: 12
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const {
      companySize,
      industry,
      currentProcesses,
      expectedEfficiency,
      expectedCostReduction,
      implementationCost,
      timeline
    } = formData;

    // Base calculations
    const baseAnnualRevenue = getBaseRevenue(companySize);
    const efficiencyGain = (expectedEfficiency / 100) * baseAnnualRevenue;
    const costSavings = (expectedCostReduction / 100) * baseAnnualRevenue;
    const totalAnnualBenefits = efficiencyGain + costSavings;
    
    // ROI calculations
    const totalInvestment = implementationCost;
    const annualROI = ((totalAnnualBenefits - totalInvestment) / totalInvestment) * 100;
    const paybackPeriod = totalInvestment / totalAnnualBenefits;
    const netPresentValue = calculateNPV(totalAnnualBenefits, totalInvestment, timeline, 0.1);
    
    setResults({
      totalAnnualBenefits,
      annualROI,
      paybackPeriod,
      netPresentValue,
      efficiencyGain,
      costSavings
    });
  };

  const getBaseRevenue = (size) => {
    const revenueMap = {
      'startup': 1000000,
      'small': 10000000,
      'medium': 50000000,
      'large': 200000000,
      'enterprise': 1000000000
    };
    return revenueMap[size] || 10000000;
  };

  const calculateNPV = (annualBenefits, initialInvestment, years, discountRate) => {
    let npv = -initialInvestment;
    for (let i = 1; i <= years; i++) {
      npv += annualBenefits / Math.pow(1 + discountRate, i);
    }
    return npv;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <SEO
        title="AI ROI Calculator - Calculate Your AI Investment Return"
        description="Calculate the potential return on investment for your AI projects with our comprehensive ROI calculator. Get detailed analysis and recommendations."
        keywords="AI ROI calculator, AI investment calculator, AI return on investment, AI cost benefit analysis, AI business case"
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
                Calculate the potential return on investment for your AI projects with our 
                comprehensive ROI calculator. Get detailed analysis and recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size
                    </label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => handleInputChange('companySize', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      <option value="startup">Startup (1-50 employees)</option>
                      <option value="small">Small (51-200 employees)</option>
                      <option value="medium">Medium (201-1000 employees)</option>
                      <option value="large">Large (1001-5000 employees)</option>
                      <option value="enterprise">Enterprise (5000+ employees)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select industry</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="financial">Financial Services</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="technology">Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Manual Processes
                    </label>
                    <select
                      value={formData.currentProcesses}
                      onChange={(e) => handleInputChange('currentProcesses', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select process complexity</option>
                      <option value="low">Low (Basic automation)</option>
                      <option value="medium">Medium (Moderate complexity)</option>
                      <option value="high">High (Complex workflows)</option>
                      <option value="very-high">Very High (Enterprise-level)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Efficiency Improvement (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.expectedEfficiency}
                      onChange={(e) => handleInputChange('expectedEfficiency', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 25"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Cost Reduction (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.expectedCostReduction}
                      onChange={(e) => handleInputChange('expectedCostReduction', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 30"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Implementation Cost ($)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.implementationCost}
                      onChange={(e) => handleInputChange('implementationCost', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 500000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline (months)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="60"
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', parseInt(e.target.value) || 12)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={calculateROI}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Calculate ROI
                  </button>
                </form>
              </div>

              {/* Results */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Analysis Results</h2>
                
                {results ? (
                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Financial Impact</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-3xl font-bold text-green-600">
                            ${results.totalAnnualBenefits.toLocaleString()}
                          </div>
                          <div className="text-sm text-green-800">Annual Benefits</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-green-600">
                            {results.annualROI.toFixed(1)}%
                          </div>
                          <div className="text-sm text-green-800">Annual ROI</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">Investment Analysis</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-blue-800">Payback Period:</span>
                          <span className="font-semibold text-blue-900">
                            {results.paybackPeriod.toFixed(1)} years
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-800">NPV (5 years):</span>
                          <span className="font-semibold text-blue-900">
                            ${results.netPresentValue.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">Benefit Breakdown</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-purple-800">Efficiency Gains:</span>
                          <span className="font-semibold text-purple-900">
                            ${results.efficiencyGain.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-800">Cost Savings:</span>
                          <span className="font-semibold text-purple-900">
                            ${results.costSavings.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-yellow-900 mb-4">Recommendation</h3>
                      <p className="text-yellow-800">
                        {results.annualROI > 100 
                          ? "Excellent investment opportunity! High ROI indicates strong potential for success."
                          : results.annualROI > 50
                          ? "Good investment opportunity. Consider optimizing implementation approach."
                          : "Consider reviewing your assumptions and implementation strategy."
                        }
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">💰</div>
                    <p className="text-gray-600">
                      Fill in the form and click "Calculate ROI" to see your analysis results.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Resources & Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/resources/ai-implementation-master-guide-2026" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    AI Implementation Master Guide
                  </h3>
                  <p className="text-gray-600">
                    200+ page comprehensive guide with frameworks and templates.
                  </p>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-advanced-automation" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    AI Advanced Automation Guide
                  </h3>
                  <p className="text-gray-600">
                    Complete enterprise implementation guide for AI automation.
                  </p>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    $200M Manufacturing Success
                  </h3>
                  <p className="text-gray-600">
                    Real case study showing how autonomous AI systems delivered massive ROI.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}