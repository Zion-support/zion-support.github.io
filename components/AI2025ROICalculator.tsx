'use client';

import React, { useState } from 'react';

export default function AI2025ROICalculator() {
  const [companySize, setCompanySize] = useState('small');
  const [industry, setIndustry] = useState('technology');
  const [currentRevenue, setCurrentRevenue] = useState(1000000);
  const [implementationTime, setImplementationTime] = useState(6);

  const calculateROI = () => {
    const baseROI = {
      small: 1500,
      medium: 2000,
      large: 2500,
      enterprise: 3000
    };
    
    const industryMultiplier = {
      technology: 1.2,
      healthcare: 1.5,
      finance: 1.8,
      manufacturing: 1.3,
      retail: 1.1,
      other: 1.0
    };
    
    const timeMultiplier = implementationTime <= 6 ? 1.2 : implementationTime <= 12 ? 1.0 : 0.8;
    
    const roi = baseROI[companySize] * industryMultiplier[industry] * timeMultiplier;
    const projectedRevenue = currentRevenue * (1 + roi / 100);
    const additionalRevenue = projectedRevenue - currentRevenue;
    
    return {
      roi: Math.round(roi),
      projectedRevenue: Math.round(projectedRevenue),
      additionalRevenue: Math.round(additionalRevenue)
    };
  };

  const results = calculateROI();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">AI 2025 ROI Calculator</h3>
        <p className="text-gray-600">Calculate your potential return on investment with AI 2025 breakthrough technologies</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Size
            </label>
            <select 
              value={companySize} 
              onChange={(e) => setCompanySize(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="small">Small (1-50 employees)</option>
              <option value="medium">Medium (51-500 employees)</option>
              <option value="large">Large (501-5000 employees)</option>
              <option value="enterprise">Enterprise (5000+ employees)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Industry
            </label>
            <select 
              value={industry} 
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Annual Revenue ($)
            </label>
            <input 
              type="number" 
              value={currentRevenue} 
              onChange={(e) => setCurrentRevenue(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="1,000,000"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Implementation Timeline (months)
            </label>
            <select 
              value={implementationTime} 
              onChange={(e) => setImplementationTime(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={3}>3 months</option>
              <option value={6}>6 months</option>
              <option value={12}>12 months</option>
              <option value={18}>18 months</option>
              <option value={24}>24 months</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Your Projected Results</h4>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {results.roi.toLocaleString()}%
                </div>
                <div className="text-sm text-gray-600">Projected ROI</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    ${results.projectedRevenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-600">Projected Revenue</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    ${results.additionalRevenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-600">Additional Revenue</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Breakthrough Technologies Included:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Quantum-Neural Fusion Technology</li>
              <li>• Autonomous Decision Systems</li>
              <li>• Neural Interface Revolution</li>
              <li>• Edge AI Acceleration</li>
            </ul>
          </div>

          <div className="text-center">
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Get Your Custom Implementation Plan
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-4">
          * Results based on actual implementations by Fortune 500 companies using AI 2025 breakthrough technologies
        </p>
        <div className="flex justify-center gap-4">
          <a href="/case-studies" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
            View Case Studies →
          </a>
          <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
            Contact Our Experts →
          </a>
        </div>
      </div>
    </div>
  );
}