"use client";
import React, { useState } from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export const metadata = {
  title: 'AI ROI Calculator - Calculate Your AI Investment Returns',
  description: 'Calculate the potential return on investment for your AI implementation with our comprehensive ROI calculator. Get detailed insights and projections.',
  keywords: 'AI ROI calculator, AI investment, ROI calculation, AI business case, AI implementation cost',
};

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    companySize: '',
    industry: '',
    currentRevenue: '',
    currentEmployees: '',
    currentOperationalCosts: '',
    expectedEfficiencyGain: 20,
    expectedRevenueIncrease: 15,
    expectedCostReduction: 25,
    aiImplementationCost: '',
    timeline: 12
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateROI = () => {
    const revenue = parseFloat(formData.currentRevenue) || 0;
    const employees = parseInt(formData.currentEmployees) || 0;
    const operationalCosts = parseFloat(formData.currentOperationalCosts) || 0;
    const implementationCost = parseFloat(formData.aiImplementationCost) || 0;
    
    const efficiencyGain = formData.expectedEfficiencyGain / 100;
    const revenueIncrease = formData.expectedRevenueIncrease / 100;
    const costReduction = formData.expectedCostReduction / 100;
    
    // Calculate benefits
    const additionalRevenue = revenue * revenueIncrease;
    const costSavings = operationalCosts * costReduction;
    const efficiencySavings = (employees * 50000) * efficiencyGain; // Assuming $50k average salary
    
    const totalAnnualBenefits = additionalRevenue + costSavings + efficiencySavings;
    const totalBenefits = totalAnnualBenefits * (formData.timeline / 12);
    
    const netBenefits = totalBenefits - implementationCost;
    const roi = implementationCost > 0 ? (netBenefits / implementationCost) * 100 : 0;
    const paybackPeriod = implementationCost > 0 ? implementationCost / totalAnnualBenefits : 0;
    
    setResults({
      additionalRevenue,
      costSavings,
      efficiencySavings,
      totalAnnualBenefits,
      totalBenefits,
      netBenefits,
      roi,
      paybackPeriod
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI ROI Calculator - Calculate Your AI Investment Returns"
        description="Calculate the potential return on investment for your AI implementation with our comprehensive ROI calculator. Get detailed insights and projections."
        keywords="AI ROI calculator, AI investment, ROI calculation, AI business case, AI implementation cost"
        url="/tools/ai-roi-calculator"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/tools" className="hover:text-blue-600">Tools</Link>
            <span className="mx-2">/</span>
            <span>AI ROI Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI ROI Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Calculate the potential return on investment for your AI implementation. 
            Get detailed projections and insights to make informed decisions about your AI strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Business Details</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select company size</option>
                  <option value="startup">Startup (1-10 employees)</option>
                  <option value="small">Small (11-50 employees)</option>
                  <option value="medium">Medium (51-250 employees)</option>
                  <option value="large">Large (251-1000 employees)</option>
                  <option value="enterprise">Enterprise (1000+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select industry</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Financial Services</option>
                  <option value="technology">Technology</option>
                  <option value="logistics">Logistics & Supply Chain</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue ($)
                </label>
                <input
                  type="number"
                  name="currentRevenue"
                  value={formData.currentRevenue}
                  onChange={handleInputChange}
                  placeholder="e.g., 1000000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  name="currentEmployees"
                  value={formData.currentEmployees}
                  onChange={handleInputChange}
                  placeholder="e.g., 50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Operational Costs ($)
                </label>
                <input
                  type="number"
                  name="currentOperationalCosts"
                  value={formData.currentOperationalCosts}
                  onChange={handleInputChange}
                  placeholder="e.g., 500000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected AI Implementation Cost ($)
                </label>
                <input
                  type="number"
                  name="aiImplementationCost"
                  value={formData.aiImplementationCost}
                  onChange={handleInputChange}
                  placeholder="e.g., 100000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Efficiency Gain (%)
                </label>
                <input
                  type="range"
                  name="expectedEfficiencyGain"
                  min="5"
                  max="50"
                  value={formData.expectedEfficiencyGain}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="text-center text-sm text-gray-600">{formData.expectedEfficiencyGain}%</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Revenue Increase (%)
                </label>
                <input
                  type="range"
                  name="expectedRevenueIncrease"
                  min="5"
                  max="50"
                  value={formData.expectedRevenueIncrease}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="text-center text-sm text-gray-600">{formData.expectedRevenueIncrease}%</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Cost Reduction (%)
                </label>
                <input
                  type="range"
                  name="expectedCostReduction"
                  min="5"
                  max="50"
                  value={formData.expectedCostReduction}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="text-center text-sm text-gray-600">{formData.expectedCostReduction}%</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Timeline (months)
                </label>
                <input
                  type="range"
                  name="timeline"
                  min="6"
                  max="24"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="text-center text-sm text-gray-600">{formData.timeline} months</div>
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
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Analysis Results</h2>
            
            {results ? (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {results.roi.toFixed(0)}%
                      </div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {results.paybackPeriod.toFixed(1)} months
                      </div>
                      <div className="text-sm text-gray-600">Payback Period</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Annual Benefits Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Additional Revenue:</span>
                      <span className="font-semibold">${results.additionalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost Savings:</span>
                      <span className="font-semibold">${results.costSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Efficiency Savings:</span>
                      <span className="font-semibold">${results.efficiencySavings.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Annual Benefits:</span>
                        <span className="text-green-600">${results.totalAnnualBenefits.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Project Value</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Benefits ({formData.timeline} months):</span>
                      <span className="font-semibold">${results.totalBenefits.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Implementation Cost:</span>
                      <span className="font-semibold">${formData.aiImplementationCost || 0}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Net Benefits:</span>
                        <span className="text-green-600">${results.netBenefits.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Recommendation</h3>
                  <p className="text-blue-800 text-sm">
                    {results.roi > 100 
                      ? "Excellent investment opportunity! The projected ROI indicates strong potential for significant returns."
                      : results.roi > 50
                      ? "Good investment potential. Consider the long-term benefits and strategic value."
                      : "Consider optimizing your AI strategy or reducing implementation costs to improve ROI."
                    }
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <div className="text-4xl mb-4">📊</div>
                <p>Fill out the form and click "Calculate ROI" to see your personalized analysis.</p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding AI ROI</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Factors That Influence ROI</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Industry-specific AI applications</li>
                <li>Data quality and availability</li>
                <li>Implementation complexity</li>
                <li>Staff training and adoption</li>
                <li>Integration with existing systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Maximizing Your AI Investment</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Start with high-impact, low-risk projects</li>
                <li>Invest in data quality and governance</li>
                <li>Focus on change management</li>
                <li>Measure and optimize continuously</li>
                <li>Consider phased implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your AI Journey?</h3>
          <p className="text-lg opacity-90 mb-6">
            Our experts can help you develop a comprehensive AI strategy tailored to your business needs.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Expert Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}