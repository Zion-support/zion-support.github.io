'use client';

import React, { useState } from 'react';

export default function ROICalculator() {
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    employees: '',
    currentEfficiency: 70,
    automationLevel: 50,
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const revenue = parseFloat(formData.monthlyRevenue) || 0;
    const employees = parseInt(formData.employees) || 0;
    const currentEfficiency = formData.currentEfficiency;
    const automationLevel = formData.automationLevel;

    // Calculate potential savings
    const efficiencyImprovement = (automationLevel / 100) * 0.4; // Up to 40% improvement
    const timeSaved = efficiencyImprovement * 0.3; // 30% of work time can be automated
    const monthlySavings = (revenue * 0.3 * timeSaved) + (employees * 2000 * timeSaved); // 30% of revenue + $2K per employee per month
    
    // Calculate implementation cost (simplified)
    const implementationCost = Math.max(5000, revenue * 0.1); // 10% of monthly revenue, minimum $5K
    
    // Calculate ROI
    const annualSavings = monthlySavings * 12;
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / monthlySavings;

    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      implementationCost: Math.round(implementationCost),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🧮 ROI Calculator
        </h2>
        <p className="text-gray-600">
          Calculate the potential return on investment for AI automation in your business
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Revenue ($)
          </label>
          <input
            type="number"
            value={formData.monthlyRevenue}
            onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your monthly revenue"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Employees
          </label>
          <input
            type="number"
            value={formData.employees}
            onChange={(e) => handleInputChange('employees', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter number of employees"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Process Efficiency: {formData.currentEfficiency}%
          </label>
          <input
            type="range"
            min="30"
            max="90"
            value={formData.currentEfficiency}
            onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Low (30%)</span>
            <span>High (90%)</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Desired Automation Level: {formData.automationLevel}%
          </label>
          <input
            type="range"
            min="20"
            max="80"
            value={formData.automationLevel}
            onChange={(e) => handleInputChange('automationLevel', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Basic (20%)</span>
            <span>Advanced (80%)</span>
          </div>
        </div>

        <button
          onClick={calculateROI}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Calculate ROI
        </button>
      </div>

      {results && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Your Potential Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                ${results.monthlySavings.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Monthly Savings</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                ${results.annualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {results.roi}%
              </div>
              <div className="text-sm text-gray-600">ROI</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {results.paybackPeriod} months
              </div>
              <div className="text-sm text-gray-600">Payback Period</div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="text-sm text-gray-600 mb-4">
              Implementation Cost: <span className="font-semibold">${results.implementationCost.toLocaleString()}</span>
            </div>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      )}

      <div className="mt-6 text-xs text-gray-500 text-center">
        <p>
          * This is an estimate based on industry averages. Actual results may vary.
          <br />
          Contact us for a detailed analysis of your specific business.
        </p>
      </div>
    </div>
  );
}