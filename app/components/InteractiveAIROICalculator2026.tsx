import React, { useState, useEffect } from 'react';

interface CalculatorInputs {
  annualRevenue: number;
  employeeCount: number;
  currentEfficiency: number;
  industryType: string;
  aiReadiness: number;
}

interface CalculatorResults {
  potentialSavings: number;
  efficiencyGains: number;
  roi: number;
  paybackPeriod: number;
  netBenefit: number;
}

export default function InteractiveAIROICalculator2026() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    annualRevenue: 10000000,
    employeeCount: 100,
    currentEfficiency: 60,
    industryType: 'manufacturing',
    aiReadiness: 50,
  });

  const [results, setResults] = useState<CalculatorResults>({
    potentialSavings: 0,
    efficiencyGains: 0,
    roi: 0,
    paybackPeriod: 0,
    netBenefit: 0,
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    manufacturing: { efficiency: 0.85, costReduction: 0.70, implementation: 0.12 },
    healthcare: { efficiency: 0.75, costReduction: 0.60, implementation: 0.15 },
    finance: { efficiency: 0.90, costReduction: 0.80, implementation: 0.10 },
    retail: { efficiency: 0.70, costReduction: 0.65, implementation: 0.14 },
    technology: { efficiency: 0.95, costReduction: 0.75, implementation: 0.08 },
    consulting: { efficiency: 0.80, costReduction: 0.70, implementation: 0.11 },
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industry = industryMultipliers[inputs.industryType as keyof typeof industryMultipliers];
      const readinessMultiplier = inputs.aiReadiness / 100;
      
      // Calculate efficiency gains based on industry and readiness
      const baseEfficiencyGain = industry.efficiency * readinessMultiplier;
      const efficiencyGains = Math.min(baseEfficiencyGain * 100, 95);
      
      // Calculate potential savings
      const laborCosts = inputs.annualRevenue * 0.4; // Assume 40% of revenue is labor costs
      const operationalCosts = inputs.annualRevenue * 0.3; // Assume 30% is operational costs
      const totalCosts = laborCosts + operationalCosts;
      
      const costReduction = industry.costReduction * readinessMultiplier;
      const potentialSavings = totalCosts * costReduction;
      
      // Calculate implementation costs
      const implementationCost = inputs.annualRevenue * industry.implementation;
      
      // Calculate ROI
      const netBenefit = potentialSavings - implementationCost;
      const roi = (netBenefit / implementationCost) * 100;
      
      // Calculate payback period (in months)
      const monthlySavings = potentialSavings / 12;
      const paybackPeriod = implementationCost / monthlySavings;
      
      setResults({
        potentialSavings: Math.round(potentialSavings),
        efficiencyGains: Math.round(efficiencyGains),
        roi: Math.round(roi),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        netBenefit: Math.round(netBenefit),
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          AI Transformation ROI Calculator 2026
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Calculate your potential return on investment from implementing cutting-edge AI technologies. 
          Get personalized projections based on your industry and current readiness level.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Business Profile</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Revenue
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={inputs.annualRevenue}
                onChange={(e) => setInputs({...inputs, annualRevenue: Number(e.target.value)})}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="10,000,000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Employees
            </label>
            <input
              type="number"
              value={inputs.employeeCount}
              onChange={(e) => setInputs({...inputs, employeeCount: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Efficiency Level: {inputs.currentEfficiency}%
            </label>
            <input
              type="range"
              min="20"
              max="90"
              value={inputs.currentEfficiency}
              onChange={(e) => setInputs({...inputs, currentEfficiency: Number(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Low (20%)</span>
              <span>High (90%)</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry Type
            </label>
            <select
              value={inputs.industryType}
              onChange={(e) => setInputs({...inputs, industryType: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="manufacturing">Manufacturing</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance & Banking</option>
              <option value="retail">Retail & E-commerce</option>
              <option value="technology">Technology</option>
              <option value="consulting">Consulting & Services</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Readiness Level: {inputs.aiReadiness}%
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={inputs.aiReadiness}
              onChange={(e) => setInputs({...inputs, aiReadiness: Number(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Beginner (10%)</span>
              <span>Expert (100%)</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Your AI Transformation Projections</h3>
          
          {isCalculating ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">Potential Annual Savings</h4>
                  <span className="text-2xl">💰</span>
                </div>
                <div className="text-3xl font-bold text-green-600">
                  {formatCurrency(results.potentialSavings)}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Based on industry benchmarks and your readiness level
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">Efficiency Gains</h4>
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  {results.efficiencyGains}%
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Expected improvement in operational efficiency
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">Projected ROI</h4>
                  <span className="text-2xl">📈</span>
                </div>
                <div className="text-3xl font-bold text-purple-600">
                  {results.roi}%
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Return on investment within 18 months
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
                  <span className="text-2xl">⏱️</span>
                </div>
                <div className="text-3xl font-bold text-orange-600">
                  {results.paybackPeriod} months
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Time to recover initial investment
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">Net Benefit (3 Years)</h4>
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="text-3xl font-bold text-indigo-600">
                  {formatCurrency(results.netBenefit * 3)}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Total projected benefit over 3 years
                </p>
              </div>
            </div>
          )}

          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Assumptions</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Implementation costs: 8-15% of annual revenue</li>
              <li>• Labor costs: 40% of annual revenue</li>
              <li>• Operational costs: 30% of annual revenue</li>
              <li>• Based on 2026 AI technology capabilities</li>
              <li>• Industry-specific optimization factors applied</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="bg-blue-600 text-white p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Ready to Start Your AI Transformation?</h3>
          <p className="text-blue-100 mb-4">
            Get a detailed AI readiness assessment and implementation roadmap tailored to your business.
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
  );
}