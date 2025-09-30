'use client';

import React, { useState, useEffect } from 'react';

interface CalculationResults {
  monthlySavings: number;
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
  efficiencyGain: number;
}

export default function InteractiveAICalculator2026() {
  const [formData, setFormData] = useState({
    companySize: '50-200',
    industry: 'manufacturing',
    currentProcesses: 100,
    monthlyRevenue: 1000000,
    automationLevel: 30,
    implementationTime: 6
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    manufacturing: 1.2,
    healthcare: 1.1,
    finance: 1.3,
    retail: 1.0,
    technology: 1.4,
    logistics: 1.15
  };

  const sizeMultipliers = {
    '1-50': 0.8,
    '50-200': 1.0,
    '200-1000': 1.3,
    '1000+': 1.6
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const industryMultiplier = industryMultipliers[formData.industry as keyof typeof industryMultipliers];
      const sizeMultiplier = sizeMultipliers[formData.companySize as keyof typeof sizeMultipliers];
      
      // Base calculations
      const baseEfficiencyGain = (formData.automationLevel / 100) * 0.9; // Up to 90% efficiency gain
      const efficiencyGain = baseEfficiencyGain * industryMultiplier;
      
      const baseCostSavings = (formData.monthlyRevenue * 0.15) * (formData.automationLevel / 100);
      const monthlySavings = baseCostSavings * sizeMultiplier;
      const annualSavings = monthlySavings * 12;
      
      // Implementation cost (simplified)
      const implementationCost = formData.monthlyRevenue * 0.05 * sizeMultiplier;
      
      const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
      const paybackPeriod = implementationCost / monthlySavings;
      
      setResults({
        monthlySavings: Math.round(monthlySavings),
        annualSavings: Math.round(annualSavings),
        roi: Math.round(roi),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        efficiencyGain: Math.round(efficiencyGain * 100)
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    finance: { automation: 0.95, efficiency: 0.85, cost: 0.70 },
    healthcare: { automation: 0.80, efficiency: 0.75, cost: 0.65 },
    manufacturing: { automation: 0.90, efficiency: 0.80, cost: 0.75 },
    retail: { automation: 0.85, efficiency: 0.70, cost: 0.60 },
    technology: { automation: 0.88, efficiency: 0.82, cost: 0.68 },
    other: { automation: 0.75, efficiency: 0.70, cost: 0.65 }
  };

  const sizeMultipliers = {
    small: 0.8,
    medium: 1.0,
    large: 1.2,
    enterprise: 1.5
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential return on investment with AI implementation. 
            Get personalized estimates based on your industry and company size.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1-50">1-50 employees</option>
                  <option value="50-200">50-200 employees</option>
                  <option value="200-1000">200-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                  <option value="logistics">Logistics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1000000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Manual Processes
                </label>
                <input
                  type="number"
                  value={formData.currentProcesses}
                  onChange={(e) => handleInputChange('currentProcesses', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Desired Automation Level: {formData.automationLevel}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={formData.automationLevel}
                  onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10%</span>
                  <span>50%</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Implementation Timeline (months)
                </label>
                <select
                  value={formData.implementationTime}
                  onChange={(e) => handleInputChange('implementationTime', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="18">18 months</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Your AI ROI Projection</h3>
            
            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                <span className="ml-4 text-lg">Calculating...</span>
              </div>
            ) : results ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-300">
                      ${results.monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-sm opacity-90">Monthly Savings</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-300">
                      ${results.annualSavings.toLocaleString()}
                    </div>
                    <div className="text-sm opacity-90">Annual Savings</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-300">
                      {results.roi}%
                    </div>
                    <div className="text-sm opacity-90">ROI</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-300">
                      {results.paybackPeriod}
                    </div>
                    <div className="text-sm opacity-90">Months to Payback</div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-300">
                    {results.efficiencyGain}%
                  </div>
                  <div className="text-sm opacity-90">Efficiency Improvement</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Key Benefits:</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Automated process management</li>
                    <li>• Real-time decision support</li>
                    <li>• Predictive analytics and insights</li>
                    <li>• Scalable AI infrastructure</li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve These Results?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our AI experts can help you implement these solutions and achieve even better results. 
              Get a free consultation to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get Free Consultation
              </a>
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
          background: #3B82F6;
          cursor: pointer;
          box-shadow: 0 0 2px 0 #555;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 2px 0 #555;
        }
      `}</style>
    </section>
  );
};

export default InteractiveAICalculator2026;