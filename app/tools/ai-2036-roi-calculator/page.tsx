import React, { useState } from 'react';

export const metadata = {
  title: 'AI 2036 ROI Calculator - Calculate Your Breakthrough Technology ROI',
  description: 'Calculate the potential ROI for implementing AI 2036 breakthrough technologies including consciousness transfer, quantum neural fusion, and autonomous evolution.',
  keywords: ['AI 2036 ROI calculator', 'breakthrough technology ROI', 'consciousness transfer ROI', 'quantum neural fusion ROI', 'autonomous evolution ROI'],
};

export default function AI2036ROICalculator() {
  const [formData, setFormData] = useState({
    organizationSize: '',
    industry: '',
    currentTechSpend: '',
    implementationTimeframe: '',
    selectedTechnologies: []
  });

  const [results, setResults] = useState(null);

  const technologies = [
    {
      id: 'consciousness-transfer',
      name: 'Consciousness Transfer Technology',
      baseROI: 50000,
      description: 'Digital consciousness preservation and transfer',
      icon: '🧠'
    },
    {
      id: 'quantum-neural-fusion',
      name: 'Quantum Neural Fusion',
      baseROI: 25000,
      description: 'Quantum computing and neural network fusion',
      icon: '⚛️'
    },
    {
      id: 'autonomous-evolution',
      name: 'Autonomous Evolution Systems',
      baseROI: 25000,
      description: 'Self-evolving AI systems with 99.8% autonomy',
      icon: '🤖'
    }
  ];

  const organizationSizes = [
    { value: 'startup', label: 'Startup (1-50 employees)', multiplier: 0.5 },
    { value: 'small', label: 'Small Business (51-200 employees)', multiplier: 0.8 },
    { value: 'medium', label: 'Medium Business (201-1000 employees)', multiplier: 1.0 },
    { value: 'large', label: 'Large Enterprise (1000+ employees)', multiplier: 1.5 }
  ];

  const industries = [
    { value: 'healthcare', label: 'Healthcare', multiplier: 2.0 },
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.8 },
    { value: 'finance', label: 'Financial Services', multiplier: 1.6 },
    { value: 'research', label: 'Research & Development', multiplier: 1.4 },
    { value: 'technology', label: 'Technology', multiplier: 1.2 },
    { value: 'other', label: 'Other', multiplier: 1.0 }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTechnologyToggle = (techId) => {
    setFormData(prev => ({
      ...prev,
      selectedTechnologies: prev.selectedTechnologies.includes(techId)
        ? prev.selectedTechnologies.filter(id => id !== techId)
        : [...prev.selectedTechnologies, techId]
    }));
  };

  const calculateROI = () => {
    if (!formData.organizationSize || !formData.industry || !formData.currentTechSpend || formData.selectedTechnologies.length === 0) {
      alert('Please fill in all required fields and select at least one technology.');
      return;
    }

    const orgSize = organizationSizes.find(size => size.value === formData.organizationSize);
    const industry = industries.find(ind => ind.value === formData.industry);
    const currentSpend = parseFloat(formData.currentTechSpend);

    let totalROI = 0;
    let totalInvestment = 0;
    const technologyResults = [];

    formData.selectedTechnologies.forEach(techId => {
      const tech = technologies.find(t => t.id === techId);
      const baseROI = tech.baseROI;
      const sizeMultiplier = orgSize.multiplier;
      const industryMultiplier = industry.multiplier;
      
      const adjustedROI = baseROI * sizeMultiplier * industryMultiplier;
      const investment = currentSpend * 0.1; // 10% of current tech spend
      const returns = investment * (adjustedROI / 100);
      
      totalROI += adjustedROI;
      totalInvestment += investment;
      
      technologyResults.push({
        name: tech.name,
        icon: tech.icon,
        roi: adjustedROI,
        investment: investment,
        returns: returns
      });
    });

    const averageROI = totalROI / formData.selectedTechnologies.length;
    const totalReturns = totalInvestment * (averageROI / 100);
    const netProfit = totalReturns - totalInvestment;

    setResults({
      averageROI,
      totalInvestment,
      totalReturns,
      netProfit,
      technologyResults,
      paybackPeriod: totalInvestment / (totalReturns / 12) // months
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI 2036 ROI Calculator
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Calculate the potential return on investment for implementing AI 2036 breakthrough technologies 
            in your organization.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Calculate Your ROI</h2>
            
            <div className="space-y-6">
              {/* Organization Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization Size *
                </label>
                <select
                  value={formData.organizationSize}
                  onChange={(e) => handleInputChange('organizationSize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select organization size</option>
                  {organizationSizes.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select industry</option>
                  {industries.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Current Tech Spend */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Annual Technology Spend ($) *
                </label>
                <input
                  type="number"
                  value={formData.currentTechSpend}
                  onChange={(e) => handleInputChange('currentTechSpend', e.target.value)}
                  placeholder="Enter your annual tech spend"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Technology Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Select Technologies *
                </label>
                <div className="space-y-3">
                  {technologies.map((tech) => (
                    <label key={tech.id} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.selectedTechnologies.includes(tech.id)}
                        onChange={() => handleTechnologyToggle(tech.id)}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <div>
                          <div className="font-semibold text-gray-900">{tech.name}</div>
                          <div className="text-sm text-gray-600">{tech.description}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">ROI Results</h2>
            
            {results ? (
              <div className="space-y-6">
                {/* Summary */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Investment Summary</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{results.averageROI.toLocaleString()}%</div>
                      <div className="text-sm text-green-700">Average ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">${results.totalInvestment.toLocaleString()}</div>
                      <div className="text-sm text-green-700">Total Investment</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">${results.totalReturns.toLocaleString()}</div>
                      <div className="text-sm text-green-700">Total Returns</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">${results.netProfit.toLocaleString()}</div>
                      <div className="text-sm text-green-700">Net Profit</div>
                    </div>
                  </div>
                </div>

                {/* Technology Breakdown */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Breakdown</h3>
                  <div className="space-y-3">
                    {results.technologyResults.map((tech, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <div>
                            <div className="font-semibold text-gray-900">{tech.name}</div>
                            <div className="text-sm text-gray-600">Investment: ${tech.investment.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{tech.roi.toLocaleString()}% ROI</div>
                          <div className="text-sm text-gray-600">${tech.returns.toLocaleString()} returns</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payback Period */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Payback Period</h3>
                  <div className="text-2xl font-bold text-blue-600">{results.paybackPeriod.toFixed(1)} months</div>
                  <div className="text-sm text-blue-700">Time to recover investment</div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🧮</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Calculate?</h3>
                <p className="text-gray-600">
                  Fill in the form and click "Calculate ROI" to see your potential returns from AI 2036 technologies.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Implement AI 2036 Technologies?</h3>
          <p className="text-lg mb-6 text-purple-100">
            Contact us to learn more about implementing these breakthrough technologies in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="/ai-2036-breakthrough-showcase"
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Explore Breakthroughs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}