import React, { useState } from 'react';

export default function InteractiveAICalculator2026() {
  const [inputs, setInputs] = useState({
    annualRevenue: 10000000,
    operationalCosts: 5000000,
    aiInvestment: 500000,
    industry: 'manufacturing',
    companySize: 'large'
  });

  const calculateROI = () => {
    const { annualRevenue, operationalCosts, aiInvestment, industry, companySize } = inputs;
    
    // Base savings percentages by industry
    const industryMultipliers = {
      manufacturing: { costReduction: 0.25, efficiencyGain: 0.35, qualityImprovement: 0.15 },
      healthcare: { costReduction: 0.20, efficiencyGain: 0.30, qualityImprovement: 0.25 },
      financial: { costReduction: 0.30, efficiencyGain: 0.40, qualityImprovement: 0.20 },
      retail: { costReduction: 0.22, efficiencyGain: 0.28, qualityImprovement: 0.18 },
      technology: { costReduction: 0.35, efficiencyGain: 0.45, qualityImprovement: 0.30 }
    };

    // Company size multipliers
    const sizeMultipliers = {
      small: 0.8,
      medium: 1.0,
      large: 1.2,
      enterprise: 1.5
    };

    const multipliers = industryMultipliers[industry as keyof typeof industryMultipliers];
    const sizeMultiplier = sizeMultipliers[companySize as keyof typeof sizeMultipliers];

    // Calculate savings
    const costSavings = operationalCosts * multipliers.costReduction * sizeMultiplier;
    const efficiencySavings = annualRevenue * multipliers.efficiencyGain * 0.1 * sizeMultiplier;
    const qualitySavings = annualRevenue * multipliers.qualityImprovement * 0.05 * sizeMultiplier;
    
    const totalAnnualSavings = costSavings + efficiencySavings + qualitySavings;
    const roi = ((totalAnnualSavings - aiInvestment) / aiInvestment) * 100;
    const paybackPeriod = aiInvestment / (totalAnnualSavings / 12);

    return {
      totalAnnualSavings: Math.round(totalAnnualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      costSavings: Math.round(costSavings),
      efficiencySavings: Math.round(efficiencySavings),
      qualitySavings: Math.round(qualitySavings)
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: string, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🧮 Interactive Calculator
            </span>
            <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ 2026 AI ROI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Calculate Your AI Transformation ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the potential return on investment for your AI transformation project. 
            Get personalized projections based on your industry, company size, and investment level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="10,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Operational Costs ($)
                </label>
                <input
                  type="number"
                  value={inputs.operationalCosts}
                  onChange={(e) => handleInputChange('operationalCosts', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="5,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Investment Budget ($)
                </label>
                <input
                  type="number"
                  value={inputs.aiInvestment}
                  onChange={(e) => handleInputChange('aiInvestment', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="500,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="financial">Financial Services</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={inputs.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-500 employees)</option>
                  <option value="large">Large (501-5000 employees)</option>
                  <option value="enterprise">Enterprise (5000+ employees)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Main ROI Card */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your AI ROI Projection</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{results.roi}%</div>
                  <div className="text-sm opacity-90">Expected ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{results.paybackPeriod}</div>
                  <div className="text-sm opacity-90">Months to Break Even</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">${results.totalAnnualSavings.toLocaleString()}</div>
                <div className="text-sm opacity-90">Projected Annual Savings</div>
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Cost Reduction</h4>
                  <span className="text-2xl">💰</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  ${results.costSavings.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Operational cost savings</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Efficiency Gains</h4>
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  ${results.efficiencySavings.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Productivity improvements</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Quality Improvements</h4>
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  ${results.qualitySavings.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Error reduction savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Insights */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industry-Specific AI Benefits</h3>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Manufacturing</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>• 60% downtime reduction</div>
                <div>• 40% quality improvement</div>
                <div>• 25% efficiency gain</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Healthcare</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>• 80% faster diagnoses</div>
                <div>• 99.5% accuracy rate</div>
                <div>• 30% cost reduction</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Financial</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>• 95% process automation</div>
                <div>• 99.7% fraud detection</div>
                <div>• 80% faster processing</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Retail</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>• 250% customer satisfaction</div>
                <div>• 60% inventory optimization</div>
                <div>• 35% sales increase</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Technology</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>• 90% development speed</div>
                <div>• 70% bug reduction</div>
                <div>• 50% deployment time</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Transformation?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get a personalized AI strategy consultation and detailed implementation roadmap 
              tailored to your specific business needs.
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
      </div>
    </section>
  );
}