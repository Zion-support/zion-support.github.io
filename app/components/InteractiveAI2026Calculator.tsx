'use client';

import React, { useState } from 'react';

export default function InteractiveAI2026Calculator() {
  const [inputs, setInputs] = useState({
    companySize: 'medium',
  industry: 'manufacturing',
  currentEfficiency: 60,
  currentCosts: 1000000,
  aiInvestment: 500000
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const { companySize, industry, currentEfficiency, currentCosts, aiInvestment } = inputs;
    
    // Industry multipliers for 2026
    const industryMultipliers = {
      manufacturing: { efficiency: 0.9,
  costReduction: 0.7,
  revenue: 0.3 },
  healthcare: { efficiency: 0.8,
  costReduction: 0.6,
  revenue: 0.4 },
  finance: { efficiency: 0.85,
  costReduction: 0.75,
  revenue: 0.35 },
  retail: { efficiency: 0.7,
  costReduction: 0.65,
  revenue: 0.25 },
  technology: { efficiency: 0.95,
  costReduction: 0.8,
  revenue: 0.4 }
    };

    // Company size multipliers
    const sizeMultipliers = {
      small: 0.6,
  medium: 1.0,
  large: 1.5,
  enterprise: 2.0
    };

    const industry = industryMultipliers[industry] || industryMultipliers.manufacturing;
    const sizeMultiplier = sizeMultipliers[companySize] || 1.0;

    // Calculate improvements
    const efficiencyGain = currentEfficiency * industry.efficiency * sizeMultiplier;
    const costSavings = currentCosts * industry.costReduction * sizeMultiplier;
    const revenueIncrease = currentCosts * industry.revenue * sizeMultiplier;
    
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
  paybackPeriod: Math.round(paybackPeriod * 10) / 10
    });
  };

  return (
    <section>
      <div>
        <div>
          <h2>
            AI ROI Calculator 2026
          </h2>
          <p>
            Calculate the potential return on investment for AI transformation in your organization. 
            Get personalized projections based on industry trends and 2026 AI capabilities.
          </p>
        </div>

        <div>
          {/* Input Form */}
          <div>
            <h3>Enter Your Details</h3>
            
            <div>
              <div>
                <label>
                  Company Size
                </label>
                <select
                  value={inputs.companySize}
                  onChange={(e) => setInputs({...inputs,
  companySize: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-500 employees)</option>
                  <option value="large">Large (501-5000 employees)</option>
                  <option value="enterprise">Enterprise (5000+ employees)</option>
                </select>
              </div>

              <div>
                <label>
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => setInputs({...inputs,
  industry: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Financial Services</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                </select>
              </div>

              <div>
                <label>
                  Current Efficiency Level (%)
                </label>
                <input
                  type="range"
                  min="20"
                  max="90"
                  value={inputs.currentEfficiency}
                  onChange={(e) => setInputs({...inputs,
  currentEfficiency: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div>
                  <span>20%</span>
                  <span>{inputs.currentEfficiency}%</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label>
                  Annual Operational Costs ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentCosts}
                  onChange={(e) => setInputs({...inputs,
  currentCosts: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1000000"
                />
              </div>

              <div>
                <label>
                  Planned AI Investment ($)
                </label>
                <input
                  type="number"
                  value={inputs.aiInvestment}
                  onChange={(e) => setInputs({...inputs,
  aiInvestment: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="500000"
                />
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Calculate AI ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div>
            <h3>Projected Results</h3>
            
            {results ? (
              <div>
                <div>
                  <div>
                    <div>
                      {results.roi}%
                    </div>
                    <div>Projected ROI</div>
                  </div>
                </div>

                <div>
                  <div>
                    <div>
                      {results.efficiencyGain}%
                    </div>
                    <div>Efficiency Gain</div>
                  </div>
                  <div>
                    <div>
                      {results.paybackPeriod}m
                    </div>
                    <div>Payback Period</div>
                  </div>
                </div>

                <div>
                  <div>
                    <span>Cost Savings</span>
                    <span>
                      ${results.costSavings.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span>Revenue Increase</span>
                    <span>
                      ${results.revenueIncrease.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span>Total Annual Benefits</span>
                    <span>
                      ${results.totalBenefits.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div>
                  <h4>2026 AI Advantages</h4>
                  <ul>
                    <li>• Quantum AI processing for 1000x speed improvements</li>
                    <li>• Autonomous decision-making systems</li>
                    <li>• Real-time edge computing capabilities</li>
                    <li>• Advanced predictive analytics</li>
                    <li>• Self-optimizing workflows</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <span>📊</span>
                </div>
                <p>
                  Enter your details and click "Calculate AI ROI" to see your personalized projections.
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <div>
            <h3>Ready to Start Your AI Transformation?</h3>
            <p>
              Our AI experts can help you achieve these results with proven implementation strategies.
            </p>
            <div>
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