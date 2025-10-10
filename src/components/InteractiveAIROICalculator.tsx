import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Clock, Target, ArrowRight, RefreshCw } from 'lucide-react';

interface InteractiveAIROICalculatorProps {
  className?: string;
}

interface CalculationInputs {
  currentEmployees: number;
  averageSalary: number;
  currentEfficiency: number;
  aiImplementationCost: number;
  timeToImplement: number;
}

interface CalculationResults {
  monthlySavings: number;
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
  efficiencyGain: number;
  costReduction: number;
}

export default function InteractiveAIROICalculator({ className = '' }: InteractiveAIROICalculatorProps) {
  const [inputs, setInputs] = useState<CalculationInputs>({
    currentEmployees: 50,
    averageSalary: 75000,
    currentEfficiency: 70,
    aiImplementationCost: 150000,
    timeToImplement: 6
  });

  const [results, setResults] = useState<CalculationResults>({
    monthlySavings: 0,
    annualSavings: 0,
    roi: 0,
    paybackPeriod: 0,
    efficiencyGain: 0,
    costReduction: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const { currentEmployees, averageSalary, currentEfficiency, aiImplementationCost, timeToImplement } = inputs;
      
      // Calculate efficiency gain (AI typically improves efficiency by 30-50%)
      const efficiencyGain = Math.min(50, Math.max(20, 100 - currentEfficiency + 10));
      
      // Calculate cost reduction percentage
      const costReduction = (efficiencyGain / 100) * 0.7; // 70% of efficiency gain translates to cost reduction
      
      // Calculate monthly savings
      const monthlySalaryCost = (currentEmployees * averageSalary) / 12;
      const monthlySavings = monthlySalaryCost * costReduction;
      
      // Calculate annual savings
      const annualSavings = monthlySavings * 12;
      
      // Calculate ROI
      const roi = ((annualSavings - aiImplementationCost) / aiImplementationCost) * 100;
      
      // Calculate payback period in months
      const paybackPeriod = aiImplementationCost / monthlySavings;

      setResults({
        monthlySavings,
        annualSavings,
        roi: Math.max(0, roi),
        paybackPeriod: Math.max(0, paybackPeriod),
        efficiencyGain,
        costReduction: costReduction * 100
      });
      
      setIsCalculating(false);
    }, 1000);
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: keyof CalculationInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className={`bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <Calculator className="w-4 h-4 mr-2" />
            Interactive ROI Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calculate Your
            <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              AI Investment ROI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See exactly how much you can save and earn with our AI-powered solutions. 
            Get instant, personalized ROI calculations based on your business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-cyan-400" />
                Your Business Metrics
              </h3>

              <div className="space-y-6">
                {/* Current Employees */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    <Users className="w-4 h-4 inline mr-2" />
                    Current Employees
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    value={inputs.currentEmployees}
                    onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>10</span>
                    <span className="text-cyan-400 font-bold">{inputs.currentEmployees}</span>
                    <span>1000+</span>
                  </div>
                </div>

                {/* Average Salary */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    <DollarSign className="w-4 h-4 inline mr-2" />
                    Average Annual Salary
                  </label>
                  <input
                    type="range"
                    min="30000"
                    max="200000"
                    step="5000"
                    value={inputs.averageSalary}
                    onChange={(e) => handleInputChange('averageSalary', parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>$30K</span>
                    <span className="text-cyan-400 font-bold">{formatCurrency(inputs.averageSalary)}</span>
                    <span>$200K+</span>
                  </div>
                </div>

                {/* Current Efficiency */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    <TrendingUp className="w-4 h-4 inline mr-2" />
                    Current Efficiency Level
                  </label>
                  <input
                    type="range"
                    min="30"
                    max="90"
                    value={inputs.currentEfficiency}
                    onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>30%</span>
                    <span className="text-cyan-400 font-bold">{inputs.currentEfficiency}%</span>
                    <span>90%</span>
                  </div>
                </div>

                {/* AI Implementation Cost */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    <Calculator className="w-4 h-4 inline mr-2" />
                    AI Implementation Cost
                  </label>
                  <input
                    type="range"
                    min="50000"
                    max="500000"
                    step="10000"
                    value={inputs.aiImplementationCost}
                    onChange={(e) => handleInputChange('aiImplementationCost', parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>$50K</span>
                    <span className="text-cyan-400 font-bold">{formatCurrency(inputs.aiImplementationCost)}</span>
                    <span>$500K+</span>
                  </div>
                </div>

                {/* Time to Implement */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Implementation Timeline (Months)
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="24"
                    value={inputs.timeToImplement}
                    onChange={(e) => handleInputChange('timeToImplement', parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>3 months</span>
                    <span className="text-cyan-400 font-bold">{inputs.timeToImplement} months</span>
                    <span>24 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/20 to-cyan-900/20 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
                Your ROI Results
                {isCalculating && <RefreshCw className="w-5 h-5 ml-3 animate-spin text-cyan-400" />}
              </h3>

              {!isCalculating && (
                <div className="space-y-6">
                  {/* ROI Percentage */}
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="text-5xl font-bold text-green-400 mb-2">
                      {formatPercentage(results.roi)}
                    </div>
                    <div className="text-white font-medium">Return on Investment</div>
                    <div className="text-gray-400 text-sm mt-1">Annual ROI</div>
                  </div>

                  {/* Monthly Savings */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {formatCurrency(results.monthlySavings)}
                      </div>
                      <div className="text-white text-sm">Monthly Savings</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">
                        {formatCurrency(results.annualSavings)}
                      </div>
                      <div className="text-white text-sm">Annual Savings</div>
                    </div>
                  </div>

                  {/* Payback Period */}
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-1">
                      {results.paybackPeriod.toFixed(1)} months
                    </div>
                    <div className="text-white text-sm">Payback Period</div>
                  </div>

                  {/* Efficiency Gains */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-pink-400 mb-1">
                        {formatPercentage(results.efficiencyGain)}
                      </div>
                      <div className="text-white text-sm">Efficiency Gain</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">
                        {formatPercentage(results.costReduction)}
                      </div>
                      <div className="text-white text-sm">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">
                Ready to Achieve These Results?
              </h4>
              <p className="text-cyan-100 mb-6">
                Get a personalized AI implementation plan tailored to your business needs.
              </p>
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold hover:bg-cyan-50 transition-all duration-200 flex items-center mx-auto">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
        }
      `}</style>
    </div>
  );
}