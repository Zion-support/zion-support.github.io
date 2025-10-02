import React, { useState, useEffect } from 'react';

interface ROIResults {
  monthlySavings: number;
  annualSavings: number;
  totalInvestment: number;
  paybackPeriod: number;
  threeYearROI: number;
  fiveYearROI: number;
}

export default function AIROICalculator() {
  const [formData, setFormData] = useState({
    employees: 100,
    currentAutomation: 20,
    industry: 'manufacturing',
    monthlyRevenue: 1000000,
    currentEfficiency: 70
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industryMultipliers = {
    manufacturing: 1.2,
    healthcare: 1.1,
    finance: 1.3,
    retail: 1.0,
    technology: 1.4,
    education: 0.9
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const { employees, currentAutomation, industry, monthlyRevenue, currentEfficiency } = formData;
      
      const industryMultiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || 1.0;
      
      // Base calculations
      const automationPotential = Math.min(95, currentAutomation + 60); // Max 95% automation
      const efficiencyGain = (automationPotential - currentAutomation) / 100;
      
      // Cost savings calculations
      const avgSalary = 75000; // Average salary
      const timeSavings = employees * efficiencyGain * 0.3; // 30% of time saved
      const monthlySavings = timeSavings * (avgSalary / 12) * industryMultiplier;
      
      // Revenue impact
      const revenueIncrease = monthlyRevenue * efficiencyGain * 0.15; // 15% revenue increase
      
      // Total monthly impact
      const totalMonthlySavings = monthlySavings + revenueIncrease;
      
      // Investment calculations
      const baseInvestment = employees * 500; // $500 per employee
      const totalInvestment = baseInvestment * industryMultiplier;
      
      // ROI calculations
      const annualSavings = totalMonthlySavings * 12;
      const paybackPeriod = totalInvestment / totalMonthlySavings;
      const threeYearROI = ((annualSavings * 3) - totalInvestment) / totalInvestment * 100;
      const fiveYearROI = ((annualSavings * 5) - totalInvestment) / totalInvestment * 100;
      
      setResults({
        monthlySavings: Math.round(totalMonthlySavings),
        annualSavings: Math.round(annualSavings),
        totalInvestment: Math.round(totalInvestment),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        threeYearROI: Math.round(threeYearROI),
        fiveYearROI: Math.round(fiveYearROI)
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (field: string, value: number | string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          AI Transformation ROI Calculator
        </h3>
        <p className="text-lg text-gray-600">
          Calculate the potential return on investment for AI automation in your organization
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Employees
            </label>
            <input
              type="number"
              value={formData.employees}
              onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="1"
              max="10000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Automation Level (%)
            </label>
            <input
              type="range"
              value={formData.currentAutomation}
              onChange={(e) => handleInputChange('currentAutomation', parseInt(e.target.value))}
              className="w-full"
              min="0"
              max="50"
            />
            <div className="text-sm text-gray-500 text-center mt-1">
              {formData.currentAutomation}%
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="manufacturing">Manufacturing</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
              <option value="technology">Technology</option>
              <option value="education">Education</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Revenue ($)
            </label>
            <input
              type="number"
              value={formData.monthlyRevenue}
              onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="10000"
              step="10000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Efficiency Level (%)
            </label>
            <input
              type="range"
              value={formData.currentEfficiency}
              onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
              className="w-full"
              min="30"
              max="90"
            />
            <div className="text-sm text-gray-500 text-center mt-1">
              {formData.currentEfficiency}%
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {isCalculating ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : results ? (
            <>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Projected Results
                </h4>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      ${results.monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      ${results.annualSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {results.paybackPeriod} months
                    </div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">
                      ${results.totalInvestment.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Total Investment</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {results.threeYearROI}%
                      </div>
                      <div className="text-sm text-gray-600">3-Year ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {results.fiveYearROI}%
                      </div>
                      <div className="text-sm text-gray-600">5-Year ROI</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="text-yellow-600 text-xl mr-3">💡</div>
                  <div>
                    <h5 className="font-semibold text-yellow-800 mb-1">
                      Key Insights
                    </h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Achieve up to 95% process automation</li>
                      <li>• Reduce operational costs by 40-60%</li>
                      <li>• Increase productivity by 200-400%</li>
                      <li>• Improve quality and consistency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={calculateROI}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Recalculate ROI
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 mb-4">
          * Calculations are estimates based on industry averages and may vary based on specific implementation details.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Get Detailed Analysis
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}