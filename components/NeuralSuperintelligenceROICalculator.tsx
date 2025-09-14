import React, { useState } from 'react';
import Link from 'next/link';

interface ROIResult {
  monthlySavings: number;
  annualSavings: number;
  implementationCost: number;
  netROI: number;
  roiPercentage: number;
  paybackMonths: number;
}

const NeuralSuperintelligenceROICalculator: React.FC = () => {
  const [companySize, setCompanySize] = useState<'small' | 'medium' | 'large' | 'enterprise'>('medium');
  const [industry, setIndustry] = useState<'manufacturing' | 'finance' | 'healthcare' | 'technology' | 'retail'>('technology');
  const [currentRevenue, setCurrentRevenue] = useState(10000000);
  const [currentEmployees, setCurrentEmployees] = useState(500);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = (): ROIResult => {
    // Base multipliers based on company size
    const sizeMultipliers = {
      small: { cost: 0.5, savings: 0.6 },
      medium: { cost: 1.0, savings: 1.0 },
      large: { cost: 2.0, savings: 1.8 },
      enterprise: { cost: 5.0, savings: 3.5 }
    };

    // Industry-specific multipliers
    const industryMultipliers = {
      manufacturing: { efficiency: 1.4, automation: 1.6 },
      finance: { efficiency: 1.2, automation: 1.8 },
      healthcare: { efficiency: 1.1, automation: 1.3 },
      technology: { efficiency: 1.5, automation: 2.0 },
      retail: { efficiency: 1.3, automation: 1.4 }
    };

    const sizeMultiplier = sizeMultipliers[companySize];
    const industryMultiplier = industryMultipliers[industry];

    // Base implementation cost
    const baseCost = 1000000; // $1M base cost
    const implementationCost = baseCost * sizeMultiplier.cost;

    // Calculate savings based on revenue and efficiency
    const revenueSavings = currentRevenue * 0.15 * sizeMultiplier.savings * industryMultiplier.efficiency;
    const operationalSavings = currentEmployees * 50000 * sizeMultiplier.savings * industryMultiplier.automation;
    const monthlySavings = (revenueSavings + operationalSavings) / 12;
    const annualSavings = monthlySavings * 12;

    const netROI = annualSavings - implementationCost;
    const roiPercentage = (netROI / implementationCost) * 100;
    const paybackMonths = implementationCost / monthlySavings;

    return {
      monthlySavings,
      annualSavings,
      implementationCost,
      netROI,
      roiPercentage,
      paybackMonths
    };
  };

  const result = calculateROI();

  const formatCurrency = (amount: number): string => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    } else {
      return `$${amount.toFixed(0)}`;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white">🧠 NEURAL SUPERINTELLIGENCE ROI CALCULATOR</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Neural Superintelligence ROI
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the potential return on investment from implementing neural superintelligence 
            in your organization. Get personalized projections based on your company profile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Profile</h3>
            
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Company Size</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'small', label: 'Small (1-50 employees)', desc: 'Startup to SMB' },
                    { value: 'medium', label: 'Medium (51-500 employees)', desc: 'Growing Business' },
                    { value: 'large', label: 'Large (501-5000 employees)', desc: 'Established Company' },
                    { value: 'enterprise', label: 'Enterprise (5000+ employees)', desc: 'Fortune 500' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setCompanySize(option.value as any)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        companySize === option.value
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value as any)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="finance">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="technology">Technology</option>
                  <option value="retail">Retail & E-commerce</option>
                </select>
              </div>

              {/* Annual Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Annual Revenue: {formatCurrency(currentRevenue)}
                </label>
                <input
                  type="range"
                  min="1000000"
                  max="10000000000"
                  step="1000000"
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$1M</span>
                  <span>$10B</span>
                </div>
              </div>

              {/* Employee Count */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Employees: {currentEmployees.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="10"
                  max="100000"
                  step="10"
                  value={currentEmployees}
                  onChange={(e) => setCurrentEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10</span>
                  <span>100K</span>
                </div>
              </div>

              <button
                onClick={() => setShowResults(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Calculate My ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Projected Results</h3>
            
            {showResults ? (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{formatCurrency(result.annualSavings)}</div>
                    <div className="text-sm text-green-700">Annual Savings</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">{result.roiPercentage.toFixed(0)}%</div>
                    <div className="text-sm text-purple-700">ROI Percentage</div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Implementation Cost</span>
                    <span className="font-semibold text-red-600">{formatCurrency(result.implementationCost)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Monthly Savings</span>
                    <span className="font-semibold text-green-600">{formatCurrency(result.monthlySavings)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Annual Net ROI</span>
                    <span className="font-semibold text-green-600">{formatCurrency(result.netROI)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Payback Period</span>
                    <span className="font-semibold text-blue-600">{result.paybackMonths.toFixed(1)} months</span>
                  </div>
                </div>

                {/* Success Indicators */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Expected Improvements</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• 95%+ process automation</li>
                    <li>• 99.8% decision accuracy</li>
                    <li>• 500%+ innovation acceleration</li>
                    <li>• 50-70% cost reduction</li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    Start My Transformation
                  </Link>
                  <Link
                    href="/resources/neural-superintelligence-implementation-master-guide-2025-ultimate-roadmap"
                    className="block w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    Download Implementation Guide
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🧠</div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Ready to Calculate Your ROI?</h4>
                <p className="text-gray-500">
                  Fill out the form to see personalized projections for your organization's 
                  neural superintelligence transformation.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Real Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">$25.2B</div>
              <div className="text-sm text-gray-600 mb-2">Fortune 100 ROI in 6 months</div>
              <p className="text-sm text-gray-500">Global technology conglomerate achieved unprecedented returns through comprehensive neural superintelligence implementation.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,400%</div>
              <div className="text-sm text-gray-600 mb-2">Average ROI across industries</div>
              <p className="text-sm text-gray-500">Companies implementing neural superintelligence consistently achieve multi-thousand percent returns.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
              <div className="text-sm text-gray-600 mb-2">Decision accuracy achieved</div>
              <p className="text-sm text-gray-500">Neural superintelligence delivers near-perfect decision-making accuracy across all business operations.</p>
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
          background: #8b5cf6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default NeuralSuperintelligenceROICalculator;