import { Star } from 'lucide-react';
import { Calculator } from 'lucide-react';
'use client';

import React, { useState } from 'react';

export default function InteractiveAI2026Calculator() {
  const [inputs, setInputs] = useState({
    companySize: 'medium',
    industry: 'manufacturing',
    currentEfficiency: 60,
    currentCosts: 1000000,
    aiInvestment: 500000,
  });

  const [results, setResults] = useState<{
    efficiencyGain: number;
    costSavings: number;
    revenueIncrease: number;
    totalBenefits: number;
    roi: number;
    paybackPeriod: number;
  } | null>(null);

  const calculateROI = () => {
  return null;
  } = inputs;

    // Industry multipliers for 2026
    const industryMultipliers = {
      manufacturing: { efficiency: 0.9, costReduction: 0.7, revenue: 0.3 },
      healthcare: { efficiency: 0.8, costReduction: 0.6, revenue: 0.4 },
      finance: { efficiency: 0.85, costReduction: 0.75, revenue: 0.35 },
      retail: { efficiency: 0.7, costReduction: 0.65, revenue: 0.25 },
      technology: { efficiency: 0.95, costReduction: 0.8, revenue: 0.4 },
    };

    // Company size multipliers
    const sizeMultipliers = {
      small: 0.6,
      medium: 1.0,
      large: 1.5,
      enterprise: 2.0,
    };

    const industryData =
      industryMultipliers[industry as keyof typeof industryMultipliers] || industryMultipliers.manufacturing;
    const sizeMultiplier = sizeMultipliers[companySize as keyof typeof sizeMultipliers] || 1.0;

    // Calculate improvements
    const efficiencyGain =
      currentEfficiency * industryData.efficiency * sizeMultiplier;
    const costSavings = currentCosts * industryData.costReduction * sizeMultiplier;
    const revenueIncrease = currentCosts * industryData.revenue * sizeMultiplier;

    // Total benefits
    const totalBenefits = costSavings + revenueIncrease;
    const roi = ((totalBenefits - aiInvestment) / aiInvestment) * 100;
    const paybackPeriod = aiInvestment / (totalBenefits / 12); // months

    setResults({
      efficiencyGain: Math.round(efficiencyGain),
      costSavings: Math.round(costSavings),
      revenueIncrease: Math.round(revenueIncrease),
      totalBenefits: Math.round(totalBenefits),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    });
  };

  return (
    <section className='py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>
            AI ROI Calculator 2026
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Calculate the potential return on investment for AI transformation
            in your organization. Get personalized projections based on industry
            trends and 2026 AI capabilities.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Input Form */}
          <div className='bg-white rounded-xl shadow-lg p-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Enter Your Details
            </h3>

            <div className='space-y-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Company Size
                </label>
                <select
                  value={inputs.companySize}
                  onChange={e =>
                    setInputs({ ...inputs, companySize: e?.target.value })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option value='small'>Small (1-50 employees)</option>
                  <option value='medium'>Medium (51-500 employees)</option>
                  <option value='large'>Large (501-5000 employees)</option>
                  <option value='enterprise'>
                    Enterprise (5000+ employees)
                  </option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={e =>
                    setInputs({ ...inputs, industry: e?.target.value })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option value='manufacturing'>Manufacturing</option>
                  <option value='healthcare'>Healthcare</option>
                  <option value='finance'>Financial Services</option>
                  <option value='retail'>Retail</option>
                  <option value='technology'>Technology</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Current Efficiency Level (%)
                </label>
                <input
                  type='range'
                  min='20'
                  max='90'
                  value={inputs.currentEfficiency}
                  onChange={e =>
                    setInputs({
                      ...inputs,
                      currentEfficiency: parseInt(e?.target.value),
                    })
                  }
                  className='w-full'
                />
                <div className='flex justify-between text-sm text-gray-500 mt-1'>
                  <span>20%</span>
                  <span className='font-semibold text-blue-600'>
                    {inputs.currentEfficiency}%
                  </span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Annual Operational Costs ($)
                </label>
                <input
                  type='number'
                  value={inputs.currentCosts}
                  onChange={e =>
                    setInputs({
                      ...inputs,
                      currentCosts: parseInt(e?.target.value) || 0,
                    })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='1000000'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Planned AI Investment ($)
                </label>
                <input
                  type='number'
                  value={inputs.aiInvestment}
                  onChange={e =>
                    setInputs({
                      ...inputs,
                      aiInvestment: parseInt(e?.target.value) || 0,
                    })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='500000'
                />
              </div>

              <button
                onClick={calculateROI}
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                Calculate AI ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className='bg-white rounded-xl shadow-lg p-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Projected Results
            </h3>

            {results ? (
              <div className='space-y-6'>
                <div className='bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg'>
                  <div className='text-center mb-4'>
                    <div className='text-4xl font-bold text-green-600 mb-2'>
                      {results.roi}%
                    </div>
                    <div className='text-gray-600 font-semibold'>
                      Projected ROI
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='bg-blue-50 p-4 rounded-lg text-center'>
                    <div className='text-2xl font-bold text-blue-600 mb-1'>
                      {results.efficiencyGain}%
                    </div>
                    <div className='text-sm text-gray-600'>Efficiency Gain</div>
                  </div>
                  <div className='bg-purple-50 p-4 rounded-lg text-center'>
                    <div className='text-2xl font-bold text-purple-600 mb-1'>
                      {results.paybackPeriod}m
                    </div>
                    <div className='text-sm text-gray-600'>Payback Period</div>
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
                    <span className='font-semibold text-gray-700'>
                      Cost Savings
                    </span>
                    <span className='text-xl font-bold text-green-600'>
                      ${results?.costSavings.toLocaleString()}
                    </span>
                  </div>
                  <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
                    <span className='font-semibold text-gray-700'>
                      Revenue Increase
                    </span>
                    <span className='text-xl font-bold text-blue-600'>
                      ${results?.revenueIncrease.toLocaleString()}
                    </span>
                  </div>
                  <div className='flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200'>
                    <span className='font-bold text-gray-900'>
                      Total Annual Benefits
                    </span>
                    <span className='text-2xl font-bold text-green-600'>
                      ${results?.totalBenefits.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className='bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg'>
                  <h4 className='font-bold text-gray-900 mb-3'>
                    2026 AI Advantages
                  </h4>
                  <ul className='space-y-2 text-sm text-gray-700'>
                    <li>
                      • Quantum AI processing for 1000x speed improvements
                    </li>
                    <li>• Autonomous decision-making systems</li>
                    <li>• Real-time edge computing capabilities</li>
                    <li>• Advanced predictive analytics</li>
                    <li>• Self-optimizing workflows</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className='text-center py-12'>
                <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>📊</span>
                </div>
                <p className='text-gray-500'>
                  Enter your details and click "Calculate AI ROI" to see your
                  personalized projections.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className='text-center mt-12'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl'>
            <h3 className='text-2xl font-bold mb-4'>
              Ready to Start Your AI Transformation?
            </h3>
            <p className='text-lg opacity-90 mb-6'>
              Our AI experts can help you achieve these results with proven
              implementation strategies.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:+<13024640950'
                className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Call +1 302 464 0950
              </a>
              <a
                href='mailto:kleber@ziontechgroup.<com'
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
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
