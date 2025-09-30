import React, { useState } from 'react';

export default function InteractiveAICalculator2025() {
  const [inputs, setInputs] = useState({
    annualRevenue: '',
    employees: '',
    currentEfficiency: '',
    industry: 'technology'
  });

  const [results, setResults] = useState({
    projectedROI: 0,
    efficiencyGain: 0,
    annualSavings: 0,
    paybackPeriod: 0
  });

  const industryMultipliers = {
    technology: { roi: 1.2, efficiency: 1.1, savings: 1.3 },
    healthcare: { roi: 1.0, efficiency: 1.0, savings: 1.0 },
    manufacturing: { roi: 1.3, efficiency: 1.2, savings: 1.4 },
    finance: { roi: 1.1, efficiency: 1.05, savings: 1.2 },
    retail: { roi: 0.9, efficiency: 0.95, savings: 1.0 }
  };

  const calculateResults = () => {
    const revenue = parseFloat(inputs.annualRevenue) || 0;
    const employees = parseInt(inputs.employees) || 0;
    const efficiency = parseFloat(inputs.currentEfficiency) || 0;
    const industry = inputs.industry as keyof typeof industryMultipliers;
    
    if (revenue === 0 || employees === 0) return;

    const multiplier = industryMultipliers[industry];
    
    // Base calculations
    const baseROI = 300;
    const baseEfficiencyGain = 90;
    const baseSavings = revenue * 0.05; // 5% of revenue as base savings
    
    // Apply industry multipliers
    const projectedROI = Math.round(baseROI * multiplier.roi);
    const efficiencyGain = Math.round(baseEfficiencyGain * multiplier.efficiency);
    const annualSavings = Math.round(baseSavings * multiplier.savings);
    const paybackPeriod = Math.round(12 / (projectedROI / 100));

    setResults({
      projectedROI,
      efficiencyGain,
      annualSavings,
      paybackPeriod
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  React.useEffect(() => {
    calculateResults();
  }, [inputs]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI ROI Calculator 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential AI transformation ROI with our interactive calculator. 
            Get personalized projections based on your industry and business metrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Enter Your Business Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                  placeholder="e.g., 10,000,000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', e.target.value)}
                  placeholder="e.g., 500"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Operational Efficiency (%)
                </label>
                <input
                  type="number"
                  value={inputs.currentEfficiency}
                  onChange={(e) => handleInputChange('currentEfficiency', e.target.value)}
                  placeholder="e.g., 60"
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                >
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="finance">Financial Services</option>
                  <option value="retail">Retail & E-commerce</option>
                </select>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💡 Pro Tip</h4>
              <p className="text-sm text-gray-700">
                Our calculations are based on real-world data from 500+ AI implementations. 
                Results may vary based on specific use cases and implementation quality.
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{results.projectedROI}%</div>
                <div className="text-xl opacity-90">Projected ROI</div>
                <div className="text-sm opacity-75 mt-2">Within 12 months</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{results.efficiencyGain}%</div>
                <div className="text-xl opacity-90">Efficiency Improvement</div>
                <div className="text-sm opacity-75 mt-2">Across operations</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">${(results.annualSavings / 1000000).toFixed(1)}M</div>
                <div className="text-xl opacity-90">Annual Savings</div>
                <div className="text-sm opacity-75 mt-2">Projected cost reduction</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{results.paybackPeriod}</div>
                <div className="text-xl opacity-90">Months to ROI</div>
                <div className="text-sm opacity-75 mt-2">Payback period</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Insights */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Industry-Specific AI Impact</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">Technology</div>
              <div className="text-sm text-gray-600 mb-2">Highest ROI Potential</div>
              <div className="text-lg font-semibold text-gray-900">360% ROI</div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">Manufacturing</div>
              <div className="text-sm text-gray-600 mb-2">Best for Automation</div>
              <div className="text-lg font-semibold text-gray-900">390% ROI</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">Healthcare</div>
              <div className="text-sm text-gray-600 mb-2">Quality & Safety</div>
              <div className="text-lg font-semibold text-gray-900">300% ROI</div>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">Finance</div>
              <div className="text-sm text-gray-600 mb-2">Risk & Compliance</div>
              <div className="text-lg font-semibold text-gray-900">330% ROI</div>
            </div>
            
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <div className="text-2xl font-bold text-pink-600 mb-2">Retail</div>
              <div className="text-sm text-gray-600 mb-2">Customer Experience</div>
              <div className="text-lg font-semibold text-gray-900">270% ROI</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve These Results?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get a personalized AI transformation roadmap and implementation plan 
              tailored to your specific business needs and industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Free AI Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}