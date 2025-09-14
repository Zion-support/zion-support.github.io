import React, { useState, useEffect } from 'react';

interface ROIInputs {
  companySize: string;
  industry: string;
  currentAutomation: number;
  annualRevenue: number;
  operationalCosts: number;
  innovationInvestment: number;
}

interface ROIResults {
  estimatedROI: number;
  annualSavings: number;
  efficiencyGain: number;
  innovationIncrease: number;
  paybackPeriod: number;
  confidenceLevel: number;
}

const InteractiveROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    companySize: 'medium',
    industry: 'manufacturing',
    currentAutomation: 25,
    annualRevenue: 100000000,
    operationalCosts: 60000000,
    innovationInvestment: 5000000
  });

  const [results, setResults] = useState<ROIResults>({
    estimatedROI: 0,
    annualSavings: 0,
    efficiencyGain: 0,
    innovationIncrease: 0,
    paybackPeriod: 0,
    confidenceLevel: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const companySizes = [
    { value: 'startup', label: 'Startup (1-50 employees)', multiplier: 0.8 },
    { value: 'small', label: 'Small (51-200 employees)', multiplier: 1.0 },
    { value: 'medium', label: 'Medium (201-1,000 employees)', multiplier: 1.2 },
    { value: 'large', label: 'Large (1,001-5,000 employees)', multiplier: 1.5 },
    { value: 'enterprise', label: 'Enterprise (5,000+ employees)', multiplier: 2.0 }
  ];

  const industries = [
    { value: 'manufacturing', label: 'Manufacturing', roiMultiplier: 1.8 },
    { value: 'financial', label: 'Financial Services', roiMultiplier: 1.6 },
    { value: 'healthcare', label: 'Healthcare', roiMultiplier: 1.4 },
    { value: 'technology', label: 'Technology', roiMultiplier: 2.0 },
    { value: 'retail', label: 'Retail', roiMultiplier: 1.3 },
    { value: 'logistics', label: 'Logistics', roiMultiplier: 1.5 }
  ];

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const companySize = companySizes.find(size => size.value === inputs.companySize);
      const industry = industries.find(ind => ind.value === inputs.industry);
      
      if (!companySize || !industry) return;

      // Base calculations
      const automationPotential = (100 - inputs.currentAutomation) / 100;
      const efficiencyMultiplier = 1 + (automationPotential * 2.4); // Up to 2.4x efficiency
      const innovationMultiplier = 1 + (automationPotential * 1.5); // Up to 1.5x innovation
      
      // Calculate savings
      const operationalSavings = inputs.operationalCosts * automationPotential * 0.6; // 60% of costs can be optimized
      const innovationSavings = inputs.annualRevenue * automationPotential * 0.15; // 15% revenue increase
      const efficiencySavings = inputs.annualRevenue * automationPotential * 0.25; // 25% efficiency gains
      
      const totalAnnualSavings = (operationalSavings + innovationSavings + efficiencySavings) * companySize.multiplier * industry.roiMultiplier;
      
      // Calculate ROI
      const totalInvestment = inputs.innovationInvestment * (1 + automationPotential);
      const estimatedROI = ((totalAnnualSavings - totalInvestment) / totalInvestment) * 100;
      
      // Calculate other metrics
      const efficiencyGain = (efficiencyMultiplier - 1) * 100;
      const innovationIncrease = (innovationMultiplier - 1) * 100;
      const paybackPeriod = totalInvestment / (totalAnnualSavings / 12);
      const confidenceLevel = Math.min(95, 70 + (automationPotential * 25));

      setResults({
        estimatedROI: Math.round(estimatedROI),
        annualSavings: Math.round(totalAnnualSavings),
        efficiencyGain: Math.round(efficiencyGain),
        innovationIncrease: Math.round(innovationIncrease),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        confidenceLevel: Math.round(confidenceLevel)
      });

      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toFixed(0)}`;
  };

  const getROIColor = (roi: number) => {
    if (roi >= 2000) return 'text-green-600';
    if (roi >= 1000) return 'text-blue-600';
    if (roi >= 500) return 'text-purple-600';
    if (roi >= 200) return 'text-orange-600';
    return 'text-red-600';
  };

  const getROIBadge = (roi: number) => {
    if (roi >= 2000) return '🏆 Exceptional';
    if (roi >= 1000) return '🚀 Outstanding';
    if (roi >= 500) return '⭐ Excellent';
    if (roi >= 200) return '👍 Good';
    return '⚠️ Moderate';
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            📊 INTERACTIVE ROI CALCULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your AI Transformation ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized ROI projections based on your company size, industry, and current automation level. 
            See how much you could save with our AI transformation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Profile</h3>
            
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={inputs.companySize}
                  onChange={(e) => setInputs({...inputs, companySize: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {companySizes.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => setInputs({...inputs, industry: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Current Automation Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Level: {inputs.currentAutomation}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={inputs.currentAutomation}
                  onChange={(e) => setInputs({...inputs, currentAutomation: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Manual</span>
                  <span>Fully Automated</span>
                </div>
              </div>

              {/* Annual Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue
                </label>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => setInputs({...inputs, annualRevenue: parseInt(e.target.value) || 0})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="100,000,000"
                />
              </div>

              {/* Operational Costs */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Operational Costs
                </label>
                <input
                  type="number"
                  value={inputs.operationalCosts}
                  onChange={(e) => setInputs({...inputs, operationalCosts: parseInt(e.target.value) || 0})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="60,000,000"
                />
              </div>

              {/* Innovation Investment */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Planned AI Investment
                </label>
                <input
                  type="number"
                  value={inputs.innovationInvestment}
                  onChange={(e) => setInputs({...inputs, innovationInvestment: parseInt(e.target.value) || 0})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="5,000,000"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your ROI Projection</h3>
            
            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                <span className="ml-3 text-gray-600">Calculating your ROI...</span>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Main ROI */}
                <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
                  <div className="text-sm text-gray-600 mb-2">Estimated ROI</div>
                  <div className={`text-4xl font-bold ${getROIColor(results.estimatedROI)} mb-2`}>
                    {results.estimatedROI}%
                  </div>
                  <div className="text-sm text-gray-600">
                    {getROIBadge(results.estimatedROI)}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <div className="text-sm text-green-600 mb-1">Annual Savings</div>
                    <div className="text-xl font-bold text-green-700">
                      {formatCurrency(results.annualSavings)}
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="text-sm text-blue-600 mb-1">Efficiency Gain</div>
                    <div className="text-xl font-bold text-blue-700">
                      {results.efficiencyGain}%
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <div className="text-sm text-purple-600 mb-1">Innovation Increase</div>
                    <div className="text-xl font-bold text-purple-700">
                      {results.innovationIncrease}%
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                    <div className="text-sm text-orange-600 mb-1">Payback Period</div>
                    <div className="text-xl font-bold text-orange-700">
                      {results.paybackPeriod} months
                    </div>
                  </div>
                </div>

                {/* Confidence Level */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Confidence Level</span>
                    <span className="text-sm font-semibold text-gray-700">{results.confidenceLevel}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${results.confidenceLevel}%` }}
                    ></div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center pt-4">
                  <button
                    onClick={calculateROI}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Recalculate ROI
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">How We Calculate Your ROI</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Operational Savings</h4>
              <p className="text-sm opacity-90">
                Automation of routine tasks, process optimization, and efficiency improvements.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Innovation Revenue</h4>
              <p className="text-sm opacity-90">
                AI-generated products, services, and breakthrough solutions that drive revenue growth.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Competitive Advantage</h4>
              <p className="text-sm opacity-90">
                Market leadership, customer satisfaction, and sustainable competitive positioning.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * ROI projections are estimates based on industry averages and may vary based on implementation quality, 
            industry conditions, and company-specific factors. Results are not guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveROICalculator;