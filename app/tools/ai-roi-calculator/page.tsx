import React, { useState } from 'react';

export const metadata = {
  title: 'AI ROI Calculator: Calculate Your AI Transformation Returns | Zion Tech Group',
  description: 'Calculate potential ROI from AI neural superintelligence, quantum computing, and autonomous systems implementation. Get personalized estimates for your organization.',
  keywords: 'AI ROI calculator, AI transformation ROI, neural superintelligence ROI, quantum computing ROI, AI investment calculator',
};

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    companySize: '',
    industry: '',
    currentRevenue: '',
    currentEmployees: '',
    currentITSpend: '',
    aiType: 'neural-superintelligence'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const revenue = parseFloat(formData.currentRevenue) || 0;
    const employees = parseInt(formData.currentEmployees) || 0;
    const itSpend = parseFloat(formData.currentITSpend) || 0;
    
    let efficiencyGain = 0;
    let costReduction = 0;
    let implementationCost = 0;
    
    switch (formData.aiType) {
      case 'neural-superintelligence':
        efficiencyGain = 400;
        costReduction = 0.35;
        implementationCost = revenue * 0.02;
        break;
      case 'quantum-computing':
        efficiencyGain = 1000;
        costReduction = 0.25;
        implementationCost = revenue * 0.03;
        break;
      case 'autonomous-systems':
        efficiencyGain = 500;
        costReduction = 0.40;
        implementationCost = revenue * 0.025;
        break;
      default:
        efficiencyGain = 300;
        costReduction = 0.30;
        implementationCost = revenue * 0.02;
    }
    
    const annualSavings = (revenue * costReduction) + (itSpend * 0.6);
    const additionalRevenue = revenue * (efficiencyGain / 100) * 0.3;
    const totalAnnualBenefit = annualSavings + additionalRevenue;
    const netBenefit = totalAnnualBenefit - implementationCost;
    const roi = ((netBenefit * 3) / implementationCost) * 100;
    
    setResults({
      efficiencyGain,
      costReduction: costReduction * 100,
      implementationCost,
      annualSavings,
      additionalRevenue,
      totalAnnualBenefit,
      netBenefit,
      roi: Math.round(roi),
      paybackPeriod: Math.round((implementationCost / totalAnnualBenefit) * 12)
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Transformation ROI Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate the potential return on investment for AI neural superintelligence, 
          quantum computing, and autonomous systems implementation in your organization.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Organization Details</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Size
              </label>
              <select
                value={formData.companySize}
                onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select industry</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="financial">Financial Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail & E-commerce</option>
                <option value="technology">Technology</option>
                <option value="logistics">Logistics & Supply Chain</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Revenue ($)
              </label>
              <input
                type="number"
                value={formData.currentRevenue}
                onChange={(e) => setFormData({...formData, currentRevenue: e.target.value})}
                placeholder="e.g., 10000000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                value={formData.currentEmployees}
                onChange={(e) => setFormData({...formData, currentEmployees: e.target.value})}
                placeholder="e.g., 500"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual IT Spend ($)
              </label>
              <input
                type="number"
                value={formData.currentITSpend}
                onChange={(e) => setFormData({...formData, currentITSpend: e.target.value})}
                placeholder="e.g., 2000000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI Technology Type
              </label>
              <select
                value={formData.aiType}
                onChange={(e) => setFormData({...formData, aiType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="neural-superintelligence">Neural Superintelligence</option>
                <option value="quantum-computing">Quantum Computing</option>
                <option value="autonomous-systems">Autonomous Systems</option>
                <option value="comprehensive">Comprehensive AI Suite</option>
              </select>
            </div>

            <button
              onClick={calculateROI}
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Calculate ROI
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Projections</h2>
          
          {results ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {results.roi}%
                  </div>
                  <div className="text-lg text-gray-700">3-Year ROI</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {results.efficiencyGain}%
                  </div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {results.costReduction}%
                  </div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Implementation Cost:</span>
                  <span className="font-semibold">${results.implementationCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Annual Savings:</span>
                  <span className="font-semibold text-green-600">${results.annualSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Additional Revenue:</span>
                  <span className="font-semibold text-blue-600">${results.additionalRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Total Annual Benefit:</span>
                  <span className="font-semibold text-green-600">${results.totalAnnualBenefit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Payback Period:</span>
                  <span className="font-semibold">{results.paybackPeriod} months</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">3-Year Projection</h3>
                <div className="text-2xl font-bold text-blue-600">
                  ${(results.totalAnnualBenefit * 3 - results.implementationCost).toLocaleString()}
                </div>
                <div className="text-sm text-blue-700">Net Benefit Over 3 Years</div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <div className="text-4xl mb-4">📊</div>
              <p>Fill in your organization details and click "Calculate ROI" to see your personalized projections.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h2>
        <p className="text-lg mb-6 opacity-90">
          Get a detailed consultation and customized AI transformation roadmap for your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}