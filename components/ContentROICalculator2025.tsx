import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Users, Zap } from 'lucide-react';

const ContentROICalculator2025: React.FC = () => {
  const [inputs, setInputs] = useState({
    currentRevenue: 1000000,
    currentEmployees: 50,
    currentEfficiency: 70,
    aiImplementationCost: 200000,
    timeToImplement: 6
  });

  const [results, setResults] = useState({
    efficiencyGain: 0,
    costSavings: 0,
    revenueIncrease: 0,
    totalROI: 0,
    paybackPeriod: 0
  });

  const calculateROI = () => {
    const { currentRevenue, currentEmployees, currentEfficiency, aiImplementationCost, timeToImplement } = inputs;
    
    // Calculate efficiency gain (AI typically provides 30-50% efficiency improvement)
    const efficiencyGain = Math.min(50, Math.max(10, 85 - currentEfficiency));
    
    // Calculate cost savings from efficiency gains
    const avgSalary = 75000; // Average salary assumption
    const costSavings = (currentEmployees * avgSalary * efficiencyGain / 100);
    
    // Calculate revenue increase (efficiency gains often lead to revenue growth)
    const revenueIncrease = currentRevenue * (efficiencyGain / 100) * 0.6; // 60% of efficiency gain translates to revenue
    
    // Calculate total ROI
    const totalBenefits = costSavings + revenueIncrease;
    const totalROI = ((totalBenefits - aiImplementationCost) / aiImplementationCost) * 100;
    
    // Calculate payback period
    const monthlyBenefits = totalBenefits / 12;
    const paybackPeriod = aiImplementationCost / monthlyBenefits;
    
    setResults({
      efficiencyGain: Math.round(efficiencyGain),
      costSavings: Math.round(costSavings),
      revenueIncrease: Math.round(revenueIncrease),
      totalROI: Math.round(totalROI),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10
    });
  };

  React.useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Content ROI Calculator 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate the potential return on investment for implementing AI solutions in your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Calculator className="w-6 h-6 mr-3 text-cyan-400" />
              Business Metrics
            </h3>

            <div className="space-y-6">
              {/* Current Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Annual Revenue ($)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="1,000,000"
                  />
                </div>
              </div>

              {/* Current Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Employees
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={inputs.currentEmployees}
                    onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="50"
                  />
                </div>
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Efficiency Level (%)
                </label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={inputs.currentEfficiency}
                    onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value) || 0)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="70"
                  />
                </div>
              </div>

              {/* AI Implementation Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  AI Implementation Cost ($)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={inputs.aiImplementationCost}
                    onChange={(e) => handleInputChange('aiImplementationCost', parseInt(e.target.value) || 0)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="200,000"
                  />
                </div>
              </div>

              {/* Time to Implement */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Implementation Time (months)
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    min="1"
                    max="24"
                    value={inputs.timeToImplement}
                    onChange={(e) => handleInputChange('timeToImplement', parseInt(e.target.value) || 1)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
              ROI Projections
            </h3>

            <div className="space-y-6">
              {/* Efficiency Gain */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Efficiency Gain</span>
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white">{results.efficiencyGain}%</div>
                <div className="text-sm text-gray-400">Productivity improvement</div>
              </div>

              {/* Cost Savings */}
              <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Annual Cost Savings</span>
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white">
                  ${results.costSavings.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">From efficiency gains</div>
              </div>

              {/* Revenue Increase */}
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Revenue Increase</span>
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white">
                  ${results.revenueIncrease.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">Annual revenue growth</div>
              </div>

              {/* Total ROI */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Total ROI</span>
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white">
                  {results.totalROI}%
                </div>
                <div className="text-sm text-gray-400">Return on investment</div>
              </div>

              {/* Payback Period */}
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Payback Period</span>
                  <Clock className="w-5 h-5 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-white">
                  {results.paybackPeriod} months
                </div>
                <div className="text-sm text-gray-400">Time to recover investment</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Detailed Analysis
              </button>
              <button className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Download Report
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm max-w-4xl mx-auto">
            * ROI calculations are estimates based on industry averages and typical AI implementation results. 
            Actual results may vary based on your specific business model, implementation approach, and market conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentROICalculator2025;