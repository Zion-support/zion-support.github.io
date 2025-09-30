'use client';

import React, { useState } from 'react';
<<<<<<< HEAD

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
=======
import Link from 'next/link';

interface CalculatorInputs {
  employees: number;
  currentCosts: number;
  processHours: number;
  industry: string;
  automationLevel: number;
}

interface ROICalculations {
  timeSavings: number;
  costSavings: number;
  productivityGain: number;
  totalROI: number;
  paybackPeriod: number;
}

export default function InteractiveAIROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 100,
    currentCosts: 500000,
    processHours: 40,
    industry: 'technology',
    automationLevel: 70
  });

  const [results, setResults] = useState<ROICalculations | null>(null);

  const calculateROI = () => {
    const { employees, currentCosts, processHours, industry, automationLevel } = inputs;
    
    // Industry multipliers
    const industryMultipliers = {
      technology: 1.2,
      healthcare: 1.1,
      finance: 1.3,
      manufacturing: 1.4,
      retail: 1.0,
      education: 0.9
    };

    const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || 1.0;
    
    // Calculate savings
    const hourlyRate = 50; // Average hourly rate
    const timeSavings = (processHours * (automationLevel / 100)) * employees * 52; // Annual hours saved
    const costSavings = timeSavings * hourlyRate * multiplier;
    const productivityGain = (automationLevel / 100) * 0.8; // 80% of automation level becomes productivity gain
    
    // AI implementation costs (estimated)
    const implementationCost = currentCosts * 0.15; // 15% of current costs
    const annualMaintenance = implementationCost * 0.2; // 20% of implementation cost
    
    const netSavings = costSavings - annualMaintenance;
    const totalROI = ((netSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / netSavings;

    setResults({
      timeSavings,
      costSavings,
      productivityGain,
      totalROI,
      paybackPeriod
    });
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: number | string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your AI ROI</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                value={inputs.employees}
                onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="10000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Operational Costs ($)
              </label>
              <input
                type="number"
                value={inputs.currentCosts}
                onChange={(e) => handleInputChange('currentCosts', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="10000"
                step="10000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Weekly Process Hours
              </label>
              <input
                type="number"
                value={inputs.processHours}
                onChange={(e) => handleInputChange('processHours', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="168"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={inputs.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail</option>
                <option value="education">Education</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Automation Level: {inputs.automationLevel}%
              </label>
              <input
                type="range"
                value={inputs.automationLevel}
                onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                min="10"
                max="100"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Calculate ROI
          </button>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI ROI Projection</h3>
          
          {results ? (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">%</span>
                  </div>
                  <h4 className="font-semibold text-green-800">Total ROI</h4>
                </div>
                <div className="text-3xl font-bold text-green-600">
                  {Math.round(results.totalROI)}%
                </div>
                <p className="text-sm text-green-700">
                  Expected return on AI investment
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">$</span>
                  </div>
                  <h4 className="font-semibold text-blue-800">Annual Savings</h4>
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  ${Math.round(results.costSavings).toLocaleString()}
                </div>
                <p className="text-sm text-blue-700">
                  Projected yearly cost reduction
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">⏱</span>
                  </div>
                  <h4 className="font-semibold text-purple-800">Time Savings</h4>
                </div>
                <div className="text-3xl font-bold text-purple-600">
                  {Math.round(results.timeSavings).toLocaleString()}
                </div>
                <p className="text-sm text-purple-700">
                  Hours saved per year
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">📅</span>
                  </div>
                  <h4 className="font-semibold text-orange-800">Payback Period</h4>
                </div>
                <div className="text-3xl font-bold text-orange-600">
                  {results.paybackPeriod < 1 ? 
                    `${Math.round(results.paybackPeriod * 12)} months` : 
                    `${Math.round(results.paybackPeriod)} years`
                  }
                </div>
                <p className="text-sm text-orange-700">
                  Time to recover investment
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/services"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 text-center block"
                >
                  Get Started with AI Transformation
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-gray-400">📊</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-600 mb-2">Ready to Calculate?</h4>
              <p className="text-gray-500">
                Fill in your business details and click "Calculate ROI" to see your potential AI transformation results.
              </p>
            </div>
          )}
        </div>
      </div>
>>>>>>> origin/feature/new-content-and-advertising-2026
    </div>
  );
}