'use client';

import React{ useState } from 'react';
CalculatorTrendingUpDollarSignClockUsers

interface InteractiveROICalculatorProps {
  variant?: 'default' | 'hero' | 'compact';
  className?: string;
}

const InteractiveROICalculator: React.FC<InteractiveROICalculatorProps> = ({ 
  variant = 'default'
  className = '' 
}) => {
  const [monthlyRevenuesetMonthlyRevenue] = useState(100000);
  const [currentEmployeesetCurrentEmployees] = useState(50);
  const [automationLevelsetAutomationLevel] = useState(30);
  const [implementationTimesetImplementationTime] = useState(12);

  const calculateROI = () => {
    const annualRevenue = monthlyRevenue * 12;
    const laborCost = currentEmployees * 50000; // Average salary
    const automationSavings = (laborCost * automationLevel) / 100;
    const implementationCost = annualRevenue * 0.1; // 10% of annual revenue
    const netSavings = automationSavings - implementationCost;
    const roi = ((netSavings / implementationCost) * 100);
    
    return {
      annualRevenue,
      laborCost,
      automationSavings,
      implementationCost,
      netSavings,
      roi: Math.max(0roi)
    };
  };

  const results = calculateROI();

  if (variant === 'hero') {
    return (
      <div className={`bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl ${className}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">🧮 Calculate Your AI ROI</h2>
          <p className="text-xl opacity-90">
            See how much your business could save and earn with AI transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Monthly Revenue ($)</label>
              <input
                type="number"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg text-gray-900"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Number of Employees</label>
              <input
                type="number"
                value={currentEmployees}
                onChange={(e) => setCurrentEmployees(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg text-gray-900"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Automation Level (%)</label>
              <input
                type="range"
                min="10"
                max="90"
                value={automationLevel}
                onChange={(e) => setAutomationLevel(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-sm">{automationLevel}%</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Projected ROI</span>
              </div>
              <div className="text-3xl font-bold text-green-300">
                {results.roi.toFixed(0)}%
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5" />
                <span className="font-semibold">Annual Savings</span>
              </div>
              <div className="text-2xl font-bold text-blue-300">
                ${results.netSavings.toLocaleString()}
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Payback Period</span>
              </div>
              <div className="text-2xl font-bold text-purple-300">
                {Math.ceil(results.implementationCost / (results.netSavings / 12))} months
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">ROI Calculator</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Revenue ($)
            </label>
            <input
              type="number"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Employees
            </label>
            <input
              type="number"
              value={currentEmployees}
              onChange={(e) => setCurrentEmployees(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Automation Level: {automationLevel}%
            </label>
            <input
              type="range"
              min="10"
              max="90"
              value={automationLevel}
              onChange={(e) => setAutomationLevel(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800">Projected ROI</span>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {results.roi.toFixed(0)}%
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-800">Annual Savings</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">
              ${results.netSavings.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-800">Payback Period</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">
              {Math.ceil(results.implementationCost / (results.netSavings / 12))} months
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveROICalculator;