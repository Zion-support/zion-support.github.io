'use client';

import React, { useState } from 'react';

export default function InteractiveAIROICalculator() {
  const [companySize, setCompanySize] = useState(100);
  const [currentEfficiency, setCurrentEfficiency] = useState(60);
  const [automationLevel, setAutomationLevel] = useState(30);
  const [industry, setIndustry] = useState('manufacturing');

  const calculateROI = () => {
    // Base calculations
    const baseSalary = 75000; // Average salary
    const totalEmployees = companySize;
    const currentProductivity = currentEfficiency / 100;
    const targetProductivity = Math.min(95, currentProductivity + (automationLevel / 100) * 0.35);
    
    // Industry multipliers
    const industryMultipliers = {
      manufacturing: 1.2,
      healthcare: 1.1,
      finance: 1.3,
      retail: 1.0,
      technology: 1.4,
      logistics: 1.15
    };
    
    const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || 1.0;
    
    // Calculate savings
    const productivityGain = targetProductivity - currentProductivity;
    const annualSavings = totalEmployees * baseSalary * productivityGain * multiplier;
    const implementationCost = totalEmployees * 2000; // $2000 per employee for implementation
    const monthlyCost = totalEmployees * 150; // $150 per employee per month for AI services
    
    const firstYearSavings = annualSavings - implementationCost - (monthlyCost * 12);
    const roi = ((firstYearSavings - implementationCost) / implementationCost) * 100;
    
    return {
      annualSavings: Math.round(annualSavings),
      implementationCost: Math.round(implementationCost),
      monthlyCost: Math.round(monthlyCost),
      firstYearSavings: Math.round(firstYearSavings),
      roi: Math.round(roi),
      productivityGain: Math.round(productivityGain * 100)
    };
  };

  const results = calculateROI();

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Calculate Your AI Transformation ROI
        </h3>
        <p className="text-gray-600">
          See how much you could save and achieve with enterprise AI solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Size (Employees)
            </label>
            <input
              type="range"
              min="10"
              max="10000"
              value={companySize}
              onChange={(e) => setCompanySize(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>10</span>
              <span className="font-semibold text-blue-600">{companySize.toLocaleString()}</span>
              <span>10,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Efficiency Level
            </label>
            <input
              type="range"
              min="20"
              max="90"
              value={currentEfficiency}
              onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>20%</span>
              <span className="font-semibold text-blue-600">{currentEfficiency}%</span>
              <span>90%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Desired Automation Level
            </label>
            <input
              type="range"
              min="10"
              max="95"
              value={automationLevel}
              onChange={(e) => setAutomationLevel(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>10%</span>
              <span className="font-semibold text-blue-600">{automationLevel}%</span>
              <span>95%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="manufacturing">Manufacturing</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
              <option value="technology">Technology</option>
              <option value="logistics">Logistics</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Your AI Transformation Results</h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Annual Savings:</span>
                <span className="text-2xl font-bold text-green-600">
                  ${results.annualSavings.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Implementation Cost:</span>
                <span className="text-lg font-semibold text-gray-900">
                  ${results.implementationCost.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Monthly AI Services:</span>
                <span className="text-lg font-semibold text-gray-900">
                  ${results.monthlyCost.toLocaleString()}
                </span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">First Year Net Savings:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${results.firstYearSavings.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ROI:</span>
                  <span className={`text-3xl font-bold ${results.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.roi > 0 ? '+' : ''}{results.roi}%
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Productivity Gain:</span>
                <span className="text-xl font-bold text-purple-600">
                  +{results.productivityGain}%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 mb-3">What This Means:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {results.productivityGain}% increase in overall productivity</li>
              <li>• ${Math.round(results.annualSavings / companySize).toLocaleString()} average savings per employee</li>
              <li>• Payback period: {Math.round(results.implementationCost / (results.annualSavings / 12))} months</li>
              <li>• 3-year total savings: ${(results.annualSavings * 3 - results.implementationCost - (results.monthlyCost * 36)).toLocaleString()}</li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="tel:+13024640950"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Your Custom AI Strategy
            </a>
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
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}