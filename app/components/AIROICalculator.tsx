import React, { useState } from 'react';

export default function AIROICalculator() {
  const [inputs, setInputs] = useState({
    annualRevenue: '',
    employees: '',
    currentAutomation: '',
    industry: 'manufacturing'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const revenue = parseFloat(inputs.annualRevenue) || 0;
    const employeeCount = parseInt(inputs.employees) || 0;
    const currentAuto = parseFloat(inputs.currentAutomation) || 0;
    
    if (revenue === 0 || employeeCount === 0) return;

    // Industry-specific multipliers
    const industryMultipliers = {
      manufacturing: { costReduction: 0.25, efficiencyGain: 0.40, automationPotential: 0.95 },
      financial: { costReduction: 0.20, efficiencyGain: 0.35, automationPotential: 0.90 },
      healthcare: { costReduction: 0.15, efficiencyGain: 0.30, automationPotential: 0.85 },
      retail: { costReduction: 0.30, efficiencyGain: 0.45, automationPotential: 0.88 },
      logistics: { costReduction: 0.35, efficiencyGain: 0.50, automationPotential: 0.92 }
    };

    const multiplier = industryMultipliers[inputs.industry as keyof typeof industryMultipliers];
    
    // Calculate potential savings
    const potentialAutomation = multiplier.automationPotential;
    const additionalAutomation = potentialAutomation - (currentAuto / 100);
    const costReduction = multiplier.costReduction * additionalAutomation;
    const efficiencyGain = multiplier.efficiencyGain * additionalAutomation;
    
    // Annual savings calculations
    const laborCostSavings = (revenue * 0.3) * costReduction; // Assuming 30% of revenue is labor costs
    const efficiencySavings = (revenue * 0.2) * efficiencyGain; // Assuming 20% efficiency gains
    const operationalSavings = (revenue * 0.1) * additionalAutomation; // 10% operational savings
    
    const totalAnnualSavings = laborCostSavings + efficiencySavings + operationalSavings;
    const implementationCost = revenue * 0.05; // 5% of revenue for implementation
    const netAnnualSavings = totalAnnualSavings - (implementationCost * 0.1); // Ongoing costs
    
    const roi = ((netAnnualSavings * 3) - implementationCost) / implementationCost * 100; // 3-year ROI
    const paybackPeriod = implementationCost / netAnnualSavings;
    
    setResults({
      totalAnnualSavings: Math.round(totalAnnualSavings),
      implementationCost: Math.round(implementationCost),
      netAnnualSavings: Math.round(netAnnualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      threeYearValue: Math.round(netAnnualSavings * 3),
      automationIncrease: Math.round(additionalAutomation * 100)
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">AI ROI Calculator</h3>
        <p className="text-lg text-gray-600">
          Calculate your potential return on investment from AI implementation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Annual Revenue ($)
          </label>
          <input
            type="number"
            value={inputs.annualRevenue}
            onChange={(e) => setInputs({...inputs, annualRevenue: e.target.value})}
            placeholder="100000000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Employees
          </label>
          <input
            type="number"
            value={inputs.employees}
            onChange={(e) => setInputs({...inputs, employees: e.target.value})}
            placeholder="1000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Current Automation Level (%)
          </label>
          <input
            type="number"
            value={inputs.currentAutomation}
            onChange={(e) => setInputs({...inputs, currentAutomation: e.target.value})}
            placeholder="20"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Industry
          </label>
          <select
            value={inputs.industry}
            onChange={(e) => setInputs({...inputs, industry: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="manufacturing">Manufacturing</option>
            <option value="financial">Financial Services</option>
            <option value="healthcare">Healthcare</option>
            <option value="retail">Retail</option>
            <option value="logistics">Logistics</option>
          </select>
        </div>
      </div>

      <div className="text-center mb-8">
        <button
          onClick={calculateROI}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Calculate My AI ROI
        </button>
      </div>

      {results && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
          <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Your AI Transformation Potential</h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                ${results.totalAnnualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {results.roi}%
              </div>
              <div className="text-sm text-gray-600">3-Year ROI</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {results.paybackPeriod} years
              </div>
              <div className="text-sm text-gray-600">Payback Period</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">
                ${results.threeYearValue.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">3-Year Value Creation</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600 mb-2">
                +{results.automationIncrease}%
              </div>
              <div className="text-sm text-gray-600">Automation Increase</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-100 rounded-lg">
            <p className="text-sm text-green-800 text-center">
              <strong>Implementation Cost:</strong> ${results.implementationCost.toLocaleString()} | 
              <strong> Net Annual Savings:</strong> ${results.netAnnualSavings.toLocaleString()}
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 mb-4">
          * Calculations are estimates based on industry averages and may vary based on specific implementation details.
        </p>
        <a
          href="tel:+13024640950"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Get Detailed Analysis
        </a>
      </div>
    </div>
  );
}